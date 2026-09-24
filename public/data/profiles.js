const categories = [
  { id: "oficios",        label: "🛠️ Oficios",                   ids: ["plomeria","electricista","carpinteria","pintor","limpieza","jardineria","refrigeracion","gasista","mecanica"] },
  { id: "profesiones",    label: "💼 Profesiones",                ids: ["marketing","enfermeria","derecho","arquitectura","fotografia","veterinaria","logistica","ventas"] },
  { id: "emprendimiento", label: "💄 Emprendimiento & Lifestyle", ids: ["cosmetica","gastronomia","peluqueria","costura","contenido","emprendedores"] },
  { id: "estudiantes",    label: "🎓 Estudiantes",                ids: ["secundario","universitario","terciario","profesores"] },
  { id: "tecnologia",     label: "📊 Tecnología & Datos",         ids: ["datascience","bigdata"] },
  { id: "vida",           label: "🌍 Vida & Cultura",             ids: ["cotidiano","adultos","mamas","historia","teologia"] }
];

const profiles = [
{
  id:"plomeria", emoji:"🔧", name:"Plomería & Oficios",
  area:"Oficios & Técnico",
  desc:"Digitaliza tu negocio de oficios: gestiona clientes, presupuestos, redes sociales y aprende con IA.",
  tags:["Gestión","Presupuestos","Clientes"],
  welcome:"Los oficios son negocios serios y merecen herramientas serias. Aquí aprenderás a organizar tu trabajo, conseguir más clientes y profesionalizar tu servicio usando tecnología simple.",
  tools:[
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Gestiona todos tus clientes, envía presupuestos, fotos del trabajo y organiza tu agenda desde el celular.",tags:["Clientes","Presupuestos","Organización"]},
    {icon:"📋",name:"Google Forms",badge:"free",desc:"Crea formularios para que los clientes soliciten tu servicio, incluyendo dirección, tipo de problema y fotos.",tags:["Solicitudes","Formularios","Datos"]},
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Redacta presupuestos profesionales, responde mensajes difíciles, crea listas de materiales y busca soluciones técnicas.",tags:["Presupuestos","Técnico","Comunicación"]},
    {icon:"📸",name:"Google Fotos",badge:"free",desc:"Documenta antes y después de cada trabajo. Crea un portafolio visual de tus mejores trabajos.",tags:["Portafolio","Antes/Después","Evidencia"]},
    {icon:"💰",name:"Factura Móvil",badge:"free",desc:"Genera facturas y recibos profesionales desde el celular. Dale seriedad a tu negocio.",tags:["Facturas","Formal","Profesional"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece en Google Maps cuando alguien busca plomero cerca. Gratis y muy efectivo para conseguir clientes.",tags:["Google Maps","Clientes","Local"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Redactar presupuesto profesional",body:"Ayúdame a redactar un presupuesto profesional para un trabajo de [tipo de trabajo]. Materiales necesarios: [lista]. Mano de obra: [días/horas]. Incluye: descripción clara del trabajo, detalle de materiales con precios, costo de mano de obra, garantía ofrecida, forma de pago y datos de contacto. Tono profesional y confiable."},
    {cat:"Clientes",level:"Básico",title:"Responder queja de cliente",body:"Un cliente se quejó porque [describe el problema]. Escríbeme una respuesta profesional por WhatsApp que reconozca el inconveniente, muestre disposición a resolver, proponga una solución concreta y mantenga la relación. Tono calmado, profesional y empático."},
    {cat:"Marketing",level:"Básico",title:"Post para redes sociales",body:"Escribe 3 posts para Instagram/Facebook de mi negocio de [oficio]. Cada uno debe mostrar un trabajo realizado (antes y después), el problema que resolví y por qué llamarme a mí. Tono cercano. Incluye hashtags relevantes para encontrarme localmente."},
    {cat:"Técnico",level:"Intermedio",title:"Lista de materiales para trabajo",body:"Necesito la lista completa de materiales para [describir el trabajo técnico específico]. Incluye: cantidad de cada material, tipo y especificaciones técnicas, herramientas necesarias y orden en que se realizaría el trabajo. También dime posibles problemas que pueden surgir y cómo prevenirlos."}
  ],
  resources:[
    {icon:"🎓",type:"YouTube",name:"Tutoriales de Plomería",desc:"Busca en YouTube plomería paso a paso para encontrar miles de tutoriales gratuitos en español."},
    {icon:"📱",type:"App",name:"Google Business Profile",desc:"Configura tu perfil de negocio en Google Maps. Gratis. Clientes te encuentran cuando buscan localmente."},
    {icon:"💰",type:"App",name:"Factura Móvil",desc:"Apps gratuitas para emitir facturas desde el celular y llevar registro de ingresos y gastos."},
    {icon:"🌐",type:"Plataforma",name:"Workana / GetNinjas",desc:"Plataformas donde personas buscan técnicos y profesionales de oficios para trabajos específicos."},
    {icon:"📸",type:"Red Social",name:"Instagram para Oficios",desc:"Muchos técnicos consiguen clientes mostrando su trabajo con fotos de antes/después en Instagram."},
    {icon:"📋",type:"Herramienta",name:"Trello",desc:"Tablero simple para organizar tus trabajos pendientes, en proceso y completados. Gratis."}
  ],
  apps:[
    {title:"Aparecer en Google Maps",desc:"Registra tu negocio en Google Business Profile. Cuando alguien busque plomero en tu ciudad, apareces tú.",example:"Proceso: maps.google.com, Agregar negocio, Nombre, dirección, teléfono, fotos, Verificar."},
    {title:"Portafolio de trabajos en Instagram",desc:"Fotografía cada trabajo (antes y después). Publica con descripción del problema resuelto.",example:"Problema: goteras en baño. Solución: sellado y cambio de mesada. Escríbeme si tienes el mismo problema."},
    {title:"Presupuestos en WhatsApp Business",desc:"Configura mensajes automáticos y usa los mensajes rápidos para enviar tu presupuesto tipo en segundos.",example:"Presupuesto básico guardado: Para el trabajo de X, el costo estimado es $Y. Incluye materiales y mano de obra."},
    {title:"Conseguir clientes en plataformas",desc:"Regístrate en GetNinjas, Workana o similares. Son plataformas donde personas buscan técnicos de confianza.",example:"Perfil completo + foto profesional + reseñas de clientes anteriores = más trabajos."}
  ],
  tips:[
    {text:"<strong>Google Maps es tu mejor vitrina</strong>. Un perfil completo y con fotos puede darte 10-20 clientes extra por mes sin gastar."},
    {text:"<strong>Pide reseñas siempre</strong>. Al terminar un buen trabajo, pide al cliente que deje una reseña en Google. Vale oro."},
    {text:"<strong>Fotos antes y después</strong>: tu portafolio visual es tu curriculum. Un cliente ve tus fotos y ya sabe que eres profesional."},
    {text:"<strong>Sé puntual y comunicativo</strong>: la puntualidad y responder rápido diferencia a los buenos técnicos de los mediocres."},
    {text:"<strong>WhatsApp Business</strong> es tu oficina en el bolsillo. Configurado bien, funciona como un sistema de gestión de clientes."}
  ]
},
{
  id:"electricista", emoji:"🔌", name:"Electricista",
  area:"Oficios & Técnico",
  desc:"Digitaliza tu negocio eléctrico: consigue clientes, gestiona presupuestos, organiza trabajos y usa IA para soluciones técnicas.",
  tags:["Instalaciones","Presupuestos","Clientes"],
  welcome:"El trabajo eléctrico es esencial y siempre tiene demanda. Con las herramientas correctas puedes conseguir más clientes, cobrar mejor, organizarte y profesionalizar tu servicio sin complicarte la vida.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Consulta soluciones técnicas, redacta presupuestos profesionales, genera listas de materiales y crea contenido para redes.",tags:["Técnico","Presupuestos","Materiales"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando alguien busca electricista cerca. El perfil completo con fotos y reseñas es tu mejor publicidad.",tags:["Google Maps","Clientes","Local"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Envía presupuestos, coordina trabajos, manda fotos del avance y gestiona tus clientes desde el celular.",tags:["Clientes","Presupuestos","Coordinación"]},
    {icon:"📸",name:"Google Fotos",badge:"free",desc:"Documenta instalaciones antes y después. Crea un portafolio de tus trabajos que genere confianza.",tags:["Portafolio","Evidencia","Calidad"]},
    {icon:"💰",name:"Factura Móvil",badge:"free",desc:"Emite facturas y recibos profesionales desde el celular. Dale seriedad y formalidad a tu negocio.",tags:["Facturas","Formal","Profesional"]},
    {icon:"📋",name:"Trello",badge:"free",desc:"Organiza tus trabajos pendientes, en progreso y terminados. Nunca más olvidarte de un presupuesto.",tags:["Organización","Trabajos","Seguimiento"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Presupuesto de instalación eléctrica",body:"Ayúdame a redactar un presupuesto profesional para [tipo de trabajo eléctrico] en [tipo de inmueble]. Materiales necesarios: [lista]. Mano de obra estimada: [días/horas]. Incluye: descripción del trabajo, detalle de materiales, costo de mano de obra, garantía, forma de pago y mis datos de contacto."},
    {cat:"Técnico",level:"Intermedio",title:"Diagnóstico de falla eléctrica",body:"Un cliente tiene [descripción del problema eléctrico] en [tipo de instalación]. Ayúdame a identificar las causas más probables en orden de probabilidad. Para cada causa indícame: cómo verificarla con seguridad, herramientas necesarias, posible solución y advertencias de seguridad importantes."},
    {cat:"Marketing",level:"Básico",title:"Post para redes del electricista",body:"Escribe 3 posts para Instagram/Facebook de mi servicio de electricidad. Uno mostrando un trabajo realizado (antes/después), uno con un consejo de seguridad eléctrica para el hogar y uno con una promoción de [servicio]. Tono técnico pero accesible, confiable y local. Incluye hashtags para mi ciudad."},
    {cat:"Clientes",level:"Básico",title:"Explicar trabajo técnico al cliente",body:"Un cliente necesita entender por qué su instalación eléctrica necesita [tipo de intervención]. Explícame cómo explicárselo de forma simple, sin tecnicismos: qué tiene mal, por qué es peligroso no repararlo, qué implica la reparación y por qué tiene ese precio."}
  ],
  resources:[
    {icon:"📺",type:"YouTube",name:"Tutoriales de Electricidad",desc:"Miles de videos gratuitos sobre instalaciones eléctricas, tableros y normativas en español."},
    {icon:"📱",type:"App",name:"Google Business Profile",desc:"Perfil gratuito en Google Maps. Fundamental para que los clientes te encuentren cuando buscan electricista."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Electricistas en Facebook",desc:"Comunidades de electricistas latinoamericanos donde comparten dudas técnicas, precios y proveedores."},
    {icon:"💰",type:"App",name:"Factura Móvil",desc:"Facturas profesionales desde el celular. Gratis y fácil de usar para formalizar tu negocio."},
    {icon:"🎓",type:"Plataforma",name:"Cursos de Electricidad Online",desc:"Plataformas con cursos de electricidad industrial, domiciliaria y energías renovables con certificado."},
    {icon:"📋",type:"Herramienta",name:"Trello",desc:"Tablero gratuito para organizar trabajos: presupuestados, confirmados, en progreso y cobrados."}
  ],
  apps:[
    {title:"Aparecer en Google Maps gratis",desc:"Registra tu servicio en Google Business Profile. Cuando busquen electricista en tu zona, apareces en el mapa.",example:"Nombre: Electricidad [tu nombre] - [ciudad]. Agrega fotos de trabajos y pide reseñas a los clientes."},
    {title:"Presupuestos profesionales por WhatsApp",desc:"Usa ChatGPT para redactar el presupuesto, Canva para diseñarlo y envíalo como imagen profesional.",example:"Presupuesto con tu logo, descripción del trabajo, materiales, precio y garantía. Se ve serio y genera confianza."},
    {title:"Portafolio de instalaciones en fotos",desc:"Fotografía cada trabajo: tablero antes y después, instalación nueva, iluminación terminada.",example:"Álbum de Google Fotos organizado por tipo de trabajo. Muestras las fotos cuando el cliente duda."},
    {title:"Organizar trabajos con Trello",desc:"Un tablero simple con columnas: Presupuestado, Confirmado, En progreso, Cobrado.",example:"Tarjeta: Tablero casa Ramírez. Fecha: lunes. Presupuesto: enviado. Estado: esperando confirmación."}
  ],
  tips:[
    {text:"<strong>Google Maps es tu vendedor 24hs</strong>. Un perfil completo con fotos y reseñas trae clientes mientras dormís."},
    {text:"<strong>La seguridad siempre primero</strong>. Documenta que el trabajo cumple las normas. Te protege legalmente y da confianza al cliente."},
    {text:"<strong>Cobra el presupuesto por escrito</strong>. Un mensaje de WhatsApp aceptado ya es un acuerdo. Guarda todo."},
    {text:"<strong>Pide reseñas siempre</strong>. Al terminar un trabajo bien hecho, pídele al cliente que deje una reseña en Google."},
    {text:"<strong>Fotografía antes de tapar</strong>. Una foto del cableado antes de cerrar la pared te salva de futuros problemas."}
  ]
},
{
  id:"carpinteria", emoji:"🪚", name:"Carpintería & Ebanistería",
  area:"Oficios & Artesanía",
  desc:"Digitaliza tu taller de carpintería: muestra tu trabajo, gestiona pedidos, presupuesta proyectos y consigue más clientes.",
  tags:["Muebles","Presupuestos","Portafolio"],
  welcome:"La carpintería es un oficio que combina precisión técnica con creatividad artesanal. Con las herramientas digitales correctas puedes mostrar tu trabajo al mundo, conseguir más clientes y gestionar tu taller de forma profesional.",
  tools:[
    {icon:"📸",name:"Instagram / Pinterest",badge:"free",desc:"Las plataformas ideales para carpinteros. Muestra tus muebles, el proceso de fabricación y los materiales que usas.",tags:["Portafolio","Clientes","Visual"]},
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Redacta presupuestos, describe tus productos para la venta online, crea contenido para redes y gestiona consultas.",tags:["Presupuestos","Contenido","Ventas"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea catálogos de muebles, listas de precios, tarjetas de presentación y material de marketing profesional.",tags:["Catálogo","Precios","Branding"]},
    {icon:"📐",name:"SketchUp Free",badge:"free",desc:"Modelado 3D gratuito para mostrar al cliente cómo quedarán sus muebles antes de fabricarlos.",tags:["3D","Diseño","Clientes"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Gestión de pedidos, envío de presupuestos, fotos del avance de fabricación y coordinación de entrega.",tags:["Pedidos","Presupuestos","Entrega"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando alguien busca carpintería o muebles a medida en tu zona. Con fotos de tus trabajos.",tags:["Local","Clientes","Google Maps"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Presupuesto de mueble a medida",body:"Ayúdame a redactar un presupuesto profesional para fabricar [tipo de mueble] con estas características: [medidas, materiales, terminación]. Incluye: descripción detallada del mueble, materiales y herrajes, mano de obra, tiempo de fabricación estimado, plazo de entrega, forma de pago y garantía de trabajo."},
    {cat:"Ventas",level:"Básico",title:"Descripción de mueble para venta",body:"Escribe una descripción atractiva para vender [tipo de mueble] por Instagram o MercadoLibre. Incluye: materiales utilizados, medidas, terminación y colores disponibles, proceso de fabricación artesanal, forma de entrega o retiro, tiempo de fabricación y por qué este mueble es mejor que los fabricados en serie."},
    {cat:"Redes",level:"Básico",title:"Post del proceso de fabricación",body:"Escribe 3 captions para Instagram mostrando el proceso de fabricación de [tipo de mueble]. Uno del inicio (madera en bruto), uno del proceso (trabajando en el taller) y uno del resultado final. Cada caption debe resaltar el trabajo artesanal y terminar con invitación a pedir presupuesto."},
    {cat:"Negocio",level:"Intermedio",title:"Catálogo de productos con precios",body:"Ayúdame a organizar mi catálogo de muebles con precios de referencia. Mis productos son: [lista de tipos de muebles]. Para cada uno: nombre comercial atractivo, descripción corta, materiales estándar, rango de precios según tamaño. Formato para publicar en Instagram y WhatsApp."}
  ],
  resources:[
    {icon:"📺",type:"YouTube",name:"Carpintería en YouTube",desc:"Miles de canales con técnicas de carpintería, acabados, herrajes y proyectos de todo tipo en español."},
    {icon:"📸",type:"Red Social",name:"Pinterest para Carpinteros",desc:"La plataforma con más inspiración para diseño de muebles. También te trae clientes que buscan ideas."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Carpinteros en Facebook",desc:"Comunidades latinoamericanas de carpinteros que comparten técnicas, proveedores de madera y consejos de negocio."},
    {icon:"📐",type:"Software",name:"SketchUp Free",desc:"Modelado 3D gratuito en el navegador. Muestra al cliente cómo quedará el mueble antes de fabricarlo."},
    {icon:"🏪",type:"Plataforma",name:"MercadoLibre / Facebook Marketplace",desc:"Plataformas para vender muebles a medida y llegar a clientes que buscan artesanía local."},
    {icon:"🎓",type:"Cursos",name:"Cursos de Carpintería Online",desc:"Plataformas con cursos de técnicas avanzadas, acabados, diseño de muebles y gestión del taller."}
  ],
  apps:[
    {title:"Portafolio visual en Instagram",desc:"Publica 3 veces por semana: mueble terminado, proceso de fabricación y material/madera.",example:"Stories: lijado, ensamblado, barnizado. Post: el mueble terminado en casa del cliente."},
    {title:"Cotizador simple en WhatsApp",desc:"Crea mensajes rápidos en WhatsApp Business con preguntas estándar para tomar un pedido.",example:"Respuesta automática: Para cotizarte necesito saber: que mueble, medidas, material, fecha necesaria."},
    {title:"Maqueta 3D para el cliente",desc:"Con SketchUp Free muestra al cliente una visualización 3D de su mueble antes de fabricarlo.",example:"El cliente aprueba el 3D, firmas el pedido con anticipo y arrancas sin sorpresas."},
    {title:"Catálogo digital en Canva",desc:"Diseña un catálogo PDF con tus muebles más vendidos, materiales, acabados y precios orientativos.",example:"Catálogo de 8 páginas: cocinas, placares, mesas, escritorios. Con fotos reales de tus trabajos."}
  ],
  tips:[
    {text:"<strong>El proceso vende tanto como el resultado</strong>. Muestra cómo trabajas. La artesanía visible justifica el precio."},
    {text:"<strong>Cobra un anticipo siempre</strong>. Mínimo el 50% para comprar los materiales. Sin anticipo, sin trabajo."},
    {text:"<strong>Pinterest es un imán de clientes</strong>. Publica tus fotos ahí porque la gente busca ideas de muebles."},
    {text:"<strong>Documenta tus medidas y materiales</strong>. Un registro claro de cada pedido evita errores costosos."},
    {text:"<strong>El boca a boca sigue siendo el rey</strong>. Un cliente feliz recomienda tu trabajo a 10 personas."}
  ]
},
{
  id:"pintor", emoji:"🎨", name:"Pintor de Obra",
  area:"Oficios & Construcción",
  desc:"Consigue más clientes, presupuesta trabajos de pintura correctamente y muestra tu trabajo de forma profesional.",
  tags:["Pintura","Presupuestos","Clientes"],
  welcome:"La pintura de obra tiene demanda permanente pero mucha competencia. Diferenciarte con profesionalismo, buenas fotos y presencia digital puede significar el doble de trabajo al mismo precio o mejor.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Redacta presupuestos profesionales, calcula cantidades de material, responde consultas y crea contenido para redes.",tags:["Presupuestos","Cálculos","Contenido"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando alguien busca pintor en tu zona. Con fotos de tus trabajos consigues clientes sin gastar.",tags:["Google Maps","Clientes","Local"]},
    {icon:"📸",name:"Instagram",badge:"free",desc:"Muestra antes y después de cada trabajo. La pintura es muy visual y las transformaciones generan mucho engagement.",tags:["Antes/Después","Portafolio","Clientes"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Envía presupuestos, coordina trabajos, manda fotos del avance y confirma pagos desde el celular.",tags:["Presupuestos","Clientes","Coordinación"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea tarjetas de presentación, listas de precios y material visual profesional para tu negocio.",tags:["Branding","Precios","Diseño"]},
    {icon:"📱",name:"Simuladores de Color",badge:"free",desc:"Apps de marcas de pintura para mostrar al cliente cómo quedaría su ambiente con distintos colores antes de pintar.",tags:["Color","Simulación","Cliente"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Presupuesto de pintura",body:"Ayúdame a redactar un presupuesto profesional para pintar [descripción: interior/exterior, cantidad de ambientes o m2] en [tipo de inmueble]. Incluye: descripción del trabajo, preparación de superficies, mano de obra, materiales estimados, cantidad de manos, tiempo estimado, garantía y forma de pago."},
    {cat:"Técnico",level:"Básico",title:"Calcular cantidad de pintura",body:"Necesito calcular cuánta pintura necesito para [descripción: pintar X m2 de paredes, X ambientes]. Considera: tipo de superficie, cantidad de manos recomendadas, rendimiento promedio por litro y un 10% extra de desperdicio. Dame el cálculo detallado y la cantidad total a comprar."},
    {cat:"Marketing",level:"Básico",title:"Post de antes y después",body:"Escribe 3 captions para Instagram con fotos de antes y después de un trabajo de pintura en [tipo de ambiente]. Cada caption debe: describir la transformación lograda, mencionar técnica o producto destacado, generar confianza en la calidad e invitar a pedir presupuesto. Incluye hashtags locales."},
    {cat:"Clientes",level:"Básico",title:"Asesorar sobre colores",body:"Un cliente quiere pintar [ambiente] y no sabe qué color elegir. El ambiente tiene [descripción: orientación, tamaño, estilo de muebles]. Asesóralo sobre: colores que funcionarían bien, combinaciones recomendadas, qué colores evitar y cómo la luz afecta la percepción del color."}
  ],
  resources:[
    {icon:"📺",type:"YouTube",name:"Técnicas de Pintura",desc:"Canales con técnicas de pintura, texturas, efectos especiales y preparación de superficies en español."},
    {icon:"📱",type:"App",name:"ColorSnap (Sherwin-Williams)",desc:"App gratuita para simular colores en fotos del ambiente del cliente antes de comprar la pintura."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Pintores en Facebook",desc:"Comunidades de pintores latinoamericanos donde comparten técnicas, precios y proveedores de materiales."},
    {icon:"📍",type:"Herramienta",name:"Google Business Profile",desc:"Perfil gratuito en Google Maps. Fundamental para aparecer cuando buscan pintor cerca."},
    {icon:"🎨",type:"Marca",name:"Apps de marcas de pintura",desc:"Apps con calculadoras de cantidad y simuladores de color de las marcas más conocidas."},
    {icon:"💰",type:"App",name:"Factura Móvil",desc:"Emite recibos y facturas profesionales desde el celular para cada trabajo terminado."}
  ],
  apps:[
    {title:"Calculadora de pintura con IA",desc:"Describele a ChatGPT el ambiente y te calcula exactamente cuánta pintura necesitas, por tipo y cantidad de manos.",example:"Living de 4x5m con 3m de alto, 2 ventanas, 1 puerta. IA calcula litros de fondo más terminación."},
    {title:"Portafolio de transformaciones",desc:"Fotografía siempre el antes y el después. Una foto del ambiente despintado y otro terminado es tu mejor vendedor.",example:"Historia de Instagram: foto antes, video del proceso, foto después. Máximo engagement."},
    {title:"Simulador de color para el cliente",desc:"Con la app de ColorSnap muestras al cliente en su propia foto cómo quedaría el ambiente con distintos colores.",example:"El cliente toma foto del ambiente, eligen colores juntos, decide con seguridad y no hay arrepentimientos."},
    {title:"Presupuesto digital en minutos",desc:"Usa ChatGPT para redactar el presupuesto, Canva para diseñarlo y envíalo como PDF por WhatsApp.",example:"Presupuesto con membrete, descripción detallada, precio y garantía. El cliente confía más y regatea menos."}
  ],
  tips:[
    {text:"<strong>Las fotos antes/después</strong> son tu currículum. Fotografía cada trabajo y publícalo en Instagram y Google."},
    {text:"<strong>Presupuesta siempre por escrito</strong>. Un presupuesto claro evita malentendidos y te posiciona como profesional."},
    {text:"<strong>La preparación de superficies</strong> es lo que diferencia un trabajo de calidad. Educa al cliente sobre por qué lleva tiempo."},
    {text:"<strong>Cobra materiales aparte</strong> o inclúyelos en el presupuesto con el recibo de compra. La transparencia genera confianza."},
    {text:"<strong>Pide reseñas en Google</strong> después de cada trabajo. Cinco reseñas positivas duplican las consultas de clientes nuevos."}
  ]
},
{
  id:"limpieza", emoji:"🧹", name:"Limpieza & Mantenimiento",
  area:"Servicios & Hogar",
  desc:"Profesionaliza tu servicio de limpieza: consigue más clientes, organiza el trabajo, fija precios correctos y construye una marca confiable.",
  tags:["Limpieza","Clientes","Organización"],
  welcome:"El servicio de limpieza es uno de los más demandados y con más potencial de crecimiento. Con organización, presencia digital y herramientas simples puedes profesionalizar tu servicio y diferenciarte de la competencia.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Redacta presupuestos, crea listas de tareas por tipo de limpieza, responde consultas y genera contenido para redes.",tags:["Presupuestos","Listas","Contenido"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Coordina turnos, confirma servicios, envía fotos del trabajo terminado y gestiona tus clientes desde el celular.",tags:["Clientes","Turnos","Coordinación"]},
    {icon:"📅",name:"Google Calendar",badge:"free",desc:"Organiza tu agenda de servicios, evita superposiciones y configura recordatorios automáticos para cada cliente.",tags:["Agenda","Turnos","Recordatorios"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando alguien busca servicio de limpieza en tu zona. Gratis y muy efectivo para conseguir clientes.",tags:["Local","Clientes","Google Maps"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea tu lista de servicios y precios, tarjetas de presentación y material visual para compartir por WhatsApp.",tags:["Precios","Branding","Diseño"]},
    {icon:"💰",name:"Factura Móvil",badge:"free",desc:"Emite recibos profesionales de cada servicio. Da seriedad y te diferencia de la competencia informal.",tags:["Recibos","Formal","Profesional"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Presupuesto de limpieza",body:"Ayúdame a redactar un presupuesto profesional para servicio de limpieza de [tipo: hogar/oficina/comercio/limpieza profunda]. Características: [m2 aproximados, ambientes, frecuencia]. Incluye: descripción del servicio, qué incluye y qué no, productos utilizados, frecuencia del servicio, precio y forma de pago."},
    {cat:"Organización",level:"Básico",title:"Lista de tareas por tipo de limpieza",body:"Créame una lista de tareas detallada para [tipo de limpieza: limpieza básica semanal/limpieza profunda mensual/limpieza de mudanza/limpieza de oficina]. La lista debe estar organizada por zona del espacio, con cada tarea específica y en orden lógico de trabajo para que sea eficiente."},
    {cat:"Marketing",level:"Básico",title:"Texto para ofrecer servicios",body:"Escribe 3 textos cortos para ofrecer mi servicio de limpieza por WhatsApp, Instagram o grupos de Facebook. Cada texto debe: presentar el servicio claramente, destacar por qué soy confiable y profesional, mencionar los servicios que ofrezco, el área donde trabajo y cómo contactarme."},
    {cat:"Clientes",level:"Básico",title:"Responder queja de cliente",body:"Una clienta se quejó porque [descripción del problema]. Escríbeme una respuesta profesional por WhatsApp que reconozca el inconveniente con empatía, muestre disposición a resolver, proponga una solución concreta y mantenga la relación a largo plazo."}
  ],
  resources:[
    {icon:"📺",type:"YouTube",name:"Técnicas de Limpieza Profesional",desc:"Canales con técnicas de limpieza eficiente, productos y trucos de profesionales del sector."},
    {icon:"📱",type:"App",name:"Google Calendar",desc:"Agenda gratuita para organizar turnos de clientes con recordatorios automáticos. Imprescindible."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Limpieza en Facebook",desc:"Comunidades donde limpiadores comparten experiencias, precios de referencia y consejos del oficio."},
    {icon:"📍",type:"Herramienta",name:"Google Business Profile",desc:"Perfil gratuito para aparecer en Google Maps cuando buscan servicio de limpieza en tu zona."},
    {icon:"💡",type:"Blog",name:"Consejos de Limpieza Profesional",desc:"Blogs con técnicas de limpieza profunda, productos eficientes y gestión de negocio de limpieza."},
    {icon:"📋",type:"Herramienta",name:"Canva",desc:"Para crear tu lista de servicios y precios en formato visual profesional para compartir por WhatsApp."}
  ],
  apps:[
    {title:"Agenda de clientes organizada",desc:"Google Calendar con un color por tipo de cliente. Con recordatorio el día anterior para no olvidar.",example:"Cliente Martínez: Jueves 9hs, limpieza completa, 3hs. Recordatorio automático el miércoles a las 20hs."},
    {title:"Lista de servicios y precios en Canva",desc:"Diseña una imagen con todos tus servicios y precios en Canva. Fíjala como estado de WhatsApp.",example:"Limpieza básica: $X. Limpieza profunda: $X. Oficinas: consultar. Área de cobertura: [zona]."},
    {title:"Foto de trabajo terminado",desc:"Al finalizar envía una foto del ambiente limpio al cliente. Demuestra tu trabajo y genera confianza.",example:"Mensaje con foto: Terminamos! Todo quedó impecable. Cualquier consulta no dudes en escribirnos."},
    {title:"Conseguir clientes en grupos de Facebook",desc:"Publica en grupos de barrio ofreciendo tu servicio con foto y referencia de clientes anteriores.",example:"Hola vecinos! Ofrezco servicio de limpieza del hogar. Soy de [barrio], tengo referencias. WhatsApp: [número]."}
  ],
  tips:[
    {text:"<strong>La puntualidad y la confianza</strong> son tu mayor diferenciador. La gente te deja su casa. Eso vale más que el precio."},
    {text:"<strong>Pide referencias</strong> de tus primeros clientes y compártelas. Una captura de pantalla de un testimonio real abre muchas puertas."},
    {text:"<strong>Fija precios por servicio</strong>, no por hora. Es más claro para el cliente y te permite ser más eficiente."},
    {text:"<strong>Especialízate en algo</strong>: limpieza de oficinas, post-obra, mudanzas o limpieza profunda mensual. El especialista cobra más."},
    {text:"<strong>WhatsApp Business bien configurado</strong> con tu lista de servicios y respuestas automáticas te da imagen profesional desde el primer mensaje."}
  ]
},
{
  id:"jardineria", emoji:"🌿", name:"Jardinería & Paisajismo",
  area:"Oficios & Naturaleza",
  desc:"Digitaliza tu servicio de jardinería: muestra tu trabajo, gestiona clientes, presupuesta proyectos y crea contenido visual.",
  tags:["Jardines","Clientes","Diseño"],
  welcome:"La jardinería combina trabajo manual con creatividad y amor por la naturaleza. Con herramientas digitales puedes mostrar tus trabajos al mundo, conseguir más clientes y gestionar tu negocio de forma profesional.",
  tools:[
    {icon:"📸",name:"Instagram / Pinterest",badge:"free",desc:"Las plataformas perfectas para jardineros. Muestra antes/después de jardines, plantas y proyectos de paisajismo.",tags:["Portafolio","Clientes","Visual"]},
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Consulta sobre plantas, plagas y cuidados específicos. Redacta presupuestos y crea contenido educativo para redes.",tags:["Plantas","Presupuestos","Contenido"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando buscan jardinero en tu zona. Con fotos de tus trabajos consigues clientes de la zona.",tags:["Local","Clientes","Google Maps"]},
    {icon:"🌱",name:"PlantNet",badge:"free",desc:"Identifica plantas y malezas con la cámara del celular. Útil para diagnósticos en el campo.",tags:["Plantas","Identificación","Diagnóstico"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Coordina visitas, envía presupuestos y fotos del trabajo terminado a tus clientes.",tags:["Clientes","Presupuestos","Coordinación"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea catálogos de servicios, tarjetas de presentación y material visual profesional.",tags:["Diseño","Servicios","Branding"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Presupuesto de servicio de jardinería",body:"Ayúdame a redactar un presupuesto profesional para servicio de [tipo: mantenimiento mensual/diseño de jardín/poda]. El trabajo es en [descripción del espacio: m2, tipo de plantas, estado actual]. Incluye: descripción del servicio, frecuencia, tareas incluidas, materiales e insumos, precio y forma de pago."},
    {cat:"Técnico",level:"Básico",title:"Plan de cuidado de jardín",body:"Créame un plan de cuidado mensual para un jardín con: [descripción: tipos de plantas, césped, riego, sombra/sol]. Incluye para cada mes: tareas de poda y limpieza, riego recomendado, fertilización, control de plagas y qué plantar en cada temporada. Adaptado al clima de [ciudad/región]."},
    {cat:"Redes",level:"Básico",title:"Post educativo sobre plantas",body:"Escribe un post educativo para Instagram sobre [tema: cómo cuidar cierto tipo de planta, plantas para espacios pequeños, jardín sin mantenimiento]. Que sea información práctica y útil, con un consejo accionable y hashtags relevantes."},
    {cat:"Diseño",level:"Intermedio",title:"Propuesta de diseño de jardín",body:"Un cliente quiere diseñar el jardín de su [casa/oficina/balcón] de [dimensiones]. El estilo que busca es [descripción]. Presupuesto aproximado: [monto]. Créame una propuesta que incluya: concepto de diseño, plantas recomendadas, distribución general, materiales y sistema de riego sugerido."}
  ],
  resources:[
    {icon:"🌱",type:"App",name:"PlantNet",desc:"Identifica cualquier planta con la cámara del celular. Gratuita y precisa para diagnósticos en el campo."},
    {icon:"📺",type:"YouTube",name:"Canales de Jardinería",desc:"Miles de videos sobre diseño de jardines, cuidado de plantas, paisajismo y técnicas de cultivo en español."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Jardinería en Facebook",desc:"Comunidades de jardineros latinoamericanos donde comparten técnicas, plantas y consejos de negocio."},
    {icon:"📸",type:"Red Social",name:"Pinterest Jardines",desc:"La mayor fuente de inspiración para diseño de jardines. También trae clientes que buscan ideas."},
    {icon:"📍",type:"Herramienta",name:"Google Business Profile",desc:"Perfil gratuito para aparecer en Google Maps cuando buscan jardinero en tu zona."},
    {icon:"🎓",type:"Plataforma",name:"Cursos de Paisajismo Online",desc:"Plataformas con cursos de diseño de jardines, paisajismo y horticultura con certificado."}
  ],
  apps:[
    {title:"Portafolio de jardines en Instagram",desc:"Publica antes y después de cada jardín que intervienes. La transformación visual es poderosa y atrae clientes similares.",example:"Jardín abandonado, mismo jardín 3 meses después con diseño y cuidado. Las fotos hablan solas."},
    {title:"Identificar plantas con el celular",desc:"PlantNet te permite identificar cualquier planta o plaga con solo fotografiarla. Útil para diagnósticos frente al cliente.",example:"Cliente muestra planta enferma. Fotografías, identificas la plaga y recetas el tratamiento en el momento."},
    {title:"Plan de mantenimiento mensual en PDF",desc:"Crea un plan personalizado para cada cliente en Notion y expórtalo como PDF. Se ve profesional y el cliente lo valora.",example:"Plan de jardín del cliente: Marzo: poda. Abril: fertilización. Mayo: cambio de plantas estacionales."},
    {title:"Conseguir clientes en grupos de vecinos",desc:"Publica en grupos de Facebook del barrio con fotos de trabajos realizados en la zona y referencias de vecinos.",example:"Jardinería profesional en [barrio]. Trabajo en la zona hace X años. Referencias disponibles."}
  ],
  tips:[
    {text:"<strong>Las fotos antes/después</strong> de jardines son las más virales en Instagram. Siempre fotografía el estado inicial."},
    {text:"<strong>Especialízate en algo</strong>: jardines de agua, jardines verticales, terrazas o paisajismo corporativo."},
    {text:"<strong>Educa a tus clientes</strong>. Un cliente que sabe cuidar su jardín entre visitas te llama con más frecuencia."},
    {text:"<strong>PlantNet es tu aliado</strong>. Identificar plantas y plagas rápido frente al cliente demuestra conocimiento y genera confianza."},
    {text:"<strong>El boca a boca en el barrio</strong> es tu mejor publicidad. Un jardín hermoso que los vecinos ven todos los días te trae más trabajo."}
  ]
},
{
  id:"refrigeracion", emoji:"❄️", name:"Refrigeración & Aire Acondicionado",
  area:"Oficios & Técnico",
  desc:"Digitaliza tu servicio técnico de frío: consigue clientes, presupuesta instalaciones, organiza servicios y usa IA para diagnósticos.",
  tags:["Instalaciones","Mantenimiento","Clientes"],
  welcome:"El técnico en refrigeración y aire acondicionado tiene demanda todo el año. Con presencia digital y herramientas de organización puedes crecer sin depender solo del boca a boca.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Consulta soluciones técnicas, redacta presupuestos, crea listas de materiales y genera contenido para redes.",tags:["Técnico","Presupuestos","Materiales"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando buscan técnico de AC o refrigeración en tu zona. Gratis y muy efectivo.",tags:["Google Maps","Clientes","Local"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Coordina servicios, envía presupuestos, confirma turnos y sigue la satisfacción post-servicio.",tags:["Clientes","Turnos","Seguimiento"]},
    {icon:"📸",name:"Google Fotos",badge:"free",desc:"Documenta instalaciones, unidades trabajadas y certificados de servicio. Portafolio técnico visual.",tags:["Portafolio","Evidencia","Técnico"]},
    {icon:"💰",name:"Factura Móvil",badge:"free",desc:"Emite facturas y certificados de servicio profesionales desde el celular.",tags:["Facturas","Certificados","Formal"]},
    {icon:"📋",name:"Trello",badge:"free",desc:"Organiza servicios pendientes, mantenimientos programados y seguimientos de equipos instalados.",tags:["Organización","Servicios","Mantenimiento"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Presupuesto de instalación de AC",body:"Ayúdame a redactar un presupuesto profesional para la instalación de [tipo: split/central/industrial] en [tipo de espacio]. Capacidad: [frigorías/BTU]. Incluye: descripción del equipo y la instalación, materiales, mano de obra, garantía de instalación, tiempo estimado y forma de pago."},
    {cat:"Técnico",level:"Intermedio",title:"Diagnóstico de falla de aire",body:"Un cliente tiene un split [marca y modelo aproximado] con estos síntomas: [descripción]. Ayúdame a identificar las causas más probables en orden de probabilidad, qué verificar primero sin abrir el equipo, herramientas necesarias para el diagnóstico y costo estimado de cada posible reparación."},
    {cat:"Mantenimiento",level:"Básico",title:"Plan de mantenimiento preventivo",body:"Créame un plan de mantenimiento preventivo anual para equipos de aire acondicionado [residencial/comercial]. Incluye: tareas por trimestre, qué revisar en cada visita, registro de trabajo realizado, recomendaciones al cliente y cómo presentar este servicio como contrato anual con precio fijo."},
    {cat:"Marketing",level:"Básico",title:"Campaña de verano/invierno",body:"Crea una campaña de marketing para mi servicio técnico de AC para [temporada: verano/invierno]. Incluye: mensaje principal, servicios a destacar, oferta o promoción especial y texto para WhatsApp, Instagram y grupos de Facebook. Que genere consultas."}
  ],
  resources:[
    {icon:"📺",type:"YouTube",name:"Tutoriales de Refrigeración",desc:"Canales técnicos con diagnósticos, instalaciones y mantenimiento de equipos de AC y refrigeración."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Técnicos de AC en Facebook",desc:"Comunidades de técnicos latinoamericanos donde comparten fallas difíciles, precios y proveedores."},
    {icon:"📍",type:"Herramienta",name:"Google Business Profile",desc:"Perfil gratuito para aparecer en Google Maps cuando buscan técnico de AC en tu zona."},
    {icon:"💰",type:"App",name:"Factura Móvil",desc:"Facturas y certificados de servicio profesionales desde el celular. Fundamental para la formalidad."},
    {icon:"🎓",type:"Cursos",name:"Cursos de Refrigeración Online",desc:"Plataformas con cursos de refrigeración industrial, inverter, VRF y nuevos gases refrigerantes."},
    {icon:"📋",type:"Herramienta",name:"Trello",desc:"Para organizar equipos instalados, fechas de mantenimiento y seguimiento de clientes con contrato."}
  ],
  apps:[
    {title:"Recordatorio de mantenimiento anual",desc:"Registra en Trello o Google Calendar la fecha de instalación de cada equipo y programa recordatorio para el mantenimiento al año.",example:"Cliente Fernández: Split instalado 15/3/2025. Recordatorio mantenimiento: 1/3/2026."},
    {title:"Diagnóstico asistido por IA",desc:"Describele los síntomas del equipo a ChatGPT. Te ordena las causas más probables para verificar de más simple a más compleja.",example:"Split que no enfría: 1 filtros sucios, 2 gas bajo, 3 compresor, 4 placa electrónica."},
    {title:"Campaña de temporada en WhatsApp",desc:"Antes del verano o invierno envía un mensaje masivo a tu lista de clientes ofreciendo el mantenimiento preventivo con descuento.",example:"Antes de que llegue el calor, revisa tu AC. Mantenimiento preventivo con 20% de descuento este mes."},
    {title:"Certificado de instalación profesional",desc:"Con Canva crea una plantilla de certificado de instalación con tus datos, el equipo y la garantía.",example:"Certificado: Técnico [nombre], instaló [equipo] en [domicilio]. Garantía de instalación: 12 meses."}
  ],
  tips:[
    {text:"<strong>Google Maps en temporada alta</strong> es tu mejor fuente de clientes. Completa el perfil con fotos y horarios de atención."},
    {text:"<strong>Los contratos de mantenimiento anual</strong> te dan ingresos fijos todo el año. Ofrécelos siempre con precio especial."},
    {text:"<strong>Documenta cada instalación</strong> con foto y certificado. Te protege ante reclamos y da confianza al cliente."},
    {text:"<strong>Anticipa la temporada</strong>. Contacta a tus clientes un mes antes del verano o invierno."},
    {text:"<strong>El diagnóstico gratuito</strong> es una estrategia poderosa. El cliente que te deja entrar a ver el equipo casi siempre te contrata."}
  ]
},
{
  id:"gasista", emoji:"🚿", name:"Gasista & Plomería de Gas",
  area:"Oficios & Seguridad",
  desc:"Profesionaliza tu servicio de gas y plomería: gestiona clientes, habilitaciones, presupuestos y usa IA para consultas técnicas.",
  tags:["Gas","Instalaciones","Seguridad"],
  welcome:"El gasista es un oficio esencial y de alta responsabilidad. La digitalización de tu servicio te ayuda a conseguir más clientes, gestionar tu trabajo de forma profesional y demostrar la seriedad que requiere trabajar con gas.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Consulta normativas, redacta presupuestos, genera listas de materiales y crea contenido para redes.",tags:["Normativas","Presupuestos","Técnico"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando buscan gasista habilitado en tu zona. Muestra tu habilitación y reseñas de clientes.",tags:["Google Maps","Habilitado","Clientes"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Coordina servicios de emergencia, envía presupuestos y confirma habilitaciones a tus clientes.",tags:["Emergencias","Clientes","Coordinación"]},
    {icon:"📋",name:"Google Forms",badge:"free",desc:"Crea formularios de relevamiento para tomar datos de la instalación antes de la visita técnica.",tags:["Relevamiento","Datos","Eficiencia"]},
    {icon:"💰",name:"Factura Móvil",badge:"free",desc:"Emite facturas y certificados de servicio oficiales desde el celular. Fundamental en el trabajo con gas.",tags:["Facturas","Certificados","Oficial"]},
    {icon:"📸",name:"Google Fotos",badge:"free",desc:"Documenta instalaciones con fotos geolocalizadas y fechas. Registro profesional de cada trabajo.",tags:["Documentación","Registros","Profesional"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Presupuesto de instalación de gas",body:"Ayúdame a redactar un presupuesto profesional para [tipo de trabajo: instalación de garrafa/conexión a red/calefón/instalación completa]. Incluye: descripción técnica del trabajo, materiales con especificaciones, mano de obra, tiempo estimado, habilitación incluida o no, garantía y forma de pago. Tono muy profesional, el trabajo con gas requiere máxima seriedad."},
    {cat:"Técnico",level:"Intermedio",title:"Verificación de instalación existente",body:"Necesito verificar el estado de una instalación de gas en [tipo de inmueble, antigüedad aproximada]. Créame un checklist completo de inspección que incluya: estado de cañerías y conexiones, verificación de artefactos, medición de presión, detección de pérdidas, evaluación de ventilación y tiraje y qué documentación solicitar al propietario."},
    {cat:"Clientes",level:"Básico",title:"Explicar riesgo de instalación al cliente",body:"Un cliente tiene [descripción del problema de seguridad en su instalación de gas]. Necesito explicarle de forma clara y sin generar pánico excesivo: cuál es el riesgo real, por qué debe resolverse urgente, qué implica la reparación y qué no debe hacer hasta que se resuelva."},
    {cat:"Marketing",level:"Básico",title:"Contenido sobre seguridad en el gas",body:"Escribe 3 posts educativos para Instagram sobre seguridad en instalaciones de gas. Temas: señales de alerta de pérdida de gas, por qué es importante el gasista habilitado y mantenimiento preventivo de artefactos. Que generen conciencia sobre seguridad y posicionen mi servicio como profesional confiable."}
  ],
  resources:[
    {icon:"📋",type:"Oficial",name:"Enargas / Distribuidora Local",desc:"Normativas oficiales de instalaciones de gas. Fundamental conocer y cumplir la regulación vigente en tu zona."},
    {icon:"📺",type:"YouTube",name:"Tutoriales de Gas y Plomería",desc:"Canales técnicos con instalaciones, diagnósticos y normativas de gas en español."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Gasistas en Facebook",desc:"Comunidades de gasistas latinoamericanos donde comparten dudas técnicas, normativas y proveedores."},
    {icon:"💰",type:"App",name:"Factura Móvil",desc:"Facturas y certificados oficiales desde el celular. Imprescindible para formalizar cada trabajo."},
    {icon:"📍",type:"Herramienta",name:"Google Business Profile",desc:"Perfil en Google Maps para aparecer cuando buscan gasista habilitado en tu zona."},
    {icon:"🎓",type:"Cursos",name:"Cursos de Instalaciones de Gas",desc:"Actualización técnica en normativas, nuevas tecnologías y eficiencia energética en instalaciones de gas."}
  ],
  apps:[
    {title:"Formulario de relevamiento previo",desc:"Con Google Forms crea un formulario que el cliente llena antes de tu visita: tipo de instalación, artefactos, antigüedad.",example:"El cliente llena el formulario, vos llegás con los materiales correctos. Trabajo más eficiente y profesional."},
    {title:"Registro fotográfico de cada trabajo",desc:"Fotografía la instalación antes y después, con fecha. Es tu protección legal y demuestra seriedad ante el cliente.",example:"Foto de la instalación preexistente más foto del trabajo terminado con el nombre del cliente y fecha."},
    {title:"Perfil habilitado en Google Maps",desc:"Destaca en tu perfil de Google que sos gasista habilitado con matrícula. Eso diferencia y genera mucha más confianza.",example:"Nombre: Gasista Habilitado [tu nombre] - Mat. N grado [número] - [ciudad]."},
    {title:"Campaña de revisión anual",desc:"Envía un mensaje anual a tus clientes recordando la revisión de sus instalaciones. Ingresos recurrentes y clientes fidelizados.",example:"Estimado [nombre], le recordamos que su instalación de gas no tiene revisión desde [fecha]."}
  ],
  tips:[
    {text:"<strong>Tu habilitación es tu mayor diferenciador</strong>. Muéstrala siempre: en Google, WhatsApp y cualquier presupuesto."},
    {text:"<strong>Documenta absolutamente todo</strong>. En el trabajo con gas, la documentación no es burocracia, es seguridad y protección legal."},
    {text:"<strong>Las emergencias de gas son urgentes</strong>. Un servicio de emergencia rápido y confiable te diferencia enormemente."},
    {text:"<strong>Educa sobre seguridad en redes</strong>. El gasista que enseña genera confianza y se posiciona como referente del oficio."},
    {text:"<strong>Las revisiones anuales son negocio recurrente</strong>. Fideliza clientes con un plan de mantenimiento anual a precio fijo."}
  ]
},
{
  id:"mecanica", emoji:"🚗", name:"Mecánica & Automotriz",
  area:"Oficios & Técnico",
  desc:"Digitaliza tu taller, consigue más clientes, gestiona presupuestos y usa IA para diagnósticos y soluciones técnicas.",
  tags:["Taller","Presupuestos","Diagnóstico"],
  welcome:"El taller mecánico es un negocio serio que merece herramientas serias. Desde conseguir más clientes en Google hasta usar IA para consultas técnicas complejas, aquí encontrarás todo para profesionalizar tu trabajo.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Consulta soluciones técnicas para fallas, redacta presupuestos profesionales, responde mensajes difíciles y crea contenido para redes.",tags:["Diagnóstico","Presupuestos","Técnico"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando alguien busca mecánico cerca. El perfil completo con fotos y reseñas es tu mejor vitrina digital.",tags:["Google Maps","Clientes","Local"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Envía presupuestos, fotos del trabajo, confirma turnos y organiza tu agenda de clientes desde el celular.",tags:["Presupuestos","Turnos","Clientes"]},
    {icon:"📸",name:"Google Fotos",badge:"free",desc:"Documenta antes y después de cada trabajo. Crea un portafolio visual que demuestre tu calidad técnica.",tags:["Portafolio","Evidencia","Calidad"]},
    {icon:"🔧",name:"Identifix / AllData",badge:"premium",desc:"Bases de datos técnicas con códigos de falla, diagramas eléctricos y procedimientos de reparación por vehículo.",tags:["Técnico","Fallas","Diagramas"]},
    {icon:"💰",name:"Factura Móvil",badge:"free",desc:"Emite facturas y presupuestos profesionales desde el celular. Dale seriedad y formalidad a tu taller.",tags:["Facturas","Presupuestos","Formal"]}
  ],
  prompts:[
    {cat:"Presupuesto",level:"Básico",title:"Redactar presupuesto de reparación",body:"Ayúdame a redactar un presupuesto profesional para la reparación de [descripción del trabajo] en [marca y modelo del auto, año]. Incluye: descripción detallada del trabajo, repuestos necesarios con precios, mano de obra, tiempo estimado, garantía del trabajo y condiciones de pago."},
    {cat:"Técnico",level:"Intermedio",title:"Diagnóstico de falla",body:"Un cliente trae un [marca y modelo del auto, año] con estos síntomas: [descripción de los síntomas]. Ayúdame a identificar las posibles causas de esta falla, en orden de probabilidad. Para cada causa indícame: qué revisar primero, cómo comprobarlo, qué repuestos podrían necesitarse y costo aproximado de la reparación."},
    {cat:"Clientes",level:"Básico",title:"Explicar reparación al cliente",body:"Un cliente no técnico necesita entender por qué su auto necesita [tipo de reparación]. Explícame cómo explicárselo de forma simple, usando analogías de la vida cotidiana: qué falló, por qué es importante repararlo ahora, qué pasa si no lo repara y por qué tiene ese precio."},
    {cat:"Marketing",level:"Básico",title:"Post para redes del taller",body:"Escribe 3 posts para Instagram/Facebook de mi taller mecánico. Uno sobre un trabajo realizado con antes/después, uno con un consejo de mantenimiento preventivo y uno con una promoción de [servicio]. Tono técnico pero accesible, confiable y local. Incluye hashtags para encontrarme en [ciudad]."}
  ],
  resources:[
    {icon:"🔧",type:"Técnico",name:"YouTube Mecánica",desc:"Miles de canales con diagnósticos, reparaciones y técnicas mecánicas. Busca por marca y modelo del vehículo."},
    {icon:"📱",type:"App",name:"Google Business Profile",desc:"Perfil gratuito en Google Maps. Clientes te encuentran cuando buscan mecánico cerca."},
    {icon:"🌐",type:"Comunidad",name:"Foros de Mecánica Online",desc:"Comunidades técnicas donde mecánicos comparten diagnósticos difíciles, soluciones y experiencias."},
    {icon:"💰",type:"App",name:"Factura Móvil",desc:"Emite facturas profesionales desde el celular. Fundamental para formalizarte y dar confianza."},
    {icon:"📊",type:"Herramienta",name:"Taller en la Nube",desc:"Software de gestión para talleres mecánicos: órdenes de trabajo, stock de repuestos y facturación."},
    {icon:"🎓",type:"Curso",name:"Mecánica Técnica Online",desc:"Plataformas con cursos de electricidad del automotor, diagnóstico electrónico y nuevas tecnologías."}
  ],
  apps:[
    {title:"Aparecer en Google Maps gratis",desc:"Registra tu taller en Google Business Profile. Cuando alguien busque mecánico en tu zona, apareces vos.",example:"Proceso: business.google.com, Agregar negocio, Completar datos, Verificar con código postal."},
    {title:"Presupuestos profesionales por WhatsApp",desc:"Usa ChatGPT para redactar presupuestos claros y profesionales. Guarda las plantillas en mensajes rápidos de WhatsApp Business.",example:"Presupuesto enviado como imagen de Canva con logo del taller, descripción del trabajo y precio."},
    {title:"Diagnóstico asistido por IA",desc:"Describele los síntomas del vehículo a ChatGPT. Te da las causas más probables ordenadas para revisar primero las más simples.",example:"Síntoma: el auto vibra al frenar a alta velocidad. IA: discos delanteros deformados."},
    {title:"Portafolio de trabajos en Instagram",desc:"Fotografía cada trabajo importante: motor reparado, pintura de frenos nueva, caja restaurada.",example:"Post: Cambio de distribución en Toyota Corolla 2015. Antes/después más descripción técnica breve."}
  ],
  tips:[
    {text:"<strong>Google Maps es tu mejor vendedor</strong>. Un perfil completo con fotos te trae clientes nuevos sin gastar en publicidad."},
    {text:"<strong>Documenta todo con fotos</strong>. Las fotos antes/después te protegen de reclamos y demuestran tu trabajo."},
    {text:"<strong>Explica siempre al cliente</strong>. El mecánico que explica bien lo que hace genera confianza y clientes para toda la vida."},
    {text:"<strong>Usa ChatGPT para fallas difíciles</strong>. Describe los síntomas y te ayuda a ordenar el diagnóstico."},
    {text:"<strong>Las reseñas valen oro</strong>. Pídele a cada cliente satisfecho una reseña en Google. Cinco buenas reseñas cambian tu negocio."}
  ]
},
{
  id:"marketing", emoji:"📈", name:"Marketing Digital",
  area:"Estrategia & Contenido",
  desc:"Crea campañas, gestiona redes, analiza audiencias y automatiza tu marketing con IA.",
  tags:["Redes Sociales","Contenido","Automatización"],
  welcome:"Bienvenido al mundo del marketing inteligente. Aquí encontrarás todo para crear estrategias de contenido, gestionar campañas y analizar resultados usando inteligencia artificial.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Crea copies, estrategias de contenido, respuestas automáticas y análisis de audiencia. El más versátil para marketing.",tags:["Copies","Estrategia","Email"]},
    {icon:"🎨",name:"Canva AI",badge:"premium",desc:"Diseña publicaciones, stories y piezas visuales con generación IA integrada. Magic Design y fondo automático.",tags:["Diseño","Social","Visual"]},
    {icon:"📱",name:"Meta Business Suite",badge:"free",desc:"Gestiona Facebook e Instagram, programa publicaciones, analiza métricas y crea anuncios desde un solo lugar.",tags:["Facebook","Instagram","Ads"]},
    {icon:"🎬",name:"CapCut",badge:"free",desc:"Edita videos para Reels y TikTok con IA: subtítulos automáticos, música, efectos y templates virales.",tags:["Video","Reels","TikTok"]},
    {icon:"📋",name:"Notion AI",badge:"premium",desc:"Organiza tu estrategia de contenido, calendarios editoriales y reportes con asistente IA integrado.",tags:["Organización","Calendario","Reportes"]},
    {icon:"🔍",name:"SEMrush",badge:"premium",desc:"Analiza keywords, competidores y posicionamiento SEO. Esencial para marketing de contenidos.",tags:["SEO","Keywords","Análisis"]}
  ],
  prompts:[
    {cat:"Estrategia",level:"Básico",title:"Estrategia de Instagram",body:"Actúa como experto en marketing digital. Crea una estrategia de contenido para Instagram de [nombre de marca] que vende [producto/servicio]. El objetivo es aumentar el engagement en un 40% en 3 meses. Incluye: tipos de contenido, frecuencia de publicación, horarios óptimos y 5 ideas de posts para empezar."},
    {cat:"Copies",level:"Intermedio",title:"Copy para anuncio de Facebook",body:"Eres copywriter especializado en conversión. Escribe 3 variantes de anuncio para Facebook Ads para [producto] dirigido a [audiencia]. Cada variante debe tener: titular llamativo, descripción persuasiva y call to action claro. Tono: [profesional/casual/urgente]."},
    {cat:"Email",level:"Básico",title:"Secuencia de email marketing",body:"Diseña una secuencia de 5 emails de bienvenida para nuevos suscriptores de [marca]. Incluye: asunto del email, estructura del contenido, llamado a la acción y objetivo de cada email. La secuencia debe construir confianza y guiar hacia la primera compra."},
    {cat:"Análisis",level:"Avanzado",title:"Análisis de competidores",body:"Actúa como analista de marketing. Analiza la estrategia digital de [competidor] en [industria]. Evalúa: presencia en redes sociales, tipo de contenido, frecuencia, engagement aparente, puntos débiles y oportunidades para diferenciarnos. Dame 5 acciones concretas para superar su estrategia."}
  ],
  resources:[
    {icon:"🎓",type:"Curso",name:"Meta Blueprint",desc:"Certificaciones oficiales de Facebook e Instagram para publicidad y gestión de páginas. Gratis."},
    {icon:"📺",type:"Canal YouTube",name:"Neil Patel",desc:"El canal de marketing digital más completo en español e inglés. SEO, contenido y estrategia."},
    {icon:"📱",type:"Comunidad",name:"Marketing Digital Latinoamérica",desc:"Grupo de Facebook con más de 200K profesionales que comparten casos reales, tendencias y oportunidades."},
    {icon:"📊",type:"Herramienta",name:"Google Analytics 4",desc:"Aprende a interpretar datos de tu web y campañas. Gratis con certificación de Google."},
    {icon:"🎙️",type:"Podcast",name:"Ando en Marketing",desc:"Podcast latinoamericano con casos de éxito, entrevistas y tendencias del marketing digital."},
    {icon:"📖",type:"Newsletter",name:"Marketing Brew",desc:"Newsletter semanal con tendencias, noticias y análisis del mundo del marketing digital."}
  ],
  apps:[
    {title:"Automatizar respuestas en Instagram",desc:"Configura respuestas automáticas para mensajes directos usando ManyChat más ChatGPT, sin perder el toque personal.",example:"Hola, gracias por escribirnos. Te interesa nuestro producto X? Escribe SI y te contamos más."},
    {title:"Generar 30 ideas de contenido en 5 min",desc:"Usa ChatGPT para generar un mes completo de ideas de posts según tu nicho, audiencia y objetivos.",example:"Usa el prompt de estrategia y especifica tu sector: moda, comida, tecnología, servicios."},
    {title:"Analizar el rendimiento de tu competencia",desc:"Con SEMrush o SimilarWeb analiza qué keywords usan tus competidores y qué contenido les funciona mejor.",example:"Descubre qué posts virales tiene tu competencia y adapta el formato a tu marca."},
    {title:"Crear un calendario editorial mensual",desc:"Con Notion AI genera tu calendario editorial completo: temas, formatos, plataformas y fechas.",example:"Calendario de octubre: Lunes educativo, Miércoles behind scenes, Viernes oferta."}
  ],
  tips:[
    {text:"<strong>Empieza con ChatGPT</strong> para crear tus primeros contenidos. No necesitas ser experto: describe tu negocio y pide ideas."},
    {text:"<strong>Publica consistentemente</strong> antes que perfectamente. 3 posts semanales constantes superan a 10 posts en una semana."},
    {text:"<strong>Analiza tus métricas</strong> cada semana. Instagram Insights y Meta Business Suite son gratis y te dicen qué funciona."},
    {text:"<strong>Reutiliza tu contenido</strong>: un artículo de blog en 5 posts, en 3 stories, en 1 video. La IA te ayuda a adaptar formatos."},
    {text:"<strong>Certifícate</strong> en Meta Blueprint y Google Analytics. Son gratis y añaden credibilidad profesional."}
  ]
},
{
  id:"enfermeria", emoji:"👩‍⚕️", name:"Enfermería & Salud",
  area:"Salud & Cuidado",
  desc:"Herramientas digitales para profesionales de la salud: documentación, educación al paciente, actualización profesional y gestión del trabajo.",
  tags:["Salud","Pacientes","Documentación"],
  welcome:"La enfermería es una de las profesiones más importantes y exigentes del mundo. La tecnología bien usada puede ayudarte a trabajar mejor, documentar más rápido y educarte continuamente mientras cuidas a otros.",
  tools:[
    {icon:"🤖",name:"Claude AI",badge:"free",desc:"Consulta información médica actualizada, redacta materiales de educación para pacientes y revisa protocolos de forma rápida.",tags:["Consultas","Educación","Protocolos"]},
    {icon:"📋",name:"Notion",badge:"free",desc:"Organiza tus notas de guardia, protocolos personales, cursos y registro de pacientes de forma estructurada.",tags:["Organización","Notas","Protocolos"]},
    {icon:"📚",name:"PubMed / Medscape",badge:"free",desc:"Accede a artículos científicos y protocolos médicos actualizados. Indispensable para la actualización profesional.",tags:["Investigación","Protocolos","Actualización"]},
    {icon:"🎓",name:"Coursera / edX",badge:"free",desc:"Cursos de actualización en enfermería, UCI, neonatología, emergencias y especialidades. Muchos son gratuitos.",tags:["Cursos","Especialización","Actualización"]},
    {icon:"💊",name:"Medscape App",badge:"free",desc:"Calculadoras médicas, información de medicamentos, dosis y protocolos. La app más usada por profesionales de la salud.",tags:["Medicamentos","Dosis","Calculadoras"]},
    {icon:"📱",name:"WhatsApp Business",badge:"free",desc:"Para enfermeras independientes o cuidadoras: gestiona pacientes, horarios y comunicación con familias.",tags:["Pacientes","Familias","Gestión"]}
  ],
  prompts:[
    {cat:"Educación",level:"Básico",title:"Explicar diagnóstico a paciente",body:"Actúa como enfermera educadora. Explícame cómo explicarle a un paciente de manera simple y tranquilizadora el diagnóstico de [nombre del diagnóstico]. El paciente tiene [edad aproximada] y nivel educativo [básico/medio]. Incluye: qué es la enfermedad en palabras simples, qué va a sentir, qué cuidados necesita en casa, cuándo llamar al médico y cómo tranquilizarlo."},
    {cat:"Documentación",level:"Básico",title:"Redactar nota de enfermería",body:"Ayúdame a redactar una nota de enfermería para el siguiente caso: [descripción del caso]. La nota debe seguir el formato SOAP: Subjetivo (lo que dice el paciente), Objetivo (signos vitales y observaciones), Análisis (diagnóstico de enfermería) y Plan (intervenciones realizadas y planificadas)."},
    {cat:"Actualización",level:"Intermedio",title:"Resumen de protocolo médico",body:"Necesito entender el protocolo actualizado para el manejo de [situación clínica]. Explícame: definición y criterios diagnósticos, pasos de intervención en orden de prioridad, medicamentos involucrados con dosis estándar, monitoreo necesario y señales de alerta."},
    {cat:"Autocuidado",level:"Básico",title:"Plan de autocuidado para enfermeras",body:"Soy enfermera y trabajo en [turno: guardia de 12hs/turno rotativo/UCI]. Estoy experimentando [síntomas: agotamiento, insomnio, estrés]. Créame un plan de autocuidado realista que incluya: rutina antes y después del turno, técnicas de desconexión mental, alimentación rápida y nutritiva para guardias y ejercicio adaptado a mis horarios."}
  ],
  resources:[
    {icon:"📚",type:"Base de datos",name:"PubMed",desc:"La base de datos médica más grande del mundo. Acceso gratuito a millones de artículos científicos."},
    {icon:"💊",type:"App",name:"Medscape",desc:"App gratuita con información de medicamentos, calculadoras médicas y noticias de salud para profesionales."},
    {icon:"🎓",type:"Plataforma",name:"Enfermería en Desarrollo",desc:"Plataforma latinoamericana con cursos, protocolos y recursos específicos para enfermería en español."},
    {icon:"🎙️",type:"Podcast",name:"Enfermería Avanza",desc:"Podcast en español sobre actualidad en enfermería, casos clínicos y desarrollo profesional."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Enfermería en Facebook",desc:"Comunidades de enfermeros latinoamericanos donde comparten protocolos, dudas clínicas y apoyo entre colegas."},
    {icon:"📺",type:"YouTube",name:"Enfermería TV",desc:"Canal con procedimientos de enfermería en video, explicaciones de patologías y consejos para la práctica clínica."}
  ],
  apps:[
    {title:"Educar pacientes con material visual",desc:"Usa Canva para crear infografías simples sobre cuidados en casa, medicamentos y señales de alarma para entregar a pacientes.",example:"Infografía de cuidados post-alta: medicamentos, dieta, cuándo llamar al médico. Una hoja clara."},
    {title:"Mantener protocolos actualizados",desc:"Crea un cuaderno en Notion con los protocolos más usados en tu servicio. Accedes desde el celular en cualquier momento.",example:"Protocolos de urgencia, cálculo de dosis, escalas de valoración. Todo en un lugar."},
    {title:"Actualización profesional continua",desc:"Dedica 20 minutos al día a leer en Medscape o ver un video educativo. La constancia marca la diferencia.",example:"Lunes: artículo nuevo. Miércoles: repaso de protocolo. Viernes: caso clínico de YouTube."},
    {title:"Gestionar pacientes independientes",desc:"Si trabajas de forma independiente, usa WhatsApp Business con etiquetas para organizar pacientes, horarios y recordatorios.",example:"Etiquetas: Activo, Seguimiento, Familiar contacto. Recordatorios de medicación con alarmas."}
  ],
  tips:[
    {text:"<strong>Claude es excelente para consultas clínicas</strong>, pero siempre valida con fuentes médicas oficiales y tu criterio profesional."},
    {text:"<strong>Documenta todo y bien</strong>. Una nota de enfermería clara te protege legalmente y mejora la continuidad del cuidado."},
    {text:"<strong>El autocuidado no es opcional</strong>. No puedes cuidar a otros desde el agotamiento. Tu salud es parte de tu práctica profesional."},
    {text:"<strong>Actualízate constantemente</strong>. La medicina cambia rápido. 20 minutos diarios de lectura profesional hacen una gran diferencia."},
    {text:"<strong>Construye tu red profesional</strong>. Las comunidades de enfermería online son fuente de apoyo, conocimiento y oportunidades laborales."}
  ]
},
{
  id:"derecho", emoji:"⚖️", name:"Derecho & Abogacía",
  area:"Legal & Profesional",
  desc:"IA para abogados y estudiantes de derecho: investigación jurídica, redacción de documentos, gestión de casos y productividad legal.",
  tags:["Legal","Documentos","Investigación"],
  welcome:"El ejercicio del derecho está siendo transformado por la inteligencia artificial. Aquí encontrarás las herramientas para trabajar más eficientemente y ofrecer mejor servicio a tus clientes.",
  tools:[
    {icon:"🤖",name:"Claude AI",badge:"free",desc:"El mejor asistente para análisis jurídico, redacción de documentos legales, síntesis de jurisprudencia y consultas de derecho comparado.",tags:["Análisis","Documentos","Jurisprudencia"]},
    {icon:"📚",name:"Westlaw / LexisNexis",badge:"premium",desc:"Las bases de datos jurídicas más completas: jurisprudencia, doctrina, legislación actualizada y análisis legales.",tags:["Jurisprudencia","Legislación","Investigación"]},
    {icon:"📝",name:"Notion",badge:"free",desc:"Organiza tus casos, clientes, plazos procesales, notas de audiencias y biblioteca jurídica personal.",tags:["Casos","Plazos","Organización"]},
    {icon:"🔍",name:"Google Scholar",badge:"free",desc:"Busca jurisprudencia, doctrina y artículos jurídicos académicos de forma gratuita.",tags:["Jurisprudencia","Doctrina","Gratuito"]},
    {icon:"📋",name:"DocuSign / Firma Digital",badge:"premium",desc:"Firma digital de contratos y documentos legales. Válida legalmente en la mayoría de países latinoamericanos.",tags:["Firma","Contratos","Digital"]},
    {icon:"⏱️",name:"Toggl / Harvest",badge:"free",desc:"Control de horas trabajadas por cliente y caso. Fundamental para facturar correctamente honorarios profesionales.",tags:["Horas","Facturación","Honorarios"]}
  ],
  prompts:[
    {cat:"Documentos",level:"Intermedio",title:"Redactar contrato básico",body:"Actúa como abogado especialista en [área]. Redacta un contrato de [tipo de contrato] entre [parte A] y [parte B] para [objeto del contrato]. Incluye: partes contratantes, objeto, obligaciones de cada parte, plazo, precio y forma de pago, cláusulas de incumplimiento, jurisdicción y firma. Adapta al derecho de [país]. Aclara que debe revisarse por un profesional antes de firmarse."},
    {cat:"Investigación",level:"Avanzado",title:"Síntesis de jurisprudencia",body:"Necesito un análisis jurisprudencial sobre [tema legal] en [país/jurisdicción]. Sintetiza: los criterios sostenidos por los tribunales superiores, la evolución del criterio en los últimos 10 años, los argumentos más usados por cada posición y el criterio mayoritario actual. Indica que se deben verificar las fuentes en bases de datos oficiales."},
    {cat:"Clientes",level:"Básico",title:"Explicar situación legal al cliente",body:"Mi cliente necesita entender [situación legal compleja] en palabras simples. Explícamela de forma clara, sin tecnicismos, usando ejemplos cotidianos. Incluye: qué significa su situación actual, cuáles son sus opciones, qué riesgos tiene cada opción y cuál sería el paso siguiente recomendado."},
    {cat:"Productividad",level:"Básico",title:"Organizar agenda de plazos procesales",body:"Tengo estos plazos procesales próximos: [lista de casos con fechas]. Ayúdame a organizar un sistema de seguimiento que incluya: alertas por prioridad, tareas asociadas a cada plazo, documentos que debo preparar y recordatorios escalonados (7 días antes, 3 días antes, 1 día antes)."}
  ],
  resources:[
    {icon:"🔍",type:"Base de datos",name:"Google Scholar",desc:"Jurisprudencia y doctrina jurídica gratuita. El punto de partida para cualquier investigación legal."},
    {icon:"📚",type:"Plataforma",name:"Infojus / Sistemas Legales",desc:"Bases de datos jurídicas gratuitas de distintos países latinoamericanos con legislación y jurisprudencia."},
    {icon:"🎙️",type:"Podcast",name:"Derecho en Red",desc:"Podcast latinoamericano sobre actualidad jurídica, tecnología legal y desarrollo profesional en derecho."},
    {icon:"🌐",type:"Comunidad",name:"LinkedIn Legal",desc:"La red profesional para abogados. Publicaciones de doctrina, oportunidades laborales y contactos del sector."},
    {icon:"🎓",type:"Plataforma",name:"Coursera Derecho",desc:"Cursos de posgrado y especialización en derecho de universidades internacionales. Muchos con certificado."},
    {icon:"📖",type:"Newsletter",name:"Legaltech News",desc:"Newsletter sobre tecnología aplicada al derecho, inteligencia artificial legal y tendencias del sector."}
  ],
  apps:[
    {title:"Investigación jurídica con IA",desc:"Usa Claude para hacer síntesis de jurisprudencia, comparar legislaciones y encontrar argumentos para tus casos.",example:"Claude puede analizar un fallo, extraer los argumentos clave y compararlos con otros casos en minutos."},
    {title:"Gestión de casos en Notion",desc:"Crea una base de datos en Notion con todos tus casos: partes, plazos, documentos pendientes y estado de avance.",example:"Vista de tabla: Caso, Cliente, Plazo próximo, Estado, Documentos pendientes, Honorarios."},
    {title:"Contratos digitales con firma electrónica",desc:"Con DocuSign envía contratos para firma digital. Legal, rápido y sin necesidad de reuniones presenciales.",example:"Envías el contrato, cliente firma desde el celular, recibes el documento firmado en minutos."},
    {title:"Control de honorarios con Toggl",desc:"Registra el tiempo de cada tarea por cliente. Al final del mes tienes el detalle exacto para facturar.",example:"Consulta: 45 min. Redacción de escrito: 2hs. Audiencia: 3hs. Total cliente X: 5hs 45min."}
  ],
  tips:[
    {text:"<strong>La IA no reemplaza tu criterio jurídico</strong>. Úsala para investigar y redactar borradores, siempre revisa antes de usar con clientes."},
    {text:"<strong>Claude es mejor que ChatGPT</strong> para análisis jurídico complejo. Su razonamiento estructurado es más apropiado para el derecho."},
    {text:"<strong>Gestiona tus plazos con obsesión</strong>. Un plazo vencido puede costarle el caso al cliente y la matrícula a vos."},
    {text:"<strong>Construye tu marca en LinkedIn</strong>. Los abogados que publican contenido jurídico útil consiguen clientes sin pagar publicidad."},
    {text:"<strong>La firma digital</strong> ya es válida legalmente en casi toda Latinoamérica. Ahorra tiempo y dinero a vos y a tus clientes."}
  ]
},
{
  id:"arquitectura", emoji:"🏗️", name:"Arquitectura & Construcción",
  area:"Diseño & Construcción",
  desc:"IA para arquitectos y constructores: diseño asistido, presupuestos, gestión de obras y comunicación con clientes.",
  tags:["Diseño","Obras","Presupuestos"],
  welcome:"La arquitectura y la construcción están incorporando tecnología a una velocidad sin precedentes. Aquí encontrarás las herramientas para modernizar tu práctica profesional.",
  tools:[
    {icon:"🏠",name:"AutoCAD / SketchUp",badge:"premium",desc:"Software estándar de diseño arquitectónico. SketchUp tiene versión web gratuita para modelado 3D rápido.",tags:["Diseño","Planos","3D"]},
    {icon:"🤖",name:"ChatGPT / Claude",badge:"free",desc:"Redacta memorias descriptivas, pliegos de licitación, presupuestos narrativos y comunicaciones con clientes y proveedores.",tags:["Documentos","Presupuestos","Comunicación"]},
    {icon:"🖼️",name:"Midjourney / Stable Diffusion",badge:"premium",desc:"Genera renders conceptuales y visualizaciones de proyectos en segundos para presentar ideas a clientes.",tags:["Renders","Conceptos","Visualización"]},
    {icon:"📊",name:"Monday.com / Trello",badge:"free",desc:"Gestión de obras y proyectos: cronograma, tareas, subcontratistas y control de avance en tiempo real.",tags:["Gestión","Obras","Cronograma"]},
    {icon:"📐",name:"BIM 360 / Revit",badge:"premium",desc:"Software de modelado BIM para proyectos complejos. Coordinación entre arquitectura, estructura e instalaciones.",tags:["BIM","Coordinación","Proyectos"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Comunicación con clientes, proveedores y subcontratistas. Envío de fotos de avance de obra en tiempo real.",tags:["Clientes","Proveedores","Avance"]}
  ],
  prompts:[
    {cat:"Clientes",level:"Básico",title:"Propuesta de proyecto arquitectónico",body:"Actúa como arquitecto profesional. Redacta una propuesta de servicios para el diseño de [tipo de proyecto] para un cliente en [ciudad]. Incluye: descripción de las etapas del proyecto, alcance de cada etapa, honorarios por etapa, plazos estimados, qué incluye y qué no, forma de pago y cómo trabajamos juntos."},
    {cat:"Documentos",level:"Intermedio",title:"Memoria descriptiva de proyecto",body:"Ayúdame a redactar la memoria descriptiva de un proyecto de [tipo de obra]. El proyecto consiste en: [descripción general]. Incluye: descripción del emplazamiento, programa arquitectónico, concepto de diseño, materiales propuestos, sistemas constructivos, superficies y cumplimiento normativo."},
    {cat:"Presupuesto",level:"Intermedio",title:"Presupuesto de obra estimativo",body:"Necesito elaborar un presupuesto estimativo para la construcción de [descripción de la obra] de [superficie] m2 en [ciudad/país]. Ayúdame a estructurarlo por rubros: movimiento de suelos, estructura, mampostería, instalaciones, terminaciones, carpinterías y honorarios profesionales. Incluye un porcentaje de imprevistos."},
    {cat:"Gestión",level:"Avanzado",title:"Plan de gestión de obra",body:"Necesito un plan de gestión para una obra de [tipo] de [duración estimada]. Incluye: estructura del cronograma de obra, sistema de control de avance semanal, gestión de subcontratistas, control de calidad en obra, informe de avance para el cliente y cómo manejar imprevistos y adicionales."}
  ],
  resources:[
    {icon:"🏠",type:"Software",name:"SketchUp Free",desc:"Modelado 3D gratuito en el navegador. Ideal para volumetrías rápidas y presentaciones a clientes."},
    {icon:"🖼️",type:"Herramienta",name:"Archistar AI",desc:"IA para arquitectura: genera opciones de diseño, analiza sitios y optimiza programas arquitectónicos."},
    {icon:"📺",type:"YouTube",name:"30X40 Design Workshop",desc:"Canal sobre proceso de diseño arquitectónico, práctica profesional y pensamiento creativo."},
    {icon:"🌐",type:"Comunidad",name:"Archinect",desc:"La comunidad online más grande de arquitectos. Portafolios, empleos, discusiones y noticias del sector."},
    {icon:"🎓",type:"Plataforma",name:"Autodesk University",desc:"Cursos gratuitos de Autodesk sobre AutoCAD, Revit y herramientas BIM. Con certificación oficial."},
    {icon:"📖",type:"Blog",name:"ArchDaily",desc:"El medio de arquitectura más leído del mundo. Proyectos, noticias, materiales y tendencias globales."}
  ],
  apps:[
    {title:"Renders conceptuales con IA en minutos",desc:"Usa Midjourney para generar imágenes de concepto antes de dibujar. Muestra ideas al cliente y ajusta antes de invertir tiempo.",example:"Modern minimalist house with concrete and wood, mountain view, sunset lighting, architectural render."},
    {title:"Gestión de obra con Trello",desc:"Crea un tablero por obra con columnas: Por hacer, En progreso, Revisión, Terminado. Comparte con el cliente y subcontratistas.",example:"Tarjeta: Instalar cielorraso baño principal. Responsable: yesero. Fecha: viernes. Foto de terminado."},
    {title:"Informe de avance semanal automático",desc:"Usa ChatGPT para redactar el informe semanal de avance de obra basándote en tus notas y fotos.",example:"Le das las notas de la semana y te genera un informe estructurado para enviar al cliente."},
    {title:"Presupuestos con plantilla en Canva",desc:"Diseña una plantilla de presupuesto con tu logo en Canva. Completas los valores y envías como PDF profesional.",example:"Presupuesto con membrete, desglose por rubros, totales y condiciones de contratación."}
  ],
  tips:[
    {text:"<strong>Los renders de IA no son renders finales</strong>, son herramientas de comunicación. Úsalos para explorar ideas con el cliente."},
    {text:"<strong>Documenta todo en obra</strong>. Foto con fecha de cada etapa te protege ante reclamos y muestra el avance al cliente."},
    {text:"<strong>Cobra por etapas</strong>. Anteproyecto, proyecto ejecutivo, dirección de obra. Cada etapa con anticipo al inicio."},
    {text:"<strong>BIM es el futuro</strong>. Si no usas modelado BIM todavía, empieza con Revit o Archicad. El mercado lo exige cada vez más."},
    {text:"<strong>Construye tu portafolio online</strong> en Archinect o Behance. Los mejores proyectos te consiguen los mejores clientes."}
  ]
},
{
  id:"fotografia", emoji:"📷", name:"Fotografía & Edición",
  area:"Creatividad & Freelance",
  desc:"IA para fotógrafos: edición automatizada, gestión de clientes, portafolio digital y crecimiento de marca personal.",
  tags:["Edición","Portafolio","Clientes"],
  welcome:"La fotografía profesional en la era digital va mucho más allá de tomar buenas fotos. Aquí encontrarás las herramientas para editar más rápido, conseguir más clientes y construir una marca personal que destaque.",
  tools:[
    {icon:"🖼️",name:"Lightroom / Lightroom Mobile",badge:"premium",desc:"El estándar de la industria para edición fotográfica. Con IA para corrección automática de exposición, color y recorte.",tags:["Edición","Color","IA"]},
    {icon:"🤖",name:"Adobe Firefly",badge:"premium",desc:"Genera fondos, completa elementos faltantes en fotos y retoca imágenes con IA generativa de forma comercialmente segura.",tags:["IA","Retoque","Fondos"]},
    {icon:"🌐",name:"Pixieset / SmugMug",badge:"premium",desc:"Galerías online profesionales para entregar fotos a clientes. Con descarga protegida y tienda de impresiones.",tags:["Galería","Entrega","Clientes"]},
    {icon:"📱",name:"Instagram",badge:"free",desc:"Tu portafolio principal. El algoritmo favorece a fotógrafos con estilo definido y consistencia visual.",tags:["Portafolio","Clientes","Marca"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea tu identidad visual: logo, contratos, presupuestos, stories y material de marketing profesional.",tags:["Branding","Contratos","Marketing"]},
    {icon:"🤝",name:"HoneyBook / Dubsado",badge:"premium",desc:"CRM para fotógrafos: gestión de clientes, contratos digitales, facturación y flujos de trabajo automatizados.",tags:["CRM","Contratos","Gestión"]}
  ],
  prompts:[
    {cat:"Clientes",level:"Básico",title:"Propuesta de sesión fotográfica",body:"Actúa como fotógrafo profesional. Redacta una propuesta comercial para una sesión de [tipo: boda/familia/producto/retrato corporativo] para [descripción del cliente]. Incluye: descripción de la experiencia, qué incluye el paquete, duración, entregables, precio y cómo reservar."},
    {cat:"Redes",level:"Básico",title:"Caption para portfolio en Instagram",body:"Escribe 3 captions para publicar fotos de mi portafolio de [especialidad fotográfica] en Instagram. Cada caption debe: describir el mood o concepto de la foto, contar brevemente el contexto de la sesión, conectar emocionalmente con la audiencia e invitar a contactarme."},
    {cat:"Negocio",level:"Intermedio",title:"Responder consulta de precio",body:"Un cliente potencial me pregunta el precio de [tipo de sesión] y dice que le parece caro. Escríbeme 3 respuestas diferentes: una que justifique el valor de mi trabajo, una que ofrezca opciones de paquetes y una que invite a una llamada para entender mejor sus necesidades."},
    {cat:"Marketing",level:"Avanzado",title:"Estrategia de marca personal",body:"Soy fotógrafo especializado en [especialidad] en [ciudad/país]. Mi cliente ideal es [descripción]. Ayúdame a definir mi estrategia de marca personal: propuesta de valor única, estilo visual a comunicar, pilares de contenido para Instagram, cómo diferenciarme de la competencia local y plan de acción para los próximos 30 días."}
  ],
  resources:[
    {icon:"🎓",type:"YouTube",name:"Peter McKinnon",desc:"El canal de fotografía y videografía más inspirador de YouTube. Técnica, negocio y creatividad."},
    {icon:"📖",type:"Blog",name:"Fstoppers",desc:"El referente mundial en noticias, técnicas y negocios para fotógrafos profesionales."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Fotógrafos en Facebook",desc:"Comunidades latinoamericanas de fotógrafos donde comparten trabajos, precios y consejos de negocio."},
    {icon:"🎙️",type:"Podcast",name:"The Photography Business Podcast",desc:"Estrategias de negocio, marketing y crecimiento específicas para fotógrafos profesionales."},
    {icon:"📱",type:"App",name:"VSCO / Snapseed",desc:"Apps de edición fotográfica móvil profesional. Para editar y publicar desde el celular con calidad."},
    {icon:"🏆",type:"Plataforma",name:"500px / Behance",desc:"Portafolios online para fotógrafos. Visibilidad profesional y posibilidad de vender licencias de tus fotos."}
  ],
  apps:[
    {title:"Portafolio online en 1 hora",desc:"Crea tu portafolio en Pixieset o Format. Selecciona tus 20 mejores fotos y publícalo. Es tu tarjeta de presentación digital.",example:"tuNombre.pixieset.com, galería profesional, sin conocimientos técnicos, en minutos."},
    {title:"Entrega de fotos profesional",desc:"Sube las fotos editadas a Pixieset y envía el link al cliente. Descarga protegida, con tu marca y aspecto premium.",example:"Nada de WeTransfer ni Google Drive. Una galería con tu logo que el cliente nunca olvida."},
    {title:"Automatizar contratos y pagos",desc:"Con HoneyBook envía el contrato, recibe la firma digital y el anticipo en el mismo flujo. Sin papeles, sin olvidos.",example:"Cliente acepta la propuesta, firma el contrato, paga el anticipo. Todo automático."},
    {title:"Crecer en Instagram con estrategia",desc:"Publica 3 veces por semana con estilo consistente. Usa ChatGPT para los textos y Canva para stories promocionales.",example:"Lunes: sesión de trabajo. Miércoles: behind the scenes. Viernes: testimonio de cliente."}
  ],
  tips:[
    {text:"<strong>Tu portafolio vale más que tu equipo</strong>. 20 fotos increíbles venden más que mil fotos mediocres."},
    {text:"<strong>Especialízate</strong>. El fotógrafo de bodas, el de productos o el de retratos corporativos cobra más que el que hace todo."},
    {text:"<strong>El contrato no es opcional</strong>. Protégete siempre. Canva tiene plantillas y HoneyBook lo hace digital y automático."},
    {text:"<strong>Lightroom con IA</strong> reduce el tiempo de edición a la mitad. Aprende a usar los presets y la corrección automática."},
    {text:"<strong>Tu cliente compra una experiencia</strong>, no fotos. Cómo los haces sentir antes, durante y después vale tanto como las imágenes."}
  ]
},
{
  id:"veterinaria", emoji:"🐾", name:"Veterinaria",
  area:"Salud Animal & Profesional",
  desc:"Herramientas digitales para veterinarios: gestión de clínica, educación de propietarios y actualización profesional.",
  tags:["Animales","Clínica","Propietarios"],
  welcome:"La veterinaria combina vocación, ciencia y cada vez más tecnología. Aquí encontrarás las herramientas para gestionar tu clínica más eficientemente, comunicarte mejor con los propietarios y mantenerte actualizado.",
  tools:[
    {icon:"🤖",name:"Claude AI",badge:"free",desc:"Consultas de medicina veterinaria, redacción de informes clínicos, educación a propietarios y síntesis de literatura científica.",tags:["Consultas","Informes","Educación"]},
    {icon:"📋",name:"VetPronto / Vetting",badge:"premium",desc:"Software de gestión veterinaria: historia clínica digital, agenda de turnos, recordatorios de vacunas y facturación.",tags:["Historia clínica","Turnos","Gestión"]},
    {icon:"📱",name:"WhatsApp Business",badge:"free",desc:"Comunicación con propietarios: resultados, recordatorios de controles, seguimiento post-consulta y emergencias.",tags:["Propietarios","Comunicación","Seguimiento"]},
    {icon:"📸",name:"Instagram",badge:"free",desc:"La red donde los dueños de mascotas pasan mucho tiempo. Educa, muestra casos y construye confianza en tu clínica.",tags:["Redes","Educación","Clientes"]},
    {icon:"🔬",name:"VIN / Clinician's Brief",badge:"premium",desc:"Recursos de actualización veterinaria: casos clínicos, protocolos, foros de especialistas y literatura científica.",tags:["Actualización","Casos","Protocolos"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea material educativo para propietarios, carteles para la clínica y contenido para redes sociales.",tags:["Educación","Diseño","Redes"]}
  ],
  prompts:[
    {cat:"Educación",level:"Básico",title:"Explicar diagnóstico al propietario",body:"Actúa como veterinario empático. Ayúdame a explicarle a un propietario de forma clara y tranquilizadora que su mascota [especie, raza, edad] fue diagnosticada con [diagnóstico]. Incluye: qué significa el diagnóstico en palabras simples, cómo va a afectar a la mascota, el tratamiento propuesto, cuidados en casa, señales de alerta y pronóstico honesto."},
    {cat:"Clínica",level:"Intermedio",title:"Informe clínico completo",body:"Ayúdame a redactar un informe clínico para el siguiente caso: [descripción del caso]. El informe debe incluir: datos del paciente, motivo de consulta, anamnesis, examen físico, diagnósticos diferenciales, estudios complementarios indicados, diagnóstico presuntivo, tratamiento instaurado y seguimiento recomendado."},
    {cat:"Redes",level:"Básico",title:"Post educativo sobre salud animal",body:"Escribe un post educativo para Instagram sobre [tema de salud animal: vacunación, alimentación, enfermedades frecuentes]. Que sea: información verificada y confiable, comprensible para propietarios sin conocimientos médicos, con un consejo práctico aplicable y llamado a consultar al veterinario."},
    {cat:"Negocio",level:"Avanzado",title:"Protocolo de atención de emergencias",body:"Necesito diseñar un protocolo de atención de emergencias para mi clínica veterinaria. Incluye: criterios de triaje para determinar urgencia, primeras intervenciones para las 5 emergencias más frecuentes, equipamiento mínimo necesario y flujo de derivación a especialistas. Adaptado a clínica de pequeños animales."}
  ],
  resources:[
    {icon:"🔬",type:"Plataforma",name:"VIN (Veterinary Information Network)",desc:"La comunidad veterinaria online más grande. Casos clínicos, foros de especialistas y literatura actualizada."},
    {icon:"📚",type:"Revista",name:"Journal of Veterinary Medicine",desc:"Publicación científica con casos clínicos, investigaciones y protocolos actualizados de medicina veterinaria."},
    {icon:"🎙️",type:"Podcast",name:"The Vet Blast Podcast",desc:"Podcast sobre práctica clínica, gestión de hospitales veterinarios y actualización profesional."},
    {icon:"📺",type:"YouTube",name:"MSD Veterinary Manual",desc:"Canal oficial con videos educativos sobre diagnóstico, tratamiento y procedimientos veterinarios."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Veterinarios en Facebook",desc:"Comunidades latinoamericanas de veterinarios donde comparten casos difíciles, protocolos y actualizaciones."},
    {icon:"🎓",type:"Plataforma",name:"IVIS",desc:"Libros y textos veterinarios gratuitos online. Referencia para especialidades y casos complejos."}
  ],
  apps:[
    {title:"Recordatorios automáticos de vacunas",desc:"Con WhatsApp Business configura recordatorios automáticos para los propietarios 15 días antes del vencimiento de cada vacuna.",example:"Hola [nombre], le recordamos que [nombre de la mascota] tiene su vacuna vencida el [fecha]."},
    {title:"Contenido educativo en Instagram",desc:"Un post educativo semanal sobre salud animal construye confianza y trae propietarios nuevos.",example:"Lunes: mito vs realidad sobre alimentación. Jueves: señales de alerta que todo dueño debe conocer."},
    {title:"Historia clínica digital",desc:"Empieza con una plantilla en Notion si no tienes software. Datos del paciente, historial de consultas y medicamentos.",example:"Base de datos: Paciente, Propietario, Especie/Raza, Edad, Vacunas, Última consulta, Notas."},
    {title:"Seguimiento post-quirúrgico por WhatsApp",desc:"Envía fotos del proceso de cicatrización, recordatorios de medicación y evaluaciones de dolor al propietario por WhatsApp.",example:"Día 1 post-cirugía: revisar herida, dar analgésico cada 8hs. Foto de la herida y envíala."}
  ],
  tips:[
    {text:"<strong>La comunicación con el propietario</strong> es tan importante como el diagnóstico. Un propietario que entiende, cumple el tratamiento."},
    {text:"<strong>Instagram para veterinarios funciona</strong>. Los dueños de mascotas son muy activos en redes y buscan información confiable."},
    {text:"<strong>Actualízate constantemente</strong>. La medicina veterinaria avanza rápido. 30 minutos semanales de lectura profesional marcan la diferencia."},
    {text:"<strong>El triaje salva vidas</strong>. Tener un protocolo claro para emergencias reduce el estrés y mejora los resultados."},
    {text:"<strong>Construye relaciones de largo plazo</strong> con los propietarios. Un cliente fiel trae a sus amigos y nunca te abandona."}
  ]
},
{
  id:"logistica", emoji:"📦", name:"Logística & Depósito",
  area:"Operaciones & Distribución",
  desc:"Herramientas digitales para gestionar depósitos, optimizar entregas, controlar inventario y mejorar la operación logística.",
  tags:["Inventario","Entregas","Operaciones"],
  welcome:"La logística es el motor invisible que mueve la economía. Con las herramientas correctas puedes reducir errores, optimizar tiempos y mejorar la comunicación en toda la cadena de distribución.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Redacta procedimientos operativos, analiza problemas de la cadena logística, crea reportes y comunicaciones internas.",tags:["Procedimientos","Reportes","Análisis"]},
    {icon:"📊",name:"Google Sheets",badge:"free",desc:"Control de inventario, seguimiento de pedidos, dashboards de KPIs logísticos y reportes de stock en tiempo real.",tags:["Inventario","KPIs","Reportes"]},
    {icon:"🗺️",name:"Google Maps / Waze",badge:"free",desc:"Optimización de rutas de entrega en tiempo real. Reducción de combustible y tiempos de distribución.",tags:["Rutas","Entregas","Optimización"]},
    {icon:"📱",name:"WhatsApp Business",badge:"free",desc:"Coordinación con transportistas, avisos de entrega a clientes y comunicación con depósito en tiempo real.",tags:["Coordinación","Comunicación","Entregas"]},
    {icon:"📋",name:"Odoo / SIESA",badge:"premium",desc:"ERP con módulos de logística y depósito. Control de stock, órdenes de compra, recepción y despacho integrados.",tags:["ERP","Stock","Integración"]},
    {icon:"📷",name:"Apps de Escaneo QR",badge:"free",desc:"Control de mercadería con códigos QR o barras desde el celular. Entrada y salida de stock sin papel.",tags:["QR","Stock","Control"]}
  ],
  prompts:[
    {cat:"Operaciones",level:"Básico",title:"Procedimiento operativo estándar",body:"Ayúdame a redactar un procedimiento operativo estándar para [proceso: recepción de mercadería/picking/despacho]. Incluye: objetivo del procedimiento, personal responsable, materiales necesarios, pasos detallados en orden, controles de calidad en cada etapa, qué hacer ante errores y registros requeridos."},
    {cat:"Análisis",level:"Intermedio",title:"Analizar problema logístico",body:"Tengo el siguiente problema en mi operación logística: [descripción del problema]. Ayúdame a: identificar las causas raíz más probables, diseñar un árbol de causas, proponer 5 soluciones concretas ordenadas por impacto y facilidad de implementación y definir indicadores para medir si el problema se resolvió."},
    {cat:"Reportes",level:"Básico",title:"Reporte de operaciones diario",body:"Necesito crear una plantilla de reporte diario de operaciones para [tipo de operación: depósito/distribución/transporte]. Incluye: métricas clave, formato de semáforo verde/amarillo/rojo, sección de novedades importantes y acciones pendientes. Que sea rápido de completar y fácil de leer."},
    {cat:"Mejora",level:"Avanzado",title:"Plan de mejora de KPIs logísticos",body:"Mis KPIs actuales son: [lista de indicadores con valores actuales]. Las metas son: [lista de metas]. Diseña un plan de mejora de 90 días que incluya: diagnóstico de brechas, iniciativas de mejora priorizadas por impacto, responsables sugeridos, indicadores de seguimiento semanal y quick wins para los primeros 30 días."}
  ],
  resources:[
    {icon:"🎓",type:"Curso",name:"Coursera Supply Chain",desc:"Cursos de logística y cadena de suministro de universidades internacionales. Muchos con certificado gratuito."},
    {icon:"📖",type:"Blog",name:"Logistics Management",desc:"El referente mundial en noticias, tendencias y mejores prácticas de logística y supply chain."},
    {icon:"🎙️",type:"Podcast",name:"Supply Chain Now",desc:"Podcast sobre logística, tecnología aplicada y tendencias globales de la cadena de suministro."},
    {icon:"🌐",type:"Comunidad",name:"CSCMP",desc:"La asociación profesional más importante de logística y supply chain del mundo. Recursos y networking."},
    {icon:"📊",type:"Herramienta",name:"Google Sheets + AppSheet",desc:"Crea apps de control de stock e inventario sin código usando Google Sheets como base de datos."},
    {icon:"📺",type:"YouTube",name:"Canal de Logística y Supply Chain",desc:"Tutoriales sobre gestión de depósitos, ruteo de entregas y optimización de operaciones logísticas."}
  ],
  apps:[
    {title:"Control de inventario con Google Sheets",desc:"Crea una planilla con entrada/salida de stock, alertas de stock mínimo y reporte automático de faltantes.",example:"Columnas: Producto, Stock actual, Stock mínimo, Proveedor, Última entrada, Estado semáforo."},
    {title:"Optimización de rutas de entrega",desc:"Con Google Maps o Route4Me organiza las entregas del día en el orden más eficiente para reducir kilómetros y tiempo.",example:"15 entregas que antes tardaban 6hs, con ruteo óptimo se hacen en 4hs y menos combustible."},
    {title:"Comunicación con transportistas por WhatsApp",desc:"Crea grupos por zona de reparto. Envía manifiestos, confirma entregas con foto y resuelve problemas en tiempo real.",example:"Foto del comprobante de entrega firmado directo al grupo. Sin papel, sin excusas, con trazabilidad."},
    {title:"Reportes automáticos con ChatGPT",desc:"Describe los datos del día a ChatGPT y te genera el reporte formateado listo para enviar al jefe o al cliente.",example:"Input: 320 pedidos, 8 errores, 15 devoluciones. Output: reporte estructurado con análisis."}
  ],
  tips:[
    {text:"<strong>Lo que no se mide no se mejora</strong>. Define 3-5 KPIs clave y mídelos todos los días sin excepción."},
    {text:"<strong>El error humano se reduce con procesos</strong>. Un buen SOP escrito vale más que la experiencia sin respaldo."},
    {text:"<strong>La comunicación en tiempo real</strong> es la diferencia entre una entrega exitosa y un reclamo."},
    {text:"<strong>Empieza simple</strong>. Google Sheets bien estructurado puede reemplazar a un ERP costoso en operaciones pequeñas y medianas."},
    {text:"<strong>El cliente quiere saber dónde está su pedido</strong>. Un aviso de salida y otro de llegada reduce el 80% de los llamados de seguimiento."}
  ]
},
{
  id:"ventas", emoji:"💰", name:"Ventas & Redes Sociales",
  area:"Ventas & Social Selling",
  desc:"Convierte seguidores en clientes con social selling, automatizaciones y estrategias de cierre con IA.",
  tags:["Social Selling","Cierre","CRM"],
  welcome:"Vender en la era digital es una habilidad que se aprende. Aquí encontrarás las herramientas y técnicas para convertir redes sociales en máquinas de generar clientes y cerrar ventas.",
  tools:[
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Tu canal de ventas número 1. Catálogo, respuestas rápidas, etiquetas de clientes y broadcasts a listas.",tags:["Ventas","Clientes","Mensajes"]},
    {icon:"🤖",name:"ManyChat",badge:"premium",desc:"Automatiza respuestas en Instagram y Facebook. Captura leads, envía catálogos y crea flujos de venta automáticos.",tags:["Automatización","Instagram","Leads"]},
    {icon:"📊",name:"HubSpot CRM",badge:"free",desc:"CRM gratuito para gestionar tu pipeline de ventas, contactos y seguimiento de oportunidades.",tags:["CRM","Pipeline","Seguimiento"]},
    {icon:"🎯",name:"LinkedIn Sales Navigator",badge:"premium",desc:"La herramienta de prospección B2B más potente. Encuentra tomadores de decisión y gestiona outreach.",tags:["B2B","Prospección","LinkedIn"]},
    {icon:"📧",name:"Lemlist",badge:"premium",desc:"Automatiza tu outreach por email con personalización IA. Secuencias de follow-up y análisis de apertura.",tags:["Email","Outreach","Follow-up"]},
    {icon:"📈",name:"Pipedrive",badge:"premium",desc:"CRM visual con pipeline en kanban. Gestiona tus oportunidades de venta de forma visual e intuitiva.",tags:["Pipeline","Visual","Ventas"]}
  ],
  prompts:[
    {cat:"Prospectos",level:"Básico",title:"Mensaje de primer contacto",body:"Escribe un mensaje de primer contacto para [plataforma: LinkedIn/Instagram/WhatsApp] para prospectar a [tipo de cliente]. Mi producto/servicio es [descripción]. El mensaje debe: ser personalizado, mencionar algo específico de su negocio, plantear el problema que resuelvo y terminar con una pregunta abierta. Máximo 5 líneas."},
    {cat:"Cierre",level:"Intermedio",title:"Manejar objeciones de precio",body:"Un prospecto dice que es muy caro o no tiene presupuesto ahora. Escríbeme 3 respuestas diferentes para manejar esta objeción: una que reencuadre el valor, una que ofrezca alternativas y una que cree urgencia genuina. Tono: empático, profesional y sin presión excesiva."},
    {cat:"Follow-up",level:"Básico",title:"Secuencia de seguimiento",body:"Diseña una secuencia de 5 mensajes de seguimiento para un prospecto que mostró interés en [producto/servicio] pero no ha respondido. Mensajes para días: 2, 5, 10, 20 y 30. Cada mensaje diferente: primero de valor, luego de caso de éxito, luego pregunta directa, luego urgencia y último de cierre de ciclo."},
    {cat:"Social Selling",level:"Avanzado",title:"Estrategia de contenido que vende",body:"Diseña mi estrategia de contenido en [Instagram/LinkedIn] para generar ventas orgánicas de [producto/servicio] para [cliente ideal]. Incluye: 4 pilares de contenido, proporción de contenido educativo vs. venta, ejemplos de posts para cada pilar y cómo pasar de seguidor a prospecto a cliente con llamadas a la acción naturales."}
  ],
  resources:[
    {icon:"📖",type:"Libro",name:"SPIN Selling (Neil Rackham)",desc:"El método de ventas consultivas más probado del mundo. Basado en 12 años de investigación."},
    {icon:"🎙️",type:"Podcast",name:"Sell or Die (Gitomer)",desc:"El podcast de ventas más popular del mundo con técnicas modernas y mindset de vendedor."},
    {icon:"📺",type:"YouTube",name:"Alex Hormozi",desc:"El referente en estrategia de ventas y negocios modernos. Contenido gratuito y de altísima calidad."},
    {icon:"🎓",type:"Curso",name:"HubSpot Sales Academy",desc:"Certificaciones gratuitas en ventas inbound, CRM y social selling. Con certificado descargable."},
    {icon:"🌐",type:"Comunidad",name:"Sales Hacker",desc:"Comunidad global de profesionales de ventas con recursos, playbooks y debates técnicos."},
    {icon:"📊",type:"Herramienta",name:"Apollo.io",desc:"Plataforma de prospección B2B con datos de contacto verificados y automatización de outreach."}
  ],
  apps:[
    {title:"Pipeline de ventas en HubSpot",desc:"Crea tu pipeline gratis en HubSpot: Lead, Contacto, Propuesta, Negociación, Cerrado. Nunca pierdas un prospecto.",example:"Cada prospecto tiene: nombre, empresa, valor estimado, próximo paso y fecha de seguimiento."},
    {title:"Automatizar DMs de Instagram",desc:"Con ManyChat configura: cuando alguien comenta INFO en tu post, recibe automáticamente tu catálogo por DM.",example:"Post: Comenta PRECIO y te mando los detalles. ManyChat envía catálogo automáticamente."},
    {title:"Prospectar en LinkedIn gratis",desc:"Busca tu cliente ideal con filtros, mira su perfil, comenta su contenido y luego conecta.",example:"Secuencia: Ver perfil, Comentar post, Conectar con nota personalizada, Mensaje de valor, Pitch."},
    {title:"Secuencias de follow-up automáticas",desc:"Con Lemlist o incluso Gmail crea plantillas con seguimientos programados para que ningún lead se enfríe solo.",example:"Día 1: Propuesta. Día 3: Case study. Día 7: Pregunta de bloqueo. Día 14: Cierre de ciclo."}
  ],
  tips:[
    {text:"<strong>Vende el resultado, no el producto</strong>. Más clientes en 30 días vende más que marketing digital para empresas."},
    {text:"<strong>El seguimiento es donde se gana el dinero</strong>. El 80% de las ventas ocurren entre el 5 y 12 contacto."},
    {text:"<strong>Escucha más de lo que hablas</strong>. Un buen vendedor hace preguntas y el cliente se convence solo."},
    {text:"<strong>Usa testimonios y casos de éxito</strong>. La prueba social es el argumento de venta más poderoso que existe."},
    {text:"<strong>Trata las objeciones como preguntas</strong>. Es muy caro significa no veo suficiente valor todavía."}
  ]
},
{
  id:"cosmetica", emoji:"💄", name:"Cosmética & Belleza",
  area:"Emprendimiento & Lifestyle",
  desc:"Impulsa tu emprendimiento de belleza con IA: catálogos, atención al cliente y marketing visual.",
  tags:["Emprendimiento","Belleza","E-commerce"],
  welcome:"Transforma tu emprendimiento de belleza con herramientas inteligentes. Desde crear catálogos visuales hasta automatizar tu atención al cliente y gestionar pedidos.",
  tools:[
    {icon:"🎨",name:"Canva AI",badge:"free",desc:"Crea catálogos, flyers, stories y tarjetas de presentación profesionales para tu marca de belleza.",tags:["Catálogo","Diseño","Branding"]},
    {icon:"🛒",name:"Tienda Nube",badge:"premium",desc:"Crea tu tienda online para vender productos de belleza con pagos integrados y gestión de inventario.",tags:["E-commerce","Ventas","Pagos"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Gestiona pedidos, envía catálogos, crea respuestas automáticas y organiza tus clientes.",tags:["Atención","Pedidos","Clientes"]},
    {icon:"📸",name:"Remove.bg",badge:"free",desc:"Elimina el fondo de fotos de tus productos en segundos. Ideal para crear fotos de catálogo profesionales.",tags:["Fotos","Productos","Edición"]},
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Redacta descripciones de productos, responde consultas, crea estrategias de ventas y genera contenido.",tags:["Copies","Productos","Estrategia"]},
    {icon:"📊",name:"Metricool",badge:"free",desc:"Programa y analiza tus publicaciones en Instagram, Facebook y TikTok desde un solo lugar.",tags:["Redes","Programación","Métricas"]}
  ],
  prompts:[
    {cat:"Ventas",level:"Básico",title:"Descripción de producto",body:"Actúa como copywriter de belleza. Escribe una descripción persuasiva para [nombre del producto]. Incluye: beneficios principales, ingredientes clave, cómo usarlo y por qué diferencia de la competencia. Tono cálido, cercano y confiable."},
    {cat:"Atención",level:"Básico",title:"Respuestas frecuentes para WhatsApp",body:"Crea 10 respuestas rápidas para WhatsApp Business para mi emprendimiento de [tipo de productos de belleza]. Incluye respuestas para: consulta de precio, disponibilidad, envíos, tiempo de entrega, cómo hacer pedido y seguimiento. Tono amigable y profesional."},
    {cat:"Contenido",level:"Intermedio",title:"Guión para video de tutorial",body:"Escribe un guión de 60 segundos para un Reel de Instagram sobre cómo usar [producto]. Incluye: hook inicial llamativo, pasos claros del tutorial, resultado final y llamado a la acción. Tono cercano, como si fuera una amiga dando consejos."},
    {cat:"Branding",level:"Avanzado",title:"Estrategia de marca personal",body:"Ayúdame a construir mi marca personal como emprendedora de belleza. Mi especialidad es [área]. Define: propuesta de valor única, tono de comunicación, pilares de contenido, palabras clave de mi marca y cómo diferenciarme en Instagram. Dame un plan de acción para 30 días."}
  ],
  resources:[
    {icon:"🎓",type:"Curso",name:"Capacitarte.com",desc:"Cursos de marketing digital para emprendedores en español. Muchos son gratuitos o de muy bajo costo."},
    {icon:"📺",type:"YouTube",name:"Shopify en Español",desc:"Canal con tutoriales sobre cómo vender online, crear tiendas y crecer tu emprendimiento."},
    {icon:"📱",type:"App",name:"Factura Móvil",desc:"Genera facturas y recibos profesionales desde el celular. Esencial para formalizar tu negocio."},
    {icon:"🌸",type:"Comunidad",name:"Emprendedoras Latinas",desc:"Comunidad de mujeres emprendedoras en Latinoamérica que comparten experiencias y apoyo."},
    {icon:"📖",type:"Blog",name:"Beautypack.es",desc:"Blog especializado en tendencias de cosmética, packaging e innovación en belleza."},
    {icon:"🎙️",type:"Podcast",name:"Emprende Sin Límites",desc:"Podcast para emprendedoras latinas con casos reales, finanzas y crecimiento de marca."}
  ],
  apps:[
    {title:"Crear catálogo digital profesional",desc:"Con Canva AI diseña un catálogo de productos de belleza con fotos, precios y descripciones elegantes para compartir por WhatsApp.",example:"Catálogo en PDF de 12 páginas con tus productos, precios y forma de contacto."},
    {title:"Automatizar pedidos por WhatsApp",desc:"Configura WhatsApp Business con catálogo, respuestas automáticas y etiquetas para organizar clientes.",example:"Respuesta automática con precio y botón de pedido cuando preguntan por un producto."},
    {title:"Fotografía de productos profesional",desc:"Usa buena luz natural, un fondo neutro y Remove.bg para editar. ChatGPT te da guías de fotografía para cada producto.",example:"Sérum sobre superficie de mármol blanco, luz lateral suave, sombra leve = foto de revista."},
    {title:"Gestionar inventario y finanzas",desc:"Usa Google Sheets con fórmulas simples para trackear tu inventario, ganancias y gastos mensuales.",example:"Columnas: Producto, Stock, Precio, Vendido, Ganancia, Fecha."}
  ],
  tips:[
    {text:"<strong>WhatsApp Business</strong> es tu herramienta número 1. Configura tu catálogo y respuestas rápidas esta semana."},
    {text:"<strong>Fotografía bien tus productos</strong>: buena foto = más ventas. Luz natural y fondo simple es suficiente para empezar."},
    {text:"<strong>Usa ChatGPT</strong> para redactar descripciones de cada producto. Solo descríbelo y pídele que lo haga atractivo."},
    {text:"<strong>Pide reseñas</strong> a tus primeras clientas. Una captura de pantalla de un testimonio real vale más que cualquier anuncio."},
    {text:"<strong>Define tu precio correctamente</strong>: costo por 2.5 como mínimo. Incluye empaque, envío y tu tiempo."}
  ]
},
{
  id:"gastronomia", emoji:"🍽️", name:"Gastronomía & Cocina",
  area:"Gastronomía & Emprendimiento",
  desc:"Recetas, gestión de negocio gastronómico, redes sociales para restaurantes y emprendimientos de comida con IA.",
  tags:["Restaurante","Emprendimiento","Cocina"],
  welcome:"La gastronomía es uno de los sectores que más se beneficia de la tecnología hoy. Desde crear recetas hasta gestionar tu local, pedidos y redes sociales, aquí encuentras todo para llevar tu negocio al siguiente nivel.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Crea recetas, menús completos, descripciones de platos para carta digital, respuestas a reseñas y estrategias de marketing.",tags:["Recetas","Menú","Marketing"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Diseña tu carta digital, flyers de promociones, stories para Instagram y posts de tus platos con plantillas profesionales.",tags:["Carta","Diseño","Redes"]},
    {icon:"📱",name:"Instagram y TikTok",badge:"free",desc:"Las plataformas donde los restaurantes y emprendimientos gastronómicos consiguen más clientes. Muestra tus platos en video.",tags:["Redes","Videos","Clientes"]},
    {icon:"🛒",name:"PedidosYa / Rappi",badge:"free",desc:"Plataformas de delivery para llegar a más clientes sin tener local propio. Gestión de pedidos y visibilidad online.",tags:["Delivery","Pedidos","Ventas"]},
    {icon:"📊",name:"Google Business",badge:"free",desc:"Aparece en Google Maps cuando alguien busca restaurantes o comida cerca. Gestiona reseñas y horarios.",tags:["Google Maps","Reseñas","Local"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Toma pedidos, envía menús del día, confirma reservas y gestiona tus clientes habituales desde el celular.",tags:["Pedidos","Reservas","Clientes"]}
  ],
  prompts:[
    {cat:"Menú",level:"Básico",title:"Crear descripción de platos",body:"Actúa como chef y copywriter gastronómico. Escribe descripciones atractivas para estos platos de mi menú: [lista de platos]. Cada descripción debe tener: nombre del plato, ingredientes principales destacados, técnica de preparación mencionada brevemente y sensaciones que evoca. Máximo 3 líneas por plato."},
    {cat:"Redes",level:"Básico",title:"Post para Instagram de plato del día",body:"Escribe 3 opciones de caption para Instagram para publicar la foto de [nombre del plato]. Incluye: descripción apetitosa del plato, ingredientes destacados, llamado a la acción para reservar o pedir y hashtags gastronómicos relevantes para [ciudad/país]."},
    {cat:"Negocio",level:"Intermedio",title:"Responder reseña negativa",body:"Un cliente dejó esta reseña negativa en Google: [copiar la reseña]. Escríbeme una respuesta profesional y empática que: reconozca la experiencia del cliente, muestre disposición a mejorar, invite a dar una segunda oportunidad y cuide la imagen del negocio."},
    {cat:"Recetas",level:"Avanzado",title:"Crear menú semanal con costos",body:"Ayúdame a crear un menú semanal para mi [tipo de negocio] con estas características: [cantidad de personas], [restricciones alimentarias], [presupuesto aproximado por persona]. Incluye: platos para cada día, ingredientes necesarios, estimación de costo por porción y sugerencia de precio de venta con margen del 60%."}
  ],
  resources:[
    {icon:"🎓",type:"YouTube",name:"Cocina Fácil",desc:"Canal con técnicas de cocina, recetas y consejos para emprendimientos gastronómicos en español."},
    {icon:"📱",type:"App",name:"Gastrokaizen",desc:"Herramienta para calcular costos de recetas, escandallos y precios de venta para negocios gastronómicos."},
    {icon:"📖",type:"Blog",name:"El Gastrónomo",desc:"Blog con tendencias gastronómicas, gestión de restaurantes y marketing para negocios de comida."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Gastronómicos en Facebook",desc:"Comunidades de cocineros y emprendedores gastronómicos latinoamericanos que comparten recetas y experiencias."},
    {icon:"🎙️",type:"Podcast",name:"Chef en Casa",desc:"Podcast sobre emprendimiento gastronómico, gestión de costos y crecimiento de negocios de comida."},
    {icon:"📊",type:"Herramienta",name:"Wisk.ai",desc:"Software de gestión de inventario y costos para restaurantes con IA integrada."}
  ],
  apps:[
    {title:"Menú digital con QR",desc:"Crea tu menú en Canva, expórtalo como PDF y genera un QR. Los clientes lo escanean con el celular.",example:"Sin imprimir cartas, siempre actualizado y con fotos de cada plato."},
    {title:"Contenido diario para Instagram",desc:"Fotografía el plato del día con buena luz, usa ChatGPT para el texto y Canva para el diseño. 15 minutos por día.",example:"Lunes: plato del día. Miércoles: detrás de escena. Viernes: oferta del fin de semana."},
    {title:"Gestión de pedidos por WhatsApp",desc:"Configura WhatsApp Business con el menú como catálogo y respuestas automáticas para horarios y precios.",example:"Mensaje automático: Hola! Nuestro menú del día es X. Pedidos hasta las 11hs."},
    {title:"Calcular precio de venta correcto",desc:"Usa ChatGPT para calcular el costo de cada ingrediente de un plato y multiplica por 3 como mínimo para el precio de venta.",example:"Costo de ingredientes $500 x 3 = precio de venta $1500. Incluye gas, tiempo y empaque."}
  ],
  tips:[
    {text:"<strong>Fotografía siempre con luz natural</strong>. La mejor foto de tu plato vale más que cualquier anuncio pagado."},
    {text:"<strong>Calcula bien tus costos</strong>. Muchos emprendimientos gastronómicos cierran por no incluir todos los gastos en el precio."},
    {text:"<strong>Las reseñas de Google son oro</strong>. Pídele a cada cliente satisfecho que deje una reseña. Cambia todo."},
    {text:"<strong>El menú del día en WhatsApp</strong> fideliza clientes. Un mensaje diario con lo que hay mantiene a la gente conectada."},
    {text:"<strong>Usa ChatGPT para crear recetas</strong> con los ingredientes que te sobran antes de que venzan. Reduce el desperdicio y los costos."}
  ]
},
{
  id:"peluqueria", emoji:"💇", name:"Peluquería & Estética",
  area:"Belleza & Emprendimiento",
  desc:"Gestiona tu salón, consigue más clientes, crea contenido profesional y automatiza turnos con herramientas digitales.",
  tags:["Salón","Turnos","Clientes"],
  welcome:"La peluquería y la estética son negocios de confianza y relación personal. La tecnología no reemplaza eso, pero te ayuda a conseguir más clientes, organizarte mejor y mostrar tu trabajo al mundo.",
  tools:[
    {icon:"📅",name:"Fresha / Appointy",badge:"free",desc:"Sistema de turnos online gratuito. Los clientes reservan solos las 24hs, vos recibes la notificación y eliminas los olvidos.",tags:["Turnos","Reservas","Organización"]},
    {icon:"📸",name:"Instagram",badge:"free",desc:"La red principal para peluqueros y estilistas. Muestra antes/después, técnicas y tu trabajo. Es tu portafolio digital.",tags:["Portafolio","Clientes","Antes/Después"]},
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Redacta respuestas a clientes, crea promociones, describe servicios para tu perfil y genera contenido para redes.",tags:["Contenido","Promociones","Comunicación"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea listas de precios, promociones, stories animadas y material visual profesional para tu salón.",tags:["Precios","Diseño","Promociones"]},
    {icon:"💬",name:"WhatsApp Business",badge:"free",desc:"Confirma turnos, envía recordatorios, muestra tu lista de servicios y organiza tu agenda desde el celular.",tags:["Turnos","Recordatorios","Agenda"]},
    {icon:"📍",name:"Google Business",badge:"free",desc:"Aparece cuando alguien busca peluquería cerca. Con fotos de tu trabajo y reseñas consigues clientes nuevos gratis.",tags:["Google Maps","Clientes","Reseñas"]}
  ],
  prompts:[
    {cat:"Clientes",level:"Básico",title:"Mensaje de confirmación de turno",body:"Escríbeme 3 mensajes de WhatsApp para confirmar turno con clientes de mi peluquería/salón. Deben incluir: saludo personalizado, fecha y hora del turno, servicio reservado, dirección y recordatorio de llegar 5 minutos antes. Tono amigable y profesional."},
    {cat:"Redes",level:"Básico",title:"Caption para foto de antes y después",body:"Escribe 3 opciones de caption para Instagram para una foto de antes/después de [tipo de servicio: coloración, corte, keratina]. Incluye: descripción del cambio, técnica utilizada, beneficios del servicio, invitación a reservar turno y hashtags relevantes."},
    {cat:"Negocio",level:"Intermedio",title:"Lista de precios atractiva",body:"Ayúdame a redactar mi lista de servicios y precios para [peluquería/salón]. Mis servicios son: [lista de servicios con precios]. Hazla atractiva, clara y organizada por categorías. Que transmita profesionalismo y calidad. Formato para publicar en Instagram y WhatsApp."},
    {cat:"Marketing",level:"Intermedio",title:"Promoción para temporada",body:"Crea una promoción para [temporada: verano/invierno/fiestas/día de la madre] para mi salón. Incluye: nombre creativo de la promo, servicios incluidos, precio especial, duración de la oferta y texto para publicar en WhatsApp, Instagram y Facebook."}
  ],
  resources:[
    {icon:"📺",type:"YouTube",name:"Canales de técnicas capilares",desc:"Busca tutoriales de coloración, cortes y técnicas en YouTube. Hay miles de videos gratuitos de profesionales."},
    {icon:"📅",type:"App",name:"Fresha",desc:"La app de turnos más usada por salones de belleza. Gratuita, con recordatorios automáticos y gestión de clientes."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Peluqueros en Facebook",desc:"Comunidades latinoamericanas de peluqueros donde comparten técnicas, proveedores y consejos de negocio."},
    {icon:"🎓",type:"Curso",name:"Coiffeur Academy",desc:"Plataforma de cursos online de técnicas capilares y gestión de salón de belleza en español."},
    {icon:"📱",type:"App",name:"Snapseed",desc:"Editor de fotos gratuito para mejorar las fotos de tus trabajos antes de publicarlas en redes."},
    {icon:"🎙️",type:"Podcast",name:"Belleza & Negocio",desc:"Podcast para emprendedores del sector belleza con casos reales, marketing y gestión de salones."}
  ],
  apps:[
    {title:"Sistema de turnos online gratis",desc:"Con Fresha tus clientes reservan solos desde el link o Instagram. Recibes notificación y se elimina el doble turno.",example:"Agrega el link de Fresha en tu bio de Instagram y en tu perfil de WhatsApp Business."},
    {title:"Portafolio visual en Instagram",desc:"Fotografía cada trabajo con buena luz. Antes/después, proceso y resultado. 3 posts por semana construyen tu marca.",example:"Feed organizado: foto del trabajo, reseña de cliente, promoción. Repite el ciclo."},
    {title:"Recordatorios automáticos de turno",desc:"Configura en WhatsApp Business un mensaje automático de recordatorio 24hs antes del turno para reducir ausencias.",example:"Hola [nombre], te recordamos tu turno mañana a las [hora]. Ante cualquier cambio avisanos."},
    {title:"Lista de precios digital",desc:"Diseña tu lista de servicios en Canva como imagen y fíjala como estado de WhatsApp. Todos tus contactos la ven.",example:"Imagen vertical con logo, servicios, precios y formas de pago. Actualízala cada temporada."}
  ],
  tips:[
    {text:"<strong>Las fotos de antes/después</strong> son tu mejor publicidad. Pídele permiso al cliente y publica cada trabajo."},
    {text:"<strong>Fresha es gratis</strong> y elimina el caos de los turnos por WhatsApp. Una hora de configuración ahorra horas de gestión."},
    {text:"<strong>Google Maps es clave</strong>. Completa tu perfil con fotos, horarios y servicios. Los clientes nuevos te van a encontrar solos."},
    {text:"<strong>Fideliza con fechas especiales</strong>. Recuerda los cumpleaños de tus clientes y mándales un descuento."},
    {text:"<strong>Especialízate en algo</strong>. Ser la experta en coloración o en cabello rizado te diferencia y permite cobrar más."}
  ]
},
{
  id:"costura", emoji:"🧵", name:"Corte, Confección & Diseño de Indumentaria",
  area:"Moda & Emprendimiento Textil",
  desc:"Digitaliza tu taller, crea patrones con IA, construye tu marca de moda y llega a más clientes.",
  tags:["Patronaje","Moda","Emprendimiento"],
  welcome:"El mundo de la moda y la confección está siendo transformado por la tecnología. Aquí encontrarás herramientas para diseñar, patronar, vender y construir una marca textil profesional usando inteligencia artificial.",
  tools:[
    {icon:"✂️",name:"CLO 3D / Marvelous Designer",badge:"premium",desc:"Software de diseño y simulación de prendas en 3D. Crea patronajes digitales, simula telas y presenta colecciones sin coser una muestra física.",tags:["Patronaje 3D","Simulación","Diseño"]},
    {icon:"🎨",name:"Adobe Illustrator",badge:"premium",desc:"El estándar de la industria para diseño de indumentaria: fichas técnicas, planos, prints y presentaciones de colección profesionales.",tags:["Fichas técnicas","Diseño","Planos"]},
    {icon:"🤖",name:"ChatGPT / Claude",badge:"free",desc:"Genera fichas técnicas, descripciones de productos, estrategias de venta, presupuestos para clientas y contenido para redes sociales.",tags:["Fichas","Contenido","Estrategia"]},
    {icon:"🖼️",name:"Midjourney / Adobe Firefly",badge:"premium",desc:"Genera moodboards, visualizaciones de prendas, estampados originales y referencias de colección usando inteligencia artificial generativa.",tags:["Moodboard","Estampados","Visual"]},
    {icon:"📸",name:"Canva",badge:"free",desc:"Crea fichas de producto, lookbooks, catálogos de temporada y contenido para Instagram de manera rápida y profesional.",tags:["Catálogo","Lookbook","Redes"]},
    {icon:"🛒",name:"Tienda Nube / Shopify",badge:"premium",desc:"Vende tus prendas online con tienda propia: gestión de stock, tallas, colores, pagos y envíos integrados.",tags:["E-commerce","Ventas","Online"]}
  ],
  prompts:[
    {cat:"Ficha técnica",level:"Básico",title:"Generar ficha técnica de prenda",body:"Actúa como técnico en indumentaria. Crea una ficha técnica completa para [nombre de la prenda]. Incluye: descripción de la prenda, materiales y composición de tela recomendada, avíos necesarios, instrucciones de confección resumidas, tabla de tallas en cm, cuidado del tejido y precio de venta sugerido según mercado latinoamericano."},
    {cat:"Ventas",level:"Básico",title:"Descripción de prenda para tienda online",body:"Soy diseñadora/confeccionista y quiero publicar [descripción de la prenda] en mi tienda online. Escribe una descripción de producto atractiva que incluya: nombre creativo de la prenda, descripción sensorial del tejido y la caída, cómo combinarla y para qué ocasiones, tabla de medidas resumida y cuidados del textil."},
    {cat:"Diseño",level:"Intermedio",title:"Concepto de colección cápsula",body:"Ayúdame a desarrollar el concepto de una colección cápsula de [N] prendas para [temporada] con el concepto inspirador de [tema]. Incluye: nombre de la colección, paleta de colores con códigos HEX, tejidos sugeridos, siluetas clave, 5-7 prendas que componen la cápsula y cómo se combinan entre sí."},
    {cat:"Marketing",level:"Intermedio",title:"Estrategia de redes para marca de moda",body:"Tengo una marca de indumentaria llamada [nombre] que produce [tipo de prendas] para [cliente ideal]. Diseña mi estrategia de Instagram para el próximo mes. Incluye: 4 pilares de contenido, tipos de post por pilar, frecuencia de publicación, ideas concretas de 8 posts y hashtags por categoría."}
  ],
  resources:[
    {icon:"🎓",type:"Plataforma",name:"Domestika — Moda",desc:"Cursos de diseño de indumentaria, patronaje, ilustración de moda y construcción de marca. Precios accesibles en español."},
    {icon:"📺",type:"YouTube",name:"Costura Fácil / Mango Moda",desc:"Canales en español con tutoriales de patronaje, confección y técnicas de costura para todos los niveles."},
    {icon:"📖",type:"Libro",name:"Diseño de Moda (Davies, Rebecca)",desc:"Referencia esencial para diseñadores: proceso creativo, fichas técnicas, moodboards y presentación de colecciones."},
    {icon:"🌐",type:"Comunidad",name:"WGSN Trend Community",desc:"Plataforma de tendencias de moda mundial. La versión gratuita ofrece informes y tendencias de temporada."},
    {icon:"📱",type:"App",name:"Pinterest",desc:"La herramienta de moodboard más usada en diseño de moda. Crea tableros de inspiración, paletas y referencias de colección."},
    {icon:"🧶",type:"Comunidad",name:"Grupos de Costureras en Facebook",desc:"Comunidades de costureras y diseñadoras latinoamericanas donde se comparten patrones, consejos y se consiguen clientas."}
  ],
  apps:[
    {title:"Crear un lookbook digital en Canva",desc:"Fotografía tus prendas con buena luz, usa Canva para componer páginas de lookbook con la paleta de tu marca.",example:"Lookbook verano 2026: 8 páginas, fondo blanco, tipografía minimalista, precio y talla en cada prenda."},
    {title:"Generar estampados con IA",desc:"Usa Midjourney o Adobe Firefly para crear estampados originales describiendo el patrón, la paleta y el estilo.",example:"Geometric floral print, earthy tones, 1970s Latin American style, seamless pattern, textile design."},
    {title:"Ficha técnica digital para clientas",desc:"Con ChatGPT genera fichas técnicas profesionales para cada encargo. Incluye medidas, tela, avíos y precio.",example:"Ficha de encargo: Nombre cliente, Prenda, Tela, Medidas, Fecha entrega, Seña, Saldo."},
    {title:"Vender por Instagram sin tienda propia",desc:"Publica tus prendas en stories y feed, activa el catálogo de Instagram Shopping y usa Linktree para centralizar tus medios de contacto.",example:"Post: foto prenda, precio, tallas disponibles, Escribime para reservar, sticker de DM."}
  ],
  tips:[
    {text:"<strong>Fotografía tus prendas siempre sobre modelo o maniquí</strong>. La ropa en percha vende mucho menos que la ropa puesta con buena luz natural."},
    {text:"<strong>Usa ChatGPT para redactar tus fichas técnicas y presupuestos</strong>. Describe la prenda y te genera el documento en segundos."},
    {text:"<strong>Crea una paleta de colores de temporada</strong> y aplícala en toda tu comunicación: redes, catálogo y empaque."},
    {text:"<strong>Ofrece tallajes reales</strong>: mide bien y publica la tabla de medidas. Eso reduce las devoluciones y genera más confianza."},
    {text:"<strong>Documenta tu proceso</strong>: el detrás de escena de la costura genera mucho engagement. Trazado, corte, costura, terminación = contenido auténtico."}
  ]
},
{
  id:"contenido", emoji:"🎬", name:"Creadores de Contenido",
  area:"Creación & Redes Sociales",
  desc:"Escala tu producción de contenido con IA: ideas, guiones, edición, monetización y crecimiento.",
  tags:["YouTube","TikTok","Monetización"],
  welcome:"La IA ha democratizado la producción de contenido de calidad. Aquí encontrarás las herramientas para crear más rápido, crecer más inteligente y monetizar tu audiencia.",
  tools:[
    {icon:"🎬",name:"CapCut",badge:"free",desc:"La mejor app de edición para móvil y desktop. Templates virales, subtítulos automáticos, efectos IA.",tags:["Edición","Reels","TikTok"]},
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Ideas de contenido, guiones completos, titles con SEO, descripciones, respuestas a comentarios.",tags:["Ideas","Guiones","SEO"]},
    {icon:"🎙️",name:"ElevenLabs",badge:"premium",desc:"Voz en off realista con IA para videos. Clona tu voz o usa voces predefinidas para narración.",tags:["Voz","Narración","IA"]},
    {icon:"🖼️",name:"Adobe Firefly",badge:"premium",desc:"Genera thumbnails, imágenes para posts y arte visual con IA de forma comercialmente segura.",tags:["Thumbnails","Arte","Visual"]},
    {icon:"📊",name:"TubeBuddy",badge:"premium",desc:"Herramienta de SEO para YouTube: keywords, análisis de competencia, tags y optimización de título.",tags:["SEO","YouTube","Keywords"]},
    {icon:"📱",name:"Later / Buffer",badge:"premium",desc:"Programa tus publicaciones en todas las redes. Análisis de mejores horarios y métricas de crecimiento.",tags:["Programación","Redes","Análisis"]}
  ],
  prompts:[
    {cat:"Ideas",level:"Básico",title:"20 ideas de contenido",body:"Soy creador de contenido en [nicho] con [N] seguidores en [plataforma]. Dame 20 ideas de videos o posts: 5 educativos, 5 de entretenimiento, 5 de tendencia actual y 5 de detrás de cámaras. Para cada idea: título llamativo, ángulo único y por qué funcionaría con mi audiencia."},
    {cat:"Guiones",level:"Intermedio",title:"Guión de video YouTube",body:"Escribe un guión completo para un video de YouTube de 8-10 minutos sobre [tema] dirigido a [audiencia]. Incluye: hook inicial (primeros 30 segundos), contexto y por qué importa el tema, desarrollo en 3 partes, llamada a la acción a los 2 minutos, cierre memorable y descripción optimizada para SEO con timestamps."},
    {cat:"SEO",level:"Intermedio",title:"Optimizar para YouTube SEO",body:"Quiero publicar un video de YouTube sobre [tema]. Optimiza: 5 opciones de título con keyword principal, descripción de 250 palabras con keyword en los primeros 2 párrafos, 15 tags relevantes, capítulos con timestamps sugeridos y miniatura textual recomendada."},
    {cat:"Monetización",level:"Avanzado",title:"Estrategia de monetización",body:"Tengo [N] seguidores en [plataforma] y [N] visitas promedio. Mi nicho es [nicho]. Diseña mi estrategia de monetización para los próximos 6 meses con: canales de ingresos por orden de prioridad, cómo llegar a cada uno, expectativas realistas de ingresos por canal y hoja de ruta con hitos mensuales."}
  ],
  resources:[
    {icon:"🎓",type:"Curso",name:"Think Media (YouTube)",desc:"El mejor canal en inglés para crecer en YouTube. Estrategia, equipo, monetización y crecimiento."},
    {icon:"📊",type:"Herramienta",name:"vidIQ",desc:"Alternativa a TubeBuddy para SEO de YouTube. Plan gratuito con análisis básico de keywords."},
    {icon:"🎙️",type:"Podcast",name:"Creator Economy Podcast",desc:"Tendencias, monetización y estrategias para creadores de contenido independientes."},
    {icon:"📱",type:"Comunidad",name:"Creator IQ / Collabstr",desc:"Plataformas donde marcas buscan creadores para colaboraciones pagas."},
    {icon:"📺",type:"YouTube",name:"Nico Elegante",desc:"Canal latinoamericano sobre crecimiento en redes sociales, monetización y creación de marca personal."},
    {icon:"🌐",type:"Newsletter",name:"The Creator Economy",desc:"Newsletter semanal con tendencias, oportunidades de ingresos y análisis del ecosistema de creadores."}
  ],
  apps:[
    {title:"Producir 30 piezas de contenido por semana",desc:"Crea un content pillar: 1 video largo, extraes clips para TikTok/Reels, los guiones se convierten en posts, las ideas en stories.",example:"1 video YouTube 10 min = 5 Reels + 10 tweets + 3 posts + 1 newsletter."},
    {title:"Thumbnails que aumentan el CTR",desc:"Estudia los videos de más éxito en tu nicho en YouTube Studio. Adobe Firefly o Canva para crear variaciones y prueba A/B.",example:"Fórmula ganadora: Cara con emoción clara + Número o pregunta + Colores contrastantes."},
    {title:"Monetizar con membresías",desc:"Crea un nivel de Patreon o YouTube Memberships con contenido exclusivo.",example:"1,000 fans x $5/mes = $5,000/mes. El 1,000 true fans de Kevin Kelly es real."},
    {title:"Automatizar ideas con IA",desc:"Una vez por semana, pasa 20 minutos con ChatGPT generando ideas para el mes completo.",example:"Prompt: Dame 60 ideas de contenido para [nicho] para publicar en [plataforma] durante este mes."}
  ],
  tips:[
    {text:"<strong>Consistencia más que perfección</strong>. Publica aunque no sea perfecto. El algoritmo premia la constancia."},
    {text:"<strong>Los primeros 3 segundos</strong> son todo. Si no enganchas en 3 segundos, el resto del video no importa."},
    {text:"<strong>Estudia tu analítica</strong> cada semana. Mira dónde la gente se va de tu video. Ahí está el problema."},
    {text:"<strong>La reutilización de contenido</strong> es tu mayor palanca. Un buen video puede vivir como 10 piezas diferentes."},
    {text:"<strong>Conéctate con tu comunidad</strong>. Responde comentarios las primeras horas. El engagement temprano impulsa el algoritmo."}
  ]
},
{
  id:"emprendedores", emoji:"💼", name:"Emprendedores",
  area:"Negocios & Startups",
  desc:"Valida tu idea, lanza tu producto y escala tu negocio con herramientas de IA y estrategia digital.",
  tags:["Startup","Validación","Crecimiento"],
  welcome:"Emprender en la era de la IA es una ventaja competitiva enorme. Aquí encontrarás las herramientas para validar tu idea, construir tu producto y crecer con menos recursos.",
  tools:[
    {icon:"🤖",name:"ChatGPT/Claude",badge:"free",desc:"Tu co-fundador de IA: analiza mercados, valida ideas, redacta propuestas, crea planes de negocio y responde consultas.",tags:["Estrategia","Análisis","Plan"]},
    {icon:"📊",name:"Notion",badge:"free",desc:"Tu sistema operativo del negocio: OKRs, gestión de proyectos, wikis, CRM básico y documentación.",tags:["Gestión","CRM","Documentación"]},
    {icon:"💰",name:"Stripe",badge:"premium",desc:"Acepta pagos online de todo el mundo en minutos. Subscripciones, pagos únicos y facturación automática.",tags:["Pagos","Subscripciones","Global"]},
    {icon:"🎨",name:"Framer / Webflow",badge:"premium",desc:"Crea landing pages profesionales y sitios web sin código. Ideales para validar ideas rápido.",tags:["Web","Sin código","Landing"]},
    {icon:"📧",name:"Brevo (SendinBlue)",badge:"free",desc:"Email marketing, automatizaciones y CRM. Plan gratuito robusto para emprendedores en etapa inicial.",tags:["Email","CRM","Automatización"]},
    {icon:"📱",name:"Typeform",badge:"premium",desc:"Crea encuestas hermosas para validar tu idea, conocer a tu cliente y recolectar feedback.",tags:["Encuestas","Validación","Feedback"]}
  ],
  prompts:[
    {cat:"Validación",level:"Básico",title:"Analizar idea de negocio",body:"Actúa como mentor de startups con experiencia en Latinoamérica. Quiero lanzar [descripción de tu idea] dirigido a [segmento de clientes]. Evalúa: problema real que resuelve, tamaño de mercado estimado, 3 competidores principales y cómo diferenciarse, riesgos principales, modelo de negocio viable y los 3 primeros pasos para validar sin invertir dinero."},
    {cat:"Marketing",level:"Intermedio",title:"Estrategia de lanzamiento",body:"Soy fundador de [startup/negocio] que ofrece [producto/servicio] a [cliente objetivo]. Necesito una estrategia de lanzamiento con presupuesto cero o muy bajo. Diseña: propuesta de valor clara, canales de adquisición gratuitos prioritarios, mensaje de lanzamiento para redes sociales, plan de las primeras 4 semanas y métricas para medir si va bien."},
    {cat:"Finanzas",level:"Intermedio",title:"Modelo financiero básico",body:"Ayúdame a construir un modelo financiero simple para [tipo de negocio]. Incluye: estructura de ingresos, costos variables y fijos, punto de equilibrio, proyección de 12 meses y cuánto capital necesito para los primeros 6 meses. Dame fórmulas para Google Sheets."},
    {cat:"Ventas",level:"Básico",title:"Pitch de 60 segundos",body:"Escribe un elevator pitch de 60 segundos para [mi startup] que resuelve [problema] para [cliente]. El pitch debe incluir: gancho inicial, solución, diferenciación, tracción si la hay y llamado a la acción. Tono confiado, claro y sin jerga técnica."}
  ],
  resources:[
    {icon:"📖",type:"Libro",name:"The Lean Startup (E. Ries)",desc:"El libro fundacional del emprendimiento moderno. Valida antes de construir. PDF disponible online."},
    {icon:"🎙️",type:"Podcast",name:"Y Combinator Startup School",desc:"El programa de aceleración más influyente del mundo tiene videos gratuitos sobre todos los aspectos del emprendimiento."},
    {icon:"📺",type:"YouTube",name:"Platzi Business",desc:"Contenido en español sobre negocios digitales, marketing y crecimiento de startups latinoamericanas."},
    {icon:"🌐",type:"Comunidad",name:"StartupLatam",desc:"Red de emprendedores latinoamericanos con eventos, recursos y conexiones de inversión."},
    {icon:"🏆",type:"Programa",name:"Google for Startups",desc:"Recursos, créditos de Google Cloud y mentoría para startups en etapas tempranas. Aplica gratis."},
    {icon:"💡",type:"Herramienta",name:"Product Hunt",desc:"Lanza tu producto y consigue tus primeros usuarios. La plataforma de lanzamiento más reconocida del mundo tech."}
  ],
  apps:[
    {title:"Validar idea en 48 horas",desc:"Lunes: define problema y solución con IA. Martes: crea landing con Framer. Miércoles: publica en redes. Jueves: mide clicks. Viernes: entrevista a 5 potenciales clientes.",example:"Landing mínima: Título, Descripción, Email de espera, Botón. Nada más."},
    {title:"CRM gratuito con Notion",desc:"Crea una base de datos en Notion para gestionar leads, clientes, conversaciones y seguimientos.",example:"Tabla: Nombre, Email, Estado, Última interacción, Notas."},
    {title:"Automatizar emails con Brevo",desc:"Configura una secuencia de bienvenida automática para quien se registre en tu lista: día 1, día 3, día 7.",example:"Email 1: Bienvenida + valor gratuito. Email 3: Caso de éxito. Email 7: Oferta especial."},
    {title:"Analizar a tu competencia con IA",desc:"Pide a Claude o ChatGPT que analice las páginas web, reseñas y redes de tus 3 competidores principales.",example:"Prompt: Analiza [URL competidor] y extrae: propuesta de valor, precios, puntos débiles en reseñas y oportunidades."}
  ],
  tips:[
    {text:"<strong>Vende antes de construir</strong>. Si alguien no te da su email o pre-paga, probablemente no pagará después tampoco."},
    {text:"<strong>Tu primer cliente</strong> vale más que tu mejor pitch. Enfócate en conseguir 10 clientes felices antes de escalar."},
    {text:"<strong>Usa IA para hacer de todo</strong>: redactar, analizar, diseñar, planificar. Eres un equipo de uno, la IA es el resto del equipo."},
    {text:"<strong>El feedback duele pero salva</strong>. Muéstrale tu producto a 10 personas de tu mercado objetivo y escucha honestamente."},
    {text:"<strong>Mide una sola métrica norte</strong>: usuarios activos, ingresos recurrentes o retención. No todo a la vez."}
  ]
},
{
  id:"profesores", emoji:"🍎", name:"Profesores",
  area:"Educación & Pedagogía",
  desc:"Planificación de clases, materiales didácticos, evaluaciones y herramientas para el aula del siglo XXI.",
  tags:["Planificación","Evaluación","Didáctica"],
  welcome:"Bienvenido al futuro del aula. Aquí encontrarás herramientas y estrategias para transformar tu práctica docente, crear materiales increíbles y personalizar el aprendizaje de tus estudiantes.",
  tools:[
    {icon:"🤖",name:"ChatGPT / Claude",badge:"free",desc:"Genera rubricas, planificaciones, actividades diferenciadas, explicaciones alternativas y feedback personalizado.",tags:["Planificación","Evaluación","Diferenciación"]},
    {icon:"🎮",name:"Kahoot!",badge:"free",desc:"Crea cuestionarios gamificados para repasar contenidos, evaluar de forma divertida y aumentar el engagement.",tags:["Gamificación","Evaluación","Repaso"]},
    {icon:"📊",name:"Canva for Education",badge:"free",desc:"Diseña presentaciones, infografías, materiales didácticos y recursos visuales de forma profesional. Gratis para docentes.",tags:["Materiales","Presentaciones","Visual"]},
    {icon:"🎬",name:"Loom",badge:"free",desc:"Graba y comparte videos explicativos para tus estudiantes. Ideal para clase invertida y material complementario.",tags:["Video","Clase invertida","Explicaciones"]},
    {icon:"📝",name:"Google Workspace Edu",badge:"free",desc:"Suite completa para educación: Docs, Slides, Forms para exámenes, Classroom y Meet para clases virtuales.",tags:["Colaboración","Exámenes","Virtual"]},
    {icon:"🧩",name:"Padlet",badge:"free",desc:"Tablero colaborativo virtual donde los estudiantes publican ideas, trabajos y reflexiones en tiempo real.",tags:["Colaboración","Participación","Creativo"]}
  ],
  prompts:[
    {cat:"Planificación",level:"Básico",title:"Plan de clase completo",body:"Actúa como experto en diseño instruccional. Crea un plan de clase detallado para [asignatura] sobre [tema], dirigido a estudiantes de [nivel/grado/edad]. Incluye: objetivo de aprendizaje con verbo de Bloom, materiales necesarios, activación de conocimientos previos 10 min, desarrollo 25 min, cierre reflexivo 5 min y evaluación formativa. Duración total: 45 minutos."},
    {cat:"Evaluación",level:"Intermedio",title:"Rúbrica de evaluación",body:"Diseña una rúbrica analítica para evaluar [tarea o proyecto] en [asignatura] para [nivel educativo]. La rúbrica debe tener 4-5 criterios de evaluación con 4 niveles de desempeño: Excelente, Satisfactorio, En desarrollo, Insuficiente. Incluye descriptores claros y específicos para cada nivel."},
    {cat:"Diferenciación",level:"Avanzado",title:"Actividades diferenciadas",body:"Tengo un grupo diverso en [asignatura, nivel] con diferentes niveles de aprendizaje. El tema es [tema]. Diseña 3 versiones de la misma actividad: una para estudiantes que van adelante, una para el nivel estándar y una de apoyo para quienes tienen dificultades. Mantén el mismo objetivo pero adapta complejidad, soporte y extensión."},
    {cat:"Feedback",level:"Básico",title:"Comentarios de retroalimentación",body:"Soy docente y necesito escribir comentarios de retroalimentación para trabajos estudiantiles. Escríbelos en tono positivo, específico y que oriente la mejora. El trabajo es sobre [tema], el estudiante [descripción del desempeño]. Dame 5 estilos de comentario: motivador, técnico, reflexivo, orientado a metas y para estudiante con dificultades."}
  ],
  resources:[
    {icon:"🎓",type:"Plataforma",name:"Coursera for Campus",desc:"Miles de cursos universitarios de actualización docente. Muchas instituciones ofrecen acceso gratuito."},
    {icon:"📺",type:"YouTube",name:"Educación 3.0",desc:"Canal sobre innovación educativa, tecnología en el aula y metodologías activas en español."},
    {icon:"🎙️",type:"Podcast",name:"Docentes en Acción",desc:"Podcast latinoamericano con experiencias reales de docentes innovadores de todos los niveles."},
    {icon:"🧩",type:"Herramienta",name:"Genially",desc:"Crea presentaciones interactivas, infografías animadas y materiales didácticos que van más allá del PowerPoint."},
    {icon:"📖",type:"Blog",name:"Edutopia",desc:"El referente mundial en educación innovadora. Artículos, videos y recursos basados en evidencia."},
    {icon:"🌐",type:"Red",name:"Red de Maestros",desc:"Comunidad iberoamericana de docentes que comparten recursos, experiencias y proyectos colaborativos."}
  ],
  apps:[
    {title:"Planificar un mes de clases en 1 hora",desc:"Usa ChatGPT para generar el esquema de todas tus clases del mes: objetivos, actividades, recursos y evaluaciones.",example:"Prompt: Crea el esquema de 16 clases de Matemática para 7 grado sobre fracciones, con actividad principal por clase."},
    {title:"Crear evaluaciones anti-copia con IA",desc:"Diseña evaluaciones con preguntas abiertas, análisis de casos y reflexión personal que son difíciles de copiar.",example:"En vez de cuánto es 2+2, Explica con tus palabras cómo usarías la suma en un negocio real."},
    {title:"Videos explicativos con Loom",desc:"Graba explicaciones breves de 5-10 min para que los estudiantes las vean antes o después de clase.",example:"Graba la explicación teórica en casa. En clase, usa el tiempo para práctica y discusión."},
    {title:"Kahoot para repasar antes del examen",desc:"Crea un Kahoot con los conceptos clave de la unidad. Los estudiantes repasan jugando.",example:"20 preguntas, 30 segundos c/u. El top 3 recibe puntos adicionales."}
  ],
  tips:[
    {text:"<strong>Empieza pequeño</strong>: integra UNA herramienta nueva por mes. Kahoot esta semana. Loom el próximo mes. No todo a la vez."},
    {text:"<strong>Usa ChatGPT para diferenciación</strong>: pídele versiones más simples o más complejas de cualquier actividad según tu grupo."},
    {text:"<strong>Canva for Education es gratis</strong> para docentes. Solicita tu cuenta Pro gratuita con tu email institucional."},
    {text:"<strong>La retroalimentación específica</strong> vale más que una nota. Tu argumento en el párrafo 2 necesita más evidencia es mejor que Regular."},
    {text:"<strong>Conecta los contenidos con el mundo real</strong>. ¿Dónde ves esto en tu vida? transforma el aprendizaje pasivo en activo."}
  ]
},
{
  id:"secundario", emoji:"📚", name:"Estudiante Secundario",
  area:"Educación & Aprendizaje",
  desc:"Herramientas de IA para estudiantes del secundario: hacer la tarea más rápido, estudiar mejor y organizarte.",
  tags:["Tarea","Estudio","Organización"],
  welcome:"La IA puede ser tu mejor aliada en el secundario, pero usada bien. No para hacer trampa, sino para entender mejor, estudiar más inteligente y organizarte. Aquí encuentras exactamente eso.",
  tools:[
    {icon:"🤖",name:"ChatGPT / Claude",badge:"free",desc:"Explicaciones de temas que no entendiste, resúmenes, ejemplos prácticos y respuestas a tus dudas en cualquier materia.",tags:["Explicaciones","Resúmenes","Dudas"]},
    {icon:"📝",name:"Notion",badge:"free",desc:"Organiza tus materias, fechas de exámenes, trabajos prácticos y notas de clase en un solo lugar.",tags:["Organización","Exámenes","Notas"]},
    {icon:"🎯",name:"Kahoot! / Quizlet",badge:"free",desc:"Repasa cualquier tema de forma divertida con tarjetas de estudio y cuestionarios interactivos.",tags:["Repaso","Memorización","Juego"]},
    {icon:"🎬",name:"YouTube",badge:"free",desc:"Explicaciones en video de cualquier tema difícil. Busca el canal correcto y entiendes en minutos.",tags:["Explicaciones","Video","Materias"]},
    {icon:"📖",name:"Khan Academy",badge:"free",desc:"Matemática, física, química, historia y más. Con ejercicios, videos y seguimiento de tu progreso. Gratis y en español.",tags:["Matemática","Ciencias","Ejercicios"]},
    {icon:"📅",name:"Google Calendar",badge:"free",desc:"Organiza fechas de exámenes, entrega de trabajos y actividades extracurriculares. Con recordatorios automáticos.",tags:["Agenda","Exámenes","Recordatorios"]}
  ],
  prompts:[
    {cat:"Estudio",level:"Básico",title:"Explicar un tema difícil",body:"No entiendo [tema de la materia]. Explícamelo como si tuvieras que explicárselo a alguien de mi edad (aproximadamente [tu edad] años), usando ejemplos de la vida cotidiana y sin tecnicismos innecesarios. Al final, hazme 3 preguntas para verificar que lo entendí."},
    {cat:"Tarea",level:"Básico",title:"Ayuda para estructurar un trabajo",body:"Tengo que hacer un trabajo de [materia] sobre [tema]. El trabajo debe tener [extensión/requisitos del profesor]. Ayúdame a: hacer un esquema de los puntos principales que debería incluir, qué información buscar para cada punto y cómo ordenarlo de forma lógica. No escribas el trabajo vos, ayúdame a organizarme para hacerlo yo."},
    {cat:"Examen",level:"Básico",title:"Preparar para el examen",body:"Tengo examen de [materia] sobre [temas]. Créame: un resumen de los conceptos más importantes, 10 preguntas posibles de examen con sus respuestas, los errores más comunes que cometen los estudiantes en este tema y un plan de estudio para los próximos [días disponibles]."},
    {cat:"Exposición",level:"Intermedio",title:"Preparar exposición oral",body:"Tengo que hacer una exposición oral sobre [tema] en [materia] de [duración]. Ayúdame con: estructura de la presentación, puntos clave que no pueden faltar, cómo empezar para captar la atención, qué decir en cada diapositiva, cómo terminar de forma memorable y consejos para controlar los nervios."}
  ],
  resources:[
    {icon:"📚",type:"Plataforma",name:"Khan Academy",desc:"La mejor plataforma educativa gratuita. Todas las materias del secundario con ejercicios y videos en español."},
    {icon:"🎬",type:"YouTube",name:"ProfeVirtual / Educatina",desc:"Canales en español con explicaciones de todas las materias del secundario de forma clara y entretenida."},
    {icon:"🎯",type:"App",name:"Quizlet",desc:"Crea tarjetas de memorización para cualquier materia. Perfecto para vocabulario, historia y ciencias."},
    {icon:"📝",type:"App",name:"Notion",desc:"Organiza todas tus materias, fechas de exámenes y apuntes en un solo lugar desde el celular."},
    {icon:"🌐",type:"Plataforma",name:"Duolingo",desc:"Aprende inglés u otro idioma 15 minutos al día de forma divertida. El idioma que más te va a servir en el futuro."},
    {icon:"🧘",type:"App",name:"Insight Timer",desc:"Meditaciones cortas para antes de estudiar o de un examen. La calma mejora la concentración y la memoria."}
  ],
  apps:[
    {title:"Entender lo que no te explicaron bien",desc:"Cuando sales de clase sin entender algo, pregúntale a ChatGPT o Claude. Te lo explican con paciencia y ejemplos.",example:"No entiendo qué son las fracciones equivalentes. IA: te lo explica con pizza, dinero, ejemplos visuales."},
    {title:"Organizar los exámenes del trimestre",desc:"Carga todas las fechas de exámenes y entregas en Google Calendar. Configura recordatorio 3 días antes para estudiar.",example:"Vista semanal del calendario: cuándo tienes libre para estudiar y cuándo están los exámenes."},
    {title:"Repasar con Quizlet",desc:"Crea tarjetas para memorizar fechas históricas, vocabulario de inglés, fórmulas de química.",example:"Frente: En qué año fue la Revolución Francesa? Dorso: 1789. Repasas hasta que te sale solo."},
    {title:"Estudiar con YouTube",desc:"Busca el tema de tu materia en YouTube. Las explicaciones en video funcionan mejor que el libro para muchos temas.",example:"Búsqueda: Las ecuaciones de segundo grado explicadas fácil en español."}
  ],
  tips:[
    {text:"<strong>Usa la IA para entender, no para copiar</strong>. Si copias sin entender, el examen te va a encontrar sin respuestas."},
    {text:"<strong>Estudia de a poco todos los días</strong>. 30 minutos diarios superan a 5 horas la noche antes del examen. Siempre."},
    {text:"<strong>Khan Academy es gratis y en español</strong>. Si hay una materia que no entiendes, ahí encuentras explicaciones de calidad."},
    {text:"<strong>Escribir a mano ayuda a recordar</strong>. Toma apuntes en clase aunque los tengas digitales. El cerebro aprende más."},
    {text:"<strong>El descanso es parte del estudio</strong>. Dormir bien antes de un examen vale más que estudiar toda la noche."}
  ]
},
{
  id:"universitario", emoji:"🎓", name:"Estudiante Universitario",
  area:"Educación Superior & Investigación",
  desc:"IA para universitarios: investigación académica, redacción de trabajos, gestión del tiempo y preparación profesional.",
  tags:["Investigación","Trabajos","Universidad"],
  welcome:"La universidad es el lugar donde aprendes a aprender. La IA bien usada puede multiplicar tu capacidad de investigar, escribir y pensar críticamente. Aquí encuentras las herramientas para aprovecharte de esa ventaja.",
  tools:[
    {icon:"🤖",name:"Claude AI",badge:"free",desc:"El mejor para análisis profundo, investigación académica, revisión de textos y síntesis de bibliografía compleja.",tags:["Investigación","Análisis","Escritura"]},
    {icon:"📚",name:"Zotero",badge:"free",desc:"Gestor de referencias bibliográficas gratuito. Organiza todas tus fuentes, cita automáticamente en APA/Chicago/MLA.",tags:["Referencias","Citas","Bibliografía"]},
    {icon:"🔍",name:"Google Scholar",badge:"free",desc:"Busca artículos académicos, papers y tesis de todo el mundo. El punto de partida para cualquier investigación.",tags:["Papers","Investigación","Académico"]},
    {icon:"📝",name:"Notion",badge:"free",desc:"Sistema de apuntes, gestión de trabajos, calendario académico y base de conocimiento personal.",tags:["Apuntes","Organización","Conocimiento"]},
    {icon:"🎯",name:"Anki",badge:"free",desc:"El sistema de repetición espaciada más efectivo para memorizar grandes cantidades de información para finales.",tags:["Memorización","Finales","Estudio"]},
    {icon:"📊",name:"Overleaf",badge:"free",desc:"Editor de LaTeX online para escribir trabajos académicos con formato profesional. Ideal para ciencias e ingeniería.",tags:["LaTeX","Trabajos","Formato"]}
  ],
  prompts:[
    {cat:"Investigación",level:"Intermedio",title:"Síntesis de bibliografía académica",body:"Estoy investigando [tema académico] para [tipo de trabajo]. Tengo estas fuentes: [lista de artículos o autores]. Ayúdame a: identificar los argumentos principales de cada fuente, encontrar puntos de acuerdo y contradicción entre ellas, elaborar una síntesis que integre las perspectivas y sugerir qué aspectos del tema quedan sin cubrir. No inventes fuentes que no mencioné."},
    {cat:"Escritura",level:"Intermedio",title:"Mejorar redacción académica",body:"Escribí este párrafo para mi trabajo de [materia]: [pegar el párrafo]. Revisalo y mejoralo considerando: claridad y precisión conceptual, coherencia argumentativa, uso correcto de lenguaje académico, estructura y cómo podría vincular mejor con el argumento central del trabajo. Dame la versión mejorada y explícame qué cambiaste y por qué."},
    {cat:"Parciales",level:"Básico",title:"Preparar para el parcial",body:"Tengo parcial de [materia] sobre [temas]. El formato es [escrito/oral/múltiple opción]. Ayúdame con: los conceptos más importantes que no pueden faltar, preguntas probables según el temario, errores comunes que cometen los estudiantes en este tema y estrategia de estudio para los [días disponibles] que me quedan."},
    {cat:"Tesis",level:"Avanzado",title:"Estructurar trabajo de investigación",body:"Estoy escribiendo [tesis/tesina/trabajo final] sobre [tema] en la carrera de [carrera]. El problema de investigación es: [descripción]. Ayúdame a: refinar la pregunta de investigación, proponer una estructura de capítulos lógica, identificar la metodología más apropiada, sugerir marco teórico relevante y elaborar los objetivos general y específicos."}
  ],
  resources:[
    {icon:"🔍",type:"Base de datos",name:"Google Scholar",desc:"Acceso gratuito a millones de artículos académicos, tesis y publicaciones científicas de todo el mundo."},
    {icon:"📚",type:"Herramienta",name:"Zotero",desc:"El gestor de referencias más completo y gratuito. Cita automáticamente en cualquier formato bibliográfico."},
    {icon:"📖",type:"Plataforma",name:"Sci-Hub / Unpaywall",desc:"Acceso a artículos científicos que normalmente son de pago. Herramienta muy usada por universitarios de todo el mundo."},
    {icon:"🎙️",type:"Podcast",name:"Podcast de tu carrera",desc:"Busca podcasts especializados en tu área de estudio. Los profesionales que ya están en el campo te enseñan desde la práctica."},
    {icon:"🌐",type:"Comunidad",name:"ResearchGate",desc:"Red social académica donde investigadores comparten papers, responden preguntas y generan conexiones profesionales."},
    {icon:"🎯",type:"App",name:"Anki",desc:"Sistema de repetición espaciada para memorizar anatomía, fórmulas, fechas o cualquier contenido de examen."}
  ],
  apps:[
    {title:"Sistema de notas con Notion",desc:"Una base de datos en Notion por materia: apuntes de clase, lecturas obligatorias, fechas de entrega y conexiones entre temas.",example:"Estructura: Materia, Unidad, Tema, Apuntes + Fuentes + Preguntas para el parcial."},
    {title:"Investigación asistida con Claude",desc:"Pídele a Claude que analice y sintetice bibliografía compleja. Te ahorra horas de lectura y te ayuda a conectar ideas.",example:"Dale los abstracts de 5 papers y pídele: comparar argumentos, identificar consensos y señalar vacíos teóricos."},
    {title:"Gestión de referencias con Zotero",desc:"Instala Zotero y el plugin del navegador. Cada vez que leas un paper, lo guardas con un clic y la cita queda lista.",example:"Al escribir el trabajo: Ctrl+Z en Word o Google Docs y la cita en APA aparece automáticamente."},
    {title:"Finales con Anki",desc:"Crea tarjetas Anki con los conceptos clave de cada materia. El algoritmo te muestra lo que estás por olvidar justo antes de olvidarlo.",example:"Anatomía: 500 tarjetas de estructuras. Anki las reparte en 15 minutos diarios durante 3 meses."}
  ],
  tips:[
    {text:"<strong>Claude es mejor que ChatGPT para trabajos académicos</strong>. Su capacidad analítica y su honestidad sobre lo que no sabe son superiores."},
    {text:"<strong>Zotero desde el primer año</strong>. Llegar a la tesis sin gestor de referencias es el error más caro que puedes cometer."},
    {text:"<strong>La escritura académica se aprende escribiendo</strong>. Pídele a Claude que critique tus párrafos, no que los escriba por vos."},
    {text:"<strong>Conéctate con profesores e investigadores</strong> en ResearchGate y LinkedIn. Las oportunidades de becas y pasantías vienen de ahí."},
    {text:"<strong>La salud mental importa</strong>. La exigencia universitaria puede ser agotadora. Busca apoyo antes de llegar al límite."}
  ]
},
{
  id:"terciario", emoji:"🏫", name:"Estudiante Terciario",
  area:"Formación Técnica & Profesional",
  desc:"IA para estudiantes de institutos terciarios: organización del estudio, práctica profesional, trabajos técnicos y equilibrio entre estudio y trabajo.",
  tags:["Técnico","Práctica","Organización"],
  welcome:"El terciario combina teoría y práctica de forma intensa. Muchos estudiantes terciarios trabajan al mismo tiempo que estudian. Aquí encuentras herramientas para estudiar más inteligente, rendir mejor y prepararte para el campo profesional.",
  tools:[
    {icon:"🤖",name:"ChatGPT / Claude",badge:"free",desc:"Explicaciones técnicas de tu carrera, ayuda con trabajos prácticos, simulación de situaciones profesionales y consultas específicas de tu área.",tags:["Técnico","Trabajos","Simulación"]},
    {icon:"📝",name:"Notion",badge:"free",desc:"Organiza materias, prácticas profesionales, horarios de trabajo y estudio, y toda la documentación de tu carrera.",tags:["Organización","Prácticas","Horarios"]},
    {icon:"📅",name:"Google Calendar",badge:"free",desc:"Coordina trabajo, estudio, prácticas y vida personal. Ver todo junto en una semana es fundamental para no colapsar.",tags:["Agenda","Trabajo","Estudio"]},
    {icon:"🎓",name:"YouTube Técnico",badge:"free",desc:"Canales especializados en tu carrera técnica. Procedimientos, tutoriales y casos reales de profesionales en ejercicio.",tags:["Técnico","Tutoriales","Carrera"]},
    {icon:"🤝",name:"LinkedIn",badge:"free",desc:"Empieza a construir tu red profesional desde el terciario. Conéctate con egresados de tu carrera y potenciales empleadores.",tags:["Red","Empleo","Profesional"]},
    {icon:"📋",name:"Google Drive",badge:"free",desc:"Almacenamiento y trabajo colaborativo para proyectos grupales, prácticas y documentación de la carrera.",tags:["Colaboración","Almacenamiento","Proyectos"]}
  ],
  prompts:[
    {cat:"Estudio",level:"Básico",title:"Entender conceptos técnicos de mi carrera",body:"Soy estudiante de [carrera terciaria] y no entiendo bien [concepto técnico específico]. Explícamelo de forma clara, con ejemplos de situaciones reales que voy a encontrar cuando trabaje. Incluye también por qué es importante para mi práctica profesional y cómo se aplica en el campo."},
    {cat:"Práctica",level:"Intermedio",title:"Preparar para las prácticas profesionales",body:"Voy a empezar mis prácticas profesionales de [carrera] en [tipo de institución/empresa]. Ayúdame a prepararme con: las situaciones más comunes que voy a enfrentar, habilidades técnicas que debo repasar antes de ir, actitudes y comportamientos profesionales esperados, preguntas que puedo hacer a mi tutor y cómo aprovechar al máximo esta experiencia."},
    {cat:"Trabajo",level:"Básico",title:"Equilibrar trabajo y estudio",body:"Trabajo [cantidad de horas] por semana y estudio la carrera de [carrera]. Tengo las siguientes materias este cuatrimestre: [lista]. Ayúdame a crear un plan semanal realista que incluya: tiempo de estudio por materia, cuándo estudiar según mi horario de trabajo, momentos de descanso necesarios y estrategias para estudiar más eficientemente con poco tiempo."},
    {cat:"Proyecto",level:"Intermedio",title:"Desarrollar proyecto integrador",body:"Tengo que presentar un proyecto integrador sobre [tema] para la carrera de [carrera]. El proyecto debe [descripción de requisitos]. Ayúdame con: estructura general del proyecto, cómo plantear el problema y los objetivos, qué metodología usar, cómo conectar los contenidos de distintas materias y cómo presentarlo de forma profesional ante el jurado."}
  ],
  resources:[
    {icon:"🌐",type:"Red",name:"LinkedIn",desc:"Empieza a construir tu perfil profesional desde el terciario. Muchos empleos se consiguen antes de egresar."},
    {icon:"📺",type:"YouTube",name:"Canales de tu especialidad",desc:"Busca canales de profesionales en ejercicio de tu carrera. Ve cómo trabajan los que ya están en el campo."},
    {icon:"📝",type:"App",name:"Notion",desc:"Para organizar toda la carrera: apuntes, prácticas, proyectos y preparación para el trabajo."},
    {icon:"🎙️",type:"Podcast",name:"Podcast de tu área profesional",desc:"Los podcasts de tu sector te mantienen actualizado y te acercan al mundo laboral antes de egresar."},
    {icon:"🤝",type:"Comunidad",name:"Grupos de egresados de tu carrera",desc:"Busca grupos en Facebook o WhatsApp de egresados de tu carrera. Son fuente de trabajo, consejos y apoyo."},
    {icon:"🎓",type:"Plataforma",name:"Coursera / EdX complementario",desc:"Certificados complementarios que potencian tu carrera terciaria. Muchos son gratuitos o con becas."}
  ],
  apps:[
    {title:"Sistema de organización para trabajar y estudiar",desc:"Google Calendar con bloques de trabajo, estudio, prácticas y descanso. Ver la semana completa es la clave para no colapsar.",example:"Lunes a viernes: trabajo 8-14hs. Estudio 15-17hs. Descanso. Fines de semana: estudio profundo 3hs."},
    {title:"Preparar las prácticas con IA",desc:"Describele a ChatGPT o Claude tu lugar de prácticas y pídele que simule situaciones que vas a enfrentar. Llegas preparado.",example:"Rol: soy estudiante de enfermería en práctica. Situación: paciente agitado que no quiere tomar la medicación."},
    {title:"Construir el perfil de LinkedIn desde ya",desc:"Carga tus estudios, prácticas y habilidades. Los reclutadores miran LinkedIn de estudiantes avanzados para anticiparse al egreso.",example:"Perfil completo: foto profesional, resumen, carrera en curso, prácticas como experiencia, habilidades técnicas."},
    {title:"Documentar las prácticas en Notion",desc:"Lleva un diario de tus prácticas: qué hiciste, qué aprendiste, qué dudas surgieron. Al egresar tienes un portafolio real.",example:"Entrada: Práctica 5. Realicé X procedimiento. Aprendí Y. Duda: Z (consultar al tutor)."}
  ],
  tips:[
    {text:"<strong>El terciario es la puerta al trabajo</strong>. Trata las prácticas como si fueran tu primer empleo. Muchos egresados son contratados donde practicaron."},
    {text:"<strong>Trabajar y estudiar es posible</strong> si organizas bien tu tiempo. Una semana planificada el domingo cambia todo."},
    {text:"<strong>Construye tu red desde ahora</strong>. Conéctate con compañeros, docentes y profesionales de tu área en LinkedIn."},
    {text:"<strong>La IA es tu tutor disponible 24hs</strong>. Cuando no puedes consultar al profesor, consulta a Claude. Siempre con ojo crítico."},
    {text:"<strong>El egreso no es el final</strong>. La actualización continua en carreras técnicas es obligatoria. Empieza a cultivar ese hábito desde el terciario."}
  ]
},
{
  id:"datascience", emoji:"📊", name:"Data Science",
  area:"Ciencia de Datos & ML",
  desc:"Python, Machine Learning, visualización de datos y herramientas profesionales para científicos de datos.",
  tags:["Python","ML","Visualización"],
  welcome:"El ecosistema de Data Science evoluciona rápidamente. Aquí encontrarás las herramientas más relevantes, prompts técnicos precisos y recursos para mantenerte al día.",
  tools:[
    {icon:"🐍",name:"Python + Pandas",badge:"free",desc:"El lenguaje y librería estándar para análisis de datos. Limpieza, transformación y exploración de datasets.",tags:["Python","EDA","Análisis"]},
    {icon:"📓",name:"Jupyter / Colab",badge:"free",desc:"Entorno interactivo para análisis de datos. Google Colab ofrece GPUs gratuitas para proyectos de ML.",tags:["Notebooks","GPU","Colaborativo"]},
    {icon:"📈",name:"Power BI",badge:"premium",desc:"Crea dashboards interactivos y reportes ejecutivos. Conéctalo a SQL, Excel, Python y más fuentes.",tags:["Dashboards","BI","Reportes"]},
    {icon:"🧠",name:"Hugging Face",badge:"free",desc:"Accede a miles de modelos de ML preentrenados para NLP, visión, audio y más. La mayor comunidad de IA.",tags:["ML","NLP","Modelos"]},
    {icon:"🏆",name:"Kaggle",badge:"free",desc:"Compite, aprende y encuentra datasets. La plataforma más grande de data science con notebooks gratuitos.",tags:["Competencias","Datasets","Aprendizaje"]},
    {icon:"⚡",name:"DuckDB",badge:"free",desc:"Motor SQL analítico ultrarrápido que corre en local. Procesa CSV, Parquet y JSON directamente.",tags:["SQL","Analytics","Performance"]}
  ],
  prompts:[
    {cat:"Python",level:"Básico",title:"Limpieza de dataset",body:"Tengo un dataset CSV con las siguientes columnas: [lista de columnas]. Los problemas que encuentro son: [valores nulos, duplicados, tipos incorrectos, outliers]. Escribe el código Python con pandas para: detectar y visualizar valores nulos, eliminar duplicados, convertir tipos de datos, tratar outliers con IQR y exportar el dataset limpio. Incluye comentarios explicativos en el código."},
    {cat:"Machine Learning",level:"Intermedio",title:"Pipeline de clasificación",body:"Crea un pipeline completo de Machine Learning con scikit-learn para un problema de clasificación binaria. El dataset tiene [N] filas y [features]. Incluye: preprocesamiento, selección de features, comparación de 3 modelos (Logistic Regression, Random Forest, XGBoost), evaluación con cross-validation y métricas (accuracy, F1, ROC-AUC) y reporte final."},
    {cat:"SQL",level:"Básico",title:"Query de análisis exploratorio",body:"Tengo una tabla [nombre_tabla] con las columnas: [columnas]. Escribe consultas SQL para: distribución de valores de [columna categórica], estadísticas descriptivas de [columna numérica], top 10 valores más frecuentes, tendencia temporal por [columna_fecha] y detección de posibles duplicados."},
    {cat:"Visualización",level:"Intermedio",title:"Dashboard con Python",body:"Crea un dashboard interactivo con Plotly y Dash en Python para visualizar [tipo de datos]. Incluye: KPI cards en la parte superior, gráfico de tendencia temporal, distribución, top categorías y filtros por fecha y categoría. Código completo y listo para ejecutar."}
  ],
  resources:[
    {icon:"📓",type:"Plataforma",name:"Kaggle Learn",desc:"Cursos gratuitos de Python, ML, SQL, visualización y feature engineering. Con certificados y notebooks."},
    {icon:"📺",type:"YouTube",name:"Dot CSV",desc:"El mejor canal de Data Science e IA en español. Papers explicados, tutoriales y tendencias."},
    {icon:"🎓",type:"Curso",name:"fast.ai",desc:"Cursos prácticos de Deep Learning y ML. Filosofía top-down: primero el resultado, luego la teoría."},
    {icon:"📖",type:"Libro",name:"Python for Data Analysis",desc:"El libro de referencia de Wes McKinney, creador de Pandas. Disponible gratis en Jupyter Notebook."},
    {icon:"🌐",type:"Comunidad",name:"Towards Data Science",desc:"La publicación más leída de Data Science en Medium. Miles de artículos técnicos de calidad."},
    {icon:"🔬",type:"Herramienta",name:"MLflow",desc:"Gestiona experimentos de ML, versiona modelos y despliega en producción. Open source."}
  ],
  apps:[
    {title:"EDA automático con ProfileReport",desc:"Genera un informe completo de análisis exploratorio con una sola línea usando ydata-profiling.",example:"from ydata_profiling import ProfileReport\nreport = ProfileReport(df)\nreport.to_file('eda.html')"},
    {title:"Fine-tuning de LLM en Colab",desc:"Google Colab ofrece GPUs gratuitas. Usa Hugging Face + PEFT para hacer fine-tuning de modelos de lenguaje con LoRA.",example:"Modelos viables en Colab gratuito: phi-2, mistral-7b-qlora, gemma-2b."},
    {title:"Dashboard ejecutivo automático",desc:"Con Python + Plotly Dash crea dashboards interactivos que se actualizan con los datos más recientes al abrir el navegador.",example:"Conecta a SQL, transforma con pandas, visualiza con Plotly, despliega en Render gratis."},
    {title:"Detección de anomalías en producción",desc:"Implementa Isolation Forest o DBSCAN para detectar outliers en tiempo real en streams de datos.",example:"sklearn.ensemble.IsolationForest(contamination=0.05).fit_predict(X)"}
  ],
  tips:[
    {text:"<strong>Domina pandas antes que cualquier ML</strong>. El 80% del trabajo de un Data Scientist es preparar datos, no entrenar modelos."},
    {text:"<strong>Kaggle es tu portafolio</strong>. Completa 5 notebooks públicos de calidad y tienes más valor que un CV tradicional."},
    {text:"<strong>Lee papers en arXiv</strong>. Usa Claude o ChatGPT para que te expliquen los conceptos técnicos complejos."},
    {text:"<strong>Versiona tu código con Git</strong> desde el día uno. Cada experimento en una branch, con logs claros."},
    {text:"<strong>MLflow para experimentos</strong>: nunca más perder qué hiperparámetros usaste en el modelo que funcionó."}
  ]
},
{
  id:"bigdata", emoji:"🌐", name:"Big Data",
  area:"Infraestructura & Analytics",
  desc:"Arquitecturas de datos distribuidas, procesamiento en escala y ecosistema moderno de Big Data.",
  tags:["Spark","Cloud","ETL"],
  welcome:"Big Data en 2026 es el stack moderno: cloud-native, serverless y con IA integrada. Aquí encontrarás las herramientas del stack actual y cómo aplicarlas.",
  tools:[
    {icon:"⚡",name:"Apache Spark",badge:"free",desc:"Motor de procesamiento distribuido. Procesa petabytes con DataFrames, Spark SQL y MLlib para ML en escala.",tags:["Distributed","SQL","ML"]},
    {icon:"☁️",name:"Snowflake",badge:"premium",desc:"Data Warehouse cloud moderno. Separa almacenamiento de cómputo, escala automáticamente y soporta IA nativa.",tags:["Data Warehouse","Cloud","SQL"]},
    {icon:"🔄",name:"dbt (data build tool)",badge:"free",desc:"Transforma datos en tu warehouse con SQL. Versionado con Git, testing automático y documentación.",tags:["ELT","SQL","Testing"]},
    {icon:"🌊",name:"Apache Kafka",badge:"free",desc:"Plataforma de streaming distribuido. Procesa millones de eventos por segundo con latencia mínima.",tags:["Streaming","Real-time","Eventos"]},
    {icon:"🗄️",name:"Delta Lake",badge:"free",desc:"Formato de tabla abierto con ACID transactions para data lakes. Compatible con Spark y Databricks.",tags:["Data Lake","ACID","Open"]},
    {icon:"📊",name:"Databricks",badge:"premium",desc:"La plataforma unificada de datos e IA basada en Spark. Notebooks colaborativos, MLflow y data lakehouse.",tags:["Lakehouse","ML","Colaborativo"]}
  ],
  prompts:[
    {cat:"Spark",level:"Intermedio",title:"Pipeline de procesamiento",body:"Escribe un pipeline de Spark en PySpark que: lee un dataset de Parquet de S3 o ADLS, aplica transformaciones, maneja datos nulos y duplicados, escribe el resultado particionado por fecha en formato Delta y registra métricas de calidad. Incluye manejo de errores y logging."},
    {cat:"dbt",level:"Intermedio",title:"Modelo dbt con testing",body:"Crea un modelo dbt completo para transformar datos crudos de [tabla_fuente] en una tabla analítica limpia. Incluye: SQL del modelo con CTEs organizadas, schema.yml con tests, documentación de columnas, macro de limpieza reutilizable y configuración de materialización. Usa best practices de dbt."},
    {cat:"Kafka",level:"Avanzado",title:"Consumer de Kafka en Python",body:"Escribe un consumer de Kafka en Python con confluent-kafka que: consume de topic [topic_name], procesa eventos en batches de 1,000 mensajes, aplica transformaciones con schema validation, maneja errores con dead-letter queue y registra métricas de lag y throughput."},
    {cat:"Arquitectura",level:"Avanzado",title:"Diseño de data lakehouse",body:"Diseña la arquitectura de un data lakehouse moderno para una empresa con [N] TB de datos y [tipo de casos de uso]. Incluye: capas medallion, stack tecnológico recomendado, flujo de datos end-to-end, estrategia de gobernanza y catálogo y consideraciones de costo."}
  ],
  resources:[
    {icon:"🎓",type:"Plataforma",name:"Databricks Academy",desc:"Cursos oficiales de Apache Spark, Delta Lake y ML en Databricks. Muchos son gratuitos."},
    {icon:"📖",type:"Libro",name:"Fundamentals of Data Engineering",desc:"El libro de referencia del stack moderno de data engineering. Muy recomendado."},
    {icon:"📺",type:"YouTube",name:"Seattle Data Guy",desc:"Canal sobre data engineering, dbt, Snowflake y el stack moderno de datos. Muy práctico."},
    {icon:"🌐",type:"Comunidad",name:"dbt Community Slack",desc:"La comunidad más activa de data engineering. Más de 50,000 profesionales resolviendo problemas."},
    {icon:"📰",type:"Newsletter",name:"Data Engineering Weekly",desc:"Newsletter semanal con las últimas noticias, papers y herramientas del ecosistema de datos."},
    {icon:"☁️",type:"Sandbox",name:"AWS/GCP/Azure Free Tier",desc:"Todos los clouds ofrecen tier gratuito. Practica con S3, BigQuery o Synapse Analytics sin costo."}
  ],
  apps:[
    {title:"Data Lakehouse con Delta Lake + Spark",desc:"Implementa la arquitectura medallion: Bronze raw, Silver limpio, Gold agregado usando Delta Lake en Databricks o localmente.",example:"Bronze: datos crudos del S3, Silver: con dbt, Gold: tablas analíticas para BI."},
    {title:"Streaming con Kafka + Spark Structured Streaming",desc:"Pipeline de tiempo real: Kafka ingesta eventos, Spark Structured Streaming procesa, Delta Lake almacena, Dashboard actualizado.",example:"Caso: Fraud detection en transacciones bancarias con ventana de 1 minuto."},
    {title:"ELT moderno con dbt + Snowflake",desc:"Carga datos con Fivetran/Airbyte, modela con dbt, documenta automáticamente y despliega con CI/CD.",example:"dbt test --select +modelo, 0 errores, dbt run, tabla lista en Snowflake."},
    {title:"Data Quality automático",desc:"Implementa Great Expectations o Soda para validar automáticamente la calidad de tus datos en cada pipeline.",example:"Expectativas: not_null(id), unique(id), between(age, 0, 120), regex(email)."}
  ],
  tips:[
    {text:"<strong>Empieza con el medallion architecture</strong>: Bronze/Silver/Gold. Es el patrón más adoptado en la industria hoy."},
    {text:"<strong>dbt es no negociable</strong> en 2026. Si transformas datos en SQL sin dbt, estás perdiendo versionado, tests y documentación."},
    {text:"<strong>El costo de la nube</strong> puede explotar si no monitorizas. Usa presupuestos y alertas desde el día uno en AWS/GCP/Azure."},
    {text:"<strong>Data contracts</strong>: define esquemas acordados entre productores y consumidores de datos. Evita el caos a escala."},
    {text:"<strong>Observabilidad de datos</strong> con Monte Carlo o Elementary: sabes en tiempo real si tus datos están rotos."}
  ]
},
{
  id:"cotidiano", emoji:"🏠", name:"Vida Cotidiana",
  area:"Productividad Personal",
  desc:"IA para organizar tu vida diaria: finanzas personales, salud, hogar, familia y aprendizaje continuo.",
  tags:["Organización","Finanzas","Bienestar"],
  welcome:"La IA no es solo para empresas o técnicos. Es para tu vida de todos los días: organizar el hogar, cuidar tu salud, manejar tus finanzas y aprender cosas nuevas sin esfuerzo.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Pregúntale cualquier cosa: recetas, consejos de salud, ayuda con documentos, planes de ahorro y mucho más.",tags:["Consultas","Recetas","Consejos"]},
    {icon:"📝",name:"Notion / Google Keep",badge:"free",desc:"Organiza listas de compras, tareas del hogar, calendario familiar y notas importantes en un solo lugar.",tags:["Organización","Listas","Hogar"]},
    {icon:"💰",name:"Fintual / Finerio",badge:"free",desc:"Controla tus gastos, ahorra automáticamente y gestiona tus finanzas personales con facilidad.",tags:["Finanzas","Ahorro","Gastos"]},
    {icon:"🍳",name:"Yummly / ChefIQ",badge:"free",desc:"Recetas personalizadas según lo que tienes en el refrigerador, tus gustos y restricciones alimentarias.",tags:["Recetas","Alimentación","Salud"]},
    {icon:"🏃",name:"Nike Training Club",badge:"free",desc:"Rutinas de ejercicio para todos los niveles desde casa. Videos con instrucción y planes progresivos.",tags:["Ejercicio","Salud","Rutinas"]},
    {icon:"🧘",name:"Calm / Headspace",badge:"premium",desc:"Meditación guiada, sonidos para dormir y técnicas de mindfulness para el bienestar mental.",tags:["Bienestar","Meditación","Sueño"]}
  ],
  prompts:[
    {cat:"Finanzas",level:"Básico",title:"Plan de ahorro mensual",body:"Gano [ingreso mensual] y mis gastos fijos son: [lista de gastos]. Ayúdame a crear un presupuesto mensual que: cubra todos mis gastos esenciales, destine dinero al ahorro (al menos 10%), incluya algo para entretenimiento y me ayude a ahorrar para [meta]. Dame un plan concreto en tabla con categorías y montos."},
    {cat:"Alimentación",level:"Básico",title:"Plan de comidas saludable",body:"Crea un plan de comidas saludable para [N] personas para una semana. Tengo disponible: [ingredientes principales]. Preferencias: [gustos o restricciones]. Presupuesto semanal: [monto]. Incluye: desayuno, almuerzo y cena, lista de compras organizada y preparación que no tome más de 30-40 minutos por comida."},
    {cat:"Organización",level:"Básico",title:"Rutina semanal del hogar",body:"Ayúdame a crear una rutina semanal para el hogar que incluya: limpieza y orden, compras y cocina, administración (pago de cuentas, documentos, trámites) y tiempo personal (ejercicio, descanso, familia). Somos [N] personas en el hogar. Dame un plan realista y fácil de seguir."},
    {cat:"Aprendizaje",level:"Básico",title:"Plan de aprendizaje personal",body:"Quiero aprender [tema o habilidad] en [tiempo disponible: 30 minutos al día]. Crea un plan de aprendizaje de [N] semanas con: recursos gratuitos, progresión lógica de lo básico a lo avanzado, ejercicios prácticos y cómo medir mi progreso. Que sea realista para alguien con vida ocupada."}
  ],
  resources:[
    {icon:"💰",type:"App",name:"Wallet by BudgetBakers",desc:"La mejor app de finanzas personales: controla gastos, budgets y estadísticas visuales. Gratis."},
    {icon:"🍳",type:"App",name:"Yummly",desc:"Recetas personalizadas según tus ingredientes, preferencias y tiempo disponible para cocinar."},
    {icon:"🏃",type:"App",name:"Nike Training Club",desc:"Rutinas de ejercicio gratuitas en video para hacer en casa, parque o gym. Todos los niveles."},
    {icon:"📚",type:"Plataforma",name:"Duolingo",desc:"Aprende idiomas gratis en solo 15 minutos al día. El método más efectivo y gamificado."},
    {icon:"🧘",type:"App",name:"Insight Timer",desc:"Meditación y mindfulness 100% gratis. Miles de meditaciones guiadas en español."},
    {icon:"📺",type:"YouTube",name:"YouTube Premium",desc:"Descarga videos sin conexión, sin anuncios. Para ver tutoriales en el transporte o gym."}
  ],
  apps:[
    {title:"Planificar comidas de la semana",desc:"Cada domingo usa ChatGPT para planificar las comidas de la semana según lo que tienes y tu presupuesto.",example:"Prompt: Tengo pollo, arroz, lentejas, tomate y zanahoria. Crea 5 cenas distintas saludables."},
    {title:"Control de gastos sin complicaciones",desc:"Usa Google Sheets o Wallet App para registrar cada gasto. Una semana de datos revela dónde puedes ahorrar.",example:"Categorías simples: Comida, Transporte, Entretenimiento, Ropa, Salud, Otros."},
    {title:"Aprender algo nuevo en 30 min/día",desc:"Duolingo para idiomas, YouTube para habilidades, Podcast para información. 30 minutos diarios = un libro por mes.",example:"Lunes/Miércoles/Viernes: 15 min Duolingo. Martes/Jueves: 15 min podcast de [tema]."},
    {title:"Rutina de hogar sin agobio",desc:"Distribuye las tareas del hogar en los 7 días. Lunes: baños. Martes: cocina. Miércoles: pisos. Nunca todo en un día.",example:"Tarea diaria de 20-30 min + organización de 10 min = hogar siempre presentable."}
  ],
  tips:[
    {text:"<strong>ChatGPT puede ser tu asistente personal</strong>. Úsalo para hacer preguntas que no sabes a quién hacerle: salud, trámites, recetas."},
    {text:"<strong>El presupuesto no es una restricción</strong>, es un plan. Saber a dónde va tu dinero te da control y tranquilidad."},
    {text:"<strong>30 minutos de ejercicio</strong> tres veces por semana cambian tu energía, humor y salud más que cualquier suplemento."},
    {text:"<strong>Cocinar en batch</strong>: los domingos cocina para 3-4 días. Ahorra tiempo, dinero y evitas comer mal en los días ocupados."},
    {text:"<strong>Aprende un idioma</strong> con Duolingo. 15 minutos al día y en 1 año tendrás nivel básico-intermedio real."}
  ]
},
{
  id:"adultos", emoji:"👴", name:"Adultos Mayores",
  area:"Vida Cotidiana & Tecnología",
  desc:"Tecnología accesible y amigable para mejorar la calidad de vida, mantenerse conectado y aprender a tu ritmo.",
  tags:["Accesibilidad","Simple","Bienestar"],
  welcome:"La tecnología no tiene edad. Aquí aprenderás a usar las herramientas más útiles de forma clara y sencilla, para estar más conectado, seguro y activo.",
  tools:[
    {icon:"📱",name:"WhatsApp",badge:"free",desc:"Envía mensajes, fotos, videos y haz videollamadas con familia y amigos. La app más usada para mantenerse conectado.",tags:["Mensajes","Video","Familia"]},
    {icon:"🔍",name:"Google Search",badge:"free",desc:"Encuentra cualquier información con voz: recetas, noticias, clima, horarios, direcciones y mucho más.",tags:["Información","Voz","Búsqueda"]},
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Conversa en texto natural: hace preguntas, explica cosas con palabras simples, ayuda con cartas y trámites.",tags:["Conversación","Ayuda","Simple"]},
    {icon:"📺",name:"YouTube",badge:"free",desc:"Ve tutoriales, ejercicios, recetas, documentales y entretenimiento. Con subtítulos y pantalla en grande.",tags:["Video","Aprendizaje","Entretenimiento"]},
    {icon:"💊",name:"Medisafe",badge:"free",desc:"Recuerda cuándo tomar tus medicamentos con alarmas claras. Muy útil para quienes toman varios remedios.",tags:["Salud","Medicamentos","Alarmas"]},
    {icon:"🧭",name:"Google Maps",badge:"free",desc:"Navega con indicaciones de voz paso a paso. Nunca más perderse. Busca farmacias, bancos y hospitales cercanos.",tags:["Navegación","Voz","Lugares"]}
  ],
  prompts:[
    {cat:"Comunicación",level:"Básico",title:"Redactar carta o mensaje",body:"Necesito escribir [una carta/un mensaje] para [destinatario: mi médico, mi banco, mi hijo] explicando que [situación]. Escríbelo en español claro y respetuoso. Que sea corto, directo y fácil de entender."},
    {cat:"Información",level:"Básico",title:"Explicación simple de algo",body:"Explícame qué es [término o concepto] en palabras muy sencillas, como si tuvieras que explicárselo a alguien de 70 años que nunca usó tecnología. Usa ejemplos de la vida cotidiana y evita términos técnicos."},
    {cat:"Salud",level:"Básico",title:"Entender información médica",body:"Mi médico me dijo que tengo [diagnóstico] y debo tomar [medicamento]. Explícame en palabras simples: qué significa este diagnóstico, para qué sirve este medicamento, qué cuidados debo tener y qué preguntas puedo hacer en mi próxima consulta."},
    {cat:"Ocio",level:"Básico",title:"Sugerencias de actividades",body:"Soy una persona de [edad] años, me gusta [actividades que ya hace]. Sugiéreme 5 actividades nuevas que puedo hacer desde casa o en mi barrio para mantenerme activo, aprender algo nuevo y relacionarme con otras personas. Que sean accesibles y gratuitas o de bajo costo."}
  ],
  resources:[
    {icon:"📱",type:"App",name:"Medisafe",desc:"App de recordatorio de medicamentos con alarmas claras. Conecta con familiar para supervisión remota."},
    {icon:"🎓",type:"Cursos",name:"Aprender Digital (Google)",desc:"Programa gratuito de Google para aprender lo básico de internet, búsquedas y herramientas digitales."},
    {icon:"📺",type:"YouTube",name:"Abuelos Digitales",desc:"Canal en español con tutoriales muy claros sobre tecnología para adultos mayores. Paso a paso."},
    {icon:"🌐",type:"Portal",name:"Sénior Planet",desc:"Comunidad y recursos de tecnología específicamente diseñados para adultos mayores activos."},
    {icon:"💬",type:"Comunidad",name:"Club de Lectura Digital",desc:"Grupos virtuales de lectura, discusión de libros y conversación. Ideal para socializar desde casa."},
    {icon:"🏥",type:"Salud",name:"Telemedicina (Tu país)",desc:"Muchos sistemas de salud ofrecen consultas por video. Consulta con tu médico cómo acceder."}
  ],
  apps:[
    {title:"Videollamadas con la familia",desc:"WhatsApp es la mejor opción. Con un toque puedes hacer videollamada, y con otro enviar una foto de tu jardín.",example:"Consejo: Aumenta el tamaño de texto en Configuración, Accesibilidad, Tamaño de texto."},
    {title:"Nunca olvidar los medicamentos",desc:"Medisafe te recuerda cada medicamento con su nombre, foto y hora exacta. Puedes vincular a un familiar.",example:"La app te muestra: 8:00 AM, Losartán 50mg, 1 pastilla con el desayuno."},
    {title:"Buscar información por voz",desc:"En Google o WhatsApp puedes presionar el micrófono y hablar en vez de escribir.",example:"Presiona el micrófono y di: Receta de sopa de lentejas o Horario del banco cercano."},
    {title:"Ver ejercicios adaptados en YouTube",desc:"Busca ejercicios para adultos mayores en YouTube. Hay miles de videos de 10-20 minutos gratis y muy claros.",example:"Busca: Yoga suave para mayores de 60 o Ejercicios sentado para articulaciones."}
  ],
  tips:[
    {text:"<strong>No hay prisa</strong>. Aprende una cosa por semana. La tecnología es una herramienta, no una carrera."},
    {text:"<strong>Pide ayuda</strong> a familiares o amigos para configurar tu teléfono. Una buena configuración inicial lo hace todo más fácil."},
    {text:"<strong>Aumenta el tamaño de letra</strong> en tu teléfono. Configuración, Accesibilidad, Tamaño de texto. Pon el más grande."},
    {text:"<strong>Cuidado con mensajes extraños</strong>: si alguien te pide dinero o contraseñas por WhatsApp o correo, consulta con un familiar antes de responder."},
    {text:"<strong>ChatGPT habla contigo</strong> de cualquier tema. Puedes preguntarle lo que quieras en español simple y te responde con paciencia."}
  ]
},
{
  id:"mamas", emoji:"🧒", name:"Mamás & Papás",
  area:"Familia & Crianza",
  desc:"IA y herramientas digitales para organizar la vida familiar, apoyar el desarrollo de los hijos y simplificar la crianza del día a día.",
  tags:["Crianza","Organización","Familia"],
  welcome:"Ser mamá o papá es el trabajo más importante y exigente del mundo. La tecnología bien usada puede ayudarte a organizarte mejor, encontrar información confiable sobre crianza y tener más tiempo para lo que importa: estar presente.",
  tools:[
    {icon:"🤖",name:"ChatGPT",badge:"free",desc:"Consulta sobre desarrollo infantil, pide ideas de actividades para los chicos, recetas saludables y consejos de crianza según la edad.",tags:["Crianza","Consultas","Actividades"]},
    {icon:"📝",name:"Google Keep / Notion",badge:"free",desc:"Organiza la lista de la compra familiar, agenda escolar, turnos médicos y tareas del hogar desde el celular.",tags:["Organización","Agenda","Hogar"]},
    {icon:"📱",name:"Duolingo Kids",badge:"free",desc:"Aprendizaje de idiomas gamificado para niños desde 4 años. Inglés, francés y más de forma divertida.",tags:["Idiomas","Educación","Niños"]},
    {icon:"🧘",name:"Insight Timer",badge:"free",desc:"Meditaciones guiadas para mamás y papás. El autocuidado de los padres impacta directamente en los hijos.",tags:["Autocuidado","Bienestar","Meditación"]},
    {icon:"👶",name:"Kinedu / BabyConnect",badge:"premium",desc:"Apps de seguimiento del desarrollo infantil con actividades estimuladoras según la etapa evolutiva del bebé.",tags:["Bebés","Desarrollo","Estimulación"]},
    {icon:"🍳",name:"Yummly",badge:"free",desc:"Recetas saludables y adaptadas a niños según ingredientes disponibles, alergias y tiempo de preparación.",tags:["Recetas","Alimentación","Saludable"]}
  ],
  prompts:[
    {cat:"Crianza",level:"Básico",title:"Actividades según la edad",body:"Soy mamá/papá de un niño/niña de [edad]. Necesito ideas de actividades para hacer en casa este fin de semana que sean: educativas y entretenidas, sin necesitar materiales costosos, adaptadas a su edad y que pueda hacer con él/ella. Dame 10 ideas con descripción breve de cada una y qué habilidades desarrolla."},
    {cat:"Alimentación",level:"Básico",title:"Recetas saludables para niños",body:"Mi hijo/hija de [edad] tiene estas preferencias o rechazos: [describir]. Créame un plan de meriendas y almuerzos para una semana que sean: nutritivos, atractivos visualmente para niños, fáciles y rápidos de preparar y económicos. Incluye lista de compras organizada."},
    {cat:"Educación",level:"Básico",title:"Apoyar con la tarea escolar",body:"Mi hijo/hija de [edad] está en [grado] y necesita entender [tema de la tarea]. Explícame cómo enseñarle este tema de forma simple y divertida, usando ejemplos de la vida cotidiana y actividades prácticas."},
    {cat:"Bienestar",level:"Intermedio",title:"Manejar berrinches y conductas difíciles",body:"Mi hijo/hija de [edad] tiene [descripción de la conducta difícil]. Explícame desde la psicología del desarrollo por qué ocurre esto a esta edad, qué estrategias concretas puedo usar en el momento y cómo prevenirlo. Que sea práctico y basado en crianza respetuosa."}
  ],
  resources:[
    {icon:"📖",type:"Blog",name:"Criar con Sentido",desc:"Blog de crianza respetuosa en español con artículos sobre desarrollo infantil, límites y vínculo."},
    {icon:"🎙️",type:"Podcast",name:"Educar con Tribu",desc:"Podcast latinoamericano sobre crianza consciente, educación y familia con expertos en psicología infantil."},
    {icon:"📺",type:"YouTube",name:"Canal Pakapaka",desc:"Contenido educativo y de calidad para niños en español. Series, cuentos y programas sin violencia ni publicidad."},
    {icon:"👶",type:"App",name:"Kinedu",desc:"App con actividades de estimulación temprana para bebés y niños pequeños según su etapa de desarrollo."},
    {icon:"🌐",type:"Comunidad",name:"Grupos de Mamás en Facebook",desc:"Comunidades de madres latinoamericanas donde comparten experiencias, dudas y apoyo sobre crianza."},
    {icon:"📚",type:"Libro",name:"El Cerebro del Niño (Siegel)",desc:"El libro de referencia sobre neurociencia aplicada a la crianza. Explica por qué los niños actúan como actúan."}
  ],
  apps:[
    {title:"Organizar la semana familiar",desc:"Usa Google Calendar compartido con tu pareja para coordinar actividades escolares, turnos médicos y compromisos familiares.",example:"Cada domingo 10 minutos: revisar la semana juntos. Evita olvidos y conflictos de agenda."},
    {title:"Consultas de crianza con IA",desc:"ChatGPT puede responder dudas de crianza, desarrollo infantil y educación de forma accesible y sin juicios.",example:"Pregunta: Mi hijo de 3 años muerde. Por qué y cómo lo manejo? IA responde con contexto y estrategias."},
    {title:"Actividades educativas sin pantallas",desc:"Pídele a ChatGPT 10 actividades para hacer con los chicos sin tecnología. Juegos, manualidades y experimentos caseros.",example:"Experimento de volcán de bicarbonato, pintura con dedos, construcción con cajas de cartón."},
    {title:"Recetas para niños selectivos",desc:"Describe a ChatGPT lo que come y lo que rechaza tu hijo. Te da recetas que esconden vegetales o adaptan texturas.",example:"Mi hijo no come verduras. IA: albóndigas con espinaca, pizza casera con calabaza en la salsa."}
  ],
  tips:[
    {text:"<strong>No hay crianza perfecta</strong>. Usa la tecnología para informarte, no para compararte con otras familias en redes sociales."},
    {text:"<strong>ChatGPT no reemplaza al pediatra</strong>. Es útil para información general, pero ante dudas de salud siempre consulta al médico."},
    {text:"<strong>Tu bienestar importa</strong>. Un padre o madre descansado y equilibrado es infinitamente mejor que uno agotado que lo da todo."},
    {text:"<strong>La pantalla no es el enemigo</strong>. El problema es el contenido y el tiempo. Selecciona bien qué ven tus hijos y cuánto tiempo."},
    {text:"<strong>Organizarse en familia</strong> con una agenda compartida reduce el estrés y los conflictos de coordinación enormemente."}
  ]
},
{
  id:"historia", emoji:"🏛️", name:"Historia & Mitos Urbanos",
  area:"Narrativa & Cultura",
  desc:"Herramientas de storytelling, narrativa histórica e investigación cultural para exploradores del pasado.",
  tags:["Storytelling","Cultura","Investigación"],
  welcome:"Explora el cruce entre la historia, los mitos y la tecnología. Herramientas para narrar, investigar y crear experiencias culturales inmersivas usando inteligencia artificial.",
  tools:[
    {icon:"🤖",name:"Claude AI",badge:"free",desc:"El mejor para análisis histórico, narrativa profunda y consultas complejas sobre historia, mitos y cultura.",tags:["Narrativa","Investigación","Análisis"]},
    {icon:"🗺️",name:"Google Arts & Culture",badge:"free",desc:"Accede a museos del mundo, arte histórico, visitas virtuales y archivos culturales digitalizados.",tags:["Museos","Arte","Virtual"]},
    {icon:"🎙️",name:"ElevenLabs",badge:"premium",desc:"Genera narración con voz realista para audios guiados, podcasts históricos y tours de audio.",tags:["Voz","Audio","Narración"]},
    {icon:"🖼️",name:"Midjourney",badge:"premium",desc:"Genera imágenes históricas, recreaciones de épocas pasadas y visualizaciones de mitos para contenido.",tags:["Imágenes","Visual","Arte"]},
    {icon:"📚",name:"Internet Archive",badge:"free",desc:"Accede a millones de libros, documentos históricos, fotografías antiguas y archivos digitalizados.",tags:["Archivos","Libros","Historia"]},
    {icon:"🎬",name:"CapCut",badge:"free",desc:"Crea videos narrativos sobre historia y mitos con efectos cinematográficos, música ambiental y subtítulos.",tags:["Video","Contenido","Narrativa"]}
  ],
  prompts:[
    {cat:"Narrativa",level:"Intermedio",title:"Historia para tour nocturno",body:"Actúa como narrador experto en historia urbana y leyendas locales. Crea una narrativa inmersiva de 5 minutos para un recorrido histórico nocturno por [ciudad/barrio]. Incluye: ambiente descriptivo, personajes históricos reales, leyenda urbana relacionada, dato curioso verificable y cierre que invite a reflexionar. Tono: cinematográfico, misterioso pero educativo."},
    {cat:"Investigación",level:"Básico",title:"Investigar una leyenda urbana",body:"Investiga el origen y variantes de la leyenda urbana de [nombre de la leyenda] en [país/región]. Explora: origen histórico posible, versiones registradas, contexto cultural, análisis simbólico y por qué esta leyenda persiste en la cultura popular. Diferencia claramente entre hechos verificables y elementos míticos."},
    {cat:"Contenido",level:"Básico",title:"Post educativo sobre historia",body:"Escribe un hilo de Twitter/X sobre [evento histórico o personaje]. Debe ser: educativo pero entretenido, con 8-10 tweets, incluya datos sorprendentes que la gente no conoce, conecte con el presente y tenga un gancho inicial irresistible."},
    {cat:"Podcast",level:"Avanzado",title:"Guión de episodio de podcast",body:"Escribe el guión de un episodio de 20 minutos de podcast sobre [mito/leyenda/evento histórico]. Estructura: introducción intrigante, contexto histórico, desarrollo del mito con fuentes, análisis cultural, conexión actual y cierre reflexivo. Incluye pausas dramáticas y transiciones musicales sugeridas."}
  ],
  resources:[
    {icon:"📖",type:"Archivo",name:"Internet Archive",desc:"La biblioteca digital más grande del mundo. Acceso gratuito a libros, documentos y fotos históricas."},
    {icon:"🎓",type:"Plataforma",name:"Khan Academy Historia",desc:"Cursos gratuitos de historia mundial, arte e historia de la ciencia con videos explicativos."},
    {icon:"🎙️",type:"Podcast",name:"Cosas de la Historia",desc:"Podcast en español sobre historias curiosas, personajes olvidados y eventos fascinantes de la historia."},
    {icon:"📺",type:"YouTube",name:"El Mapa de Tálib",desc:"Canal de divulgación histórica en español con videos de alta calidad sobre historia mundial."},
    {icon:"🗺️",type:"Plataforma",name:"Google Arts & Culture",desc:"Museos virtuales, tours 360 grados, archivos fotográficos y colecciones culturales de todo el mundo."},
    {icon:"📚",type:"Base de datos",name:"JSTOR",desc:"Acceso a artículos académicos sobre historia, antropología y ciencias sociales. Parcialmente gratis."}
  ],
  apps:[
    {title:"Tours culturales con narración IA",desc:"Graba guiones con Claude AI, convierte a voz con ElevenLabs y crea una app de audio-guía para recorridos históricos locales.",example:"Tour nocturno de leyendas urbanas de tu ciudad: 8 paradas, 3 minutos de narración cada una."},
    {title:"Recreaciones históricas visuales",desc:"Usa Midjourney para crear imágenes de cómo lucía un lugar hace 100 o 200 años y compáralas con fotos actuales.",example:"Recreación de la Plaza Mayor de Madrid en 1850 con estilo fotográfico de época."},
    {title:"Podcast de historia local",desc:"Con Claude redacta los guiones, ElevenLabs genera la voz y Anchor.fm distribuye gratis a Spotify y Apple Podcasts.",example:"Serie: Los 10 mitos más extraños de tu ciudad, 10 episodios, 15 min cada uno."},
    {title:"Investigación con IA",desc:"Usa Claude para analizar fuentes, contrastar versiones de eventos históricos y generar síntesis de investigación compleja.",example:"Consulta: Compara 3 versiones históricas del origen de [leyenda] y evalúa cuál tiene más sustento."}
  ],
  tips:[
    {text:"<strong>Usa Claude para investigación compleja</strong>: pídele que analice fuentes, compare versiones y detecte inconsistencias históricas."},
    {text:"<strong>Diferencia mito de historia</strong> en tu contenido. Tu audiencia valora la honestidad intelectual más que el sensacionalismo."},
    {text:"<strong>Documenta tu investigación</strong>: usa Notion para organizar fuentes, citas y referencias antes de crear contenido."},
    {text:"<strong>El audio es tu aliado</strong>: la narración en voz tiene un impacto emocional mucho mayor que el texto para historias y mitos."},
    {text:"<strong>Conecta el pasado con el presente</strong>: ese vínculo es lo que hace que el contenido se comparta."}
  ]
},
{
  id:"teologia", emoji:"✝️", name:"Teología",
  area:"Estudio & Reflexión",
  desc:"Herramientas de estudio bíblico, investigación teológica y creación de contenido de fe.",
  tags:["Estudio Bíblico","Predicación","Reflexión"],
  welcome:"Explora cómo la tecnología puede potenciar tu estudio teológico, preparación de sermones y creación de contenido de fe profundo y auténtico.",
  tools:[
    {icon:"📖",name:"Bible Gateway",badge:"free",desc:"Accede a más de 200 versiones de la Biblia en 70 idiomas, concordancias, comentarios y estudios.",tags:["Biblia","Versiones","Estudio"]},
    {icon:"🤖",name:"Claude AI",badge:"free",desc:"Análisis bíblico profundo, contextualización histórica de textos, comparación de interpretaciones teológicas.",tags:["Análisis","Teología","Interpretación"]},
    {icon:"🎨",name:"Canva",badge:"free",desc:"Crea devocionales visuales, presentaciones de sermón, versículos ilustrados y material para ministerios.",tags:["Diseño","Visual","Ministerio"]},
    {icon:"📚",name:"Logos Bible Software",badge:"premium",desc:"Software profesional de estudio bíblico con comentarios, diccionarios griegos/hebreos y análisis textual.",tags:["Profesional","Griego","Hebreo"]},
    {icon:"🎙️",name:"Descript",badge:"premium",desc:"Edita y produce tu podcast o sermón de audio con transcripción automática y edición con IA.",tags:["Audio","Podcast","Sermones"]},
    {icon:"📝",name:"Notion",badge:"free",desc:"Organiza tus estudios bíblicos, notas de sermones, biblioteca teológica y planificación del ministerio.",tags:["Organización","Notas","Biblioteca"]}
  ],
  prompts:[
    {cat:"Estudio",level:"Básico",title:"Análisis bíblico profundo",body:"Actúa como teólogo académico. Analiza el pasaje de [libro capítulo:versículo]. Incluye: contexto histórico y cultural, análisis del texto griego o hebreo (términos clave), diferentes interpretaciones teológicas (perspectiva reformada, católica, pentecostal), aplicación práctica para hoy y referencias cruzadas relevantes. Sé equilibrado y académico."},
    {cat:"Predicación",level:"Intermedio",title:"Estructura de sermón",body:"Ayúdame a estructurar un sermón sobre [tema o texto bíblico] para una congregación de [tipo: jóvenes/adultos/mixta]. Incluye: título impactante, texto base, tres puntos principales con sub-puntos, ilustraciones prácticas, aplicaciones concretas para la vida cotidiana y conclusión con llamado. Duración: 30-40 minutos."},
    {cat:"Devocional",level:"Básico",title:"Devocional diario",body:"Escribe un devocional de 5 minutos de lectura basado en [versículo o tema]. Incluye: reflexión inicial, explicación del texto, conexión con la vida cotidiana, pregunta de reflexión personal y oración de cierre. Tono: cálido, profundo pero accesible para cualquier creyente."},
    {cat:"Investigación",level:"Avanzado",title:"Comparar perspectivas teológicas",body:"Compara la posición de tres tradiciones teológicas distintas sobre el tema de [tema teológico: libre albedrío, predestinación, sacramentos]. Incluye argumentos bíblicos de cada tradición, puntos de acuerdo y desacuerdo, y contexto histórico de cada posición."}
  ],
  resources:[
    {icon:"📖",type:"Plataforma",name:"Bible Gateway",desc:"La plataforma bíblica más completa. 200+ versiones, concordancias, comentarios y planes de lectura."},
    {icon:"🎓",type:"Estudio",name:"Biblia.com (YouVersion)",desc:"App y web con planes de lectura, versículos del día, notas y lectura en audio. Completamente gratis."},
    {icon:"📚",type:"Biblioteca",name:"Christian Classics Ethereal Library",desc:"Biblioteca digital gratuita con obras clásicas de teología de Agustín, Calvino, Lutero y más."},
    {icon:"🎙️",type:"Podcast",name:"Reforma 21",desc:"Podcast de teología reformada con conferencias, sermones y debates teológicos en español."},
    {icon:"📺",type:"YouTube",name:"Coalición por el Evangelio",desc:"Recursos teológicos en español: artículos, videos, sermones y formación ministerial sólida."},
    {icon:"🏛️",type:"Academia",name:"Seminario Virtual",desc:"Cursos de teología en línea, muchos gratuitos o de bajo costo, con certificación ministerial."}
  ],
  apps:[
    {title:"Preparar sermones con asistencia IA",desc:"Usa Claude para hacer análisis textual profundo, luego estructura tu sermón en Notion y diseña las diapositivas en Canva.",example:"Proceso: Texto, Análisis con IA, Estructura, Diapositivas, Predicación."},
    {title:"Podcast o canal de devocionales",desc:"Graba tus devocionales, usa Descript para editar con IA y publica en Spotify gratis con Anchor.",example:"Serie: 365 devocionales, 5 minutos por episodio, publicado cada mañana."},
    {title:"Material visual para ministerio",desc:"Con Canva crea: versículos ilustrados, boletines de iglesia, presentaciones de sermón y material de escuela dominical.",example:"Pack semanal: 1 portada de sermón + 5 versículos para redes + 1 boletín PDF."},
    {title:"Estudio bíblico grupal digitalizado",desc:"Organiza tus estudios grupales en Notion: pasaje, preguntas de reflexión, recursos y seguimiento de asistentes.",example:"Plantilla: Título, Texto, Contexto, 5 preguntas, Aplicación, Oración."}
  ],
  tips:[
    {text:"<strong>No reemplaces el Espíritu con la IA</strong>. Úsala como herramienta de investigación y organización, no como fuente de revelación."},
    {text:"<strong>Bible Gateway</strong> es tu punto de partida para cualquier estudio. Consulta siempre el texto en su idioma original."},
    {text:"<strong>Documenta tus estudios en Notion</strong>: en 5 años tendrás una biblioteca teológica personal invaluable."},
    {text:"<strong>Usa Claude para contextualizar</strong>: el contexto histórico-cultural es clave para interpretar bien cualquier texto bíblico."},
    {text:"<strong>El sermón mejor preparado</strong> es el que honra el texto, conecta con la gente y llama a la transformación."}
  ]
}
];
