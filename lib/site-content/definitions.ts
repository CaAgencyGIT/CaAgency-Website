import { beautyPageDefaults, skincarePageDefaults } from '@/lib/site-content/category-pages'

export type SiteContentField =
  | {
      key: string
      label: string
      type: 'text' | 'textarea' | 'url' | 'number' | 'html'
      description?: string
      rows?: number
    }
  | {
      key: string
      label: string
      type: 'group'
      description?: string
      fields: SiteContentField[]
    }
  | {
      key: string
      label: string
      type: 'array'
      description?: string
      itemLabel?: string
      fields: SiteContentField[]
    }

export type SiteContentDefinition<T = unknown> = {
  key: string
  title: string
  description: string
  fields: SiteContentField[]
  defaultData: T
}

const basicSeoLandingFields: SiteContentField[] = [
  {
    key: 'hero',
    label: 'Hero',
    type: 'group',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea', rows: 4 },
      { key: 'primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'secondaryButtonHref', label: 'Secondary button link', type: 'text' },
    ],
  },
  {
    key: 'stats',
    label: 'Statistics',
    type: 'array',
    itemLabel: 'Stat',
    fields: [
      { key: 'value', label: 'Value', type: 'text' },
      { key: 'label', label: 'Label', type: 'text' },
    ],
  },
  {
    key: 'intro',
    label: 'Intro (long-form)',
    type: 'group',
    fields: [
      { key: 'heading', label: 'Heading', type: 'text' },
      {
        key: 'paragraphs',
        label: 'Paragraphs',
        type: 'array',
        itemLabel: 'Paragraph',
        fields: [{ key: 'text', label: 'Text', type: 'textarea', rows: 4 }],
      },
    ],
  },
  {
    key: 'highlights',
    label: 'Highlight cards',
    type: 'group',
    fields: [
      { key: 'title', label: 'Section title', type: 'text' },
      {
        key: 'items',
        label: 'Cards',
        type: 'array',
        itemLabel: 'Card',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'description', label: 'Description', type: 'textarea', rows: 4 },
        ],
      },
    ],
  },
  {
    key: 'talents',
    label: 'Talents section',
    type: 'group',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'buttonLabel', label: 'Button label', type: 'text' },
      { key: 'buttonHref', label: 'Button link', type: 'text' },
    ],
  },
  {
    key: 'industries',
    label: 'Industries',
    type: 'group',
    fields: [
      { key: 'title', label: 'Section title', type: 'text' },
      {
        key: 'items',
        label: 'Items',
        type: 'array',
        itemLabel: 'Industry',
        fields: [
          { key: 'icon', label: 'Icon', type: 'text', description: 'Emoji or short symbol' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'description', label: 'Description', type: 'textarea', rows: 4 },
        ],
      },
    ],
  },
  {
    key: 'faq',
    label: 'FAQ',
    type: 'group',
    fields: [
      { key: 'title', label: 'Section title', type: 'text' },
      {
        key: 'items',
        label: 'Questions',
        type: 'array',
        itemLabel: 'Question',
        fields: [
          { key: 'question', label: 'Question', type: 'text' },
          { key: 'answer', label: 'Answer', type: 'textarea', rows: 4 },
        ],
      },
    ],
  },
  {
    key: 'cta',
    label: 'CTA',
    type: 'group',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea', rows: 3 },
      { key: 'buttonLabel', label: 'Button label', type: 'text' },
      { key: 'buttonHref', label: 'Button link', type: 'text' },
    ],
  },
]

