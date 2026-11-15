// Talent card portraits, keyed by talent slug. Used by /talents, the homepage
// Talent section and the profile pages so they all show the same photo.
// Nov 2026 (refined grid): the card header (CA logo, divider, two-line name)
// is live HTML in TalentCard; these files are header-less portraits on the
// neutral #F4F4F2 backdrop, all 1122:1241, generated with
//   scripts/talent-covers/build_covers.py --plates
// from the approved artwork in assets/talent-covers/source (old baked
// headers erased, never cropped into the person). top/bottom are the edge
// colours used as backing while the image loads; alt describes the portrait;
// name overrides the name shown on the card (first word on line one, the
// rest on line two).
export const talentCardArt: Record<string, { src: string; top: string; bottom: string; alt?: string; name?: string }> = {
  'melani-seiffert': { src: '/images/talents/portraits/melani-seiffert-v1.webp', top: '#f4f4f1', bottom: '#d8a08b', alt: 'Melani Seiffert, CA Agency talent portrait: close-up portrait with long sleek black hair and glossy lips on an off-white background' },
  'albina-mavriqi': { src: '/images/talents/portraits/albina-mavriqi-v1.webp', top: '#f4f4f1', bottom: '#936955', alt: 'Albina Mavriqi, CA Agency talent portrait: close-up portrait with long straight light-brown hair on an off-white background' },
  'melly-sanchez': { src: '/images/talents/portraits/melly-sanchez-v1.webp', top: '#f4f4f1', bottom: '#dba483', alt: 'Melly Sanchez, CA Agency talent portrait: close-up portrait with slicked-back dark hair, smoky eye make-up and statement earrings on an off-white background' },
  'anton-drozhzhin': { src: '/images/talents/portraits/anton-drozhzhin-v1.webp', top: '#f4f4f1', bottom: '#302c28', alt: 'Anton Drozhzhin, CA Agency talent portrait: close-up portrait with tousled dark hair and a dark top on an off-white background' },
  'dariia-bordun': { src: '/images/talents/portraits/dariia-bordun-v1.webp', top: '#f4f4f1', bottom: '#443023', alt: 'Dariia Bordun, CA Agency talent portrait: close-up profile portrait with voluminous dark hair and a gold necklace on an off-white background' },
  'rebecca-ghaderi': { src: '/images/talents/portraits/rebecca-ghaderi-v1.webp', top: '#f4f4f1', bottom: '#4e4e54', alt: 'Rebecca Ghaderi, CA Agency talent portrait: close-up portrait with dark hair swept up, one arm raised, in a black T-shirt on an off-white background' },
  'beatrix-ramosaj': { name: 'Beatrix Kamerolli', src: '/images/talents/portraits/beatrix-ramosaj-v1.webp', top: '#f3f4f1', bottom: '#de977f', alt: 'Beatrix Kamerolli, CA Agency talent portrait: close-up portrait with an updo, lilac eye make-up and crystal drop earrings on an off-white background' },
  'albulena-mavriqi': { src: '/images/talents/portraits/albulena-mavriqi-v1.webp', top: '#f4f4f1', bottom: '#d9a388', alt: 'Albulena Mavriqi, CA Agency talent portrait: close-up portrait with slicked-back hair, glossy lips and her hand under her chin on an off-white background' },
  'loresa-konushevci': { src: '/images/talents/portraits/loresa-konushevci-v1.webp', top: '#f4f4f2', bottom: '#a9826c', alt: 'Loresa Konushevci, CA Agency talent portrait: close-up portrait with long brown hair and a lilac hair clip on an off-white background' },
  'ardita-gashi': { src: '/images/talents/portraits/ardita-gashi-v1.webp', top: '#f4f4f1', bottom: '#d8bbab', alt: 'Ardita Gashi, CA Agency talent portrait: close-up portrait with blonde hair and her hands at her temples on an off-white background' },
  'jay-sadiq': { src: '/images/talents/portraits/jay-sadiq-v1.webp', top: '#f4f5f2', bottom: '#ead9d0', alt: 'Jay Sadiq, CA Agency talent portrait: close-up portrait with swept dark curly hair, a white knit shirt and a chain on an off-white background' },
  'anisa-hukmova': { src: '/images/talents/portraits/anisa-hukmova-v1.webp', top: '#f3f4f1', bottom: '#7f553f', alt: 'Anisa Hukmova, CA Agency talent portrait: close-up portrait with long highlighted brown hair on an off-white background' },
  'khutjo-matsoma': { src: '/images/talents/portraits/khutjo-matsoma-v1.webp', top: '#f3f4f1', bottom: '#a06e53', alt: 'Khutjo Matsoma, CA Agency talent portrait: close-up portrait with long sleek dark hair and her hand at her temple on an off-white background' },
  'aurela-elshani': { src: '/images/talents/portraits/aurela-elshani-v1.webp', top: '#f4f4f1', bottom: '#8d695a', alt: 'Aurela Elshani, CA Agency talent portrait: close-up portrait with long dark hair swept back on an off-white background' },
  'qendresa-konushevci': { src: '/images/talents/portraits/qendresa-konushevci-v1.webp', top: '#f4f4f2', bottom: '#bf8d6c', alt: 'Qendresa Konushevci, CA Agency talent portrait: close-up portrait with a white braided headband and long blonde hair on an off-white background' },
  'georgii-galaev': { src: '/images/talents/portraits/georgii-galaev-v1.webp', top: '#f4f4f1', bottom: '#9b7969', alt: 'Georgii Galaev, CA Agency talent portrait: close-up portrait with wavy dark hair and a black tank top on an off-white background' },
  'aiym-kablan': { src: '/images/talents/portraits/aiym-kablan-v1.webp', top: '#f4f4f1', bottom: '#ca9481', alt: 'Aiym Kablan, CA Agency talent portrait: close-up portrait with long light-brown hair and winged eyeliner on an off-white background' },
  'saranda-mavriqi': { src: '/images/talents/portraits/saranda-mavriqi-v1.webp', top: '#f4f4f2', bottom: '#e7ac91', alt: 'Saranda Mavriqi, CA Agency talent portrait: front-facing close-up portrait with slicked-back hair and gold knot earrings on an off-white background' },
  'baka': { src: '/images/talents/portraits/baka-v1.webp', top: '#f3f4f1', bottom: '#dad7d8' },
  'voyage': { src: '/images/talents/portraits/voyage-v1.webp', top: '#f3f4f1', bottom: '#d9d0ca' },
  'luka': { src: '/images/talents/portraits/luka-v1.webp', top: '#f3f4f1', bottom: '#efeeeb' },
  'choda': { src: '/images/talents/portraits/choda-v1.webp', top: '#f3f4f1', bottom: '#aaa8a4' },
  'windoh': { src: '/images/talents/portraits/windoh-v1.webp', top: '#f3f4f1', bottom: '#a6a6b4' },
  'yassuo': { src: '/images/talents/portraits/yassuo-v1.webp', top: '#f3f4f1', bottom: '#a2a2a0' },
  'vania-fernandes': { src: '/images/talents/portraits/vania-fernandes-v1.webp', top: '#f3f4f1', bottom: '#dda287' },
  'gvantsa-okinashvili': { src: '/images/talents/portraits/gvantsa-okinashvili-v1.webp', top: '#f3f4f1', bottom: '#aea096', alt: 'Gvantsa Okinashvili, CA Agency talent portrait: portrait with long straight dark hair, a lace top and a silver necklace on an off-white background' },
  'anhelina-andrusik': { src: '/images/talents/portraits/anhelina-andrusik-v1.webp', top: '#f3f4f1', bottom: '#c9ada0' },
  'dora-nguyen': { src: '/images/talents/portraits/dora-nguyen-v1.webp', top: '#f4f4f2', bottom: '#d7b6a5', alt: 'Dora Nguyen, CA Agency talent portrait: portrait with a short black bob and sunglasses on her head on an off-white background' },
}

/** The talent's cover (same file as their card on /talents), or the given
 * fallback (the database photo) for talents without one. Use this wherever a
 * talent's portrait is shown so the profile page always matches the grid. */
export function talentCoverSrc(slug: string, fallback: string): string {
  return talentCardArt[slug]?.src ?? fallback
}
