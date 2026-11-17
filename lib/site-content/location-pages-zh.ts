import type { LocationLabels } from '@/lib/site-content/location-pages'
import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// Simplified Chinese versions of every market page, served at /zh/<path>.
// Translated from the English defaults; not editable in the admin. Plain data:
// keys are the market keys from lib/data/locations.ts.

export const chineseLocationLabels: LocationLabels = {
  intro: '关于我们',
  caseStudies: '案例研究',
  process: '合作流程',
  highlights: '为什么选择 CA Agency',
  talents: '我们的达人',
  industries: '行业',
  faq: '常见问题',
  otherMarkets: '其他市场',
}

export const chineseLocationPages: Record<string, TranslatedLocationPage> = {
  "dubai": {
    "path": "/influencer-marketing-dubai",
    "title": "迪拜网红营销机构 | CA Agency",
    "description": "CA Agency 是位于迪拜的网红营销机构，帮助品牌携手迪拜及阿联酋各地经过筛选的创作者，在 Instagram、TikTok 和 YouTube 上开展营销活动。",
    "ogImage": "/images/site/og/influencer-marketing-dubai-v2.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      }
    ],
    "content": {
      "hero": {
        "title": "迪拜\n 网红营销机构",
        "subtitle": "CA Agency 是位于迪拜的网红营销机构，帮助品牌携手阿联酋各地经过筛选的创作者，在 Instagram、TikTok 和 YouTube 上推出高成效的营销活动。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "总粉丝数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "阿联酋",
          "label": "核心市场"
        }
      ],
      "highlights": {
        "title": "品牌为何选择我们的迪拜网红营销机构",
        "items": [
          {
            "title": "本地市场专长",
            "description": "我们围绕迪拜受众在奢侈品、美妆、时尚、酒店餐旅和生活方式领域发现、评估和购买产品的方式，来打造网红营销活动。"
          },
          {
            "title": "区域规模",
            "description": "当简报需要更广的触达时，与迪拜创作者一起启动的营销活动可以高效地扩展到阿布扎比和更广泛的海湾地区。"
          },
          {
            "title": "经过筛选的创作者网络",
            "description": "我们的机构在 Instagram、TikTok 和 YouTube 上寻找内容质量经过验证、受众匹配、执行过程符合品牌安全要求的创作者。"
          },
          {
            "title": "以效果为导向的交付",
            "description": "我们关注可衡量的成果，例如优质流量、转化和品牌内容的表现，而不只是看虚荣指标。"
          }
        ]
      },
      "talents": {
        "title": "我们的迪拜市场创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "🏨",
            "title": "酒店餐旅",
            "description": "借助创作者的短视频内容，酒店、餐饮和旅游目的地类营销活动在迪拜表现出色。"
          },
          {
            "icon": "💄",
            "title": "美妆",
            "description": "护肤、彩妆和高端美妆新品上市，在创作者主导的科普与信任带动下表现强劲。"
          },
          {
            "icon": "👗",
            "title": "时尚",
            "description": "迪拜受众对高端穿搭、购物和紧跟潮流的合作反响良好。"
          }
        ]
      },
      "cta": {
        "title": "开启您的迪拜营销活动",
        "description": "携手与您的品牌和目标相契合的创作者，触达迪拜的目标受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "uae": {
    "path": "/influencer-marketing-uae",
    "title": "阿联酋网红营销机构 | CA Agency",
    "description": "CA Agency 是阿联酋的网红营销机构，帮助品牌在迪拜、阿布扎比、沙迦等地开展创作者营销活动。",
    "ogImage": "/images/site/og/influencer-marketing-uae-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "content": {
      "hero": {
        "title": "阿联酋\n 网红营销机构",
        "subtitle": "CA Agency 是阿联酋的网红营销机构，为品牌对接迪拜、阿布扎比、沙迦等地的创作者，在 Instagram、TikTok 和 YouTube 上开展以效果为导向的营销活动。",
        "primaryButtonLabel": "开启您的营销活动",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "认识我们的创作者",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "全国",
          "label": "覆盖范围"
        },
        {
          "value": "多城市",
          "label": "创作者网络"
        },
        {
          "value": "跨平台",
          "label": "营销活动执行"
        },
        {
          "value": "区域级",
          "label": "品牌触达"
        }
      ],
      "highlights": {
        "title": "品牌为何选择我们的阿联酋网红营销机构",
        "items": [
          {
            "title": "覆盖全国的创作者资源",
            "description": "我们根据受众匹配度，而不只是粉丝数，启用迪拜、阿布扎比、沙迦及其他酋长国的创作者。"
          },
          {
            "title": "跨平台营销活动",
            "description": "我们的团队在 Instagram、TikTok 和 YouTube 上全程管理网红营销活动，并兼顾本地市场的细微差异。"
          },
          {
            "title": "阿拉伯语与英语触达",
            "description": "我们帮助品牌面向使用多种语言的阿联酋受众，把本地相关性与国际吸引力结合起来。"
          },
          {
            "title": "注重商业成果",
            "description": "我们的阿联酋营销活动旨在支持知名度、购买考虑、流量和转化目标，并提供清晰的报告。"
          }
        ]
      },
      "talents": {
        "title": "我们的阿联酋创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "我们的阿联酋网红营销服务",
        "items": [
          {
            "icon": "📣",
            "title": "营销活动管理",
            "description": "在 Instagram、TikTok 和 YouTube 上全程执行网红营销活动。"
          },
          {
            "icon": "🎯",
            "title": "达人寻找",
            "description": "对接阿联酋美妆、时尚、生活方式、美食和科技领域的顶尖创作者。"
          },
          {
            "icon": "🎥",
            "title": "内容制作",
            "description": "能引起阿联酋受众共鸣的高质量品牌内容。"
          }
        ]
      },
      "cta": {
        "title": "开启您的阿联酋网红营销活动",
        "description": "选择一家能为您的品牌匹配合适创作者和营销策略的网红营销机构，触达阿联酋受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "saudiArabia": {
    "path": "/influencer-marketing-saudi-arabia",
    "title": "沙特阿拉伯网红营销 | CA Agency",
    "description": "通过为利雅得、吉达及更广泛的沙特阿拉伯市场量身打造的创作者合作，帮助您的品牌触达沙特阿拉伯受众。",
    "ogImage": "/images/site/og/influencer-marketing-saudi-arabia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "content": {
      "hero": {
        "title": "面向沙特阿拉伯市场的\n 网红营销机构",
        "subtitle": "通过尊重当地文化、以效果为导向的营销活动，对接在利雅得、吉达及更广泛的沙特阿拉伯市场引起共鸣的创作者。",
        "primaryButtonLabel": "开启您的营销活动",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "高",
          "label": "移动设备使用率"
        },
        {
          "value": "快速",
          "label": "创作者经济增长"
        },
        {
          "value": "强劲",
          "label": "美妆与时尚需求"
        },
        {
          "value": "区域级",
          "label": "影响力"
        }
      ],
      "highlights": {
        "title": "为什么在沙特阿拉伯开展网红营销？",
        "items": [
          {
            "title": "年轻的数字化受众",
            "description": "沙特阿拉伯人口高度联网、以移动端为先，并积极与创作者互动。"
          },
          {
            "title": "以文化为先的策略",
            "description": "当信息、内容形式和创作者契合当地文化与受众期待时，营销活动的表现最好。"
          },
          {
            "title": "对创作者的高度信任",
            "description": "受众常常依靠创作者的推荐来发现产品并做出购买决定。"
          },
          {
            "title": "品牌快速跟进",
            "description": "越来越多的品牌正把预算转向创作者合作，以扩大触达并提升相关性。"
          }
        ]
      },
      "talents": {
        "title": "面向沙特阿拉伯市场的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "💄",
            "title": "美妆",
            "description": "美妆内容和教程是带动产品发现与试用的重要因素。"
          },
          {
            "icon": "👗",
            "title": "时尚",
            "description": "端庄风格时装、高端穿搭和季节性营销活动表现强劲。"
          },
          {
            "icon": "📱",
            "title": "科技与生活方式",
            "description": "科技新品发布和日常生活方式类创作者，能让品牌显得与时俱进、贴近生活。"
          }
        ]
      },
      "cta": {
        "title": "开启您的沙特阿拉伯营销活动",
        "description": "建立让沙特阿拉伯受众感到真实可信的创作者合作。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "gcc": {
    "path": "/influencer-marketing-gcc",
    "title": "海湾地区网红营销 | CA Agency",
    "description": "以一套统筹协调、覆盖海湾各市场的网红营销机构策略，在整个海湾地区（GCC）扩大创作者营销活动的规模。",
    "ogImage": "/images/site/og/influencer-marketing-gcc-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Oman"
      }
    ],
    "content": {
      "hero": {
        "title": "面向海湾地区市场的\n 网红营销机构",
        "subtitle": "以一套统筹协调的网红营销策略，在整个海湾地区（GCC）开展创作者营销活动，覆盖阿联酋、沙特阿拉伯、卡塔尔、科威特、巴林和阿曼。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "认识我们的达人",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "6",
          "label": "核心市场"
        },
        {
          "value": "区域级",
          "label": "营销活动统筹"
        },
        {
          "value": "多语言",
          "label": "执行"
        },
        {
          "value": "跨境",
          "label": "创作者触达"
        }
      ],
      "highlights": {
        "title": "品牌为何选择我们开展海湾地区网红营销",
        "items": [
          {
            "title": "区域一致性",
            "description": "在根据各市场调整内容的同时，保持品牌信息一致。"
          },
          {
            "title": "可扩展的触达",
            "description": "统筹多位创作者和多个国家，无需内部团队重复投入。"
          },
          {
            "title": "本地相关性",
            "description": "选用了解当地市场的创作者和能体现受众细微差异的营销活动架构。"
          },
          {
            "title": "运营更简单",
            "description": "通过一个合作伙伴管理简报、审批、内容和报告。"
          }
        ]
      },
      "talents": {
        "title": "适合海湾地区营销活动的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "✈️",
            "title": "旅游与酒店餐旅",
            "description": "旅游目的地和酒店餐旅类营销活动在整个地区尤其容易扩大规模。"
          },
          {
            "icon": "💄",
            "title": "美妆",
            "description": "美妆品牌受益于受众对创作者的高度信任和教程式内容。"
          },
          {
            "icon": "🛍️",
            "title": "零售",
            "description": "零售新品上市通过各市场的创作者进行本地化后，表现良好。"
          }
        ]
      },
      "cta": {
        "title": "规划您的海湾地区市场布局",
        "description": "以一套营销活动框架统筹多个海湾市场。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "korea": {
    "path": "/influencer-marketing-korea",
    "title": "韩国网红营销 | CA Agency",
    "description": "CA Agency 通过美妆、时尚、生活方式和科技领域的本地化网红营销活动，帮助品牌触达韩国受众。",
    "ogImage": "/images/site/og/influencer-marketing-korea-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Korea"
      }
    ],
    "content": {
      "hero": {
        "title": "面向韩国市场的\n 网红营销机构",
        "subtitle": "CA Agency 通过美妆、时尚、生活方式和科技领域的本地化网红营销活动，帮助品牌触达韩国受众。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "潮流驱动",
          "label": "消费者行为"
        },
        {
          "value": "高",
          "label": "美妆接受度"
        },
        {
          "value": "强劲",
          "label": "社交电商"
        },
        {
          "value": "快",
          "label": "营销活动节奏"
        }
      ],
      "highlights": {
        "title": "品牌为何选择我们开展韩国网红营销",
        "items": [
          {
            "title": "美妆领先地位",
            "description": "韩国是全球最具影响力的美妆市场之一，创作者拥有很强的权威性。"
          },
          {
            "title": "对潮流敏感",
            "description": "受众对新鲜的内容形式、鲜明的视觉效果和紧跟当下文化的信息反响积极。"
          },
          {
            "title": "社会认同很重要",
            "description": "创作者在为产品背书和带动试用方面发挥着重要作用。"
          },
          {
            "title": "有利于出海的定位",
            "description": "在韩国开展的营销活动往往既能提升本地知名度，也有助于塑造国际品牌形象。"
          }
        ]
      },
      "talents": {
        "title": "面向韩国市场的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "💄",
            "title": "美妆与护肤",
            "description": "以科普为主的产品故事内容在韩国表现尤其出色。"
          },
          {
            "icon": "👟",
            "title": "时尚与街头服饰",
            "description": "以风格为主导的创作者内容，能提升品牌的潮流相关性和格调。"
          },
          {
            "icon": "📲",
            "title": "科技与数码产品",
            "description": "产品演示和融入生活场景的内容，帮助科技品牌脱颖而出。"
          }
        ]
      },
      "cta": {
        "title": "开启您的韩国营销活动",
        "description": "为韩国市场建立契合当地文化的创作者合作。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "asia": {
    "path": "/influencer-marketing-asia",
    "title": "亚洲网红营销 | CA Agency",
    "description": "CA Agency 以本地化的创作者策略和跨市场执行，帮助品牌在亚洲各地开展网红营销活动。",
    "ogImage": "/images/site/og/influencer-marketing-asia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Korea"
      },
      {
        "@type": "Country",
        "name": "Japan"
      },
      {
        "@type": "Country",
        "name": "Singapore"
      },
      {
        "@type": "Country",
        "name": "Thailand"
      },
      {
        "@type": "Country",
        "name": "Indonesia"
      },
      {
        "@type": "Country",
        "name": "Philippines"
      },
      {
        "@type": "Country",
        "name": "Vietnam"
      },
      {
        "@type": "Country",
        "name": "Malaysia"
      }
    ],
    "content": {
      "hero": {
        "title": "面向亚洲市场的\n 网红营销机构",
        "subtitle": "CA Agency 以了解当地市场的创作者、本地化策略和跨境营销活动管理，帮助品牌在亚洲各地开展网红营销活动。",
        "primaryButtonLabel": "开启您的营销活动",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "多市场",
          "label": "营销活动执行"
        },
        {
          "value": "区域级",
          "label": "创作者网络"
        },
        {
          "value": "本地化",
          "label": "市场策略"
        },
        {
          "value": "跨平台",
          "label": "执行"
        }
      ],
      "highlights": {
        "title": "品牌为何需要一家面向亚洲市场的网红营销机构",
        "items": [
          {
            "title": "市场差异很重要",
            "description": "亚洲不是一个单一的受众群体。我们根据每个市场和消费者行为，调整创作者选择、信息传达和内容形式。"
          },
          {
            "title": "跨境统筹",
            "description": "我们帮助品牌在多个亚洲市场管理简报、审批、制作和报告，避免执行变得零散。"
          },
          {
            "title": "因平台而异的策略",
            "description": "营销活动会根据目标市场，围绕 Instagram、TikTok、YouTube 以及本地平台使用习惯的合适组合来打造。"
          },
          {
            "title": "商业成效",
            "description": "我们关注的不只是触达。我们打造的创作者营销活动旨在支持知名度、购买考虑、流量和转化目标。"
          }
        ]
      },
      "talents": {
        "title": "适合亚洲营销活动的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "亚洲表现突出的品类",
        "items": [
          {
            "icon": "💄",
            "title": "美妆与护肤",
            "description": "在许多亚洲市场，美妆品牌受益于以科普为主的内容、产品试用和受众对创作者的高度信任。"
          },
          {
            "icon": "📱",
            "title": "科技与移动设备",
            "description": "创作者通过演示和测评，帮助科技品牌讲解功能、突出产品差异并带动转化。"
          },
          {
            "icon": "🧳",
            "title": "旅游与酒店餐旅",
            "description": "区域内的旅游需求和以目的地为主的内容，让创作者合作在提升知名度和带动预订方面行之有效。"
          }
        ]
      },
      "cta": {
        "title": "开启您的亚洲网红营销活动",
        "description": "与一家能够在亚洲各市场统筹创作者、内容和策略的网红营销机构合作。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "usa": {
    "path": "/influencer-marketing-usa",
    "title": "美国网红营销 | CA Agency",
    "description": "CA Agency 是面向美国市场的网红营销机构，帮助品牌在 Instagram、TikTok 和 YouTube 上开展创作者营销活动。",
    "ogImage": "/images/site/og/influencer-marketing-usa-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "content": {
      "hero": {
        "title": "面向美国市场的\n 网红营销机构",
        "subtitle": "CA Agency 是面向美国市场的网红营销机构，帮助品牌在 Instagram、TikTok 和 YouTube 上开展以效果为导向的创作者营销活动。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$6.2B",
          "label": "2025 年美国市场规模"
        },
        {
          "value": "84%",
          "label": "成年人使用 YouTube"
        },
        {
          "value": "75%",
          "label": "营销人员使用 Instagram"
        },
        {
          "value": "60%",
          "label": "使用 TikTok 营销"
        }
      ],
      "intro": {
        "heading": "美国品牌信赖的网红营销机构",
        "paragraphs": [
          {
            "text": "作为面向美国市场的全方位网红营销机构，CA Agency 帮助品牌把与美国创作者的合作转化为可衡量的增长。从纽约、洛杉矶到迈阿密、奥斯汀，我们设计的创作者营销活动，在美国受众本就花时间的平台上触达他们，即 Instagram、TikTok 和 YouTube，并让每一次投放都与真实的业务成果挂钩。"
          },
          {
            "text": "美国的创作者经济是全球规模最大、竞争最激烈的，因此一场带动销售的营销活动与一场石沉大海的营销活动之间的差距，取决于创作者选择、简报和效果衡量。我们的团队三者兼顾：我们为您的品牌匹配经过筛选的美国网红，他们的受众、细分领域和互动情况与您的产品真正契合，随后全程管理合同签订、内容审批、使用权和符合 FTC（美国联邦贸易委员会）要求的披露。"
          },
          {
            "text": "无论您是在 TikTok Shop 上线的 DTC（直面消费者）美妆品牌、在 YouTube 上建立权威的 SaaS 公司，还是为付费社交广告扩大 UGC（用户生成内容）规模的零售商，我们都会根据您的目标和预算，搭配合适的微型、中腰部和头部创作者组合。每场营销活动都按清晰的 KPI 进行报告，包括触达、互动、点击和转化，让您始终清楚网红营销投入带来了什么回报。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们开展美国网红营销",
        "items": [
          {
            "title": "全球最大的市场",
            "description": "美国的创作者经济具备规模、成熟的基础设施，以及在各行业经过验证的表现。"
          },
          {
            "title": "消费者信任度高",
            "description": "消费者依靠创作者来发现产品、验证产品并建立购买信心。"
          },
          {
            "title": "平台多样",
            "description": "YouTube、Instagram、TikTok 以及新兴渠道上都有强大的创作者生态。"
          },
          {
            "title": "微型网红的优势",
            "description": "规模较小的创作者在互动和成本效益方面往往表现更好。"
          }
        ]
      },
      "talents": {
        "title": "面向美国市场的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "💄",
            "title": "美妆与个人护理",
            "description": "微型网红帮助美妆品牌带动产品试用和转化。"
          },
          {
            "icon": "👗",
            "title": "时尚与零售",
            "description": "短视频穿搭内容既有助于品牌知名度，也有助于直接销售。"
          },
          {
            "icon": "💪",
            "title": "健康与养生",
            "description": "健康养生类创作者帮助品牌建立信任和习惯性的互动。"
          }
        ]
      },
      "faq": {
        "title": "美国网红营销常见问题",
        "items": [
          {
            "question": "在美国做网红营销需要多少费用？",
            "answer": "美国网红营销没有统一的价格，费用取决于平台、涉及的创作者层级（从微型到头部）、创作者数量、内容交付物和使用权。CA Agency 不报统一价，而是根据您的目标和预算确定每场营销活动的范围，并让投入与可衡量的成果相匹配，让您为成果投入，而不只是为粉丝数买单。请告诉我们您的预算和目标，我们会据此搭配创作者组合。"
          },
          {
            "question": "在美国，哪些平台最适合网红营销？",
            "answer": "Instagram、TikTok 和 YouTube 在美国网红营销中占主导地位。Instagram 和 TikTok 在美妆、时尚和生活方式领域领先，TikTok 带动产品发现和病毒式传播，YouTube 则在深度测评、科技以及需要更多考虑的购买决策方面最强。我们会根据您的受众和目标推荐平台组合。"
          },
          {
            "question": "你们如何为我的品牌找到合适的美国网红？",
            "answer": "我们从受众画像、互动质量、内容风格、品牌安全和过往表现等方面筛选创作者，而不只是看粉丝数。在向您推荐之前，每位创作者都会与您的目标客户、品类和营销活动目标进行匹配。"
          },
          {
            "question": "你们负责 FTC 披露和创作者合同吗？",
            "answer": "是的。我们全程管理创作者合同、使用权和白名单投放授权、内容审批，以及符合 FTC 要求的披露（例如 #ad 标注，即广告标识），让您的营销活动保持合规并符合品牌调性。"
          },
          {
            "question": "你们如何衡量网红营销活动的效果？",
            "answer": "每场营销活动都与清晰的 KPI 挂钩，包括触达、曝光量、互动率、链接点击和转化，并提供透明的报告，让您清楚看到投入带来了什么回报。"
          },
          {
            "question": "你们能开展覆盖全美或针对特定城市的营销活动吗？",
            "answer": "两者都可以。我们开展覆盖全美的营销活动，也可以借助与当地相关的创作者，针对纽约、洛杉矶、迈阿密或芝加哥等特定市场。"
          }
        ]
      },
      "cta": {
        "title": "开启您的美国营销活动",
        "description": "携手与您的受众和目标相匹配的创作者，触达美国受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "uk": {
    "path": "/influencer-marketing-uk",
    "title": "英国网红营销 | CA Agency",
    "description": "携手英国创作者，在 Instagram、TikTok 和 YouTube 上开展英国网红营销活动，并以效果为导向的策略和清晰的报告作为支撑。",
    "ogImage": "/images/site/og/influencer-marketing-uk-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "content": {
      "hero": {
        "title": "面向英国市场的\n 网红营销机构",
        "subtitle": "让您的品牌与英国最具影响力的内容创作者建立联系。进入欧洲最大的网红营销市场，这里购买意愿强烈，创作者生态成熟。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "£930M",
          "label": "2024 年英国市场"
        },
        {
          "value": "55.5M",
          "label": "社交媒体用户"
        },
        {
          "value": "69%",
          "label": "看到后购买"
        },
        {
          "value": "89%",
          "label": "品牌使用 Instagram"
        }
      ],
      "highlights": {
        "title": "为什么在英国开展网红营销？",
        "items": [
          {
            "title": "欧洲最大的市场",
            "description": "英国在网红营销的成熟度、投入和运营专业程度方面领先欧洲。"
          },
          {
            "title": "高转化率",
            "description": "英国消费者经常在看到创作者的推荐后购买。"
          },
          {
            "title": "成熟的创作者生态",
            "description": "品牌越来越青睐长期、真实的创作者合作，而不是名人的一次性发帖。"
          },
          {
            "title": "数据驱动的成果",
            "description": "效果衡量和品牌安全是英国市场的基本要求。"
          }
        ]
      },
      "talents": {
        "title": "面向英国市场的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "👗",
            "title": "时尚",
            "description": "时尚仍是英国表现最好的创作者品类之一。"
          },
          {
            "icon": "💄",
            "title": "美妆",
            "description": "美妆营销活动受益于创作者的高度权威性和教程类内容形式。"
          },
          {
            "icon": "🍽️",
            "title": "餐饮",
            "description": "在美食、饮品和日常推荐方面，受众对创作者的信任尤其高。"
          }
        ]
      },
      "cta": {
        "title": "开启您的英国营销活动",
        "description": "为英国受众建立高信任度的创作者合作。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "canada": {
    "path": "/influencer-marketing-canada",
    "title": "加拿大网红营销 | CA Agency",
    "description": "通过以创作者为主导的双语网红营销活动，触达多伦多、温哥华、蒙特利尔及其他主要市场的加拿大受众，并提供清晰的报告。",
    "ogImage": "/images/site/og/influencer-marketing-canada-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "content": {
      "hero": {
        "title": "面向加拿大市场的\n 网红营销机构",
        "subtitle": "让您的品牌与加拿大的顶尖内容创作者建立联系。进入覆盖多伦多、温哥华和蒙特利尔的强大双语创作者市场。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$660M",
          "label": "2025 年市场规模"
        },
        {
          "value": "882K+",
          "label": "活跃网红"
        },
        {
          "value": "70%",
          "label": "通过网红发现产品"
        },
        {
          "value": "40%",
          "label": "立即购买"
        }
      ],
      "highlights": {
        "title": "为什么在加拿大开展网红营销？",
        "items": [
          {
            "title": "庞大的创作者网络",
            "description": "加拿大的创作者广泛覆盖各大城市和主要内容品类。"
          },
          {
            "title": "购买意愿强",
            "description": "很大一部分加拿大消费者通过创作者发现产品。"
          },
          {
            "title": "双语专长",
            "description": "英语和法语的本地化很重要，对面向魁北克的营销活动尤其如此。"
          },
          {
            "title": "长期价值",
            "description": "持续的创作者合作，效果往往好于一次性合作。"
          }
        ]
      },
      "talents": {
        "title": "面向加拿大市场的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "👗",
            "title": "时尚",
            "description": "本地相关性与全球潮流相结合，让时尚成为表现强劲的创作者品类。"
          },
          {
            "icon": "💄",
            "title": "美妆",
            "description": "护肤和美妆内容搭配以科普为主的创作者内容，表现良好。"
          },
          {
            "icon": "💻",
            "title": "科技",
            "description": "科技新品发布和测评受益于受众对创作者的信任和细致的演示。"
          }
        ]
      },
      "cta": {
        "title": "开启您的加拿大营销活动",
        "description": "以合适的创作者组合和对市场细微差异的把握，触达加拿大受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "australia": {
    "path": "/influencer-marketing-australia",
    "title": "澳大利亚网红营销 | CA Agency",
    "description": "在悉尼、墨尔本及澳大利亚其他地区开展以创作者为主导的网红营销活动，配备经过筛选的创作者和透明的效果报告。",
    "ogImage": "/images/site/og/influencer-marketing-australia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "content": {
      "hero": {
        "title": "面向澳大利亚市场的\n 网红营销机构",
        "subtitle": "让您的品牌与悉尼、墨尔本及澳大利亚其他地区最具影响力的内容创作者建立联系。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$589M",
          "label": "2025 年市场规模"
        },
        {
          "value": "20.9M",
          "label": "社交媒体用户"
        },
        {
          "value": "46%",
          "label": "看到后购买"
        },
        {
          "value": "70%",
          "label": "品牌正在增加预算"
        }
      ],
      "highlights": {
        "title": "为什么在澳大利亚开展网红营销？",
        "items": [
          {
            "title": "高度活跃的受众",
            "description": "澳大利亚人是社交媒体的重度用户，对创作者主导的内容反响强烈。"
          },
          {
            "title": "对购买的影响力强",
            "description": "网红在了解产品、购买考虑和转化环节中发挥着实实在在的作用。"
          },
          {
            "title": "真实至上的文化",
            "description": "贴近生活的创作者和建立在信任之上的合作，表现好于过度精致的营销活动。"
          },
          {
            "title": "投入持续增长",
            "description": "澳大利亚品牌在网红营销上的投入持续增加。"
          }
        ]
      },
      "intro": {
        "heading": "面向悉尼、墨尔本和全澳大利亚的网红营销机构",
        "paragraphs": [
          {
            "text": "CA Agency 为希望触达澳大利亚受众的品牌开展网红营销活动，从全国性的新品上市到悉尼和墨尔本的城市级活动。我们为您的品牌匹配 Instagram、TikTok 和 YouTube 上的澳大利亚创作者，并从简报到报告全程管理营销活动。"
          },
          {
            "text": "悉尼的网红营销偏向美妆、时尚、健身，以及这座城市闻名的海滩与户外生活方式。悉尼创作者很适合新品发布、活动报道，以及需要精致、令人向往的视觉风格的内容。"
          },
          {
            "text": "墨尔本的网红营销则是另一种气质：更具杂志质感，更专注于时尚、美食、咖啡和文化。墨尔本创作者适合希望获得用心打磨、以风格为主导的内容，并面向紧跟潮流的受众的品牌。许多全国性营销活动会同时使用这两座城市，再加入布里斯班、珀斯和阿德莱德的创作者以扩大触达。"
          },
          {
            "text": "对于美妆和护肤品牌，包括进入澳大利亚的韩国美妆品牌，我们在规划时既考虑当地审美，也考虑当地法规。广告必须清楚披露，而作为治疗用品（therapeutic goods）监管的产品，在澳大利亚包括许多防晒产品，在付费代言方面有更严格的规定。在制作任何内容之前，我们会据此向创作者说明要求。"
          }
        ]
      },
      "process": {
        "title": "我们如何开展澳大利亚网红营销活动",
        "steps": [
          {
            "title": "简报与目标",
            "description": "我们与您确定目标、受众、预算和时间，以及营销活动是面向全国，还是聚焦悉尼、墨尔本或其他城市。"
          },
          {
            "title": "创作者候选名单",
            "description": "您会收到一份澳大利亚创作者候选名单，附有受众所在地、互动情况和过往品牌合作，这些信息在我们推荐任何人之前都经过核查。"
          },
          {
            "title": "合同与简报",
            "description": "我们负责合同、使用权，以及一份包含澳大利亚法规所要求的广告披露的创意简报。"
          },
          {
            "title": "内容与审批",
            "description": "创作者制作内容，我们对照简报进行审核，并在发布前由您审批。"
          },
          {
            "title": "报告",
            "description": "您会获得按创作者和按城市统计的触达、互动、点击和转化数据，并清楚了解哪些做法值得重复。"
          }
        ]
      },
      "talents": {
        "title": "面向澳大利亚市场的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现突出的行业",
        "items": [
          {
            "icon": "🏃",
            "title": "生活方式与健身",
            "description": "生活方式和健身类创作者对澳大利亚受众有很强的影响力。"
          },
          {
            "icon": "👗",
            "title": "时尚",
            "description": "紧跟潮流又平易近人的创作者叙事，让时尚品类表现良好。"
          },
          {
            "icon": "💄",
            "title": "美妆",
            "description": "美妆创作者有助于带动产品发现、试用和重复互动。"
          }
        ]
      },
      "faq": {
        "title": "澳大利亚网红营销常见问题",
        "items": [
          {
            "question": "你们在悉尼和墨尔本开展网红营销活动吗？",
            "answer": "是的。我们既与悉尼和墨尔本的创作者策划针对特定城市的营销活动，也策划加入布里斯班、珀斯和阿德莱德的全国性营销活动。"
          },
          {
            "question": "CA Agency 的总部在澳大利亚吗？",
            "answer": "不在。我们的总部位于迪拜，并在阿姆斯特丹和特拉华州设有事业部。我们以远程方式开展澳大利亚的营销活动，合作的创作者居住在澳大利亚，简报、合同、审批和报告由同一个团队管理。"
          },
          {
            "question": "在澳大利亚，赞助内容需要如何披露？",
            "answer": "根据澳大利亚广告准则和消费者法，付费的创作者内容必须能被清楚地识别为广告，例如使用清晰的“Ad”（广告）或付费合作标签。我们把这一要求写入每份简报，并在审批前进行检查。"
          },
          {
            "question": "澳大利亚对护肤品和防晒产品有特殊规定吗？",
            "answer": "有。作为治疗用品监管的产品，其中包括许多防晒产品，适用更严格的广告规定，包括对付费推荐证言的限制。我们会在规划创作者内容之前，先核实您的产品属于哪一类别。"
          },
          {
            "question": "在澳大利亚做网红营销需要多少费用？",
            "answer": "费用取决于平台、创作者层级、创作者数量、交付物和使用权。我们根据您的预算和目标确定每场营销活动的范围，而不是报统一价。"
          }
        ]
      },
      "cta": {
        "title": "开启您的澳大利亚营销活动",
        "description": "携手契合您的品类和市场的创作者，触达澳大利亚受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "sydney": {
    "path": "/influencer-marketing-sydney",
    "title": "悉尼网红营销 | CA Agency",
    "description": "面向悉尼市场的网红营销活动：为美妆、护肤和生活方式品牌匹配经过筛选的悉尼创作者，覆盖 Instagram 和 TikTok，并提供清晰的报告。",
    "ogImage": "/images/site/og/influencer-marketing-sydney-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      }
    ],
    "content": {
      "hero": {
        "title": "服务悉尼营销活动的\n 网红营销机构",
        "subtitle": "CA Agency 为悉尼市场开展网红营销活动，在 Instagram、TikTok 和 YouTube 上为美妆、护肤和生活方式品牌匹配悉尼创作者。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "粉丝总数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "悉尼",
          "label": "重点市场"
        }
      ],
      "intro": {
        "heading": "为悉尼营销活动服务的网红营销机构",
        "paragraphs": [
          {
            "text": "悉尼是澳大利亚最大的城市，也是澳大利亚美妆、时尚和媒体行业的中心。为悉尼市场寻找网红营销机构的品牌，通常想要以下三者之一：一场引人注目的新品上市，精致而令人向往的内容，或是在这座城市注重风格的人群中获得稳定的触达。CA Agency 围绕这些目标策划悉尼的营销活动。"
          },
          {
            "text": "悉尼创作者的内容有着鲜明的特点：海滩与海岸线、健身与健康生活、纯净美妆，以及明亮的户外美学，这种风格尤其适合护肤和防晒品类。我们为您的品牌匹配粉丝确实生活在悉尼及周边地区的悉尼网红，从东郊到内西区，并在推荐任何人选之前核实受众所在地。"
          },
          {
            "text": "我们不是总部设在悉尼的机构。我们的总部位于迪拜，并在阿姆斯特丹和特拉华设有分部，我们与当地的创作者合作，远程执行澳大利亚的营销活动。对品牌而言，这意味着由同一个团队负责悉尼、澳大利亚其他地区以及您开展业务的任何其他市场，各地的报告方式也保持一致。"
          },
          {
            "text": "美妆和护肤是我们的核心品类，其中包括在澳大利亚上市的韩国美妆品牌。从第一份简报开始，我们就按照澳大利亚的广告规定进行规划：赞助内容必须清楚披露，而作为治疗用品受监管的产品（其中包括许多防晒产品），在付费代言方面受到更严格的限制。"
          }
        ]
      },
      "process": {
        "title": "我们如何执行悉尼的网红营销活动",
        "steps": [
          {
            "title": "简报与目标",
            "description": "我们与您商定目标、受众、预算和时间安排，并确定这场营销活动是仅面向悉尼，还是全国计划的一部分。"
          },
          {
            "title": "创作者候选名单",
            "description": "您会收到一份悉尼创作者候选名单，附有受众所在地、互动情况和过往品牌合作，这些信息在我们推荐任何人选之前都已核实。"
          },
          {
            "title": "合同与简报沟通",
            "description": "我们负责合同、内容使用权以及创意简报，简报中包含澳大利亚规定所要求的广告披露。"
          },
          {
            "title": "内容与审批",
            "description": "创作者制作内容，我们对照简报进行审核，内容经您批准后才会发布。"
          },
          {
            "title": "报告",
            "description": "您会获得每位创作者的触达、互动、点击和转化数据，清楚了解哪些做法值得再次采用。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们开展悉尼的网红营销",
        "items": [
          {
            "title": "真正的悉尼受众",
            "description": "我们核实创作者的粉丝居住在哪里，让您的预算触达身在悉尼的人，而不只是喜欢悉尼内容的人。"
          },
          {
            "title": "专注美妆与护肤",
            "description": "我们的营销活动主要为美妆、护肤和生活方式品牌打造，这些正是悉尼创作者最擅长的品类。"
          },
          {
            "title": "适合新品上市的内容",
            "description": "悉尼创作者制作的内容精致而令人向往，既适合新品上市，也可以用作付费社交广告素材。"
          },
          {
            "title": "一个团队，覆盖所有市场",
            "description": "悉尼的营销活动可以单独开展，也可以与墨尔本、澳大利亚全国性活动以及其他国家的营销活动同步进行。"
          }
        ]
      },
      "talents": {
        "title": "与我们合作的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "悉尼表现最佳的行业",
        "items": [
          {
            "icon": "💄",
            "title": "美妆与护肤",
            "description": "护肤、防晒和纯净美妆，与悉尼的户外生活方式和关注美妆的受众十分契合。"
          },
          {
            "icon": "🏃",
            "title": "健身与健康生活",
            "description": "充满活力的海滨生活，让健身和健康生活类创作者在悉尼格外有影响力。"
          },
          {
            "icon": "👗",
            "title": "时尚",
            "description": "泳装、度假装和高端时尚，在悉尼注重风格的创作者中表现出色。"
          }
        ]
      },
      "faq": {
        "title": "悉尼网红营销，常见问题",
        "items": [
          {
            "question": "CA Agency 是一家位于悉尼的网红营销机构吗？",
            "answer": "我们为悉尼市场开展网红营销活动，但我们的机构并不设在悉尼。我们的总部位于迪拜，并在阿姆斯特丹和特拉华设有分部。营销活动由同一个团队远程管理，并由居住在悉尼的创作者完成。"
          },
          {
            "question": "你们如何为品牌寻找悉尼网红？",
            "answer": "我们根据受众所在地、互动质量、内容风格、品牌安全和过往表现来筛选创作者，确定候选名单。对于悉尼的营销活动，我们会在推荐创作者之前，核实其受众中有相当比例位于悉尼地区。"
          },
          {
            "question": "在悉尼做网红营销需要多少费用？",
            "answer": "费用取决于平台、创作者层级、创作者人数、交付内容和内容使用权。我们会根据您的预算和目标为每场悉尼营销活动确定方案，而不是给出统一报价。"
          },
          {
            "question": "哪些平台最适合在悉尼做网红营销？",
            "answer": "在美妆、时尚、健身和生活方式领域，Instagram 和 TikTok 处于领先地位，YouTube 则适合篇幅较长的测评。我们会根据您的受众和营销目标推荐平台组合。"
          },
          {
            "question": "你们会处理澳大利亚的赞助内容披露吗？",
            "answer": "会。根据澳大利亚的广告准则和消费者法，付费的创作者内容必须能被清楚地识别为广告。披露要求是每份简报的一部分，我们会在批准前检查每一条帖子。对于治疗用品，例如许多防晒产品，我们还会核对有关代言的更严格规定。"
          },
          {
            "question": "悉尼的营销活动可以扩展到墨尔本或澳大利亚其他地区吗？",
            "answer": "可以。许多品牌从悉尼起步，随后加入墨尔本，再扩展到布里斯班、珀斯和阿德莱德。我们保持同一套营销活动框架，并按城市增加创作者。"
          }
        ]
      },
      "cta": {
        "title": "启动您的悉尼营销活动",
        "description": "向我们介绍您的品牌，我们会为您匹配合适的悉尼创作者。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "melbourne": {
    "path": "/influencer-marketing-melbourne",
    "title": "墨尔本网红营销 | CA Agency",
    "description": "面向墨尔本市场的网红营销活动：为时尚、美妆和护肤品牌匹配经过筛选的墨尔本创作者，覆盖 Instagram 和 TikTok，并提供清晰的报告。",
    "ogImage": "/images/site/og/influencer-marketing-melbourne-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne"
      }
    ],
    "content": {
      "hero": {
        "title": "服务墨尔本营销活动的\n 网红营销机构",
        "subtitle": "CA Agency 为墨尔本市场开展网红营销活动，在 Instagram、TikTok 和 YouTube 上为美妆、护肤和时尚品牌匹配墨尔本创作者。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "粉丝总数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "墨尔本",
          "label": "重点市场"
        }
      ],
      "intro": {
        "heading": "为墨尔本营销活动服务的网红营销机构",
        "paragraphs": [
          {
            "text": "墨尔本是澳大利亚的时尚、美食、咖啡和文化之都，这里的创作者也体现了这一点。为墨尔本市场寻找网红机构的品牌，通常想要更具编辑眼光的内容：用心的造型、鲜明的观点，以及紧跟潮流的受众。CA Agency 围绕这一特点策划墨尔本的营销活动。"
          },
          {
            "text": "墨尔本的网红往往围绕清晰的个人观点建立起忠实而活跃的社群，无论是护肤步骤、独立时尚，还是这座城市的巷弄与咖啡馆文化。我们为您的品牌匹配粉丝生活在墨尔本及周边地区、品味与您的产品相契合的创作者，并在推荐任何人选之前核查受众数据。"
          },
          {
            "text": "我们不是总部设在墨尔本的机构。我们的总部位于迪拜，并在阿姆斯特丹和特拉华设有分部，我们与当地的创作者合作，远程执行澳大利亚的营销活动。品牌可以由同一个团队负责墨尔本、悉尼以及其开展业务的所有其他市场，各地的报告方式也保持一致。"
          },
          {
            "text": "对于美妆和护肤品牌，包括进入澳大利亚的韩国美妆品牌，创作者营销活动往往承担了墨尔本美妆公关过去所做的工作：把产品送到值得信赖的人手中，并呈现在合适的受众面前。我们把澳大利亚的披露规定纳入每一份简报，其中包括针对治疗用品（例如许多防晒产品）的更严格规定。"
          }
        ]
      },
      "process": {
        "title": "我们如何执行墨尔本的网红营销活动",
        "steps": [
          {
            "title": "简报与目标",
            "description": "我们与您商定目标、受众、预算和时间安排，并确定这场营销活动是仅面向墨尔本，还是全国计划的一部分。"
          },
          {
            "title": "创作者候选名单",
            "description": "您会收到一份墨尔本创作者候选名单，附有受众所在地、互动情况和过往品牌合作，这些信息在我们推荐任何人选之前都已核实。"
          },
          {
            "title": "合同与简报沟通",
            "description": "我们负责合同、内容使用权以及创意简报，简报中包含澳大利亚规定所要求的广告披露。"
          },
          {
            "title": "内容与审批",
            "description": "创作者制作内容，我们对照简报进行审核，内容经您批准后才会发布。"
          },
          {
            "title": "报告",
            "description": "您会获得每位创作者的触达、互动、点击和转化数据，清楚了解哪些做法值得再次采用。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们开展墨尔本的网红营销",
        "items": [
          {
            "title": "真正的墨尔本受众",
            "description": "我们核实创作者的粉丝居住在哪里，让您的预算触达身在墨尔本的人。"
          },
          {
            "title": "以风格见长的创作者",
            "description": "我们寻找拥有鲜明观点的创作者，因为墨尔本的受众看重品味，而不是数量。"
          },
          {
            "title": "专注美妆与护肤",
            "description": "我们的营销活动主要为美妆、护肤和时尚品牌打造，其中包括 K-beauty 品牌的上市。"
          },
          {
            "title": "一个团队，覆盖所有市场",
            "description": "墨尔本的营销活动可以单独开展，也可以与悉尼、澳大利亚全国性活动以及其他国家的营销活动同步进行。"
          }
        ]
      },
      "talents": {
        "title": "与我们合作的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "墨尔本表现最佳的行业",
        "items": [
          {
            "icon": "👗",
            "title": "时尚",
            "description": "独立品牌和用心的造型，与墨尔本走在时尚前沿的创作者十分契合。"
          },
          {
            "icon": "💄",
            "title": "美妆与护肤",
            "description": "以护肤步骤为主、真实坦诚的护肤内容，能赢得见多识广的墨尔本受众的信任。"
          },
          {
            "icon": "☕",
            "title": "美食与生活方式",
            "description": "咖啡馆、餐饮和文化类内容，与这座城市的创作者天然契合。"
          }
        ]
      },
      "faq": {
        "title": "墨尔本网红营销，常见问题",
        "items": [
          {
            "question": "CA Agency 是一家位于墨尔本的网红机构吗？",
            "answer": "我们为墨尔本市场开展网红营销活动，但我们的机构并不设在墨尔本。我们的总部位于迪拜，并在阿姆斯特丹和特拉华设有分部。营销活动由同一个团队远程管理，并由居住在墨尔本的创作者完成。"
          },
          {
            "question": "墨尔本的网红营销与悉尼有什么不同？",
            "answer": "墨尔本的内容通常更具编辑感、更注重风格，在时尚、美食和文化方面有优势，而悉尼更偏向美妆、健身和户外生活方式。正因如此，许多全国性的营销活动会同时使用两座城市的创作者。"
          },
          {
            "question": "你们在墨尔本提供美妆公关服务吗？",
            "answer": "我们是一家网红营销机构，而不是传统的公关公司。对于美妆品牌，我们负责过去由公关承担的工作中与创作者相关的部分：产品寄送、创作者合作，以及与墨尔本创作者合作的赞助内容，并对照明确的成果进行报告。"
          },
          {
            "question": "在墨尔本做网红营销需要多少费用？",
            "answer": "费用取决于平台、创作者层级、创作者人数、交付内容和内容使用权。我们会根据您的预算和目标为每场墨尔本营销活动确定方案，而不是给出统一报价。"
          },
          {
            "question": "你们会处理澳大利亚的赞助内容披露吗？",
            "answer": "会。根据澳大利亚的广告准则和消费者法，付费的创作者内容必须能被清楚地识别为广告。披露要求是每份简报的一部分，我们会在批准前检查每一条帖子。"
          },
          {
            "question": "墨尔本的营销活动可以扩展到悉尼或澳大利亚其他地区吗？",
            "answer": "可以。我们保持同一套营销活动框架，并随着计划的扩大，在悉尼、布里斯班、珀斯和阿德莱德增加创作者。"
          }
        ]
      },
      "cta": {
        "title": "启动您的墨尔本营销活动",
        "description": "向我们介绍您的品牌，我们会为您匹配合适的墨尔本创作者。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "europe": {
    "path": "/influencer-marketing-europe",
    "title": "欧洲网红营销 | CA Agency",
    "description": "一家机构服务整个欧洲的网红营销：在德国、法国、瑞士、北欧和英国开展创作者营销活动，由我们的阿姆斯特丹分部负责执行。",
    "ogImage": "/images/site/og/influencer-marketing-europe-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "Country",
        "name": "Switzerland"
      },
      {
        "@type": "Country",
        "name": "Sweden"
      },
      {
        "@type": "Country",
        "name": "Norway"
      },
      {
        "@type": "Country",
        "name": "Finland"
      },
      {
        "@type": "Country",
        "name": "Denmark"
      },
      {
        "@type": "Country",
        "name": "Netherlands"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "content": {
      "hero": {
        "title": "面向欧洲市场的\n 网红营销机构",
        "subtitle": "CA Agency 是一家面向欧洲市场的网红营销机构，由位于阿姆斯特丹的欧洲分部为美妆和护肤品牌在德国、法国、瑞士、北欧和英国开展创作者营销活动。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "粉丝总数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "欧洲",
          "label": "重点市场"
        }
      ],
      "intro": {
        "heading": "一家网红营销机构，服务每一个欧洲市场",
        "paragraphs": [
          {
            "text": "欧洲不是一个单一市场。在柏林行之有效的营销活动，到了巴黎、苏黎世或斯德哥尔摩，就需要不同的创作者、语言和语气。作为面向欧洲市场的全方位网红营销机构，CA Agency 按照每个国家自身的情况进行规划，同时仍由一个团队、一份简报和一份报告贯穿整场营销活动。"
          },
          {
            "text": "我们的欧洲分部设在阿姆斯特丹，与迪拜总部和位于特拉华的北美分部协同工作。这让我们能够跨时区、跨语言协调创作者，按国家处理合同和内容使用权，并在我们开展活动的每个市场，让广告披露符合当地的消费者规定。"
          },
          {
            "text": "我们主要与美妆、护肤和生活方式品牌合作，其中包括首次进入欧洲的韩国美妆品牌。无论您需要德语的 TikTok 内容、法国的 Instagram 创作者，还是在北欧各国以英语实现触达，我们都会围绕您的目标搭配创作者组合，并对照明确的 KPI 报告每一次投放。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们的欧洲网红营销服务",
        "items": [
          {
            "title": "逐国规划",
            "description": "每个市场都配备使用当地语言、了解当地受众的创作者，而不是把另一个国家的营销活动翻译后照搬。"
          },
          {
            "title": "一个团队，多个市场",
            "description": "简报、合同、审批和报告都由一个团队负责，因此在 5 个国家同时上市，并不意味着要找 5 家机构。"
          },
          {
            "title": "当地的披露规定",
            "description": "各国的广告标识各不相同。我们会在内容发布前，向创作者说明每个市场所要求的措辞。"
          },
          {
            "title": "可衡量的成果",
            "description": "触达、互动、点击和转化按市场分别报告，让您看清哪些国家值得投入更多预算。"
          }
        ]
      },
      "talents": {
        "title": "参与欧洲营销活动的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现最佳的行业",
        "items": [
          {
            "icon": "💄",
            "title": "美妆",
            "description": "借助当地创作者，彩妆新品发布和教程内容在欧洲各市场都能很好地传播。"
          },
          {
            "icon": "🧴",
            "title": "护肤",
            "description": "以科普为主的护肤内容，能赢得关注成分的欧洲消费者的信任。"
          },
          {
            "icon": "👗",
            "title": "时尚与生活方式",
            "description": "穿搭和日常生活类内容，把产品融入欧洲人的真实生活。"
          }
        ]
      },
      "faq": {
        "title": "欧洲网红营销，常见问题",
        "items": [
          {
            "question": "你们在哪些欧洲国家开展网红营销活动？",
            "answer": "我们在欧洲各地策划并执行创作者营销活动，重点是德国、法国、瑞士、北欧国家（瑞典、挪威、芬兰和丹麦）、荷兰和英国。营销活动可以在一个国家开展，也可以同时覆盖多个国家。"
          },
          {
            "question": "你们与使用当地语言的创作者合作吗？",
            "answer": "是的。在德国、法国和瑞士，我们与使用当地语言发布内容的创作者合作。在北欧，许多创作者既用本国语言，也用英语触达受众，我们会选择适合您品牌的组合。"
          },
          {
            "question": "你们如何处理欧洲各国的广告披露？",
            "answer": "在欧洲各地，付费的创作者内容都必须能被识别为广告，但各国所要求的措辞不同，例如德国使用“Werbung”或“Anzeige”，法国使用“Publicité”或“Collaboration commerciale”。我们会在每份简报中写明正确的标识，并在内容获批前进行检查。"
          },
          {
            "question": "在欧洲做网红营销需要多少费用？",
            "answer": "费用取决于国家、平台、创作者层级、创作者人数、交付内容和内容使用权。我们会根据您的目标和预算为每场营销活动确定方案，而不是给出统一报价。请告诉我们您的预算和目标市场，我们会据此制定创作者方案。"
          },
          {
            "question": "你们能帮助韩国美妆品牌在欧洲上市吗？",
            "answer": "可以。K-beauty 是我们的核心品类之一。我们帮助韩国护肤和彩妆品牌选择首批进入的欧洲市场，为其匹配受众本就关注护肤的创作者，并按国家调整传播信息。"
          }
        ]
      },
      "cta": {
        "title": "启动您的欧洲营销活动",
        "description": "告诉我们哪些欧洲市场对您最重要，我们会为您匹配合适的创作者。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "germany": {
    "path": "/influencer-marketing-germany",
    "title": "德国网红营销 | CA Agency",
    "description": "面向德国及 DACH 地区的网红营销机构：在 Instagram、TikTok 和 YouTube 上为美妆和护肤品牌匹配德语创作者。",
    "ogImage": "/images/site/og/influencer-marketing-germany-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "Switzerland"
      }
    ],
    "content": {
      "hero": {
        "title": "面向德国市场的\n 网红营销机构",
        "subtitle": "CA Agency 是一家面向德国及 DACH 地区的网红营销机构，在 Instagram、TikTok 和 YouTube 上连接美妆和护肤品牌与德语创作者。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "粉丝总数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "DACH",
          "label": "重点市场"
        }
      ],
      "intro": {
        "heading": "面向德国、奥地利和瑞士的网红营销机构",
        "paragraphs": [
          {
            "text": "德国是欧盟最大的消费市场，德国受众希望看到由自己已经信任的创作者用母语呈现的内容。CA Agency 与德语创作者合作，为德国市场策划网红营销活动，让您的产品以德国消费者自己会问的方式得到讲解。"
          },
          {
            "text": "德国消费者会阅读成分表、比较测评，比起炒作，更认可真实而详尽的内容。我们为您的品牌匹配受众、垂直领域和语气都符合这一期待的创作者，随后由位于阿姆斯特丹的欧洲分部负责简报、合同、内容审批和内容使用权。"
          },
          {
            "text": "由于奥地利和瑞士大部分地区也使用德语，一场规划得当的营销活动可以覆盖整个 DACH 地区。我们会调整创作者组合以及各国不同的细节，并分别报告每个市场的成果。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们的德国网红营销服务",
        "items": [
          {
            "title": "德语内容",
            "description": "创作者用德语与受众交流，这对建立信任以及在 TikTok 和 YouTube 上被搜索到都很重要。"
          },
          {
            "title": "清晰的广告标识",
            "description": "在德国，付费帖子必须标明“Werbung”或“Anzeige”。我们把这一标识写入每份简报，并在批准前进行检查。"
          },
          {
            "title": "覆盖 DACH 地区",
            "description": "同一套营销活动框架可以从德国延伸到奥地利和瑞士德语区。"
          },
          {
            "title": "注重细节的受众",
            "description": "我们倾向于选择能把产品讲解清楚的创作者，因为德国消费者看重实质内容。"
          }
        ]
      },
      "talents": {
        "title": "参与德国营销活动的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现最佳的行业",
        "items": [
          {
            "icon": "🧴",
            "title": "护肤",
            "description": "以成分为主的护肤内容，符合德国消费者先研究再购买的习惯。"
          },
          {
            "icon": "💄",
            "title": "美妆",
            "description": "教程和真实的初次使用感受，帮助新的彩妆品牌在德国赢得信任。"
          },
          {
            "icon": "💪",
            "title": "健康与养生",
            "description": "以日常习惯为基础的创作者内容，为健康养生品牌建立长期互动。"
          }
        ]
      },
      "faq": {
        "title": "德国网红营销，常见问题",
        "items": [
          {
            "question": "你们与德语网红合作吗？",
            "answer": "是的。对于德国、奥地利和瑞士德语区的营销活动，我们与使用德语发布内容、粉丝主要位于 DACH 地区的创作者合作。"
          },
          {
            "question": "德国的广告披露是如何规定的？",
            "answer": "付费的创作者内容必须能被清楚地识别为广告。在实际操作中，这意味着在帖子开头用德语显著标注“Werbung”或“Anzeige”。我们把这一要求写入每份简报，并在每条帖子获批前进行检查。"
          },
          {
            "question": "哪些平台最适合在德国做网红营销？",
            "answer": "在美妆、护肤和生活方式领域，Instagram 和 TikTok 处于领先地位，YouTube 在深度测评方面依然表现强劲。我们会根据您的受众和营销目标推荐平台组合。"
          },
          {
            "question": "在德国开展一场网红营销活动需要多少费用？",
            "answer": "这取决于平台、创作者层级、创作者人数、交付内容和内容使用权。我们会根据您的预算和目标为每场营销活动确定方案，而不是给出统一报价。"
          },
          {
            "question": "一场营销活动可以同时覆盖德国、奥地利和瑞士吗？",
            "answer": "可以。共同的语言让 DACH 地区的营销活动更加高效。我们规划一套框架，在有帮助的情况下按国家增加创作者，并分别报告每个市场。"
          }
        ]
      },
      "cta": {
        "title": "启动您的德国营销活动",
        "description": "通过与您的品牌和目标相匹配的创作者，触达德语受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "france": {
    "path": "/influencer-marketing-france",
    "title": "法国网红营销 | CA Agency",
    "description": "面向法国市场的网红营销机构：为美妆和护肤品牌匹配法语创作者，营销活动合规并带有清晰的广告标识。",
    "ogImage": "/images/site/og/influencer-marketing-france-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "France"
      }
    ],
    "content": {
      "hero": {
        "title": "面向法国市场的\n 网红营销机构",
        "subtitle": "CA Agency 是一家面向法国市场的网红营销机构，在 Instagram、TikTok 和 YouTube 上连接美妆和护肤品牌与法语创作者。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "粉丝总数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "法国",
          "label": "重点市场"
        }
      ],
      "intro": {
        "heading": "面向法国市场的网红营销机构",
        "paragraphs": [
          {
            "text": "法国是全球要求最高的美妆市场之一。法国消费者懂护肤，有实力强劲的本土品牌可供比较，并且希望看到法语内容。CA Agency 与法语创作者合作，为法国市场策划网红营销活动，这些创作者能够以令人信服的方式把您的品牌介绍给这一受众。"
          },
          {
            "text": "法国对创作者营销的监管也比大多数国家更严格。自法国 2023 年 6 月 9 日出台的法律（关于商业影响力）以来，付费内容必须带有清晰的“Publicité”或“Collaboration commerciale”标识，部分产品类别也受到限制。我们会向创作者说明这些规定，并在每条帖子发布前进行审核。"
          },
          {
            "text": "我们位于阿姆斯特丹的欧洲分部负责创作者筛选、合同、内容审批、内容使用权和报告，因此无论是法国，还是您日后增加的任何邻近市场，您的团队都只需对接一个联系人。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们的法国网红营销服务",
        "items": [
          {
            "title": "法语创作者",
            "description": "内容由粉丝位于法国的创作者用法语制作，而不是从其他市场翻译而来。"
          },
          {
            "title": "从设计之初即合规",
            "description": "每份简报都包含法国付费内容所要求的“Publicité”或“Collaboration commerciale”标识。"
          },
          {
            "title": "美妆专长",
            "description": "我们主要与美妆和护肤品牌合作，懂得如何让一个新品牌在法国知名品牌旁边找到自己的定位。"
          },
          {
            "title": "透明的报告",
            "description": "每次投放结束后，我们都会清楚地报告触达、互动、点击和转化。"
          }
        ]
      },
      "talents": {
        "title": "参与法国营销活动的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现最佳的行业",
        "items": [
          {
            "icon": "💄",
            "title": "美妆",
            "description": "法国受众密切关注美妆，彩妆内容在这里表现出色。"
          },
          {
            "icon": "🧴",
            "title": "护肤",
            "description": "护肤步骤和成分类内容，帮助新的护肤品牌在药房热门品牌旁边赢得一席之地。"
          },
          {
            "icon": "👗",
            "title": "时尚",
            "description": "穿搭内容把品牌与欧洲最关注时尚的受众群体之一连接起来。"
          }
        ]
      },
      "faq": {
        "title": "法国网红营销，常见问题",
        "items": [
          {
            "question": "你们与法语网红合作吗？",
            "answer": "是的。面向法国的营销活动由使用法语发布内容、受众主要位于法国的创作者执行。同样的做法也适用于瑞士法语区和比利时。"
          },
          {
            "question": "法国对网红广告有哪些规定？",
            "answer": "法国 2023 年 6 月 9 日出台的法律（关于商业影响力）要求付费内容清楚标明“Publicité”或“Collaboration commerciale”，并限制某些产品和服务的推广。我们把这些要求写入每份简报，并在批准前检查每一条帖子。"
          },
          {
            "question": "哪些平台最适合在法国做网红营销？",
            "answer": "在美妆、护肤和时尚领域，Instagram 和 TikTok 处于领先地位，YouTube 则在篇幅较长的测评和护肤步骤内容方面表现强劲。我们会根据您的受众和目标推荐平台组合。"
          },
          {
            "question": "在法国开展一场网红营销活动需要多少费用？",
            "answer": "费用取决于平台、创作者层级、创作者人数、交付内容和内容使用权。我们会根据您的预算和目标为每场营销活动确定方案，而不是给出统一报价。"
          },
          {
            "question": "你们能帮助国际美妆品牌进入法国吗？",
            "answer": "可以。我们帮助来自法国以外的品牌，包括韩国美妆品牌，选择合适的创作者，针对法国消费者调整传播信息，并以合规、在当地制作的内容上市。"
          }
        ]
      },
      "cta": {
        "title": "启动您的法国营销活动",
        "description": "通过与您的品牌和目标相匹配的创作者，触达法国受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "switzerland": {
    "path": "/influencer-marketing-switzerland",
    "title": "瑞士网红营销 | CA Agency",
    "description": "面向瑞士市场的网红营销机构：在瑞士德语区、法语区和意大利语区为美妆和护肤品牌开展创作者营销活动。",
    "ogImage": "/images/site/og/influencer-marketing-switzerland-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Switzerland"
      }
    ],
    "content": {
      "hero": {
        "title": "面向瑞士市场的\n 网红营销机构",
        "subtitle": "CA Agency 是一家面向瑞士市场的网红营销机构，在德语区、法语区和意大利语区为美妆和护肤品牌开展创作者营销活动。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "粉丝总数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "瑞士",
          "label": "重点市场"
        }
      ],
      "intro": {
        "heading": "面向多语言瑞士市场的网红营销机构",
        "paragraphs": [
          {
            "text": "瑞士市场规模不大，但购买力强，并且使用多种语言。面向苏黎世的营销活动需要德语创作者，日内瓦和洛桑需要法语，提契诺则需要意大利语。CA Agency 按地区逐一策划面向瑞士的网红营销活动，让每一类受众都能用自己的语言了解您的品牌。"
          },
          {
            "text": "瑞士消费者看重品质与低调，更认可有本地感而非外来感的创作者。我们挑选粉丝确实位于瑞士的创作者，在推荐任何人选之前核查受众数据，并按照瑞士的公平竞争规定，确保广告带有清晰的标识。"
          },
          {
            "text": "由于瑞士与德国、奥地利和法国语言相通，瑞士的营销活动既可以独立开展，也可以纳入更大范围的 DACH 或欧洲计划。我们位于阿姆斯特丹的欧洲分部由一个团队统一管理创作者、合同、审批和报告。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们的瑞士网红营销服务",
        "items": [
          {
            "title": "3 个语言区",
            "description": "我们对瑞士德语区、法语区和意大利语区分别进行规划，并分别报告。"
          },
          {
            "title": "真正的瑞士受众",
            "description": "我们核查创作者的粉丝居住在哪里，让预算用于瑞士境内的触达。"
          },
          {
            "title": "高端定位",
            "description": "内容为注重品质、对品牌期望很高的受众量身打造。"
          },
          {
            "title": "更大计划的一部分",
            "description": "瑞士的活动可以与德国、奥地利和法国的营销活动衔接，无需额外增加机构。"
          }
        ]
      },
      "talents": {
        "title": "参与瑞士营销活动的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现最佳的行业",
        "items": [
          {
            "icon": "🧴",
            "title": "护肤",
            "description": "高端护肤适合愿意为品质和经过验证的效果买单的瑞士受众。"
          },
          {
            "icon": "💄",
            "title": "美妆",
            "description": "在这里，用心而真实的美妆内容比高调的推广表现更好。"
          },
          {
            "icon": "⌚",
            "title": "奢侈品与生活方式",
            "description": "创作者内容把高端产品融入令人向往而又真实可信的日常生活。"
          }
        ]
      },
      "faq": {
        "title": "瑞士网红营销，常见问题",
        "items": [
          {
            "question": "你们覆盖瑞士的哪些语言区？",
            "answer": "我们为瑞士德语区、法语区和意大利语区策划营销活动。大多数品牌从德语区起步，再加入法语创作者，以实现全国范围的触达。"
          },
          {
            "question": "我在德国或法国的营销活动可以直接用于瑞士吗？",
            "answer": "部分可以。语言可以沿用，但瑞士受众对居住在瑞士的创作者反应最好。我们通常会保留营销活动的创意，并加入瑞士创作者来执行。"
          },
          {
            "question": "瑞士的赞助内容如何标识？",
            "answer": "根据瑞士的公平竞争规定，付费的创作者内容必须能被清楚地识别为广告。我们在每份简报中写明清晰的广告标识，并在帖子获批前进行检查。"
          },
          {
            "question": "在瑞士开展一场网红营销活动需要多少费用？",
            "answer": "费用取决于语言区、平台、创作者层级、创作者人数和内容使用权。我们会根据您的预算和目标为每场营销活动确定方案，而不是给出统一报价。"
          }
        ]
      },
      "cta": {
        "title": "启动您的瑞士营销活动",
        "description": "通过与您的品牌相匹配的创作者，用合适的语言触达瑞士受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "nordics": {
    "path": "/influencer-marketing-nordics",
    "title": "北欧网红营销 | CA Agency",
    "description": "面向北欧市场的网红营销机构：在瑞典、挪威、芬兰和丹麦为美妆和护肤品牌开展创作者营销活动，逐个市场进行规划。",
    "ogImage": "/images/site/og/influencer-marketing-nordics-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Sweden"
      },
      {
        "@type": "Country",
        "name": "Norway"
      },
      {
        "@type": "Country",
        "name": "Finland"
      },
      {
        "@type": "Country",
        "name": "Denmark"
      }
    ],
    "content": {
      "hero": {
        "title": "面向北欧市场的\n 网红营销机构",
        "subtitle": "CA Agency 是一家面向北欧市场的网红营销机构，在瑞典、挪威、芬兰和丹麦为美妆和护肤品牌开展创作者营销活动。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "18M+",
          "label": "粉丝总数"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "北欧",
          "label": "重点市场"
        }
      ],
      "intro": {
        "heading": "面向瑞典、挪威、芬兰和丹麦的网红营销机构",
        "paragraphs": [
          {
            "text": "北欧国家是欧洲数字化程度最高的市场之一。瑞典、挪威、芬兰和丹麦的受众在 Instagram、TikTok 和 YouTube 上花费大量时间，对网购充满信心，并希望品牌真诚而低调。CA Agency 围绕这一期待，为北欧市场策划网红营销活动。"
          },
          {
            "text": "每个北欧国家都有自己的语言和自己的创作者，一位瑞典创作者并不会自动触达挪威或芬兰。我们把斯德哥尔摩、奥斯陆、赫尔辛基和哥本哈根作为不同的受众分别规划，按市场在当地语言内容和英语内容之间做出选择，并按照各国的消费者规定，确保广告带有清晰的标识。"
          },
          {
            "text": "北欧消费者关心成分、可持续性和透明度，因此这一地区很适合护肤和纯净美妆。我们位于阿姆斯特丹的欧洲分部负责管理创作者、合同、审批和报告，无论是 1 个北欧国家还是全部 4 个国家。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们的北欧网红营销服务",
        "items": [
          {
            "title": "4 个市场，一个计划",
            "description": "瑞典、挪威、芬兰和丹麦分别规划，并由一个团队统一管理。"
          },
          {
            "title": "真诚、低调的内容",
            "description": "我们在简报中引导创作者采用北欧受众所信任的沉稳、可信的语气。"
          },
          {
            "title": "清晰标明的广告",
            "description": "北欧各国的消费者主管机构要求付费帖子清楚标明。每份简报都包含正确的标识。"
          },
          {
            "title": "当地语言或英语",
            "description": "我们根据您的受众，按市场在当地语言内容和英语之间做出选择。"
          }
        ]
      },
      "talents": {
        "title": "参与北欧营销活动的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "表现最佳的行业",
        "items": [
          {
            "icon": "🧴",
            "title": "护肤",
            "description": "关注成分的北欧消费者，认可清晰、以科普为主的护肤内容。"
          },
          {
            "icon": "🌿",
            "title": "纯净美妆",
            "description": "有关透明度和可持续性的宣称很重要，创作者能帮助以可信的方式加以说明。"
          },
          {
            "icon": "🏃",
            "title": "生活方式与健康",
            "description": "日常生活类内容，契合北欧人充满活力、亲近户外的生活方式。"
          }
        ]
      },
      "faq": {
        "title": "北欧网红营销，常见问题",
        "items": [
          {
            "question": "你们在哪些北欧国家开展网红营销活动？",
            "answer": "瑞典、挪威、芬兰和丹麦。营销活动可以在一个国家开展，也可以覆盖整个地区，并为每个市场分别挑选创作者。"
          },
          {
            "question": "北欧的营销活动应该用英语还是当地语言？",
            "answer": "两者都可行。英语在北欧各国被广泛理解，但当地语言的内容通常让人感觉更亲近、更值得信任。我们会根据您的品牌和受众，按市场推荐组合方式。"
          },
          {
            "question": "北欧国家的赞助内容如何标识？",
            "answer": "各国的消费者主管机构都要求在帖子开头，以受众能够理解的方式，将付费内容清楚地标明为广告。我们在每份简报中写明正确的措辞，并在批准前进行检查。"
          },
          {
            "question": "一位创作者足以触达整个地区吗？",
            "answer": "很少能做到。粉丝集中在创作者自己的国家，因此我们通常会为每个市场至少规划一组创作者，并分别报告每个国家。"
          },
          {
            "question": "在北欧开展一场网红营销活动需要多少费用？",
            "answer": "费用取决于国家数量、平台、创作者层级、交付内容和内容使用权。我们会根据您的预算和目标为每场营销活动确定方案，而不是给出统一报价。"
          }
        ]
      },
      "cta": {
        "title": "启动您的北欧营销活动",
        "description": "通过与您的品牌相匹配的创作者，触达瑞典、挪威、芬兰和丹麦的受众。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  }
}
