'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';

const navItems = [
  { key: 'about', href: '/about' },
  { key: 'solutions', href: '/solutions' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'medias', href: '/medias' },
  { key: 'investors', href: '/investors' },
  { key: 'careers', href: '/careers' },
  { key: 'contact', href: '/contact' },
];

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const isActive = (href: string) => {
    return pathname === `/${locale}${href}` || pathname.startsWith(`/${locale}${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-anthracite/95 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0 group">
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-wider text-white group-hover:text-bleu-ocean transition-colors leading-tight">
                DAM
              </span>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-bleu-ocean -mt-0.5">
                CIMENT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const href = `/${locale}${item.href}`;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(item.key)}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-bleu-ocean rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side: Language Switch + Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link
              href={switchPath}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/50 hover:text-white rounded-md hover:bg-white/5 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{otherLocale}</span>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-anthracite border-white/10 p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex flex-col">
                    <span className="font-heading text-2xl font-bold tracking-wider text-white leading-tight">
                      DAM
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-bleu-ocean">
                      CIMENT
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
                    <X className="h-5 w-5 text-white" />
                  </Button>
                </div>
                <nav className="p-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
                  {navItems.map((item) => {
                    const href = `/${locale}${item.href}`;
                    return (
                      <Link
                        key={item.key}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-white bg-white/10'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    );
                  })}
                  {/* Language switcher in mobile nav */}
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <Link
                      href={switchPath}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="uppercase">{otherLocale}</span>
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
