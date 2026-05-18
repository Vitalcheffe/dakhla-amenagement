import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dakhla Aménagement S.A. | Ciment de Qualité au Sud Marocain",
  description:
    "Centre de broyage de clinker — Production, conditionnement et commercialisation de matériaux de construction de qualité supérieure à Dakhla, Maroc.",
  keywords: [
    "ciment",
    "Dakhla",
    "Maroc",
    "broyage clinker",
    "matériaux construction",
    "CPJ",
    "CPA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
