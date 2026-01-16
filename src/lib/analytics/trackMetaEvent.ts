export function trackMetaEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.fbq) return;

  window.fbq("track", event, data);
}
