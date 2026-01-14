import localFont from "next/font/local";
import { Inter, Manrope } from "next/font/google";

export const clashDisplay = localFont({
  src: [
    { path: "../assets/fonts/ClashDisplay/ClashDisplay-Regular.woff2", weight: "400" },
    { path: "../assets/fonts/ClashDisplay/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "../assets/fonts/ClashDisplay/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "../assets/fonts/ClashDisplay/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
