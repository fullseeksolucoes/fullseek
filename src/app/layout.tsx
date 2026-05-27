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
  keywords: ["desenvolvimento de sites", "sistemas web", "Fullseek", "soluções digitais", "tecnologia"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Fullseek",
    title: "Fullseek | Desenvolvimento de Sites e Sistemas",
    description: "A Fullseek desenvolve sites, sistemas e soluções digitais sob medida para empresas que buscam performance, tecnologia e crescimento.",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Fullseek Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fullseek",
    creator: "@fullseek",
    title: "Fullseek | Desenvolvimento de Sites e Sistemas",
    description: "A Fullseek desenvolve sites, sistemas e soluções digitais sob medida para empresas que buscam performance, tecnologia e crescimento.",
    images: ["/logo.webp"],
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
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="6pi234y3nvdo79hmsty5wnbjofuf7p" />
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
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fullseek",
            url: "https://www.fullseek.com.br",
            logo: "https://www.fullseek.com.br/logo.webp",
            description: "A Fullseek desenvolve sites, sistemas e soluções digitais sob medida para empresas que buscam performance, tecnologia e crescimento.",
            sameAs: [
              "https://www.instagram.com/fullseek",
              "https://www.linkedin.com/company/fullseek",
            ],
          })}
        </Script>
        <Script
          id="json-ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Fullseek",
            url: "https://www.fullseek.com.br",
            description: "Desenvolvimento de sites, sistemas e soluções digitais sob medida.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.fullseek.com.br/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
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
