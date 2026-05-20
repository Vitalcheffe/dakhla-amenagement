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
        <link rel="canonical" href={`https://www.ciment-dam.com/${locale}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Dakhla Aménagement S.A.",
                "alternateName": "DAM Ciment Maroc",
                "url": "https://www.ciment-dam.com",
                "description": "Producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla — livraison vrac, sacs 50kg, big bag dans tout le Sud marocain et Mauritanie.",
                "logo": "https://www.ciment-dam.com/images/logo-dam-512.png",
                "telephone": "+212658265685",
                "email": "contact@ciment-dam.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Quartier Lassargua, 1 et 1 angle rue Lagouira, Avenue El Walae",
                  "addressLocality": "Dakhla",
                  "addressRegion": "Dakhla-Oued Ed-Dahab",
                  "postalCode": "73000",
                  "addressCountry": "MA"
                },
                "foundingDate": "2015",
                "industry": "Cement Manufacturing",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "minValue": 35,
                  "maxValue": 400
                },
                "sameAs": [],
                "areaServed": [
                  { "@type": "Place", "name": "Dakhla" },
                  { "@type": "Place", "name": "Sud Maroc" },
                  { "@type": "Country", "name": "Morocco" },
                  { "@type": "Country", "name": "Mauritania" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Ciment CPJ 45 — Dakhla Aménagement",
                "description": "Ciment Portland Composé 45 MPa. Haute résistance pour béton armé, dallages, ouvrages de génie civil. Conforme NM 10.1.004 / EN 197-1.",
                "brand": { "@type": "Brand", "name": "DAM" },
                "manufacturer": { "@type": "Corporation", "name": "Dakhla Aménagement S.A." },
                "category": "Building Materials > Cement",
                "offers": {
                  "@type": "Offer",
                  "price": "1500",
                  "priceCurrency": "MAD",
                  "priceUnit": "T",
                  "availability": "https://schema.org/InStock",
                  "url": "https://www.ciment-dam.com/fr/devis"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Ciment CPJ 55 — Dakhla Aménagement",
                "description": "Ciment Portland Composé 55 MPa. Ultra haute résistance pour grands ouvrages de génie civil et infrastructure. Conforme NM 10.1.004 / EN 197-1.",
                "brand": { "@type": "Brand", "name": "DAM" },
                "manufacturer": { "@type": "Corporation", "name": "Dakhla Aménagement S.A." },
                "category": "Building Materials > Cement",
                "offers": {
                  "@type": "Offer",
                  "price": "1600",
                  "priceCurrency": "MAD",
                  "priceUnit": "T",
                  "availability": "https://schema.org/InStock",
                  "url": "https://www.ciment-dam.com/fr/devis"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Quel est le prix du ciment CPJ 45 au Maroc ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Le ciment CPJ 45 de Dakhla Aménagement est disponible à partir de 1 500 DH la tonne. Le prix varie selon la quantité, le conditionnement (vrac, sacs 50kg, big bag) et la zone de livraison. Demandez un devis gratuit pour un tarif personnalisé."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Où acheter du ciment au Maroc ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dakhla Aménagement produit et livre du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain (Dakhla, région, Sud Maroc) et en Mauritanie. Commandez en ligne via ciment-dam.com ou contactez-nous au +212 658-265685."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quelle différence entre CPJ 45 et CPJ 55 ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Le CPJ 45 offre une résistance de 45 MPa, idéal pour le béton armé courant, les dallages et les fondations. Le CPJ 55 atteint 55 MPa, recommandé pour les grands ouvrages de génie civil, les infrastructures et les environnements agressifs (zone côtière)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Comment commander du ciment en vrac au Maroc ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Contactez Dakhla Aménagement au +212 658-265685 ou via le formulaire de devis sur ciment-dam.com. Nous livrons en vrac par camion-citerne avec pompage direct en silo dans tout le Sud marocain."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quelles normes le ciment DAM respecte-t-il ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Les ciments CPJ 45 et CPJ 55 de Dakhla Aménagement sont conformes à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1. Chaque lot est testé en laboratoire avant expédition."
                    }
                  }
                ]
              }
            ]),
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
