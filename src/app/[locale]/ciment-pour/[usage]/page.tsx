import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { CEMENT_USAGES, getUsage } from '@/lib/cement-usages';
import { CheckCircle, ArrowRight, Beaker } from 'lucide-react';

export function generateStaticParams() {
  return SITE.locales.flatMap((locale) =>
    CEMENT_USAGES.map((usage) => ({ locale, usage: usage.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; usage: string }>;
}) {
  const { locale, usage } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const usageData = getUsage(usage);
  if (!usageData) return buildMetadata({ locale: loc, path: '', title: 'Not Found', description: '', noIndex: true });

  const label = loc === 'fr' ? usageData.labelFr : usageData.labelEn;

  return buildMetadata({
    locale: loc,
    path: `/ciment-pour/${usage}`,
    title: loc === 'fr'
      ? `Ciment pour ${label} — Quel Ciment Choisir ? | DAM`
      : `Cement for ${label} — Which Cement to Choose? | DAM`,
    description: loc === 'fr'
      ? `Ciment pour ${label} : quel type choisir, dosage recommandé, conseils pratiques. CPJ 45 ou CPJ 55 pour ${label}. Conforme NM 10.1.004. Devis gratuit.`
      : `Cement for ${label}: which type to choose, recommended dosage, practical tips. CPJ 45 or CPJ 55 for ${label}. NM 10.1.004 compliant. Free quote.`,
    keywords: [`ciment pour ${label}`, `ciment ${label}`, `dosage ciment ${label}`, ...KEYWORDS.core],
  });
}

export default async function CimentPourPage({
  params,
}: {
  params: Promise<{ locale: string; usage: string }>;
}) {
  const { locale, usage } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const usageData = getUsage(usage);
  if (!usageData) return null;

  const isFr = loc === 'fr';
  const label = isFr ? usageData.labelFr : usageData.labelEn;
  const description = isFr ? usageData.descriptionFr : usageData.descriptionEn;

  const faqItems = [
    {
      question: isFr ? `Quel ciment pour ${label} ?` : `Which cement for ${label}?`,
      answer: isFr
        ? `Pour ${label}, nous recommandons le ciment ${usageData.recommendedCement}. ${usageData.recommendedCement === 'CPJ 55' ? 'Sa haute résistance (55 MPa) est idéale pour les ouvrages exigeants.' : 'Sa résistance (45 MPa) est adaptée à cet usage.'} Dosage recommandé: ${usageData.dosage}.`
        : `For ${label}, we recommend ${usageData.recommendedCement} cement. Dosage: ${usageData.dosage}.`,
    },
    {
      question: isFr ? `Quel dosage de ciment pour ${label} ?` : `What cement dosage for ${label}?`,
      answer: isFr
        ? `Le dosage recommandé pour ${label} est de ${usageData.dosage}. Ce dosage peut varier selon les conditions spécifiques du chantier et les exigences structurelles.`
        : `The recommended dosage for ${label} is ${usageData.dosage}. This may vary based on site conditions.`,
    },
    {
      question: isFr ? `Combien de ciment pour ${label} ?` : `How much cement for ${label}?`,
      answer: isFr
        ? `Utilisez notre calculateur de dosage pour estimer la quantité exacte de ciment nécessaire pour votre projet de ${label}. Entrez les dimensions et obtenez le tonnage.`
        : `Use our dosage calculator to estimate the exact cement quantity needed for your ${label} project.`,
    },
    {
      question: isFr ? `Prix du ciment pour ${label} ?` : `Cement price for ${label}?`,
      answer: isFr
        ? `Le prix du ciment pour ${label} : ${usageData.recommendedCement === 'CPJ 45' ? 'CPJ 45 dès 1 500 DH/T' : 'CPJ 55 dès 1 600 DH/T'}. Demandez un devis gratuit pour un tarif personnalisé.`
        : `Cement price for ${label}: ${usageData.recommendedCement === 'CPJ 45' ? 'CPJ 45 from 1,500 DH/T' : 'CPJ 55 from 1,600 DH/T'}. Request a free quote.`,
    },
  ];

  const schemas = [
    webPageSchema({
      name: isFr ? `Ciment pour ${label} — DAM` : `Cement for ${label} — DAM`,
      description: isFr ? `Ciment pour ${label}: ${description}` : `Cement for ${label}: ${description}`,
      path: `/ciment-pour/${usage}`,
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? `Ciment pour ${label}` : `Cement for ${label}`, path: `/ciment-pour/${usage}` }], loc),
    serviceSchema({
      name: isFr ? `Ciment pour ${label}` : `Cement for ${label}`,
      description: isFr ? description : description,
      path: `/ciment-pour/${usage}`,
      locale: loc,
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? `Ciment pour ${label}` : `Cement for ${label}`, path: `/ciment-pour/${usage}` }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {usageData.category}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? `Ciment pour ${label}` : `Cement for ${label}`}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? `${description}. Ciment ${usageData.recommendedCement} recommandé, dosage ${usageData.dosage}. Conforme NM 10.1.004. Devis gratuit.`
              : `${description}. ${usageData.recommendedCement} cement recommended, dosage ${usageData.dosage}. NM 10.1.004 compliant. Free quote.`}
          </p>
          <Link href={`/${locale}/devis`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
            {isFr ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-[#1B3A5C]" />
              </div>
              <h3 className="font-bold text-[#1B3A5C] mb-2">{isFr ? 'Ciment recommandé' : 'Recommended cement'}</h3>
              <p className="text-2xl font-bold text-[#C1272D]">{usageData.recommendedCement}</p>
              <p className="text-sm text-[#6B7280] mt-2">
                {usageData.recommendedCement === 'CPJ 45' ? '45 MPa — 1 500 DH/T' : '55 MPa — 1 600 DH/T'}
              </p>
            </div>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#E8B84B]/10 flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-7 h-7 text-[#E8B84B]" />
              </div>
              <h3 className="font-bold text-[#1B3A5C] mb-2">{isFr ? 'Dosage' : 'Dosage'}</h3>
              <p className="text-2xl font-bold text-[#1B3A5C]">{usageData.dosage}</p>
              <p className="text-sm text-[#6B7280] mt-2">{isFr ? 'kg de ciment par m³' : 'kg cement per m³'}</p>
            </div>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#C1272D]/5 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-7 h-7 text-[#C1272D]" />
              </div>
              <h3 className="font-bold text-[#1B3A5C] mb-2">{isFr ? 'Calculateur' : 'Calculator'}</h3>
              <Link href={`/${locale}/calculateur-ciment`} className="text-sm font-medium text-[#C1272D] hover:underline">
                {isFr ? 'Calculer ma quantité →' : 'Calculate my quantity →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? `Ciment pour ${label} : guide complet` : `Cement for ${label}: complete guide`}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Pour ${description}, le choix du ciment est crucial. Dakhla Aménagement recommande le ciment ${usageData.recommendedCement} pour cet usage, avec un dosage de ${usageData.dosage}. Ce ciment est conforme aux normes marocaine NM 10.1.004 et européenne EN 197-1.`
                : `For ${description}, the choice of cement is crucial. Dakhla Aménagement recommends ${usageData.recommendedCement} cement for this use, with a dosage of ${usageData.dosage}. This cement complies with Moroccan NM 10.1.004 and European EN 197-1 standards.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Le ciment ${usageData.recommendedCement} offre une résistance de ${usageData.recommendedCement === 'CPJ 45' ? '45 MPa' : '55 MPa'} à 28 jours, ${usageData.recommendedCement === 'CPJ 45' ? 'adaptée à la plupart des projets de construction courants' : 'idéale pour les ouvrages exigeants et les environnements agressifs'}. Le dosage de ${usageData.dosage} assure la durabilité et la résistance nécessaires.`
                : `${usageData.recommendedCement} cement offers ${usageData.recommendedCement === 'CPJ 45' ? '45 MPa' : '55 MPa'} strength at 28 days. The dosage of ${usageData.dosage} ensures the necessary durability and strength.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? `Pour commander du ciment pour votre projet de ${label}, contactez Dakhla Aménagement au +212 658-265685 ou demandez un devis gratuit. Nous livrons dans tout le Maroc.`
                : `To order cement for your ${label} project, contact Dakhla Aménagement at +212 658-265685 or request a free quote. We deliver across Morocco.`}
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? `Questions fréquentes — Ciment pour ${label}` : `FAQ — Cement for ${label}`}
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
