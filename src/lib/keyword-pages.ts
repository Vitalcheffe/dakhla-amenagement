/**
 * MAÎTRE DES 100 RECHERCHES CIMENT — Mapping mot-clé → page dédiée
 *
 * Chaque recherche correspond à une page unique sur ciment-dam.com
 * qui répond EXACTEMENT à l'intention de recherche de l'utilisateur.
 *
 * Les 100 recherches sont organisées en 5 catégories:
 * 1. Prix & Tarifs (20)
 * 2. Produits & Types (20)
 * 3. Usages & Applications (25)
 * 4. Local & Géographique (15)
 * 5. Technique & Information (20)
 */

export interface KeywordPage {
  id: number;
  keyword: string;
  searchIntent: string;
  url: string;
  status: 'exists' | 'create';
  priority: 'high' | 'medium' | 'low';
}

export const KEYWORD_PAGES: KeywordPage[] = [
  // ====== 1. PRIX & TARIFS (20) ======
  { id: 1, keyword: 'prix ciment Maroc 2026', searchIntent: 'L\'utilisateur veut connaître le prix actuel du ciment au Maroc', url: '/prix-ciment', status: 'exists', priority: 'high' },
  { id: 2, keyword: 'prix sac ciment 50kg Maroc', searchIntent: 'Prix d\'un sac de ciment de 50kg', url: '/prix-ciment', status: 'exists', priority: 'high' },
  { id: 3, keyword: 'prix ciment CPJ 35', searchIntent: 'Prix spécifique du CPJ 35', url: '/prix-ciment-cpj35', status: 'create', priority: 'high' },
  { id: 4, keyword: 'prix ciment CPJ 45', searchIntent: 'Prix spécifique du CPJ 45', url: '/prix-ciment-cpj45', status: 'create', priority: 'high' },
  { id: 5, keyword: 'prix ciment CPJ 55', searchIntent: 'Prix spécifique du CPJ 55', url: '/prix-ciment-cpj55', status: 'create', priority: 'high' },
  { id: 6, keyword: 'prix ciment Dakhla', searchIntent: 'Prix du ciment à Dakhla spécifiquement', url: '/prix-ciment-ville/dakhla', status: 'exists', priority: 'high' },
  { id: 7, keyword: 'prix ciment vrac Maroc', searchIntent: 'Prix du ciment en vrac', url: '/ciment-vrac', status: 'exists', priority: 'high' },
  { id: 8, keyword: 'prix big bag ciment', searchIntent: 'Prix du ciment en big bag 1T', url: '/ciment-big-bag', status: 'exists', priority: 'medium' },
  { id: 9, keyword: 'prix tonne ciment Maroc', searchIntent: 'Prix de la tonne de ciment', url: '/prix-ciment', status: 'exists', priority: 'medium' },
  { id: 10, keyword: 'ciment pas cher Maroc', searchIntent: 'Trouver du ciment abordable', url: '/prix-ciment', status: 'exists', priority: 'medium' },
  { id: 11, keyword: 'tarif ciment Maroc', searchIntent: 'Tarifs détaillés du ciment', url: '/prix-ciment', status: 'exists', priority: 'medium' },
  { id: 12, keyword: 'devis ciment gratuit', searchIntent: 'Obtenir un devis gratuit', url: '/devis', status: 'exists', priority: 'high' },
  { id: 13, keyword: 'prix béton prêt à l\'emploi Maroc', searchIntent: 'Prix du béton prêt à l\'emploi', url: '/beton-pret-emploi', status: 'exists', priority: 'high' },
  { id: 14, keyword: 'prix béton m3 Dakhla', searchIntent: 'Prix du mètre cube de béton à Dakhla', url: '/beton-pret-emploi', status: 'exists', priority: 'high' },
  { id: 15, keyword: 'prix ciment en gros Maroc', searchIntent: 'Prix de gros pour ciment', url: '/fournisseur-ciment-maroc', status: 'exists', priority: 'medium' },
  { id: 16, keyword: 'comparatif prix ciment Maroc', searchIntent: 'Comparer les prix entre types/marques', url: '/comparer/cpj45-vs-cpj55', status: 'exists', priority: 'medium' },
  { id: 17, keyword: 'prix ciment sacs 50kg Dakhla', searchIntent: 'Prix des sacs 50kg à Dakhla', url: '/ciment-sacs', status: 'exists', priority: 'high' },
  { id: 18, keyword: 'prix ciment vrac camion citerne', searchIntent: 'Prix livraison vrac', url: '/ciment-vrac', status: 'exists', priority: 'medium' },
  { id: 19, keyword: 'prix mortier ciment Maroc', searchIntent: 'Prix du mortier de ciment', url: '/prix-mortier-ciment', status: 'create', priority: 'medium' },
  { id: 20, keyword: 'remise ciment gros volume Maroc', searchIntent: 'Tarifs dégressifs gros volume', url: '/fournisseur-ciment-maroc', status: 'exists', priority: 'low' },

  // ====== 2. PRODUITS & TYPES (20) ======
  { id: 21, keyword: 'ciment CPJ 35 Maroc', searchIntent: 'Info sur le CPJ 35 au Maroc', url: '/cpj-35', status: 'create', priority: 'high' },
  { id: 22, keyword: 'ciment CPJ 45 Maroc', searchIntent: 'Info sur le CPJ 45', url: '/cpj-45', status: 'exists', priority: 'high' },
  { id: 23, keyword: 'ciment CPJ 55 Maroc', searchIntent: 'Info sur le CPJ 55', url: '/cpj-55', status: 'exists', priority: 'high' },
  { id: 24, keyword: 'ciment Portland Maroc', searchIntent: 'Ciment Portland au Maroc', url: '/ciment-portland-maroc', status: 'create', priority: 'medium' },
  { id: 25, keyword: 'ciment blanc Maroc', searchIntent: 'Ciment blanc et ses usages', url: '/ciment-blanc-maroc', status: 'create', priority: 'medium' },
  { id: 26, keyword: 'ciment réfractaire Maroc', searchIntent: 'Ciment résistant haute température', url: '/ciment-refractaire-maroc', status: 'create', priority: 'low' },
  { id: 27, keyword: 'ciment hydrofuge Maroc', searchIntent: 'Ciment étanche/imperméable', url: '/ciment-hydrofuge-maroc', status: 'create', priority: 'medium' },
  { id: 28, keyword: 'ciment à prise rapide Maroc', searchIntent: 'Ciment qui prend vite', url: '/ciment-prise-rapide-maroc', status: 'create', priority: 'low' },
  { id: 29, keyword: 'ciment résistant sulfates', searchIntent: 'Ciment anti-sulfates', url: '/ciment-resistant-sulfates', status: 'create', priority: 'low' },
  { id: 30, keyword: 'ciment en vrac Maroc', searchIntent: 'Ciment vrac', url: '/ciment-vrac', status: 'exists', priority: 'high' },
  { id: 31, keyword: 'ciment en sacs 50kg Maroc', searchIntent: 'Ciment sacs 50kg', url: '/ciment-sacs', status: 'exists', priority: 'high' },
  { id: 32, keyword: 'ciment big bag 1T Maroc', searchIntent: 'Ciment big bag', url: '/ciment-big-bag', status: 'exists', priority: 'medium' },
  { id: 33, keyword: 'béton prêt à l\'emploi Dakhla', searchIntent: 'Béton prêt à couler à Dakhla', url: '/beton-pret-emploi', status: 'exists', priority: 'high' },
  { id: 34, keyword: 'mortier ciment Maroc', searchIntent: 'Mortier à base de ciment', url: '/mortier-ciment-maroc', status: 'create', priority: 'medium' },
  { id: 35, keyword: 'clinker Maroc', searchIntent: 'Clinker pour ciment', url: '/processus', status: 'exists', priority: 'low' },
  { id: 36, keyword: 'ciment CPJ 32.5 Maroc', searchIntent: 'Classe 32.5', url: '/cpj-35', status: 'create', priority: 'low' },
  { id: 37, keyword: 'ciment CPJ 42.5 Maroc', searchIntent: 'Classe 42.5', url: '/cpj-45', status: 'exists', priority: 'low' },
  { id: 38, keyword: 'ciment CPJ 52.5 Maroc', searchIntent: 'Classe 52.5', url: '/cpj-55', status: 'exists', priority: 'low' },
  { id: 39, keyword: 'mortier-colle ciment Maroc', searchIntent: 'Colle pour carrelage', url: '/mortier-colle-ciment', status: 'create', priority: 'low' },
  { id: 40, keyword: 'ciment PMC Maroc', searchIntent: 'Ciment Portland Modifié', url: '/ciment-portland-maroc', status: 'create', priority: 'low' },

  // ====== 3. USAGES & APPLICATIONS (25) ======
  { id: 41, keyword: 'ciment pour fondation', searchIntent: 'Quel ciment pour fondations', url: '/ciment-pour/fondation', status: 'exists', priority: 'high' },
  { id: 42, keyword: 'ciment pour dalle', searchIntent: 'Quel ciment pour dalle', url: '/ciment-pour/dallage', status: 'exists', priority: 'high' },
  { id: 43, keyword: 'ciment pour poteau', searchIntent: 'Ciment pour poteau béton armé', url: '/ciment-pour/poteau', status: 'exists', priority: 'high' },
  { id: 44, keyword: 'ciment pour poutre', searchIntent: 'Ciment pour poutre', url: '/ciment-pour/poutre', status: 'exists', priority: 'high' },
  { id: 45, keyword: 'ciment pour piscine', searchIntent: 'Ciment étanche pour piscine', url: '/ciment-pour/piscine', status: 'exists', priority: 'high' },
  { id: 46, keyword: 'ciment pour terrasse', searchIntent: 'Ciment pour terrasse extérieure', url: '/ciment-pour/terrasse', status: 'exists', priority: 'high' },
  { id: 47, keyword: 'ciment pour étanchéité', searchIntent: 'Ciment hydrofuge', url: '/ciment-pour/ciment-etancheite', status: 'exists', priority: 'high' },
  { id: 48, keyword: 'ciment pour zone côtière', searchIntent: 'Ciment résistant au sel marin', url: '/ciment-pour/ciment-chaud-zone-desertique', status: 'exists', priority: 'medium' },
  { id: 49, keyword: 'ciment pour béton armé', searchIntent: 'Ciment pour béton armé', url: '/ciment-pour/beton-arme', status: 'exists', priority: 'high' },
  { id: 50, keyword: 'ciment pour chape', searchIntent: 'Ciment pour chape de sol', url: '/ciment-pour/chape', status: 'exists', priority: 'medium' },
  { id: 51, keyword: 'ciment pour enduit', searchIntent: 'Ciment pour enduit mural', url: '/ciment-pour/enduit', status: 'exists', priority: 'medium' },
  { id: 52, keyword: 'ciment pour carrelage', searchIntent: 'Ciment pour coller carrelage', url: '/ciment-pour/carrelage-colle', status: 'exists', priority: 'medium' },
  { id: 53, keyword: 'ciment pour réparation', searchIntent: 'Ciment pour réparer béton', url: '/ciment-pour/ciment-pour-réparation', status: 'exists', priority: 'medium' },
  { id: 54, keyword: 'ciment pour sou-sol', searchIntent: 'Ciment pour sous-sol étanche', url: '/ciment-pour/sous-sol', status: 'exists', priority: 'medium' },
  { id: 55, keyword: 'ciment pour balcon', searchIntent: 'Ciment pour balcon', url: '/ciment-pour/balcon', status: 'exists', priority: 'medium' },
  { id: 56, keyword: 'ciment pour toiture', searchIntent: 'Ciment pour toiture terrasse', url: '/ciment-pour/toiture', status: 'exists', priority: 'medium' },
  { id: 57, keyword: 'ciment pour mur porteur', searchIntent: 'Ciment pour mur porteur', url: '/ciment-pour/mur', status: 'exists', priority: 'high' },
  { id: 58, keyword: 'ciment pour fosse septique', searchIntent: 'Ciment pour fosse septique', url: '/ciment-pour/fosse-septique', status: 'exists', priority: 'low' },
  { id: 59, keyword: 'ciment pour route', searchIntent: 'Ciment pour chaussée', url: '/ciment-pour/route', status: 'exists', priority: 'medium' },
  { id: 60, keyword: 'ciment pour pont', searchIntent: 'Ciment pour ouvrage d\'art', url: '/ciment-pour/pont', status: 'exists', priority: 'medium' },
  { id: 61, keyword: 'ciment pour hôpital', searchIntent: 'Ciment pour bâtiment hospitalier', url: '/ciment-pour/hopital', status: 'exists', priority: 'low' },
  { id: 62, keyword: 'ciment pour école', searchIntent: 'Ciment pour bâtiment scolaire', url: '/ciment-pour/ecole', status: 'exists', priority: 'low' },
  { id: 63, keyword: 'ciment pour mosquée', searchIntent: 'Ciment pour édifice religieux', url: '/ciment-pour/mosquee', status: 'exists', priority: 'low' },
  { id: 64, keyword: 'ciment pour stade', searchIntent: 'Ciment pour équipement sportif', url: '/ciment-pour/stade', status: 'exists', priority: 'low' },
  { id: 65, keyword: 'ciment pour usine', searchIntent: 'Ciment pour bâtiment industriel', url: '/ciment-pour/usine', status: 'exists', priority: 'low' },

  // ====== 4. LOCAL & GÉOGRAPHIQUE (15) ======
  { id: 66, keyword: 'acheter ciment Dakhla', searchIntent: 'Où acheter du ciment à Dakhla', url: '/ciment-ville/dakhla', status: 'exists', priority: 'high' },
  { id: 67, keyword: 'acheter ciment Laâyoune', searchIntent: 'Ciment à Laâyoune', url: '/ciment-ville/laayoune', status: 'exists', priority: 'high' },
  { id: 68, keyword: 'acheter ciment Casablanca', searchIntent: 'Ciment à Casablanca', url: '/ciment-ville/casablanca', status: 'exists', priority: 'high' },
  { id: 69, keyword: 'acheter ciment Marrakech', searchIntent: 'Ciment à Marrakech', url: '/ciment-ville/marrakech', status: 'exists', priority: 'high' },
  { id: 70, keyword: 'acheter ciment Rabat', searchIntent: 'Ciment à Rabat', url: '/ciment-ville/rabat', status: 'exists', priority: 'high' },
  { id: 71, keyword: 'acheter ciment Tanger', searchIntent: 'Ciment à Tanger', url: '/ciment-ville/tanger', status: 'exists', priority: 'medium' },
  { id: 72, keyword: 'acheter ciment Agadir', searchIntent: 'Ciment à Agadir', url: '/ciment-ville/agadir', status: 'exists', priority: 'medium' },
  { id: 73, keyword: 'acheter ciment Fès', searchIntent: 'Ciment à Fès', url: '/ciment-ville/fes', status: 'exists', priority: 'medium' },
  { id: 74, keyword: 'acheter ciment Oujda', searchIntent: 'Ciment à Oujda', url: '/ciment-ville/oujda', status: 'exists', priority: 'low' },
  { id: 75, keyword: 'fournisseur ciment Sud Maroc', searchIntent: 'Fournisseur ciment région sud', url: '/ciment-sud-maroc', status: 'exists', priority: 'high' },
  { id: 76, keyword: 'fournisseur ciment Mauritanie', searchIntent: 'Export ciment vers Mauritanie', url: '/ciment-mauritanie', status: 'exists', priority: 'medium' },
  { id: 77, keyword: 'livraison ciment Dakhla', searchIntent: 'Livraison de ciment à Dakhla', url: '/livraison-ciment-ville/dakhla', status: 'exists', priority: 'high' },
  { id: 78, keyword: 'ciment Dakhla Aménagement', searchIntent: 'Ciment produit par SDAD', url: '/ciment-dakhla', status: 'exists', priority: 'high' },
  { id: 79, keyword: 'ciment Boujdour', searchIntent: 'Ciment à Boujdour', url: '/ciment-ville/boujdour', status: 'exists', priority: 'medium' },
  { id: 80, keyword: 'ciment Tan-Tan', searchIntent: 'Ciment à Tan-Tan', url: '/ciment-ville/tan-tan', status: 'exists', priority: 'medium' },

  // ====== 5. TECHNIQUE & INFORMATION (20) ======
  { id: 81, keyword: 'différence ciment béton', searchIntent: 'Ciment vs béton', url: '/comparer/difference-ciment-beton', status: 'exists', priority: 'high' },
  { id: 82, keyword: 'ciment vs chaux', searchIntent: 'Ciment ou chaux', url: '/comparer/ciment-vs-chaux', status: 'exists', priority: 'medium' },
  { id: 83, keyword: 'dosage ciment béton', searchIntent: 'Combien de ciment par m³', url: '/calculateur-ciment', status: 'exists', priority: 'high' },
  { id: 84, keyword: 'calcul quantité ciment', searchIntent: 'Calculateur de ciment', url: '/calculateur-ciment', status: 'exists', priority: 'high' },
  { id: 85, keyword: 'stockage ciment chantier', searchIntent: 'Comment stocker le ciment', url: '/blog/stockage-ciment-chantier', status: 'exists', priority: 'medium' },
  { id: 86, keyword: 'durée vie ciment', searchIntent: 'Combien de temps le ciment se conserve', url: '/blog/duree-vie-ciment', status: 'exists', priority: 'medium' },
  { id: 87, keyword: 'norme ciment Maroc NM 10.1.004', searchIntent: 'Norme marocaine du ciment', url: '/blog/normes-ciment-maroc', status: 'exists', priority: 'medium' },
  { id: 88, keyword: 'certification ciment ISO 9001', searchIntent: 'Certifications qualité ciment', url: '/expertise-certifications', status: 'exists', priority: 'medium' },
  { id: 89, keyword: 'contrôle qualité ciment', searchIntent: 'Comment tester le ciment', url: '/blog/essais-resistance-ciment', status: 'exists', priority: 'low' },
  { id: 90, keyword: 'ciment périmé utiliser', searchIntent: 'Peut-on utiliser du ciment périmé', url: '/blog/duree-vie-ciment', status: 'exists', priority: 'medium' },
  { id: 91, keyword: 'temps prise ciment', searchIntent: 'Combien de temps le ciment met à prendre', url: '/lexique-ciment', status: 'exists', priority: 'low' },
  { id: 92, keyword: 'résistance ciment 28 jours', searchIntent: 'Résistance à la compression à 28j', url: '/calculateur-resistance', status: 'exists', priority: 'medium' },
  { id: 93, keyword: 'CPJ 45 vs CPJ 55', searchIntent: 'Comparatif CPJ 45 vs 55', url: '/comparer/cpj45-vs-cpj55', status: 'exists', priority: 'high' },
  { id: 94, keyword: 'ciment pour construction Dakhla', searchIntent: 'Construction à Dakhla', url: '/construction-dakhla', status: 'exists', priority: 'high' },
  { id: 95, keyword: 'ciment pour zone désertique', searchIntent: 'Ciment en climat chaud', url: '/blog/ciment-chaud-zone-desertique', status: 'exists', priority: 'low' },
  { id: 96, keyword: 'ciment résistant feu', searchIntent: 'Ciment réfractaire', url: '/ciment-refractaire-maroc', status: 'create', priority: 'low' },
  { id: 97, keyword: 'meilleur ciment Maroc', searchIntent: 'Quel est le meilleur ciment', url: '/ciment-maroc', status: 'exists', priority: 'high' },
  { id: 98, keyword: 'ciment construction durable', searchIntent: 'Ciment éco-responsable', url: '/blog/construction-durable-ciment', status: 'exists', priority: 'low' },
  { id: 99, keyword: 'ciment pour assainissement', searchIntent: 'Ciment pour ouvrages d\'assainissement', url: '/ciment-pour/fosse-septique', status: 'exists', priority: 'low' },
  { id: 100, keyword: 'génie civil ciment Maroc', searchIntent: 'Ciment pour génie civil', url: '/genie-civil-ciment', status: 'exists', priority: 'medium' },
];

/** Pages à créer (status: 'create') */
export const PAGES_TO_CREATE = KEYWORD_PAGES.filter((p) => p.status === 'create');

/** Pages existantes */
export const PAGES_EXISTING = KEYWORD_PAGES.filter((p) => p.status === 'exists');

/** Statistiques */
export const KEYWORD_STATS = {
  total: KEYWORD_PAGES.length,
  existing: PAGES_EXISTING.length,
  toCreate: PAGES_TO_CREATE.length,
  byCategory: {
    pricing: KEYWORD_PAGES.filter((p) => p.id <= 20).length,
    products: KEYWORD_PAGES.filter((p) => p.id > 20 && p.id <= 40).length,
    usages: KEYWORD_PAGES.filter((p) => p.id > 40 && p.id <= 65).length,
    local: KEYWORD_PAGES.filter((p) => p.id > 65 && p.id <= 80).length,
    technical: KEYWORD_PAGES.filter((p) => p.id > 80).length,
  },
};
