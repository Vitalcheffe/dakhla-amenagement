import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { ArrowRight, Truck, Clock, Beaker, CheckCircle } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  return buildMetadata({
    locale: loc,
    path: '/beton-pret-emploi',
    title: loc === 'fr'
      ? 'Béton Prêt à l\'Emploi Dakhla — Livraison Toupie | SDAD'
      : 'Ready-Mix Concrete Dakhla — Mixer Truck Delivery | SDAD',
    description: loc === 'fr'
      ? "Béton prêt à l'emploi à Dakhla. Livraison par toupie, pompage, béton CPJ 45 et CPJ 55. Dès 1 500 DH/m³. Devis gratuit. SDAD — Dakhla Aménagement et Développement."
      : "Ready-mix concrete in Dakhla. Mixer truck delivery, pumping, CPJ 45 and CPJ 55 concrete. From 1,500 DH/m³. Free quote. SDAD.",
    keywords: ['béton prêt à l\'emploi Dakhla', 'béton toupie Dakhla', 'béton pompé Dakhla', ...KEYWORDS.core],
  });
}

const faqItems = [
  {
    question: 'Quel est le prix du béton prêt à l\'emploi à Dakhla ?',
    answer: 'Le béton prêt à l\'emploi à Dakhla coûte entre 1 500 et 2 000 DH/m³ selon la résistance (CPJ 35, CPJ 45, CPJ 55), le dosage et la quantité. Le sac de ciment 50kg coûte entre 70 et 90 DH selon le type.',
  },
  {
    question: 'Comment commander du béton prêt à l\'emploi à Dakhla ?',
    answer: 'Contactez Dakhla Aménagement et Développement au +212 658-265685. Livraison par toupie avec pompage possible. Délai 24-48h à Dakhla et région.',
  },
  {
    question: 'Quelle différence entre ciment et béton prêt à l\'emploi ?',
    answer: 'Le ciment est un liant (poudre). Le béton prêt à l\'emploi est un mélange de ciment, sable, gravier et eau prêt à couler. Le sac de ciment 50kg coûte 70-90 DH, le m³ de béton coûte 1 500-2 000 DH.',
  },
  {
    question: 'Quel sac de ciment pour mon chantier à Dakhla ?',
    answer: 'CPJ 35 pour maçonnerie courante (75 DH/sac), CPJ 45 pour béton armé (80 DH/sac), CPJ 55 pour ouvrages exigeants (85 DH/sac). Sac de 50kg disponible chez les fournisseurs de Dakhla.',
  },
];

