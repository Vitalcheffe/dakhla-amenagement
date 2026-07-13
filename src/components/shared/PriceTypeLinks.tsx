import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PriceCementType {
  type: string;
  slug: string;
  sac: string;
  tonne: string;
  usage: string;
  isCurrent?: boolean;
}

const CEMENT_TYPES: PriceCementType[] = [
  { type: 'CPJ 35', slug: 'prix-ciment-cpj35', sac: '70-75 DH', tonne: '1 400 DH/T', usage: 'Maçonnerie courante' },
  { type: 'CPJ 45', slug: 'prix-ciment-cpj45', sac: '75-85 DH', tonne: '1 500 DH/T', usage: 'Béton armé, dallages' },
  { type: 'CPJ 55', slug: 'prix-ciment-cpj55', sac: '80-90 DH', tonne: '1 600 DH/T', usage: 'Génie civil, infrastructure' },
];

export function PriceTypeLinks({ currentType, locale }: { currentType: string; locale: string }) {
  const isFr = locale === 'fr';

  return (
    <section className="py-12 md:py-16 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C] mb-8 text-center">
          {isFr ? 'Comparer les prix par type de ciment' : 'Compare prices by cement type'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CEMENT_TYPES.map((ct) => {
            const isCurrent = ct.type === currentType;
            return (
              <Link
                key={ct.type}
                href={`/${locale}/${ct.slug}`}
                className={`group block rounded-xl p-6 border-2 transition-all ${
                  isCurrent
                    ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 cursor-default'
                    : 'border-[#E5E7EB] hover:border-[#E8B84B] hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#1B3A5C]">{ct.type}</h3>
                  {isCurrent && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-[#1B3A5C] text-white rounded-full">
                      {isFr ? 'Actuel' : 'Current'}
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">{isFr ? 'Sac 50kg' : '50kg bag'}</span>
                    <span className="font-bold text-[#C1272D]">{ct.sac}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">{isFr ? 'Tonne' : 'Ton'}</span>
                    <span className="font-semibold text-[#1B3A5C]">{ct.tonne}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">{isFr ? 'Usage' : 'Use'}</span>
                    <span className="text-xs text-[#6B7280] text-right">{ct.usage}</span>
                  </div>
                </div>
                {!isCurrent && (
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                    {isFr ? 'Voir les prix' : 'View prices'} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
