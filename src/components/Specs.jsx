import React from "react";
import { projectData } from "../data/projectData";
import { Check, ShieldCheck, Sparkles, Sliders, Maximize2, Compass, Layers, Home } from "lucide-react";

export default function Specs({ activeUnit }) {
  const specs = activeUnit?.specs || {
    totalArea: "00 m²",
    coveredArea: "00 m²",
    uncoveredArea: "00 m²",
    rooms: "0 ambientes",
    bathrooms: "0 baños",
    floor: "Piso 0",
    orientation: "Norte",
    condition: "En Pozo",
    finishes: []
  };

  const technicalData = [
    { label: "Superficie Total", value: specs.totalArea, icon: <Maximize2 className="w-4 h-4 text-gold-500" /> },
    { label: "Superficie Cubierta", value: specs.coveredArea, icon: <Maximize2 className="w-4 h-4 text-gold-500" /> },
    { label: "Superficie Descubierta", value: specs.uncoveredArea, icon: <Maximize2 className="w-4 h-4 text-gold-500" /> },
    { label: "Ambientes", value: specs.rooms, icon: <Home className="w-4 h-4 text-gold-500" /> },
    { label: "Baños", value: specs.bathrooms, icon: <Home className="w-4 h-4 text-gold-500" /> },
    { label: "Ubicación", value: specs.floor, icon: <Layers className="w-4 h-4 text-gold-500" /> },
    { label: "Orientación", value: specs.orientation, icon: <Compass className="w-4 h-4 text-gold-500" /> },
    { label: "Estado / Condición", value: specs.condition, icon: <ShieldCheck className="w-4 h-4 text-gold-500" /> }
  ];

  return (
    <section id="specs" className="py-28 bg-gold-50 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="premium-kicker mb-3">
            Ficha técnica
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-gray-950 leading-tight">
            Especificaciones de la {activeUnit?.name || "Unidad"}
          </h3>
          <div className="premium-rule mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="premium-card p-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-950 mb-6">
              <Sliders className="w-5 h-5 text-gold-500" />
              <span>Dimensiones y datos</span>
            </h4>
            <div className="space-y-4">
              {technicalData.map((data) => (
                <div key={data.label} className="flex justify-between items-center py-3 border-b border-gold-100/70 text-sm">
                  <div className="flex items-center gap-2.5 text-gray-600">
                    {data.icon}
                    <span>{data.label}</span>
                  </div>
                  <span className="font-bold text-gray-950">{data.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-950 mb-6">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span>Terminaciones premium</span>
            </h4>
            {specs.finishes && specs.finishes.length > 0 ? (
              <ul className="space-y-4">
                {specs.finishes.map((finish) => (
                  <li key={finish} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <div className="mt-0.5 w-5 h-5 rounded-lg bg-gold-100 text-gold-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 font-bold" />
                    </div>
                    <span>{finish}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic">No se especifican detalles de terminación.</p>
            )}
          </div>

          <div className="premium-card p-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-950 mb-6">
              <ShieldCheck className="w-5 h-5 text-gold-500" />
              <span>Amenities del edificio</span>
            </h4>
            {projectData.amenities && projectData.amenities.length > 0 ? (
              <ul className="space-y-4">
                {projectData.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <div className="mt-0.5 w-5 h-5 rounded-lg bg-gold-100 text-gold-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 font-bold" />
                    </div>
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic">No se especifican amenities de uso común.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
