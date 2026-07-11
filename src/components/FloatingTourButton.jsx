import React from "react";
import { Compass } from "lucide-react";

export default function FloatingTourButton() {
  return (
    <a
      href="#tour360"
      aria-label="Ir al recorrido 360"
      className="premium-button fixed right-4 bottom-5 md:bottom-auto md:top-28 z-[60] inline-flex items-center gap-2 border border-gold-300/30 bg-gold-950/90 px-4 py-3 text-sm font-bold text-white shadow-xl shadow-gold-900/20 backdrop-blur-xl transition-all hover:bg-gold-700 focus:outline-none focus:ring-4 focus:ring-gold-300"
    >
      <Compass className="w-4 h-4" />
      <span>360°</span>
    </a>
  );
}
