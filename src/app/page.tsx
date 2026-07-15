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
import { organizationSchema, websiteSchema, localBusinessSchema, siteNavigationSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://ciment-dam.com'),
    title: 'Ciment Maroc — CPJ 35/45/55, Prix & Devis | SDAD',
    description:
      'Ciment CPJ 35, 45, 55 au Maroc. Prix dès 70 DH/sac. Centre de broyage Dakhla. Livraison vrac, sacs, big bag. SDAD — devis gratuit sous 24h.',
    alternates: {
      canonical: 'https://ciment-dam.com/',
      languages: {
        fr: 'https://ciment-dam.com/fr',
        en: 'https://ciment-dam.com/en',
        'x-default': 'https://ciment-dam.com/',
      },
    },
    openGraph: {
      title: 'Ciment Maroc — CPJ 35/45/55, Prix & Devis | SDAD',
      description: 'Ciment CPJ 35, 45, 55 au Maroc. Prix dès 70 DH/sac. Centre de broyage Dakhla. SDAD — devis gratuit.',
      url: 'https://ciment-dam.com/',
      siteName: 'Dakhla Aménagement et Développement',
      locale: 'fr_MA',
      type: 'website',
      images: [{ url: 'https://ciment-dam.com/images/og-banner.jpg', width: 1200, height: 630, alt: 'Ciment Maroc — SDAD' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SDAD_Dakhla',
      creator: '@SDAD_Dakhla',
      title: 'Ciment Maroc — CPJ 35/45/55, Prix & Devis | SDAD',
      description: 'Ciment CPJ 35, 45, 55 au Maroc. Prix dès 70 DH/sac. SDAD — devis gratuit.',
      images: ['https://ciment-dam.com/images/og-banner.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    other: {
      'geo.region': 'MA-ODD',
      'geo.placename': 'Dakhla',
      'geo.position': '23.6847;-15.958',
      ICBM: '23.6847, -15.958',
    },
  };
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
