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
};

const articleMap: Record<string, number> = {
  'choisir-ciment-projet': 1,
  'capacite-500k-tonnes': 2,
  'normes-ciment-maroc': 3,
  'construction-durable-ciment': 4,
  'projet-infrastructure-dakhla': 5,
  'stockage-ciment-chantier': 6,
};

const articleBodies: Record<string, string[]> = {
  'choisir-ciment-projet': [
    'Le choix du ciment est une décision cruciale pour tout projet de construction. Les deux types de ciment les plus courants au Maroc sont le CPJ 42.5 et le CPJ 32.5, chacun avec ses caractéristiques propres.',
    'Le CPJ 42.5, avec sa résistance à la compression de 42.5 MPa à 28 jours, est le choix idéal pour les ouvrages exigeants : béton armé, fondations, dallages et ouvrages de génie civil. Sa résistance initiale élevée permet un décoffrage rapide.',
    'Le CPJ 32.5, plus économique, convient parfaitement aux travaux de maçonnerie courante, enduits et mortiers. Il est particulièrement adapté aux projets résidentiels et aux travaux de second œuvre.',
    'Pour les environnements côtiers comme Dakhla, il est recommandé de privilégier un ciment à haute résistance pour les ouvrages exposés aux embruns marins. Consultez notre équipe technique pour des recommandations personnalisées.',
  ],
  'capacite-500k-tonnes': [
    'Dakhla Aménagement S.A. continue de renforcer sa position comme acteur majeur de l\'industrie cimentière dans les Provinces du Sud. Avec une capacité de production en croissance constante, notre centre de broyage répond à la demande croissante du marché.',
    'L\'investissement continu dans nos équipements et nos processus nous permet de maintenir un niveau de qualité constant tout en augmentant nos volumes de production. Nos broyeurs à boulets haute performance garantissent une finesse de broyage optimale.',
    'Cette capacité étendue nous permet de servir non seulement le marché local de Dakhla, mais aussi l\'ensemble du Sud marocain et la Mauritanie voisine, contribuant ainsi au développement économique régional.',
  ],
  'normes-ciment-maroc': [
    'La norme marocaine NM 10.1.004 et la norme européenne EN 197-1 définissent les spécifications auxquelles doivent se conformer les ciments commercialisés au Maroc. Ces normes garantissent la qualité et la sécurité des ouvrages.',
    'Le CPJ 42.5 et le CPJ 32.5 sont classés comme ciments Portland composés (CEM II). Ils contiennent du clinker Portland et des constituants secondaires dans des proportions réglementées.',
    'Chez Dakhla Aménagement, chaque lot de production est soumis à des tests exhaustifs : résistance à la compression, finesse de broyage (surface Blaine), temps de prise, stabilité et chaleur d\'hydratation. Aucun produit ne quitte l\'usine sans certificat de conformité.',
  ],
  'construction-durable-ciment': [
    'L\'industrie cimentière est confrontée au défi majeur de réduire son empreinte carbone. Chez Dakhla Aménagement, nous investissons dans des technologies d\'efficacité énergétique avancées et des procédés de broyage optimisés.',
    'L\'utilisation de constituants secondaires comme les cendres volantes et le laitier de haut fourneau permet de réduire la quantité de clinker nécessaire, diminuant ainsi les émissions de CO₂ par tonne de ciment produite.',
    'Notre démarche environnementale inclut également le recyclage des eaux de process, la filtration des émissions conformément aux normes MARHP, et une gestion responsable des déchets industriels.',
  ],
  'projet-infrastructure-dakhla': [
    'Dakhla connaît un développement infrastructurel sans précédent. Nouvelles routes, extensions portuaires, équipements publics — ces projets majeurs nécessitent des approvisionnements en ciment fiables et de qualité.',
    'Dakhla Aménagement est fière de contribuer à ces chantiers en fournissant du ciment CPJ 42.5 pour les ouvrages d\'art et les fondations, et du CPJ 32.5 pour les travaux de maçonnerie et de finition.',
    'Notre logistique optimisée et notre proximité avec les chantiers permettent des livraisons rapides, même pour les commandes urgentes. Nous accompagnons nos clients de la commande à la livraison.',
  ],
  'stockage-ciment-chantier': [
    'Un stockage adéquat du ciment sur chantier est essentiel pour préserver ses propriétés. Le ciment doit être protégé de l\'humidité, stocké sur des palettes et idéalement dans un local couvert et ventilé.',
    'La durée de conservation du ciment est limitée : comptez environ 3 mois pour le ciment en sacs stocké dans de bonnes conditions. Au-delà, la résistance peut diminuer significativement.',
    'Pour les grandes quantités, le stockage en silo est recommandé. Dakhla Aménagement propose la livraison en vrac avec mise en silo directe, garantissant une qualité optimale du produit jusqu\'à son utilisation.',
  ],
};

export default function BlogArticlePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const slug = (params?.slug as string) || '';
  const articleNum = articleMap[slug] || 1;
  const image = articleImages[slug] || '/images/factory-exterior.jpg';
  const body = articleBodies[slug] || articleBodies['choisir-ciment-projet'];

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
