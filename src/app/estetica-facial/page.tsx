import PageHero from "@/components/PageHero";
import TreatmentSection from "@/components/TreatmentSection";
import CTA from "@/components/CTA";
import { facial } from "@/config/treatments";

export const metadata = { title: "Estética Facial", description: "Limpeza de pele, toxina botulínica, preenchimento, peeling, microagulhamento, bioestimuladores e harmonização facial." };

export default function Page() {
  return (<><PageHero title="Estética Facial" text="Cuidados individualizados para a pele e para o equilíbrio dos traços naturais do rosto." /><TreatmentSection items={facial} /><CTA /></>);
}
