import Reveal from "./Reveal";
import Media from "./Media";
import { wa } from "@/config/site";
import type { Treatment } from "@/config/treatments";

const rotulos: Record<string, string> = { beneficios: "Benefícios", indicacoes: "Indicações", como: "Como funciona", cuidados: "Cuidados e contraindicações" };

/** Lista alternada (foto à esquerda/direita) de tratamentos. Dados vêm de config/treatments.ts. */
export default function TreatmentSection({ items }: { items: Treatment[] }) {
  return (
    <div className="wrap space-y-28 pb-28">
      {items.map((t, i) => (
        <Reveal key={t.slug}>
          <article id={t.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
            <div className={i % 2 ? "md:order-2" : ""}>
              <Media src={t.img} label={t.nome} className="mx-auto aspect-[4/5] w-full max-w-md" />
            </div>
            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.nome}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-marrom/80">{t.desc}</p>
              {/* "Saiba mais" abre sem JavaScript; mostra só o que estiver preenchido em `detalhes` */}
              <details className="mt-6 max-w-md border-t border-champagne pt-4 text-sm text-marrom/80">
                <summary className="link-u cursor-pointer text-preto">Saiba mais</summary>
                <div className="mt-4 space-y-3">
                  {t.detalhes ? Object.entries(t.detalhes).map(([k, v]) => <p key={k}><strong className="font-medium text-preto">{rotulos[k]}: </strong>{v}</p>)
                    : <p>Indicações, número de sessões e cuidados são definidos na avaliação individual com o profissional responsável. Os resultados variam de pessoa para pessoa.</p>}
                </div>
              </details>
              <a href={wa(`Olá! Gostaria de agendar uma avaliação para: ${t.nome}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-8">Agendar avaliação</a>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
