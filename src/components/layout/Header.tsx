'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const standaloneItems = [
  { key: 'home', href: '' },
  { key: 'about', href: '/about' },
];

const dropdownGroups = [
  {
    key: 'productsServices',
    items: [
      { key: 'products', href: '/products' },
      { key: 'process', href: '/process' },
      { key: 'quality', href: '/quality' },
      { key: 'facilities', href: '/facilities' },
      { key: 'certifications', href: '/certifications' },
      { key: 'quote', href: '/quote' },
    ],
  },
  {
    key: 'rseCareers',
    items: [
      { key: 'rse', href: '/rse' },
      { key: 'sustainability', href: '/sustainability' },
      { key: 'careers', href: '/careers' },
    ],
  },
];

const rightStandaloneItems = [
  { key: 'investors', href: '/investors' },
  { key: 'news', href: '/news' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
];

const allMobileItems = [
  { key: 'home', href: '' },
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'process', href: '/process' },
  { key: 'quality', href: '/quality' },
  { key: 'facilities', href: '/facilities' },
  { key: 'certifications', href: '/certifications' },
  { key: 'quote', href: '/quote' },
  { key: 'rse', href: '/rse' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'careers', href: '/careers' },
  { key: 'investors', href: '/investors' },
  { key: 'news', href: '/news' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
];

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const isActive = (href: string) => {
    if (!href) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === `/${locale}${href}` || pathname.startsWith(`/${locale}${href}/`);
  };

  const isGroupActive = (items: { href: string }[]) =>
    items.some((item) => isActive(item.href));

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
            {/* Left standalone items */}
            {standaloneItems.map((item) => {
              const href = item.href ? `/${locale}${item.href}` : `/${locale}`;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-navy bg-light-gray'
                      : 'text-warm-gray hover:text-navy hover:bg-light-gray/60'
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}

            {/* Dropdown menus */}
            {dropdownGroups.map((group) => (
              <div key={group.key} className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isGroupActive(group.items)
                      ? 'text-navy bg-light-gray'
                      : 'text-warm-gray hover:text-navy hover:bg-light-gray/60'
                  }`}
                >
                  {t(group.key)}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[200px]">
                    {group.items.map((item) => {
                      const href = `/${locale}${item.href}`;
                      return (
                        <Link
                          key={item.key}
                          href={href}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                            isActive(item.href)
                              ? 'text-navy bg-light-gray'
                              : 'text-warm-gray hover:text-navy hover:bg-light-gray/60'
                          }`}
                        >
                          {t(item.key)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Right standalone items */}
            {rightStandaloneItems.map((item) => {
              const href = `/${locale}${item.href}`;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
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
              <SheetTrigger className="lg:hidden">
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
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
                    <X className="h-5 w-5 text-navy" />
                  </Button>
                </div>
                <nav className="p-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
                  {allMobileItems.map((item) => {
                    const href = item.href ? `/${locale}${item.href}` : `/${locale}`;
                    return (
                      <Link
                        key={item.key}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-navy bg-light-gray'
                            : 'text-warm-gray hover:text-navy hover:bg-light-gray/60'
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    );
                  })}
                  {/* Language switcher in mobile nav */}
                  <div className="pt-4 mt-4 border-t border-border">
                    <Link
                      href={switchPath}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-warm-gray hover:text-navy rounded-lg hover:bg-light-gray/60 transition-colors"
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
