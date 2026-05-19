import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dakhla Aménagement | Ciment de Qualité au Maroc",
  description: "Dakhla Aménagement SA — Centre de broyage de clinker. Production, conditionnement et commercialisation de ciment de qualité supérieure à Dakhla, Maroc. CPJ 42.5, CPJ 32.5.",
  metadataBase: new URL('https://www.ciment-dam.com'),
  keywords: [
    "ciment",
    "Dakhla",
    "Maroc",
    "cimenterie",
    "broyage clinker",
    "CPJ 42.5",
    "CPJ 32.5",
    "Dakhla Aménagement",
    "matériaux construction",
    "ciment Maroc",
  ],
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Dakhla Aménagement | Ciment de Qualité au Maroc",
    description: "Centre de broyage de clinker — Production, conditionnement et commercialisation de ciment de qualité supérieure à Dakhla, Maroc.",
    url: "https://www.ciment-dam.com",
    siteName: "Dakhla Aménagement S.A.",
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
