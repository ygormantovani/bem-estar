import PageHero from "@/components/PageHero";

export const metadata = { title: "Política de Privacidade", description: "Como a Bem Estar trata seus dados (LGPD)." };

// MODELO — revise com assessoria jurídica antes de publicar.
export default function Page() {
  return (
    <>
      <PageHero title="Política de privacidade" text="Transparência sobre os dados que você nos envia (Lei Geral de Proteção de Dados)." />
      <div className="wrap max-w-2xl space-y-5 pb-24 leading-relaxed text-marrom/80">
        <p>Coletamos apenas nome, telefone, tratamento de interesse e a mensagem que você digitar no formulário.</p>
        <p>Esses dados são usados exclusivamente para responder ao seu contato. O formulário apenas abre o WhatsApp da clínica com a mensagem pronta: o site não armazena essas informações.</p>
        <p>Não solicite nem envie dados sensíveis de saúde por formulário. Eles são tratados somente em atendimento, com consentimento e proteção adequados.</p>
        <p>Este site não usa cookies de rastreamento. Se isso mudar, esta política e um aviso de cookies serão atualizados.</p>
        <p>Para exercer seus direitos (acesso, correção ou exclusão), fale conosco pelos canais da página de contato.</p>
      </div>
    </>
  );
}
