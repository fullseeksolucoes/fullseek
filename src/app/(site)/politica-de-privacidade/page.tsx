import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Fullseek. Saiba como coletamos, usamos e protegemos suas informações.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-primary mb-8"
        >
          <FaArrowLeft className="text-xs" />
          Voltar para Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <FaShieldAlt className="text-2xl text-primary" />
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Política de Privacidade
          </h1>
        </div>

        <p className="text-sm text-white/40 mb-12">
          Última atualização: 05 de maio de 2026
        </p>

        <div className="space-y-10 text-white/70">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              1. Introdução
            </h2>
            <p className="leading-relaxed">
              A Fullseek valoriza a privacidade dos seus usuários. Esta Política
              de Privacidade descreve como coletamos, usamos e protegemos as
              informações fornecidas através do nosso site. Ao acessar ou
              utilizar nossos serviços, você concorda com as práticas descritas
              neste documento.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              2. Coleta de Informações
            </h2>
            <p className="leading-relaxed mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white/90">Informações de contato:</strong>{" "}
                nome, e-mail, telefone e empresa, fornecidos via formulários ou
                WhatsApp.
              </li>
              <li>
                <strong className="text-white/90">
                  Informações de navegação:
                </strong>{" "}
                endereço IP, tipo de navegador, páginas acessadas e tempo de
                permanência, por meio de cookies e ferramentas de analytics.
              </li>
              <li>
                <strong className="text-white/90">
                  Informações técnicas:
                </strong>{" "}
                dados sobre o dispositivo utilizado, resolução de tela e sistema
                operacional.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              3. Uso das Informações
            </h2>
            <p className="leading-relaxed mb-4">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Responder a solicitações de orçamento e contato;</li>
              <li>Melhorar a experiência do usuário em nosso site;</li>
              <li>
                Enviar comunicações relevantes sobre nossos serviços (mediante
                consentimento);
              </li>
              <li>Analisar o desempenho e qualidade do site;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              4. Compartilhamento de Dados
            </h2>
            <p className="leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros, exceto quando necessário para a prestação dos
              nossos serviços (como provedores de hospedagem e ferramentas de
              comunicação) ou para cumprir determinações legais.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              5. Cookies
            </h2>
            <p className="leading-relaxed">
              Utilizamos cookies para melhorar a funcionalidade do site e
              entender como os visitantes interagem com nossa plataforma. Você
              pode gerenciar suas preferências de cookies através das
              configurações do seu navegador. A desativação de cookies pode
              afetar a experiência de navegação.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              6. Seus Direitos
            </h2>
            <p className="leading-relaxed mb-4">
              Sob a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos ou desatualizados;</li>
              <li>Solicitar a exclusão de dados desnecessários;</li>
              <li>Revogar o consentimento para uso de dados;</li>
              <li>Solicitar portabilidade dos dados.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              7. Segurança
            </h2>
            <p className="leading-relaxed">
              Adotamos medidas técnicas e organizacionais para proteger suas
              informações contra acesso não autorizado, alteração, divulgação ou
              destruição. No entanto, nenhum sistema é completamente seguro, e
              não podemos garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              8. Contato
            </h2>
            <p className="leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta
              Política de Privacidade, entre em contato conosco através do
              e-mail:{" "}
              <a
                href="mailto:contato@fullseek.com.br"
                className="text-primary transition hover:text-primary/80"
              >
                contato@fullseek.com.br
              </a>{" "}
              ou pelo WhatsApp disponível em nosso site.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
