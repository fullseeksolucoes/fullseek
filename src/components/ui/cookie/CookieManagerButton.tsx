"use client";

export function CookieManagerButton() {
  return (
    <button
      onClick={() =>
        import("@/lib/cookies/openCookieManager").then((m) =>
          m.openCookieManager()
        )
      }
      className="rounded-lg border px-4 py-2 text-sm"
    >
      Gerenciar cookies
    </button>
  );
}
