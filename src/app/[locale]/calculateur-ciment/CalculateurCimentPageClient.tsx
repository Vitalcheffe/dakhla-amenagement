'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calculator, ArrowRight, RotateCcw, Info } from 'lucide-react';

type ConcreteType = 'foundation' | 'slab' | 'beam' | 'column' | 'wall' | 'high-strength';

interface ConcreteMix {
  type: ConcreteType;
  labelFr: string;
  labelEn: string;
  dosage: number; // kg/m³
  descFr: string;
  descEn: string;
  recommendedCement: 'CPJ 45' | 'CPJ 55';
}

const CONCRETE_MIXES: ConcreteMix[] = [
  {
    type: 'foundation',
    labelFr: 'Fondations',
    labelEn: 'Foundations',
    dosage: 300,
    descFr: 'Semelles, fondations superficielles',
    descEn: 'Footings, shallow foundations',
    recommendedCement: 'CPJ 45',
  },
  {
    type: 'slab',
    labelFr: 'Dallage',
    labelEn: 'Slab',
    dosage: 350,
    descFr: 'Dallages, planchers, sols',
    descEn: 'Floor slabs, floors',
    recommendedCement: 'CPJ 45',
  },
  {
    type: 'beam',
    labelFr: 'Poutre',
    labelEn: 'Beam',
    dosage: 350,
    descFr: 'Poutres, linteaux',
    descEn: 'Beams, lintels',
    recommendedCement: 'CPJ 45',
  },
  {
    type: 'column',
    labelFr: 'Poteau',
    labelEn: 'Column',
    dosage: 350,
    descFr: 'Poteaux, piliers',
    descEn: 'Columns, pillars',
    recommendedCement: 'CPJ 45',
  },
  {
    type: 'wall',
    labelFr: 'Mur',
    labelEn: 'Wall',
    dosage: 300,
    descFr: 'Murs porteurs, murs béton',
    descEn: 'Load-bearing walls, concrete walls',
    recommendedCement: 'CPJ 45',
  },
  {
    type: 'high-strength',
    labelFr: 'Haute résistance',
    labelEn: 'High strength',
    dosage: 400,
    descFr: 'Ouvrages de génie civil, infrastructure',
    descEn: 'Civil engineering, infrastructure',
    recommendedCement: 'CPJ 55',
  },
];

