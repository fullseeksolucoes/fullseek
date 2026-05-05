"use client";

import { useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";

const DEFAULT_MESSAGE =
  "Olá! Quero um site que gere clientes. Podemos conversar?";

export default function WhatsappButton() {
  const handleClick = useCallback(() => {
    trackWhatsApp(AnalyticsLabel.FLOATING_WHATSAPP);
  }, []);

  return (
    <div className="fixed bottom-7 right-5 z-50">
      <a
        href={whatsappLink(DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
