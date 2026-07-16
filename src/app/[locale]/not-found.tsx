import Link from 'next/link';
import { ArrowRight, Home, Search } from 'lucide-react';

export default async function NotFound() {
  const popularLinks = [
    { label: 'Ciment Maroc — Guide complet', href: '/fr/ciment-maroc' },
    { label: 'Nos produits CPJ 45 & CPJ 55', href: '/fr/produits' },
    { label: 'Prix du ciment au Maroc', href: '/fr/prix-ciment' },
    { label: 'Demander un devis', href: '/fr/devis' },
    { label: 'Livraison de ciment', href: '/fr/livraison-ciment' },
    { label: 'Blog ciment & construction', href: '/fr/blog' },
    { label: 'FAQ ciment Maroc', href: '/fr/faq' },
    { label: 'Contact', href: '/fr/contact' },
  ];

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <p className="text-[120px] md:text-[160px] font-bold leading-none text-[#E8B84B] mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Oups, cette page n&apos;existe pas
        </h1>
        <p className="text-white/70 mb-10 leading-relaxed">
          La page que vous cherchez a peut-être été déplacée ou supprimée.
          Découvrez nos pages les plus populaires ci-dessous, ou retournez à l&apos;accueil.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
          {popularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-[#E8B84B]/50 transition-all group"
            >
              <span className="text-sm font-medium">{link.label}</span>
              <ArrowRight className="w-4 h-4 text-[#E8B84B] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/fr"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/fr/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            <Search className="w-4 h-4" />
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
