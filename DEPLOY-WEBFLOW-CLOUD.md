# Deploy a Webflow Cloud — pasos exactos

Este proyecto ya está migrado a Astro + adaptador de Cloudflare, que es lo que exige el App Challenge de Nerdearla (deadline **viernes 25/9, 18:00 ART**).

## 1. Subir este código a GitHub
Tenés dos opciones:

**Opción A — reemplazar tu repo actual (recomendado, conserva el link ya conocido):**
```bash
# Descomprimí este zip reemplazando el contenido de tu carpeta local del repo EduContext
cd ruta/a/tu/EduContext
rm -rf css js data index.html   # el contenido viejo, ya migrado
# copiá adentro TODO el contenido de este zip (incluido node_modules NO, .gitignore lo excluye)
git add .
git commit -m "Migrar a Astro + Webflow Cloud"
git push
```

**Opción B — repo nuevo:** creá un repo vacío en GitHub, subí este contenido tal cual.

## 2. Conectar con Webflow Cloud
1. Entrá a tu Webflow Dashboard → el Workspace donde quieras crear la app
2. **Create app** → **Deploy app**
3. Elegí **"Bring your own app"** (no "Clone a starter template", porque ya tenés el código)
4. Autorizá GitHub si no lo hiciste antes, instalá la Webflow Cloud GitHub App en tu cuenta
5. Seleccioná el repo (EduContext)
6. Elegí un **mount path** (ej. `/educontext` o dejalo en la raíz si tu app va a vivir en su propio dominio — Webflow Cloud ahora permite apps sin sitio asociado)
7. Confirmá y **Deploy**

Webflow Cloud reemplaza automáticamente el placeholder `CLOUD_MOUNT_PATH` en `astro.config.mjs` por el path real que elijas — no lo edites vos.

## 3. Variables de entorno (para cuando esté lista la IA conversacional)
En **Apps → tu app → Settings → Environment Variables**, agregá `AI_API_KEY` con tu clave real. Nunca la pongas en el código ni en un commit.

## 4. Verificar
Cada push a la rama conectada dispara un deploy automático. Webflow Cloud te da una URL pública — abrila y probá el flujo completo (perfiles, búsqueda, dashboard) antes de la entrega.

## Si algo falla
- Node debe ser 22+ y el gestor de paquetes **npm** (no yarn/pnpm) — Webflow Cloud solo soporta npm
- Si el build falla por el adaptador, revisá que `wrangler.json` y `webflow.json` estén en la raíz del repo (no dentro de una subcarpeta)
