import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  Libre_Baskerville,
  Scheherazade_New,
} from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
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
      <body className="min-h-full flex flex-col font-body antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
