"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

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
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

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

      <Button variant="primary" size="sm" href="/contato" external>
        Falar conosco
      </Button>
    </nav>
  );
}
