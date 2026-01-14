import { MotionProvider } from "@/components/motion/MotionProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      {children}
      <Analytics />
      <SpeedInsights />
    </MotionProvider>
  );
}
