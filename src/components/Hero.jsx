import React from "react";
import { projectData } from "../data/projectData";
import { Maximize, Compass, Layers, Home, MapPin } from "lucide-react";

export default function Hero() {
  const { buildingName, unitName, location, status, heroImage, quickInfo } = projectData;

  // Map icon component helper
  const getIcon = (type) => {
    switch (type) {
      case "area":
        return <Maximize className="w-5 h-5 text-gold-500" />;
      case "rooms":
        return <Home className="w-5 h-5 text-gold-500" />;
      case "floor":
        return <Layers className="w-5 h-5 text-gold-500" />;
      case "orientation":
        return <Compass className="w-5 h-5 text-gold-500" />;
      default:
        return null;
    }
  };

  const quickSpecItems = [
    { label: "Superficie", value: quickInfo.area, type: "area" },
    { label: "Ambientes", value: quickInfo.rooms, type: "rooms" },
    { label: "Ubicación", value: quickInfo.floor, type: "floor" },
    { label: "Orientación", value: quickInfo.orientation, type: "orientation" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={`Render principal de ${buildingName}`}
          className="w-full h-full object-cover scale-105 animate-kenburns object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-950/40" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center text-white flex flex-col items-center">
        {/* Status Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
          {status}
        </span>

        {/* Building & Unit Title */}
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-sm font-sans">
          {buildingName}
        </h2>
        <h3 className="text-2xl md:text-4xl text-gold-200 font-light tracking-wide mb-6">
          {unitName}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base font-medium mb-12 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <MapPin className="w-4 h-4 text-gold-400" />
          <span>{location}</span>
        </div>

        {/* Quick Specs - Premium Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl">
          {quickSpecItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                {getIcon(item.type)}
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                {item.label}
              </span>
              <span className="text-base md:text-lg font-bold text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
