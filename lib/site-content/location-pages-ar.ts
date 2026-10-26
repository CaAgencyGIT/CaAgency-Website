import type { LocationLabels, LocationPageContent } from '@/lib/site-content/location-pages'

// Arabic versions of the Gulf location pages, served at /ar/<path>. Translated
// from the English defaults in definitions.ts; unlike the English pages they
// are not editable in the admin.

export const arabicLocationLabels: LocationLabels = {
  intro: 'من نحن',
  caseStudies: 'دراسات الحالة',
  process: 'كيف نعمل',
  highlights: 'لماذا CA Agency',
  talents: 'صنّاع المحتوى',
  industries: 'القطاعات',
  faq: 'الأسئلة الشائعة',
  otherMarkets: 'أسواق أخرى',
}

export interface ArabicLocationPage {
  path: string
  title: string
  description: string
  ogImage: string
  areaServed: { '@type': 'City' | 'Country'; name: string }[]
  content: LocationPageContent
}

export const arabicLocationPages = {
  dubai: {
    path: '/influencer-marketing-dubai',
    title: 'وكالة تسويق المؤثرين في دبي | CA Agency',
    description:
      'CA Agency وكالة تسويق مؤثرين في دبي تساعد العلامات التجارية على تنفيذ حملات إنستغرام وتيك توك ويوتيوب مع صنّاع محتوى موثوقين في دبي والإمارات.',
    ogImage: '/images/site/og/influencer-marketing-dubai.webp',
    areaServed: [{ '@type': 'City', name: 'Dubai' }],
    content: {
      hero: {
        title: 'وكالة تسويق المؤثرين\nفي دبي',
        subtitle:
          'CA Agency وكالة تسويق مؤثرين في دبي تساعد العلامات التجارية على إطلاق حملات عالية الأداء على إنستغرام وتيك توك ويوتيوب مع صنّاع محتوى موثوقين في جميع أنحاء الإمارات.',
        primaryButtonLabel: 'ابدأ الآن',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'شاهد أعمالنا',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: '3000+', label: 'حملة منفّذة' },
        { value: '18M+', label: 'إجمالي المتابعين' },
        { value: '150+', label: 'علامة تجارية عالمية' },
        { value: 'الإمارات', label: 'السوق الرئيسي' },
      ],
      highlights: {
        title: 'لماذا تختار العلامات التجارية وكالتنا لتسويق المؤثرين في دبي',
        items: [
          {
            title: 'خبرة بالسوق المحلي',
            description:
              'نبني حملات المؤثرين وفق الطريقة التي يكتشف بها جمهور دبي المنتجات ويقيّمها ويشتريها في قطاعات الفخامة والجمال والأزياء والضيافة وأسلوب الحياة.',
          },
          {
            title: 'انتشار إقليمي',
            description:
              'يمكن توسيع الحملات التي تنطلق مع صنّاع محتوى من دبي بكفاءة إلى أبوظبي ودول الخليج عندما يتطلب الهدف وصولاً أوسع.',
          },
          {
            title: 'شبكة صنّاع محتوى موثوقة',
            description:
              'نختار صنّاع محتوى يتمتعون بجودة محتوى مثبتة وجمهور مناسب وتنفيذ آمن للعلامة التجارية على إنستغرام وتيك توك ويوتيوب.',
          },
          {
            title: 'تنفيذ يركز على الأداء',
            description:
              'نركز على نتائج قابلة للقياس مثل الزيارات المؤهلة والتحويلات وأداء المحتوى الإعلاني، وليس على المؤشرات الشكلية وحدها.',
          },
        ],
      },
      talents: { title: 'صنّاع المحتوى في سوق دبي', buttonLabel: 'عرض جميع المواهب', buttonHref: '/talents' },
      industries: {
        title: 'القطاعات الأعلى أداءً',
        items: [
          {
            icon: '🏨',
            title: 'الضيافة',
            description: 'تحقق حملات الفنادق والمطاعم والوجهات نجاحاً كبيراً في دبي عبر المحتوى القصير لصنّاع المحتوى.',
          },
          {
            icon: '💄',
            title: 'الجمال',
            description:
              'تحقق إطلاقات العناية بالبشرة والمكياج ومنتجات الجمال الفاخرة أداءً قوياً بفضل المحتوى التعليمي وثقة الجمهور بصنّاع المحتوى.',
          },
          {
            icon: '👗',
            title: 'الأزياء',
            description: 'يتفاعل جمهور دبي بقوة مع التنسيق الفاخر والتسوق والتعاونات المواكبة لأحدث الصيحات.',
          },
        ],
      },
      cta: {
        title: 'أطلق حملتك في دبي',
        description: 'اصل إلى الجمهور المناسب في دبي مع صنّاع محتوى يتوافقون مع علامتك التجارية وأهدافك.',
        buttonLabel: 'تواصل معنا',
        buttonHref: '/contact',
      },
    },
  },
  uae: {
    path: '/influencer-marketing-uae',
    title: 'وكالة تسويق المؤثرين في الإمارات | CA Agency',
    description:
      'CA Agency وكالة تسويق مؤثرين في الإمارات تساعد العلامات التجارية على تنفيذ حملات صنّاع المحتوى في دبي وأبوظبي والشارقة وغيرها.',
    ogImage: '/images/site/og/influencer-marketing-uae.webp',
    areaServed: [{ '@type': 'Country', name: 'United Arab Emirates' }],
    content: {
      hero: {
        title: 'وكالة تسويق المؤثرين\nفي الإمارات',
        subtitle:
          'CA Agency وكالة تسويق مؤثرين في الإمارات تربط العلامات التجارية بصنّاع المحتوى في دبي وأبوظبي والشارقة وغيرها، لحملات تركز على الأداء عبر إنستغرام وتيك توك ويوتيوب.',
        primaryButtonLabel: 'ابدأ حملتك',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'تعرّف على صنّاع المحتوى',
        secondaryButtonHref: '/talents',
      },
      stats: [
        { value: 'على مستوى الدولة', label: 'التغطية' },
        { value: 'متعددة المدن', label: 'شبكة صنّاع المحتوى' },
        { value: 'متعددة المنصات', label: 'تنفيذ الحملات' },
        { value: 'إقليمي', label: 'وصول العلامة التجارية' },
      ],
      highlights: {
        title: 'لماذا تختار العلامات التجارية وكالتنا لتسويق المؤثرين في الإمارات',
        items: [
          {
            title: 'صنّاع محتوى في كل الإمارات',
            description:
              'نفعّل صنّاع محتوى في دبي وأبوظبي والشارقة وباقي الإمارات بناءً على ملاءمة الجمهور، وليس على عدد المتابعين فقط.',
          },
          {
            title: 'حملات متعددة المنصات',
            description:
              'يدير فريقنا حملات المؤثرين من البداية إلى النهاية على إنستغرام وتيك توك ويوتيوب مع مراعاة خصوصية السوق المحلي.',
          },
          {
            title: 'وصول بالعربية والإنجليزية',
            description: 'نساعد العلامات التجارية على الجمع بين الحضور المحلي والجاذبية العالمية لدى جمهور الإمارات متعدد اللغات.',
          },
          {
            title: 'تركيز تجاري',
            description: 'نصمم حملاتنا في الإمارات لدعم أهداف الوعي والاهتمام والزيارات والتحويل مع تقارير واضحة.',
          },
        ],
      },
      talents: { title: 'صنّاع المحتوى في الإمارات', buttonLabel: 'عرض جميع المواهب', buttonHref: '/talents' },
      industries: {
        title: 'خدماتنا لتسويق المؤثرين في الإمارات',
        items: [
          {
            icon: '📣',
            title: 'إدارة الحملات',
            description: 'تنفيذ حملات المؤثرين من البداية إلى النهاية على إنستغرام وتيك توك ويوتيوب.',
          },
          {
            icon: '🎯',
            title: 'اختيار المواهب',
            description: 'الوصول إلى أبرز صنّاع المحتوى في الإمارات في مجالات الجمال والأزياء وأسلوب الحياة والطعام والتقنية.',
          },
          {
            icon: '🎥',
            title: 'إنتاج المحتوى',
            description: 'محتوى إعلاني عالي الجودة يلقى صدى لدى جمهور الإمارات.',
          },
        ],
      },
      cta: {
        title: 'أطلق حملة المؤثرين في الإمارات',
        description:
          'اصل إلى جمهور الإمارات مع وكالة تسويق مؤثرين تختار لعلامتك التجارية صنّاع المحتوى واستراتيجية الحملة المناسبة.',
        buttonLabel: 'تواصل معنا',
        buttonHref: '/contact',
      },
    },
  },
  saudiArabia: {
    path: '/influencer-marketing-saudi-arabia',
    title: 'وكالة تسويق المؤثرين في السعودية | CA Agency',
    description:
      'تواصل مع الجمهور السعودي عبر شراكات مع صنّاع محتوى مصممة للرياض وجدة وجميع أنحاء المملكة.',
    ogImage: '/images/site/og/influencer-marketing-saudi-arabia.webp',
    areaServed: [{ '@type': 'Country', name: 'Saudi Arabia' }],
    content: {
      hero: {
        title: 'وكالة تسويق المؤثرين\nفي السعودية',
        subtitle:
          'تواصل مع صنّاع محتوى يلقون صدى في الرياض وجدة وجميع أنحاء السوق السعودي، عبر حملات تراعي الثقافة المحلية وتركز على الأداء.',
        primaryButtonLabel: 'ابدأ حملتك',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'شاهد أعمالنا',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: 'مرتفع', label: 'استخدام الهاتف المحمول' },
        { value: 'سريع', label: 'نمو اقتصاد صنّاع المحتوى' },
        { value: 'قوي', label: 'الطلب على الجمال والأزياء' },
        { value: 'إقليمي', label: 'التأثير' },
      ],
      highlights: {
        title: 'لماذا تسويق المؤثرين في السعودية؟',
        items: [
          {
            title: 'جمهور رقمي شاب',
            description: 'تتمتع السعودية بجمهور شاب شديد الاتصال يعتمد على الهاتف المحمول ويتفاعل بنشاط مع صنّاع المحتوى.',
          },
          {
            title: 'استراتيجية تنطلق من الثقافة',
            description:
              'تحقق الحملات أفضل النتائج عندما تتوافق الرسائل وأشكال المحتوى وصنّاع المحتوى مع الثقافة المحلية وتوقعات الجمهور.',
          },
          {
            title: 'ثقة عالية بصنّاع المحتوى',
            description: 'يعتمد الجمهور كثيراً على توصيات صنّاع المحتوى لاكتشاف المنتجات واتخاذ قرارات الشراء.',
          },
          {
            title: 'تبنٍّ سريع من العلامات التجارية',
            description: 'تحوّل المزيد من العلامات التجارية ميزانياتها نحو الشراكات مع صنّاع المحتوى لبناء الوصول والحضور.',
          },
        ],
      },
      talents: { title: 'صنّاع المحتوى في السوق السعودي', buttonLabel: 'عرض جميع المواهب', buttonHref: '/talents' },
      industries: {
        title: 'القطاعات الأعلى أداءً',
        items: [
          {
            icon: '💄',
            title: 'الجمال',
            description: 'يُعد محتوى الجمال والشروحات من أهم محركات اكتشاف المنتجات وتجربتها.',
          },
          {
            icon: '👗',
            title: 'الأزياء',
            description: 'تحقق الأزياء المحتشمة والتنسيق الفاخر والحملات الموسمية أداءً قوياً.',
          },
          {
            icon: '📱',
            title: 'التقنية وأسلوب الحياة',
            description:
              'تساعد إطلاقات التقنية وصنّاع محتوى أسلوب الحياة اليومي العلامات التجارية على أن تبدو عصرية وقريبة من الجمهور.',
          },
        ],
      },
      cta: {
        title: 'أطلق حملتك في السعودية',
        description: 'ابنِ شراكات مع صنّاع محتوى تبدو أصيلة للجمهور السعودي.',
        buttonLabel: 'تواصل معنا',
        buttonHref: '/contact',
      },
    },
  },
  gcc: {
    path: '/influencer-marketing-gcc',
    title: 'وكالة تسويق المؤثرين في دول الخليج | CA Agency',
    description:
      'وسّع حملات صنّاع المحتوى في دول الخليج باستراتيجية واحدة منسقة لتسويق المؤثرين عبر أسواق الخليج.',
    ogImage: '/images/site/og/influencer-marketing-gcc.webp',
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Oman' },
    ],
    content: {
      hero: {
        title: 'وكالة تسويق المؤثرين\nفي دول الخليج',
        subtitle:
          'نفّذ حملات صنّاع المحتوى في دول الخليج باستراتيجية واحدة منسقة لتسويق المؤثرين تشمل الإمارات والسعودية وقطر والكويت والبحرين وعُمان.',
        primaryButtonLabel: 'ابدأ الآن',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'تعرّف على مواهبنا',
        secondaryButtonHref: '/talents',
      },
      stats: [
        { value: '6', label: 'أسواق رئيسية' },
        { value: 'إقليمي', label: 'تنسيق الحملات' },
        { value: 'متعدد اللغات', label: 'التنفيذ' },
        { value: 'عابر للحدود', label: 'وصول صنّاع المحتوى' },
      ],
      highlights: {
        title: 'لماذا تختار العلامات التجارية وكالتنا لتسويق المؤثرين في الخليج',
        items: [
          { title: 'اتساق إقليمي', description: 'حافظ على اتساق رسائل علامتك التجارية مع تكييف المحتوى لكل سوق.' },
          { title: 'وصول قابل للتوسع', description: 'نسّق مع عدة صنّاع محتوى ودول دون تكرار الجهد الداخلي.' },
          { title: 'ملاءمة محلية', description: 'استعن بصنّاع محتوى يفهمون أسواقهم وبهياكل حملات تعكس خصوصية كل جمهور.' },
          { title: 'بساطة تشغيلية', description: 'أدِر الإيجاز والموافقات والمحتوى والتقارير من خلال شريك واحد.' },
        ],
      },
      talents: { title: 'صنّاع محتوى لحملات الخليج', buttonLabel: 'عرض جميع المواهب', buttonHref: '/talents' },
      industries: {
        title: 'القطاعات الأعلى أداءً',
        items: [
          { icon: '✈️', title: 'السفر والضيافة', description: 'تتوسع حملات الوجهات والضيافة بشكل ممتاز في جميع أنحاء المنطقة.' },
          { icon: '💄', title: 'الجمال', description: 'تستفيد علامات الجمال من الثقة العالية بصنّاع المحتوى والمحتوى التعليمي.' },
          { icon: '🛍️', title: 'التجزئة', description: 'تحقق إطلاقات التجزئة أداءً جيداً عند تكييفها عبر صنّاع محتوى في كل سوق.' },
        ],
      },
      cta: {
        title: 'خطط لإطلاق حملتك في الخليج',
        description: 'نسّق إطار حملة واحداً عبر عدة أسواق خليجية.',
        buttonLabel: 'تواصل معنا',
        buttonHref: '/contact',
      },
    },
  },
} satisfies Record<string, ArabicLocationPage>
