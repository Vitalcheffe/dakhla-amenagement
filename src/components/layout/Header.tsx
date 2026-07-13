'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

interface DropdownItem {
  key: string;
  href: string;
  badge?: string;
}

interface NavItem {
  key: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { key: 'home', href: '/' },
  {
    key: 'solutions',
    href: '/produits',
    dropdownItems: [
      { key: 'cpj35', href: '/cpj-35', badge: 'Sur demande' },
      { key: 'cpj45', href: '/cpj-45', badge: '1 500 DH/T' },
      { key: 'cpj55', href: '/cpj-55', badge: '1 600 DH/T' },
      { key: 'cimentVrac', href: '/ciment-vrac' },
      { key: 'cimentSacs', href: '/ciment-sacs' },
      { key: 'cimentBigBag', href: '/ciment-big-bag' },
      { key: 'comparison', href: '/produits' },
      { key: 'quote', href: '/devis' },
    ],
  },
  {
    key: 'guides',
    href: '/ciment-maroc',
    dropdownItems: [
      { key: 'cimentMaroc', href: '/ciment-maroc' },
      { key: 'prixCiment', href: '/prix-ciment' },
      { key: 'livraison', href: '/livraison-ciment' },
      { key: 'betonArme', href: '/beton-arme-maroc' },
      { key: 'genieCivil', href: '/genie-civil-ciment' },
      { key: 'constructionDakhla', href: '/construction-dakhla' },
      { key: 'fournisseur', href: '/fournisseur-ciment-maroc' },
      { key: 'lexique', href: '/lexique-ciment' },
      { key: 'calculateur', href: '/calculateur-ciment', badge: 'Outil' },
    ],
  },
  {
    key: 'zones',
    href: '/ciment-sud-maroc',
    dropdownItems: [
      { key: 'cimentDakhla', href: '/ciment-dakhla' },
      { key: 'cimentLaayoune', href: '/ciment-laayoune' },
      { key: 'cimentBoujdour', href: '/ciment-boujdour' },
      { key: 'cimentSudMaroc', href: '/ciment-sud-maroc' },
      { key: 'cimentMauritanie', href: '/ciment-mauritanie' },
    ],
  },
  { key: 'process', href: '/processus' },
  {
    key: 'about',
    href: '/a-propos',
    dropdownItems: [
      { key: 'history', href: '/a-propos' },
      { key: 'sustainability', href: '/durabilite' },
      { key: 'careers', href: '/carrieres' },
      { key: 'investors', href: '/investisseurs' },
      { key: 'press', href: '/presse' },
      { key: 'documents', href: '/documents' },
    ],
  },
  { key: 'realisations', href: '/realisations' },
  { key: 'blog', href: '/blog' },
  { key: 'faq', href: '/faq' },
  { key: 'testimonials', href: '/temoignages' },
  { key: 'contact', href: '/contact' },
];

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const resolveHref = (href: string) => {
    return href === '/' ? `/${locale}` : `/${locale}${href}`;
  };

  const isItemActive = (item: NavItem) => {
    if (item.href === '/') {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(`/${locale}${item.href}`);
  };

  const isDropdownItemActive = (item: NavItem) => {
    if (!item.dropdownItems) return false;
    return item.dropdownItems.some((di) => {
      if (di.href === '/') {
        return pathname === `/${locale}` || pathname === `/${locale}/`;
      }
      return pathname.startsWith(`/${locale}${di.href}`);
    });
  };

  // Translation key mapping for dropdown items
  const getDropdownLabel = (key: string): string => {
    const keyMap: Record<string, string> = {
      cpj35: 'cpj35',
      cpj45: 'cpj45',
      cpj55: 'cpj55',
      cimentVrac: 'cimentVrac',
      cimentSacs: 'cimentSacs',
      cimentBigBag: 'cimentBigBag',
      comparison: 'comparison',
      quote: 'quote',
      cimentMaroc: 'cimentMaroc',
      prixCiment: 'prixCiment',
      livraison: 'livraison',
      betonArme: 'betonArme',
      genieCivil: 'genieCivil',
      constructionDakhla: 'constructionDakhla',
      fournisseur: 'fournisseur',
      lexique: 'lexique',
      calculateur: 'calculateur',
      cimentDakhla: 'cimentDakhla',
      cimentLaayoune: 'cimentLaayoune',
      cimentBoujdour: 'cimentBoujdour',
      cimentSudMaroc: 'cimentSudMaroc',
      cimentMauritanie: 'cimentMauritanie',
      history: 'history',
      sustainability: 'sustainability',
      careers: 'careers',
      investors: 'investors',
      press: 'press',
      documents: 'documents',
    };
    return t(keyMap[key] || key);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]'
      } ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo DAM */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isHome && !scrolled ? '/images/logo-dam-white.svg' : '/images/logo-dam.svg'}
              alt="DAM - Dakhla Aménagement et Développement"
              width={140}
              height={140}
              className="h-10 md:h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => {
              const href = resolveHref(item.href);
              const isActive = isItemActive(item);
              const isDropdownActive = isDropdownItemActive(item);
              const hasDropdown = !!item.dropdownItems;

              if (hasDropdown) {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={href}
                      className={`relative px-2.5 py-2 text-[12.5px] font-medium transition-all duration-300 flex items-center gap-1 ${
                        isActive || isDropdownActive
                          ? isHome && !scrolled
                            ? 'text-white'
                            : 'text-[#1B3A5C]'
                          : isHome && !scrolled
                            ? 'text-white/70 hover:text-white'
                            : 'text-[#6B7280] hover:text-[#1B3A5C]'
                      }`}
                    >
                      {t(item.key)}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.key ? 'rotate-180' : ''
                        }`}
                      />
                      {(isActive || isDropdownActive) && (
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-[2px] ${
                            isHome && !scrolled ? 'bg-[#E8B84B]' : 'bg-[#1B3A5C]'
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.key && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-white rounded-xl shadow-xl border border-[#E5E7EB] py-2 min-w-[240px] animate-in fade-in-0 slide-in-from-top-2 duration-150">
                          {/* Small arrow indicator */}
                          <div className="absolute -top-1 left-8 w-2 h-2 bg-white border-l border-t border-[#E5E7EB] rotate-45" />
                          {item.dropdownItems!.map((di) => (
                            <Link
                              key={di.key}
                              href={resolveHref(di.href)}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-[#6B7280] hover:bg-[#F7F8FA] hover:text-[#1B3A5C] transition-colors"
                            >
                              <span>{getDropdownLabel(di.key)}</span>
                              {di.badge && (
                                <span className="ml-2 px-2 py-0.5 text-[11px] font-semibold bg-[#E8B84B]/15 text-[#E8B84B] rounded-full">
                                  {di.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`relative px-2.5 py-2 text-[12.5px] font-medium transition-all duration-300 ${
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
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-full transition-all duration-300 bg-[#C1272D] text-white hover:bg-[#C1272D]/90"
            >
              {t('quote')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="xl:hidden inline-flex items-center justify-center h-9 w-9 rounded-md transition-colors"
                aria-label="Menu"
              >
                <Menu className={`h-5 w-5 ${isHome && !scrolled ? 'text-white' : 'text-[#1B3A5C]'}`} />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/logo-dam.svg"
                      alt="DAM - Dakhla Aménagement et Développement"
                      width={126}
                      height={126}
                      className="h-9 w-auto"
                    />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="p-6 space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto">
                  {navItems.map((item) => {
                    const href = resolveHref(item.href);
                    const isActive = isItemActive(item);
                    const hasDropdown = !!item.dropdownItems;
                    const isExpanded = mobileExpanded === item.key;

                    if (hasDropdown) {
                      return (
                        <div key={item.key}>
                          <button
                            onClick={() =>
                              setMobileExpanded(isExpanded ? null : item.key)
                            }
                            className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                              isActive
                                ? 'bg-[#1B3A5C] text-white'
                                : 'text-[#6B7280] hover:text-[#1B3A5C] hover:bg-[#1B3A5C]/5'
                            }`}
                          >
                            <span>{t(item.key)}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isExpanded && (
                            <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#E8B84B]/30 pl-3">
                              {item.dropdownItems!.map((di) => (
                                <Link
                                  key={di.key}
                                  href={resolveHref(di.href)}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between px-3 py-2 text-sm text-[#6B7280] hover:text-[#1B3A5C] hover:bg-[#1B3A5C]/5 rounded-lg transition-colors"
                                >
                                  <span>{getDropdownLabel(di.key)}</span>
                                  {di.badge && (
                                    <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-[#E8B84B]/15 text-[#E8B84B] rounded-full whitespace-nowrap">
                                      {di.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.key}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? 'bg-[#1B3A5C] text-white'
                            : 'text-[#6B7280] hover:text-[#1B3A5C] hover:bg-[#1B3A5C]/5'
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
