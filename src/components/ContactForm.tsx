"use client";
import { useState, FormEvent } from "react";
import { wa } from "@/config/site";
import { facial, corporal } from "@/config/treatments";

const campo = "mt-2 w-full border-b border-bege bg-transparent py-3 outline-none transition focus:border-dourado";
// Sanitização básica: remove < >, espaços repetidos e limita o tamanho.
const limpa = (v: FormDataEntryValue | null, max = 500) => String(v ?? "").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max);

/** Valida e abre o WhatsApp da clínica com a mensagem pronta. Nada é armazenado (LGPD). */
export default function ContactForm() {
  const [erro, setErro] = useState("");
  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // armadilha anti-spam (campo oculto): robôs preenchem, pessoas não
    const nome = limpa(f.get("nome"), 80), tel = limpa(f.get("tel"), 20).replace(/\D/g, "");
    const trat = limpa(f.get("trat"), 80), msg = limpa(f.get("msg"));
    if (nome.length < 2) return setErro("Informe seu nome.");
    if (tel.length < 10 || tel.length > 13) return setErro("Informe um telefone válido, com DDD.");
    setErro("");
    window.open(wa(`Olá! Meu nome é ${nome}. Telefone: ${tel}. Tratamento de interesse: ${trat}.${msg ? ` Mensagem: ${msg}` : ""}`), "_blank", "noopener,noreferrer");
  }
  return (
    <form onSubmit={enviar} className="space-y-7" noValidate>
      <label className="block text-sm">Nome<input name="nome" required autoComplete="name" className={campo} /></label>
      <label className="block text-sm">Telefone com DDD<input name="tel" required inputMode="tel" autoComplete="tel" className={campo} /></label>
      <label className="block text-sm">Tratamento de interesse
        <select name="trat" className={campo}>
          <option>Quero orientação</option>
          {[...facial, ...corporal].map((t) => <option key={t.slug}>{t.nome}</option>)}
        </select>
      </label>
      <label className="block text-sm">Mensagem (opcional)<textarea name="msg" rows={3} className={campo} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className="flex gap-3 text-xs text-marrom/80">
        <input type="checkbox" required className="mt-0.5 accent-dourado" />
        Concordo em enviar estas informações ao WhatsApp da clínica para contato, conforme a política de privacidade.
      </label>
      {erro && <p role="alert" className="text-sm text-red-700">{erro}</p>}
      <button className="btn btn-dark">Continuar no WhatsApp</button>
    </form>
  );
}
