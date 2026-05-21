import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ciment Maroc — Dakhla Aménagement | CPJ 45 & CPJ 55 | Livraison Sud Maroc",
  description: "Dakhla Aménagement S.A. — Producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla. Livraison vrac, sacs 50kg, big bag. Prix ciment Maroc, devis gratuit.",
  metadataBase: new URL('https://www.ciment-dam.com'),
  keywords: [
    "ciment Maroc",
    "ciment",
    "prix ciment Maroc",
    "CPJ 45 Maroc",
    "CPJ 55 Maroc",
    "cimenterie Maroc",
    "broyage clinker Maroc",
    "ciment Dakhla",
    "Dakhla Aménagement",
    "achat ciment Maroc",
    "ciment vrac Maroc",
    "ciment sacs 50kg",
    "matériaux construction Maroc",
    "béton Maroc",
    "fournisseur ciment Maroc",
    "centre de broyage Maroc",
  ],
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Ciment Maroc — Dakhla Aménagement | CPJ 45 & CPJ 55 | Livraison Sud Maroc",
    description: "Dakhla Aménagement S.A. — Producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla. Livraison vrac, sacs 50kg, big bag. Devis gratuit.",
    url: "https://www.ciment-dam.com",
    siteName: "Ciment DAM — Dakhla Aménagement",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1344,
        height: 768,
        alt: "Ciment DAM — Dakhla Aménagement S.A. | Usine de ciment à Dakhla, Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciment Maroc — Dakhla Aménagement | CPJ 45 & CPJ 55",
    description: "Producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage à Dakhla. Livraison vrac, sacs, big bag. Devis gratuit.",
    images: ["/images/og-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
