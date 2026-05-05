import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaFileContract } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da Fullseek. Leia sobre as condições para utilização dos nossos serviços e site.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermosDeUso() {
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
          <FaFileContract className="text-2xl text-primary" />
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Termos de Uso
          </h1>
        </div>

        <p className="text-sm text-white/40 mb-12">
          Última atualização: 05 de maio de 2026
        </p>

        <div className="space-y-10 text-white/70">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              1. Aceitação dos Termos
            </h2>
            <p className="leading-relaxed">
              Ao acessar o site da Fullseek, você concorda com estes Termos de
              Uso e com nossa Política de Privacidade. Se você não concordar com
              qualquer parte destes termos, não deve utilizar nossos serviços ou
              site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              2. Serviços
            </h2>
            <p className="leading-relaxed">
              A Fullseek oferece serviços de desenvolvimento web, incluindo
              criação de landing pages, sites institucionais, sistemas sob
              medida, consultoria em SEO e serviços relacionados. Os detalhes,
              prazos e valores de cada projeto são definidos em proposta
              comercial específica.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              3. Orçamentos e Contratação
            </h2>
            <p className="leading-relaxed mb-4">
              Os orçamentos fornecidos têm validade de 30 dias. A contratação se
              dá mediante assinatura de proposta comercial ou confirmação via
              WhatsApp/e-mail, com pagamento conforme acordado entre as partes
              (sinal e parcelas ou pagamento integral).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              4. Obrigações do Cliente
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Fornecer informações verídicas e todos os materiais necessários
                para a execução do projeto (textos, imagens, logotipos, etc.);
              </li>
              <li>
                Realizar o pagamento nos prazos estabelecidos na proposta
                comercial;
              </li>
              <li>
                Revisar e aprovar as entregas dentro dos prazos combinados;
              </li>
              <li>
                Não utilizar os serviços da Fullseek para fins ilegais ou que
                violem direitos de terceiros.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              5. Propriedade Intelectual
            </h2>
            <p className="leading-relaxed">
              Após a quitação total do projeto, os direitos de uso do site ou
              sistema desenvolvido são transferidos ao cliente. A Fullseek retém
              direitos sobre metodologias, códigos base e ferramentas
              proprietárias utilizadas na construção do projeto, salvo acordo em
              contrário.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              6. Prazos e Revisões
            </h2>
            <p className="leading-relaxed">
              Os prazos de entrega são estimativas baseadas na complexidade do
              projeto e na agilidade no fornecimento de materiais pelo cliente.
              Incluem-se até 2 rodadas de revisão por etapa. Revisões adicionais
              ou mudanças de escopo podem impactar no prazo e custo final.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              7. Limitação de Responsabilidade
            </h2>
            <p className="leading-relaxed">
              A Fullseek não se responsabiliza por perdas financeiras diretas ou
              indiretas relacionadas ao uso do site ou serviços, falhas de
              terceiros (como hospedagem e registro de domínios), ou por
              conteúdos enviados pelo cliente que violem direitos de terceiros.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              8. Modificações dos Termos
            </h2>
            <p className="leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a
              qualquer momento. As alterações entrarão em vigor após a
              publicação no site. Recomendamos a leitura periódica deste
              documento.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              9. Contato
            </h2>
            <p className="leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo
              e-mail:{" "}
              <a
                href="mailto:contato@fullseek.com.br"
                className="text-primary transition hover:text-primary/80"
              >
                contato@fullseek.com.br
              </a>{" "}
              ou através do WhatsApp disponível em nosso site.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
