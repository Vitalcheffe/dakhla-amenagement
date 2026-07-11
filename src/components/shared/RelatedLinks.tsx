import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
  locale: string;
}

/**
 * Internal linking section — displays related pages with descriptions.
 * Critical for SEO: distributes PageRank, keeps users on site, helps Google crawl.
 */
export function RelatedLinks({
  title = 'Ressources liées',
  links,
  locale,
}: RelatedLinksProps) {
  return (
    <section className="py-16 md:py-20 bg-[#F7F8FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <Link
              key={i}
              href={`/${locale}${link.href}`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                Lire plus <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * CTA banner for internal linking to devis/contact.
 */
export function CtaBanner({
  locale,
  title = 'Besoin d\'un devis ciment gratuit ?',
  subtitle = 'Notre équipe vous répond sous 24h. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Livraison Sud Maroc & Mauritanie.',
  buttonText = 'Demander un devis',
}: {
  locale: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33]">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/70 mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/devis`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+212658265685"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            +212 658-265685
          </a>
        </div>
      </div>
    </section>
  );
}