export default function CalculateurCimentPageClient() {
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const isFr = locale === 'fr';

  const [concreteType, setConcreteType] = useState<ConcreteType>('slab');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [wastePercent, setWastePercent] = useState('5');

  const selectedMix = CONCRETE_MIXES.find((m) => m.type === concreteType)!;

  const calculation = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    const waste = parseFloat(wastePercent) || 0;

    if (l <= 0 || w <= 0 || h <= 0) return null;

    const volumeM3 = l * w * h;
    const cementKg = volumeM3 * selectedMix.dosage;
    const cementTons = cementKg / 1000;
    const wasteKg = cementKg * (waste / 100);
    const totalKg = cementKg + wasteKg;
    const totalTons = totalKg / 1000;
    const roundedTons = Math.ceil(totalTons);

    // Cost estimate
    const pricePerTon = selectedMix.recommendedCement === 'CPJ 45' ? 1500 : 1600;
    const estimatedCost = roundedTons * pricePerTon;

    // Packaging suggestions
    const bulkMinTons = 30;
    const bigBagCount = Math.ceil(roundedTons);
    const sacsCount = Math.ceil(roundedTons * 20); // 20 sacs de 50kg = 1T

    return {
      volumeM3: volumeM3.toFixed(2),
      cementKg: Math.round(cementKg),
      cementTons: cementTons.toFixed(2),
      totalKg: Math.round(totalKg),
      totalTons: totalTons.toFixed(2),
      roundedTons,
      estimatedCost,
      pricePerTon,
      bulkMinTons,
      bigBagCount,
      sacsCount,
    };
  }, [length, width, height, wastePercent, selectedMix]);

  const handleReset = () => {
    setConcreteType('slab');
    setLength('');
    setWidth('');
    setHeight('');
    setWastePercent('5');
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'Outil interactif gratuit' : 'Free interactive tool'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? 'Calculateur de dosage ciment' : 'Cement dosage calculator'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? "Calculez la quantité exacte de ciment nécessaire pour votre chantier. Entrez les dimensions, choisissez le type d'ouvrage, obtenez le dosage, le tonnage et une estimation de prix."
              : 'Calculate the exact amount of cement needed for your construction site. Enter dimensions, choose the structure type, get dosage, tonnage and price estimate.'}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1B3A5C]">
                    {isFr ? 'Paramètres du calcul' : 'Calculation parameters'}
                  </h2>
                  <p className="text-sm text-[#6B7280]">
                    {isFr ? 'Remplissez les champs ci-dessous' : 'Fill in the fields below'}
                  </p>
                </div>
              </div>

              {/* Concrete type selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">
                  {isFr ? "Type d'ouvrage" : 'Structure type'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CONCRETE_MIXES.map((mix) => (
                    <button
                      key={mix.type}
                      onClick={() => setConcreteType(mix.type)}
                      className={`px-3 py-2.5 text-sm font-medium rounded-xl border transition-all text-left ${
                        concreteType === mix.type
                          ? 'bg-[#1B3A5C] text-white border-[#1B3A5C] shadow-md'
                          : 'bg-white text-[#1B3A5C] border-[#E5E7EB] hover:border-[#E8B84B]'
                      }`}
                    >
                      {isFr ? mix.labelFr : mix.labelEn}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#6B7280] mt-2">
                  {isFr ? selectedMix.descFr : selectedMix.descEn} · {isFr ? 'Dosage' : 'Dosage'}: {selectedMix.dosage} kg/m³
                </p>
              </div>

              {/* Dimensions */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">
                    {isFr ? 'Longueur (m)' : 'Length (m)'}
                  </label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="5"
                    step="0.1"
                    min="0"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">
                    {isFr ? 'Largeur (m)' : 'Width (m)'}
                  </label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="3"
                    step="0.1"
                    min="0"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">
                    {isFr ? 'Hauteur (m)' : 'Height (m)'}
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="0.15"
                    step="0.01"
                    min="0"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Waste percentage */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">
                  {isFr ? 'Marge de sécurité (%)' : 'Safety margin (%)'}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    value={wastePercent}
                    onChange={(e) => setWastePercent(e.target.value)}
                    min="0"
                    max="15"
                    step="1"
                    className="flex-1 accent-[#1B3A5C]"
                  />
                  <span className="w-12 text-center text-sm font-bold text-[#1B3A5C] bg-[#1B3A5C]/5 rounded-lg py-1.5">
                    {wastePercent}%
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] mt-1">
                  {isFr
                    ? '5-10% recommandé pour les pertes (rebuts, résidus)'
                    : '5-10% recommended for waste'}
                </p>
              </div>

              {/* Reset button */}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#C1272D] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                {isFr ? 'Réinitialiser' : 'Reset'}
              </button>
            </div>

            {/* Results */}
            <div>
              {calculation ? (
                <div className="space-y-6">
                  {/* Volume */}
                  <div className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white rounded-2xl p-6 md:p-8">
                    <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">
                      {isFr ? 'Volume de béton' : 'Concrete volume'}
                    </p>
                    <p className="text-4xl md:text-5xl font-bold text-[#E8B84B] mb-2">
                      {calculation.volumeM3} m³
                    </p>
                    <p className="text-sm text-white/70">
                      {isFr ? 'Dimensions' : 'Dimensions'}: {length}m × {width}m × {height}m
                    </p>
                  </div>

                  {/* Cement needed */}
                  <div className="bg-white border-2 border-[#E8B84B] rounded-2xl p-6 md:p-8">
                    <p className="text-sm text-[#6B7280] mb-2 uppercase tracking-wider">
                      {isFr ? 'Ciment nécessaire' : 'Cement needed'}
                    </p>
                    <div className="flex items-baseline gap-3 mb-4">
                      <p className="text-4xl md:text-5xl font-bold text-[#1B3A5C]">
                        {calculation.roundedTons}
                      </p>
                      <p className="text-xl text-[#1B3A5C] font-medium">
                        {isFr ? 'tonnes' : 'tons'}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-[#F7F8FA] rounded-lg p-3">
                        <p className="text-[#6B7280] mb-1">{isFr ? 'Dosage' : 'Dosage'}</p>
                        <p className="font-bold text-[#1B3A5C]">{selectedMix.dosage} kg/m³</p>
                      </div>
                      <div className="bg-[#F7F8FA] rounded-lg p-3">
                        <p className="text-[#6B7280] mb-1">{isFr ? 'Ciment pur' : 'Net cement'}</p>
                        <p className="font-bold text-[#1B3A5C]">{calculation.cementTons} T</p>
                      </div>
                      <div className="bg-[#F7F8FA] rounded-lg p-3">
                        <p className="text-[#6B7280] mb-1">{isFr ? 'Avec marge' : 'With margin'}</p>
                        <p className="font-bold text-[#1B3A5C]">{calculation.totalTons} T</p>
                      </div>
                      <div className="bg-[#F7F8FA] rounded-lg p-3">
                        <p className="text-[#6B7280] mb-1">{isFr ? 'Ciment recommandé' : 'Recommended'}</p>
                        <p className="font-bold text-[#C1272D]">{selectedMix.recommendedCement}</p>
                      </div>
                    </div>
                  </div>

                  {/* Cost estimate */}
                  <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-[#1B3A5C]">
                        {isFr ? 'Estimation du coût' : 'Cost estimate'}
                      </p>
                      <span className="px-2.5 py-0.5 text-xs font-bold bg-[#E8B84B]/15 text-[#E8B84B] rounded-full">
                        {selectedMix.recommendedCement}
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-[#C1272D] mb-1">
                      {calculation.estimatedCost.toLocaleString('fr-FR')} DH
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      {isFr
                        ? `Basé sur ${calculation.pricePerTon} DH/T — prix départ usine, livraison non incluse`
                        : `Based on ${calculation.pricePerTon} DH/T — ex-works, delivery not included`}
                    </p>
                  </div>

                  {/* Packaging suggestions */}
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                    <p className="text-sm font-semibold text-[#1B3A5C] mb-4">
                      {isFr ? 'Conditionnements suggérés' : 'Suggested packaging'}
                    </p>
                    <div className="space-y-3">
                      {calculation.roundedTons >= calculation.bulkMinTons && (
                        <div className="flex items-center justify-between p-3 bg-[#0E7490]/5 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-[#1B3A5C]">
                              {isFr ? 'Vrac (camion-citerne)' : 'Bulk (tanker truck)'}
                            </p>
                            <p className="text-xs text-[#6B7280]">
                              {isFr ? 'Idéal pour gros volumes' : 'Ideal for large volumes'}
                            </p>
                          </div>
                          <span className="text-sm font-bold text-[#0E7490]">
                            {isFr ? 'Recommandé' : 'Recommended'}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between p-3 bg-[#F7F8FA] rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-[#1B3A5C]">
                            {isFr ? 'Big Bags 1T' : 'Big Bags 1T'}
                          </p>
                          <p className="text-xs text-[#6B7280]">
                            {isFr ? 'Manutention par grue' : 'Crane handling'}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-[#1B3A5C]">
                          {calculation.bigBagCount} {isFr ? 'unités' : 'units'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-[#F7F8FA] rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-[#1B3A5C]">
                            {isFr ? 'Sacs 50kg' : '50kg bags'}
                          </p>
                          <p className="text-xs text-[#6B7280]">
                            {isFr ? 'Pour petits chantiers' : 'For small sites'}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-[#1B3A5C]">
                          {calculation.sacsCount} {isFr ? 'sacs' : 'bags'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/${locale}/devis`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
                  >
                    {isFr ? 'Demander un devis précis' : 'Request a precise quote'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ) : (
                <div className="bg-[#F7F8FA] border-2 border-dashed border-[#E5E7EB] rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                    <Info className="w-8 h-8 text-[#6B7280]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
                    {isFr ? 'Entrez les dimensions' : 'Enter dimensions'}
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-xs mx-auto">
                    {isFr
                      ? 'Le calcul du dosage ciment apparaîtra ici automatiquement.'
                      : 'The cement dosage calculation will appear here automatically.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Comment calculer la quantité de ciment ?' : 'How to calculate cement quantity?'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? "Le calcul du dosage de ciment dépend du volume de béton à couler et du type d'ouvrage. La formule est simple : Quantité de ciment (kg) = Volume (m³) × Dosage (kg/m³). Le dosage varie selon l'usage : 300 kg/m³ pour les fondations, 350 kg/m³ pour le béton armé courant (dallages, poutres, poteaux), et 400 kg/m³ pour les ouvrages de génie civil exigeants."
                : 'Cement dosage calculation depends on the concrete volume and structure type. The formula is simple: Cement quantity (kg) = Volume (m³) × Dosage (kg/m³). Dosage varies by use: 300 kg/m³ for foundations, 350 kg/m³ for standard reinforced concrete (slabs, beams, columns), and 400 kg/m³ for demanding civil engineering structures.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? "Notre calculateur prend en compte une marge de sécurité de 5% par défaut pour couvrir les pertes (rebuts, résidus de malaxage, irrégularités). Il est recommandé d'arrondir la quantité finale à la tonne supérieure pour faciliter la commande. Le choix du conditionnement (vrac, sacs, big bag) dépend du volume : vrac pour plus de 30T, big bag pour les chantiers moyens, sacs pour la maçonnerie."
                : 'Our calculator includes a 5% safety margin by default to cover waste. It is recommended to round the final quantity up to the nearest ton. Packaging choice (bulk, bags, big bag) depends on volume: bulk for over 30T, big bag for medium sites, bags for masonry.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Pour un devis précis incluant la livraison, contactez Dakhla Aménagement au +212 658-265685 ou via notre formulaire de devis. Nos experts peuvent ajuster le dosage selon vos spécifications techniques et les conditions de chantier."
                : 'For a precise quote including delivery, contact Dakhla Aménagement at +212 658-265685 or via our quote form. Our experts can adjust dosage based on your technical specifications and site conditions.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href={`/${locale}/prix-ciment`} className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
              {isFr ? '→ Voir les prix du ciment' : '→ View cement prices'} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href={`/${locale}/blog/calculer-quantite-ciment`} className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
              {isFr ? '→ Guide complet du calcul' : '→ Complete calculation guide'} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href={`/${locale}/cpj-45`} className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
              {isFr ? '→ Ciment CPJ 45' : '→ CPJ 45 cement'} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
