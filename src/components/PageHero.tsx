import Reveal from "./Reveal";

/** Topo padrão das páginas internas. */
export default function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-gradient-to-b from-nude/70 to-offwhite pb-20 pt-44">
      <div className="wrap"><Reveal className="max-w-3xl">
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-marrom/80">{text}</p>
      </Reveal></div>
    </section>
  );
}
