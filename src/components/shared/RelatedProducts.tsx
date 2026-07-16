import Link from 'next/link';
import { ArrowRight, Package } from 'lucide-react';

export interface ProductLink {
  label: string;
  href: string;
  description?: string;
  icon?: 'cement' | 'package' | 'truck' | 'price' | 'building';
  badge?: string;
}

interface RelatedProductsProps {
  products: ProductLink[];
  locale: string;
  title?: string;
}

const ICON_MAP = {
  cement: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8L13.5 3L3 9L13.5 15L21 8z"/><path d="M3 9v6l10.5 6L21 14V8"/><path d="M13.5 15v6"/>
    </svg>
  ),
  package: <Package className="w-5 h-5" />,
  truck: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  price: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
    </svg>
  ),
};

/**
 * Related Products section for blog articles.
 * Shows landing page links as styled cards with icons, descriptions, and badges.
 * Reverse of RelatedArticles — creates bidirectional linking from blog to products.
 */
export function RelatedProducts({
  products,
  locale,
  title,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#C1272D]/5 flex items-center justify-center">
            <Package className="w-5 h-5 text-[#C1272D]" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product, i) => {
            const icon = product.icon ? ICON_MAP[product.icon] : ICON_MAP.package;
            return (
              <Link
                key={i}
                href={`/${locale}${product.href}`}
                className="group flex items-start gap-4 p-5 bg-gradient-to-br from-[#F7F8FA] to-white border border-[#E5E7EB] rounded-xl hover:border-[#E8B84B] hover:shadow-lg transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1B3A5C]/5 text-[#1B3A5C] flex items-center justify-center group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#1B3A5C] group-hover:text-[#C1272D] transition-colors">
                      {product.label}
                    </h3>
                    {product.badge && (
                      <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold bg-[#E8B84B]/15 text-[#E8B84B] rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  {product.description && (
                    <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="shrink-0 w-4 h-4 text-[#C1272D] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
