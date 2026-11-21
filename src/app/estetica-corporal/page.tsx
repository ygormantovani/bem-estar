import PageHero from "@/components/PageHero";
import TreatmentSection from "@/components/TreatmentSection";
import CTA from "@/components/CTA";
import { corporal } from "@/config/treatments";

export const metadata = { title: "Estética Corporal", description: "Drenagem linfática, criolipólise, radiofrequência e protocolos para celulite e gordura localizada." };

export default function Page() {
  return (<><PageHero title="Estética Corporal" text="Técnicas e tecnologias para o contorno, a circulação e a qualidade da pele do corpo." /><TreatmentSection items={corporal} /><CTA /></>);
}