export const siteContentDefinitions: SiteContentDefinition[] = [
  {
    key: 'home',
    title: 'Homepage',
    description: 'Hero, statistics, intro, homepage services and featured work CTA.',
    fields: [
      {
        key: 'hero',
        label: 'Hero',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'titleSecondLine', label: 'Second line', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'textarea', rows: 4 },
          {
            key: 'carouselImages',
            label: 'Carousel images',
            type: 'array',
            itemLabel: 'Image',
            fields: [
              { key: 'src', label: 'Image URL', type: 'url' },
              { key: 'alt', label: 'Alt text', type: 'text' },
            ],
          },
        ],
      },
      {
        key: 'stats',
        label: 'Statistics',
        type: 'group',
        fields: [
          {
            key: 'items',
            label: 'Items',
            type: 'array',
            itemLabel: 'Stat',
            fields: [
              { key: 'value', label: 'Value', type: 'number' },
              { key: 'suffix', label: 'Suffix', type: 'text' },
              { key: 'label', label: 'Label', type: 'text' },
            ],
          },
          { key: 'tagline', label: 'Tagline', type: 'textarea', rows: 3 },
        ],
      },
      {
        key: 'intro',
        label: 'This is CA Agency',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          {
            key: 'paragraphs',
            label: 'Paragraphs',
            type: 'array',
            itemLabel: 'Paragraph',
            fields: [{ key: 'text', label: 'Text', type: 'textarea', rows: 4 }],
          },
          { key: 'buttonLabel', label: 'Button label', type: 'text' },
          { key: 'buttonHref', label: 'Button link', type: 'text' },
          {
            key: 'mediaItems',
            label: 'Media carousel',
            type: 'array',
            itemLabel: 'Media',
            fields: [
              { key: 'type', label: 'Type', type: 'text' },
              { key: 'src', label: 'File URL', type: 'text' },
              { key: 'alt', label: 'Alt text (for images)', type: 'text' },
            ],
          },
        ],
      },
      {
        key: 'servicesOverview',
        label: 'Services overview block',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'textarea', rows: 3 },
          {
            key: 'items',
            label: 'Service cards',
            type: 'array',
            itemLabel: 'Service',
            fields: [
              { key: 'title', label: 'Title', type: 'text' },
              { key: 'description', label: 'Description', type: 'textarea', rows: 4 },
              { key: 'icon', label: 'Icon key', type: 'text' },
            ],
          },
          { key: 'buttonLabel', label: 'Button label', type: 'text' },
          { key: 'buttonHref', label: 'Button link', type: 'text' },
        ],
      },
      {
        key: 'talents',
        label: 'Homepage talents',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'description', label: 'Description', type: 'textarea', rows: 3 },
          { key: 'buttonLabel', label: 'Button label', type: 'text' },
          { key: 'buttonHref', label: 'Button link', type: 'text' },
          { key: 'limit', label: 'Number of talents', type: 'number' },
        ],
      },
      {
        key: 'featuredWork',
        label: 'Featured work CTA',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'description', label: 'Description', type: 'textarea', rows: 3 },
          { key: 'buttonLabel', label: 'Button label', type: 'text' },
          { key: 'buttonHref', label: 'Button link', type: 'text' },
        ],
      },
    ],
    defaultData: {
      hero: {
        title: 'Global Beauty Influencer',
        titleSecondLine: 'Marketing Agency',
        subtitle:
          'We connect beauty, skincare, and lifestyle brands with creators across the USA and global markets, managing strategy, production, amplification, and performance reporting.',
        // July 2026 round 3: Lidia (Morphe) and Aysa (Beauty of Joseon) retired;
        // Rebecca x ELLIS Brooklyn, Khutjo x Medicube and Melly x Huda Beauty
        // added in that client-specified order, interleaved so the 3-up
        // coverflow never shows the same talent or brand twice at once.
        // July 2026 revisions R1+R2: the blurry ELLIS Brooklyn collage crop is
        // replaced by the new Too Faced event collage (left 2×3 tile section of
        // the 4:5 original so the 9:16 card crops nothing unexpected), and the
        // letterboxed Rhode photo by a vertical 2×3 crop of the Rhode grid.
        // Originals live in /public/assets/rev-2026-07/.
        carouselImages: [
          { src: '/images/hero/albina-medicube.webp', alt: 'Albina for Medicube, CA Agency campaign' },
          { src: '/assets/rev-2026-07/hero-slide-1-916.jpg', alt: 'CA Agency talent at the Too Faced launch event' },
          { src: '/images/hero/dariia-ysl.webp', alt: 'Dariia for YSL Beauty, CA Agency campaign' },
          { src: '/images/hero/khutjo-medicube.webp', alt: 'Khutjo for Medicube, CA Agency campaign' },
          { src: '/images/hero/melly-huda-beauty-916.webp', alt: 'Melly for Huda Beauty, CA Agency campaign' },
          { src: '/assets/rev-2026-07/rhode-grid-vertical.jpg', alt: 'Rhode campaign content grid, CA Agency' },
          { src: '/images/hero/melani-skin1004.webp', alt: 'Melani for SKIN1004, CA Agency campaign' },
        ],
      },
      stats: {
        items: [
          { value: 18, suffix: 'M+', label: 'Total Followers' },
          { value: 3000, suffix: '+', label: 'Campaigns' },
          { value: 150, suffix: '+', label: 'Global Brands' },
        ],
        tagline:
          'Trusted by brands across beauty, skincare, and lifestyle, from emerging labels to global leaders. We turn creator partnerships into campaigns that stop the scroll and move the needle.',
      },
      intro: {
        title: 'This is CA Agency',
        paragraphs: [
          {
            text: 'Our influencer marketing agency connects leading global brands with the creators who shape culture, crafting data-driven campaigns that grow sales and brand awareness.',
          },
          {
            text: 'From first strategy to final report, we handle every part of a campaign in-house, giving brands one partner for creator matching, content, and performance across beauty, skincare, and lifestyle.',
          },
        ],
        buttonLabel: 'More about us',
        buttonHref: '/about',
        // July 2026 round 3: client sequence Sydney → Dariia → Albina → Melly →
        // Huda → Douglas, clean cuts (no watermarks), TOCOBO reel retired.
        // July 2026: `-clean` filenames are byte-identical to the round-3
        // de-watermarked reels but under fresh URLs — the original names were
        // served with brand marks during round 2 and sit in visitor caches
        // with immutable headers, so they can never be reused for clean bytes.
        mediaItems: [
          { type: 'video', src: '/videos/work/reel-DX2BnbDMhd9-clean.mp4', alt: 'TIRTIR matcha skincare campaign reel' },
          { type: 'video', src: '/videos/work/reel-DT3Pv52jCqc-clean.mp4', alt: 'Rhode blush campaign reel' },
          { type: 'video', src: '/videos/work/reel-DYKuGHLNs6F-clean.mp4', alt: 'Frozen gua sha skincare campaign reel' },
          { type: 'video', src: '/videos/work/reel-DX2Bva6sJk6-clean.mp4', alt: 'Fenty Beauty campaign reel' },
          { type: 'video', src: '/videos/work/reel-DK7rKHjOr6a-clean.mp4', alt: 'Bali Body campaign reel' },
          { type: 'video', src: '/videos/work/reel-DT3Qg4sjHPm-clean.mp4', alt: 'Haruharu Wonder serum mist campaign reel' },
        ],
      },
      servicesOverview: {
        title: 'What We Do',
        subtitle:
          "A full-service influencer and brand marketing agency, one of the world's leading agencies in beauty, skincare, and lifestyle, taking brands from strategy through execution.",
        items: [
          {
            title: 'Influencer Campaigns',
            description:
              'Strategic brand-creator partnerships across Instagram, TikTok & YouTube that drive real results.',
            icon: 'spark',
          },
          {
            title: 'Full-Service Talent Management',
            description:
              'End-to-end representation for creators, from paid collaborations and exclusive partnerships to long-term career growth.',
            icon: 'person',
          },
          {
            title: 'Content Creation & Production',
            description:
              'Scroll-stopping branded content, concepted, shot, and edited to engage audiences and elevate brand visibility.',
            icon: 'video',
          },
          {
            title: 'Performance Marketing',
            description:
              'Data-driven campaigns with measurable ROI from brand awareness to qualified traffic and conversions.',
            icon: 'chart',
          },
          {
            title: 'Brand Marketing Management & Consultancy',
            description:
              'Strategic guidance for beauty, skincare, and lifestyle brands, from positioning and launch planning to always-on brand management.',
            icon: 'compass',
          },
        ],
        buttonLabel: 'View all services',
        buttonHref: '/services',
      },
      talents: {
        title: 'Meet the Talents',
        description:
          "From the way they create to the communities they've built, our talents bring something real to everything they do, turning everyday moments into stories that connect and content that lasts.",
        buttonLabel: 'See all talents',
        buttonHref: '/talents',
        limit: 6,
      },
      featuredWork: {
        title: 'Featured Work',
        description:
          'From concept to final cut, this is the work we love making. Scroll through some of our favorite campaigns and see the ideas that made people stop, watch, and remember.',
        buttonLabel: 'View all work',
        buttonHref: '/work',
      },
    },
  },
  {
    key: 'about',
    title: 'About page',
    description: 'Hero and two content blocks of the about page.',
    fields: [
      {
        key: 'hero',
        label: 'Hero',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'textarea', rows: 3 },
          { key: 'subtitle', label: 'Subtitle', type: 'textarea', rows: 4 },
        ],
      },
      {
        key: 'sections',
        label: 'Content blocks',
        type: 'array',
        itemLabel: 'Block',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          {
            key: 'paragraphs',
            label: 'Paragraphs',
            type: 'array',
            itemLabel: 'Paragraph',
            fields: [{ key: 'text', label: 'Text', type: 'textarea', rows: 4 }],
          },
          { key: 'videoUrl', label: 'Video URL', type: 'text' },
          { key: 'buttonLabel', label: 'Button label', type: 'text' },
          { key: 'buttonHref', label: 'Button link', type: 'text' },
        ],
      },
    ],
    defaultData: {
      hero: {
        title: 'About CA Agency\nOur Mission • Our Expertise • Your Growth',
        subtitle:
          'At CA Agency, we bring brands to life by crafting authentic stories, building strategic influencer partnerships, and running data-driven digital campaigns that captivate audiences across Instagram, TikTok, and YouTube.',
      },
      sections: [
        {
          title: 'CA Agency',
          paragraphs: [
            {
              text: 'Founded in 2020, CA Agency is a leading talent and influencer marketing agency representing top-tier social media creators and public figures across the beauty, fashion, lifestyle, and entertainment industries.',
            },
            {
              text: "We're more than just a talent agency we're a strategic partner that bridges passion with opportunity and transforms creators into influential, recognizable brands.",
            },
            {
              text: 'Built by digital industry veterans, CA Agency quickly became a game-changer in the influencer and digital media landscape. Our mission is to discover and develop talent, provide strategic brand partnerships, and drive long-term growth for both creators and the brands they work with.',
            },
            {
              text: "What sets us apart is our ability to identify raw potential and elevate it with powerful personal branding, content strategy, and influencer campaign management. We're proud to be the agency behind some of today's most impactful social media personalities and public figures.",
            },
          ],
          videoUrl: '/videos/about-video-01.mp4',
          buttonLabel: '',
          buttonHref: '',
        },
        {
          title: 'Full-service influencer marketing agency',
          paragraphs: [
            {
              text: 'CA Agency is a full-service influencer marketing agency dedicated to helping brands grow through impactful creator partnerships, strategic content, and cross-platform campaigns.',
            },
            {
              text: 'As your all-in-one digital marketing partner, we offer a 360 service experience that streamlines your influencer marketing efforts across platforms like Instagram, TikTok, and YouTube saving time, budget, and internal resources.',
            },
            {
              text: "What sets us apart? It's not just our proven track record of creating weekly high-performance campaigns for global brands. It's our commitment to your growth, flexibility, and long-term success in a fast-moving digital world.",
            },
            {
              text: "At CA Agency, we go beyond services we build strategic partnerships that empower you to stay ahead of trends and competition. Let's transform your brand story into results through innovative influencer strategies that deliver measurable impact.",
            },
          ],
          videoUrl: '/videos/about-video-02.mp4',
          buttonLabel: 'Contact us',
          buttonHref: '/contact',
        },
      ],
    },
  },
  {
    key: 'services',
    title: 'Services pagina',
    description: 'Hero, intro and service cards of the services page.',
    fields: [
      {
        key: 'hero',
        label: 'Hero',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'textarea', rows: 3 },
          { key: 'subtitle', label: 'Subtitle', type: 'textarea', rows: 4 },
        ],
      },
      {
        key: 'intro',
        label: 'Intro',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          {
            key: 'paragraphs',
            label: 'Paragraphs',
            type: 'array',
            itemLabel: 'Paragraph',
            fields: [{ key: 'text', label: 'Text', type: 'textarea', rows: 4 }],
          },
        ],
      },
      {
        key: 'cards',
        label: 'Service cards',
        type: 'array',
        itemLabel: 'Card',
        fields: [
          { key: 'number', label: 'Number', type: 'number' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'image', label: 'Image URL', type: 'url' },
          { key: 'highlight', label: 'Highlight', type: 'textarea', rows: 3 },
          { key: 'description', label: 'Description', type: 'textarea', rows: 4 },
          { key: 'details', label: 'Details', type: 'textarea', rows: 4 },
        ],
      },
    ],
    defaultData: {
      hero: {
        title: 'Our Services at CA Agency\nInfluence • Digital • Marketing',
        subtitle:
          'We believe every influencer has the ability to create meaningful impact, and every brand has the potential to build authentic, lasting connections with their audience.',
      },
      intro: {
        title: 'Top-notch services',
        paragraphs: [
          {
            text: 'At CA Agency, we deliver top-tier influencer marketing services that connect powerful voices with forward-thinking brands.',
          },
          {
            text: 'We believe every influencer has the ability to create meaningful impact, and every brand has the potential to build authentic, lasting connections with their audience. As a full-service influencer marketing agency, we act as the bridge between creators and companies producing storytelling content that resonates, engages, and drives measurable growth across platforms like Instagram, Youtube and TikTok.',
          },
        ],
      },
      cards: [
        {
          number: 1,
          title: 'For Influencers',
          image:
            '/media/imported/talents/instagram/rebecca-ghaderi.jpeg',
          highlight: 'Monetization Amplified: Turn your influence into income with CA Agency.',
          description:
            'We go beyond likes and followers we help influencers build long-term, sustainable careers. Our influencer marketing experts work one-on-one with creators to develop personalized growth and monetization strategies.',
          details:
            'From paid brand collaborations and affiliate campaigns to exclusive long-term partnerships, we ensure that your creative content becomes a reliable revenue stream. At CA Agency, we empower influencers to grow their brand, increase visibility, and unlock their full earning potential.',
        },
        {
          number: 2,
          title: 'Expanding Reach',
          image:
            '/media/imported/talents/instagram/melly-sanchez.jpeg',
          highlight: 'Your voice deserves to be seen, heard, and celebrated on a global scale.',
          description:
            "At CA Agency, we harness the full potential of digital platforms to maximize your visibility and help you grow a loyal, engaged audience. Through strategic social media optimization and targeted content distribution, we ensure you're present where it matters most from Instagram and TikTok to YouTube and beyond.",
          details:
            "Whether you're an emerging creator or an established influencer, we help you expand your reach, boost engagement, and build a global personal brand that resonates.",
        },
        {
          number: 3,
          title: 'Targeted Engagement',
          image:
            '/media/imported/talents/instagram/beatrix-ramosaj.jpeg',
          highlight:
            "Navigating the digital space takes strategy and that's where CA Agency leads.",
          description:
            'We specialize in aligning brands with influencers whose values, tone, and audience perfectly reflect their brand identity. This strategic matchmaking results in authentic influencer partnerships that drive trust, increase brand loyalty, and spark deeper audience engagement.',
          details:
            "By connecting companies with the right creators, we deliver targeted influencer marketing campaigns that don't just generate buzz they build real relationships with customers.",
        },
        {
          number: 4,
          title: 'Driving Traffic',
          image:
            '/media/imported/talents/instagram/asel-akmatova.jpeg',
          highlight: "At CA Agency, we know that visibility alone isn't enough results matter.",
          description:
            'That is why we craft performance-driven influencer marketing campaigns designed to go beyond brand exposure. Our focus is on generating qualified traffic, boosting conversions, and achieving measurable business outcomes.',
          details:
            'Through compelling content creation and strategic brand-influencer collaborations, we help you turn attention into action and followers into loyal customers.',
        },
      ],
    },
  },
  {
    key: 'work',
    title: 'Work pagina',
    description: 'Intro, video grid and CTA of the work page.',
    fields: [
      {
        key: 'intro',
        label: 'Intro',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          {
            key: 'paragraphs',
            label: 'Paragraphs',
            type: 'array',
            itemLabel: 'Paragraph',
            fields: [{ key: 'text', label: 'Text', type: 'textarea', rows: 4 }],
          },
        ],
      },
      {
        key: 'videos',
        label: 'Video’s',
        type: 'array',
        itemLabel: 'Video',
        fields: [
          { key: 'src', label: 'Video URL', type: 'text' },
          { key: 'alt', label: 'Alt text', type: 'text' },
          { key: 'name', label: 'Naam', type: 'text' },
          { key: 'brand', label: 'Brand', type: 'text' },
        ],
      },
      {
        key: 'cta',
        label: 'CTA',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'description', label: 'Description', type: 'textarea', rows: 3 },
          {
            key: 'buttons',
            label: 'Knoppen',
            type: 'array',
            itemLabel: 'Knop',
            fields: [
              { key: 'label', label: 'Label', type: 'text' },
              { key: 'href', label: 'Link', type: 'text' },
              { key: 'variant', label: 'Variant', type: 'text' },
            ],
          },
        ],
      },
    ],
    defaultData: {
      intro: {
        title: 'Our work',
        paragraphs: [
          {
            text: 'Step into the world of CA Agency where creativity meets strategy to deliver branded content that captivates, engages, and drives real results.',
          },
          {
            text: 'Through strategic collaborations with global brands and top-tier creators, we bring stories to life using visual storytelling, creative direction, and data-driven planning.',
          },
        ],
      },
      videos: [
        { src: '/videos/work/honor-web-v1.mp4', alt: 'HONOR collaboration', name: 'HONOR Collaboration', brand: 'HONOR' },
        { src: '/videos/work/dariia-ysl-web-v1.mp4', alt: 'YSL Beauty campaign', name: 'YSL Beauty Campaign', brand: 'YSL Beauty' },
        { src: '/videos/work/kylie-cosmetics-web-v1.mp4', alt: 'Kylie Cosmetics campaign', name: 'Kylie Cosmetics Campaign', brand: 'Kylie Cosmetics' },
        { src: '/videos/work/georgii-yesstyle-web-v1.mp4', alt: 'YesStyle collaboration', name: 'YesStyle Collaboration', brand: 'YesStyle' },
        { src: '/videos/work/insta360x.mp4', alt: 'Insta360 X campaign', name: 'Insta360 X Campaign', brand: 'Insta360' },
        { src: '/videos/work/albina-mixsoon-web-v1.mp4', alt: 'Mixsoon skincare', name: 'Mixsoon Skincare', brand: 'Mixsoon' },
        { src: '/videos/work/idareen-kikomilano-v2-web-v1.mp4', alt: '@_idareen_ for Kiko Milano', name: 'Kiko Milano Campaign', brand: 'Kiko Milano' },
        { src: '/videos/work/beatrix-juviasplace.mp4', alt: '@beatrixramosaj for Juvias Place', name: 'Juvias Place Campaign', brand: 'Juvias Place' },
        { src: '/videos/work/fashionfreakk-nars.mp4', alt: '@thefashionfreakk for NARS', name: 'NARS Campaign', brand: 'NARS' },
        { src: '/videos/work/huda-elemis.mp4', alt: '@huda_gash for Elemis', name: 'Elemis Campaign', brand: 'Elemis' },
      ],
      cta: {
        title: 'Ready to Create Your Campaign?',
        description:
          "Let's bring your brand story to life with authentic influencer partnerships that drive real results.",
        buttons: [
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Our Services', href: '/services', variant: 'dark' },
          { label: 'Meet Our Talents', href: '/talents', variant: 'dark' },
        ],
      },
    },
  },
  {
    key: 'contact',
    title: 'Contact pagina',
    description: 'Headings and supporting texts for the contact page.',
    fields: [
      {
        key: 'hero',
        label: 'Formulierblok',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'textarea', rows: 3 },
          { key: 'businessTitle', label: 'Business sectie titel', type: 'text' },
          { key: 'talentTitle', label: 'Talent sectie titel', type: 'text' },
          { key: 'talentDescription', label: 'Talent beschrijving', type: 'textarea', rows: 3 },
        ],
      },
    ],
    defaultData: {
      hero: {
        title: "Let's collaborate!",
        subtitle:
          "Whether you're a brand looking to launch an influencer campaign or a creator ready to grow, we'd love to hear from you.",
        businessTitle: 'Brand & Business Inquiries',
        talentTitle: 'Talent Submission',
        talentDescription:
          'Are you a content creator looking to join our roster? Tell us about yourself!',
      },
    },
  },
  {
    key: 'business-license',
    title: 'Business license pagina',
    description: 'License page with company information and documents.',
    fields: [
      { key: 'title', label: 'Paginatitel', type: 'text' },
      { key: 'imageUrl', label: 'Image URL', type: 'text' },
      {
        key: 'companyInfo',
        label: 'Bedrijfsinformatie',
        type: 'array',
        itemLabel: 'Info regel',
        fields: [
          { key: 'label', label: 'Label', type: 'text' },
          { key: 'value', label: 'Value', type: 'textarea', rows: 2 },
          { key: 'href', label: 'Optionele link', type: 'text' },
        ],
      },
      {
        key: 'about',
        label: 'Over CA Agency',
        type: 'group',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          {
            key: 'paragraphs',
            label: 'Paragraphs',
            type: 'array',
            itemLabel: 'Paragraph',
            fields: [{ key: 'text', label: 'Text', type: 'textarea', rows: 4 }],
          },
        ],
      },
      {
        key: 'documents',
        label: 'Juridische documenten',
        type: 'array',
        itemLabel: 'Document',
        fields: [
          { key: 'label', label: 'Label', type: 'text' },
          { key: 'href', label: 'Link', type: 'text' },
        ],
      },
    ],
    defaultData: {
      title: 'Business License',
      imageUrl: '/images/site/business-license-2026.webp',
      companyInfo: [
        { label: 'Company Name', value: 'CA Agency L.L.C-FZ' },
        { label: 'License Number', value: '2417532.01' },
        { label: 'Company Type', value: 'Limited Liability Company (Free Zone)' },
        { label: 'Registered Address', value: 'Meydan Grandstand, 6th floor\nMeydan Road, Nad Al Sheba\nDubai, U.A.E.' },
        { label: 'Manager', value: 'Ilias Chaabit' },
        { label: 'Contact Email', value: 'info@caagency.com', href: 'mailto:info@caagency.com' },
      ],
      about: {
        title: 'About CA Agency',
        paragraphs: [
          {
            text: 'CA Agency is a licensed full-service influencer marketing agency based in Dubai, United Arab Emirates. Founded in 2020, we specialize in connecting global brands with top-tier content creators across Instagram, TikTok, and YouTube.',
          },
          {
            text: 'Our agency operates in compliance with UAE business regulations and is registered under the Meydan Free Zone authority.',
          },
        ],
      },
      documents: [
        { label: 'Business License 2026 (PDF)', href: '/assets/rev-2026-07/ca-agency-business-license-2026.pdf' },
        { label: 'Terms of Service', href: '/terms-of-service' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
  },
  {
    key: 'footer',
    title: 'Footer en contactgegevens',
    description: 'Description, socials and fixed contact details in the footer and contact blocks.',
    fields: [
      { key: 'description', label: 'Omschrijving', type: 'textarea', rows: 4 },
      { key: 'address', label: 'Adres', type: 'textarea', rows: 3 },
      { key: 'email', label: 'E-mail', type: 'text' },
      { key: 'registrationNo', label: 'Registratienummer', type: 'text' },
      {
        key: 'socialLinks',
        label: 'Social links',
        type: 'array',
        itemLabel: 'Social',
        fields: [
          { key: 'name', label: 'Naam', type: 'text' },
          { key: 'href', label: 'Link', type: 'url' },
          { key: 'icon', label: 'Icon class', type: 'text' },
        ],
      },
    ],
    defaultData: {
      description:
        'CA Agency is a leading, full-service talent management & marketing agency, connecting brands with creators through strategy, production and performance-led campaigns.',
      address: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.',
      email: 'info@caagency.com',
      registrationNo: '2417532.01',
      socialLinks: [
        { name: 'Instagram', href: 'https://www.instagram.com/caagency/', icon: 'fab fa-instagram' },
        { name: 'TikTok', href: 'https://www.tiktok.com/@caagency/', icon: 'fab fa-tiktok' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/caagency/', icon: 'fab fa-linkedin-in' },
        { name: 'Facebook', href: 'https://www.facebook.com/caagencyglobal/', icon: 'fab fa-facebook-f' },
      ],
    },
  },
  {
    key: 'privacy-policy',
    title: 'Privacy policy',
    description: 'Full privacy policy as HTML content.',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'lastUpdated', label: 'Laatst bijgewerkt', type: 'text' },
      { key: 'html', label: 'HTML content', type: 'html', rows: 24 },
    ],
    defaultData: {
      title: 'Privacy Policy',
      lastUpdated: 'December 27, 2024',
      html: '<h2>1. Introduction</h2><p>This is the Privacy Policy of CA Agency. It explains how we collect, use, disclose, and safeguard your personal data when you visit our website or use our influencer marketing and talent management services.</p><h2>2. Data Controller</h2><p>CA Agency is the data controller responsible for your personal data. Contact us at info@caagency.com for questions about this policy.</p><h2>3. What Personal Data We Collect</h2><ul><li>Contact information such as name, email address, phone number, and company name.</li><li>Professional information such as job title, social media handles, and portfolio links.</li><li>Talent application data including photos, videos, and social media statistics.</li><li>Business inquiry details and communication records.</li><li>Device information, usage data, and cookies.</li></ul><h2>4. How We Use Your Personal Data</h2><ul><li>To provide our influencer marketing and talent management services.</li><li>To respond to inquiries and communicate about our services.</li><li>To connect brands with suitable influencers for campaigns.</li><li>To manage contracts, payments, and business relationships.</li><li>To improve our website, comply with law, and protect security.</li></ul><h2>5. Legal Basis for Processing</h2><ul><li>Contract performance.</li><li>Legitimate interests.</li><li>Legal obligations.</li><li>Consent where required.</li></ul><h2>6. How We Share Your Data</h2><p>We may share personal data with clients, service providers, legal authorities, or in connection with business transfers. We do not sell personal data.</p><h2>7. International Data Transfers</h2><p>We may transfer personal data outside the UAE with appropriate safeguards in place.</p><h2>8. Data Retention</h2><p>We retain personal data only as long as necessary for the purposes described in this policy and to meet legal or operational requirements.</p><h2>9. Your Rights</h2><p>You may have rights to access, correct, delete, or restrict processing of your personal data, subject to applicable law.</p><h2>10. Contact</h2><p>For privacy-related questions, contact <a href=\"mailto:info@caagency.com\">info@caagency.com</a>.</p>',
    },
  },
  {
    key: 'terms-of-service',
    title: 'Terms of service',
    description: 'Full terms of service as HTML content.',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'lastUpdated', label: 'Laatst bijgewerkt', type: 'text' },
      { key: 'html', label: 'HTML content', type: 'html', rows: 24 },
    ],
    defaultData: {
      title: 'Terms of Service',
      lastUpdated: 'December 27, 2024',
      html: '<h2>1. Agreement</h2><p>These Terms of Service govern your use of the CA Agency website and services.</p><h2>2. Services</h2><p>CA Agency provides influencer marketing, creator management, campaign execution, and related digital services.</p><h2>3. Client Responsibilities</h2><ul><li>Provide accurate campaign information and timelines.</li><li>Approve deliverables in a timely manner.</li><li>Pay agreed fees according to the contract.</li></ul><h2>4. Talent Responsibilities</h2><ul><li>Create and deliver content according to agreed specifications.</li><li>Maintain authenticity and transparency in partnerships.</li><li>Comply with platform terms and disclosure requirements.</li></ul><h2>5. Intellectual Property</h2><p>Ownership and licensing of campaign content are governed by the applicable agreement between the parties.</p><h2>6. Payment Terms</h2><p>Payment schedules, currencies, and late payment consequences are defined in the applicable written agreement.</p><h2>7. Confidentiality</h2><p>All parties must keep confidential information private, including campaign strategy, pricing, and performance data.</p><h2>8. Limitation of Liability</h2><p>To the extent allowed by law, CA Agency is not liable for indirect or consequential damages and total liability is limited as set out in the relevant agreement.</p><h2>9. Governing Law</h2><p>These Terms are governed by the laws of the United Arab Emirates and disputes are subject to the courts of Dubai, UAE.</p>',
    },
  },
  {
    key: 'location-dubai',
    title: 'SEO pagina Dubai',
    description: 'Content for influencer-marketing-dubai.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency Dubai',
        subtitle:
          'CA Agency is an influencer marketing agency in Dubai helping brands launch high-performing Instagram, TikTok, and YouTube campaigns with vetted creators across the UAE.',
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: '3000+', label: 'Campaigns Delivered' },
        { value: '18M+', label: 'Combined Followers' },
        { value: '150+', label: 'Global Brands' },
        { value: 'UAE', label: 'Core Market' },
      ],
      highlights: {
        title: 'Why Brands Hire Our Dubai Influencer Agency',
        items: [
          { title: 'Local Market Expertise', description: 'We build influencer campaigns around how Dubai audiences discover, evaluate, and buy across luxury, beauty, fashion, hospitality, and lifestyle.' },
          { title: 'Regional Scale', description: 'Campaigns launched with Dubai creators can expand efficiently into Abu Dhabi and the wider GCC when the brief requires broader reach.' },
          { title: 'Vetted Creator Network', description: 'Our agency sources creators with proven content quality, audience fit, and brand-safe execution across Instagram, TikTok, and YouTube.' },
          { title: 'Performance-Driven Delivery', description: 'We focus on measurable outcomes such as qualified traffic, conversions, and branded content performance rather than vanity metrics alone.' },
        ],
      },
      talents: { title: 'Our Dubai Market Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '🏨', title: 'Hospitality', description: 'Hotel, dining, and destination campaigns thrive in Dubai through short-form creator content.' },
          { icon: '💄', title: 'Beauty', description: 'Skincare, makeup, and luxury beauty launches perform strongly with creator-led education and trust.' },
          { icon: '👗', title: 'Fashion', description: 'Dubai audiences respond well to premium styling, shopping, and trend-driven collaborations.' },
        ],
      },
      cta: { title: 'Launch Your Dubai Campaign', description: 'Reach the right audience in Dubai with creators that align with your brand and objectives.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-uae',
    title: 'SEO pagina UAE',
    description: 'Content for influencer-marketing-uae.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency UAE',
        subtitle: 'CA Agency is a UAE influencer marketing agency connecting brands with creators in Dubai, Abu Dhabi, Sharjah, and beyond for performance-led campaigns across Instagram, TikTok, and YouTube.',
        primaryButtonLabel: 'Start Your Campaign',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'Meet Our Creators',
        secondaryButtonHref: '/talents',
      },
      stats: [
        { value: 'Nationwide', label: 'Coverage' },
        { value: 'Multi-city', label: 'Creator Network' },
        { value: 'Cross-platform', label: 'Campaign Delivery' },
        { value: 'Regional', label: 'Brand Reach' },
      ],
      highlights: {
        title: 'Why Brands Choose Our UAE Influencer Agency',
        items: [
          { title: 'Nationwide Creator Access', description: 'We activate creators across Dubai, Abu Dhabi, Sharjah, and other emirates based on audience fit, not just follower counts.' },
          { title: 'Cross-Platform Campaigns', description: 'Our team manages end-to-end influencer campaigns across Instagram, TikTok, and YouTube with local market nuance.' },
          { title: 'Arabic And English Reach', description: 'We help brands combine local relevance with international appeal across multilingual UAE audiences.' },
          { title: 'Commercial Focus', description: 'Our UAE campaigns are built to support awareness, consideration, traffic, and conversion goals with clear reporting.' },
        ],
      },
      talents: { title: 'Our UAE Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Our UAE Influencer Services',
        items: [
          { icon: '📣', title: 'Campaign Management', description: 'End-to-end influencer campaign execution across Instagram, TikTok, and YouTube.' },
          { icon: '🎯', title: 'Talent Sourcing', description: "Access to the UAE's top creators in beauty, fashion, lifestyle, food, and tech." },
          { icon: '🎥', title: 'Content Production', description: 'High-quality branded content that resonates with UAE audiences.' },
        ],
      },
      cta: { title: 'Launch Your UAE Influencer Campaign', description: 'Reach UAE audiences with an influencer marketing agency that matches your brand with the right creators and campaign strategy.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-asia',
    title: 'SEO pagina Asia',
    description: 'Content for influencer-marketing-asia.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency Asia',
        subtitle: 'CA Agency helps brands run influencer marketing campaigns across Asia with market-aware creators, localized strategy, and cross-border campaign management.',
        primaryButtonLabel: 'Start Your Campaign',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: 'Multi-market', label: 'Campaign Delivery' },
        { value: 'Regional', label: 'Creator Network' },
        { value: 'Localized', label: 'Market Strategy' },
        { value: 'Cross-platform', label: 'Execution' },
      ],
      highlights: {
        title: 'Why Brands Need An Asia Influencer Agency',
        items: [
          { title: 'Market Nuance Matters', description: 'Asia is not one audience. We adapt creator selection, messaging, and content formats to each market and consumer behavior.' },
          { title: 'Cross-Border Coordination', description: 'We help brands manage briefs, approvals, production, and reporting across multiple Asian markets without fragmenting execution.' },
          { title: 'Platform-Aware Strategy', description: 'Campaigns are built around the right mix of Instagram, TikTok, YouTube, and local platform behavior depending on the target market.' },
          { title: 'Commercial Performance', description: 'Our focus is not just reach. We build creator campaigns to support awareness, consideration, traffic, and conversion goals.' },
        ],
      },
      talents: { title: 'Creators For Asian Campaigns', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Categories In Asia',
        items: [
          { icon: '💄', title: 'Beauty & Skincare', description: 'Beauty brands benefit from education-led content, product trial, and strong creator trust across many Asian markets.' },
          { icon: '📱', title: 'Tech & Mobile', description: 'Creators help tech brands explain features, differentiate products, and drive conversion through demos and reviews.' },
          { icon: '🧳', title: 'Travel & Hospitality', description: 'Regional travel demand and destination-led content make creator partnerships effective for awareness and bookings.' },
        ],
      },
      cta: { title: 'Launch Your Asia Influencer Campaign', description: 'Work with an influencer marketing agency that can coordinate creators, content, and strategy across Asian markets.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-saudi-arabia',
    title: 'SEO pagina Saudi Arabia',
    description: 'Content for influencer-marketing-saudi-arabia.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency in Saudi Arabia',
        subtitle: 'Connect with creators that resonate across Riyadh, Jeddah, and the wider Saudi market through culturally aware, performance-led campaigns.',
        primaryButtonLabel: 'Start Your Campaign',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: 'High', label: 'Mobile Usage' },
        { value: 'Fast', label: 'Creator Economy Growth' },
        { value: 'Strong', label: 'Beauty & Fashion Demand' },
        { value: 'Regional', label: 'Influence' },
      ],
      highlights: {
        title: 'Why Choose Influencer Marketing in Saudi Arabia?',
        items: [
          { title: 'Young Digital Audience', description: 'Saudi Arabia has a highly connected, mobile-first population that actively engages with creators.' },
          { title: 'Culture-Led Strategy', description: 'Campaigns perform best when messaging, formats, and creators fit local culture and audience expectations.' },
          { title: 'Strong Creator Trust', description: 'Audiences often rely on creator recommendations for product discovery and purchase decisions.' },
          { title: 'Rapid Brand Adoption', description: 'More brands are shifting spend into creator partnerships to build reach and relevance.' },
        ],
      },
      talents: { title: 'Our Saudi Market Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '💄', title: 'Beauty', description: 'Beauty content and tutorials are a major driver of discovery and product trial.' },
          { icon: '👗', title: 'Fashion', description: 'Modest fashion, premium styling, and seasonal campaigns perform strongly.' },
          { icon: '📱', title: 'Tech & Lifestyle', description: 'Tech launches and everyday lifestyle creators help brands feel current and relatable.' },
        ],
      },
      cta: { title: 'Launch Your Saudi Campaign', description: 'Build creator partnerships that feel authentic to the Saudi audience.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-gcc',
    title: 'SEO pagina GCC',
    description: 'Content for influencer-marketing-gcc.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency GCC',
        subtitle: 'Run creator campaigns across the GCC with one coordinated influencer marketing strategy spanning the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.',
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'Meet Our Talents',
        secondaryButtonHref: '/talents',
      },
      stats: [
        { value: '6', label: 'Core Markets' },
        { value: 'Regional', label: 'Campaign Coordination' },
        { value: 'Multi-language', label: 'Execution' },
        { value: 'Cross-border', label: 'Creator Reach' },
      ],
      highlights: {
        title: 'Why Brands Choose Our GCC Influencer Agency',
        items: [
          { title: 'Regional Consistency', description: 'Keep brand messaging consistent while adapting content to each market.' },
          { title: 'Scalable Reach', description: 'Coordinate multiple creators and countries without duplicating internal effort.' },
          { title: 'Local Relevance', description: 'Use market-aware creators and campaign structures that reflect audience nuance.' },
          { title: 'Operational Simplicity', description: 'Manage briefing, approvals, content, and reporting through one partner.' },
        ],
      },
      talents: { title: 'Creators for GCC Campaigns', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '✈️', title: 'Travel & Hospitality', description: 'Destination and hospitality campaigns scale especially well across the region.' },
          { icon: '💄', title: 'Beauty', description: 'Beauty brands benefit from strong creator trust and tutorial-style content.' },
          { icon: '🛍️', title: 'Retail', description: 'Retail launches perform well when localized through creators in each market.' },
        ],
      },
      cta: { title: 'Plan Your GCC Rollout', description: 'Coordinate one campaign framework across multiple Gulf markets.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-korea',
    title: 'SEO pagina Korea',
    description: 'Content for influencer-marketing-korea.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency Korea',
        subtitle: 'CA Agency helps brands reach Korean audiences through localized influencer marketing campaigns in beauty, fashion, lifestyle, and tech.',
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: 'Trend-led', label: 'Consumer Behavior' },
        { value: 'High', label: 'Beauty Adoption' },
        { value: 'Strong', label: 'Social Commerce' },
        { value: 'Fast', label: 'Campaign Velocity' },
      ],
      highlights: {
        title: 'Why Brands Hire Our Korea Influencer Agency',
        items: [
          { title: 'Beauty Leadership', description: 'Korea is one of the most influential beauty markets in the world with strong creator authority.' },
          { title: 'Trend Sensitivity', description: 'Audiences respond to fresh formats, sharp visuals, and culturally current messaging.' },
          { title: 'Social Proof Matters', description: 'Creators play a major role in validating products and driving trial.' },
          { title: 'Export-Friendly Positioning', description: 'Korean campaigns often support both local visibility and international brand perception.' },
        ],
      },
      talents: { title: 'Our Korean Market Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '💄', title: 'Beauty & Skincare', description: 'Education-led product storytelling performs especially well in Korea.' },
          { icon: '👟', title: 'Fashion & Streetwear', description: 'Style-led creator content drives trend relevance and brand cachet.' },
          { icon: '📲', title: 'Tech & Gadgets', description: 'Product demos and lifestyle integrations help tech brands stand out.' },
        ],
      },
      cta: { title: 'Launch Your Korea Campaign', description: 'Build culturally relevant creator partnerships for the Korean market.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-korean-skincare',
    title: 'SEO pagina Korean Skincare / K-Beauty',
    description: 'Content for korean-skincare-influencer-marketing.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Korean Skincare Influencer\nMarketing Agency',
        subtitle: 'CA Agency is a K-beauty influencer marketing agency connecting Korean skincare and beauty brands with creators who turn routines into results across Instagram, TikTok, and YouTube.',
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'See Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: 'K-Beauty', label: 'Niche Expertise' },
        { value: '18M+', label: 'Creator Reach' },
        { value: 'Global', label: 'Audience Markets' },
        { value: 'IG · TikTok · YT', label: 'Platforms' },
      ],
      marquee: {
        items: ['Medicube', 'Mixsoon', 'YesStyle', 'Laneige', 'Sumwon Men', 'Morphe', 'YSL Beauty', 'Kylie Cosmetics', 'NARS', 'Elemis'],
      },
      caseStudies: {
        title: 'Recent K-Beauty Campaigns',
        subtitle: 'A snapshot of Korean skincare and beauty brands we have put in front of the right creators.',
        items: [
          { src: '/videos/work/medicube.mp4', brand: 'Medicube', name: 'Clinical skincare & beauty devices' },
          { src: '/videos/work/albina-mixsoon-web-v1.mp4', brand: 'Mixsoon', name: 'Ingredient-led Korean skincare' },
          { src: '/videos/work/georgii-yesstyle-web-v1.mp4', brand: 'YesStyle', name: 'K-beauty retail & discovery' },
          { image: '/images/work/work-laneige-package.webp', brand: 'Laneige', name: 'Prestige Korean skincare' },
          { image: '/images/work/work-sumwonmen-closet.webp', brand: 'Sumwon Men', name: 'Korean men’s grooming' },
        ],
      },
      process: {
        title: 'How We Run a K-Beauty Campaign',
        subtitle: 'A clear, repeatable process from first brief to final report.',
        steps: [
          { title: 'Discovery', description: 'We learn your product, hero claims, target markets, and goals, then shape the campaign brief around them.' },
          { title: 'Creator Match', description: 'We hand-pick skincare-fluent creators by audience fit, engagement, and content quality, not just follower count.' },
          { title: 'Content & Approvals', description: 'Routine demos, texture shots, and honest before-and-after storytelling, managed through briefing, approvals, and usage rights.' },
          { title: 'Report', description: 'Every campaign is measured against reach, engagement, and conversion so you know exactly what your spend returned.' },
        ],
      },
      intro: {
        heading: 'The K-Beauty Influencer Marketing Agency Brands Trust',
        paragraphs: [
          { text: 'Korean skincare reshaped global beauty with layered routines, clinical actives, and glass-skin results that audiences want to see demonstrated, not just described. CA Agency connects K-beauty and Korean skincare brands with creators who can teach a routine on camera and make it convert across Instagram, TikTok, and YouTube.' },
          { text: 'We have run campaigns for Korean skincare names such as Medicube, Mixsoon and YesStyle, alongside a wider roster of global beauty brands. That means we understand how education-led storytelling, honest before-and-after proof, and trend timing drive real trial in this category.' },
          { text: 'From a single hero launch to an always-on creator program, we manage creator selection, briefing, content approvals, usage rights, and disclosure end to end, and we report every campaign against reach, engagement, and conversion so you know what your spend returned.' },
        ],
      },
      highlights: {
        title: 'Why Brands Choose Our K-Beauty Influencer Agency',
        items: [
          { title: 'Category Specialists', description: 'We brief creators who genuinely understand skincare actives, routines, and the claims that matter, instead of generalists guessing at ingredients.' },
          { title: 'Education That Converts', description: 'Routine demos, texture shots, and honest before-and-after storytelling turn curiosity into trial for skincare and beauty products.' },
          { title: 'Trend-Timed Launches', description: 'K-beauty moves fast, so we time content to the formats and trends while they are still peaking, not after.' },
          { title: 'Global K-Beauty Reach', description: 'Our creator network helps Korean brands travel, and helps international brands tap the K-beauty aesthetic that audiences already love.' },
        ],
      },
      talents: { title: 'Creators Who Speak Skincare', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Categories We Specialise In',
        items: [
          { icon: '💧', title: 'Skincare & Routines', description: 'Essences, serums, and treatments explained through real, on-camera routines.' },
          { icon: '💄', title: 'Makeup & Color', description: 'Glass-skin bases, tints, and trend-led looks that showcase finish and wear.' },
          { icon: '🔬', title: 'Beauty Tech & Devices', description: 'At-home devices and clinical tools demonstrated with credible, results-led content.' },
        ],
      },
      faq: {
        title: 'K-Beauty Influencer Marketing FAQs',
        items: [
          { question: 'Do you only work with Korean brands?', answer: 'No. We specialise in the K-beauty and skincare category, which includes Korean brands expanding globally and international brands that want the education-led, routine-driven content style K-beauty made popular.' },
          { question: 'Which platforms work best for skincare?', answer: 'Instagram, TikTok, and YouTube each play a role: TikTok for discovery and trends, Instagram for polished routines and Reels, and YouTube for in-depth reviews and tutorials. We build the right mix for your goals.' },
          { question: 'Can you handle global, multi-market campaigns?', answer: 'Yes. Our creator network spans multiple markets, so we can localise K-beauty campaigns for different regions while keeping a consistent brand story.' },
          { question: 'What does a typical K-beauty campaign include?', answer: 'Creator selection, briefing, content production oversight, approvals, usage rights, disclosure, and reporting against reach, engagement, and conversions.' },
        ],
      },
      cta: { title: 'Launch Your K-Beauty Campaign', description: 'Put your Korean skincare or beauty brand in front of creators who can sell the routine. Share your goals and we will build the plan.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-beauty',
    title: 'SEO pagina Beauty Influencer Marketing Agency',
    description: 'Content for beauty-influencer-marketing-agency.',
    fields: basicSeoLandingFields,
    defaultData: beautyPageDefaults,
  },
  {
    key: 'location-skincare',
    title: 'SEO pagina Skincare Influencer Marketing Agency',
    description: 'Content for skincare-influencer-marketing-agency.',
    fields: basicSeoLandingFields,
    defaultData: skincarePageDefaults,
  },
  {
    key: 'location-usa',
    title: 'SEO pagina USA',
    description: 'Content for influencer-marketing-usa.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency USA',
        subtitle: 'CA Agency is an influencer marketing agency for the USA, helping brands run performance-led creator campaigns across Instagram, TikTok, and YouTube.',
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: '$6.2B', label: 'US Market Size 2025' },
        { value: '84%', label: 'Adults on YouTube' },
        { value: '75%', label: 'Marketers Use Instagram' },
        { value: '60%', label: 'Use TikTok Marketing' },
      ],
      intro: {
        heading: 'The Influencer Marketing Agency US Brands Trust',
        paragraphs: [
          {
            text: 'As a full-service influencer marketing agency for the USA, CA Agency helps brands turn American creators into measurable growth. From New York and Los Angeles to Miami and Austin, we design creator campaigns that reach US audiences where they already spend their time, Instagram, TikTok, and YouTube, and tie every activation to real business outcomes.',
          },
          {
            text: 'The US creator economy is the largest and most competitive in the world, so the gap between a campaign that drives sales and one that disappears comes down to creator selection, briefing, and measurement. Our team handles all three: we match your brand with vetted American influencers whose audience, niche, and engagement genuinely fit your product, then manage contracting, content approvals, usage rights, and FTC-compliant disclosure end to end.',
          },
          {
            text: "Whether you're a DTC beauty brand launching on TikTok Shop, a SaaS company building authority on YouTube, or a retailer scaling UGC for paid social, we build the right mix of micro, mid-tier, and macro creators for your goals and budget. Every campaign is reported against clear KPIs, reach, engagement, clicks, and conversions, so you always know what your influencer marketing spend returned.",
          },
        ],
      },
      highlights: {
        title: 'Why Brands Hire Our USA Influencer Agency',
        items: [
          { title: "World's Largest Market", description: 'The US creator economy offers scale, mature infrastructure, and proven performance across industries.' },
          { title: 'High Consumer Trust', description: 'Consumers rely on creators for product discovery, validation, and purchase confidence.' },
          { title: 'Platform Diversity', description: 'Strong creator ecosystems exist across YouTube, Instagram, TikTok, and emerging channels.' },
          { title: 'Micro-Influencer Advantage', description: 'Smaller creators often outperform on engagement and cost-efficiency.' },
        ],
      },
      talents: { title: 'Our US Market Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '💄', title: 'Beauty & Personal Care', description: 'Micro-influencers help beauty brands drive product trial and conversion.' },
          { icon: '👗', title: 'Fashion & Retail', description: 'Short-form style content supports both brand awareness and direct sales.' },
          { icon: '💪', title: 'Health & Wellness', description: 'Wellness creators help brands build trust and habitual engagement.' },
        ],
      },
      faq: {
        title: 'Influencer Marketing in the USA, FAQs',
        items: [
          {
            question: 'How much does influencer marketing cost in the USA?',
            answer: "There's no one-size-fits-all price for US influencer marketing, cost depends on the platform, the creator tiers involved (micro through macro), the number of creators, content deliverables, and usage rights. Rather than quote a flat rate, CA Agency scopes each campaign to your goals and budget and matches spend to measurable outcomes, so you invest in results rather than follower counts alone. Share your budget and objectives and we'll build a creator mix around them.",
          },
          {
            question: 'Which platforms work best for influencer marketing in the US?',
            answer: 'Instagram, TikTok, and YouTube dominate US influencer marketing. Instagram and TikTok lead for beauty, fashion, and lifestyle, TikTok drives discovery and viral reach, and YouTube is strongest for in-depth reviews, tech, and higher-consideration purchases. We recommend the platform mix based on your audience and goals.',
          },
          {
            question: 'How do you find the right US influencers for my brand?',
            answer: 'We vet creators on audience demographics, engagement quality, content style, brand safety, and past performance, not just follower count. Every creator is matched to your target customer, category, and campaign objective before we recommend them.',
          },
          {
            question: 'Do you handle FTC disclosure and creator contracts?',
            answer: 'Yes. We manage creator contracts, usage and whitelisting rights, content approvals, and FTC-compliant disclosure (such as #ad labeling) end to end, so your campaigns stay compliant and on-brand.',
          },
          {
            question: 'How do you measure influencer campaign results?',
            answer: 'Every campaign is tied to clear KPIs, reach, impressions, engagement rate, link clicks, and conversions, with transparent reporting so you can see exactly what your spend returned.',
          },
          {
            question: 'Can you run nationwide or city-specific US campaigns?',
            answer: 'Both. We run national US campaigns and can also target specific markets like New York, Los Angeles, Miami, or Chicago with regionally relevant creators.',
          },
        ],
      },
      cta: { title: 'Launch Your US Campaign', description: 'Reach American audiences with creators matched to your audience and goals.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-uk',
    title: 'SEO pagina UK',
    description: 'Content for influencer-marketing-uk.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency in UK',
        subtitle: "Connect your brand with Britain's most influential content creators. Access Europe's largest influencer marketing market with strong purchase intent and mature creator ecosystems.",
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: '£930M', label: 'UK Market 2024' },
        { value: '55.5M', label: 'Social Media Users' },
        { value: '69%', label: 'Purchase After Seeing' },
        { value: '89%', label: 'Brands Use Instagram' },
      ],
      highlights: {
        title: 'Why Choose Influencer Marketing in the UK?',
        items: [
          { title: "Europe's Largest Market", description: 'The UK leads Europe in influencer marketing maturity, spend, and operational sophistication.' },
          { title: 'High Conversion Rates', description: 'UK consumers frequently purchase after seeing creator-led recommendations.' },
          { title: 'Sophisticated Creator Ecosystem', description: 'Brands increasingly favor long-term, authentic creator partnerships over one-off celebrity posts.' },
          { title: 'Data-Driven Results', description: 'Performance measurement and brand safety are core expectations in the UK market.' },
        ],
      },
      talents: { title: 'Our UK Market Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '👗', title: 'Fashion', description: 'Fashion remains one of the highest-performing creator categories in the UK.' },
          { icon: '💄', title: 'Beauty', description: 'Beauty campaigns benefit from strong creator authority and tutorial formats.' },
          { icon: '🍽️', title: 'Food & Drink', description: 'Creator trust is particularly strong in food, drink, and everyday recommendations.' },
        ],
      },
      cta: { title: 'Launch Your UK Campaign', description: 'Build high-trust creator partnerships for British audiences.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-canada',
    title: 'SEO pagina Canada',
    description: 'Content for influencer-marketing-canada.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency in Canada',
        subtitle: "Connect your brand with Canada's top content creators. Access a strong bilingual creator market across Toronto, Vancouver, and Montreal.",
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: '$660M', label: 'Market Size 2025' },
        { value: '882K+', label: 'Active Influencers' },
        { value: '70%', label: 'Discover via Influencers' },
        { value: '40%', label: 'Buy Immediately' },
      ],
      highlights: {
        title: 'Why Choose Influencer Marketing in Canada?',
        items: [
          { title: 'Massive Creator Network', description: 'Canada offers broad creator coverage across major cities and key content categories.' },
          { title: 'High Purchase Intent', description: 'A large share of Canadian consumers discover products through creators.' },
          { title: 'Bilingual Expertise', description: 'English and French localization matters, especially for Quebec-facing campaigns.' },
          { title: 'Long-Term Value', description: 'Ongoing creator collaborations tend to outperform one-off partnerships.' },
        ],
      },
      talents: { title: 'Our Canadian Market Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '👗', title: 'Fashion', description: 'Local relevance paired with global trends makes fashion a strong creator category.' },
          { icon: '💄', title: 'Beauty', description: 'Skincare and beauty content perform well with education-led creator content.' },
          { icon: '💻', title: 'Tech', description: 'Tech launches and reviews benefit from creator trust and detailed demos.' },
        ],
      },
      cta: { title: 'Launch Your Canada Campaign', description: 'Reach Canadian audiences with the right creator mix and market nuance.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
  {
    key: 'location-australia',
    title: 'SEO pagina Australia',
    description: 'Content for influencer-marketing-australia.',
    fields: basicSeoLandingFields,
    defaultData: {
      hero: {
        title: 'Influencer Marketing\nAgency in Australia',
        subtitle: "Connect your brand with Australia's most influential content creators across Sydney, Melbourne, and beyond.",
        primaryButtonLabel: 'Get Started',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'View Our Work',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: '$589M', label: 'Market Size 2025' },
        { value: '20.9M', label: 'Social Media Users' },
        { value: '46%', label: 'Purchase After Seeing' },
        { value: '70%', label: 'Brands Increasing Budget' },
      ],
      highlights: {
        title: 'Why Choose Influencer Marketing in Australia?',
        items: [
          { title: 'Highly Engaged Audience', description: 'Australians are heavy social media users and respond strongly to creator-led content.' },
          { title: 'Strong Purchase Influence', description: 'Influencers play a meaningful role in research, consideration, and conversion.' },
          { title: 'Authenticity-First Culture', description: 'Relatable creators and trust-based partnerships outperform overly polished campaigns.' },
          { title: 'Growing Investment', description: 'Australian brands continue increasing spend into influencer marketing.' },
        ],
      },
      talents: { title: 'Our Australian Market Creators', buttonLabel: 'View All Talents', buttonHref: '/talents' },
      industries: {
        title: 'Top Performing Industries',
        items: [
          { icon: '🏃', title: 'Lifestyle & Fitness', description: 'Lifestyle and fitness creators hold strong influence with Australian audiences.' },
          { icon: '👗', title: 'Fashion', description: 'Fashion performs well with trend-led but approachable creator storytelling.' },
          { icon: '💄', title: 'Beauty', description: 'Beauty creators help drive discovery, trial, and repeat engagement.' },
        ],
      },
      cta: { title: 'Launch Your Australia Campaign', description: 'Reach Australian audiences with creators who fit your category and market.', buttonLabel: 'Get in Touch', buttonHref: '/contact' },
    },
  },
]

export const siteContentDefinitionsByKey = Object.fromEntries(
  siteContentDefinitions.map((entry) => [entry.key, entry])
)
