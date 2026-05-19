'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const navItems = [
  { key: 'about', href: '/about' },
  { key: 'solutions', href: '/solutions' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'medias', href: '/medias' },
  { key: 'careers', href: '/careers' },
  { key: 'investors', href: '/investors' },
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

  const headerBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-sm border-b border-border';
  const logoColor = isHome && !scrolled ? 'text-white' : 'text-[#0A0A0A]';
  const logoBoxBg = isHome && !scrolled ? 'bg-white' : 'bg-[#0A0A0A]';
  const logoLetter = isHome && !scrolled ? 'text-[#0A0A0A]' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className={`w-8 h-8 ${logoBoxBg} rounded-sm flex items-center justify-center transition-colors duration-300`}>
              <span className={`${logoLetter} font-mono font-bold text-sm transition-colors duration-300`}>D</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-sm font-bold tracking-[0.15em] ${logoColor} leading-none transition-colors duration-300`}>DAM</span>
              <span className={`text-[8px] font-medium tracking-[0.25em] uppercase leading-none mt-0.5 ${isHome && !scrolled ? 'text-white/50' : 'text-black/40'} transition-colors duration-300`}>CIMENT</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const href = `/${locale}${item.href}`;
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-3 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? `${isHome && !scrolled ? 'bg-white/15 text-white' : 'bg-[#0A0A0A] text-white'}`
                      : `${isHome && !scrolled ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-black/60 hover:text-black hover:bg-black/5'}`
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
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{otherLocale}</span>
            </Link>

            <Link
              href={`/${locale}/contact`}
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-full transition-all duration-300 ${
                isHome && !scrolled
                  ? 'bg-white text-[#0A0A0A] hover:bg-white/90'
                  : 'bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90'
              }`}
            >
              {t('contact')}
              <ArrowUpRight className="w-3.5 h-3.5" />
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
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#0A0A0A] rounded-sm flex items-center justify-center">
                      <span className="text-white font-mono font-bold text-sm">D</span>
                    </div>
                    <span className="text-sm font-bold tracking-[0.15em]">DAM</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="p-6 space-y-1">
                  {navItems.map((item) => {
                    const href = `/${locale}${item.href}`;
                    const isActive = pathname.startsWith(href);
                    return (
                      <Link
                        key={item.key}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive ? 'bg-[#0A0A0A] text-white' : 'text-black/60 hover:text-black hover:bg-black/5'
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    );
                  })}
                  <div className="pt-4 border-t border-border mt-4">
                    <Link
                      href={`/${locale}/contact`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0A0A0A] text-white text-sm font-semibold rounded-full"
                    >
                      {t('contact')}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="pt-4">
                    <Link
                      href={switchPath}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-black/60"
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
