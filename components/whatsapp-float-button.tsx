"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloatButton() {
  return (
    <motion.a
      href={siteConfig.whatsapp.href()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Wasiliana kupitia WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
    >
      <WhatsappLogo weight="fill" className="h-8 w-8" />
    </motion.a>
  );
}
