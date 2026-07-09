// ==========================================
// PLANTILLA DE CONFIGURACIÓN DE PROYECTO INMOBILIARIO
// ==========================================
// Copia este archivo a 'projectData.js' y reemplaza los valores para configurar un nuevo proyecto.

export const projectData = {
  buildingName: "Nombre del Edificio",
  unitName: "Nombre de la Unidad / Departamento",
  location: "Dirección, Barrio, Ciudad",
  status: "Disponible / Reservado / En Pozo",
  heroImage: "/images/hero.jpg", // Reemplazar con la imagen en /public/images/

  quickInfo: {
    area: "00 m²",
    rooms: "0 ambientes",
    floor: "Piso 0",
    orientation: "Norte/Sur/Este/Oeste"
  },

  gallery: [
    {
      title: "Título de la Imagen 1",
      image: "/images/imagen1.jpg",
      description: "Descripción de la imagen 1."
    },
    {
      title: "Título de la Imagen 2",
      image: "/images/imagen2.jpg",
      description: "Descripción de la imagen 2."
    }
  ],

  floorplan: {
    image: "/images/planta.png", // Imagen del plano en /public/images/
    hotspots: [
      {
        id: "id-unico-ambiente-1",
        title: "Nombre del Ambiente",
        x: 50, // Posición horizontal en % (0 a 100)
        y: 50, // Posición vertical en % (0 a 100)
        image: "/images/imagen1.jpg",
        description: "Descripción corta del ambiente.",
        tourUrl: "https://kuula.co/share/collection/..." // Vacío "" si no tiene
      }
    ]
  },

  tour360: {
    title: "Recorrido 360",
    embedUrl: "https://kuula.co/share/collection/...", // URL del iframe de Kuula
    externalUrl: "https://kuula.co/share/collection/..." // Link directo para pestaña nueva
  },

  specs: {
    totalArea: "00 m²",
    coveredArea: "00 m²",
    uncoveredArea: "00 m²",
    rooms: "0 ambientes",
    bathrooms: "0 baños",
    floor: "Piso 0",
    orientation: "Norte",
    condition: "A estrenar / En pozo",
    finishes: [
      "Terminación 1",
      "Terminación 2",
      "Terminación 3"
    ],
    amenities: [
      "Amenity 1",
      "Amenity 2"
    ]
  },

  contact: {
    whatsapp: "5491112345678", // Teléfono sin signos ni espacios
    email: "correo@ejemplo.com",
    message: "Hola! Quisiera solicitar más información sobre el proyecto.",
    commercialText: "Texto comercial que aparece en la sección de contacto."
  }
};
