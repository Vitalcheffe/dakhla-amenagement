'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'products', href: '/produits' },
  { key: 'process', href: '/processus' },
  { key: 'about', href: '/a-propos' },
  { key: 'realisations', href: '/realisations' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
];

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHome && !scrolled
        ? 'bg-transparent'
        : 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]'
    } ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — SVG contains shield + company name */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/images/logo-dam.svg"
              alt="Dakhla Aménagement"
              width={180}
              height={44}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const href = item.href === '/' ? `/${locale}` : `/${locale}${item.href}`;
              const isActive = item.href === '/'
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname.startsWith(`/${locale}${item.href}`);
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? isHome && !scrolled
                        ? 'text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#E8B84B]'
                        : 'text-[#1B3A5C] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#1B3A5C]'
                      : isHome && !scrolled
                        ? 'text-white/70 hover:text-white'
                        : 'text-[#6B7280] hover:text-[#1B3A5C]'
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href={switchPath}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 ${
                isHome && !scrolled
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-[#6B7280] hover:text-[#1B3A5C] hover:bg-[#1B3A5C]/5'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{otherLocale}</span>
            </Link>

            <Link
              href={`/${locale}/devis`}
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-full transition-all duration-300 bg-[#C1272D] text-white hover:bg-[#C1272D]/90`}
            >
              {t('quote')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu" className={isHome && !scrolled ? 'text-white hover:bg-white/10' : ''}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
                  <Image
                    src="/images/logo-dam.svg"
                    alt="Dakhla Aménagement"
                    width={160}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="p-6 space-y-1">
                  {navItems.map((item) => {
                    const href = item.href === '/' ? `/${locale}` : `/${locale}${item.href}`;
                    const isActive = item.href === '/'
                      ? pathname === `/${locale}` || pathname === `/${locale}/`
                      : pathname.startsWith(`/${locale}${item.href}`);
                    return (
                      <Link
                        key={item.key}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive ? 'bg-[#1B3A5C] text-white' : 'text-[#6B7280] hover:text-[#1B3A5C] hover:bg-[#1B3A5C]/5'
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    );
                  })}
                  <div className="pt-4 border-t border-[#E5E7EB] mt-4">
                    <Link
                      href={`/${locale}/devis`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-[#C1272D] text-white text-sm font-semibold rounded-full"
                    >
                      {t('quote')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="pt-4">
                    <Link
                      href={switchPath}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#6B7280]"
                    >
                      <Globe className="w-4 h-4" />
                      {otherLocale.toUpperCase()}
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
