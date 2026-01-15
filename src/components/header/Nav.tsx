"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "text-sm font-medium transition-colors",
              isActive
                ? "text-secondary"
                : "text-muted-foreground hover:text-secondary/60"
            )}
          >
            {link.label}
          </Link>
        );
      })}

      <Link
        href="/contato"
        className="
          rounded-full bg-primary px-5 py-2 text-sm font-semibold
          text-primary-foreground
          hover:opacity-90 transition
        "
      >
        Falar conosco
      </Link>
    </nav>
  );
}
