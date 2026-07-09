// ==========================================
// CONFIGURACIÓN DEL PROYECTO INMOBILIARIO
// ==========================================
// Modifica los valores de este archivo para cambiar toda la información de la landing page.
// No necesitas tocar ningún componente React para actualizar los datos.

export const projectData = {
  // Nombre del edificio / emprendimiento
  buildingName: "Brigos Palermo",
  
  // Nombre de la unidad específica (ej: "Edificio residencial", "Palermo")
  unitName: "Render test",
  
  // Ubicación del emprendimiento
  location: "Palermo, Buenos Aires",
  
  // Estado actual de la unidad (ej: "Disponible", "Reservado", "Última Unidad")
  status: "Disponible",
  
  // Imagen principal del Hero (debe estar en /public/images/)
  heroImage: "/images/hero.png",

  // Datos rápidos para la sección Hero
  quickInfo: {
    area: "54 m²",          // Superficie total
    rooms: "2 ambientes",    // Cantidad de ambientes
    floor: "Piso 10",        // Piso en el que se encuentra
    orientation: "Norte"    // Orientación
  },

  // Galería de renders generales (se muestran en la grilla y el modal fullscreen)
  gallery: [
    {
      title: "Living Comedor",
      image: "/images/living.png",
      description: "Espacioso living comedor con amplia vista e iluminación natural."
    },
    {
      title: "Dormitorio Principal",
      image: "/images/dormitorio.png",
      description: "Dormitorio con placard integrado y salida directa al balcón."
    },
    {
      title: "Render exterior",
      image: "/images/render exterior.png",
      description: "Baño con griferías premium y terminaciones en porcelanato."
    }
  ],

  // Plano 2D interactivo y sus hotspots (puntos clickeables)
  floorplan: {
    // Imagen de la planta de la unidad (debe estar en /public/images/)
    image: "/images/planta.png",
    
    // Lista de hotspots posicionados en porcentaje
    // x: posición horizontal de 0 a 100 (de izquierda a derecha)
    // y: posición vertical de 0 a 100 (de arriba a abajo)
    hotspots: [
      {
        id: "living",
        title: "Monoambiente piso 10A",
        x: 42,
        y: 58,
        image: "/images/living.png",
        description: "Área social integrada de la unidad, con cocina abierta y conexión al balcón.",
        // Link directo a la escena 360 específica de Kuula si existe (opcional)
        tourUrl: "https://kuula.co/share/collection/7TcSF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
      },
      {
        id: "dormitorio",
        title: "Dormitorio",
        x: 65,
        y: 40,
        image: "/images/dormitorio.png",
        description: "Dormitorio principal con ventanal de piso a techo y espacio de guardado optimizado.",
        tourUrl: "https://kuula.co/share/collection/7K7Pz"
      },
      {
        id: "bano",
        title: "Baño completo",
        x: 35,
        y: 25,
        image: "/images/bano.png",
        description: "Baño principal equipado con sanitarios modernos y ventilación.",
        tourUrl: "" // Si no tiene tour, dejar vacío ""
      }
    ]
  },

  // Recorrido 360 general (embed de Kuula)
  tour360: {
    title: "Experiencia Virtual 360",
    // URL de embed para el iframe (usar la URL de embed provista por Kuula)
    embedUrl: "https://kuula.co/share/collection/7TcSF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
    // URL externa para abrir en una pestaña nueva
    externalUrl: "https://kuula.co/share/collection/7TcSF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
  },

  // Ficha técnica detallada
  specs: {
    totalArea: "54 m²",
    coveredArea: "49 m²",
    uncoveredArea: "5 m²",
    rooms: "2 ambientes",
    bathrooms: "1 baño",
    floor: "Piso 10",
    orientation: "Norte",
    condition: "A estrenar",
    
    // Lista de terminaciones principales de la unidad
    finishes: [
      "Pisos de porcelanato de primera calidad",
      "Carpinterías exteriores de aluminio anodizado con doble vidriado hermético (DVH)",
      "Muebles de cocina bajo mesada y alacenas de diseño italiano",
      "Mesadas de granito o cuarzo en cocina y baño",
      "Instalación preparada para aire acondicionado split (frío/calor)",
      "Griferías monocomando FV y sanitarios Ferrum"
    ],
    
    // Lista de amenities comunes del edificio (dejar array vacío [] si no tiene)
    amenities: [
      "Piscina exterior con solárium en terraza",
      "SUM (Salón de Usos Múltiples) equipado con parrilla",
      "Gimnasio completo de uso común",
      "Seguridad privada las 24 horas",
      "Laundry equipado"
    ]
  },

  // Información de contacto directo
  contact: {
    // Código de país + número sin espacios ni signos (ej: 5491112345678)
    whatsapp: "5491112345678",
    // Dirección de correo electrónico de recepción
    email: "ventas@brigospalermo.com",
    // Mensaje predeterminado que se enviará por WhatsApp al hacer click
    message: "Hola! Estoy interesado en la Unidad 1982 de Brigos Palermo. ¿Me podrían enviar más información?",
    // Texto comercial que acompaña la sección de contacto
    commercialText: "Coordiná una reunión virtual o visitá nuestro showroom en Palermo para conocer el departamento modelo."
  }
};
