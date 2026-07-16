import Link from 'next/link';
import { Calculator, ArrowRight } from 'lucide-react';

interface CalculatorCtaProps {
  locale: string;
}

/**
 * Calculator CTA banner — promotes the cement dosage calculator on relevant blog articles.
 * Increases tool visibility and drives engagement.
 */
export function CalculatorCta({ locale }: CalculatorCtaProps) {
  const isFr = locale === 'fr';

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E8B84B 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8B84B]/20 flex items-center justify-center">
            <Calculator className="w-8 h-8 text-[#E8B84B]" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              {isFr ? 'Calculez votre dosage ciment en 30 secondes' : 'Calculate your cement dosage in 30 seconds'}
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {isFr
                ? "Notre calculateur gratuit vous donne la quantité exacte de ciment, l'estimation du coût et les conditionnements suggérés."
                : 'Our free calculator gives you the exact cement quantity, cost estimate and suggested packaging.'}
            </p>
          </div>
          <Link
            href={`/${locale}/calculateur-ciment`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#E8B84B] text-[#1A1A2E] font-bold rounded-full hover:bg-[#E8B84B]/90 hover:scale-105 transition-all whitespace-nowrap"
          >
            <Calculator className="w-5 h-5" />
            {isFr ? 'Calculer maintenant' : 'Calculate now'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
