import PageHero from "@/components/PageHero";
import Media from "@/components/Media";
import CTA from "@/components/CTA";
import { site } from "@/config/site";

export const metadata = { title: "A Clínica", description: "Conheça a essência, a missão, a visão e os valores da Bem Estar." };

// CONTEÚDO INSTITUCIONAL — preencha `texto` com os dados reais. Vazio = aviso discreto (nada é inventado).
const blocos = [
  { titulo: "Nossa essência", texto: "Beleza, autoestima e bem-estar em perfeita harmonia. Cada pessoa merece um atendimento individualizado, com técnicas modernas, cuidado e atenção aos detalhes." },
  { titulo: "Nossa missão", texto: "" }, { titulo: "Nossa visão", texto: "" }, { titulo: "Nossos valores", texto: "" },
  { titulo: "Ambiente da clínica", texto: "" }, { titulo: "Qualidade e segurança", texto: "" },
];

export default function Page() {
  return (
    <>
      <PageHero title="A Bem Estar" text="Uma clínica pensada para acolher, cuidar e valorizar a beleza de cada pessoa." />
      <div className="wrap grid gap-16 pb-24 md:grid-cols-[.8fr_1.2fr]">
        <Media src={site.imagens.experiencia} label="Foto da clínica" className="aspect-[3/4] w-full max-w-sm md:sticky md:top-28 md:self-start" />
        <div className="space-y-12">
          {blocos.map((b) => (
            <section key={b.titulo} className="border-t border-champagne pt-6">
              <h2 className="font-serif text-3xl">{b.titulo}</h2>
              <p className={`mt-3 max-w-xl leading-relaxed ${b.texto ? "text-marrom/80" : "italic text-marrom/50"}`}>{b.texto || "Conteúdo a ser informado pela clínica."}</p>
            </section>
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
}
