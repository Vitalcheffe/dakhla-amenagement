import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { MOROCCAN_CITIES, getCity } from '@/lib/moroccan-cities';
import { CheckCircle, MapPin, Truck, Factory, ArrowRight } from 'lucide-react';

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
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const cityData = getCity(city);
  if (!cityData) return buildMetadata({ locale: loc, path: '', title: 'Not Found', description: '', noIndex: true });

  const cityName = loc === 'fr' ? cityData.name : cityData.nameEn;

  return buildMetadata({
    locale: loc,
    path: `/ciment-ville/${city}`,
    title: loc === 'fr'
      ? `Ciment ${cityName} — CPJ 45 & CPJ 55, Livraison ${cityData.deliveryDelay} | DAM`
      : `Cement ${cityName} — CPJ 45 & CPJ 55, Delivery ${cityData.deliveryDelay} | DAM`,
    description: loc === 'fr'
      ? `Ciment CPJ 45 et CPJ 55 à ${cityName}, ${cityData.region}. Livraison ${cityData.deliveryDelay} depuis Dakhla. Prix dès 1 500 DH/T. Vrac, sacs, big bag. Devis gratuit.`
      : `CPJ 45 and CPJ 55 cement in ${cityName}, ${cityData.regionEn}. Delivery ${cityData.deliveryDelay} from Dakhla. From 1,500 DH/T. Bulk, bags, big bag. Free quote.`,
    keywords: [`ciment ${cityName}`, `ciment ${cityData.region}`, `acheter ciment ${cityName}`, ...KEYWORDS.core],
  });
}

