import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { CookieConsent } from '@/components/shared/CookieConsent';
import { BackToTop } from '@/components/shared/BackToTop';
import { buildMetadata } from '@/lib/seo';
import { organizationSchema, websiteSchema, localBusinessSchema, siteNavigationSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    locale: 'fr',
    path: '',
    title: 'Ciment Maroc — CPJ 45 & CPJ 55 | Dakhla Aménagement et Développement | SDAD',
    description:
      'Ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla. Livraison vrac, sacs 50kg, big bag. Prix dès 1 500 DH/T. SDAD — devis gratuit.',
  });
}

/**
 * Root page — serves FR content directly at /
 * No redirect — this prevents Google from seeing / and /fr as duplicate pages.
 * Google indexes / as the canonical URL with FR content.
 */
export default async function RootPage() {
  const locale = 'fr';
  const messages = await getMessages({ locale });

  // Import the home page client component
  const HomePageClient = (await import('./[locale]/HomePageClient')).default;

  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#1B3A5C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ciment-dam.com" />
        <link rel="alternate" type="application/rss+xml" title="Blog — Dakhla Aménagement Ciment Maroc" href="/feed.xml" />
        <JsonLdScript
          schema={[
            organizationSchema(),
            websiteSchema('fr'),
            localBusinessSchema(),
            siteNavigationSchema([]),
          ]}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A2E] font-sans">
        <NextIntlClientProvider messages={messages} locale="fr">
          <Header locale={locale} />
          <main className="flex-1">
            <HomePageClient />
          </main>
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
