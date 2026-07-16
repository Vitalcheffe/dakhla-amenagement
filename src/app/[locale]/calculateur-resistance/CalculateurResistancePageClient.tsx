'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, RotateCcw, Info, Zap } from 'lucide-react';

type CementType = 'CPJ 45' | 'CPJ 55';

export default function CalculateurResistancePageClient() {
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const isFr = locale === 'fr';

  const [cementType, setCementType] = useState<CementType>('CPJ 45');
  const [dosage, setDosage] = useState('350');
  const [waterCement, setWaterCement] = useState('0.50');
  const [age, setAge] = useState('28');

  const calculation = useMemo(() => {
    const d = parseFloat(dosage) || 0;
    const wc = parseFloat(waterCement) || 0;
    const a = parseFloat(age) || 28;

    if (d <= 0 || wc <= 0) return null;

    // Simplified Abrams' law: fc = A / B^(w/c)
    // Calibrated for Moroccan cements
    const A = cementType === 'CPJ 45' ? 120 : 140;
    const B = 4.5;

    // Strength at 28 days
    const fc28 = A / Math.pow(B, wc);

    // Age factor (simplified)
    const ageFactor = a <= 7 ? 0.65 + (a / 7) * 0.15 : a <= 28 ? 0.80 + ((a - 7) / 21) * 0.20 : 1.0 + Math.log(a / 28) * 0.1;
    const fcAge = fc28 * ageFactor;

    // Dosage correction
    const dosageFactor = d / 350;
    const finalStrength = fcAge * dosageFactor;

    // Slump estimate (workability)
    const slump = wc > 0.55 ? '180-220 mm (très fluide)' : wc > 0.45 ? '120-160 mm (plastique)' : '80-120 mm (ferme)';

    // Recommendations
    const recommendations: string[] = [];
    if (wc > 0.55) recommendations.push(isFr ? '⚠️ Rapport E/C élevé : résistance réduite. Visez ≤ 0.50' : '⚠️ High W/C ratio: reduced strength. Aim ≤ 0.50');
    if (wc < 0.35) recommendations.push(isFr ? '⚠️ Rapport E/C bas : béton difficile à mettre en œuvre' : '⚠️ Low W/C ratio: difficult to work concrete');
    if (d < 300) recommendations.push(isFr ? '⚠️ Dosage faible pour béton armé structurel' : '⚠️ Low dosage for structural reinforced concrete');
    if (d > 450) recommendations.push(isFr ? '⚠️ Dosage élevé : risque de fissuration par retrait' : '⚠️ High dosage: shrinkage cracking risk');
    if (recommendations.length === 0) recommendations.push(isFr ? '✓ Paramètres optimaux pour ce type de béton' : '✓ Optimal parameters for this concrete type');

    return {
      fc28: fc28.toFixed(1),
      fcAge: finalStrength.toFixed(1),
      ageFactor: (ageFactor * 100).toFixed(0),
      slump,
      recommendations,
    };
  }, [cementType, dosage, waterCement, age, isFr]);

  return (
    <>
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'Outil d\'ingénierie gratuit' : 'Free engineering tool'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6">
            {isFr ? 'Calculateur de résistance béton' : 'Concrete strength calculator'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? "Estimez la résistance à la compression de votre béton selon le type de ciment, le dosage, le rapport E/C et l'âge. Basé sur la loi d'Abrams."
              : 'Estimate your concrete compressive strength based on cement type, dosage, W/C ratio and age. Based on Abrams\' law.'}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input */}
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1B3A5C]">{isFr ? 'Paramètres' : 'Parameters'}</h2>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{isFr ? 'Type de ciment' : 'Cement type'}</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['CPJ 45', 'CPJ 55'] as CementType[]).map((c) => (
                    <button key={c} onClick={() => setCementType(c)} className={`px-4 py-3 text-sm font-bold rounded-xl border transition-all ${cementType === c ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]' : 'bg-white text-[#1B3A5C] border-[#E5E7EB] hover:border-[#E8B84B]'}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">{isFr ? 'Dosage (kg/m³)' : 'Dosage (kg/m³)'}</label>
                  <input type="number" value={dosage} onChange={(e) => setDosage(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">{isFr ? 'Rapport E/C' : 'W/C ratio'}</label>
                  <input type="number" value={waterCement} onChange={(e) => setWaterCement(e.target.value)} step="0.05" min="0.3" max="0.7" className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">{isFr ? 'Âge du béton (jours)' : 'Concrete age (days)'}</label>
                <div className="flex items-center gap-3">
                  <input type="range" value={age} onChange={(e) => setAge(e.target.value)} min="1" max="90" className="flex-1 accent-[#1B3A5C]" />
                  <span className="w-16 text-center text-sm font-bold text-[#1B3A5C] bg-[#1B3A5C]/5 rounded-lg py-1.5">{age} j</span>
                </div>
              </div>

              <button onClick={() => { setCementType('CPJ 45'); setDosage('350'); setWaterCement('0.50'); setAge('28'); }} className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#C1272D] transition-colors">
                <RotateCcw className="w-4 h-4" /> {isFr ? 'Réinitialiser' : 'Reset'}
              </button>
            </div>

            {/* Results */}
            <div>
              {calculation ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white rounded-2xl p-8">
                    <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">{isFr ? 'Résistance estimée' : 'Estimated strength'}</p>
                    <div className="flex items-baseline gap-3">
                      <p className="text-5xl font-bold text-[#E8B84B]">{calculation.fcAge}</p>
                      <p className="text-xl text-white/80">MPa</p>
                    </div>
                    <p className="text-sm text-white/60 mt-2">{isFr ? `à ${age} jours` : `at ${age} days`}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F7F8FA] rounded-xl p-4">
                      <p className="text-xs text-[#6B7280] mb-1">{isFr ? 'Résistance à 28j' : 'Strength at 28d'}</p>
                      <p className="text-lg font-bold text-[#1B3A5C]">{calculation.fc28} MPa</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-xl p-4">
                      <p className="text-xs text-[#6B7280] mb-1">{isFr ? 'Facteur d\'âge' : 'Age factor'}</p>
                      <p className="text-lg font-bold text-[#1B3A5C]">{calculation.ageFactor}%</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-xl p-4 col-span-2">
                      <p className="text-xs text-[#6B7280] mb-1">{isFr ? 'Maniabilité (slump)' : 'Workability (slump)'}</p>
                      <p className="text-sm font-bold text-[#1B3A5C]">{calculation.slump}</p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-[#E8B84B] rounded-2xl p-6">
                    <p className="text-sm font-semibold text-[#1B3A5C] mb-3">{isFr ? 'Recommandations' : 'Recommendations'}</p>
                    <div className="space-y-2">
                      {calculation.recommendations.map((rec, i) => (
                        <p key={i} className="text-sm text-[#1A1A2E]/80">{rec}</p>
                      ))}
                    </div>
                  </div>

                  <Link href={`/${locale}/devis`} className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
                    {isFr ? 'Demander un devis ciment' : 'Request cement quote'} <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ) : (
                <div className="bg-[#F7F8FA] border-2 border-dashed border-[#E5E7EB] rounded-2xl p-12 text-center">
                  <Info className="w-8 h-8 text-[#6B7280] mx-auto mb-4" />
                  <p className="text-sm text-[#6B7280]">{isFr ? 'Entrez les paramètres' : 'Enter parameters'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
