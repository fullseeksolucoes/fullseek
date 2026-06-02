"use client";

import { useEffect, useRef, useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { whatsappLink } from "@/lib/whatsapp";
import { scrollToSection } from "@/lib/utils";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { id: "servicos", label: "Serviços" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Contato" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleNav = useCallback(
    (id: string) => {
      onClose();
      setTimeout(() => scrollToSection(id), 150);
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, a, input, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-72 flex-col bg-background border-l border-white/10 shadow-2xl"
      >
        <div className="flex items-center justify-end p-6">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Fechar menu"
          >
            <FiX className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-6 px-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="cursor-pointer text-left text-lg font-medium text-white/80 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-lg px-2 -mx-2"
            >
              {link.label}
            </button>
          ))}
          <hr className="border-white/10" />
          <a
            href={whatsappLink("Olá! Vim pelo site da Fullseek.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsApp(AnalyticsLabel.FLOATING_WHATSAPP);
              onClose();
            }}
            className="flex items-center gap-3 text-lg font-semibold text-green-400 transition hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-lg px-2 -mx-2"
          >
            <FaWhatsapp className="text-xl" />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </div>
  );
}
