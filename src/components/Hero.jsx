import React, { useState } from "react";
import { projectData } from "../data/projectData";
import { Building2, Compass, MapPin, Moon, Sun } from "lucide-react";

export default function Hero({ activeUnitId, setActiveUnitId, units }) {
  const { buildingName, location, heroImage, heroImages } = projectData;
  const availableUnits = units || projectData.units || [];
  const [heroMode, setHeroMode] = useState("day");
  const heroOptions = {
    day: heroImages?.day || { label: "Día", image: heroImage },
    night: heroImages?.night || { label: "Noche", image: heroImage }
  };
  const activeHeroImage = heroOptions[heroMode] || heroOptions.day;

  const handleUnitClick = (unitId) => {
    setActiveUnitId?.(unitId);
    requestAnimationFrame(() => {
      document.getElementById("floorplan")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gold-950 pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          key={activeHeroImage.image}
          src={activeHeroImage.image}
          alt={`Render principal de ${buildingName} - ${activeHeroImage.label}`}
          className="w-full h-full object-cover scale-105 animate-kenburns object-center transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,12,13,0.58)_0%,rgba(12,12,12,0.34)_42%,rgba(11,10,9,0.82)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gold-50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center text-white flex flex-col items-center">
        <p className="premium-kicker text-gold-200 mb-5">
          Showroom inmobiliario
        </p>

        <h2 className="text-5xl md:text-8xl font-semibold leading-none mb-6 drop-shadow-sm font-sans">
          {buildingName}
        </h2>

        <div className="flex items-center gap-2 text-gray-200 text-sm md:text-base font-semibold mb-6 bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
          <MapPin className="w-4 h-4 text-gold-400" />
          <span>{location}</span>
        </div>

        <div className="flex bg-black/20 border border-white/15 p-1 rounded-lg backdrop-blur-xl mb-8 shadow-2xl shadow-black/10">
          <button
            type="button"
            onClick={() => setHeroMode("day")}
            className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition-all cursor-pointer ${
              heroMode === "day"
                ? "bg-gold-500 text-white shadow-lg shadow-gold-500/20"
                : "text-gray-200 hover:bg-white/10 hover:text-white"
            }`}
            aria-pressed={heroMode === "day"}
          >
            <Sun className="w-4 h-4" />
            Día
          </button>
          <button
            type="button"
            onClick={() => setHeroMode("night")}
            className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition-all cursor-pointer ${
              heroMode === "night"
                ? "bg-gold-500 text-white shadow-lg shadow-gold-500/20"
                : "text-gray-200 hover:bg-white/10 hover:text-white"
            }`}
            aria-pressed={heroMode === "night"}
          >
            <Moon className="w-4 h-4" />
            Noche
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {availableUnits.map((unit) => {
            const isActive = unit.id === activeUnitId;

            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => handleUnitClick(unit.id)}
                className={`premium-button border px-4 py-2 text-sm font-semibold backdrop-blur-md cursor-pointer ${
                  isActive
                    ? "border-gold-300 bg-gold-500 text-white shadow-lg shadow-gold-500/20"
                    : "border-white/15 bg-black/20 text-gold-50 hover:bg-white/15 hover:border-gold-200/60"
                }`}
              >
                {unit.name} · {unit.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#common-gallery"
            className="premium-button inline-flex items-center justify-center gap-2 bg-gold-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-600"
          >
            <Building2 className="w-4 h-4" />
            Ver renders exteriores
          </a>
          <a
            href="#tour360"
            className="premium-button inline-flex items-center justify-center gap-2 border border-white/15 bg-black/20 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/15"
          >
            <Compass className="w-4 h-4 text-gold-300" />
            Recorrido 360°
          </a>
        </div>
      </div>
    </section>
  );
}
