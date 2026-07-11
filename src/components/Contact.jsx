import React from "react";
import { projectData } from "../data/projectData";
import { MessageSquare, Mail, MapPin } from "lucide-react";

export default function Contact({ activeUnit }) {
  const { contact, buildingName, location } = projectData;
  const cleanedWhatsapp = (contact?.whatsapp || "").replace(/\D/g, "");
  const unitText = activeUnit ? ` la ${activeUnit.name} (${activeUnit.label})` : "";
  const customMessage = `Hola! Estoy interesado en obtener más información sobre${unitText} en ${buildingName}.`;
  const whatsappUrl = `https://wa.me/${cleanedWhatsapp}?text=${encodeURIComponent(customMessage)}`;
  const emailUrl = `mailto:${contact?.email || ""}?subject=${encodeURIComponent(
    `Consulta - ${buildingName} - ${activeUnit?.name || ""}`
  )}&body=${encodeURIComponent(customMessage)}`;

  return (
    <section id="contact" className="py-28 bg-gold-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_38%),linear-gradient(180deg,#18130f_0%,#0f0d0a_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="premium-kicker text-gold-300 mb-3">
            Hacé tu consulta
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
            Coordiná una visita privada
          </h3>
          {contact.commercialText && (
            <p className="text-gold-100/75 mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              {contact.commercialText}
            </p>
          )}
          <div className="premium-rule mx-auto mt-6" />
        </div>

        <div className="w-full max-w-3xl border border-white/10 bg-white/[0.045] p-4 md:p-5 rounded-lg backdrop-blur-xl shadow-2xl shadow-black/25">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactCard
              href={whatsappUrl}
              icon={<MessageSquare className="w-6 h-6" />}
              title="WhatsApp directo"
              description="Asesoramiento inmediato por parte de nuestro equipo comercial."
              action="Iniciar chat"
              external
            />
            <ContactCard
              href={emailUrl}
              icon={<Mail className="w-6 h-6" />}
              title="Correo electrónico"
              description="Envianos tus datos de contacto para una atención formal detallada."
              action="Enviar email"
            />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 w-full text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            <span>{buildingName} - {location}</span>
          </div>
          <p>© {new Date().getFullYear()} Showroom Inmobiliario Interactivo.</p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ href, icon, title, description, action, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center justify-between text-center p-7 rounded-lg border border-white/10 bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.075] hover:border-gold-400/40"
    >
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-lg bg-gold-500/10 text-gold-300 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-white transition-colors">
          {icon}
        </div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-xs text-gray-400 max-w-[220px] leading-relaxed">
          {description}
        </p>
      </div>
      <span className="premium-button mt-8 px-6 py-2.5 bg-gold-500 text-white font-bold text-xs transition-all group-hover:bg-gold-600">
        {action}
      </span>
    </a>
  );
}
