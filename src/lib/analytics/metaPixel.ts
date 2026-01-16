export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type FBQ = NonNullable<Window["fbq"]>;

type FBQArgs = ["init", string] | ["track", string, Record<string, unknown>?];

export function initMetaPixel() {
  if (typeof window === "undefined") return;
  if (!META_PIXEL_ID) return;
  if (window.fbq) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  const fbq: FBQ = ((...args: FBQArgs) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue?.push(args);
    }
  }) as FBQ;

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";

  window.fbq = fbq;
  window._fbq = fbq;

  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}