export default async function CimentVillePage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const cityData = getCity(city);
  if (!cityData) return null;

  const isFr = loc === 'fr';
  const cityName = isFr ? cityData.name : cityData.nameEn;
  const region = isFr ? cityData.region : cityData.regionEn;

  const faqItems = [
    {
      question: isFr ? `Où acheter du ciment à ${cityName} ?` : `Where to buy cement in ${cityName}?`,
      answer: isFr
        ? `Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 à ${cityName} (${region}). Commandez via ciment-dam.com ou au +212 658-265685. Livraison ${cityData.deliveryDelay}.`
        : `Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement to ${cityName} (${region}). Order via ciment-dam.com or +212 658-265685. Delivery ${cityData.deliveryDelay}.`,
    },
    {
      question: isFr ? `Quel est le prix du ciment à ${cityName} ?` : `What is the cement price in ${cityName}?`,
      answer: isFr
        ? `Le prix du ciment à ${cityName} : CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Le prix varie selon le conditionnement et la quantité. Demandez un devis gratuit.`
        : `Cement price in ${cityName}: CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Price varies by packaging and quantity. Request a free quote.`,
    },
    {
      question: isFr ? `Quels sont les délais de livraison à ${cityName} ?` : `What are the delivery delays in ${cityName}?`,
      answer: isFr
        ? `Livraison à ${cityName} en ${cityData.deliveryDelay} depuis notre centre de broyage à Dakhla (distance: ${cityData.distanceFromDakhla} km). Vrac, sacs et big bag disponibles.`
        : `Delivery to ${cityName} in ${cityData.deliveryDelay} from our Dakhla grinding plant (${cityData.distanceFromDakhla} km). Bulk, bags and big bag available.`,
    },
    {
      question: isFr ? `Quels types de ciment sont disponibles à ${cityName} ?` : `What cement types are available in ${cityName}?`,
      answer: isFr
        ? `CPJ 45 (45 MPa) pour béton armé courant et CPJ 55 (55 MPa) pour ouvrages exigeants. Conformes NM 10.1.004 et EN 197-1. Conditionnement vrac, sacs 50kg, big bag 1T.`
        : `CPJ 45 (45 MPa) for standard reinforced concrete and CPJ 55 (55 MPa) for demanding structures. NM 10.1.004 and EN 197-1 compliant. Bulk, 50kg bags, big bag 1T.`,
    },
  ];

  const schemas = [
    webPageSchema({
      name: isFr ? `Ciment ${cityName} — Dakhla Aménagement` : `Cement ${cityName} — Dakhla Aménagement`,
      description: isFr
        ? `Ciment CPJ 45 et CPJ 55 à ${cityName}, ${region}. Livraison ${cityData.deliveryDelay}.`
        : `CPJ 45 and CPJ 55 cement in ${cityName}, ${region}. Delivery ${cityData.deliveryDelay}.`,
      path: `/ciment-ville/${city}`,
      locale: loc,
    }),
    breadcrumbSchema([{ name: `${isFr ? 'Ciment' : 'Cement'} ${cityName}`, path: `/ciment-ville/${city}` }], loc),
    serviceSchema({
      name: isFr ? `Ciment ${cityName}` : `Cement ${cityName}`,
      description: isFr ? `Livraison de ciment à ${cityName}` : `Cement delivery to ${cityName}`,
      path: `/ciment-ville/${city}`,
      locale: loc,
    }),
    faqSchema(faqItems),
  ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production Locale', desc: `Centre de broyage à Dakhla, capacité 500K T/an` },
        { icon: Truck, title: 'Livraison Rapide', desc: `${cityData.deliveryDelay} vers ${cityName} (${cityData.distanceFromDakhla} km)` },
        { icon: CheckCircle, title: 'Qualité Certifiée', desc: 'Conforme NM 10.1.004 et EN 197-1' },
        { icon: MapPin, title: 'Zone Desservie', desc: `${cityName}, ${region}` },
      ]
    : [
        { icon: Factory, title: 'Local Production', desc: `Dakhla grinding plant, 500K T/year capacity` },
        { icon: Truck, title: 'Fast Delivery', desc: `${cityData.deliveryDelay} to ${cityName} (${cityData.distanceFromDakhla} km)` },
        { icon: CheckCircle, title: 'Certified Quality', desc: 'NM 10.1.004 and EN 197-1 compliant' },
        { icon: MapPin, title: 'Service Area', desc: `${cityName}, ${region}` },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: `${isFr ? 'Ciment' : 'Cement'} ${cityName}`, path: `/ciment-ville/${city}` }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? `${region}` : `${region}`}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? `Ciment ${cityName}` : `Cement ${cityName}`}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? `Ciment CPJ 45 et CPJ 55 à ${cityName}. Livraison ${cityData.deliveryDelay} depuis Dakhla. Prix dès 1 500 DH/T. Vrac, sacs 50kg, big bag. Devis gratuit.`
              : `CPJ 45 and CPJ 55 cement in ${cityName}. Delivery ${cityData.deliveryDelay} from Dakhla. From 1,500 DH/T. Bulk, 50kg bags, big bag. Free quote.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/devis`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
              {isFr ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/${locale}/prix-ciment-ville/${city}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              {isFr ? 'Voir les prix' : 'View prices'}
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

      {/* Products */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? `Ciment disponible à ${cityName}` : `Cement available in ${cityName}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'CPJ 45', res: '45 MPa', price: '1 500 DH/T', use: isFr ? 'Béton armé, dallages' : 'Reinforced concrete, slabs', href: '/cpj-45' },
              { name: 'CPJ 55', res: '55 MPa', price: '1 600 DH/T', use: isFr ? 'Génie civil, infrastructure' : 'Civil engineering, infrastructure', href: '/cpj-55' },
            ].map((c) => (
              <div key={c.name} className="bg-white border border-[#E5E7EB] rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{c.name}</h3>
                  <span className="px-3 py-1 bg-[#E8B84B]/15 text-[#E8B84B] text-sm font-semibold rounded-full">{c.price}</span>
                </div>
                <dl className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm"><dt className="text-[#6B7280]">{isFr ? 'Résistance' : 'Resistance'}</dt><dd className="font-semibold">{c.res}</dd></div>
                  <div className="flex justify-between text-sm"><dt className="text-[#6B7280]">{isFr ? 'Usage' : 'Use'}</dt><dd className="font-semibold text-right">{c.use}</dd></div>
                </dl>
                <Link href={`/${locale}${c.href}`} className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
                  {isFr ? 'En savoir plus' : 'Learn more'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? `Ciment à ${cityName} : votre fournisseur de confiance` : `Cement in ${cityName}: your trusted supplier`}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Dakhla Aménagement (DAM) est votre fournisseur de ciment CPJ 45 et CPJ 55 à ${cityName}, dans la région de ${region}. Notre centre de broyage de clinker à Dakhla, d'une capacité de 500 000 tonnes par an, approvisionne ${cityName} et tout le ${cityData.distanceFromDakhla < 600 ? 'Sud marocain' : 'territoire marocain'} en ciment de qualité supérieure.`
                : `Dakhla Aménagement (DAM) is your CPJ 45 and CPJ 55 cement supplier in ${cityName}, in the ${region} region. Our clinker grinding plant in Dakhla, with a capacity of 500,000 tons per year, supplies ${cityName} and all of Morocco with premium quality cement.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Nous livrons à ${cityName} en ${cityData.deliveryDelay} (distance: ${cityData.distanceFromDakhla} km depuis Dakhla). Notre flotte de camions-citernes, plateaux et camions big bag assure une livraison sécurisée de votre ciment, qu'il soit en vrac, en sacs de 50kg ou en big bag de 1 tonne.`
                : `We deliver to ${cityName} in ${cityData.deliveryDelay} (distance: ${cityData.distanceFromDakhla} km from Dakhla). Our fleet of tanker trucks, flatbeds and big bag trucks ensures secure delivery of your cement, whether bulk, 50kg bags or 1-ton big bags.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? `Le ciment DAM est conforme aux normes marocaine NM 10.1.004 et européenne EN 197-1. Chaque lot est testé en laboratoire avant expédition. Pour commander du ciment à ${cityName}, contactez-nous au +212 658-265685 ou demandez un devis gratuit en ligne.`
                : `DAM cement complies with Moroccan NM 10.1.004 and European EN 197-1 standards. Each batch is lab-tested before shipping. To order cement in ${cityName}, contact us at +212 658-265685 or request a free online quote.`}
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? `Questions fréquentes — Ciment ${cityName}` : `FAQ — Cement ${cityName}`}
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

      <CtaBanner locale={locale} />
    </>
  );
}
