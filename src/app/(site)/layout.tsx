import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import WhatsappButton from "@/components/sections/WhatsappButton";
import { CookieBanner } from "@/components/ui/cookie/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsappButton />
      {/* <CookieBanner /> */}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
