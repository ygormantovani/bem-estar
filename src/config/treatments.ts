/**
 * TRATAMENTOS. Para detalhar um procedimento, preencha `detalhes` (aparece em "Saiba mais")
 * e `img` (foto em /public/images). O conteúdo de saúde deve vir do profissional responsável.
 */
export type Treatment = {
  slug: string; nome: string; desc: string; img?: string;
  detalhes?: Partial<Record<"beneficios" | "indicacoes" | "como" | "cuidados", string>>;
};

export const facial: Treatment[] = [
  { slug: "limpeza-de-pele", nome: "Limpeza de pele profunda", desc: "Remove impurezas, cravos, miliuns e células mortas, promovendo a renovação e melhorando o aspecto da pele." },
  { slug: "toxina-botulinica", nome: "Toxina botulínica (Botox)", desc: "Suaviza rugas e linhas de expressão por meio do relaxamento temporário dos músculos responsáveis por determinadas expressões faciais." },
  { slug: "preenchimento", nome: "Preenchimento com ácido hialurônico", desc: "Auxilia na restauração de volume e na definição de contornos faciais, podendo ser utilizado em regiões como lábios, olheiras e sulcos nasolabiais, conforme avaliação profissional." },
  { slug: "peeling-quimico", nome: "Peeling químico", desc: "Utiliza substâncias específicas para promover a renovação da pele, auxiliando na melhora de manchas, textura, cicatrizes de acne e linhas finas." },
  { slug: "microagulhamento", nome: "Microagulhamento", desc: "Estimula os processos naturais de renovação da pele e produção de colágeno, auxiliando na melhora da textura e de cicatrizes." },
  { slug: "bioestimuladores", nome: "Bioestimuladores de colágeno e Skinbooster", desc: "Tratamentos destinados a estimular a produção de colágeno ou melhorar a hidratação e qualidade da pele, conforme a indicação de cada técnica." },
  { slug: "harmonizacao-facial", nome: "Harmonização facial", desc: "Combina técnicas estéticas individualizadas para buscar equilíbrio, proporção e valorização dos traços naturais do rosto." },
];

export const corporal: Treatment[] = [
  { slug: "drenagem-linfatica", nome: "Drenagem linfática e massagem modeladora", desc: "Técnicas manuais que auxiliam na circulação, no manejo da retenção de líquidos e na melhora da sensação de inchaço e contorno corporal." },
  { slug: "criolipolise", nome: "Criolipólise", desc: "Procedimento que utiliza resfriamento controlado para atuar sobre células de gordura localizada, conforme indicação e avaliação profissional." },
  { slug: "radiofrequencia", nome: "Radiofrequência e Criofrequência", desc: "Tecnologias que utilizam energia para promover aquecimento controlado dos tecidos, estimulando processos relacionados à produção de colágeno e à qualidade da pele." },
  { slug: "celulite-gordura", nome: "Tratamentos para celulite e gordura localizada", desc: "Protocolos individualizados que podem combinar tecnologias e técnicas estéticas para melhorar o aspecto da pele e tratar alterações do contorno corporal." },
];
