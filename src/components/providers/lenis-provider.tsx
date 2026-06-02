"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisInstance = lenis;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisInstance = null;
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}
