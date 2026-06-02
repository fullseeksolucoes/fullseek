"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Nav } from "@/components/header/Nav";
import { MobileMenu } from "@/components/header/MobileMenu";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { scrollToSection } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleLogoClick = useCallback(() => {
    if (isHome) {
      scrollToSection("hero");
    } else {
      router.push("/");
    }
  }, [isHome, router]);

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
        <button
          onClick={handleLogoClick}
          aria-label="Fullseek"
          className="flex cursor-pointer items-center space-x-2"
        >
          <Image
            src="/logo.webp"
            loading="eager"
            alt="Fullseek"
            width={140}
            height={40}
          />
        </button>
        <Nav />
        <div className="flex items-center gap-3">
          <Button
            variant="whatsapp"
            size="sm"
            href={whatsappLink(
              "Olá! Vim pelo site da Fullseek.\nGostaria de falar com um especialista sobre um projeto.",
            )}
            onClick={() => trackWhatsApp(AnalyticsLabel.HEADER_WHATSAPP)}
            className="hidden! lg:inline-flex!"
          >
            Falar com Especialista
          </Button>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
