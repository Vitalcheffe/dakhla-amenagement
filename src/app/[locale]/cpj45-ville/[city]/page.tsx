import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  productSchema,
  faqSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { MOROCCAN_CITIES, getCity } from '@/lib/moroccan-cities';
import { CheckCircle, MapPin, Truck, Clock, Factory, ArrowRight, Building2, Layers, HardHat, Beaker, Package, Container } from 'lucide-react';

export function generateStaticParams() {
  return SITE.locales.flatMap((locale) =>
    MOROCCAN_CITIES.map((city) => ({ locale, city: city.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const cityData = getCity(city);
  if (!cityData) return buildMetadata({ locale: loc, path: '', title: 'Not Found', description: '', noIndex: true });

  const cityName = loc === 'fr' ? cityData.name : cityData.nameEn;

  return buildMetadata({
    locale: loc,
    path: `/cpj45-ville/${city}`,
    title: loc === 'fr'
      ? `Ciment CPJ 45 ${cityName} — 45 MPa, 1 500 DH/T | DAM`
      : `CPJ 45 Cement ${cityName} — 45 MPa, 1,500 DH/T | DAM`,
    description: loc === 'fr'
      ? `Ciment CPJ 45 à ${cityName}, ${cityData.region}. Résistance 45 MPa, béton armé et dallages. Livraison ${cityData.deliveryDelay} depuis Dakhla. Prix dès 1 500 DH/T. Devis gratuit.`
      : `CPJ 45 cement in ${cityName}, ${cityData.regionEn}. 45 MPa strength, reinforced concrete and slabs. Delivery ${cityData.deliveryDelay} from Dakhla. From 1,500 DH/T. Free quote.`,
    keywords: [`CPJ 45 ${cityName}`, `ciment CPJ 45 ${cityName}`, `prix CPJ 45 ${cityData.region}`, `ciment 45 MPa ${cityName}`, ...KEYWORDS.core],
  });
}

export default async function Cpj45VillePage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const cityData = getCity(city);
  if (!cityData) return null;

  const isFr = loc === 'fr';
  const cityName = isFr ? cityData.name : cityData.nameEn;
  const region = isFr ? cityData.region : cityData.regionEn;

  const faqItems = [
    {
      question: isFr ? `Où acheter du ciment CPJ 45 à ${cityName} ?` : `Where to buy CPJ 45 cement in ${cityName}?`,
      answer: isFr
        ? `Dakhla Aménagement livre du ciment CPJ 45 (45 MPa) à ${cityName} (${region}). Commandez via ciment-dam.com ou au +212 658-265685. Livraison ${cityData.deliveryDelay} depuis notre centre de broyage à Dakhla.`
        : `Dakhla Aménagement delivers CPJ 45 (45 MPa) cement to ${cityName} (${region}). Order via ciment-dam.com or +212 658-265685. Delivery ${cityData.deliveryDelay} from our Dakhla grinding plant.`,
    },
    {
      question: isFr ? `Quel est le prix du CPJ 45 à ${cityName} ?` : `What is the CPJ 45 price in ${cityName}?`,
      answer: isFr
        ? `Prix du CPJ 45 à ${cityName} : dès 1 500 DH/T en vrac (min. 30T), 1 550 DH/T en sacs 50kg et 1 580 DH/T en big bag 1T. Le tarif varie selon le volume et la zone. Demandez un devis gratuit.`
        : `CPJ 45 price in ${cityName}: from 1,500 DH/T in bulk (min. 30T), 1,550 DH/T in 50kg bags and 1,580 DH/T in 1T big bag. Price varies by volume and zone. Request a free quote.`,
    },
    {
      question: isFr ? `Quels sont les délais de livraison du CPJ 45 à ${cityName} ?` : `What are the CPJ 45 delivery delays in ${cityName}?`,
      answer: isFr
        ? `Livraison du CPJ 45 à ${cityName} en ${cityData.deliveryDelay} (distance: ${cityData.distanceFromDakhla} km depuis Dakhla). Vrac, sacs 50kg et big bag 1T disponibles.`
        : `CPJ 45 delivery to ${cityName} in ${cityData.deliveryDelay} (distance: ${cityData.distanceFromDakhla} km from Dakhla). Bulk, 50kg bags and 1T big bag available.`,
    },
    {
      question: isFr ? `Pour quels usages le CPJ 45 est-il recommandé à ${cityName} ?` : `What is CPJ 45 recommended for in ${cityName}?`,
      answer: isFr
        ? `Le CPJ 45 est idéal à ${cityName} pour le béton armé courant (poutres, poteaux, dalles), les dallages industriels et résidentiels, les fondations superficielles et la maçonnerie porteuse. Conforme NM 10.1.004 / EN 197-1.`
        : `CPJ 45 is ideal in ${cityName} for standard reinforced concrete (beams, columns, slabs), industrial and residential slabs, shallow foundations and load-bearing masonry. NM 10.1.004 / EN 197-1 compliant.`,
    },
  ];

  const specs = isFr
    ? [
        { prop: 'Résistance à la compression (28 j)', value: '45 MPa' },
        { prop: 'Finesse de mouture (Blaine)', value: '≥ 350 m²/kg' },
        { prop: 'Début de prise', value: '≥ 45 minutes' },
        { prop: 'Fin de prise', value: '≤ 10 heures' },
        { prop: 'Stabilité (expansion)', value: '≤ 10 mm' },
        { prop: 'Classe de résistance', value: '42,5 (CPJ 45)' },
        { prop: 'Constituants', value: 'Clinker ≥ 65 %, additions ≤ 35 %' },
        { prop: 'Normes', value: 'NM 10.1.004 / EN 197-1 CEM II/A-L 42,5' },
        { prop: 'Conditionnements', value: 'Vrac (≥30T), sacs 50kg, big bag 1T' },
      ]
    : [
        { prop: 'Compressive strength (28 d)', value: '45 MPa' },
        { prop: 'Fineness (Blaine)', value: '≥ 350 m²/kg' },
        { prop: 'Initial setting time', value: '≥ 45 minutes' },
        { prop: 'Final setting time', value: '≤ 10 hours' },
        { prop: 'Soundness (expansion)', value: '≤ 10 mm' },
        { prop: 'Strength class', value: '42.5 (CPJ 45)' },
        { prop: 'Constituents', value: 'Clinker ≥ 65%, additions ≤ 35%' },
        { prop: 'Standards', value: 'NM 10.1.004 / EN 197-1 CEM II/A-L 42.5' },
        { prop: 'Packaging', value: 'Bulk (≥30T), 50kg bags, 1T big bag' },
      ];

  const applications = isFr
    ? [
        { icon: Building2, title: 'Béton armé', desc: `Poutres, poteaux, dalles, voiles pour constructions résidentielles et tertiaires à ${cityName}. Dosage 350 kg/m³.` },
        { icon: Layers, title: 'Dallages', desc: `Dallages industriels, parkings, chapes à ${cityName}. Excellente résistance à l'abrasion.` },
        { icon: HardHat, title: 'Fondations', desc: `Semelles superficielles, radiers, pieux à ${cityName}. Bonne résistance aux agressions du sol.` },
        { icon: Factory, title: 'Maçonnerie porteuse', desc: `Murs en agglos, chainages, linteaux à ${cityName}. Mortier bâtard économique et performant.` },
      ]
    : [
        { icon: Building2, title: 'Reinforced concrete', desc: `Beams, columns, slabs, walls for residential and commercial buildings in ${cityName}. Dosage 350 kg/m³.` },
        { icon: Layers, title: 'Slabs', desc: `Industrial slabs, parking lots, screeds in ${cityName}. Excellent abrasion resistance.` },
        { icon: HardHat, title: 'Foundations', desc: `Shallow footings, rafts, piles in ${cityName}. Good resistance to soil aggression.` },
        { icon: Factory, title: 'Load-bearing masonry', desc: `Block walls, tie beams, lintels in ${cityName}. Economical and performing masonry mortar.` },
      ];

  const packaging = isFr
    ? [
        { icon: Truck, title: 'Vrac', price: 'dès 1 500 DH/T', desc: `Livraison par camion-citerne avec pompage direct en silo. Min. 30T vers ${cityName}.`, href: '/ciment-vrac' },
        { icon: Package, title: 'Sacs 50kg', price: 'dès 1 550 DH/T', desc: `Palette 1T (20 sacs) pour chantiers à ${cityName}. Manutention facile.`, href: '/ciment-sacs' },
        { icon: Container, title: 'Big Bag 1T', price: 'dès 1 580 DH/T', desc: `Manutention par grue ou chariot élévateur. Idéal pour chantiers à ${cityName}.`, href: '/ciment-big-bag' },
      ]
    : [
        { icon: Truck, title: 'Bulk', price: 'from 1,500 DH/T', desc: `Tanker truck delivery with direct silo pumping. Min. 30T to ${cityName}.`, href: '/ciment-vrac' },
        { icon: Package, title: '50kg bags', price: 'from 1,550 DH/T', desc: `1T pallet (20 bags) for sites in ${cityName}. Easy handling.`, href: '/ciment-sacs' },
        { icon: Container, title: '1T Big Bag', price: 'from 1,580 DH/T', desc: `Handling by crane or forklift. Ideal for sites in ${cityName}.`, href: '/ciment-big-bag' },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production Locale', desc: 'Centre de broyage à Dakhla, capacité 500K T/an' },
        { icon: Truck, title: 'Livraison Rapide', desc: `${cityData.deliveryDelay} vers ${cityName} (${cityData.distanceFromDakhla} km)` },
        { icon: CheckCircle, title: 'Qualité Certifiée', desc: 'Conforme NM 10.1.004 et EN 197-1' },
        { icon: MapPin, title: 'Zone Desservie', desc: `${cityName}, ${region}` },
      ]
    : [
        { icon: Factory, title: 'Local Production', desc: 'Dakhla grinding plant, 500K T/year capacity' },
        { icon: Truck, title: 'Fast Delivery', desc: `${cityData.deliveryDelay} to ${cityName} (${cityData.distanceFromDakhla} km)` },
        { icon: CheckCircle, title: 'Certified Quality', desc: 'NM 10.1.004 and EN 197-1 compliant' },
        { icon: MapPin, title: 'Service Area', desc: `${cityName}, ${region}` },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? `Ciment CPJ 45 ${cityName} — Dakhla Aménagement` : `CPJ 45 Cement ${cityName} — Dakhla Aménagement`,
      description: isFr
        ? `Ciment CPJ 45 (45 MPa) à ${cityName}, ${region}. Livraison ${cityData.deliveryDelay}. Prix dès 1 500 DH/T.`
        : `CPJ 45 (45 MPa) cement in ${cityName}, ${region}. Delivery ${cityData.deliveryDelay}. From 1,500 DH/T.`,
      path: `/cpj45-ville/${city}`,
      locale: loc,
    }),
    breadcrumbSchema([{ name: `CPJ 45 ${cityName}`, path: `/cpj45-ville/${city}` }], loc),
    serviceSchema({
      name: isFr ? `Ciment CPJ 45 ${cityName}` : `CPJ 45 Cement ${cityName}`,
      description: isFr ? `Livraison de ciment CPJ 45 (45 MPa) à ${cityName}` : `CPJ 45 (45 MPa) cement delivery to ${cityName}`,
      path: `/cpj45-ville/${city}`,
      locale: loc,
      serviceType: 'CPJ 45 cement manufacturing and supply',
    }),
    productSchema({
      name: isFr ? `Ciment CPJ 45 ${cityName}` : `CPJ 45 Cement ${cityName}`,
      description: isFr
        ? `Ciment Portland Composé 45 MPa pour béton armé, dallages et fondations à ${cityName}. Conforme NM 10.1.004. Prix dès 1 500 DH/T.`
        : `Composite Portland 45 MPa cement for reinforced concrete, slabs and foundations in ${cityName}. NM 10.1.004 compliant. From 1,500 DH/T.`,
      sku: 'DAM-CPJ45',
      price: '1500',
      path: `/cpj45-ville/${city}`,
      locale: loc,
      ratingValue: '4.9',
      reviewCount: 127,
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: `CPJ 45 ${cityName}`, path: `/cpj45-ville/${city}` }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? `CPJ 45 — ${region}` : `CPJ 45 — ${region}`}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? `Ciment CPJ 45 à ${cityName}` : `CPJ 45 Cement in ${cityName}`}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? `Ciment CPJ 45 (45 MPa) à ${cityName}, ${region}. Idéal pour béton armé, dallages et fondations. Livraison ${cityData.deliveryDelay} depuis Dakhla (${cityData.distanceFromDakhla} km). Prix dès 1 500 DH/T. Vrac, sacs 50kg, big bag 1T.`
              : `CPJ 45 (45 MPa) cement in ${cityName}, ${region}. Ideal for reinforced concrete, slabs and foundations. Delivery ${cityData.deliveryDelay} from Dakhla (${cityData.distanceFromDakhla} km). From 1,500 DH/T. Bulk, 50kg bags, 1T big bag.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/devis`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
              {isFr ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/${locale}/cpj-45`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              {isFr ? 'Fiche produit CPJ 45' : 'CPJ 45 product sheet'}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{f.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? `Spécifications CPJ 45 — ${cityName}` : `CPJ 45 Specifications — ${cityName}`}
          </h2>
          <p className="text-center text-[#6B7280] mb-10 max-w-2xl mx-auto">
            {isFr
              ? `Caractéristiques techniques du ciment CPJ 45 livré à ${cityName}. Conforme aux normes marocaine NM 10.1.004 et européenne EN 197-1.`
              : `Technical specifications of CPJ 45 cement delivered to ${cityName}. Compliant with Moroccan NM 10.1.004 and European EN 197-1 standards.`}
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
            <dl className="divide-y divide-[#E5E7EB]">
              {specs.map((s, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 hover:bg-[#F7F8FA] transition-colors">
                  <dt className="text-sm text-[#6B7280] mb-1 sm:mb-0">{s.prop}</dt>
                  <dd className="font-semibold text-[#1B3A5C] text-sm sm:text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#6B7280]">
            <Beaker className="w-4 h-4 text-[#E8B84B]" />
            <span>{isFr ? 'Chaque lot testé en laboratoire avant expédition vers ' : 'Each batch lab-tested before shipping to '}{cityName}.</span>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? `Applications du CPJ 45 à ${cityName}` : `CPJ 45 Applications in ${cityName}`}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? `Le CPJ 45 est le ciment de référence pour la construction courante à ${cityName} et dans la région de ${region}.`
              : `CPJ 45 is the reference cement for standard construction in ${cityName} and the ${region} region.`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((a, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#1B3A5C]/10 flex items-center justify-center mb-4">
                  <a.icon className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{a.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packaging */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? `Prix du CPJ 45 à ${cityName}` : `CPJ 45 Price in ${cityName}`}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? `Tarifs dégressifs selon le volume et le conditionnement. Livraison ${cityData.deliveryDelay} vers ${cityName}.`
              : `Volume-based pricing by packaging. Delivery ${cityData.deliveryDelay} to ${cityName}.`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packaging.map((p, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center hover:border-[#E8B84B] transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#E8B84B]/15 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-7 h-7 text-[#E8B84B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">{p.title}</h3>
                <div className="text-2xl font-bold text-[#C1272D] mb-3">{p.price}</div>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{p.desc}</p>
                <Link href={`/${locale}${p.href}`} className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
                  {isFr ? 'En savoir plus' : 'Learn more'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#1B3A5C] text-white rounded-2xl p-8">
              <Truck className="w-10 h-10 text-[#E8B84B] mb-4" />
              <h3 className="text-xl font-bold mb-2">{isFr ? 'Délai de livraison' : 'Delivery delay'}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {isFr
                  ? `Livraison à ${cityName} en ${cityData.deliveryDelay} depuis notre centre de broyage à Dakhla (distance: ${cityData.distanceFromDakhla} km).`
                  : `Delivery to ${cityName} in ${cityData.deliveryDelay} from our Dakhla grinding plant (distance: ${cityData.distanceFromDakhla} km).`}
              </p>
            </div>
            <div className="bg-[#1B3A5C] text-white rounded-2xl p-8">
              <Clock className="w-10 h-10 text-[#E8B84B] mb-4" />
              <h3 className="text-xl font-bold mb-2">{isFr ? 'Zone desservie' : 'Service area'}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {isFr
                  ? `${cityName}, ${region}. Code postal: ${cityData.postalArea}. Population: ${cityData.population} habitants.`
                  : `${cityName}, ${region}. Postal area: ${cityData.postalArea}. Population: ${cityData.population} inhabitants.`}
              </p>
            </div>
            <div className="bg-[#1B3A5C] text-white rounded-2xl p-8">
              <Factory className="w-10 h-10 text-[#E8B84B] mb-4" />
              <h3 className="text-xl font-bold mb-2">{isFr ? 'Flotte & logistique' : 'Fleet & logistics'}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {isFr
                  ? `Camions-citernes (vrac ≥30T), plateaux (sacs 50kg) et camions big bag (1T). Suivi logistique jusqu'à ${cityName}.`
                  : `Tanker trucks (bulk ≥30T), flatbeds (50kg bags) and big bag trucks (1T). Logistics tracking to ${cityName}.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content + FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? `CPJ 45 à ${cityName} : votre fournisseur de confiance` : `CPJ 45 in ${cityName}: your trusted supplier`}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Dakhla Aménagement (DAM) livre du ciment CPJ 45 (45 MPa) à ${cityName}, dans la région de ${region}. Notre centre de broyage de clinker à Dakhla, d'une capacité de 500 000 tonnes par an, approvisionne ${cityName} et tout le ${cityData.distanceFromDakhla < 600 ? 'Sud marocain' : 'territoire marocain'} en ciment Portland Composé 45 MPa de qualité supérieure.`
                : `Dakhla Aménagement (DAM) supplies CPJ 45 (45 MPa) cement to ${cityName}, in the ${region} region. Our clinker grinding plant in Dakhla, with a capacity of 500,000 tons per year, supplies ${cityName} and all of Morocco with premium Composite Portland 45 MPa cement.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Le CPJ 45 est le ciment le plus utilisé à ${cityName} pour le béton armé courant (poutres, poteaux, dalles), les dallages industriels et résidentiels, les fondations superficielles et la maçonnerie porteuse. Sa résistance de 45 MPa à 28 jours couvre la majorité des besoins de construction à ${cityName}.`
                : `CPJ 45 is the most widely used cement in ${cityName} for standard reinforced concrete (beams, columns, slabs), industrial and residential slabs, shallow foundations and load-bearing masonry. Its 45 MPa strength at 28 days covers the majority of construction needs in ${cityName}.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? `Nous livrons à ${cityName} en ${cityData.deliveryDelay} (distance: ${cityData.distanceFromDakhla} km depuis Dakhla). Pour commander du CPJ 45 à ${cityName}, contactez-nous au +212 658-265685 ou demandez un devis gratuit en ligne. Conforme NM 10.1.004 / EN 197-1.`
                : `We deliver to ${cityName} in ${cityData.deliveryDelay} (distance: ${cityData.distanceFromDakhla} km from Dakhla). To order CPJ 45 in ${cityName}, contact us at +212 658-265685 or request a free online quote. NM 10.1.004 / EN 197-1 compliant.`}
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? `Questions fréquentes — CPJ 45 ${cityName}` : `FAQ — CPJ 45 ${cityName}`}
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="group bg-white border border-[#E5E7EB] rounded-xl p-5">
                  <summary className="font-semibold text-[#1B3A5C] cursor-pointer">{item.question}</summary>
                  <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
