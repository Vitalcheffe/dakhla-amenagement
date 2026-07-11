import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { CookieConsent } from '@/components/shared/CookieConsent';
import { buildMetadata } from '@/lib/seo';
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  return buildMetadata({
    locale: loc,
    path: '',
    title:
      loc === 'fr'
        ? 'Ciment Maroc — CPJ 45 & CPJ 55 | Dakhla Aménagement | Livraison Sud Maroc'
        : 'Cement Morocco — CPJ 45 & CPJ 55 | Dakhla Aménagement',
    description:
      loc === 'fr'
        ? 'Dakhla Aménagement S.A. — Producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla. Livraison vrac, sacs 50kg, big bag. Prix ciment Maroc, devis gratuit.'
        : 'Dakhla Aménagement S.A. — CPJ 45 and CPJ 55 cement producer in Morocco. Clinker grinding plant in Dakhla. Bulk, 50kg bags, big bag delivery. Free quote.',
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#1B3A5C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.ciment-dam.com" />
        <link rel="alternate" type="application/rss+xml" title="Blog — Dakhla Aménagement Ciment Maroc" href="/feed.xml" />
        <JsonLdScript
          schema={[
            organizationSchema(),
            websiteSchema(loc),
            localBusinessSchema(),
          ]}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A2E] font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <CookieConsent />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
