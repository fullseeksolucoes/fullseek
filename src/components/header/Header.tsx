"use client";

import { Nav } from "@/components/header/Nav";

export function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 z-50 w-full
        bg-background
        border-b border-border
      "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="font-heading text-xl font-bold">Fullseek</div>

        {/* Desktop nav */}
        <Nav />
      </div>
    </header>
  );
}
