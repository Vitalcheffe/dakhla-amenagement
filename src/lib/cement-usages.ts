/**
 * Cement usage types — for programmatic SEO "ciment pour [usage]" pages.
 * Generates 50 usage pages × 2 locales = 100 URLs.
 */

export interface CementUsage {
  slug: string;
  labelFr: string;
  labelEn: string;
  descriptionFr: string;
  descriptionEn: string;
  recommendedCement: 'CPJ 45' | 'CPJ 55';
  dosage: string;
  category: string;
}

export const CEMENT_USAGES: CementUsage[] = [
  { slug: 'piscine', labelFr: 'piscine', labelEn: 'swimming pool', descriptionFr: 'construction et étanchéité de piscines', descriptionEn: 'swimming pool construction and waterproofing', recommendedCement: 'CPJ 55', dosage: '350-400 kg/m³', category: 'Résidentiel' },
  { slug: 'terrasse', labelFr: 'terrasse', labelEn: 'terrace', descriptionFr: 'construction de terrasses et dalles extérieures', descriptionEn: 'terrace and outdoor slab construction', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Résidentiel' },
  { slug: 'fondation', labelFr: 'fondation', labelEn: 'foundation', descriptionFr: 'fondations et semelles de bâtiments', descriptionEn: 'building foundations and footings', recommendedCement: 'CPJ 45', dosage: '300 kg/m³', category: 'Structure' },
  { slug: 'dallage', labelFr: 'dallage', labelEn: 'slab', descriptionFr: 'dallages industriels et résidentiels', descriptionEn: 'industrial and residential slabs', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Structure' },
  { slug: 'poteau', labelFr: 'poteau', labelEn: 'column', descriptionFr: 'poteaux et piliers porteurs', descriptionEn: 'load-bearing columns and pillars', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Structure' },
  { slug: 'poutre', labelFr: 'poutre', labelEn: 'beam', descriptionFr: 'poutres et linteaux', descriptionEn: 'beams and lintels', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Structure' },
  { slug: 'mur', labelFr: 'mur porteur', labelEn: 'wall', descriptionFr: 'murs porteurs et murs béton', descriptionEn: 'load-bearing walls and concrete walls', recommendedCement: 'CPJ 45', dosage: '300 kg/m³', category: 'Structure' },
  { slug: 'cloture', labelFr: 'clôture', labelEn: 'fence', descriptionFr: 'clôtures et murets en béton', descriptionEn: 'concrete fences and walls', recommendedCement: 'CPJ 45', dosage: '300 kg/m³', category: 'Extérieur' },
  { slug: 'escalier', labelFr: 'escalier', labelEn: 'staircase', descriptionFr: 'escaliers en béton armé', descriptionEn: 'reinforced concrete staircases', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Structure' },
  { slug: 'cheminee', labelFr: 'cheminée', labelEn: 'fireplace', descriptionFr: 'cheminées et foyers', descriptionEn: 'fireplaces and hearths', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Résidentiel' },
  { slug: 'chape', labelFr: 'chape', labelEn: 'screed', descriptionFr: 'chapes de nivellement', descriptionEn: 'leveling screeds', recommendedCement: 'CPJ 45', dosage: '250-300 kg/m³', category: 'Finition' },
  { slug: 'enduit', labelFr: 'enduit', labelEn: 'plaster', descriptionFr: 'enduits muraux intérieurs et extérieurs', descriptionEn: 'interior and exterior wall plasters', recommendedCement: 'CPJ 45', dosage: '300 kg/m³', category: 'Finition' },
  { slug: 'crepi', labelFr: 'crépi', labelEn: 'render', descriptionFr: 'crépis décoratifs extérieurs', descriptionEn: 'decorative exterior renders', recommendedCement: 'CPJ 45', dosage: '300 kg/m³', category: 'Finition' },
  { slug: 'beton-arme', labelFr: 'béton armé', labelEn: 'reinforced concrete', descriptionFr: 'béton armé structurel', descriptionEn: 'structural reinforced concrete', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Structure' },
  { slug: 'beton-proprete', labelFr: 'béton de propreté', labelEn: 'blinding concrete', descriptionFr: 'béton maigre sous fondations', descriptionEn: 'lean concrete under foundations', recommendedCement: 'CPJ 45', dosage: '150-250 kg/m³', category: 'Structure' },
  { slug: 'route', labelFr: 'route', labelEn: 'road', descriptionFr: 'chaussées et infrastructures routières', descriptionEn: 'road pavements and infrastructure', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Infrastructure' },
  { slug: 'parking', labelFr: 'parking', labelEn: 'parking', descriptionFr: 'parkings et aires de stationnement', descriptionEn: 'parking lots and areas', recommendedCement: 'CPJ 55', dosage: '350-400 kg/m³', category: 'Infrastructure' },
  { slug: 'trottoir', labelFr: 'trottoir', labelEn: 'sidewalk', descriptionFr: 'trottoirs et passages piétons', descriptionEn: 'sidewalks and pedestrian crossings', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Infrastructure' },
  { slug: 'caniveau', labelFr: 'caniveau', labelEn: 'drain', descriptionFr: 'caniveaux et ouvrages d\'assainissement', descriptionEn: 'drains and sanitation works', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Infrastructure' },
  { slug: 'buse', labelFr: 'buse', labelEn: 'pipe', descriptionFr: 'buses et tuyaux en béton', descriptionEn: 'concrete pipes and culverts', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Infrastructure' },
  { slug: 'pont', labelFr: 'pont', labelEn: 'bridge', descriptionFr: 'ponts et ouvrages d\'art', descriptionEn: 'bridges and engineering structures', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Génie civil' },
  { slug: 'barrage', labelFr: 'barrage', labelEn: 'dam', descriptionFr: 'barrages et ouvrages hydrauliques', descriptionEn: 'dams and hydraulic structures', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Génie civil' },
  { slug: 'port', labelFr: 'port', labelEn: 'port', descriptionFr: 'ouvrages portuaires et maritimes', descriptionEn: 'port and maritime structures', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Génie civil' },
  { slug: 'tunnel', labelFr: 'tunnel', labelEn: 'tunnel', descriptionFr: 'tunnels et ouvrages souterrains', descriptionEn: 'tunnels and underground works', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Génie civil' },
  { slug: 'resa', labelFr: 'réservoir', labelEn: 'reservoir', descriptionFr: 'réservoirs et châteaux d\'eau', descriptionEn: 'reservoirs and water towers', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Génie civil' },
  { slug: 'fosse-septique', labelFr: 'fosse septique', labelEn: 'septic tank', descriptionFr: 'fosses septiques et assainissement', descriptionEn: 'septic tanks and sanitation', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Assainissement' },
  { slug: 'puits', labelFr: 'puits', labelEn: 'well', descriptionFr: 'puits et ouvrages de captage', descriptionEn: 'wells and catchment works', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Assainissement' },
  { slug: 'bassin', labelFr: 'bassin', labelEn: 'basin', descriptionFr: 'bassins de rétention et piscines', descriptionEn: 'retention basins and pools', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Assainissement' },
  { slug: 'sol-industriel', labelFr: 'sol industriel', labelEn: 'industrial floor', descriptionFr: 'sols industriels haute résistance', descriptionEn: 'high-strength industrial floors', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Industriel' },
  { slug: 'entrepot', labelFr: 'entrepôt', labelEn: 'warehouse', descriptionFr: 'entrepôts et bâtiments industriels', descriptionEn: 'warehouses and industrial buildings', recommendedCement: 'CPJ 55', dosage: '350-400 kg/m³', category: 'Industriel' },
  { slug: 'usine', labelFr: 'usine', labelEn: 'factory', descriptionFr: 'usines et bâtiments de production', descriptionEn: 'factories and production buildings', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Industriel' },
  { slug: 'silos', labelFr: 'silos', labelEn: 'silos', descriptionFr: 'silos de stockage industriels', descriptionEn: 'industrial storage silos', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Industriel' },
  { slug: 'ecole', labelFr: 'école', labelEn: 'school', descriptionFr: 'écoles et bâtiments éducatifs', descriptionEn: 'schools and educational buildings', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Public' },
  { slug: 'hopital', labelFr: 'hôpital', labelEn: 'hospital', descriptionFr: 'hôpitaux et établissements de santé', descriptionEn: 'hospitals and healthcare facilities', recommendedCement: 'CPJ 55', dosage: '350-400 kg/m³', category: 'Public' },
  { slug: 'mosquee', labelFr: 'mosquée', labelEn: 'mosque', descriptionFr: 'mosquées et édifices religieux', descriptionEn: 'mosques and religious buildings', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Public' },
  { slug: 'mairie', labelFr: 'mairie', labelEn: 'city hall', descriptionFr: 'mairies et bâtiments administratifs', descriptionEn: 'city halls and administrative buildings', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Public' },
  { slug: 'stade', labelFr: 'stade', labelEn: 'stadium', descriptionFr: 'stades et équipements sportifs', descriptionEn: 'stadiums and sports facilities', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Public' },
  { slug: 'parking-souterrain', labelFr: 'parking souterrain', labelEn: 'underground parking', descriptionFr: 'parkings souterrains et caves', descriptionEn: 'underground parking and basements', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Infrastructure' },
  { slug: 'sous-sol', labelFr: 'sous-sol', labelEn: 'basement', descriptionFr: 'sous-sols et caves étanches', descriptionEn: 'basements and waterproof cellars', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Résidentiel' },
  { slug: 'garage', labelFr: 'garage', labelEn: 'garage', descriptionFr: 'garages et ateliers', descriptionEn: 'garages and workshops', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Résidentiel' },
  { slug: 'abri-jardin', labelFr: 'abri de jardin', labelEn: 'garden shed', descriptionFr: 'abris de jardin et petites constructions', descriptionEn: 'garden sheds and small constructions', recommendedCement: 'CPJ 45', dosage: '300 kg/m³', category: 'Extérieur' },
  { slug: 'bbq', labelFr: 'barbecue', labelEn: 'barbecue', descriptionFr: 'barbecues et plans de travail extérieurs', descriptionEn: 'barbecues and outdoor countertops', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Extérieur' },
  { slug: 'plancher', labelFr: 'plancher', labelEn: 'floor', descriptionFr: 'planchers et dalles structurelles', descriptionEn: 'structural floors and slabs', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Structure' },
  { slug: 'balcon', labelFr: 'balcon', labelEn: 'balcony', descriptionFr: 'balcons et loggias', descriptionEn: 'balconies and loggias', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Résidentiel' },
  { slug: 'toiture', labelFr: 'toiture-terrasse', labelEn: 'roof terrace', descriptionFr: 'toitures-terrasses étanches', descriptionEn: 'waterproof roof terraces', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Résidentiel' },
  { slug: 'bordure', labelFr: 'bordure', labelEn: 'curb', descriptionFr: 'bordures et pavés', descriptionEn: 'curbs and pavers', recommendedCement: 'CPJ 45', dosage: '350 kg/m³', category: 'Infrastructure' },
  { slug: 'mobilier-urbain', labelFr: 'mobilier urbain', labelEn: 'urban furniture', descriptionFr: 'mobilier urbain en béton', descriptionEn: 'concrete urban furniture', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Public' },
  { slug: 'sculpture', labelFr: 'sculpture', labelEn: 'sculpture', descriptionFr: 'sculptures et éléments décoratifs', descriptionEn: 'sculptures and decorative elements', recommendedCement: 'CPJ 55', dosage: '400 kg/m³', category: 'Décoration' },
  { slug: 'carrelage-colle', labelFr: 'colle carrelage', labelEn: 'tile adhesive', descriptionFr: 'colle pour carrelage et revêtements', descriptionEn: 'tile adhesive and coatings', recommendedCement: 'CPJ 45', dosage: 'N/A', category: 'Finition' },
  { slug: 'joint', labelFr: 'joints', labelEn: 'joints', descriptionFr: 'joints pour carrelage et maçonnerie', descriptionEn: 'tile and masonry joints', recommendedCement: 'CPJ 45', dosage: 'N/A', category: 'Finition' },
];

export function getUsage(slug: string): CementUsage | undefined {
  return CEMENT_USAGES.find((u) => u.slug === slug);
}
