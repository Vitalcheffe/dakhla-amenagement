'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/Animations';

const articleImages: Record<string, string> = {
  'choisir-ciment-projet': '/images/cement-bags.jpg',
  'capacite-500k-tonnes': '/images/factory-exterior.jpg',
  'normes-ciment-maroc': '/images/quality-lab.jpg',
  'construction-durable-ciment': '/images/sustainability.jpg',
  'projet-infrastructure-dakhla': '/images/construction-site.jpg',
  'stockage-ciment-chantier': '/images/grinding-process.jpg',
  'cpj45-vs-cpj55-guide': '/images/products/cpj45-bags.jpg',
  'calculer-quantite-ciment': '/images/construction-site.jpg',
  'beton-arme-maroc': '/images/projects/villa-construction.jpg',
  'dakhla-pole-developpement': '/images/dakhla-aerial.jpg',
  'role-gypse-ciment': '/images/process/step2-grinding.jpg',
  'conditionnement-vrac': '/images/products/bulk-cement-truck.jpg',
  'construction-zone-cotiere': '/images/projects/port-construction.jpg',
  '10-ans-excellence': '/images/factory/factory-exterior.jpg',
  'devenir-revendeur': '/images/products/big-bag-cement.jpg',
  'transport-ciment-logistique': '/images/delivery/concrete-delivery.jpg',
  'rse-communaute-dakhla': '/images/sustainability.jpg',
  'essais-resistance-ciment': '/images/lab/lab-compression-test.jpg',
  'big-bag-vs-sacs': '/images/products/cpj55-bags.jpg',
  '5-erreurs-ciment': '/images/cement-bags.jpg',
};

const articleMap: Record<string, number> = {
  'choisir-ciment-projet': 1,
  'capacite-500k-tonnes': 2,
  'normes-ciment-maroc': 3,
  'construction-durable-ciment': 4,
  'projet-infrastructure-dakhla': 5,
  'stockage-ciment-chantier': 6,
  'cpj45-vs-cpj55-guide': 7,
  'calculer-quantite-ciment': 8,
  'beton-arme-maroc': 9,
  'dakhla-pole-developpement': 10,
  'role-gypse-ciment': 11,
  'conditionnement-vrac': 12,
  'construction-zone-cotiere': 13,
  '10-ans-excellence': 14,
  'devenir-revendeur': 15,
  'transport-ciment-logistique': 16,
  'rse-communaute-dakhla': 17,
  'essais-resistance-ciment': 18,
  'big-bag-vs-sacs': 19,
  '5-erreurs-ciment': 20,
};

const articleSlugs = [
  'choisir-ciment-projet',
  'capacite-500k-tonnes',
  'normes-ciment-maroc',
  'construction-durable-ciment',
  'projet-infrastructure-dakhla',
  'stockage-ciment-chantier',
  'cpj45-vs-cpj55-guide',
  'calculer-quantite-ciment',
  'beton-arme-maroc',
  'dakhla-pole-developpement',
  'role-gypse-ciment',
  'conditionnement-vrac',
  'construction-zone-cotiere',
  '10-ans-excellence',
  'devenir-revendeur',
  'transport-ciment-logistique',
  'rse-communaute-dakhla',
  'essais-resistance-ciment',
  'big-bag-vs-sacs',
  '5-erreurs-ciment',
];

export default function BlogArticlePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const slug = (params?.slug as string) || '';
  const articleNum = articleMap[slug] || 1;
  const image = articleImages[slug] || '/images/factory-exterior.jpg';

  // Get translated article body from i18n
  const validSlug = articleSlugs.includes(slug) ? slug : 'choisir-ciment-projet';
  // Access nested translation key for article body
  const bodyKey = `blog.article.bodies.${validSlug}`;
  let body: string[] = [];
  try {
    // Use raw translation access to get array of paragraphs
    const rawBody = t.raw(bodyKey);
    if (Array.isArray(rawBody)) {
      body = rawBody;
    }
  } catch {
    body = [];
  }

  return (
    <>
      {/* Article Hero */}
      <section className="pt-24 md:pt-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> {t('blog.article.backToBlog')}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-[#1B3A5C] bg-[#1B3A5C]/5 px-2.5 py-1 rounded-full">
              {t(`blog.articles.article${articleNum}.category`)}
            </span>
            <span className="text-xs text-[#6B7280]">{t('blog.article.publishedOn')} {t(`blog.articles.article${articleNum}.date`)}</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-[#1B3A5C] leading-tight">
            {t(`blog.articles.article${articleNum}.title`)}
          </h1>

          <p className="mt-2 text-sm text-[#6B7280]">{t('blog.article.by')} {t('blog.article.author')}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={t(`blog.articles.article${articleNum}.title`)}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {body.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-[#1B3A5C] mb-4">{t('blog.article.ctaTitle')}</h3>
            <Link href={`/${locale}/devis`}>
              <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-8 h-12">
                {t('blog.article.ctaButton')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
