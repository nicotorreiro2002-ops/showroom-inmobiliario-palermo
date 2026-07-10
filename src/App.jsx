import React, { useState } from "react";
import { projectData } from "./data/projectData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import InteractiveFloorplan from "./components/InteractiveFloorplan";
import Tour360 from "./components/Tour360";
import Specs from "./components/Specs";
import Contact from "./components/Contact";
import FloatingTourButton from "./components/FloatingTourButton";

export default function App() {
  // Lógica segura para obtener las unidades
  const units = projectData.units || [];
  
  // Inicializamos el ID de la unidad seleccionada de forma defensiva
  const [selectedUnitId, setSelectedUnitId] = useState(units[0]?.id || null);

  // Buscamos el objeto de la unidad seleccionada, o por defecto la primera
  const selectedUnit = units.find((unit) => unit.id === selectedUnitId) || units[0];

  // Si no hay ninguna unidad cargada, evitamos que la página quede en blanco
  if (!selectedUnit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gold-50 text-gray-800 font-sans">
        <div className="text-center p-8 bg-white border border-gold-200 rounded-3xl shadow-sm max-w-sm mx-auto">
          <p className="text-lg font-bold text-gray-900 mb-2">Configuración Incompleta</p>
          <p className="text-sm text-gray-600">No hay unidades cargadas en el archivo projectData.js.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gold-50 antialiased selection:bg-gold-500 selection:text-white">
      {/* Upper Navigation Header (pasa la unidad activa para el logo/branding) */}
      <Header activeUnit={selectedUnit} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Main Hero Showcase */}
        <Hero
          activeUnitId={selectedUnitId}
          setActiveUnitId={setSelectedUnitId}
          units={units}
        />

        {/* Common exterior and building renders */}
        <Gallery variant="common" />

        {/* Unit selector and 2D interactive blueprint */}
        <InteractiveFloorplan
          activeUnit={selectedUnit}
          activeUnitId={selectedUnitId}
          setActiveUnitId={setSelectedUnitId}
          units={units}
        />

        {/* Unit-specific renders */}
        <Gallery variant="unit" activeUnit={selectedUnit} />

        {/* 360 virtual walk-through */}
        <Tour360 />

        {/* Specifications detail sheet (ficha técnica de la unidad) */}
        <Specs activeUnit={selectedUnit} />

        {/* Contact info and call-to-actions (personalizado para la unidad activa) */}
        <Contact activeUnit={selectedUnit} />
      </main>

      <FloatingTourButton />
    </div>
  );
}
