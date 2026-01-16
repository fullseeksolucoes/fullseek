export function openCookieManager() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("open-cookie-manager"));
}
