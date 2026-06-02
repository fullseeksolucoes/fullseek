"use client";

import { getLenis } from "@/components/providers/lenis-provider";

export function scrollToSection(id: string) {
  const lenis = getLenis();
  const element = document.getElementById(id);
  if (!element) return;

  const offset = 100;

  if (lenis) {
    lenis.scrollTo(element, { offset });
  } else {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

}
