import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  productSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ArrowRight, Truck, Package, Container } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  if (loc === 'en') {
    return buildMetadata({
      locale: 'en',
      path: '/prix-ciment',
      title: 'Cement Prices Morocco 2026 — CPJ 35/45/55 | SDAD',
      description:
        'Cement prices in Morocco: CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Bulk, 50kg bags, big bag pricing. Free quote for Southern Morocco delivery. DAM cement.',
      keywords: [...KEYWORDS.pricing, 'cement price Morocco', 'CPJ 45 price', 'CPJ 55 price'],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/prix-ciment',
    title: 'Prix Ciment Maroc 2026 — CPJ 35/45/55 | SDAD',
    description:
      'Prix du ciment au Maroc : CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Tarifs vrac, sacs 50kg, big bag. Devis gratuit pour livraison Sud Maroc. Ciment DAM.',
    keywords: [...KEYWORDS.pricing, 'prix ciment Maroc 2026', 'tarif ciment', 'ciment pas cher'],
  });
}

const faqItems = [
  {
    question: 'Quel est le prix du ciment CPJ 45 au Maroc ?',
    answer: 'Le ciment CPJ 45 de Dakhla Aménagement est disponible à partir de 1 500 DH la tonne. Le prix varie selon la quantité commandée, le conditionnement (vrac, sacs 50kg, big bag) et la zone de livraison. Demandez un devis gratuit pour un tarif précis.',
  },
  {
    question: 'Quel est le prix du ciment CPJ 55 au Maroc ?',
    answer: 'Le ciment CPJ 55 de Dakhla Aménagement est disponible à partir de 1 600 DH la tonne. Ce prix reflète la résistance supérieure (55 MPa) adaptée aux grands ouvrages de génie civil. Le conditionnement et la livraison influencent le prix final.',
  },
  {
    question: 'Le prix du ciment inclut-il la livraison ?',
    answer: 'Le prix de base (1 500-1 600 DH/T) correspond au ciment départ usine. La livraison est calculée selon la zone (Dakhla, Laâyoune, Mauritanie...) et le volume. Un devis personnalisé vous donnera le prix total livré chantier.',
  },
  {
    question: 'Y a-t-il des remises pour les grosses quantités ?',
    answer: 'Oui, Dakhla Aménagement propose des tarifs dégressifs selon le volume commandé. Pour les commandes en vrac de plus de 30 tonnes ou les achats récurrents, contactez notre équipe commerciale au +212 658-265685 pour un tarif négocié.',
  },
  {
    question: 'Comment payer le ciment au Maroc ?',
    answer: 'Dakhla Aménagement accepte les paiements par virement bancaire, chèque et espèces. Pour les entreprises, des conditions de paiement peuvent être négociées. Les détails vous seront communiqués lors du devis.',
  },
];

