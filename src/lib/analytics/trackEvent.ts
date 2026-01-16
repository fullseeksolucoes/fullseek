import { AnalyticsAction, AnalyticsCategory, AnalyticsLabel } from "./types";

interface TrackEventProps {
  action: AnalyticsAction;
  category: AnalyticsCategory;
  label: AnalyticsLabel;
  value?: number;
}

export function trackEvent({
  action,
  category,
  label,
  value,
}: TrackEventProps) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
