import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ciment DAM | Dakhla Aménagement — Ciment de Qualité au Sud Marocain",
  description: "Cimenterie Dakhla, Broyage Ciment Sud Maroc, Dakhla Aménagement, Ciment B2B. Centre de broyage de clinker — Production, conditionnement et commercialisation de matériaux de construction de qualité supérieure à Dakhla, Maroc.",
  keywords: [
    "ciment",
    "Dakhla",
    "Maroc",
    "broyage clinker",
    "matériaux construction",
    "CPJ",
    "CPA",
    "DAM ECOShield",
    "ciment vert",
    "Ciment DAM",
    "Dakhla Aménagement",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
