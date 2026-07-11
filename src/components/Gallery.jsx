import React, { useState } from "react";
import { projectData } from "../data/projectData";
import ImageModal from "./ImageModal";
import { Eye, Building2, Home } from "lucide-react";

export default function Gallery({ activeUnit, variant = "unit" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const commonGallery = projectData.commonGallery || projectData.projectGallery || [];
  const unitGallery = activeUnit?.gallery || [];
  const isCommon = variant === "common";
  const images = isCommon ? commonGallery : unitGallery;

  const handleImageClick = (index) => {
    setModalImages(images);
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  if (!images.length) return null;

  return (
    <section
      id={isCommon ? "common-gallery" : "unit-gallery"}
      className={`py-28 ${isCommon ? "bg-gold-50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="premium-kicker inline-flex items-center gap-2 mb-3">
            {isCommon ? <Building2 className="w-4 h-4" /> : <Home className="w-4 h-4" />}
            <span>{isCommon ? "Galería del edificio" : "Galería de unidad"}</span>
          </p>
          <h3 className="text-3xl md:text-5xl font-semibold text-gray-950 leading-tight">
            {isCommon ? "Renders exteriores y espacios comunes" : `Interiores ${activeUnit?.name || ""}`}
          </h3>
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed max-w-2xl">
            {isCommon
              ? "Imágenes generales del emprendimiento que aplican a todas las unidades."
              : `Renders y ambientes propios de la ${activeUnit?.name || "unidad seleccionada"}.`}
          </p>
          <div className="premium-rule mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {images.map((item, idx) => (
            <button
              key={`${item.title}-${item.image}`}
              type="button"
              onClick={() => handleImageClick(idx)}
              className={`group premium-card text-left cursor-pointer overflow-hidden transition-all duration-300 flex flex-col h-full animate-in fade-in hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(38,30,20,0.12)] ${
                isCommon && idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${isCommon && idx === 0 ? "aspect-[16/7]" : "aspect-video"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-950/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-lg bg-white text-gold-700 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-950 mb-2 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={modalImages}
        activeIndex={activeImageIndex}
        setActiveIndex={setActiveImageIndex}
      />
    </section>
  );
}
