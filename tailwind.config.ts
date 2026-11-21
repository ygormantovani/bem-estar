import type { Config } from "tailwindcss";

// PALETA DA MARCA — altere aqui e o site inteiro muda.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        champagne: "#D8C3A5",
        nude: "#E8D8CB",
        offwhite: "#F9F7F3",
        bege: "#C6AE96",
        marrom: "#594638",
        dourado: "#B69A70", // usar com moderação
        preto: "#292522",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
