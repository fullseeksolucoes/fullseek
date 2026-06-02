"use client";

import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import WhatsappButton from "@/components/sections/WhatsappButton";
import LenisProvider from "@/components/providers/lenis-provider";
import { scrollToSection } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToSection(hash), 300);
    }
  }, []);

  return (
    <LenisProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
      <WhatsappButton />
      <Analytics />
      <SpeedInsights />
    </LenisProvider>
  );
}
