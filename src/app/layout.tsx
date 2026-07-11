import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ciment-dam.com'),
  title: {
    default: 'Ciment Maroc — CPJ 45 & CPJ 55 | Dakhla Aménagement',
    template: '%s | Dakhla Aménagement — Ciment Maroc',
  },
  applicationName: 'Dakhla Aménagement S.A.',
  authors: [{ name: 'Dakhla Aménagement S.A.' }],
  creator: 'Dakhla Aménagement S.A.',
  publisher: 'Dakhla Aménagement S.A.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
