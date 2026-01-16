"use client";

import Link from "next/link";
import { openCookieManager } from "@/lib/cookies/openCookieManager";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fullseek. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/privacidade"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Política de Privacidade
          </Link>

          <button
            onClick={openCookieManager}
            className="text-muted-foreground hover:text-foreground transition"
          >
            Gerenciar cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
