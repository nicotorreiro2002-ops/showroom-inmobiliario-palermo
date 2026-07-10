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
    <section id="specs" className="py-24 bg-white animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-3">
            FICHA TÉCNICA
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Especificaciones de la {activeUnit?.name || "Unidad"}
          </h3>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mt-4" />
        </div>

        {/* 3-Column Detailed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tech Data Sheet Column */}
          <div className="bg-gold-50/30 border border-gold-100 rounded-3xl p-8 shadow-sm">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-950 mb-6">
              <Sliders className="w-5 h-5 text-gold-500" />
              <span>Dimensiones y Datos</span>
            </h4>
            <div className="space-y-4">
              {technicalData.map((data, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-gold-100/50 text-sm">
                  <div className="flex items-center gap-2.5 text-gray-600">
                    {data.icon}
                    <span>{data.label}</span>
                  </div>
                  <span className="font-bold text-gray-950">{data.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Finishes Details Column */}
          <div className="bg-gold-50/30 border border-gold-100 rounded-3xl p-8 shadow-sm">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-950 mb-6">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span>Terminaciones Premium</span>
            </h4>
            {specs.finishes && specs.finishes.length > 0 ? (
              <ul className="space-y-4">
                {specs.finishes.map((finish, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center shrink-0">
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

          {/* Amenities Details Column (Común al edificio) */}
          <div className="bg-gold-50/30 border border-gold-100 rounded-3xl p-8 shadow-sm">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-950 mb-6">
              <ShieldCheck className="w-5 h-5 text-gold-500" />
              <span>Amenities del Edificio</span>
            </h4>
            {projectData.amenities && projectData.amenities.length > 0 ? (
              <ul className="space-y-4">
                {projectData.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center shrink-0">
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
