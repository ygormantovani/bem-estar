# Bem Estar — site da clínica (Next.js 14 + Tailwind + Motion)

## Rodar
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Onde editar
- `src/config/site.ts` — WhatsApp, telefone, Instagram, endereço, horário, domínio e caminhos das fotos (tudo PROVISÓRIO).
- `src/config/treatments.ts` — procedimentos (texto, foto e detalhes de cada um).
- `tailwind.config.ts` — paleta e fontes. `src/app/globals.css` — botões e links.
- `src/app/*/page.tsx` — páginas. `src/components` — Header, Footer, Media (moldura em arco), etc.
- Fotos: coloque em `public/images` e informe o caminho (ex.: `/images/hero.jpg`) em `site.imagens`.

## Publicar (Vercel)
Suba o projeto ao GitHub, importe em vercel.com e atualize `site.url` com o domínio final.
