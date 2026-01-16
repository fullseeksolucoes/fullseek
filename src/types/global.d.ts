export {};

type GtagCommand =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    // Google Analytics (GA4)
    gtag: (...args: GtagCommand) => void;

    // Meta Pixel
    fbq?: {
      (...args: ["init", string]): void;
      (...args: ["track", string, Record<string, unknown>?]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
  }
}
