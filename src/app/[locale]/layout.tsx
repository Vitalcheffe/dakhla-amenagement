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
import { buildMetadata, SITE } from '@/lib/seo';
import { organizationSchema, websiteSchema, localBusinessSchema, siteNavigationSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { BackToTop } from '@/components/shared/BackToTop';

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
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  return buildMetadata({
    locale: loc,
    path: '',
    title:
      loc === 'fr'
        ? 'Ciment Maroc — CPJ 35/45/55, Prix & Devis | SDAD'
        : 'Cement Morocco — CPJ 35/45/55, Prices & Quote | SDAD',
    description:
      loc === 'fr'
        ? 'Ciment CPJ 35, 45, 55 au Maroc. Prix dès 70 DH/sac. Centre de broyage Dakhla. Livraison vrac, sacs, big bag. SDAD — devis gratuit.'
        : 'Dakhla Aménagement et Développement — CPJ 45 and CPJ 55 cement producer in Morocco. Clinker grinding plant in Dakhla. Bulk, 50kg bags, big bag delivery. Free quote.',
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

  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const messages = await getMessages();

  // SiteNavigationElement schema — helps Google understand site structure
  const navItems = [
    { name: loc === 'fr' ? 'Accueil' : 'Home', url: `${SITE.url}/${loc}` },
    { name: loc === 'fr' ? 'Produits' : 'Products', url: `${SITE.url}/${loc}/produits` },
    { name: 'CPJ 45', url: `${SITE.url}/${loc}/cpj-45` },
    { name: 'CPJ 55', url: `${SITE.url}/${loc}/cpj-55` },
    { name: loc === 'fr' ? 'Ciment Maroc' : 'Cement Morocco', url: `${SITE.url}/${loc}/ciment-maroc` },
    { name: loc === 'fr' ? 'Prix Ciment' : 'Cement Prices', url: `${SITE.url}/${loc}/prix-ciment` },
    { name: loc === 'fr' ? 'Livraison' : 'Delivery', url: `${SITE.url}/${loc}/livraison-ciment` },
    { name: loc === 'fr' ? 'Lexique' : 'Glossary', url: `${SITE.url}/${loc}/lexique-ciment` },
    { name: loc === 'fr' ? 'Ciment Dakhla' : 'Cement Dakhla', url: `${SITE.url}/${loc}/ciment-dakhla` },
    { name: loc === 'fr' ? 'Processus' : 'Process', url: `${SITE.url}/${loc}/processus` },
    { name: loc === 'fr' ? 'À Propos' : 'About', url: `${SITE.url}/${loc}/a-propos` },
    { name: loc === 'fr' ? 'Réalisations' : 'Projects', url: `${SITE.url}/${loc}/realisations` },
    { name: 'Blog', url: `${SITE.url}/${loc}/blog` },
    { name: 'FAQ', url: `${SITE.url}/${loc}/faq` },
    { name: loc === 'fr' ? 'Témoignages' : 'Testimonials', url: `${SITE.url}/${loc}/temoignages` },
    { name: loc === 'fr' ? 'Contact' : 'Contact', url: `${SITE.url}/${loc}/contact` },
    { name: loc === 'fr' ? 'Devis' : 'Quote', url: `${SITE.url}/${loc}/devis` },
  ];

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#1B3A5C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ciment-dam.com" />
        <link rel="alternate" type="application/rss+xml" title="Blog — Dakhla Aménagement Ciment Maroc" href="/feed.xml" />
        <JsonLdScript
          schema={[
            organizationSchema(),
            websiteSchema(loc),
            localBusinessSchema(),
            siteNavigationSchema(navItems),
          ]}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A2E] font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
