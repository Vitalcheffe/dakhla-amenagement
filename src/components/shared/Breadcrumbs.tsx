import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale: string;
}

/**
 * Visual breadcrumbs — NO microdata (JSON-LD handles schema separately).
 * Removing microdata to avoid duplicate/conflicting BreadcrumbList schemas.
 */
export function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-[#E5E7EB] bg-[#F7F8FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ol className="flex items-center gap-1.5 py-3 text-xs md:text-sm overflow-x-auto scrollbar-hide">
          <li className="flex items-center gap-1.5 shrink-0">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-1 text-[#6B7280] hover:text-[#1B3A5C] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">Accueil</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-[#D1D5DB] shrink-0" />
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5 shrink-0">
                {isLast ? (
                  <span className="text-[#1B3A5C] font-medium truncate max-w-[200px]" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={`/${locale}${item.path}`}
                    className="text-[#6B7280] hover:text-[#1B3A5C] transition-colors truncate max-w-[180px]"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3 h-3 text-[#D1D5DB] shrink-0" />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