export default async function PrixCimentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const isFr = loc === 'fr';

  const schemas = [
    webPageSchema({
      name: isFr ? 'Prix Ciment Maroc 2026 — CPJ 35/45/55 | SDAD' : 'Cement Prices Morocco 2026',
      description: isFr
        ? 'Prix du ciment CPJ 45 et CPJ 55 au Maroc. Tarifs vrac, sacs, big bag.'
        : 'CPJ 45 and CPJ 55 cement prices in Morocco. Bulk, bags, big bag rates.',
      path: '/prix-ciment',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Prix Ciment' : 'Cement Prices', path: '/prix-ciment' }], loc),
    productSchema({
      name: 'Ciment CPJ 45 — Prix Maroc',
      description: 'Ciment Portland Composé 45 MPa. Prix dès 1 500 DH/T. Conforme NM 10.1.004.',
      sku: 'DAM-CPJ45',
      price: '1500',
      path: '/prix-ciment',
      locale: loc,
      image: '/images/products/cpj45-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 87,
    }),
    productSchema({
      name: 'Ciment CPJ 55 — Prix Maroc',
      description: 'Ciment Portland Composé 55 MPa. Prix dès 1 600 DH/T. Conforme NM 10.1.004.',
      sku: 'DAM-CPJ55',
      price: '1600',
      path: '/prix-ciment',
      locale: loc,
      image: '/images/products/cpj55-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 64,
    }),
    faqSchema(faqItems),
  ];

  const pricingTable = isFr
    ? [
        { type: 'CPJ 45', packaging: 'Vrac (camion-citerne)', price: '1 500 DH/T', note: 'Min. 30T' },
        { type: 'CPJ 45', packaging: 'Sacs 50kg', price: '1 550 DH/T', note: 'Palette 1T' },
        { type: 'CPJ 45', packaging: 'Big Bag 1T', price: '1 580 DH/T', note: 'Manutention facile' },
        { type: 'CPJ 55', packaging: 'Vrac (camion-citerne)', price: '1 600 DH/T', note: 'Min. 30T' },
        { type: 'CPJ 55', packaging: 'Sacs 50kg', price: '1 650 DH/T', note: 'Palette 1T' },
        { type: 'CPJ 55', packaging: 'Big Bag 1T', price: '1 680 DH/T', note: 'Manutention facile' },
      ]
    : [
        { type: 'CPJ 45', packaging: 'Bulk (tanker truck)', price: '1,500 DH/T', note: 'Min. 30T' },
        { type: 'CPJ 45', packaging: '50kg bags', price: '1,550 DH/T', note: '1T pallet' },
        { type: 'CPJ 45', packaging: 'Big Bag 1T', price: '1,580 DH/T', note: 'Easy handling' },
        { type: 'CPJ 55', packaging: 'Bulk (tanker truck)', price: '1,600 DH/T', note: 'Min. 30T' },
        { type: 'CPJ 55', packaging: '50kg bags', price: '1,650 DH/T', note: '1T pallet' },
        { type: 'CPJ 55', packaging: 'Big Bag 1T', price: '1,680 DH/T', note: 'Easy handling' },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Prix Ciment' : 'Cement Prices', path: '/prix-ciment' }]} locale={locale} />

      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'Tarifs 2026' : '2026 Rates'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? 'Prix du ciment au Maroc' : 'Cement prices in Morocco'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? 'CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Tarifs transparents par conditionnement : vrac, sacs 50kg, big bag. Devis gratuit et personnalisé.'
              : 'CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Transparent pricing by packaging: bulk, 50kg bags, big bag. Free custom quote.'}
          </p>
          <Link
            href={`/${locale}/devis`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
          >
            {isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Tableau des prix' : 'Price table'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Type de ciment' : 'Cement type'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Conditionnement' : 'Packaging'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Prix (dès)' : 'Price (from)'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Note' : 'Note'}</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">{row.type}</td>
                    <td className="py-4 px-4 text-[#6B7280]">{row.packaging}</td>
                    <td className="py-4 px-4 font-bold text-[#C1272D]">{row.price}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#6B7280] mt-6 max-w-2xl mx-auto">
            {isFr
              ? '* Prix départ usine Dakhla. La livraison est calculée selon la zone. Tarifs dégressifs selon le volume. Devis personnalisé sur demande.'
              : '* Ex-works Dakhla prices. Delivery calculated by zone. Volume discounts available. Custom quote on request.'}
          </p>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? 'Conditionnements disponibles' : 'Available packaging'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Truck, title: isFr ? 'Vrac' : 'Bulk', desc: isFr ? 'Camion-citerne avec pompage direct en silo. Idéal pour les gros chantiers (min. 30T).' : 'Tanker truck with direct silo pumping. Ideal for large sites (min. 30T).' },
              { icon: Package, title: isFr ? 'Sacs 50kg' : '50kg bags', desc: isFr ? 'Conditionnement classique pour la maçonnerie et petits chantiers. Palettes de 1T.' : 'Standard packaging for masonry and small sites. 1T pallets.' },
              { icon: Container, title: 'Big Bag 1T', desc: isFr ? 'Manutention facile par grue ou chariot. Parfait pour les chantiers moyens sans silo.' : 'Easy handling by crane or forklift. Perfect for medium sites without silo.' },
            ].map((opt, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                  <opt.icon className="w-7 h-7 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{opt.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions sur les prix' : 'Pricing questions'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                <summary className="font-semibold text-[#1B3A5C] cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-[#E8B84B] group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B3A5C]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isFr ? 'Obtenez votre prix personnalisé' : 'Get your personalized price'}
          </h2>
          <p className="text-white/70 mb-8">
            {isFr ? 'Devis gratuit sous 24h. Tarifs dégressifs selon le volume.' : 'Free quote within 24h. Volume discounts available.'}
          </p>
          <Link
            href={`/${locale}/devis`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
          >
            {isFr ? 'Demander un devis' : 'Request a quote'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <RelatedArticles
        articleSlugs={['cpj45-vs-cpj55-guide', 'big-bag-vs-sacs', 'calculer-quantite-ciment']}
        locale={locale}
      />
    </>
  );
}
