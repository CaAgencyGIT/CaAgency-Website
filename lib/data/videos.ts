// Campaign video catalog shared by the work page, video sitemap, and
// VideoObject structured data. Poster frames live in /public/images/video-thumbs.

// Stable publication date (when these campaign videos were added to the site).
// Avoids a daily-changing date, which Google treats as a noisy signal.
export const VIDEO_PUBLICATION_DATE = '2025-12-26'

// Publication date for the July 2026 portfolio refresh.
const JULY_2026_DATE = '2026-07-08'

// Per-video JPEG poster (Google rejects SVG and requires a representative
// frame). Generated from each source video into /public/images/video-thumbs.
// No node imports — this is also consumed from client components.
export function posterFor(src: string) {
  const name = src.split('/').pop()!.replace(/\.[^.]+$/, '')
  return `/images/video-thumbs/${name}.jpg`
}

export interface WorkVideo {
  src: string
  name: string
  brand: string
  alt: string
  /** Overrides VIDEO_PUBLICATION_DATE for videos added later. */
  published?: string
}

// July 2026 round 3: client-specified strategic order, left to right and top
// to bottom on the 4-column work grid (rows of 4).
export const workVideos: WorkVideo[] = [
  // Row 1: Sephora → Samsung → Gisou
  { src: '/videos/work/albina-sephora-web-v1.mp4', name: 'Sephora Campaign', brand: 'Sephora', alt: 'Albina for Sephora', published: JULY_2026_DATE },
  { src: '/videos/work/khutjo-samsung-web-v1.mp4', name: 'Samsung Campaign', brand: 'Samsung', alt: 'Khutjo for Samsung', published: JULY_2026_DATE },
  { src: '/videos/work/beatrix-gisou-web-v1.mp4', name: 'Gisou Campaign', brand: 'Gisou', alt: 'Beatrix for Gisou', published: JULY_2026_DATE },
  // Row 2: Kylie Cosmetics → Anua → YSL → DELERE
  { src: '/videos/work/kylie-cosmetics-web-v1.mp4', name: 'Kylie Cosmetics Campaign', brand: 'Kylie Cosmetics', alt: 'Kylie Cosmetics campaign' },
  { src: '/videos/work/anton-anua-web-v1.mp4', name: 'Anua Skincare Campaign', brand: 'Anua', alt: 'Anton for Anua', published: JULY_2026_DATE },
  { src: '/videos/work/dariia-ysl-web-v1.mp4', name: 'YSL Beauty Campaign', brand: 'YSL Beauty', alt: 'Dariia for YSL Beauty' },
  { src: '/videos/work/saranda-delere-web-v1.mp4', name: 'DELERE Campaign', brand: 'DELERE', alt: 'Saranda for DELERE', published: JULY_2026_DATE },
  // Row 3: Honor → Mixsoon → Purito (Fenty Beauty removed Oct 2026 — duplicate
  // of the redesign's own Fenty films already in workFilms)
  { src: '/videos/work/honor-web-v1.mp4', name: 'HONOR Collaboration', brand: 'HONOR', alt: 'HONOR collaboration' },
  { src: '/videos/work/albina-mixsoon-web-v1.mp4', name: 'Mixsoon Skincare', brand: 'Mixsoon', alt: 'Albina for Mixsoon', published: JULY_2026_DATE },
  { src: '/videos/work/aiym-purito-web-v1.mp4', name: 'Purito Campaign', brand: 'Purito', alt: 'Aiym for Purito', published: JULY_2026_DATE },
  // Row 4: Kiko Milano → haruharu wonder → Revolve Beauty → YesStyle
  { src: '/videos/work/idareen-kikomilano-v2-web-v1.mp4', name: 'Kiko Milano Campaign', brand: 'Kiko Milano', alt: '@_idareen_ for Kiko Milano' },
  { src: '/videos/work/rebecca-haruharu-web-v1.mp4', name: 'Haruharu Wonder Campaign', brand: 'Haruharu Wonder', alt: 'Rebecca for Haruharu Wonder', published: JULY_2026_DATE },
  { src: '/videos/work/melani-revolve-web-v1.mp4', name: 'Revolve Beauty Campaign', brand: 'Revolve Beauty', alt: 'Melani for Revolve Beauty', published: JULY_2026_DATE },
  { src: '/videos/work/georgii-yesstyle-web-v1.mp4', name: 'YesStyle Collaboration', brand: 'YesStyle', alt: 'Georgii for YesStyle', published: JULY_2026_DATE },
]

export const aboutVideos = [
  { src: '/videos/about-video-05-web-v1.mp4', name: 'CA Agency Story', description: 'Learn about CA Agency and our mission', published: JULY_2026_DATE },
  { src: '/videos/about-video-06-web-v1.mp4', name: 'CA Agency Team', description: 'Meet the team behind CA Agency', published: JULY_2026_DATE },
]

export function publishedDateFor(src: string) {
  if (src.startsWith('/videos/redesign/')) return '2026-10-22'
  return workVideos.find((video) => video.src === src)?.published ?? VIDEO_PUBLICATION_DATE
}
