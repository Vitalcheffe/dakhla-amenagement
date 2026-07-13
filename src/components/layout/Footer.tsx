'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const isFr = locale === 'fr';
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-[#0f1f33] text-white">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-[#1B3A5C] via-[#E8B84B] to-[#C1272D]" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand + Social Links */}
          <div>
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-dam-white-v2.svg"
                alt="DAM - Dakhla Aménagement et Développement"
                width={196}
                height={196}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              {t('description')}
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/dakhla-amenagement"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8B84B] text-white/70 hover:text-[#1A1A2E] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/dakhlaamenagement"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8B84B] text-white/70 hover:text-[#1A1A2E] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/dakhlaamenagement"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8B84B] text-white/70 hover:text-[#1A1A2E] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Nos Solutions */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8B84B] mb-4">{t('solutions')}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/cpj-35`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('cpj35')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cpj-45`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('cpj45')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cpj-55`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('cpj55')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/beton-pret-emploi`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {isFr ? 'Béton Prêt à l\'Emploi' : 'Ready-Mix Concrete'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/devis`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('devis')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/temoignages`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('testimonials')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Entreprise */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8B84B] mb-4">{t('company')}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/a-propos`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/durabilite`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('sustainability')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/carrieres`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('careers')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/realisations`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('realisations')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Ressources */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8B84B] mb-4">{t('resources')}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/documents`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('documents')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/presse`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('press')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/investisseurs`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('investors')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/mentions-legales`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {t('legal')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-white/60 hover:text-[#E8B84B] transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">{t('copyright')} {t('rights')}</p>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@ciment-dam.com" className="text-xs text-white/40 hover:text-[#E8B84B] transition-colors">
              {t('email')}
            </a>
            <span className="text-xs text-white/20">|</span>
            <Link href={`/${locale}/mentions-legales`} className="text-xs text-white/40 hover:text-[#E8B84B] transition-colors">{t('legal')}</Link>
            <Link href={`/${locale}/mentions-legales`} className="text-xs text-white/40 hover:text-[#E8B84B] transition-colors">{t('privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
