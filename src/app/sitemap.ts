import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Novas páginas? Acrescente o caminho na lista.
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/a-clinica", "/estetica-facial", "/estetica-corporal", "/contato", "/politica-de-privacidade"].map((p) => ({ url: site.url + p, lastModified: new Date() }));
}
