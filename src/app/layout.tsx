import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { clashDisplay, inter, manrope } from "./fonts";

const baseUrl = "https://www.fullseek.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fullseek.com.br"),
  title: {
    default: "Fullseek | Desenvolvimento de Sites e Sistemas",
    template: "%s | Fullseek",
  },
  description:
    "A Fullseek desenvolve sites, sistemas e soluções digitais sob medida para empresas que buscam performance, tecnologia e crescimento.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Fullseek",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
  `}
        </Script>
      </head>
      <body
        className={`${clashDisplay.variable} ${manrope.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
