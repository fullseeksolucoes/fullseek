"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/cookies/consent";
import { initMetaPixel } from "@/lib/analytics/metaPixel";

export function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    const consent = getConsent();
    return !consent;
  });

  // Reativa o Pixel se o usuário já aceitou marketing antes
  useEffect(() => {
    const consent = getConsent();
    if (consent?.marketing) {
      initMetaPixel();
    }
  }, []);

  // Permite reabrir via "Gerenciar cookies"
  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-manager", open);
    return () => window.removeEventListener("open-cookie-manager", open);
  }, []);

  if (!visible) return null;

  function acceptAll() {
    setConsent({ analytics: true, marketing: true });
    initMetaPixel();
    setVisible(false);
  }

  function acceptEssential() {
    setConsent({ analytics: true, marketing: false });
    setVisible(false);
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-xl border border-border bg-background p-6 shadow-lg">
      <h3 className="text-base font-semibold">Este site utiliza cookies</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Utilizamos cookies para melhorar sua experiência, analisar tráfego e
        personalizar conteúdo. Você pode aceitar todos ou apenas os essenciais.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          onClick={acceptEssential}
          className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted transition"
        >
          Apenas essenciais
        </button>

        <button
          onClick={acceptAll}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Aceitar todos
        </button>
      </div>
    </div>
  );
}
