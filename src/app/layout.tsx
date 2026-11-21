import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/Providers";
import { site } from "@/config/site";

// FONTES (otimizadas pelo Next): serifada nos títulos, sans no texto.
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

// SEO PADRÃO — cada página pode sobrescrever o título (veja `metadata` nas páginas).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.nome} | Clínica de Estética Facial e Corporal`, template: `%s | ${site.nome}` },
  description: site.descricao,
  openGraph: { title: site.nome, description: site.descricao, type: "website", locale: "pt_BR", siteName: site.nome },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org: o endereço (SEO local) só entra quando preenchido em config/site.ts
  const schema = {
    "@context": "https://schema.org", "@type": "HealthAndBeautyBusiness", name: site.nome, url: site.url, description: site.descricao,
    ...(site.endereco && { address: { "@type": "PostalAddress", streetAddress: site.endereco } }),
  };
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
