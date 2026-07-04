"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloatButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={siteConfig.whatsapp.href()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Wasiliana kupitia WhatsApp"
      initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { delay: 0.8, type: "spring", stiffness: 260, damping: 18 }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <WhatsappLogo weight="fill" className="h-8 w-8" aria-hidden="true" />
    </motion.a>
  );
}
