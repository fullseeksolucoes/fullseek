export const metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="mb-6 text-3xl font-bold">Política de Privacidade</h1>

      <p className="mb-4 text-muted-foreground">
        A Fullseek respeita a sua privacidade e está comprometida com a
        transparência no tratamento de dados pessoais, conforme a Lei Geral de
        Proteção de Dados (LGPD).
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Coleta de informações</h2>
      <p className="text-muted-foreground">
        Coletamos informações fornecidas voluntariamente pelo usuário por meio
        de formulários, além de dados de navegação coletados automaticamente por
        ferramentas como Google Analytics.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Uso de cookies</h2>
      <p className="text-muted-foreground">
        Utilizamos cookies essenciais para o funcionamento do site e cookies
        analíticos e de marketing mediante consentimento do usuário.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">
        Compartilhamento de dados
      </h2>
      <p className="text-muted-foreground">
        Não compartilhamos dados pessoais com terceiros, exceto quando
        necessário para operação de serviços de análise e marketing.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">
        Gerenciamento de cookies
      </h2>
      <p className="mb-4 text-muted-foreground">
        Você pode alterar ou revogar seu consentimento a qualquer momento.
      </p>

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
    </section>
  );
}
