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
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gold-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand/Logo Area */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-md shadow-gold-500/20 group-hover:bg-gold-600 transition-colors">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-gold-600 transition-colors">
              {projectData.buildingName}
            </h1>
            <p className="text-xs text-gold-600 font-medium tracking-wide">
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
              className="text-sm font-medium text-gray-600 hover:text-gold-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-gold-500/10 hover:shadow-gold-500/20"
          >
            <Phone className="w-3.5 h-3.5" />
            CONTACTAR
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gold-50 text-gray-700 hover:text-gold-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gold-100 shadow-lg py-6 px-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-gold-600 transition-colors py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold tracking-wide transition-all shadow-md"
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
