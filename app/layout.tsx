import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  Libre_Baskerville,
  Scheherazade_New,
} from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SkipLink } from "@/components/skip-link";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const scheherazade = Scheherazade_New({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Chuo cha bweni na kutwa cha hifadhi ya Qur'an — Nzuguni, Dodoma. Hifadhi Qur'an kirahisi.",
  keywords: [
    "Al Qasimia",
    "Tahfidh",
    "Qur'an",
    "Dodoma",
    "Tanzania",
    "bweni",
    "hifdh",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sw"
      suppressHydrationWarning
      className={`${libreBaskerville.variable} ${scheherazade.variable} ${ibmPlexSans.variable} h-full`}
    >
      <body className="min-h-dvh flex flex-col font-body antialiased touch-manipulation">
        <ThemeProvider>
          <SkipLink />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 pb-24 outline-none">
            {children}
          </main>
          <Footer />
          <WhatsAppFloatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
