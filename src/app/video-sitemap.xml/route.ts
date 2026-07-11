import { SITE } from '@/lib/seo';

/**
 * Video sitemap route handler — generates a Google-compatible video sitemap XML.
 * Helps Google index videos for video search results.
 * Covers the 3 videos on the site: hero, process, sustainability.
 */
export const dynamic = 'force-static';

interface VideoEntry {
  pagePath: string;
  videoPath: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  thumbnail: string;
  duration: number;
  publicationDate: string;
}

const VIDEOS: VideoEntry[] = [
  {
    pagePath: '',
    videoPath: '/videos/hero.mp4',
    titleFr: 'Dakhla Aménagement — Ciment de Qualité au Maroc',
    titleEn: 'Dakhla Aménagement — Quality Cement in Morocco',
    descFr:
      "Vidéo de présentation de Dakhla Aménagement S.A., producteur de ciment CPJ 45 et CPJ 55 à Dakhla, Maroc. Centre de broyage de clinker moderne, livraison vrac, sacs et big bag dans tout le Sud marocain.",
    descEn:
      'Presentation video of Dakhla Aménagement S.A., CPJ 45 and CPJ 55 cement producer in Dakhla, Morocco. Modern clinker grinding plant, bulk, bags and big bag delivery across Southern Morocco.',
    thumbnail: '/images/og-banner.jpg',
    duration: 30,
    publicationDate: '2024-01-15',
  },
  {
    pagePath: '/processus',
    videoPath: '/videos/process.mp4',
    titleFr: 'Processus de Fabrication du Ciment — Dakhla Aménagement',
    titleEn: 'Cement Manufacturing Process — Dakhla Aménagement',
    descFr:
      "Vidéo du processus de fabrication du ciment DAM : réception du clinker, broyage, dosage laboratoire, conditionnement. Centre de broyage moderne à Dakhla, capacité 500K tonnes/an.",
    descEn:
      'Video of the DAM cement manufacturing process: clinker reception, grinding, lab dosing, packaging. Modern grinding plant in Dakhla, 500K tons/year capacity.',
    thumbnail: '/images/grinding-process.jpg',
    duration: 45,
    publicationDate: '2024-01-15',
  },
  {
    pagePath: '/durabilite',
    videoPath: '/videos/sustainability.mp4',
    titleFr: 'Durabilité & RSE — Dakhla Aménagement Ciment Maroc',
    titleEn: 'Sustainability & CSR — Dakhla Aménagement Cement Morocco',
    descFr:
      "Vidéo sur l'engagement durable de Dakhla Aménagement : énergie solaire industrielle, réduction CO2, recyclage, programme RSE communautaire à Dakhla. Ciment éco-responsable certifié au Maroc.",
    descEn:
      "Video on Dakhla Aménagement's sustainability commitment: industrial solar energy, CO2 reduction, recycling, community CSR program in Dakhla. Certified eco-friendly cement in Morocco.",
    thumbnail: '/images/solar-industrial.jpg',
    duration: 40,
    publicationDate: '2024-01-15',
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const entries: string[] = [];

  for (const locale of SITE.locales) {
    const isEn = locale === 'en';
    for (const video of VIDEOS) {
      const pageUrl = `${SITE.url}/${locale}${video.pagePath}`;
      const title = isEn ? video.titleEn : video.titleFr;
      const description = isEn ? video.descEn : video.descFr;
      const tags = isEn
        ? ['cement', 'Morocco', 'Dakhla', 'CPJ 45', 'CPJ 55', 'cement manufacturer']
        : ['ciment', 'Maroc', 'Dakhla', 'CPJ 45', 'CPJ 55', 'cimenterie'];

      const tagXml = tags.map((tag) => `<video:tag>${escapeXml(tag)}</video:tag>`).join('');

      entries.push(`  <url>
    <loc>${escapeXml(pageUrl)}</loc>
    <video:video>
      <video:thumbnail_loc>${SITE.url}${video.thumbnail}</video:thumbnail_loc>
      <video:title>${escapeXml(title)}</video:title>
      <video:description>${escapeXml(description)}</video:description>
      <video:content_loc>${SITE.url}${video.videoPath}</video:content_loc>
      <video:player_loc>${pageUrl}#video</video:player_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.publicationDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
      ${tagXml}
      <video:category>${isEn ? 'Industry &amp; Construction' : 'Industrie &amp; Construction'}</video:category>
      <video:uploader info="${SITE.url}">${escapeXml(SITE.name)}</video:uploader>
    </video:video>
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
