import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { CookieConsent } from '@/components/shared/CookieConsent';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

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

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#1B3A5C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Dakhla Aménagement S.A.",
              "url": "https://www.ciment-dam.com",
              "description": "Centre de broyage de clinker — Production, conditionnement et commercialisation de ciment de qualité supérieure à Dakhla, Maroc.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Quartier Lassargua, 1 et 1 angle rue Lagouira, Avenue El Walae",
                "addressLocality": "Dakhla",
                "addressCountry": "MA"
              },
              "foundingDate": "2015",
              "industry": "Cement Manufacturing"
            }),
          }}
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
