import { trackEvent } from "./trackEvent";
import { trackMetaEvent } from "./trackMetaEvent";
import { AnalyticsAction, AnalyticsCategory, AnalyticsLabel } from "./types";

export function trackWhatsApp(label: AnalyticsLabel) {
  // Google Analytics
  trackEvent({
    action: AnalyticsAction.CLICK_WHATSAPP,
    category: AnalyticsCategory.CTA,
    label,
  });

  // Meta Pixel
  trackMetaEvent("Contact", {
    content_name: label,
  });
}
