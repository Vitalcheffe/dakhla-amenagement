import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { COMPARISONS, getComparison } from '@/lib/comparisons';
import { ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return SITE.locales.flatMap((locale) =>
    COMPARISONS.map((comp) => ({ locale, comparison: comp.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; comparison: string }>;
}) {
  const { locale, comparison } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const comp = getComparison(comparison);
  if (!comp) return buildMetadata({ locale: loc, path: '', title: 'Not Found', description: '', noIndex: true });

  const title = loc === 'fr' ? comp.titleFr : comp.titleEn;
  const desc = loc === 'fr' ? comp.descFr : comp.descEn;

  return buildMetadata({
    locale: loc,
    path: `/comparer/${comparison}`,
    title,
    description: desc,
    keywords: [...KEYWORDS.core, ...KEYWORDS.products],
  });
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ locale: string; comparison: string }>;
}) {
  const { locale, comparison } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const comp = getComparison(comparison);
  if (!comp) return null;

  const isFr = loc === 'fr';
  const title = isFr ? comp.titleFr : comp.titleEn;
  const desc = isFr ? comp.descFr : comp.descEn;

  const faqItems = [
    {
      question: isFr ? `${comp.leftLabel} ou ${comp.rightLabel} : lequel choisir ?` : `${comp.leftLabel} or ${comp.rightLabel}: which to choose?`,
      answer: isFr ? comp.winnerFr : comp.winnerEn,
    },
    {
      question: isFr ? `Quelle différence de prix entre ${comp.leftLabel} et ${comp.rightLabel} ?` : `Price difference between ${comp.leftLabel} and ${comp.rightLabel}?`,
      answer: isFr
        ? `Consultez le tableau comparatif ci-dessus pour les prix détaillés. Demandez un devis gratuit pour un tarif personnalisé.`
        : `See the comparison table above for detailed prices. Request a free quote for a personalized rate.`,
    },
  ];

  const schemas = [
    webPageSchema({ name: title, description: desc, path: `/comparer/${comparison}`, locale: loc }),
    breadcrumbSchema([{ name: title, path: `/comparer/${comparison}` }], loc),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: title, path: `/comparer/${comparison}` }]} locale={locale} />

      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">{desc}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Critère' : 'Criteria'}</th>
                  <th className="text-center py-4 px-4 text-[#1B3A5C] font-bold text-lg bg-[#1B3A5C]/5">{comp.leftLabel}</th>
                  <th className="text-center py-4 px-4 text-[#1B3A5C] font-bold text-lg bg-[#C1272D]/5">{comp.rightLabel}</th>
                </tr>
              </thead>
              <tbody>
                {comp.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-medium text-[#6B7280]">{row.feature}</td>
                    <td className="py-4 px-4 text-center font-semibold text-[#1B3A5C]">{row.leftVal}</td>
                    <td className="py-4 px-4 text-center font-semibold text-[#1B3A5C]">{row.rightVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-[#E8B84B]/10 border border-[#E8B84B]/30 rounded-xl p-6 text-center">
            <p className="text-sm text-[#6B7280] mb-2">{isFr ? 'Recommandation' : 'Recommendation'}</p>
            <p className="text-lg font-bold text-[#1B3A5C]">{isFr ? comp.winnerFr : comp.winnerEn}</p>
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/devis`} className="inline-flex items-center gap-2 px-8 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
              {isFr ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
