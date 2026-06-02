import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { clashDisplay, inter, manrope } from "./fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fullseek.com.br"),
  title: {
    default: "Fullseek | Criação de Sites em Belo Horizonte",
    template: "%s | Fullseek",
  },
  description:
    "Criação de sites profissionais em Belo Horizonte. Landing pages, sites institucionais e sistemas sob medida. SEO nativo, design responsivo e entrega rápida. Orçamento grátis.",
  keywords: ["criação de sites", "desenvolvimento de sites", "Fullseek", "sites em Belo Horizonte", "landing page", "SEO", "agência de sites BH"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Fullseek",
    title: "Fullseek | Criação de Sites em Belo Horizonte",
    description: "Criação de sites profissionais em BH. Landing pages, sites institucionais e sistemas sob medida com SEO nativo e entrega rápida.",
    url: "https://www.fullseek.com.br",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fullseek - Criação de Sites em Belo Horizonte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fullseek",
    creator: "@fullseek",
    title: "Fullseek | Criação de Sites em Belo Horizonte",
    description: "Criação de sites profissionais em BH. Landing pages, sites institucionais e sistemas sob medida com SEO nativo e entrega rápida.",
    images: ["/og-image.jpg"],
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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1337041978352891');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1337041978352891&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
            description: "Criação de sites profissionais em Belo Horizonte. Landing pages, sites institucionais e sistemas sob medida.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55-31-99078-5891",
              contactType: "sales",
              availableLanguage: ["Portuguese"],
            },
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
            description: "Criação de sites profissionais em Belo Horizonte. Landing pages, sites institucionais e sistemas sob medida.",
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
