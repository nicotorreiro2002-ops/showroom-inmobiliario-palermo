// ==========================================
// CONFIGURACIÓN DEL PROYECTO INMOBILIARIO (MULTI-UNIDAD)
// ==========================================
// Modifica los valores de este archivo para cambiar toda la información de la landing page.
// Admite múltiples tipologías/unidades que se cambian dinámicamente mediante el selector.

export const projectData = {
  // Nombre del edificio / emprendimiento
  buildingName: "Brigos Palermo",
  
  // Ubicación del emprendimiento
  location: "Palermo, Buenos Aires",
  
  // Estado general del emprendimiento
  status: "Disponible",
  
  // Imagen principal del Hero (debe estar en /public/images/)
  heroImage: "/images/hero.png",

  // Versiones de la imagen principal del Hero
  heroImages: {
    day: {
      label: "Día",
      image: "/images/render exterior.png"
    },
    night: {
      label: "Noche",
      image: "/images/render exterior nocturno.png"
    }
  },

  // Recorrido 360 general (común a todo el emprendimiento - embed de Kuula)
  tour360: {
    title: "Experiencia Virtual 360",
    // URL de embed para el iframe
    embedUrl: "https://kuula.co/share/collection/7TcSF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
    // URL externa para abrir en una pestaña nueva
    externalUrl: "https://kuula.co/share/collection/7TcSF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
  },

  // Galería común del emprendimiento (fachada, accesos, amenities y zonas comunes).
  // Estas imágenes se muestran por fuera de la galería específica de cada unidad.
  commonGallery: [
    {
      title: "Fachada Principal",
      image: "/images/render exterior.png",
      description: "Vista exterior de tarde del emprendimiento."
    },
    {
      title: "Fachada Atardecer",
      image: "/images/render exterior atardecer.png",
      description: "Atardecer en Brigos Palermo."
    },
    {
      title: "Fachada Nocturna",
      image: "/images/render exterior nocturno.png",
      description: "Vista nocturna del edificio."
    },
    {
      title: "Acceso Frontal",
      image: "/images/render exterior nocturno frontal.png",
      description: "Acceso principal del edificio con terminaciones modernas."
    }
  ],

  // TIPOLOGÍAS / UNIDADES DISPONIBLES
  // Podés agregar tantas unidades como necesite el proyecto.
  units: [
    {
      id: "unidad-10a",
      name: "Unidad 10A",
      label: "Monoambiente",
      status: "Disponible",

      // Datos rápidos para el Hero cuando esta unidad está seleccionada
      quickInfo: {
        area: "54 m²",
        rooms: "Monoambiente",
        floor: "Piso 10",
        orientation: "Norte"
      },

      // Galería de renders específica para esta unidad
      gallery: [
        {
          title: "Living Unidad 10A",
          image: "/images/living.png",
          description: "Espacioso living comedor con amplia vista e iluminación natural."
        },
        {
          title: "Dormitorio Unidad 10A",
          image: "/images/dormitorio.png",
          description: "Dormitorio con placard integrado y salida directa al balcón."
        }
      ],

      // Plano 2D e hotspots específicos para esta unidad
      floorplan: {
        image: "/images/10a-planta.png",
        hotspots: [
          {
            id: "living-10a",
            title: "Monoambiente piso 10A",
            x: 42,
            y: 58,
            image: "/images/living.png",
            description: "Área social integrada de la unidad, con cocina abierta y conexión al balcón.",
            tourUrl: "https://kuula.co/share/collection/7TcSF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
          },
          {
            id: "dormitorio-10a",
            title: "Dormitorio",
            x: 65,
            y: 40,
            image: "/images/dormitorio.png",
            description: "Dormitorio principal con ventanal de piso a techo y espacio de guardado optimizado.",
            tourUrl: "https://kuula.co/share/collection/7K7Pz"
          },
          {
            id: "bano-10a",
            title: "Baño completo",
            x: 35,
            y: 25,
            image: "/images/living.png",
            description: "Baño principal equipado con sanitarios modernos y ventilación.",
            tourUrl: ""
          }
        ]
      },

      // Ficha técnica específica para esta unidad
      specs: {
        totalArea: "54 m²",
        coveredArea: "49 m²",
        uncoveredArea: "5 m²",
        rooms: "Monoambiente",
        bathrooms: "1 baño",
        floor: "Piso 10",
        orientation: "Norte",
        condition: "A estrenar",
        // Lista de terminaciones específicas
        finishes: [
          "Pisos de madera de primera calidad",
          "Carpinterías exteriores de aluminio anodizado con doble vidriado hermético (DVH)",
          "Muebles de cocina bajo mesada y alacenas de diseño italiano",
          "Mesadas de granito o cuarzo en cocina y baño",
          "Instalación preparada para aire acondicionado split (frío/calor)",
          "Griferías monocomando FV y sanitarios Ferrum"
        ]
      }
    },

    {
      id: "unidad-10c",
      name: "Unidad 10C",
      label: "Monoambiente",
      status: "Disponible",

      quickInfo: {
        area: "68 m²",
        rooms: "monoambiente",
        floor: "Piso 10",
        orientation: "Este"
      },

      // Galería de renders específica para esta unidad
      gallery: [
        {
          title: "Living",
          image: "/images/Unidad 10C.png",
          description: "Vista principal integrada de la Unidad 10C."
        },
        {
          title: "Ambiente Principal 10C",
          image: "/images/Unidad 10C.png",
          description: "Monoambiente con placard integrado y salida directa al balcón."
        }
      ],

      floorplan: {
        image: "/images/10c-planta.png",
        hotspots: [
          {
            id: "living-10c",
            title: "Living comedor",
            x: 38,
            y: 60,
            image: "/images/living.png",
            description: "Área social de la unidad 10C.",
            tourUrl: "https://kuula.co/share/collection/7TcSF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
          },
          {
            id: "dormitorio-10c",
            title: "Dormitorio principal",
            x: 65,
            y: 35,
            image: "/images/dormitorio.png",
            description: "Dormitorio principal independiente y muy silencioso.",
            tourUrl: "https://kuula.co/share/collection/7K7Pz"
          }
        ]
      },

      specs: {
        totalArea: "68 m²",
        coveredArea: "60 m²",
        uncoveredArea: "8 m²",
        rooms: "2 ambientes",
        bathrooms: "1 baño",
        floor: "Piso 10",
        orientation: "Este",
        condition: "A estrenar",
        finishes: [
          "Piso de porcelanato de primera calidad",
          "Carpinterías de aluminio anodizado con DVH",
          "Cocina integrada totalmente equipada",
          "Dormitorio independiente con amplio frente de placard",
          "Balcón terraza de amplias dimensiones"
        ]
      }
    }
  ],

  // Lista de amenities comunes del edificio
  amenities: [
    "SUM (Salón de Usos Múltiples) equipado con parrilla",
    "Gimnasio completo de uso común",
    "Seguridad privada las 24 horas",
    "Laundry equipado"
  ],

  // Información de contacto general
  contact: {
    // Teléfono de WhatsApp (número continuo con código de país, sin signos ni espacios)
    whatsapp: "5491162821303",
    // Correo de recepción
    email: "nicotorreiro2002@gmail.com",
    // Mensaje inicial de consulta (se auto-completará con el nombre de la unidad activa)
    message: "Hola! Estoy interesado en una unidad de Brigos Palermo. ¿Me podrían enviar más información?",
    // Texto comercial principal de cierre
    commercialText: "Coordiná una reunión virtual o visitá nuestro showroom en Palermo para conocer el departamento modelo."
  }
};
