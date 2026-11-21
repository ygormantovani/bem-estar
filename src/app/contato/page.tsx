import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site, wa } from "@/config/site";

export const metadata = { title: "Contato e Agendamento", description: "Agende sua avaliação pelo WhatsApp ou envie uma mensagem." };

export default function Page() {
  return (
    <>
      <PageHero title="Agende sua avaliação" text="Fale com a nossa equipe pelo WhatsApp ou preencha o formulário." />
      <div className="wrap grid gap-16 pb-24 md:grid-cols-2">
        <div className="space-y-5">
          <a href={wa("Olá! Gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Chamar no WhatsApp</a>
          <p>Telefone: <a href={`tel:${site.telefone.replace(/\D/g, "")}`} className="link-u">{site.telefone}</a></p>
          <p>Instagram: <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="link-u">@{site.instagram}</a></p>
          <p>Endereço: {site.endereco || "a definir"}</p>
          <p>Horários: {site.horario}</p>
          {/* O mapa só aparece quando o endereço real for preenchido em config/site.ts */}
          {site.endereco && <iframe title="Mapa" loading="lazy" className="h-72 w-full rounded-3xl border-0" src={`https://www.google.com/maps?q=${encodeURIComponent(site.endereco)}&output=embed`} />}
        </div>
        <ContactForm />
      </div>
    </>
  );
}
