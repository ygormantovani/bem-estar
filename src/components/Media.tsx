"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Moldura em arco — assinatura visual do site, com parallax sutil.
 * Com `src` mostra a foto (next/image); sem `src`, mostra um degradê da paleta (nunca fica vazio).
 * Para mudar o formato, troque `rounded-t-[999px]` (arco) por `rounded-3xl`, por exemplo.
 */
export default function Media({ src, alt = "", label = "Foto ilustrativa", className = "" }: { src?: string; alt?: string; label?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]); // intensidade do parallax
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-t-[999px] bg-gradient-to-b from-champagne to-nude ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-6%]">
        {src ? (
          <Image src={src} alt={alt || label} fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
        ) : (
          <div className="grid h-full place-items-center px-6 text-center font-serif text-lg italic text-marrom/60">{label}</div>
        )}
      </motion.div>
    </div>
  );
}
