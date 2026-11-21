import { MessageCircle } from "lucide-react";
import { wa } from "@/config/site";

/** Botão flutuante presente em todas as páginas (montado no layout). */
export default function WhatsAppButton() {
  return (
    <a href={wa("Olá! Vim pelo site e gostaria de mais informações.")} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-preto text-offwhite shadow-lg transition duration-500 hover:scale-110 hover:bg-dourado">
      <MessageCircle />
    </a>
  );
}
