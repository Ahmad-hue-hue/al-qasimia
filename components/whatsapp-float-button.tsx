import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloatButton() {
  return (
    <a
      href={siteConfig.whatsapp.href()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Wasiliana kupitia WhatsApp"
      className="whatsapp-float fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <WhatsappLogo weight="fill" className="h-8 w-8" aria-hidden="true" />
    </a>
  );
}
