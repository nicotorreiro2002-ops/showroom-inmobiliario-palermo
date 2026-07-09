import React from "react";
import { projectData } from "../data/projectData";
import { MessageSquare, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { contact, buildingName, location } = projectData;

  // WhatsApp Url - cleans non-numeric characters automatically
  const cleanedWhatsapp = contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanedWhatsapp}?text=${encodeURIComponent(contact.message)}`;
  
  // Email Url
  const emailUrl = `mailto:${contact.email}?subject=${encodeURIComponent(`Consulta - ${buildingName}`)}&body=${encodeURIComponent(contact.message)}`;

  return (
    <section id="contact" className="py-24 bg-gold-950 text-white relative overflow-hidden">
      {/* Background Subtle Accent Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-3">
            HACÉ TU CONSULTA
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Comenzá tu próximo capítulo
          </h3>
          {contact.commercialText && (
            <p className="text-gold-200/80 mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              {contact.commercialText}
            </p>
          )}
          <div className="h-[2px] w-16 bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Contact Methods Panel */}
        <div className="w-full max-w-3xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center">
          
          {/* WhatsApp Action Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-between text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">WhatsApp Directo</h4>
              <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                Asesoramiento inmediato por parte de nuestro equipo comercial.
              </p>
            </div>
            <span className="mt-8 px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs tracking-wider transition-all">
              INICIAR CHAT
            </span>
          </a>

          {/* Email Action Card */}
          <a
            href={emailUrl}
            className="flex-1 flex flex-col items-center justify-between text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Correo Electrónico</h4>
              <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                Envianos tus datos de contacto para una atención formal detallada.
              </p>
            </div>
            <span className="mt-8 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10 font-bold text-xs tracking-wider transition-all">
              ENVIAR EMAIL
            </span>
          </a>

        </div>

        {/* Footer Area */}
        <div className="mt-24 pt-8 border-t border-white/10 w-full text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            <span>{buildingName} — {location}</span>
          </div>
          <p>© {new Date().getFullYear()} Showroom Inmobiliario Interactivo. Desarrollado de forma modular.</p>
        </div>
      </div>
    </section>
  );
}
