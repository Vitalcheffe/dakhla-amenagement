'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

const footerNavItems = [
  { key: 'about', href: '/about' },
  { key: 'solutions', href: '/solutions' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'medias', href: '/medias' },
  { key: 'careers', href: '/careers' },
  { key: 'investors', href: '/investors' },
  { key: 'contact', href: '/contact' },
];

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-[#0A0A0A] font-mono font-bold text-sm">D</span>
              </div>
              <div>
                <span className="text-sm font-bold tracking-[0.15em]">DAM</span>
                <span className="text-[8px] tracking-[0.25em] text-white/40 ml-2">CIMENT</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">{t('company')}</h4>
            <ul className="space-y-2.5">
              {footerNavItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">{t('contact')}</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Angle rue Lagouira, Av. El Walae</li>
              <li>Dakhla, Maroc</li>
              <li>contact@dakhla-amenagement.ma</li>
              <li>+212 5XX-XXXXXX</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">{t('legal')}</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>RC: 7207</li>
              <li>ICE: 001726721000031</li>
              <li>IF: 46377920</li>
              <li>{t('capital')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; 2026 Dakhla Aménagement S.A. {t('rights')}</p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/legal`} className="text-xs text-white/30 hover:text-white/60 transition-colors">{tNav('legal')}</Link>
            <Link href={`/${locale}/sitemap`} className="text-xs text-white/30 hover:text-white/60 transition-colors">{tNav('sitemap')}</Link>
            <span className="text-xs text-white/30">{t('madeIn')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
