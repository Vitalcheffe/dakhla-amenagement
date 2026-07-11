/**
 * Cement comparison data — for programmatic SEO comparison pages.
 * Generates comparison pages × 2 locales.
 */

export interface CementComparison {
  slug: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  leftLabel: string;
  rightLabel: string;
  rows: { feature: string; leftVal: string; rightVal: string; }[];
  winnerFr: string;
  winnerEn: string;
}

export const COMPARISONS: CementComparison[] = [
  {
    slug: 'cpj45-vs-cpj55',
    titleFr: 'CPJ 45 vs CPJ 55 : Comparatif Complet',
    titleEn: 'CPJ 45 vs CPJ 55: Complete Comparison',
    descFr: 'Comparatif détaillé entre le ciment CPJ 45 et CPJ 55. Résistance, prix, usages, conditionnements.',
    descEn: 'Detailed comparison between CPJ 45 and CPJ 55 cement. Strength, price, uses, packaging.',
    leftLabel: 'CPJ 45',
    rightLabel: 'CPJ 55',
    rows: [
      { feature: 'Résistance (28j)', leftVal: '45 MPa', rightVal: '55 MPa' },
      { feature: 'Prix', leftVal: '1 500 DH/T', rightVal: '1 600 DH/T' },
      { feature: 'Finesse Blaine', leftVal: '≥ 350 m²/kg', rightVal: '≥ 380 m²/kg' },
      { feature: 'Début de prise', leftVal: '≥ 45 min', rightVal: '≥ 60 min' },
      { feature: 'Usage béton armé', leftVal: '✓ Optimal', rightVal: '✓ Excellent' },
      { feature: 'Usage génie civil', leftVal: 'Correct', rightVal: '✓ Recommandé' },
      { feature: 'Zone côtière', leftVal: 'Correct', rightVal: '✓ Recommandé' },
      { feature: 'Conditionnements', leftVal: 'Vrac, sacs, big bag', rightVal: 'Vrac, sacs, big bag' },
    ],
    winnerFr: 'CPJ 45 pour le courant, CPJ 55 pour les ouvrages exigeants',
    winnerEn: 'CPJ 45 for standard, CPJ 55 for demanding structures',
  },
  {
    slug: 'vrac-vs-sacs',
    titleFr: 'Ciment Vrac vs Sacs : Comparatif',
    titleEn: 'Bulk vs Bags Cement: Comparison',
    descFr: 'Vrac ou sacs ? Comparatif pour choisir le bon conditionnement de ciment.',
    descEn: 'Bulk or bags? Comparison to choose the right cement packaging.',
    leftLabel: 'Vrac',
    rightLabel: 'Sacs 50kg',
    rows: [
      { feature: 'Prix', leftVal: '1 500 DH/T', rightVal: '1 550 DH/T' },
      { feature: 'Quantité min', leftVal: '30 T', rightVal: '1 sac (50kg)' },
      { feature: 'Équipement requis', leftVal: 'Silo chantier', rightVal: 'Aucun' },
      { feature: 'Gros chantiers', leftVal: '✓ Optimal', rightVal: 'Moins adapté' },
      { feature: 'Petits chantiers', leftVal: 'Non adapté', rightVal: '✓ Optimal' },
      { feature: 'Manutention', leftVal: 'Pompage auto', rightVal: 'Manuelle' },
      { feature: 'Pertes', leftVal: 'Minimes', rightVal: 'Possibles' },
    ],
    winnerFr: 'Vrac pour >30T avec silo, sacs pour petits chantiers',
    winnerEn: 'Bulk for >30T with silo, bags for small sites',
  },
  {
    slug: 'sacs-vs-big-bag',
    titleFr: 'Sacs 50kg vs Big Bag : Comparatif',
    titleEn: '50kg Bags vs Big Bag: Comparison',
    descFr: 'Sacs ou big bag ? Comparatif des conditionnements ciment.',
    descEn: 'Bags or big bag? Cement packaging comparison.',
    leftLabel: 'Sacs 50kg',
    rightLabel: 'Big Bag 1T',
    rows: [
      { feature: 'Prix', leftVal: '1 550 DH/T', rightVal: '1 580 DH/T' },
      { feature: 'Poids unitaire', leftVal: '50 kg', rightVal: '1 000 kg' },
      { feature: 'Manutention', leftVal: 'Manuelle', rightVal: 'Grue/chariot' },
      { feature: 'Petits chantiers', leftVal: '✓ Optimal', rightVal: 'Possible' },
      { feature: 'Chantiers moyens', leftVal: 'Possible', rightVal: '✓ Optimal' },
      { feature: 'Stockage', leftVal: 'Local sec', rightVal: 'Extérieur possible' },
    ],
    winnerFr: 'Sacs pour maçonnerie, big bag pour chantiers moyens',
    winnerEn: 'Bags for masonry, big bag for medium sites',
  },
  {
    slug: 'vrac-vs-big-bag',
    titleFr: 'Vrac vs Big Bag : Comparatif',
    titleEn: 'Bulk vs Big Bag: Comparison',
    descFr: 'Vrac ou big bag ? Comparatif pour gros volumes de ciment.',
    descEn: 'Bulk or big bag? Comparison for large cement volumes.',
    leftLabel: 'Vrac',
    rightLabel: 'Big Bag 1T',
    rows: [
      { feature: 'Prix', leftVal: '1 500 DH/T', rightVal: '1 580 DH/T' },
      { feature: 'Quantité min', leftVal: '30 T', rightVal: '1 T' },
      { feature: 'Silo requis', leftVal: '✓ Oui', rightVal: '✗ Non' },
      { feature: 'Gros chantiers', leftVal: '✓ Optimal', rightVal: 'Possible' },
      { feature: 'Flexibilité', leftVal: 'Faible', rightVal: '✓ Élevée' },
    ],
    winnerFr: 'Vrac pour gros volumes avec silo, big bag sinon',
    winnerEn: 'Bulk for large volumes with silo, big bag otherwise',
  },
  {
    slug: 'ciment-vs-beton',
    titleFr: 'Ciment vs Béton : Quelle Différence ?',
    titleEn: 'Cement vs Concrete: What\'s the Difference?',
    descFr: 'Ciment et béton : quelle différence ? Explication complète.',
    descEn: 'Cement and concrete: what\'s the difference? Complete explanation.',
    leftLabel: 'Ciment',
    rightLabel: 'Béton',
    rows: [
      { feature: 'Nature', leftVal: 'Liant (poudre)', rightVal: 'Matériau composite' },
      { feature: 'Composition', leftVal: 'Clinker + gypse', rightVal: 'Ciment + granulats + eau' },
      { feature: 'Usage', leftVal: 'Composant du béton', rightVal: 'Matériau de construction' },
      { feature: 'Résistance', leftVal: 'N/A (liant)', rightVal: '20-50+ MPa' },
      { feature: 'Conditionnement', leftVal: 'Sacs, vrac, big bag', rightVal: 'Toupie, pompe' },
    ],
    winnerFr: 'Le ciment est un composant du béton',
    winnerEn: 'Cement is a component of concrete',
  },
  {
    slug: 'ciment-vs-chaux',
    titleFr: 'Ciment vs Chaux : Comparatif',
    titleEn: 'Cement vs Lime: Comparison',
    descFr: 'Ciment ou chaux ? Différences, usages et quand utiliser chacun.',
    descEn: 'Cement or lime? Differences, uses and when to use each.',
    leftLabel: 'Ciment',
    rightLabel: 'Chaux',
    rows: [
      { feature: 'Résistance', leftVal: '45-55 MPa', rightVal: '5-15 MPa' },
      { feature: 'Prise', leftVal: 'Rapide (45min)', rightVal: 'Lente (jours)' },
      { feature: 'Béton armé', leftVal: '✓ Adapté', rightVal: '✗ Non adapté' },
      { feature: 'Restauration', leftVal: 'Possible', rightVal: '✓ Recommandé' },
      { feature: 'Enduits traditionnels', leftVal: 'Possible', rightVal: '✓ Recommandé' },
      { feature: 'Prix', leftVal: '1 500 DH/T', rightVal: '2 000 DH/T' },
    ],
    winnerFr: 'Ciment pour structure, chaux pour restauration',
    winnerEn: 'Cement for structure, lime for restoration',
  },
];

export function getComparison(slug: string): CementComparison | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
