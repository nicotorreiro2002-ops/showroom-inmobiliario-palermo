import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import InteractiveFloorplan from "./components/InteractiveFloorplan";
import Tour360 from "./components/Tour360";
import Specs from "./components/Specs";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gold-50 antialiased selection:bg-gold-500 selection:text-white">
      {/* Upper Navigation Header */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Main Hero Showcase */}
        <Hero />

        {/* Dynamic Image Gallery */}
        <Gallery />

        {/* 2D Interactive Blueprint and Hotspots */}
        <InteractiveFloorplan />

        {/* 360 virtual walk-through */}
        <Tour360 />

        {/* Specifications detail sheet */}
        <Specs />

        {/* Contact info and call-to-actions */}
        <Contact />
      </main>
    </div>
  );
}
