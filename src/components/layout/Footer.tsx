'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact');

  const quickLinks = [
    { key: 'about', href: `/${locale}/about` },
    { key: 'products', href: `/${locale}/products` },
    { key: 'quality', href: `/${locale}/quality` },
    { key: 'sustainability', href: `/${locale}/sustainability` },
    { key: 'careers', href: `/${locale}/careers` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-xl font-bold text-white leading-tight">DAKHLA</span>
              <span className="text-xs font-medium text-steel tracking-[0.2em] uppercase -mt-0.5">
                Aménagement S.A.
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-steel shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  {tContact('address.line1')}
                  <br />
                  {tContact('address.line2')}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-steel shrink-0" />
                <span className="text-sm text-white/70">+212 5XX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-steel shrink-0" />
                <span className="text-sm text-white/70">contact@dakhla-amenagement.ma</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('legal')}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/legal`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t('legal')}
                </Link>
              </li>
              <li className="text-sm text-white/50">
                RC: 7207
              </li>
              <li className="text-sm text-white/50">
                ICE: 001726721000031
              </li>
              <li className="text-sm text-white/50">
                IF: 46377920
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Dakhla Aménagement S.A. {t('rights')}
          </p>
          <p className="text-xs text-white/50">{t('madeIn')}</p>
        </div>
      </div>
    </footer>
  );
}
