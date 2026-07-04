import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mawasiliano",
};

export default function MawasilianoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
