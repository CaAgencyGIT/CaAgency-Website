// Featured work videos (all re-encoded to web bitrates, muted, no audio track).
// July 2026 round 4 follow-up: the round-4 request was to remove the baked-in
// YSL mark from the Dariia reel, not the reel itself. dariia-ysl.mp4 is the
// inpainted re-render of ysl-beauty.mp4 (new filename: the old asset is
// immutable-cached). Client sequence Anton → Albina → Dariia → Saranda,
// every slot a clean cut with no logo overlays.
export const featuredVideos = [
  { src: '/videos/work/anton-tocobo-web-v1.mp4', alt: 'Anton for TOCOBO Cotton Soft Sun Stick', poster: '/images/video-thumbs/anton-tocobo-web-v1.jpg', caption: { kicker: 'Anton Drozhzhin', title: 'TOCOBO', href: '/work' } },
  { src: '/videos/work/glass-skin-sharp-v3.mp4', alt: 'Glass skin essentials campaign reel', poster: '/images/video-thumbs/glass-skin-sharp-v3.jpg', caption: { kicker: 'Albina Mavriqi', title: 'Glass skin routine', href: '/work' } },
  { src: '/videos/work/dariia-armani-beauty-web.mp4', alt: 'Dariia Bordun for Armani Beauty Cheek Tint Shine', poster: '/images/video-thumbs/dariia-armani-beauty-poster.jpg', caption: { kicker: 'Dariia Bordun', title: 'Armani Beauty', href: '/case-studies/armani-beauty-campaign' } },
  { src: '/videos/work/saranda-glow-sharp-v3.mp4', alt: 'Saranda skincare campaign reel', poster: '/images/video-thumbs/saranda-glow-sharp-v3.jpg', caption: { kicker: 'Saranda Mavriqi', title: 'Skincare glow', href: '/work' } },
]
