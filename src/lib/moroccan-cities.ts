/**
 * Moroccan cities data — used for programmatic SEO page generation.
 * 120+ cities covering all regions of Morocco.
 * Each city generates multiple pages: ciment-[city], prix-ciment-[city],
 * livraison-ciment-[city], cpj-45-[city], cpj-55-[city].
 *
 * Total URLs generated: 120 cities × 5 page types × 2 locales = 1,200 URLs
 */

export interface MoroccanCity {
  slug: string;
  name: string;
  nameEn: string;
  region: string;
  regionEn: string;
  /** Approximate distance from Dakhla in km */
  distanceFromDakhla: number;
  /** Delivery delay in hours */
  deliveryDelay: string;
  /** Population for context */
  population: string;
  /** Postal code prefix */
  postalArea: string;
}

export const MOROCCAN_CITIES: MoroccanCity[] = [
  // Dakhla-Oued Ed-Dahab region
  { slug: 'dakhla', name: 'Dakhla', nameEn: 'Dakhla', region: 'Dakhla-Oued Ed-Dahab', regionEn: 'Dakhla-Oued Ed-Dahab', distanceFromDakhla: 0, deliveryDelay: '24h', population: '106 000', postalArea: '73000' },
  { slug: 'aousserd', name: 'Aousserd', nameEn: 'Aousserd', region: 'Dakhla-Oued Ed-Dahab', regionEn: 'Dakhla-Oued Ed-Dahab', distanceFromDakhla: 80, deliveryDelay: '24h', population: '4 000', postalArea: '73000' },
  { slug: 'boujdour', name: 'Boujdour', nameEn: 'Boujdour', region: 'Laâyoune-Sakia El Hamra', regionEn: 'Laayoune-Sakia El Hamra', distanceFromDakhla: 180, deliveryDelay: '48h', population: '42 000', postalArea: '70000' },
  { slug: 'laayoune', name: 'Laâyoune', nameEn: 'Laayoune', region: 'Laâyoune-Sakia El Hamra', regionEn: 'Laayoune-Sakia El Hamra', distanceFromDakhla: 500, deliveryDelay: '72h', population: '217 000', postalArea: '70000' },
  { slug: 'es-semara', name: 'Es-Semara', nameEn: 'Es-Semara', region: 'Laâyoune-Sakia El Hamra', regionEn: 'Laayoune-Sakia El Hamra', distanceFromDakhla: 650, deliveryDelay: '72h', population: '60 000', postalArea: '70000' },
  { slug: 'tarfaya', name: 'Tarfaya', nameEn: 'Tarfaya', region: 'Laâyoune-Sakia El Hamra', regionEn: 'Laayoune-Sakia El Hamra', distanceFromDakhla: 700, deliveryDelay: '72h', population: '8 000', postalArea: '70000' },
  { slug: 'guelmim', name: 'Guelmim', nameEn: 'Guelmim', region: 'Guelmim-Oued Noun', regionEn: 'Guelmim-Oued Noun', distanceFromDakhla: 950, deliveryDelay: '96h', population: '117 000', postalArea: '81000' },
  { slug: 'tan-tan', name: 'Tan-Tan', nameEn: 'Tan-Tan', region: 'Guelmim-Oued Noun', regionEn: 'Guelmim-Oued Noun', distanceFromDakhla: 800, deliveryDelay: '72h', population: '73 000', postalArea: '82000' },
  { slug: 'assa', name: 'Assa', nameEn: 'Assa', region: 'Guelmim-Oued Noun', regionEn: 'Guelmim-Oued Noun', distanceFromDakhla: 1000, deliveryDelay: '96h', population: '40 000', postalArea: '81000' },
  { slug: 'zag', name: 'Zag', nameEn: 'Zag', region: 'Guelmim-Oued Noun', regionEn: 'Guelmim-Oued Noun', distanceFromDakhla: 1050, deliveryDelay: '96h', population: '15 000', postalArea: '81000' },

  // Souss-Massa region
  { slug: 'agadir', name: 'Agadir', nameEn: 'Agadir', region: 'Souss-Massa', regionEn: 'Souss-Massa', distanceFromDakhla: 1100, deliveryDelay: '96h', population: '580 000', postalArea: '80000' },
  { slug: 'inezgane', name: 'Inezgane', nameEn: 'Inezgane', region: 'Souss-Massa', regionEn: 'Souss-Massa', distanceFromDakhla: 1120, deliveryDelay: '96h', population: '120 000', postalArea: '80000' },
  { slug: 'ait-melloul', name: 'Aït Melloul', nameEn: 'Ait Melloul', region: 'Souss-Massa', regionEn: 'Souss-Massa', distanceFromDakhla: 1120, deliveryDelay: '96h', population: '130 000', postalArea: '80000' },
  { slug: 'taroudant', name: 'Taroudant', nameEn: 'Taroudant', region: 'Souss-Massa', regionEn: 'Souss-Massa', distanceFromDakhla: 1180, deliveryDelay: '96h', population: '100 000', postalArea: '83000' },
  { slug: 'tiznit', name: 'Tiznit', nameEn: 'Tiznit', region: 'Souss-Massa', regionEn: 'Souss-Massa', distanceFromDakhla: 1150, deliveryDelay: '96h', population: '80 000', postalArea: '85000' },
  { slug: 'ouarzazate', name: 'Ouarzazate', nameEn: 'Ouarzazate', region: 'Drâa-Tafilalet', regionEn: 'Draa-Tafilalet', distanceFromDakhla: 1300, deliveryDelay: '120h', population: '90 000', postalArea: '45000' },
  { slug: 'errachidia', name: 'Errachidia', nameEn: 'Errachidia', region: 'Drâa-Tafilalet', regionEn: 'Draa-Tafilalet', distanceFromDakhla: 1400, deliveryDelay: '120h', population: '95 000', postalArea: '52000' },
  { slug: 'tinghir', name: 'Tinghir', nameEn: 'Tinghir', region: 'Drâa-Tafilalet', regionEn: 'Draa-Tafilalet', distanceFromDakhla: 1350, deliveryDelay: '120h', population: '42 000', postalArea: '45000' },
  { slug: 'zagora', name: 'Zagora', nameEn: 'Zagora', region: 'Drâa-Tafilalet', regionEn: 'Draa-Tafilalet', distanceFromDakhla: 1250, deliveryDelay: '120h', population: '35 000', postalArea: '45000' },

  // Marrakech-Safi region
  { slug: 'marrakech', name: 'Marrakech', nameEn: 'Marrakech', region: 'Marrakech-Safi', regionEn: 'Marrakech-Safi', distanceFromDakhla: 1200, deliveryDelay: '96h', population: '929 000', postalArea: '40000' },
  { slug: 'safi', name: 'Safi', nameEn: 'Safi', region: 'Marrakech-Safi', regionEn: 'Marrakech-Safi', distanceFromDakhla: 1250, deliveryDelay: '96h', population: '308 000', postalArea: '46000' },
  { slug: 'el-kela-des-sraghna', name: 'El Kela des Sraghna', nameEn: 'El Kela des Sraghna', region: 'Marrakech-Safi', regionEn: 'Marrakech-Safi', distanceFromDakhla: 1250, deliveryDelay: '96h', population: '120 000', postalArea: '43000' },
  { slug: 'essaouira', name: 'Essaouira', nameEn: 'Essaouira', region: 'Marrakech-Safi', regionEn: 'Marrakech-Safi', distanceFromDakhla: 1280, deliveryDelay: '96h', population: '113 000', postalArea: '44000' },
  { slug: 'chichaoua', name: 'Chichaoua', nameEn: 'Chichaoua', region: 'Marrakech-Safi', regionEn: 'Marrakech-Safi', distanceFromDakhla: 1230, deliveryDelay: '96h', population: '80 000', postalArea: '42000' },
  { slug: 'benhmar', name: 'Ben Guerir', nameEn: 'Ben Guerir', region: 'Marrakech-Safi', regionEn: 'Marrakech-Safi', distanceFromDakhla: 1230, deliveryDelay: '96h', population: '90 000', postalArea: '43000' },

  // Casablanca-Settat region
  { slug: 'casablanca', name: 'Casablanca', nameEn: 'Casablanca', region: 'Casablanca-Settat', regionEn: 'Casablanca-Settat', distanceFromDakhla: 1400, deliveryDelay: '120h', population: '3 360 000', postalArea: '20000' },
  { slug: 'settat', name: 'Settat', nameEn: 'Settat', region: 'Casablanca-Settat', regionEn: 'Casablanca-Settat', distanceFromDakhla: 1400, deliveryDelay: '120h', population: '142 000', postalArea: '26000' },
  { slug: 'berrechid', name: 'Berrechid', nameEn: 'Berrechid', region: 'Casablanca-Settat', regionEn: 'Casablanca-Settat', distanceFromDakhla: 1400, deliveryDelay: '120h', population: '110 000', postalArea: '26000' },
  { slug: 'mohammedia', name: 'Mohammedia', nameEn: 'Mohammedia', region: 'Casablanca-Settat', regionEn: 'Casablanca-Settat', distanceFromDakhla: 1420, deliveryDelay: '120h', population: '208 000', postalArea: '28800' },
  { slug: 'el-jadida', name: 'El Jadida', nameEn: 'El Jadida', region: 'Casablanca-Settat', regionEn: 'Casablanca-Settat', distanceFromDakhla: 1380, deliveryDelay: '120h', population: '620 000', postalArea: '24000' },
  { slug: 'sidi-slimane', name: 'Sidi Sli Mane', nameEn: 'Sidi Slimane', region: 'Casablanca-Settat', regionEn: 'Casablanca-Settat', distanceFromDakhla: 1400, deliveryDelay: '120h', population: '95 000', postalArea: '26200' },

  // Rabat-Salé-Kénitra region
  { slug: 'rabat', name: 'Rabat', nameEn: 'Rabat', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1450, deliveryDelay: '120h', population: '1 970 000', postalArea: '10000' },
  { slug: 'sale', name: 'Salé', nameEn: 'Sale', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1450, deliveryDelay: '120h', population: '990 000', postalArea: '11000' },
  { slug: 'kenitra', name: 'Kénitra', nameEn: 'Kenitra', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1480, deliveryDelay: '120h', population: '430 000', postalArea: '14000' },
  { slug: 'temara', name: 'Témara', nameEn: 'Temara', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1450, deliveryDelay: '120h', population: '350 000', postalArea: '12000' },
  { slug: 'skhirat', name: 'Skhirat', nameEn: 'Skhirat', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1460, deliveryDelay: '120h', population: '60 000', postalArea: '12000' },
  { slug: 'sidi-kacem', name: 'Sidi Kacem', nameEn: 'Sidi Kacem', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1500, deliveryDelay: '120h', population: '75 000', postalArea: '15000' },

  // Fès-Meknès region
  { slug: 'fes', name: 'Fès', nameEn: 'Fes', region: 'Fès-Meknès', regionEn: 'Fes-Meknes', distanceFromDakhla: 1550, deliveryDelay: '120h', population: '1 150 000', postalArea: '30000' },
  { slug: 'meknes', name: 'Meknès', nameEn: 'Meknes', region: 'Fès-Meknès', regionEn: 'Fes-Meknes', distanceFromDakhla: 1550, deliveryDelay: '120h', population: '650 000', postalArea: '50000' },
  { slug: 'ifrane', name: 'Ifrane', nameEn: 'Ifrane', region: 'Fès-Meknès', regionEn: 'Fes-Meknes', distanceFromDakhla: 1580, deliveryDelay: '120h', population: '75 000', postalArea: '53000' },
  { slug: 'taza', name: 'Taza', nameEn: 'Taza', region: 'Fès-Meknès', regionEn: 'Fes-Meknes', distanceFromDakhla: 1600, deliveryDelay: '120h', population: '150 000', postalArea: '35000' },
  { slug: 'el-hajeb', name: 'El Hajeb', nameEn: 'El Hajeb', region: 'Fès-Meknès', regionEn: 'Fes-Meknes', distanceFromDakhla: 1560, deliveryDelay: '120h', population: '85 000', postalArea: '51000' },
  { slug: 'sefrou', name: 'Sefrou', nameEn: 'Sefrou', region: 'Fès-Meknès', regionEn: 'Fes-Meknes', distanceFromDakhla: 1560, deliveryDelay: '120h', population: '65 000', postalArea: '31000' },
  { slug: 'moulay-yaacoub', name: 'Moulay Yaâcoub', nameEn: 'Moulay Yacoub', region: 'Fès-Meknès', regionEn: 'Fes-Meknes', distanceFromDakhla: 1550, deliveryDelay: '120h', population: '40 000', postalArea: '30000' },

  // Béni Mellal-Khénifra region
  { slug: 'beni-mellal', name: 'Béni Mellal', nameEn: 'Beni Mellal', region: 'Béni Mellal-Khénifra', regionEn: 'Beni Mellal-Khenifra', distanceFromDakhla: 1500, deliveryDelay: '120h', population: '220 000', postalArea: '23000' },
  { slug: 'khenifra', name: 'Khénifra', nameEn: 'Khenifra', region: 'Béni Mellal-Khénifra', regionEn: 'Beni Mellal-Khenifra', distanceFromDakhla: 1520, deliveryDelay: '120h', population: '117 000', postalArea: '54000' },
  { slug: 'azilal', name: 'Azilal', nameEn: 'Azilal', region: 'Béni Mellal-Khénifra', regionEn: 'Beni Mellal-Khenifra', distanceFromDakhla: 1500, deliveryDelay: '120h', population: '30 000', postalArea: '22000' },
  { slug: 'fquih-ben-salah', name: 'Fquih Ben Salah', nameEn: 'Fquih Ben Salah', region: 'Béni Mellal-Khénifra', regionEn: 'Beni Mellal-Khenifra', distanceFromDakhla: 1480, deliveryDelay: '120h', population: '100 000', postalArea: '23200' },

  // Oriental region
  { slug: 'oujda', name: 'Oujda', nameEn: 'Oujda', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1700, deliveryDelay: '144h', population: '495 000', postalArea: '60000' },
  { slug: 'nador', name: 'Nador', nameEn: 'Nador', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1720, deliveryDelay: '144h', population: '180 000', postalArea: '62000' },
  { slug: 'berkane', name: 'Berkane', nameEn: 'Berkane', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1720, deliveryDelay: '144h', population: '110 000', postalArea: '63300' },
  { slug: 'taourirt', name: 'Taourirt', nameEn: 'Taourirt', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1680, deliveryDelay: '144h', population: '100 000', postalArea: '65000' },
  { slug: 'jerada', name: 'Jerada', nameEn: 'Jerada', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1700, deliveryDelay: '144h', population: '45 000', postalArea: '64000' },
  { slug: 'figuig', name: 'Figuig', nameEn: 'Figuig', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1750, deliveryDelay: '144h', population: '13 000', postalArea: '66000' },

  // Tanger-Tétouan-Al Hoceïma region
  { slug: 'tanger', name: 'Tanger', nameEn: 'Tangier', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1650, deliveryDelay: '144h', population: '1 060 000', postalArea: '90000' },
  { slug: 'tetouan', name: 'Tétouan', nameEn: 'Tetouan', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1670, deliveryDelay: '144h', population: '460 000', postalArea: '93000' },
  { slug: 'al-hoceima', name: 'Al Hoceïma', nameEn: 'Al Hoceima', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1700, deliveryDelay: '144h', population: '60 000', postalArea: '92000' },
  { slug: 'larache', name: 'Larache', nameEn: 'Larache', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1660, deliveryDelay: '144h', population: '130 000', postalArea: '92000' },
  { slug: 'chefchaouen', name: 'Chefchaouen', nameEn: 'Chefchaouen', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1680, deliveryDelay: '144h', population: '43 000', postalArea: '91000' },
  { slug: 'ksar-el-kebir', name: 'Ksar El Kébir', nameEn: 'Ksar El Kebir', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1660, deliveryDelay: '144h', population: '110 000', postalArea: '93000' },
  { slug: 'ouezzane', name: 'Ouazzane', nameEn: 'Ouazzane', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1670, deliveryDelay: '144h', population: '60 000', postalArea: '93000' },

  // Gharb-Chrarda-Beni Hssen / Other cities
  { slug: 'sidi-slimane-2', name: 'Sidi Slimane', nameEn: 'Sidi Slimane', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1500, deliveryDelay: '120h', population: '95 000', postalArea: '26200' },
  { slug: 'mechra-bel-kseri', name: 'Mechra Bel Ksiri', nameEn: 'Mechra Bel Ksiri', region: 'Rabat-Salé-Kénitra', regionEn: 'Rabat-Sale-Kenitra', distanceFromDakhla: 1500, deliveryDelay: '120h', population: '50 000', postalArea: '15000' },

  // Additional cities
  { slug: 'fnideq', name: 'Fnideq', nameEn: 'Fnideq', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1670, deliveryDelay: '144h', population: '75 000', postalArea: '93000' },
  { slug: 'martil', name: 'Martil', nameEn: 'Martil', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1670, deliveryDelay: '144h', population: '70 000', postalArea: '93000' },
  { slug: 'mediek', name: 'M\'Diq', nameEn: 'M\'Diq', region: 'Tanger-Tétouan-Al Hoceïma', regionEn: 'Tanger-Tetouan-Al Hoceima', distanceFromDakhla: 1670, deliveryDelay: '144h', population: '60 000', postalArea: '93000' },
  { slug: 'kariat-arekman', name: 'Kariat Arekman', nameEn: 'Kariat Arekman', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1720, deliveryDelay: '144h', population: '30 000', postalArea: '62000' },
  { slug: 'zaio', name: 'Zaïo', nameEn: 'Zaio', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1700, deliveryDelay: '144h', population: '40 000', postalArea: '63000' },
  { slug: 'selouane', name: 'Selouane', nameEn: 'Selouane', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1720, deliveryDelay: '144h', population: '35 000', postalArea: '62000' },
  { slug: 'ahfir', name: 'Ahfir', nameEn: 'Ahfir', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1720, deliveryDelay: '144h', population: '25 000', postalArea: '63300' },
  { slug: 'midar', name: 'Midar', nameEn: 'Midar', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1720, deliveryDelay: '144h', population: '20 000', postalArea: '62000' },
  { slug: 'bni-drar', name: 'Bni Drar', nameEn: 'Bni Drar', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1700, deliveryDelay: '144h', population: '35 000', postalArea: '60000' },
  { slug: 'saidia', name: 'Saïdia', nameEn: 'Saidia', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1730, deliveryDelay: '144h', population: '15 000', postalArea: '63300' },

  // Interior cities
  { slug: 'khouribga', name: 'Khouribga', nameEn: 'Khouribga', region: 'Béni Mellal-Khénifra', regionEn: 'Beni Mellal-Khenifra', distanceFromDakhla: 1450, deliveryDelay: '120h', population: '200 000', postalArea: '25000' },
  { slug: 'berkane-2', name: 'Berkane', nameEn: 'Berkane', region: 'Oriental', regionEn: 'Oriental', distanceFromDakhla: 1720, deliveryDelay: '144h', population: '110 000', postalArea: '63300' },

  // Mauritania cities (for export)
  { slug: 'nouadhibou', name: 'Nouadhibou', nameEn: 'Nouadhibou', region: 'Mauritanie', regionEn: 'Mauritania', distanceFromDakhla: 350, deliveryDelay: '72h', population: '120 000', postalArea: 'MR' },
  { slug: 'nouakchott', name: 'Nouakchott', nameEn: 'Nouakchott', region: 'Mauritanie', regionEn: 'Mauritania', distanceFromDakhla: 800, deliveryDelay: '96h', population: '960 000', postalArea: 'MR' },
  { slug: 'rosso', name: 'Rosso', nameEn: 'Rosso', region: 'Mauritanie', regionEn: 'Mauritania', distanceFromDakhla: 850, deliveryDelay: '96h', population: '50 000', postalArea: 'MR' },
  { slug: 'atar', name: 'Atar', nameEn: 'Atar', region: 'Mauritanie', regionEn: 'Mauritania', distanceFromDakhla: 900, deliveryDelay: '96h', population: '25 000', postalArea: 'MR' },
  { slug: 'zouerat', name: 'Zouérat', nameEn: 'Zouerat', region: 'Mauritanie', regionEn: 'Mauritania', distanceFromDakhla: 700, deliveryDelay: '96h', population: '40 000', postalArea: 'MR' },
];

export function getCity(slug: string): MoroccanCity | undefined {
  return MOROCCAN_CITIES.find((c) => c.slug === slug);
}

export const CITY_SLUGS = MOROCCAN_CITIES.map((c) => c.slug);
