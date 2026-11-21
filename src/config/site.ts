/**
 * ARQUIVO CENTRAL DE CONFIGURAÇÃO.
 * Tudo marcado como PROVISÓRIO deve ser trocado pelos dados reais da clínica.
 * Quando `endereco` for preenchido, o mapa (Contato) e o SEO local são ativados.
 */
export const site = {
  nome: "Bem Estar",
  descricao: "Clínica de estética facial e corporal. Beleza, autoestima e bem-estar em perfeita harmonia.",
  url: "https://www.exemplo.com.br", // PROVISÓRIO: domínio final
  whatsapp: "5500000000000", // PROVISÓRIO: DDI + DDD + número, só dígitos
  telefone: "(00) 0000-0000", // PROVISÓRIO
  instagram: "bemestar", // PROVISÓRIO: usuário sem @
  endereco: "", // PROVISÓRIO: ex.: "Rua X, 123 - Bairro, Cidade - UF"
  horario: "Horários a definir", // PROVISÓRIO
  // Caminhos das fotos (coloque os arquivos em /public/images). Vazio = moldura elegante sem foto.
  imagens: { hero: "", facial: "", corporal: "", experiencia: "" },
};

/** Gera o link do WhatsApp já com mensagem preenchida. */
export const wa = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
