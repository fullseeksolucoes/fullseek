import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CookieBanner } from "@/components/ui/CookieBanner";
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
      <main className="pt-16">{children}</main>
      <Footer />
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
