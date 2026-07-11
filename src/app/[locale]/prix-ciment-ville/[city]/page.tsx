import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { MOROCCAN_CITIES, getCity } from '@/lib/moroccan-cities';
import { CheckCircle, MapPin, Truck, Factory, ArrowRight, Package } from 'lucide-react';

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
    path: `/prix-ciment-ville/${city}`,
    title: loc === 'fr'
      ? `Prix Ciment ${cityName} — CPJ 45 & CPJ 55 | DAM`
      : `Cement Price ${cityName} — CPJ 45 & CPJ 55 | DAM`,
    description: loc === 'fr'
      ? `Prix du ciment à ${cityName}, ${cityData.region}. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Vrac, sacs 50kg, big bag. Livraison ${cityData.deliveryDelay}. Devis gratuit.`
      : `Cement price in ${cityName}, ${cityData.regionEn}. CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Bulk, 50kg bags, big bag. Delivery ${cityData.deliveryDelay}. Free quote.`,
    keywords: [`prix ciment ${cityName}`, `prix ciment ${cityData.region}`, `ciment pas cher ${cityName}`, ...KEYWORDS.pricing, ...KEYWORDS.core],
  });
}

export default async function PrixCimentVillePage({
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
      question: isFr ? `Quel est le prix du ciment à ${cityName} ?` : `What is the cement price in ${cityName}?`,
      answer: isFr
        ? `Le prix du ciment à ${cityName} (${region}) : CPJ 45 vrac 1 500 DH/T, sacs 1 550 DH/T, big bag 1 580 DH/T ; CPJ 55 vrac 1 600 DH/T, sacs 1 650 DH/T, big bag 1 680 DH/T. Devis personnalisé gratuit.`
        : `Cement price in ${cityName} (${region}): CPJ 45 bulk 1,500 DH/T, bags 1,550 DH/T, big bag 1,580 DH/T; CPJ 55 bulk 1,600 DH/T, bags 1,650 DH/T, big bag 1,680 DH/T. Free custom quote.`,
    },
    {
      question: isFr ? `Le prix du ciment à ${cityName} inclut-il la livraison ?` : `Does the cement price in ${cityName} include delivery?`,
      answer: isFr
        ? `Les tarifs indiqués sont départ Dakhla. La livraison vers ${cityName} (${cityData.distanceFromDakhla} km, délai ${cityData.deliveryDelay}) est facturée selon le conditionnement et la quantité. Demandez un devis pour un prix tout compris.`
        : `Listed prices are ex-Dakhla. Delivery to ${cityName} (${cityData.distanceFromDakhla} km, ${cityData.deliveryDelay} delay) is charged based on packaging and quantity. Request a quote for an all-inclusive price.`,
    },
    {
      question: isFr ? `Quel ciment est le plus économique à ${cityName} ?` : `Which cement is the most economical in ${cityName}?`,
      answer: isFr
        ? `Le CPJ 45 en vrac est l'option la plus économique à ${cityName} (1 500 DH/T), idéal pour le béton armé courant. Pour les ouvrages exigeants, le CPJ 55 (1 600 DH/T vrac) offre une résistance supérieure à 55 MPa.`
        : `CPJ 45 in bulk is the most economical option in ${cityName} (1,500 DH/T), ideal for standard reinforced concrete. For demanding structures, CPJ 55 (1,600 DH/T bulk) offers higher 55 MPa resistance.`,
    },
    {
      question: isFr ? `Comment obtenir un devis pour le ciment à ${cityName} ?` : `How to get a cement quote in ${cityName}?`,
      answer: isFr
        ? `Pour un devis gratuit à ${cityName}, contactez-nous au +212 658-265685 ou via le formulaire en ligne sur ciment-dam.com. Précisez la quantité, le type (CPJ 45/CPJ 55) et le conditionnement (vrac, sacs, big bag).`
        : `For a free quote in ${cityName}, contact us at +212 658-265685 or via the online form on ciment-dam.com. Specify quantity, type (CPJ 45/CPJ 55) and packaging (bulk, bags, big bag).`,
    },
  ];

  const schemas = [
    webPageSchema({
      name: isFr ? `Prix Ciment ${cityName} — Dakhla Aménagement` : `Cement Price ${cityName} — Dakhla Aménagement`,
      description: isFr
        ? `Prix du ciment CPJ 45 et CPJ 55 à ${cityName}, ${region}. Dès 1 500 DH/T.`
        : `CPJ 45 and CPJ 55 cement price in ${cityName}, ${region}. From 1,500 DH/T.`,
      path: `/prix-ciment-ville/${city}`,
      locale: loc,
    }),
    breadcrumbSchema([{ name: `${isFr ? 'Prix Ciment' : 'Cement Price'} ${cityName}`, path: `/prix-ciment-ville/${city}` }], loc),
    serviceSchema({
      name: isFr ? `Prix Ciment ${cityName}` : `Cement Price ${cityName}`,
      description: isFr ? `Tarifs du ciment à ${cityName}` : `Cement pricing in ${cityName}`,
      path: `/prix-ciment-ville/${city}`,
      locale: loc,
    }),
    faqSchema(faqItems),
  ];

  // Pricing table data (DH/T)
  const priceRows = [
    {
      grade: 'CPJ 45',
      vrac: '1 500 DH/T',
      sacs: '1 550 DH/T',
      bigBag: '1 580 DH/T',
      use: isFr ? 'Béton armé, dallages, maçonnerie' : 'Reinforced concrete, slabs, masonry',
    },
    {
      grade: 'CPJ 55',
      vrac: '1 600 DH/T',
      sacs: '1 650 DH/T',
      bigBag: '1 680 DH/T',
      use: isFr ? 'Génie civil, infrastructure, ouvrages exigeants' : 'Civil engineering, infrastructure, demanding structures',
    },
  ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production Locale', desc: `Centre de broyage à Dakhla, capacité 500K T/an` },
        { icon: Truck, title: 'Livraison', desc: `${cityData.deliveryDelay} vers ${cityName} (${cityData.distanceFromDakhla} km)` },
        { icon: CheckCircle, title: 'Qualité Certifiée', desc: 'Conforme NM 10.1.004 et EN 197-1' },
        { icon: MapPin, title: 'Zone Desservie', desc: `${cityName}, ${region}` },
      ]
    : [
        { icon: Factory, title: 'Local Production', desc: `Dakhla grinding plant, 500K T/year capacity` },
        { icon: Truck, title: 'Delivery', desc: `${cityData.deliveryDelay} to ${cityName} (${cityData.distanceFromDakhla} km)` },
        { icon: CheckCircle, title: 'Certified Quality', desc: 'NM 10.1.004 and EN 197-1 compliant' },
        { icon: MapPin, title: 'Service Area', desc: `${cityName}, ${region}` },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: `${isFr ? 'Prix Ciment' : 'Cement Price'} ${cityName}`, path: `/prix-ciment-ville/${city}` }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? `Tarifs — ${region}` : `Pricing — ${region}`}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? `Prix du Ciment à ${cityName}` : `Cement Price in ${cityName}`}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? `Prix du ciment CPJ 45 et CPJ 55 à ${cityName}, ${region}. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Vrac, sacs 50kg, big bag 1T. Livraison ${cityData.deliveryDelay} depuis Dakhla. Devis gratuit.`
              : `CPJ 45 and CPJ 55 cement price in ${cityName}, ${region}. CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Bulk, 50kg bags, 1T big bag. Delivery ${cityData.deliveryDelay} from Dakhla. Free quote.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/devis`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
              {isFr ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/${locale}/livraison-ciment-ville/${city}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              {isFr ? 'Voir la livraison' : 'View delivery'}
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

      {/* Pricing Table */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? `Tarifs du ciment à ${cityName}` : `Cement pricing in ${cityName}`}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? `Prix indicatifs départ Dakhla, valables pour ${cityName} et la région de ${region}. Les tarifs définitifs dépendent de la quantité et du conditionnement.`
              : `Indicative prices ex-Dakhla, valid for ${cityName} and the ${region} region. Final prices depend on quantity and packaging.`}
          </p>

          <div className="overflow-x-auto bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left px-4 md:px-6 py-4 font-semibold">{isFr ? 'Grade' : 'Grade'}</th>
                  <th className="text-left px-4 md:px-6 py-4 font-semibold">{isFr ? 'Vrac' : 'Bulk'}</th>
                  <th className="text-left px-4 md:px-6 py-4 font-semibold">{isFr ? 'Sacs 50kg' : '50kg bags'}</th>
                  <th className="text-left px-4 md:px-6 py-4 font-semibold">{isFr ? 'Big bag 1T' : 'Big bag 1T'}</th>
                  <th className="text-left px-4 md:px-6 py-4 font-semibold">{isFr ? 'Usage' : 'Use'}</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row, i) => (
                  <tr key={row.grade} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F7F8FA]'}>
                    <td className="px-4 md:px-6 py-4 font-bold text-[#1B3A5C]">{row.grade}</td>
                    <td className="px-4 md:px-6 py-4 font-semibold text-[#C1272D]">{row.vrac}</td>
                    <td className="px-4 md:px-6 py-4 font-semibold">{row.sacs}</td>
                    <td className="px-4 md:px-6 py-4 font-semibold">{row.bigBag}</td>
                    <td className="px-4 md:px-6 py-4 text-[#6B7280]">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Truck,
                title: isFr ? 'Vrac' : 'Bulk',
                desc: isFr
                  ? `Camions-citernes 25-30T, idéal pour les chantiers avec silo. Prix le plus bas à ${cityName}.`
                  : `Tanker trucks 25-30T, ideal for sites with silo. Lowest price in ${cityName}.`,
              },
              {
                icon: Package,
                title: isFr ? 'Sacs 50kg' : '50kg bags',
                desc: isFr
                  ? `Palette 1,5T filmée. Manipulation manuelle, stockage facile. Adapté aux petits chantiers de ${cityName}.`
                  : `1.5T wrapped pallet. Manual handling, easy storage. Suited for small ${cityName} sites.`,
              },
              {
                icon: Factory,
                title: isFr ? 'Big bag 1T' : 'Big bag 1T',
                desc: isFr
                  ? `Conditionnement intermédiaire, manutention grue. Compromis vrac/sacs pour ${cityName}.`
                  : `Intermediate packaging, crane handling. Compromise bulk/bags for ${cityName}.`,
              },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <div className="w-11 h-11 rounded-full bg-[#E8B84B]/15 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-[#E8B84B]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content + Delivery info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? `Prix du ciment à ${cityName} : tout savoir` : `Cement price in ${cityName}: everything you need to know`}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Vous cherchez le prix du ciment à ${cityName}, dans la région de ${region} ? Dakhla Aménagement (DAM) propose des tarifs compétitifs sur ses deux grades : CPJ 45 (45 MPa) dès 1 500 DH/T en vrac et CPJ 55 (55 MPa) dès 1 600 DH/T en vrac. Notre centre de broyage de clinker à Dakhla, d'une capacité annuelle de 500 000 tonnes, garantit un approvisionnement stable et des prix maîtrisés pour les chantiers de ${cityName}.`
                : `Looking for the cement price in ${cityName}, in the ${region} region? Dakhla Aménagement (DAM) offers competitive pricing on both grades: CPJ 45 (45 MPa) from 1,500 DH/T in bulk and CPJ 55 (55 MPa) from 1,600 DH/T in bulk. Our clinker grinding plant in Dakhla, with an annual capacity of 500,000 tons, ensures a stable supply and controlled prices for ${cityName} construction sites.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Trois conditionnements sont disponibles à ${cityName} : le vrac (camions-citernes 25 à 30 tonnes, économique pour les gros chantiers), les sacs de 50kg (palette 1,5T filmée, manipulation manuelle) et le big bag de 1 tonne (manutention grue, compromis idéal). Le prix augmente avec la manutention : comptez +50 DH/T pour les sacs et +80 DH/T pour le big bag par rapport au vrac.`
                : `Three packaging options are available in ${cityName}: bulk (tanker trucks 25 to 30 tons, economical for large sites), 50kg bags (1.5T wrapped pallet, manual handling) and the 1-ton big bag (crane handling, ideal compromise). The price increases with handling: expect +50 DH/T for bags and +80 DH/T for big bag compared to bulk.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `La livraison vers ${cityName} (${cityData.distanceFromDakhla} km depuis Dakhla, délai ${cityData.deliveryDelay}) est facturée en sus. Le tarif de transport dépend du conditionnement, de la quantité commandée et de l'accessibilité du chantier. Pour obtenir un prix tout compris livré à ${cityName}, demandez un devis gratuit : nos équipes répondent sous 24h avec une proposition adaptée à votre projet.`
                : `Delivery to ${cityName} (${cityData.distanceFromDakhla} km from Dakhla, ${cityData.deliveryDelay} delay) is billed in addition. Transport cost depends on packaging, quantity ordered and site accessibility. To get an all-inclusive price delivered to ${cityName}, request a free quote: our teams respond within 24h with a proposal tailored to your project.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? `Le ciment DAM est conforme aux normes NM 10.1.004 et EN 197-1. Chaque lot est testé en laboratoire avant expédition. Pour un devis prix ciment à ${cityName}, contactez-nous au +212 658-265685 ou via le formulaire ciment-dam.com.`
                : `DAM cement complies with Moroccan NM 10.1.004 and European EN 197-1 standards. Each batch is lab-tested before shipping. For a cement price quote in ${cityName}, contact us at +212 658-265685 or via the ciment-dam.com form.`}
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? `Questions fréquentes — Prix ciment ${cityName}` : `FAQ — Cement price ${cityName}`}
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
