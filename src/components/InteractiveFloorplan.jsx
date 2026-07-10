import React, { useState, useEffect, useMemo } from "react";
import { Info, ArrowUpRight, Compass, X, Maximize2, Home, Layers } from "lucide-react";

const EMPTY_FLOORPLAN = { image: "", hotspots: [] };

export default function InteractiveFloorplan({
  activeUnit,
  activeUnitId,
  setActiveUnitId,
  units = []
}) {
  const floorplan = activeUnit?.floorplan || EMPTY_FLOORPLAN;
  const hotspots = useMemo(() => floorplan.hotspots || [], [floorplan.hotspots]);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);
  const quickInfo = activeUnit?.quickInfo || {};
  const quickSpecItems = [
    { label: "Superficie", value: quickInfo.area, icon: <Maximize2 className="w-4 h-4 text-gold-500" /> },
    { label: "Ambientes", value: quickInfo.rooms, icon: <Home className="w-4 h-4 text-gold-500" /> },
    { label: "Ubicación", value: quickInfo.floor, icon: <Layers className="w-4 h-4 text-gold-500" /> },
    { label: "Orientación", value: quickInfo.orientation, icon: <Compass className="w-4 h-4 text-gold-500" /> }
  ].filter((item) => item.value);

  useEffect(() => {
    if (hotspots.length > 0) {
      setActiveHotspot(hotspots[0]);
    } else {
      setActiveHotspot(null);
    }
    setIsMobileDetailOpen(false);
  }, [hotspots]);

  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot);
    setIsMobileDetailOpen(true);
  };

  return (
    <section id="floorplan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-3">
            UNIDADES DISPONIBLES
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Elegí unidad y explorá su plano
          </h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Cada unidad tiene sus propios datos, renders interiores y puntos interactivos sobre la planta.
          </p>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mt-4" />
        </div>

        {units.length > 1 && (
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex bg-gold-50 border border-gold-100 p-1.5 rounded-2xl shadow-sm">
              {units.map((unit) => {
                const isActive = unit.id === activeUnitId;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setActiveUnitId(unit.id)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-gold-500 text-white shadow-lg shadow-gold-500/20"
                        : "text-gray-600 hover:text-gold-700 hover:bg-white"
                    }`}
                  >
                    {unit.name}
                    <span className={`block text-[10px] font-normal mt-0.5 ${isActive ? "text-gold-100" : "text-gray-500"}`}>
                      {unit.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {quickSpecItems.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {quickSpecItems.map((item) => (
              <div
                key={item.label}
                className="bg-gold-50/60 border border-gold-100 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-gold-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-gray-950">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-8 bg-gold-50/30 border border-gold-100 rounded-3xl p-4 md:p-8 flex justify-center items-center relative shadow-sm overflow-hidden select-none">
            {floorplan.image ? (
              <div className="relative w-full max-w-2xl">
                <img
                  src={floorplan.image}
                  alt={`Plano de ${activeUnit?.name}`}
                  className="w-full h-auto object-contain block mx-auto animate-in fade-in duration-300"
                />

                {hotspots.map((hotspot) => {
                  const isActive = activeHotspot?.id === hotspot.id;
                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() => handleHotspotClick(hotspot)}
                      className={`absolute w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 ${
                        isActive
                          ? "bg-gold-600 scale-110 ring-4 ring-gold-200"
                          : "bg-gold-500 animate-hotspot hover:scale-110 hover:bg-gold-600"
                      }`}
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      aria-label={`Ver detalles de ${hotspot.title}`}
                    >
                      <span className="w-2 bg-white rounded-full block aspect-square shadow-sm" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                        {hotspot.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No hay un plano disponible para esta unidad.</p>
            )}
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            {activeHotspot ? (
              <div className="bg-gold-50/50 border border-gold-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between h-full animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  {activeHotspot.image && (
                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-gold-100 shadow-sm relative group">
                      <img
                        src={activeHotspot.image}
                        alt={activeHotspot.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 leading-snug">
                        {activeHotspot.title}
                      </h4>
                      <p className="text-xs text-gold-600 font-medium">Ambiente seleccionado</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8 font-sans">
                    {activeHotspot.description}
                  </p>
                </div>

                {activeHotspot.tourUrl && (
                  <div className="pt-6 border-t border-gold-100">
                    <a
                      href={activeHotspot.tourUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm tracking-wide shadow-md shadow-gold-500/10 hover:shadow-gold-500/20 transition-all"
                    >
                      <span>Ver vista 360°</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px] h-full">
                <Info className="w-10 h-10 text-gray-300 mb-4" />
                <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed">
                  Seleccioná un ambiente de la planta para ver fotos, descripción y su vista 360°.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobileDetailOpen && activeHotspot && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileDetailOpen(false)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm border border-gold-100 animate-in zoom-in-95 duration-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {activeHotspot.image ? (
              <div className="aspect-video w-full relative">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setIsMobileDetailOpen(false)}
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/75 transition-colors cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex justify-end p-3.5">
                <button
                  type="button"
                  onClick={() => setIsMobileDetailOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    {activeHotspot.title}
                  </h4>
                  <p className="text-xs text-gold-600 font-medium">Ambiente seleccionado</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {activeHotspot.description}
              </p>

              {activeHotspot.tourUrl ? (
                <a
                  href={activeHotspot.tourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm tracking-wide shadow-md shadow-gold-500/10 hover:shadow-gold-500/20 transition-all"
                >
                  <span>Ver vista 360°</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsMobileDetailOpen(false)}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm tracking-wide transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