export default async function BetonPretEmploiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const isFr = loc === 'fr';

  const schemas = [
    webPageSchema({ name: isFr ? 'Béton Prêt à l\'Emploi Dakhla — SDAD' : 'Ready-Mix Concrete Dakhla — SDAD', description: isFr ? 'Béton prêt à l\'emploi à Dakhla' : 'Ready-mix concrete in Dakhla', path: '/beton-pret-emploi', locale: loc }),
    breadcrumbSchema([{ name: isFr ? 'Béton Prêt à l\'Emploi' : 'Ready-Mix Concrete', path: '/beton-pret-emploi' }], loc),
    serviceSchema({ name: isFr ? 'Béton prêt à l\'emploi Dakhla' : 'Ready-mix concrete Dakhla', description: isFr ? 'Livraison de béton prêt à l\'emploi à Dakhla' : 'Ready-mix concrete delivery in Dakhla', path: '/beton-pret-emploi', locale: loc }),
    faqSchema(faqItems),
  ];

  const pricing = [
    { type: 'CPJ 35', sac: '70-75 DH', tonne: '1 400 DH/T', usage: isFr ? 'Maçonnerie courante' : 'Standard masonry' },
    { type: 'CPJ 45', sac: '75-85 DH', tonne: '1 500 DH/T', usage: isFr ? 'Béton armé, dallages' : 'Reinforced concrete, slabs' },
    { type: 'CPJ 55', sac: '80-90 DH', tonne: '1 600 DH/T', usage: isFr ? 'Génie civil, infrastructure' : 'Civil engineering' },
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Béton Prêt à l\'Emploi' : 'Ready-Mix Concrete', path: '/beton-pret-emploi' }]} locale={locale} />

      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'Service béton' : 'Concrete service'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? 'Béton Prêt à l\'Emploi à Dakhla' : 'Ready-Mix Concrete in Dakhla'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? "Béton prêt à l'emploi à Dakhla. Toupie, pompage. CPJ 35/45/55. Dès 1 500 DH/m³. Sac ciment 50kg dès 70 DH. SDAD — devis gratuit."
              : 'Ready-mix concrete delivered by mixer truck in Dakhla. CPJ 35, CPJ 45, CPJ 55. Pumping, custom dosage. 50kg cement bag from 70 DH.'}
          </p>
          <Link href={`/${locale}/devis`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
            {isFr ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Pricing table with SAC prices */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Prix du ciment et béton à Dakhla' : 'Cement and concrete prices in Dakhla'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Prix indicatifs 2026 — sac de 50kg et tonne. Les prix varient selon la quantité et la zone de livraison."
              : '2026 indicative prices — 50kg bag and ton. Prices vary by quantity and delivery zone.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Type de ciment' : 'Cement type'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Prix sac 50kg' : '50kg bag price'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Prix tonne' : 'Ton price'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Usage' : 'Use'}</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">{row.type}</td>
                    <td className="py-4 px-4 font-bold text-[#C1272D]">{row.sac}</td>
                    <td className="py-4 px-4 text-[#6B7280]">{row.tonne}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#6B7280] mt-6 max-w-2xl mx-auto">
            {isFr
              ? "* Prix départ Dakhla. Béton prêt à l'emploi: 1 500-2 000 DH/m³ selon dosage. Livraison non incluse. Devis personnalisé sur demande."
              : '* Ex-works Dakhla. Ready-mix concrete: 1,500-2,000 DH/m³. Delivery not included. Custom quote on request.'}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: isFr ? 'Livraison Toupie' : 'Mixer Truck Delivery', desc: isFr ? 'Toupies 6-10m³ pour livraison chantier' : '6-10m³ mixer trucks for site delivery' },
              { icon: Clock, title: isFr ? 'Délai 24-48h' : '24-48h Delivery', desc: isFr ? 'Commande avant 14h, livraison J+1 à Dakhla' : 'Order before 2pm, next-day delivery' },
              { icon: Beaker, title: isFr ? 'Dosage Sur Mesure' : 'Custom Dosage', desc: isFr ? 'CPJ 35, 45, 55 — dosage 300-400 kg/m³' : 'CPJ 35, 45, 55 — 300-400 kg/m³ dosage' },
              { icon: CheckCircle, title: isFr ? 'Pompage Béton' : 'Concrete Pumping', desc: isFr ? 'Pompes 36m et 42m pour accès difficile' : '36m and 42m pumps for hard-to-reach areas' },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content with local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Acheter du ciment et béton à Dakhla' : 'Buy cement and concrete in Dakhla'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? "À Dakhla, le sac de ciment (50 kg) se négocie généralement entre 70 DH et 90 DH selon le type (CPJ 35, CPJ 45 ou CPJ 55) et la quantité commandée. Le marché cimentier de Dakhla est en pleine croissance avec les grands projets d'infrastructure comme le port de Dakhla Atlantique."
                : 'In Dakhla, a 50kg cement bag costs between 70 and 90 DH depending on the type (CPJ 35, CPJ 45 or CPJ 55) and quantity. The Dakhla cement market is growing with major infrastructure projects.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? "Dakhla Aménagement et Développement (SDAD) produit et commercialise du ciment CPJ 45 (1 500 DH/T, ~80 DH/sac) et CPJ 55 (1 600 DH/T, ~85 DH/sac) à son centre de broyage de Dakhla. Nous proposons également du béton prêt à l'emploi livré par toupie avec pompage."
                : 'Dakhla Aménagement et Développement (SDAD) produces and sells CPJ 45 (1,500 DH/T, ~80 DH/bag) and CPJ 55 (1,600 DH/T, ~85 DH/bag) cement at its Dakhla grinding plant. We also offer ready-mix concrete delivered by mixer truck with pumping.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Pour vos approvisionnements en ciment à Dakhla : sacs 50kg (70-90 DH), vrac par camion-citerne (min. 30T), big bag 1T, et béton prêt à l'emploi par toupie. Contactez-nous au +212 658-265685 pour un devis gratuit."
                : 'For cement supply in Dakhla: 50kg bags (70-90 DH), bulk tanker (min. 30T), big bag 1T, and ready-mix concrete by mixer truck. Contact us at +212 658-265685 for a free quote.'}
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Questions fréquentes' : 'Frequently asked questions'}
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="group bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                  <summary className="font-semibold text-[#1B3A5C] cursor-pointer">{item.question}</summary>
                  <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles
        articleSlugs={['beton-arme-maroc', 'calculer-quantite-ciment', 'transport-ciment-logistique']}
        locale={locale}
      />
      <CtaBanner locale={locale} />
    </>
  );
}
