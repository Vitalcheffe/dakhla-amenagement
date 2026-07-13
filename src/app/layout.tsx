import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ciment-dam.com'),
  title: {
    default: 'Ciment Maroc — CPJ 35/45/55, Prix & Devis | SDAD',
    template: '%s | SDAD — Ciment Maroc',
  },
  applicationName: 'Dakhla Aménagement et Développement',
  authors: [{ name: 'Dakhla Aménagement et Développement' }],
  creator: 'Dakhla Aménagement et Développement',
  publisher: 'Dakhla Aménagement et Développement',
  twitter: {
    card: 'summary_large_image',
    site: '@SDAD_Dakhla',
    creator: '@SDAD_Dakhla',
  },
  category: 'Construction & Cement',
  classification: 'Building Materials, Cement, Construction',
  icons: {
    icon: '/images/logo-dam-v2.svg',
    apple: '/images/logo-dam-v2.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
