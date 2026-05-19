'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

const projectImages = [
  '/images/projects/residential-construction.jpg',
  '/images/projects/infrastructure-road.jpg',
  '/images/projects/port-construction.jpg',
  '/images/projects/school-construction.jpg',
  '/images/projects/villa-construction.jpg',
];

export default function RealisationsPage() {
  const t = useTranslations();

  const projects = [
    { key: 'project1', image: projectImages[0] },
    { key: 'project2', image: projectImages[1] },
    { key: 'project3', image: projectImages[2] },
    { key: 'project4', image: projectImages[3] },
    { key: 'project5', image: projectImages[4] },
  ];

  return (
    <>
      <PageHero title={t('realisations.title')} subtitle={t('realisations.subtitle')} sectionCounter="/06" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.key} delay={i * 0.1}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
                  <div className="relative h-56 md:h-64">
                    <Image
                      src={project.image}
                      alt={t(`realisations.${project.key}.title`)}
                      fill
                      quality={90}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[#1B3A5C]">{t(`realisations.${project.key}.title`)}</h3>
                    <p className="mt-3 text-[#6B7280] leading-relaxed">{t(`realisations.${project.key}.desc`)}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-[#6B7280]">
                      <MapPin className="w-4 h-4 text-[#1B3A5C]" />
                      {t(`realisations.${project.key}.location`)}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
