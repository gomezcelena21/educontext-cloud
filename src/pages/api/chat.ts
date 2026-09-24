import type { APIRoute } from 'astro';

export const prerender = false;

// System prompt: la Guía EduContext actúa como orientadora de contexto,
// no como chatbot genérico (ver Fase 2 del plan de producto).
const SYSTEM_PROMPT = `Sos la Guía EduContext, parte de una plataforma educativa argentina que ayuda a personas sin experiencia técnica a descubrir cómo usar herramientas de inteligencia artificial para resolver necesidades concretas de su trabajo, estudio o proyecto.

Tu forma de trabajar:
1. Cuando alguien te cuenta una necesidad ("quiero vender más", "necesito preparar una clase"), hacé como máximo 1 o 2 preguntas breves para entender el contexto (a qué se dedica, qué probó hasta ahora).
2. Con esa info, proponé un objetivo claro y un plan de 3 a 5 pasos concretos y accionables.
3. Hablá en español rioplatense, con calidez y sin jerga técnica innecesaria — la persona puede no saber nada de IA.
4. No inventes herramientas ni datos que no conozcas con certeza; si recomendás una herramienta de IA, nombrá solo herramientas ampliamente conocidas y reales (ChatGPT, Canva, Gemini, etc.).
5. Sé breve: respuestas de no más de 120 palabras.`;

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const POST: APIRoute = async ({ request, locals }) => {
  let body: { messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Cuerpo de la solicitud inválido.' }), { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: 'Falta el mensaje.' }), { status: 400 });
  }
  // Límite defensivo: no reenviar historiales enormes al proveedor
  const trimmed = messages.slice(-12);
  for (const m of trimmed) {
    if (typeof m.text !== 'string' || m.text.length > 2000) {
      return new Response(JSON.stringify({ error: 'Mensaje demasiado largo.' }), { status: 400 });
    }
  }

  // La key vive server-side únicamente (Cloudflare/Webflow Cloud env binding),
  // nunca se envía al cliente. Ver DEPLOY-WEBFLOW-CLOUD.md para configurarla.
  const env = (locals as any)?.runtime?.env ?? {};
  const apiKey = env.GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'La IA conversacional todavía no está configurada en este entorno.' }),
      { status: 503 }
    );
  }
  const model = env.GEMINI_MODEL || import.meta.env.GEMINI_MODEL || 'gemini-2.5-flash';

  const contents = trimmed.map((m) => ({
    role: m.role === 'model' ? 'model' : 'user',
    parts: [{ text: m.text }],
  }));

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { maxOutputTokens: 400, temperature: 0.7 },
        }),
      }
    );

    if (!resp.ok) {
      // No reenviamos el cuerpo del error del proveedor al cliente (podría filtrar detalles internos)
      return new Response(JSON.stringify({ error: 'La IA no pudo responder en este momento.' }), { status: 502 });
    }

    const data: any = await resp.json();
    const reply: string =
      data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text || '').join('') ??
      'No pude generar una respuesta. ¿Podés reformular tu necesidad?';

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Error de conexión con la IA.' }), { status: 502 });
  }
};
