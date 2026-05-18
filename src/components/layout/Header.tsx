'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const navKeys = [
  { key: 'home', href: '' },
  { key: 'about', href: '/about' },
  { key: 'process', href: '/process' },
  { key: 'products', href: '/products' },
  { key: 'quality', href: '/quality' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'careers', href: '/careers' },
  { key: 'investors', href: '/investors' },
  { key: 'news', href: '/news' },
  { key: 'contact', href: '/contact' },
];

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0">
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-navy leading-tight tracking-tight">
                DAKHLA
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-steel tracking-[0.2em] uppercase -mt-0.5">
                Aménagement S.A.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map((item) => {
              const href = item.href ? `/${locale}${item.href}` : `/${locale}`;
              const isActive = item.href
                ? pathname === href || pathname.startsWith(href + '/')
                : pathname === `/${locale}` || pathname === `/${locale}/`;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-navy bg-light-gray'
                      : 'text-warm-gray hover:text-navy hover:bg-light-gray/60'
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right side: Language Switch + Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link
              href={switchPath}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-warm-gray hover:text-navy rounded-md hover:bg-light-gray/60 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{otherLocale}</span>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5 text-navy" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-navy leading-tight">DAKHLA</span>
                    <span className="text-[10px] font-medium text-steel tracking-[0.2em] uppercase">
                      Aménagement S.A.
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fermer">
                    <X className="h-5 w-5 text-navy" />
                  </Button>
                </div>
                <nav className="p-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
                  {navKeys.map((item) => {
                    const href = item.href ? `/${locale}${item.href}` : `/${locale}`;
                    const isActive = item.href
                      ? pathname === href || pathname.startsWith(href + '/')
                      : pathname === `/${locale}` || pathname === `/${locale}/`;
                    return (
                      <Link
                        key={item.key}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? 'text-navy bg-light-gray'
                            : 'text-warm-gray hover:text-navy hover:bg-light-gray/60'
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
