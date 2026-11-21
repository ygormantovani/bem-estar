"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { wa } from "@/config/site";

// ITENS DO MENU — edite aqui.
const links = [
  ["Início", "/"], ["A Clínica", "/a-clinica"], ["Tratamentos", "/#tratamentos"],
  ["Estética Facial", "/estetica-facial"], ["Estética Corporal", "/estetica-corporal"], ["Contato", "/contato"],
];

/** Transparente no topo; ganha fundo translúcido ao rolar. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled || open ? "bg-offwhite/90 py-3 shadow-[0_1px_0_#D8C3A5] backdrop-blur" : "py-6"}`}>
      <div className="wrap flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="font-serif text-3xl tracking-wide">Bem Estar</Link>
        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {links.map(([t, h]) => <Link key={h} href={h} className="link-u">{t}</Link>)}
          <a href={wa("Olá! Gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Agende sua avaliação</a>
        </nav>
        <button className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {/* Menu mobile: abre em tela cheia */}
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100dvh" }} exit={{ opacity: 0, height: 0 }}
            className="flex flex-col items-center gap-7 overflow-hidden pt-16 font-serif text-3xl lg:hidden">
            {links.map(([t, h]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{t}</Link>)}
            <a href={wa("Olá! Gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" className="btn btn-dark font-sans">Agende sua avaliação</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
