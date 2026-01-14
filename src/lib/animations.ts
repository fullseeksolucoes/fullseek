import type { Variants } from "framer-motion";
import { easeOutExpo, easeInOut } from "./easing";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

export const stagger: Variants = {
  show: {
    transition: {
      staggerChildren: 0.15,
      ease: easeInOut,
    },
  },
};
