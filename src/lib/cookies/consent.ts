export const CONSENT_KEY = "fullseek_cookie_consent";

export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
};

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONSENT_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function setConsent(consent: CookieConsent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export function clearConsent() {
  localStorage.removeItem(CONSENT_KEY);
}
