import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { MapPin, Truck, ArrowRight, Clock } from 'lucide-react';

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
      path: '/livraison-ciment',
      title: 'Cement Delivery Morocco — Zones & Logistics | Dakhla Aménagement',
      description:
        'Cement delivery across Southern Morocco and Mauritania. Dakhla, Laayoune, Boujdour, Tan-Tan, Nouakchott. Bulk, 50kg bags, big bag. Fast logistics from Dakhla plant. DAM cement.',
      keywords: [...KEYWORDS.regional, 'cement delivery Morocco', 'cement logistics', 'bulk delivery'],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/livraison-ciment',
    title: 'Livraison Ciment Maroc — Zones & Logistique | Dakhla Aménagement',
    description:
      'Livraison de ciment dans tout le Sud marocain et la Mauritanie. Dakhla, Laâyoune, Boujdour, Tan-Tan, Nouakchott. Vrac, sacs 50kg, big bag. Logistique rapide depuis Dakhla. Ciment DAM.',
    keywords: [...KEYWORDS.regional, 'livraison ciment Maroc', 'logistique ciment', 'ciment vrac livraison'],
  });
}

interface Zone {
  city: string;
  region: string;
  distance: string;
  delay: string;
  country: 'MA' | 'MR';
}

const ZONES: Zone[] = [
  { city: 'Dakhla', region: 'Dakhla-Oued Ed-Dahab', distance: '0 km', delay: '24h', country: 'MA' },
  { city: 'Aousserd', region: 'Dakhla-Oued Ed-Dahab', distance: '80 km', delay: '24h', country: 'MA' },
  { city: 'Boujdour', region: 'Laâyoune-Sakia El Hamra', distance: '180 km', delay: '48h', country: 'MA' },
  { city: 'Laâyoune', region: 'Laâyoune-Sakia El Hamra', distance: '500 km', delay: '72h', country: 'MA' },
  { city: 'Es-Semara', region: 'Laâyoune-Sakia El Hamra', distance: '650 km', delay: '72h', country: 'MA' },
  { city: 'Tan-Tan', region: 'Guelmim-Oued Noun', distance: '800 km', delay: '72h', country: 'MA' },
  { city: 'Guelmim', region: 'Guelmim-Oued Noun', distance: '950 km', delay: '96h', country: 'MA' },
  { city: 'Tarfaya', region: 'Laâyoune-Sakia El Hamra', distance: '700 km', delay: '72h', country: 'MA' },
  { city: 'Nouadhibou', region: 'Dakhlet-Nouadhibou', distance: '350 km', delay: '72h', country: 'MR' },
  { city: 'Nouakchott', region: 'Nouakchott', distance: '800 km', delay: '96h', country: 'MR' },
];

export default async function LivraisonCimentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const isFr = loc === 'fr';

  const schemas = [
    webPageSchema({
      name: isFr ? 'Livraison Ciment Maroc — Zones DAM' : 'Cement Delivery Morocco — DAM Zones',
      description: isFr
        ? 'Zones de livraison de ciment dans le Sud marocain et la Mauritanie.'
        : 'Cement delivery zones across Southern Morocco and Mauritania.',
      path: '/livraison-ciment',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Livraison Ciment' : 'Cement Delivery', path: '/livraison-ciment' }], loc),
    localBusinessSchema(),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Livraison Ciment' : 'Cement Delivery', path: '/livraison-ciment' }]} locale={locale} />

      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'Logistique & Livraison' : 'Logistics & Delivery'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? 'Livraison de ciment au Maroc' : 'Cement delivery in Morocco'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? 'Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain et la Mauritanie. Flotte dédiée, logistique rapide, suivi qualité.'
              : 'Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement across Southern Morocco and Mauritania. Dedicated fleet, fast logistics, quality tracking.'}
          </p>
        </div>
      </section>

      {/* Delivery Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: isFr ? 'Flotte dédiée' : 'Dedicated fleet', desc: isFr ? 'Camions-citernes pour le vrac, plateaux pour sacs et big bags. Capacité adaptée à votre chantier.' : 'Tanker trucks for bulk, flatbeds for bags and big bags. Capacity adapted to your site.' },
              { icon: Clock, title: isFr ? 'Délais rapides' : 'Fast delivery', desc: isFr ? 'Livraison 24h à Dakhla, 48-72h dans le Sud marocain, 72-96h en Mauritanie.' : '24h delivery in Dakhla, 48-72h in Southern Morocco, 72-96h in Mauritania.' },
              { icon: MapPin, title: isFr ? 'Couverture étendue' : 'Wide coverage', desc: isFr ? 'Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim et Mauritanie (Nouadhibou, Nouakchott).' : 'Dakhla, Laayoune, Boujdour, Tan-Tan, Guelmim and Mauritania (Nouadhibou, Nouakchott).' },
            ].map((card, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{card.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Table */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Zones de livraison' : 'Delivery zones'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Délais et distances indicatifs depuis notre centre de broyage à Dakhla.'
              : 'Indicative delivery times and distances from our Dakhla grinding plant.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Ville' : 'City'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Région' : 'Region'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Pays' : 'Country'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Distance' : 'Distance'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Délai' : 'Delay'}</th>
                </tr>
              </thead>
              <tbody>
                {ZONES.map((zone, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-white transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">{zone.city}</td>
                    <td className="py-4 px-4 text-[#6B7280]">{zone.region}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${zone.country === 'MA' ? 'bg-[#C1272D]/10 text-[#C1272D]' : 'bg-[#0E7490]/10 text-[#0E7490]'}`}>
                        {zone.country === 'MA' ? 'Maroc' : 'Mauritanie'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#6B7280]">{zone.distance}</td>
                    <td className="py-4 px-4 font-semibold text-[#E8B84B]">{zone.delay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Logistique ciment : comment ça marche ?' : 'Cement logistics: how it works'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La livraison de ciment est un maillon critique de la chaîne d'approvisionnement BTP. Dakhla Aménagement a mis en place une logistique optimisée pour garantir la fraîcheur et la qualité du ciment jusqu'à votre chantier, qu'il soit à Dakhla, à Laâyoune ou à Nouakchott."
                : "Cement delivery is a critical link in the construction supply chain. Dakhla Aménagement has set up optimized logistics to guarantee the freshness and quality of cement to your site, whether in Dakhla, Laayoune or Nouakchott."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Pour le vrac, nos camions-citernes équipés de systèmes de pompage permettent un déchargement direct dans votre silo chantier. Pour les sacs et big bags, nos plateau-bâchés assurent une livraison sécurisée. Chaque livraison est accompagnée d'un bon de livraison et d'un certificat de qualité."
                : "For bulk, our tanker trucks equipped with pumping systems allow direct unloading into your site silo. For bags and big bags, our flatbed trucks ensure secure delivery. Each delivery comes with a delivery note and quality certificate."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B3A5C]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isFr ? 'Commandez votre livraison de ciment' : 'Order your cement delivery'}
          </h2>
          <p className="text-white/70 mb-8">
            {isFr ? 'Devis gratuit avec estimation des délais de livraison.' : 'Free quote with delivery time estimate.'}
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
        articleSlugs={['transport-ciment-logistique', 'conditionnement-vrac', 'dakhla-pole-developpement']}
        locale={locale}
      />
    </>
  );
}
