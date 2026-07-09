import React, { useState } from "react";
import { projectData } from "../data/projectData";
import ImageModal from "./ImageModal";
import { Eye } from "lucide-react";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { gallery } = projectData;

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-24 bg-gold-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-3">
            GALE RÍ A DE RE NDERS
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Descubrí cada rincón de la unidad
          </h3>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleImageClick(idx)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gold-100 flex flex-col h-full"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-gold-600 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal for Fullscreen navigation */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={gallery}
        activeIndex={activeImageIndex}
        setActiveIndex={setActiveImageIndex}
      />
    </section>
  );
}
