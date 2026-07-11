import React from "react";
import { projectData } from "../data/projectData";
import { Compass, ExternalLink } from "lucide-react";

export default function Tour360() {
  const { tour360 } = projectData;

  if (!tour360 || !tour360.embedUrl) return null;

  return (
    <section id="tour360" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="premium-kicker mb-3">
            Recorrido virtual
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-gray-950 leading-tight">
            {tour360.title || "Recorrido 360°"}
          </h3>
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Viví la experiencia de caminar por cada rincón de tu próximo hogar antes de mudarte.
          </p>
          <div className="premium-rule mx-auto mt-5" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="premium-card p-2 md:p-3 overflow-hidden mb-8">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-950">
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

          {tour360.externalUrl && (
            <div className="flex justify-center">
              <a
                href={tour360.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-gold-200 hover:border-gold-500 text-gray-800 hover:text-gold-700 font-bold text-sm shadow-sm transition-all duration-300 hover:shadow"
              >
                <Compass className="w-4 h-4 text-gold-500" />
                <span>Expandir recorrido completo</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
