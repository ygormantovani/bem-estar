import Link from "next/link";
import { Sparkles, UserRound, Cpu, Armchair, ShieldCheck, Leaf, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import CTA from "@/components/CTA";
import { site, wa } from "@/config/site";

const diferenciais = [
  [UserRound, "Atendimento personalizado"], [Sparkles, "Avaliação individualizada"], [Cpu, "Tecnologia e inovação"],
  [Armchair, "Ambiente acolhedor"], [ShieldCheck, "Compromisso com qualidade"], [Leaf, "Cuidado com a beleza natural"],
] as const;

const categorias = [
  { href: "/estetica-facial", titulo: "Estética Facial", img: site.imagens.facial, texto: "Cuidados delicados para a pele e para a valorização dos traços naturais do rosto." },
  { href: "/estetica-corporal", titulo: "Estética Corporal", img: site.imagens.corporal, texto: "Técnicas e tecnologias para contorno, circulação e qualidade da pele do corpo." },
];

// DEPOIMENTOS DEMONSTRATIVOS — substitua por avaliações reais (com autorização de quem as escreveu).
const depoimentos = ["Cliente 1", "Cliente 2", "Cliente 3"];

export const metadata = { title: "Clínica de Estética Facial e Corporal", description: site.descricao };

export default function Home() {
  return (
    <>
      {/* HERO — título em duas linhas, a segunda recuada; moldura em arco com parallax */}
      <section className="flex min-h-screen items-center bg-gradient-to-br from-offwhite via-nude/60 to-champagne/50 pt-24">
        <div className="wrap grid items-center gap-12 md:grid-cols-[1.25fr_.75fr]">
          <Reveal>
            <h1 className="font-serif text-6xl leading-[1.02] md:text-8xl">Realce sua beleza.<br /><span className="md:pl-20">Valorize sua essência.</span></h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-marrom/80">Na Bem Estar, unimos tecnologia, cuidado e excelência para proporcionar experiências personalizadas em estética facial e corporal.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/#tratamentos" className="btn btn-dark">Conheça nossos tratamentos</Link>
              <a href={wa("Olá! Gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" className="btn btn-line">Agende sua avaliação</a>
            </div>
          </Reveal>
          <Reveal delay={0.2}><Media src={site.imagens.hero} label="Imagem principal" className="mx-auto aspect-[3/4] w-full max-w-sm" /></Reveal>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="wrap py-28 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl">Seu bem-estar é a nossa essência.</h2>
          <p className="mt-6 leading-relaxed text-marrom/80">Acreditamos que cada pessoa merece um atendimento individualizado, com técnicas modernas, qualidade, tecnologia e atenção aos detalhes — sempre valorizando a beleza natural.</p>
        </Reveal>
      </section>

      {/* CATEGORIAS — cartões inteiros clicáveis */}
      <section id="tratamentos" className="wrap grid scroll-mt-24 gap-14 pb-28 md:grid-cols-2">
        {categorias.map((c, i) => (
          <Reveal key={c.href} delay={i * 0.15}>
            <Link href={c.href} className="group block">
              <Media src={c.img} label={c.titulo} className="aspect-[4/5] w-full transition duration-700 group-hover:scale-[1.02]" />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-4xl">{c.titulo}</h3>
                  <p className="mt-2 max-w-sm text-marrom/80">{c.texto}</p>
                  <span className="link-u mt-4 inline-block text-sm">Conhecer procedimentos</span>
                </div>
                <ArrowUpRight className="shrink-0 transition duration-500 group-hover:-translate-y-1 group-hover:text-dourado" />
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-nude/50 py-24">
        <div className="wrap grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map(([Icon, t]) => (
            <div key={t} className="flex items-center gap-4"><Icon className="shrink-0 text-dourado" strokeWidth={1.25} size={34} /><p className="font-serif text-2xl">{t}</p></div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIA BEM ESTAR */}
      <section className="bg-preto py-28 text-offwhite">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">A experiência Bem Estar</h2>
            <p className="mt-6 max-w-md leading-relaxed text-offwhite/70">Cada atendimento começa com escuta e avaliação individual, em um ambiente acolhedor e com atenção aos detalhes.</p>
          </Reveal>
          <Media src={site.imagens.experiencia} label="Ambiente da clínica" className="aspect-[4/3] w-full !rounded-t-3xl" />
        </div>
      </section>

      {/* DEPOIMENTOS — conteúdo demonstrativo, claramente identificado */}
      <section className="wrap py-28">
        <h2 className="font-serif text-4xl md:text-5xl">O que dizem nossas clientes</h2>
        <p className="mt-3 text-sm text-marrom/60">Exemplos ilustrativos. Serão substituídos por avaliações reais.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {depoimentos.map((a) => (
            <figure key={a} className="border-t border-dourado pt-6">
              <blockquote className="font-serif text-xl italic leading-relaxed text-marrom/70">Depoimento demonstrativo: espaço reservado para a avaliação de uma cliente real.</blockquote>
              <figcaption className="mt-4 text-sm">{a} (exemplo)</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
