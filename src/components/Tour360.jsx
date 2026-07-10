import React from "react";
import { projectData } from "../data/projectData";
import { Compass, ExternalLink } from "lucide-react";

export default function Tour360() {
  const { tour360 } = projectData;

  if (!tour360 || !tour360.embedUrl) return null;

  return (
    <section id="tour360" className="py-24 bg-gold-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-3">
            RECORRIDO VIRTUAL
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {tour360.title || "Recorrido 360°"}
          </h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Viví la experiencia de caminar por cada rincón de tu próximo hogar antes de mudarte.
          </p>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Iframe Wrapper with responsive ratio (aspect-video or custom aspect) */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-3 rounded-3xl border border-gold-100 shadow-xl overflow-hidden mb-8">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-950">
              {/* Kuula Iframe Embed */}
              <iframe
                title={tour360.title || "Recorrido 360 virtual"}
                width="100%"
                height="100%"
                src={tour360.embedUrl}
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

          {/* External Action link */}
          {tour360.externalUrl && (
            <div className="flex justify-center">
              <a
                href={tour360.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-gold-200 hover:border-gold-500 text-gray-800 hover:text-gold-600 font-bold text-sm tracking-wide shadow-sm transition-all duration-300 hover:shadow"
              >
                <Compass className="w-4 h-4 text-gold-500" />
                <span>Expandir Recorrido Completo</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
