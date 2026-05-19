'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo-dam.svg"
                alt="Dakhla Aménagement"
                width={180}
                height={44}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1B3A5C] mb-4">{t('products')}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/produits`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('cpj45')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/produits`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('cpj55')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/processus`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('process')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/devis`} className="text-sm text-[#C1272D] hover:text-[#C1272D]/80 font-medium transition-colors">
                  {tNav('quote')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1B3A5C] mb-4">{t('company')}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/a-propos`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/realisations`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('realisations')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/mentions-legales`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('legal')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/mentions-legales`} className="text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors">
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1B3A5C] mb-4">{t('contactTitle')}</h4>
            <ul className="space-y-2.5 text-sm text-[#6B7280]">
              <li>{t('address')}</li>
              <li>
                <a href="mailto:contact@dakhla-amenagement.ma" className="hover:text-[#1B3A5C] transition-colors">
                  {t('email')}
                </a>
              </li>
              <li>
                <a href="tel:+2125XXXXXXXX" className="hover:text-[#1B3A5C] transition-colors">
                  {t('phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280]">{t('copyright')} {t('rights')}</p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/mentions-legales`} className="text-xs text-[#6B7280] hover:text-[#1B3A5C] transition-colors">{t('legal')}</Link>
            <Link href={`/${locale}/mentions-legales`} className="text-xs text-[#6B7280] hover:text-[#1B3A5C] transition-colors">{t('privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
