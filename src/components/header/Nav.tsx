"use client";

import Link from "next/link";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#cta", label: "Contato" },
];

export function Nav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className="text-md font-medium text-white/80 transition hover:text-primary"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
