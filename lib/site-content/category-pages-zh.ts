import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// Chinese versions of the beauty, skincare and K-beauty category pages, served at
// /zh/<path>. Translated from the English defaults; not editable in the
// admin. Plain data: keys are the page keys from lib/data/locations.ts.

export const chineseCategoryPages: Record<string, TranslatedLocationPage> = {
  "beautyAgency": {
    "path": "/beauty-influencer-marketing-agency",
    "title": "美妆网红营销机构 | CA Agency",
    "description": "CA Agency 是美妆网红营销机构，为彩妆、护肤、护发和美妆零售品牌匹配创作者，在美国及全球市场用真实肌肤、真实光线下的内容展示产品表现。",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "美妆\n网红营销机构",
        "subtitle": "CA Agency 是一家美妆网红营销机构，为彩妆、护肤、护发和美妆零售品牌对接创作者，在美国及全球市场，让产品在真实肌肤、真实光线下展现效果。",
        "primaryButtonLabel": "开启您的营销活动",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看案例研究",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "18M+",
          "label": "总粉丝数"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "平台"
        }
      ],
      "marquee": {
        "items": [
          "Fenty Beauty",
          "YSL Beauty",
          "NARS",
          "Kylie Cosmetics",
          "Sephora",
          "Kiko Milano",
          "Juvia's Place",
          "Revolve Beauty",
          "Gisou",
          "Laneige"
        ]
      },
      "caseStudies": {
        "title": "我们执行过的美妆营销活动",
        "subtitle": "高端美妆、彩妆、护发和美妆零售：我们为这些品牌匹配合适创作者的部分案例。",
        "items": [
          {
            "src": "/videos/work/melly-fenty-web-v1.mp4",
            "brand": "Fenty Beauty",
            "name": "真实肌肤上的底妆",
            "href": "/case-studies/fenty-beauty-campaign"
          },
          {
            "src": "/videos/work/dariia-ysl-web-v1.mp4",
            "brand": "YSL Beauty",
            "name": "奢华美妆，创作者原生风格",
            "href": "/case-studies/ysl-beauty-campaign"
          },
          {
            "src": "/videos/work/fashionfreakk-nars.mp4",
            "brand": "NARS",
            "name": "高端美妆",
            "href": "/case-studies/nars-campaign"
          },
          {
            "src": "/videos/work/kylie-cosmetics-web-v1.mp4",
            "brand": "Kylie Cosmetics",
            "name": "彩妆",
            "href": "/case-studies/kylie-cosmetics-campaign"
          },
          {
            "src": "/videos/work/albina-sephora-web-v1.mp4",
            "brand": "Sephora",
            "name": "美妆零售购物分享与爱用好物",
            "href": "/case-studies/sephora-campaign"
          },
          {
            "src": "/videos/work/beatrix-gisou-web-v1.mp4",
            "brand": "Gisou",
            "name": "护发质地与效果",
            "href": "/case-studies/gisou-campaign"
          }
        ]
      },
      "process": {
        "title": "我们如何执行美妆网红营销活动",
        "subtitle": "从第一份简报到最终报告，由同一支团队全程负责。",
        "steps": [
          {
            "title": "简报与策略",
            "description": "我们明确主推产品、可以使用的功效宣称、需要展示的色号或肤质、目标市场，以及最重要的成果：知名度、试用还是销量。"
          },
          {
            "title": "创作者匹配",
            "description": "我们根据受众匹配度、肤质与肤色范围、互动质量和内容功底筛选美妆创作者，而不只看粉丝数。"
          },
          {
            "title": "内容与审核",
            "description": "上妆过程、持妆测试、试色和 GRWM（和我一起化妆）等形式，从简报、审核、使用权到广告披露，全程管理。"
          },
          {
            "title": "放大与报告",
            "description": "表现最好的内容通过合作广告和 Spark Ads 进一步放大，每场营销活动都会报告触达、互动、点击和转化。"
          }
        ]
      },
      "intro": {
        "heading": "以真实营销活动为根基的美妆网红营销机构",
        "paragraphs": [
          {
            "text": "美妆是创作者最能发挥作用的品类。消费者在下单之前，想看到粉底与真实肤色是否贴合，口红能否撑过一整天，精华是否能被肌肤吸收。CA Agency 是一家美妆网红营销机构，专门打造这样的证明：为彩妆、护肤、护发和美妆零售品牌匹配能在镜头前演示产品的创作者，并在 Instagram、TikTok 和 YouTube 上带来转化。"
          },
          {
            "text": "我们的合作涵盖 YSL Beauty、NARS 等高端与奢华品牌，Fenty Beauty、Kylie Cosmetics、Kiko Milano 和 Juvia’s Place 等彩妆品牌，Sephora、Revolve Beauty 等美妆零售商，以及护发品牌 Gisou。每份简报都不一样：奢华品牌需要精致质感，同时又要与创作者的主页风格浑然一体，彩妆品牌则需要如实展示显色度、试色和色号范围。"
          },
          {
            "text": "美国是全球最大的美妆市场。对于瞄准美国的品牌，我们把全国范围的触达与符合 FTC 要求的广告披露和严谨的功效宣称管理结合起来。对于全球上市，我们协调北美、欧洲、中东和亚洲的创作者，让同一个产品故事在各地保持一致。以护肤为主的品牌可以通过我们的护肤网红营销项目做得更深入，韩国品牌则可以与我们专门的 K-beauty 团队合作。"
          }
        ]
      },
      "highlights": {
        "title": "美妆品牌为何选择 CA Agency",
        "items": [
          {
            "title": "美妆是我们的核心",
            "description": "美妆和护肤是我们的核心领域，因此为创作者做简报的人懂妆效、持妆时间、色号范围，也懂真正重要的功效宣称。"
          },
          {
            "title": "实证胜于修饰",
            "description": "我们在简报中要求如实演示（试色、持妆测试、真实肌肤上的前后对比），因为这才能赢得信任、带动试用。"
          },
          {
            "title": "达人优先的网络",
            "description": "我们管理自己的签约美妆创作者，同时与更广泛的创作者网络合作，为您找到真正使用并喜爱这一品类的创作者。"
          },
          {
            "title": "像媒体投放一样衡量",
            "description": "每场营销活动都会报告触达、互动、点击和转化，内容还可以通过付费合作广告进一步放大。"
          }
        ]
      },
      "talents": {
        "title": "我们的签约美妆创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "我们专注的美妆品类",
        "items": [
          {
            "icon": "💄",
            "title": "彩妆",
            "description": "底妆、唇妆、眼妆和修容类新品，通过试色、上妆和真实持妆效果来呈现。"
          },
          {
            "icon": "💧",
            "title": "护肤",
            "description": "护肤流程、活性成分和质地特写，讲清楚产品有什么作用、适合谁。"
          },
          {
            "icon": "✨",
            "title": "护发与美妆零售",
            "description": "以效果为主的护发内容，以及为门店和网站带来流量的购物分享式零售营销活动。"
          }
        ]
      },
      "faq": {
        "title": "美妆网红营销常见问题",
        "items": [
          {
            "question": "美妆网红营销机构是做什么的？",
            "answer": "我们为美妆品牌全程策划和执行创作者营销活动：策略、创作者筛选、简报、合同、内容审核、使用权、广告披露、付费放大和报告。您只需对接一支负责到底的团队，不必亲自管理几十位创作者。"
          },
          {
            "question": "美妆网红营销的费用是多少？",
            "answer": "费用取决于平台、创作者层级、创作者人数、交付内容和使用权。我们不报统一价，而是根据您的目标和预算确定每场营销活动的范围，并告诉您哪种创作者组合回报最好。告诉我们您的预算和目标，我们会据此制定方案。"
          },
          {
            "question": "哪些平台最适合美妆品牌？",
            "answer": "TikTok 带动种草和潮流，Instagram Reels 和 Stories 适合呈现精致的护肤化妆流程和新品上市，YouTube 则最适合深度教程和测评。多数美妆营销活动会组合使用多个平台，并根据您的受众和目标分配比重。"
          },
          {
            "question": "你们与美国的美妆品牌合作吗？",
            "answer": "合作。美国是我们的主要市场，我们与美国创作者开展覆盖全美的营销活动，包括符合 FTC 要求的广告披露，同时也在欧洲、中东和亚洲开展营销活动。"
          },
          {
            "question": "除了全球知名品牌，你们也与新兴美妆品牌合作吗？",
            "answer": "合作。从刚开始搭建第一个创作者项目的新锐独立品牌，到推出新品的全球大牌，我们都有合作，并根据品牌所处阶段调整创作者组合（微型、中腰部和头部）。"
          }
        ]
      },
      "cta": {
        "title": "开启您的美妆营销活动",
        "description": "告诉我们您的产品、市场和目标，我们会为您匹配能把产品卖出去的美妆创作者。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "skincareAgency": {
    "path": "/skincare-influencer-marketing-agency",
    "title": "护肤网红营销机构 | CA Agency",
    "description": "CA Agency 是护肤网红营销机构，帮助护肤品牌把成分、质地和护肤流程变成创作者内容，在美国及全球市场建立信任、带动试用。",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "护肤\n网红营销机构",
        "subtitle": "CA Agency 是一家护肤网红营销机构，帮助护肤品牌把成分、质地和护肤流程转化为创作者内容，在美国及全球范围内建立信任、带动试用。",
        "primaryButtonLabel": "开启您的营销活动",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看案例研究",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "已完成的营销活动"
        },
        {
          "value": "150+",
          "label": "全球品牌"
        },
        {
          "value": "18M+",
          "label": "总粉丝数"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "平台"
        }
      ],
      "marquee": {
        "items": [
          "DELERE",
          "Purito",
          "Anua",
          "Mixsoon",
          "Haruharu Wonder",
          "Medicube",
          "Laneige",
          "YesStyle"
        ]
      },
      "caseStudies": {
        "title": "我们执行过的护肤营销活动",
        "subtitle": "为护肤品牌打造的创作者内容：以护肤流程为主线，以成分为先。",
        "items": [
          {
            "src": "/videos/work/saranda-delere-web-v1.mp4",
            "brand": "DELERE",
            "name": "以护肤流程为主线",
            "href": "/case-studies/delere-campaign"
          },
          {
            "src": "/videos/work/aiym-purito-web-v1.mp4",
            "brand": "Purito",
            "name": "纯净、敏感肌护理",
            "href": "/case-studies/purito-campaign"
          },
          {
            "src": "/videos/work/anton-anua-web-v1.mp4",
            "brand": "Anua",
            "name": "男士护肤流程",
            "href": "/case-studies/anua-campaign"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "以成分为主的护肤",
            "href": "/case-studies/mixsoon-skincare"
          },
          {
            "src": "/videos/work/rebecca-haruharu-web-v1.mp4",
            "brand": "Haruharu Wonder",
            "name": "发酵、温和护肤",
            "href": "/case-studies/haruharu-wonder-campaign"
          },
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "专业护肤与美容仪器"
          }
        ]
      },
      "process": {
        "title": "我们如何执行护肤网红营销活动",
        "subtitle": "围绕科普、真实效果和合规宣称来打造。",
        "steps": [
          {
            "title": "宣称与简报",
            "description": "我们从您的核心成分、已获批准的功效宣称和目标肌肤问题出发，让每一份创作者简报从第一天起就准确、合规。"
          },
          {
            "title": "创作者匹配",
            "description": "我们根据肤质、肌肤问题、受众匹配度和可信度挑选懂护肤的创作者，让讲解产品的人真正与您的顾客相符。"
          },
          {
            "title": "护肤流程内容",
            "description": "护肤流程演示、质地特写、成分讲解和真实的效果记录，审核、使用权和广告披露都由我们处理。"
          },
          {
            "title": "衡量与扩大",
            "description": "我们报告触达、互动、点击和转化，然后加大投入到能带动试用的创作者和内容形式上。"
          }
        ]
      },
      "intro": {
        "heading": "懂成分的护肤网红营销机构",
        "paragraphs": [
          {
            "text": "护肤品靠信任成交。在把一款精华或防晒加入日常护肤之前，人们想了解里面有什么成分，看到质地，并听听与自己肤质相近的人怎么说。CA Agency 是一家护肤网红营销机构，专门建立这种信任：为护肤品牌匹配能把活性成分讲清楚、在镜头前演示护肤流程，并在 Instagram、TikTok 和 YouTube 上如实展示长期效果的创作者。"
          },
          {
            "text": "我们为 DELERE、Purito、Anua、Mixsoon、Haruharu Wonder 和 Medicube 等品牌执行过护肤营销活动，涵盖以护肤流程为主线的新品上市、敏感肌与纯净护肤定位、以成分为先的科普，以及男士护肤。这些经验决定了我们做简报的方式：演示什么，创作者可以和不可以使用哪些宣称，以及如何展示效果变化而不过度承诺。"
          },
          {
            "text": "功效宣称的严谨在美国尤为重要：化妆品宣称必须避开药品式的承诺，每条赞助内容都需要清晰的 FTC 广告披露。我们把这两点写进每一份简报和每一次审核。韩国及 K-beauty 品牌可以与我们专门的 K-beauty 团队合作，产品线更广的美妆品牌则可以通过我们的美妆网红营销项目，把护肤与彩妆、护发结合起来。"
          }
        ]
      },
      "highlights": {
        "title": "护肤品牌为何与我们合作",
        "items": [
          {
            "title": "懂成分的简报",
            "description": "由懂护肤的团队向创作者讲解活性成分、浓度和护肤流程，让科普内容准确到位。"
          },
          {
            "title": "站得住脚的宣称",
            "description": "审核环节会检查每一项宣称和披露，让内容有说服力，又不滑向医疗化或夸大的承诺。"
          },
          {
            "title": "按肌肤问题匹配",
            "description": "我们为产品匹配肤质和肌肤问题与您的顾客一致的创作者：痘痘肌、敏感肌、熟龄肌或油性肌肤。"
          },
          {
            "title": "效果胜于噱头",
            "description": "质地特写、护肤流程演示和真实的效果记录，比一次性的开箱内容转化更好，我们用数据衡量来证明这一点。"
          }
        ]
      },
      "talents": {
        "title": "懂护肤的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "我们执行的护肤营销活动",
        "items": [
          {
            "icon": "🧴",
            "title": "护肤流程与成分科普",
            "description": "以成分为先、以护肤流程为主线的内容，讲清楚产品有什么作用、适合谁，而不是堆砌术语。"
          },
          {
            "icon": "🌿",
            "title": "敏感肌与男士护肤",
            "description": "温和、纯净和男士护肤流程，匹配肤质和受众都与产品相符的创作者。"
          },
          {
            "icon": "🔬",
            "title": "专业护肤与美容仪器",
            "description": "家用美容仪器和专业护肤系列，用可信、以效果为主的内容来演示。"
          }
        ]
      },
      "faq": {
        "title": "护肤网红营销常见问题",
        "items": [
          {
            "question": "你们如何找到合适的护肤网红？",
            "answer": "我们从肤质和肌肤问题、受众画像、互动质量、内容风格和品牌安全等方面审核创作者。目标是找到受众与您的顾客相像、并且能可信地讲解产品的创作者。"
          },
          {
            "question": "你们如何处理护肤功效宣称和 FTC 广告披露？",
            "answer": "我们向创作者说明您已获批准的宣称，在内容发布前进行审核，并确保每条赞助内容都带有 #ad 等清晰的披露标注。在美国，这还意味着化妆品宣称要避开治疗或治愈某种病症之类的药品式承诺。"
          },
          {
            "question": "哪些平台最适合护肤品牌？",
            "answer": "TikTok 最适合种草和护肤流程类潮流，Instagram 适合精致的护肤流程和 Reels，YouTube 适合深度测评和长期效果展示。我们根据您的受众和目标分配各平台的比重。"
          },
          {
            "question": "你们只与韩国护肤品牌合作吗？",
            "answer": "不是。我们与来自各个市场的护肤品牌合作。韩国及 K-beauty 品牌有专门的团队负责，而 K-beauty 带火的以科普为主的方式，适用于任何护肤品牌。"
          },
          {
            "question": "一场护肤网红营销活动的费用是多少？",
            "answer": "这取决于平台、创作者层级、创作者人数、交付内容和使用权。我们不报统一价，而是根据您的目标和预算确定每场营销活动的范围，并告诉您哪种创作者组合回报最好。"
          }
        ]
      },
      "cta": {
        "title": "开启您的护肤营销活动",
        "description": "告诉我们您的主推产品和目标，我们会为您匹配能讲解、演示并把产品卖出去的护肤创作者。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  },
  "kBeautySkincare": {
    "path": "/korean-skincare-influencer-marketing",
    "title": "韩国护肤（K-beauty）网红营销机构 | CA Agency",
    "description": "CA Agency 是 K-beauty 网红营销机构，为韩国护肤和美妆品牌对接创作者，在 Instagram、TikTok 和 YouTube 上把护肤流程变成成果。",
    "ogImage": "/images/site/og/korean-skincare-influencer-marketing-v2.jpg",
    "content": {
      "hero": {
        "title": "韩国护肤\n网红营销机构",
        "subtitle": "CA Agency 是一家 K-beauty 网红营销机构，为韩国护肤和美妆品牌对接创作者，在 Instagram、TikTok 和 YouTube 上把护肤流程变成实际成果。",
        "primaryButtonLabel": "立即开始",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "查看我们的作品",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "K-Beauty",
          "label": "细分领域专长"
        },
        {
          "value": "18M+",
          "label": "创作者触达"
        },
        {
          "value": "全球",
          "label": "受众市场"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "平台"
        }
      ],
      "marquee": {
        "items": [
          "Medicube",
          "Mixsoon",
          "YesStyle",
          "Laneige",
          "Sumwon Men",
          "Morphe",
          "YSL Beauty",
          "Kylie Cosmetics",
          "NARS",
          "Elemis"
        ]
      },
      "caseStudies": {
        "title": "近期的 K-beauty 营销活动",
        "subtitle": "我们为这些韩国护肤和美妆品牌对接合适创作者的部分案例。",
        "items": [
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "专业护肤与美容仪器"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "以成分为主的韩国护肤"
          },
          {
            "src": "/videos/work/georgii-yesstyle-web-v1.mp4",
            "brand": "YesStyle",
            "name": "K-beauty 零售与种草"
          },
          {
            "image": "/images/work/work-laneige-package.webp",
            "brand": "Laneige",
            "name": "高端韩国护肤"
          },
          {
            "image": "/images/work/work-sumwonmen-closet.webp",
            "brand": "Sumwon Men",
            "name": "韩国男士理容"
          }
        ]
      },
      "process": {
        "title": "我们如何执行 K-beauty 营销活动",
        "subtitle": "从第一份简报到最终报告，流程清晰、可复制。",
        "steps": [
          {
            "title": "需求了解",
            "description": "我们了解您的产品、核心功效宣称、目标市场和目标，然后据此制定营销活动简报。"
          },
          {
            "title": "创作者匹配",
            "description": "我们根据受众匹配度、互动情况和内容质量，亲自挑选精通护肤的创作者，而不只看粉丝数。"
          },
          {
            "title": "内容与审核",
            "description": "护肤流程演示、质地特写和真实的前后对比叙事，从简报、审核到使用权，全程管理。"
          },
          {
            "title": "报告",
            "description": "每场营销活动都按触达、互动和转化来衡量，让您清楚知道投入带来了什么回报。"
          }
        ]
      },
      "intro": {
        "heading": "品牌信赖的 K-beauty 网红营销机构",
        "paragraphs": [
          {
            "text": "韩国护肤以层层叠加的护肤流程、专业级活性成分和玻璃肌效果重塑了全球美妆，而受众希望看到这些被演示出来，而不只是被描述。CA Agency 为 K-beauty 和韩国护肤品牌对接能在镜头前教授护肤流程的创作者，并在 Instagram、TikTok 和 YouTube 上带来转化。"
          },
          {
            "text": "我们为 Medicube、Mixsoon 和 YesStyle 等韩国护肤品牌执行过营销活动，同时也与更多全球美妆品牌合作。因此我们了解，以科普为主的叙事、真实的前后对比证明和对潮流时机的把握，是如何在这一品类中带动真实试用的。"
          },
          {
            "text": "从单款主推产品上市到常态化的创作者项目，我们全程管理创作者筛选、简报、内容审核、使用权和广告披露，并按触达、互动和转化报告每场营销活动，让您清楚知道投入带来了什么回报。"
          }
        ]
      },
      "highlights": {
        "title": "品牌为何选择我们的 K-beauty 网红营销机构",
        "items": [
          {
            "title": "品类专家",
            "description": "我们合作的创作者真正了解护肤活性成分、护肤流程和重要的功效宣称，而不是对成分一知半解的泛领域创作者。"
          },
          {
            "title": "能带来转化的科普",
            "description": "护肤流程演示、质地特写和真实的前后对比叙事，把人们对护肤和美妆产品的好奇变成试用。"
          },
          {
            "title": "踩准潮流的上市节奏",
            "description": "K-beauty 变化很快，因此我们让内容赶在相关形式和潮流仍处于高峰时发布，而不是等热度过去之后。"
          },
          {
            "title": "K-beauty 的全球触达",
            "description": "我们的创作者网络帮助韩国品牌走向海外，也帮助国际品牌借助受众本就喜爱的 K-beauty 美学。"
          }
        ]
      },
      "talents": {
        "title": "懂护肤的创作者",
        "buttonLabel": "查看全部达人",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "我们专注的品类",
        "items": [
          {
            "icon": "💧",
            "title": "护肤与护肤流程",
            "description": "通过镜头前真实的护肤流程，讲解精华水、精华液和功效型护理产品。"
          },
          {
            "icon": "💄",
            "title": "彩妆",
            "description": "玻璃肌底妆、染唇液和紧跟潮流的妆容，展示妆效与持妆表现。"
          },
          {
            "icon": "🔬",
            "title": "美容科技与仪器",
            "description": "家用美容仪器和专业护肤工具，用可信、以效果为主的内容来演示。"
          }
        ]
      },
      "faq": {
        "title": "K-beauty 网红营销常见问题",
        "items": [
          {
            "question": "你们只与韩国品牌合作吗？",
            "answer": "不是。我们专注于 K-beauty 和护肤品类，其中既有正在拓展全球市场的韩国品牌，也有希望采用 K-beauty 带火的、以科普和护肤流程为主的内容风格的国际品牌。"
          },
          {
            "question": "哪些平台最适合护肤品类？",
            "answer": "Instagram、TikTok 和 YouTube 各有作用：TikTok 负责种草和潮流，Instagram 适合精致的护肤流程和 Reels，YouTube 适合深度测评和教程。我们会根据您的目标搭配合适的组合。"
          },
          {
            "question": "你们能执行全球多市场的营销活动吗？",
            "answer": "可以。我们的创作者网络覆盖多个市场，因此可以针对不同地区对 K-beauty 营销活动进行本地化，同时保持品牌故事一致。"
          },
          {
            "question": "一场典型的 K-beauty 营销活动包括哪些内容？",
            "answer": "创作者筛选、简报、内容制作监督、审核、使用权、广告披露，以及按触达、互动和转化进行的报告。"
          }
        ]
      },
      "cta": {
        "title": "开启您的 K-beauty 营销活动",
        "description": "让您的韩国护肤或美妆品牌出现在能把护肤流程卖出去的创作者面前。告诉我们您的目标，我们来制定方案。",
        "buttonLabel": "联系我们",
        "buttonHref": "/contact"
      }
    }
  }
}
