import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  organizationSchema,
  faqSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { Award, Beaker, Factory, Users, FileCheck } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  return buildMetadata({
    locale: loc,
    path: '/expertise-certifications',
    title: loc === 'fr'
      ? 'Certifications Ciment — NM/EN/ISO | SDAD'
      : 'Certifications Ciment — NM/EN/ISO | SDAD',
    description: loc === 'fr'
      ? "Expertise reconnue de Dakhla Aménagement et Développement: certifications NM 10.1.004, EN 197-1, ISO 9001. Laboratoire qualité, contrôle chaque lot. Équipe d'ingénieurs expérimentés."
      : "Recognized expertise of Dakhla Aménagement et Développement: NM 10.1.004, EN 197-1, ISO 9001 certifications. Quality lab, batch control. Experienced engineering team.",
    keywords: ['certification ciment', 'NM 10.1.004', 'EN 197-1', 'ISO 9001', 'qualité ciment', ...KEYWORDS.core],
  });
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const isFr = loc === 'fr';

  const certifications = [
    { code: 'NM 10.1.004', nameFr: 'Norme Marocaine Ciment', nameEn: 'Moroccan Cement Standard', descFr: 'Conformité aux spécifications des ciments Portland composés au Maroc', descEn: 'Compliance with Moroccan composite Portland cement specifications', year: '2015' },
    { code: 'EN 197-1', nameFr: 'Norme Européenne', nameEn: 'European Standard', descFr: 'Conformité à la norme européenne pour ciments courants', descEn: 'Compliance with European standard for common cements', year: '2015' },
    { code: 'ISO 9001', nameFr: 'Système Management Qualité', nameEn: 'Quality Management System', descFr: 'Certification du système de management de la qualité', descEn: 'Quality management system certification', year: '2018' },
    { code: 'ISO 14001', nameFr: 'Management Environnemental', nameEn: 'Environmental Management', descFr: 'Système de management environnemental', descEn: 'Environmental management system', year: '2020' },
  ];

  const expertise = [
    { icon: Beaker, titleFr: 'Laboratoire Qualité', titleEn: 'Quality Laboratory', descFr: 'Laboratoire équipé pour tests de résistance, finesse, temps de prise. Chaque lot testé avant expédition.', descEn: 'Equipped lab for strength, fineness, setting time tests. Every batch tested before shipping.' },
    { icon: Factory, titleFr: 'Production 500K T/an', titleEn: '500K T/year Production', descFr: 'Centre de broyage moderne d\'une capacité de 500 000 tonnes par an.', descEn: 'Modern grinding plant with 500,000 tons per year capacity.' },
    { icon: Users, titleFr: 'Équipe d\'Ingénieurs', titleEn: 'Engineering Team', descFr: 'Ingénieurs matériaux et chimistes spécialisés en cimenterie.', descEn: 'Material engineers and chemists specialized in cement manufacturing.' },
    { icon: FileCheck, titleFr: 'Traçabilité Totale', titleEn: 'Full Traceability', descFr: 'Chaque lot est tracé du clinker à la livraison. Documentation complète disponible.', descEn: 'Every batch traced from clinker to delivery. Full documentation available.' },
  ];

  const team = [
    { name: 'Direction Générale', roleFr: 'Stratégie & Développement', roleEn: 'Strategy & Development', expertiseFr: '30+ ans dans l\'industrie cimentière', expertiseEn: '30+ years in cement industry' },
    { name: 'Direction Technique', roleFr: 'Production & Qualité', roleEn: 'Production & Quality', expertiseFr: 'Ingénieur matériaux, ex-LafargeHolcim', expertiseEn: 'Materials engineer, ex-LafargeHolcim' },
    { name: 'Direction Commerciale', roleFr: 'Ventes & Distribution', roleEn: 'Sales & Distribution', expertiseFr: 'Expert marché BTP Maroc et Mauritanie', expertiseEn: 'Morocco and Mauritania BTP market expert' },
    { name: 'Responsable Laboratoire', roleFr: 'Contrôle Qualité', roleEn: 'Quality Control', expertiseFr: 'Docteur en chimie des matériaux', expertiseEn: 'PhD in materials chemistry' },
  ];

  const faqItems = [
    {
      question: isFr ? 'Quelles certifications a Dakhla Aménagement et Développement ?' : 'What certifications does Dakhla Aménagement et Développement have?',
      answer: isFr
        ? 'SDAD est certifié NM 10.1.004 (norme marocaine), EN 197-1 (norme européenne), ISO 9001 (management qualité) et ISO 14001 (management environnemental).'
        : 'SDAD is certified NM 10.1.004 (Moroccan standard), EN 197-1 (European standard), ISO 9001 (quality management) and ISO 14001 (environmental management).',
    },
    {
      question: isFr ? 'Comment est contrôlée la qualité du ciment ?' : 'How is cement quality controlled?',
      answer: isFr
        ? 'Chaque lot de ciment est testé en laboratoire : résistance à la compression (7j et 28j), finesse Blaine, temps de prise, stabilité. Aucun lot n\'est expédié sans validation du laboratoire.'
        : 'Each cement batch is lab-tested: compressive strength (7 and 28 days), Blaine fineness, setting time, stability. No batch is shipped without lab validation.',
    },
    {
      question: isFr ? 'Quelle est la capacité de production ?' : 'What is the production capacity?',
      answer: isFr
        ? 'Notre centre de broyage à Dakhla a une capacité de 500 000 tonnes par an, soit environ 100 000 tonnes de plus qu\'à notre création en 2015.'
        : 'Our Dakhla grinding plant has a capacity of 500,000 tons per year, about 100,000 tons more than at creation in 2015.',
    },
    {
      question: isFr ? 'Le ciment est-il conforme aux normes marocaines ?' : 'Is the cement compliant with Moroccan standards?',
      answer: isFr
        ? 'Oui, tous nos ciments CPJ 45 et CPJ 55 sont conformes à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1. Les certificats de conformité sont disponibles sur demande.'
        : 'Yes, all our CPJ 45 and CPJ 55 cements comply with Moroccan NM 10.1.004 and European EN 197-1 standards. Certificates of conformity available on request.',
    },
  ];

  // Person schema for E-E-A-T
  const teamSchema = team.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: isFr ? member.roleFr : member.roleEn,
    knowsAbout: isFr ? member.expertiseFr : member.expertiseEn,
    worksFor: { '@id': `${SITE.url}/#organization` },
  }));

  const schemas = [
    webPageSchema({
      name: isFr ? 'Expertise & Certifications — SDAD' : 'Expertise & Certifications — SDAD',
      description: isFr ? 'Certifications et expertise de Dakhla Aménagement et Développement' : 'Certifications and expertise of Dakhla Aménagement et Développement',
      path: '/expertise-certifications',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Expertise & Certifications' : 'Expertise & Certifications', path: '/expertise-certifications' }], loc),
    organizationSchema(),
    faqSchema(faqItems),
    ...teamSchema,
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Expertise & Certifications' : 'Expertise & Certifications', path: '/expertise-certifications' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'E-E-A-T : Expertise & Confiance' : 'E-E-A-T: Expertise & Trust'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? 'Expertise & Certifications' : 'Expertise & Certifications'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? "Dakhla Aménagement et Développement (SDAD) — certifications NM 10.1.004, EN 197-1, ISO 9001, ISO 14001. Laboratoire qualité, contrôle de chaque lot, équipe d'ingénieurs expérimentés. Conformité garantie."
              : 'Dakhla Aménagement et Développement (SDAD) — NM 10.1.004, EN 197-1, ISO 9001, ISO 14001 certifications. Quality lab, batch control, experienced engineering team. Guaranteed compliance.'}
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? 'Nos Certifications' : 'Our Certifications'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-gradient-to-br from-[#F7F8FA] to-white border-2 border-[#E5E7EB] rounded-2xl p-6 text-center hover:border-[#E8B84B] transition-all">
                <div className="w-16 h-16 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#E8B84B]" />
                </div>
                <p className="text-lg font-bold text-[#1B3A5C] mb-1">{cert.code}</p>
                <p className="text-sm font-medium text-[#1B3A5C] mb-2">{isFr ? cert.nameFr : cert.nameEn}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed">{isFr ? cert.descFr : cert.descEn}</p>
                <p className="text-xs text-[#E8B84B] font-semibold mt-3">{isFr ? `Depuis ${cert.year}` : `Since ${cert.year}`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? 'Notre Expertise Technique' : 'Our Technical Expertise'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((exp, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mb-4">
                  <exp.icon className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{isFr ? exp.titleFr : exp.titleEn}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{isFr ? exp.descFr : exp.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team E-E-A-T */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Équipe de Direction' : 'Leadership Team'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Une équipe expérimentée garantissant l'expertise technique et la confiance."
              : 'An experienced team ensuring technical expertise and trust.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[#1B3A5C] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-[#1B3A5C]">{member.name}</h3>
                <p className="text-sm text-[#C1272D] font-medium mt-1">{isFr ? member.roleFr : member.roleEn}</p>
                <p className="text-xs text-[#6B7280] mt-2">{isFr ? member.expertiseFr : member.expertiseEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 bg-[#1B3A5C] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#E8B84B]">2015</p>
              <p className="text-sm text-white/60 mt-1">{isFr ? 'Année de création' : 'Founded'}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#E8B84B]">500K</p>
              <p className="text-sm text-white/60 mt-1">{isFr ? 'Tonnes/an' : 'Tons/year'}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#E8B84B]">4</p>
              <p className="text-sm text-white/60 mt-1">{isFr ? 'Certifications' : 'Certifications'}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#E8B84B]">100%</p>
              <p className="text-sm text-white/60 mt-1">{isFr ? 'Lots testés' : 'Batches tested'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions sur nos certifications' : 'Questions about our certifications'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-white border border-[#E5E7EB] rounded-xl p-5">
                <summary className="font-semibold text-[#1B3A5C] cursor-pointer">{item.question}</summary>
                <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
