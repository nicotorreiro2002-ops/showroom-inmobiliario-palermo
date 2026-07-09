import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({
  isOpen,
  onClose,
  images,
  activeIndex,
  setActiveIndex
}) {
  if (!isOpen) return null;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeIndex, isOpen]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const activeImage = images[activeIndex];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200 cursor-zoom-out"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-white w-full max-w-7xl mx-auto z-10">
        <span className="text-sm font-semibold tracking-wider text-gray-400">
          {activeIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Slider Area */}
      <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:left-4 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Active Image */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[70vh] md:max-h-[75vh] w-full flex justify-center items-center select-none cursor-default"
        >
          <img
            src={activeImage.image}
            alt={activeImage.title}
            className="max-h-[70vh] md:max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 md:right-4 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl mx-auto text-center text-white pb-4 z-10 cursor-default"
      >
        <h4 className="text-xl font-bold mb-2">{activeImage.title}</h4>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {activeImage.description}
        </p>
      </div>
    </div>
  );
}
