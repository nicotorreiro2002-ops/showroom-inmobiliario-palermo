import React, { useState, useEffect } from "react";
import { projectData } from "../data/projectData";
import { Building2, Menu, X, Phone } from "lucide-react";

export default function Header({ activeUnit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Renders", href: "#common-gallery" },
    { name: "Unidades", href: "#floorplan" },
    { name: "Interiores", href: "#unit-gallery" },
    { name: "360°", href: "#tour360" },
    { name: "Datos", href: "#specs" },
    { name: "Contacto", href: "#contact" }
  ];

  const cleanedWhatsapp = (projectData.contact?.whatsapp || "").replace(/\D/g, "");
  
  // Mensaje personalizado de WhatsApp basado en la unidad activa
  const customMessage = `Hola! Estoy interesado en la ${activeUnit?.name || "unidad"} (${activeUnit?.label || ""}) de ${projectData.buildingName}. ¿Me podrían enviar más información?`;
  const whatsappUrl = `https://wa.me/${cleanedWhatsapp}?text=${encodeURIComponent(customMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/78 backdrop-blur-xl shadow-[0_10px_40px_rgba(23,23,23,0.08)] border-b border-gold-100/70 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand/Logo Area */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-md transition-colors ${
            scrolled
              ? "bg-gold-900 text-gold-100 shadow-gold-900/15 group-hover:bg-gold-700"
              : "bg-gold-500 text-white shadow-gold-900/20 group-hover:bg-gold-400"
          }`}>
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className={`text-lg font-extrabold leading-tight transition-colors ${
              scrolled ? "text-gray-950 group-hover:text-gold-700" : "text-white group-hover:text-gold-100"
            }`}>
              {projectData.buildingName}
            </h1>
            <p className={`text-xs font-semibold ${scrolled ? "text-gold-600" : "text-gold-200"}`}>
              {activeUnit ? `${activeUnit.name} - ${activeUnit.label}` : projectData.location}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-px hover:after:w-full after:transition-all after:duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gold-700 after:bg-gold-500"
                  : "text-white/78 hover:text-white after:bg-gold-300"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`premium-button flex items-center gap-2 px-4 py-2 text-white text-xs font-bold transition-all shadow-md ${
              scrolled
                ? "bg-gold-900 hover:bg-gold-700 shadow-gold-900/10 hover:shadow-gold-900/20"
                : "bg-gold-500 hover:bg-gold-600 shadow-gold-900/20"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            CONTACTAR
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-700 hover:bg-gold-50 hover:text-gold-700" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gold-100 shadow-lg py-6 px-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-gray-700 hover:text-gold-700 transition-colors py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="premium-button flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-gold-900 hover:bg-gold-700 text-white text-sm font-bold transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              Enviar WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
