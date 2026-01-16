export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export function pageview(url: string) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
}
