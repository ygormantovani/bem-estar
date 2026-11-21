import Reveal from "./Reveal";
import { wa } from "@/config/site";

/** Chamada final para agendamento — reutilizável em qualquer página. */
export default function CTA() {
  return (
    <section className="wrap pb-24">
      <Reveal className="rounded-t-[999px] rounded-b-3xl bg-marrom px-8 pb-16 pt-28 text-center text-offwhite">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight md:text-5xl">Seu momento de cuidar de você começa aqui.</h2>
        <a href={wa("Olá! Gostaria de agendar minha avaliação.")} target="_blank" rel="noopener noreferrer" className="btn mt-10 bg-dourado text-preto hover:bg-champagne">Agende sua avaliação</a>
      </Reveal>
    </section>
  );
}
