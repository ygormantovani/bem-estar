import Link from "next/link";
import { site, wa } from "@/config/site";
import { facial, corporal } from "@/config/treatments";

export default function Footer() {
  const h = "font-serif text-xl text-offwhite";
  return (
    <footer className="bg-preto text-sm text-offwhite/70">
      <div className="wrap grid gap-10 py-16 md:grid-cols-4">
        <div><p className="font-serif text-3xl text-offwhite">Bem Estar</p><p className="mt-4 max-w-xs">{site.descricao}</p></div>
        <div><p className={h}>Links rápidos</p><ul className="mt-4 space-y-2">
          {[["A Clínica", "/a-clinica"], ["Contato", "/contato"], ["Política de privacidade", "/politica-de-privacidade"]].map(([t, l]) => <li key={l}><Link href={l} className="link-u">{t}</Link></li>)}
        </ul></div>
        <div><p className={h}>Tratamentos</p><ul className="mt-4 space-y-2">
          <li><Link href="/estetica-facial" className="link-u">Estética Facial ({facial.length})</Link></li>
          <li><Link href="/estetica-corporal" className="link-u">Estética Corporal ({corporal.length})</Link></li>
        </ul></div>
        <div><p className={h}>Contato</p><ul className="mt-4 space-y-2">
          <li><a href={wa("Olá!")} target="_blank" rel="noopener noreferrer" className="link-u">WhatsApp</a></li>
          <li><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="link-u">Instagram @{site.instagram}</a></li>
          <li>{site.endereco || "Endereço a definir"}</li>
          <li>{site.horario}</li>
        </ul></div>
      </div>
      <p className="border-t border-offwhite/10 py-6 text-center text-xs">© {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.</p>
    </footer>
  );
}
