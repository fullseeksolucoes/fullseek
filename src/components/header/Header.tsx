"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/header/Nav";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        z-50 w-full fixed top-0 left-0 transition-all duration-300 border-b border-transparent
        ${
          scrolled
            ? "bg-background/90 backdrop-blur-sm border-foreground/20 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Fullseek"
          className="flex items-center space-x-2"
        >
          <Image
            src="/logo.webp"
            loading="eager"
            alt="Fullseek"
            width={140}
            height={40}
          />
        </Link>
        <Nav />
        <Button
          variant="whatsapp"
          size="sm"
          href={whatsappLink(
            "Olá! Vim pelo site da Fullseek.\nGostaria de falar com um especialista sobre um projeto.",
          )}
          onClick={() => trackWhatsApp(AnalyticsLabel.HEADER_WHATSAPP)}
          className="max-[400px]:px-3 max-[400px]:py-1.5 max-[400px]:text-xs max-[400px]:gap-1"
        >
          Falar com Especialista
        </Button>
      </div>
    </header>
  );
}
