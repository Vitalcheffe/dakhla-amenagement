import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ciment-dam.com'),
  title: {
    default: 'Ciment Maroc — CPJ 45 & CPJ 55 | Dakhla Aménagement et Développement | SDAD',
    template: '%s | Dakhla Aménagement et Développement — Ciment Maroc',
  },
  applicationName: 'Dakhla Aménagement et Développement',
  authors: [{ name: 'Dakhla Aménagement et Développement' }],
  creator: 'Dakhla Aménagement et Développement',
  publisher: 'Dakhla Aménagement et Développement',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
