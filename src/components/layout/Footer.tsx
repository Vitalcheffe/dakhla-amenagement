'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact');

  const companyLinks = [
    { key: 'about', href: `/${locale}/about` },
    { key: 'investors', href: `/${locale}/investors` },
    { key: 'careers', href: `/${locale}/careers` },
  ];

  const productLinks = [
    { key: 'solutions', href: `/${locale}/solutions` },
    { key: 'sustainability', href: `/${locale}/sustainability` },
    { key: 'medias', href: `/${locale}/medias` },
  ];

  const resourceLinks = [
    { key: 'contact', href: `/${locale}/contact` },
    { key: 'legal', href: `/${locale}/legal` },
    { key: 'sitemap', href: `/${locale}/sitemap` },
  ];

  return (
    <footer className="bg-anthracite text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="font-heading text-2xl font-bold tracking-wider text-white leading-tight">
                DAM
              </span>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-bleu-ocean -mt-0.5">
                CIMENT
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">{t('description')}</p>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-white/30">{t('rc')}</p>
              <p className="text-xs text-white/30">{t('ice')}</p>
              <p className="text-xs text-white/30">{t('if')}</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('company')}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('products')}
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('resources')}
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.key === 'legal' ? t('legal') : link.key === 'sitemap' ? t('sitemap') : tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-bleu-ocean shrink-0" />
                <span className="text-xs text-white/40">{tContact('phoneValue')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-bleu-ocean shrink-0" />
                <span className="text-xs text-white/40">contact@ciment-dam.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-bleu-ocean shrink-0 mt-0.5" />
                <span className="text-xs text-white/40">
                  {tContact('address.line1')}, {tContact('address.line2')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Ciment DAM — Dakhla Aménagement S.A. {t('rights')}
          </p>
          <p className="text-xs text-white/30">{t('madeIn')}</p>
        </div>
      </div>
    </footer>
  );
}
