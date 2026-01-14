import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-clash)"],
        subtitle: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },

        border: "var(--color-border)",
        ring: "var(--color-ring)",
      },
    },
  },
  plugins: [],
};

export default config;
