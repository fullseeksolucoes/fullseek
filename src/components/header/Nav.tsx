"use client";

import { scrollToSection } from "@/lib/utils";

const links = [
  { id: "servicos", label: "Serviços" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Contato" },
];

export function Nav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="cursor-pointer text-md font-medium text-white/80 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-md"
          >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
