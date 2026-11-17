import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// Korean versions of the beauty, skincare and K-beauty category pages, served at
// /ko/<path>. Translated from the English defaults; not editable in the
// admin. Plain data: keys are the page keys from lib/data/locations.ts.

export const koreanCategoryPages: Record<string, TranslatedLocationPage> = {
  "beautyAgency": {
    "path": "/beauty-influencer-marketing-agency",
    "title": "뷰티 인플루언서 마케팅 에이전시 | CA Agency",
    "description": "CA Agency는 메이크업, 스킨케어, 헤어케어, 뷰티 리테일 브랜드를 실제 피부 위에서 제품의 성능을 보여주는 크리에이터와 연결하는 뷰티 인플루언서 마케팅 에이전시입니다.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "뷰티 인플루언서\n마케팅 에이전시",
        "subtitle": "CA Agency는 메이크업, 스킨케어, 헤어케어, 뷰티 리테일 브랜드를 실제 피부와 실제 조명 아래에서 제품의 성능을 보여주는 크리에이터와 연결하는 뷰티 인플루언서 마케팅 에이전시로, 미국과 글로벌 시장에서 캠페인을 진행합니다.",
        "primaryButtonLabel": "캠페인 시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "케이스 스터디 보기",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "18M+",
          "label": "합산 팔로워"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "플랫폼"
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
        "title": "CA Agency가 진행한 뷰티 캠페인",
        "subtitle": "프레스티지, 색조, 헤어케어, 뷰티 리테일까지, 알맞은 크리에이터와 연결해 온 브랜드를 간략히 소개합니다.",
        "items": [
          {
            "src": "/videos/work/melly-fenty-web-v1.mp4",
            "brand": "Fenty Beauty",
            "name": "실제 피부 위의 베이스 메이크업",
            "href": "/case-studies/fenty-beauty-campaign"
          },
          {
            "src": "/videos/work/dariia-ysl-web-v1.mp4",
            "brand": "YSL Beauty",
            "name": "크리에이터 감성의 럭셔리 뷰티",
            "href": "/case-studies/ysl-beauty-campaign"
          },
          {
            "src": "/videos/work/fashionfreakk-nars.mp4",
            "brand": "NARS",
            "name": "프레스티지 뷰티",
            "href": "/case-studies/nars-campaign"
          },
          {
            "src": "/videos/work/kylie-cosmetics-web-v1.mp4",
            "brand": "Kylie Cosmetics",
            "name": "색조 화장품",
            "href": "/case-studies/kylie-cosmetics-campaign"
          },
          {
            "src": "/videos/work/albina-sephora-web-v1.mp4",
            "brand": "Sephora",
            "name": "뷰티 리테일 하울 & 추천템",
            "href": "/case-studies/sephora-campaign"
          },
          {
            "src": "/videos/work/beatrix-gisou-web-v1.mp4",
            "brand": "Gisou",
            "name": "헤어케어 텍스처 & 마무리감",
            "href": "/case-studies/gisou-campaign"
          }
        ]
      },
      "process": {
        "title": "뷰티 인플루언서 캠페인 진행 방식",
        "subtitle": "첫 브리프부터 최종 리포트까지 한 팀이 책임지고 진행합니다.",
        "steps": [
          {
            "title": "브리프 & 전략",
            "description": "대표 제품, 사용할 수 있는 클레임, 보여줄 셰이드나 피부 타입, 대상 시장, 그리고 인지도, 체험, 판매 중 가장 중요한 목표를 명확히 정합니다."
          },
          {
            "title": "크리에이터 매칭",
            "description": "팔로워 수만이 아니라 오디언스 적합성, 피부 타입과 톤의 범위, 인게이지먼트의 질, 콘텐츠 완성도를 기준으로 뷰티 크리에이터 후보를 추립니다."
          },
          {
            "title": "콘텐츠 & 승인",
            "description": "발림 시연, 지속력 테스트, 발색, 겟레디윗미 포맷을 브리핑, 승인, 사용권, 광고 표시까지 포함해 관리합니다."
          },
          {
            "title": "확산 & 리포트",
            "description": "성과가 가장 좋은 콘텐츠는 파트너십 광고와 Spark Ads로 확산하고, 모든 캠페인은 도달, 인게이지먼트, 클릭, 전환 기준으로 리포팅합니다."
          }
        ]
      },
      "intro": {
        "heading": "실제 캠페인 경험으로 다져진 뷰티 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "뷰티는 크리에이터의 역할이 가장 큰 카테고리입니다. 소비자는 구매하기 전에 파운데이션이 실제 피부 톤에 맞는지, 립스틱이 하루 종일 유지되는지, 세럼이 잘 흡수되는지 직접 보고 싶어 합니다. CA Agency는 바로 그 증거를 만드는 뷰티 인플루언서 마케팅 에이전시로, 메이크업, 스킨케어, 헤어케어, 뷰티 리테일 브랜드를 카메라 앞에서 제품을 시연하고 Instagram, TikTok, YouTube에서 전환으로 이어지게 할 수 있는 크리에이터와 연결합니다."
          },
          {
            "text": "CA Agency의 작업은 YSL Beauty, NARS 같은 프레스티지 및 럭셔리 브랜드, Fenty Beauty, Kylie Cosmetics, Kiko Milano, Juvia’s Place 등의 색조 브랜드, Sephora, Revolve Beauty 같은 뷰티 리테일러, 그리고 Gisou의 헤어케어까지 아우릅니다. 브리프는 매번 다릅니다. 럭셔리 하우스에는 크리에이터의 피드에 자연스럽게 어울리면서도 완성도 높은 콘텐츠가 필요하고, 색조 브랜드에는 발색력, 스와치, 셰이드 범위를 정직하게 보여주는 콘텐츠가 필요합니다."
          },
          {
            "text": "세계 최대 뷰티 시장인 미국을 겨냥하는 브랜드를 위해서는 전국 단위 도달에 FTC 규정에 맞는 광고 표시와 엄격한 클레임 관리를 결합합니다. 글로벌 론칭에서는 북미, 유럽, 중동, 아시아의 크리에이터를 함께 조율해 하나의 제품 스토리가 일관되게 전달되도록 합니다. 스킨케어 중심 브랜드는 스킨케어 인플루언서 마케팅 프로그램으로 더 깊이 있게 진행할 수 있고, 한국 브랜드는 K-뷰티 전담 팀과 함께할 수 있습니다."
          }
        ]
      },
      "highlights": {
        "title": "뷰티 브랜드가 CA Agency를 선택하는 이유",
        "items": [
          {
            "title": "뷰티가 핵심 분야",
            "description": "뷰티와 스킨케어가 핵심 분야이므로, 마무리감, 지속 시간, 셰이드 범위, 중요한 클레임을 아는 담당자가 크리에이터에게 브리핑합니다."
          },
          {
            "title": "꾸밈보다 증명",
            "description": "스와치, 지속력 테스트, 실제 피부의 비포 애프터처럼 정직한 시연을 브리핑합니다. 그것이 신뢰를 얻고 체험을 이끌어내기 때문입니다."
          },
          {
            "title": "탤런트 중심 네트워크",
            "description": "자체 뷰티 크리에이터 로스터를 매니지먼트하는 동시에 더 넓은 네트워크와도 협업하므로, 이 카테고리를 실제로 사용하고 좋아하는 크리에이터를 만나실 수 있습니다."
          },
          {
            "title": "미디어처럼 측정",
            "description": "모든 캠페인은 도달, 인게이지먼트, 클릭, 전환을 리포팅하며, 콘텐츠는 유료 파트너십 광고로 확산할 수 있습니다."
          }
        ]
      },
      "talents": {
        "title": "CA Agency 소속 뷰티 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "전문으로 하는 뷰티 카테고리",
        "items": [
          {
            "icon": "💄",
            "title": "메이크업 & 색조 화장품",
            "description": "베이스, 립, 아이, 컴플렉션 신제품을 스와치, 발림 시연, 실제 지속력으로 보여줍니다."
          },
          {
            "icon": "💧",
            "title": "스킨케어",
            "description": "제품이 어떤 역할을 하고 누구에게 맞는지 설명하는 루틴, 유효 성분, 텍스처 콘텐츠입니다."
          },
          {
            "icon": "✨",
            "title": "헤어케어 & 뷰티 리테일",
            "description": "마무리감을 강조한 헤어케어 콘텐츠와 매장 및 사이트 트래픽을 이끄는 하울 형식의 리테일 캠페인입니다."
          }
        ]
      },
      "faq": {
        "title": "뷰티 인플루언서 마케팅 자주 묻는 질문",
        "items": [
          {
            "question": "뷰티 인플루언서 마케팅 에이전시는 어떤 일을 하나요?",
            "answer": "뷰티 브랜드의 크리에이터 캠페인을 처음부터 끝까지 기획하고 운영합니다. 전략, 크리에이터 선정, 브리핑, 계약, 콘텐츠 승인, 사용권, 광고 표시, 유료 확산, 리포팅까지 포함됩니다. 수십 명의 크리에이터를 직접 관리하는 대신 책임지는 한 팀과 일하게 됩니다."
          },
          {
            "question": "뷰티 인플루언서 마케팅 비용은 얼마인가요?",
            "answer": "비용은 플랫폼, 크리에이터 등급, 크리에이터 수, 제작물, 사용권에 따라 달라집니다. 정액 요금을 제시하기보다 목표와 예산에 맞춰 캠페인 범위를 설계하고, 어떤 크리에이터 구성이 가장 좋은 수익을 내는지 보여드립니다. 예산과 목표를 알려주시면 그에 맞춰 계획을 세워 드립니다."
          },
          {
            "question": "뷰티 브랜드에는 어떤 플랫폼이 가장 효과적인가요?",
            "answer": "TikTok은 발견과 트렌드를 이끌고, Instagram Reels와 Stories는 완성도 높은 루틴과 론칭을 담으며, YouTube는 심층 튜토리얼과 리뷰에 가장 강합니다. 대부분의 뷰티 캠페인은 오디언스와 목표에 따라 비중을 조정해 여러 플랫폼을 함께 활용합니다."
          },
          {
            "question": "미국의 뷰티 브랜드와도 일하나요?",
            "answer": "네. 미국은 CA Agency의 주력 시장으로, 미국 크리에이터와 함께 FTC 규정에 맞는 광고 표시를 포함한 전국 단위 캠페인을 진행하며, 유럽, 중동, 아시아 전역의 캠페인도 함께 진행합니다."
          },
          {
            "question": "글로벌 브랜드뿐 아니라 신생 뷰티 브랜드와도 일할 수 있나요?",
            "answer": "네. 첫 크리에이터 프로그램을 만드는 신생 인디 브랜드부터 신제품을 론칭하는 글로벌 하우스까지 모두와 일하며, 브랜드의 단계에 맞춰 크리에이터 구성(마이크로, 미드티어, 매크로)을 조정합니다."
          }
        ]
      },
      "cta": {
        "title": "뷰티 캠페인을 시작하세요",
        "description": "제품, 시장, 목표를 알려주시면 그 제품을 판매로 이어줄 수 있는 뷰티 크리에이터와 연결해 드립니다.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "skincareAgency": {
    "path": "/skincare-influencer-marketing-agency",
    "title": "스킨케어 인플루언서 마케팅 에이전시 | CA Agency",
    "description": "CA Agency는 스킨케어 브랜드의 성분, 텍스처, 루틴을 신뢰를 쌓고 체험을 이끄는 크리에이터 콘텐츠로 만드는 스킨케어 인플루언서 마케팅 에이전시입니다.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "스킨케어 인플루언서\n마케팅 에이전시",
        "subtitle": "CA Agency는 스킨케어 인플루언서 마케팅 에이전시로, 미국과 전 세계에서 스킨케어 브랜드가 성분, 텍스처, 루틴을 신뢰를 쌓고 체험을 이끄는 크리에이터 콘텐츠로 만들도록 돕습니다.",
        "primaryButtonLabel": "캠페인 시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "케이스 스터디 보기",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "18M+",
          "label": "합산 팔로워"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "플랫폼"
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
        "title": "CA Agency가 진행한 스킨케어 캠페인",
        "subtitle": "스킨케어 브랜드를 위한 루틴 중심, 성분 우선의 크리에이터 콘텐츠입니다.",
        "items": [
          {
            "src": "/videos/work/saranda-delere-web-v1.mp4",
            "brand": "DELERE",
            "name": "루틴 중심 스킨케어",
            "href": "/case-studies/delere-campaign"
          },
          {
            "src": "/videos/work/aiym-purito-web-v1.mp4",
            "brand": "Purito",
            "name": "클린, 민감성 피부 케어",
            "href": "/case-studies/purito-campaign"
          },
          {
            "src": "/videos/work/anton-anua-web-v1.mp4",
            "brand": "Anua",
            "name": "남성 스킨케어 루틴",
            "href": "/case-studies/anua-campaign"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "성분 중심 스킨케어",
            "href": "/case-studies/mixsoon-skincare"
          },
          {
            "src": "/videos/work/rebecca-haruharu-web-v1.mp4",
            "brand": "Haruharu Wonder",
            "name": "순한 발효 스킨케어",
            "href": "/case-studies/haruharu-wonder-campaign"
          },
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "클리니컬 스킨케어 & 디바이스"
          }
        ]
      },
      "process": {
        "title": "스킨케어 인플루언서 캠페인 진행 방식",
        "subtitle": "정보 전달, 정직한 결과, 규정에 맞는 클레임을 중심으로 설계합니다.",
        "steps": [
          {
            "title": "클레임 & 브리프",
            "description": "대표 성분, 승인된 클레임, 타깃 피부 고민에서 출발하므로 모든 크리에이터 브리프가 첫날부터 정확하고 규정에 맞습니다."
          },
          {
            "title": "크리에이터 매칭",
            "description": "피부 타입, 피부 고민, 오디언스 적합성, 신뢰도를 기준으로 스킨케어 이해도가 높은 크리에이터를 선정해, 제품을 설명하는 사람이 실제 고객과 맞도록 합니다."
          },
          {
            "title": "루틴 콘텐츠",
            "description": "루틴 시연, 텍스처 클로즈업, 성분 설명, 정직한 경과 콘텐츠를 승인, 사용권, 광고 표시까지 챙기며 진행합니다."
          },
          {
            "title": "측정 & 확대",
            "description": "도달, 인게이지먼트, 클릭, 전환을 리포팅한 뒤 체험을 이끄는 크리에이터와 포맷을 확대합니다."
          }
        ]
      },
      "intro": {
        "heading": "성분을 이해하는 스킨케어 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "스킨케어는 신뢰로 구매하는 제품입니다. 세럼이나 자외선 차단제를 루틴에 더하기 전에 소비자는 무엇이 들어 있는지 이해하고, 텍스처를 확인하고, 자신과 비슷한 피부를 가진 사람의 이야기를 듣고 싶어 합니다. CA Agency는 그 신뢰를 쌓는 스킨케어 인플루언서 마케팅 에이전시로, Instagram, TikTok, YouTube에서 유효 성분을 명확하게 설명하고, 카메라 앞에서 루틴을 시연하고, 시간에 따른 정직한 결과를 보여줄 수 있는 크리에이터와 스킨케어 브랜드를 매칭합니다."
          },
          {
            "text": "CA Agency는 DELERE, Purito, Anua, Mixsoon, Haruharu Wonder, Medicube 등의 브랜드와 스킨케어 캠페인을 진행했으며, 루틴 중심 론칭, 민감성 피부 및 클린 포지셔닝, 성분 우선의 정보 전달, 남성 스킨케어를 다뤘습니다. 이 경험이 브리핑 방식에 반영됩니다. 무엇을 시연할지, 크리에이터가 어떤 클레임은 할 수 있고 어떤 클레임은 할 수 없는지, 과장된 약속 없이 경과를 어떻게 보여줄지를 정합니다."
          },
          {
            "text": "클레임 관리는 미국에서 가장 중요합니다. 미국에서는 화장품 클레임이 의약품과 같은 약속으로 넘어가서는 안 되며, 모든 스폰서 게시물에는 명확한 FTC 광고 표시가 필요합니다. CA Agency는 이 두 가지를 모든 브리프와 승인 단계에 반영합니다. 한국 브랜드와 K-뷰티 브랜드는 K-뷰티 전담 팀과 함께할 수 있고, 뷰티 제품군이 더 넓은 브랜드는 뷰티 인플루언서 마케팅 프로그램을 통해 스킨케어를 메이크업, 헤어케어와 함께 진행할 수 있습니다."
          }
        ]
      },
      "highlights": {
        "title": "스킨케어 브랜드가 CA Agency와 일하는 이유",
        "items": [
          {
            "title": "성분을 이해한 브리프",
            "description": "스킨케어를 아는 팀이 유효 성분, 농도, 루틴에 대해 크리에이터에게 브리핑하므로 정보가 정확하게 전달됩니다."
          },
          {
            "title": "책임질 수 있는 클레임",
            "description": "승인 단계에서 모든 클레임과 광고 표시를 확인해, 콘텐츠가 설득력을 유지하면서도 의학적이거나 과장된 약속으로 흐르지 않게 합니다."
          },
          {
            "title": "피부 고민 기준 매칭",
            "description": "여드름성, 민감성, 노화, 지성 피부 등 피부 타입과 고민이 고객과 맞는 크리에이터에게 제품을 연결합니다."
          },
          {
            "title": "화제성보다 결과",
            "description": "텍스처 영상, 루틴 시연, 정직한 경과 콘텐츠는 일회성 언박싱보다 전환이 잘 되며, 이를 측정해 입증합니다."
          }
        ]
      },
      "talents": {
        "title": "스킨케어를 잘 아는 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "CA Agency가 진행하는 스킨케어 캠페인",
        "items": [
          {
            "icon": "🧴",
            "title": "루틴 & 성분 정보 전달",
            "description": "전문 용어를 늘어놓지 않고, 제품이 어떤 역할을 하고 누구에게 맞는지 설명하는 성분 우선, 루틴 중심 콘텐츠입니다."
          },
          {
            "icon": "🌿",
            "title": "민감성 피부 & 남성 스킨케어",
            "description": "순한 루틴, 클린 루틴, 남성 루틴을 피부와 오디언스가 제품에 맞는 크리에이터와 매칭합니다."
          },
          {
            "icon": "🔬",
            "title": "클리니컬 스킨케어 & 디바이스",
            "description": "홈케어 디바이스와 클리니컬 라인을 신뢰할 수 있는 결과 중심 콘텐츠로 시연합니다."
          }
        ]
      },
      "faq": {
        "title": "스킨케어 인플루언서 마케팅 자주 묻는 질문",
        "items": [
          {
            "question": "알맞은 스킨케어 인플루언서는 어떻게 찾나요?",
            "answer": "피부 타입과 고민, 오디언스 인구통계, 인게이지먼트의 질, 콘텐츠 스타일, 브랜드 세이프티를 기준으로 크리에이터를 검증합니다. 목표는 오디언스가 브랜드의 고객과 닮아 있고 제품을 신뢰감 있게 설명할 수 있는 크리에이터를 찾는 것입니다."
          },
          {
            "question": "스킨케어 클레임과 FTC 광고 표시는 어떻게 관리하나요?",
            "answer": "승인된 클레임을 크리에이터에게 브리핑하고, 콘텐츠가 게시되기 전에 검토하며, 모든 스폰서 게시물에 #ad와 같은 명확한 광고 표시가 들어가도록 합니다. 미국에서는 화장품 클레임이 질환을 치료하거나 낫게 한다는 식의 의약품 같은 약속으로 넘어가지 않게 하는 것도 포함됩니다."
          },
          {
            "question": "스킨케어 브랜드에는 어떤 플랫폼이 가장 효과적인가요?",
            "answer": "TikTok은 발견과 루틴 트렌드에, Instagram은 완성도 높은 루틴과 Reels에, YouTube는 심층 리뷰와 장기적인 결과에 가장 강합니다. 오디언스와 목표에 따라 플랫폼 비중을 조정합니다."
          },
          {
            "question": "한국 스킨케어 브랜드와만 일하나요?",
            "answer": "아니요. 모든 시장의 스킨케어 브랜드와 일합니다. 한국 브랜드와 K-뷰티 브랜드에는 전담 팀이 있으며, K-뷰티가 대중화한 정보 전달 중심의 접근은 어떤 스킨케어 브랜드에도 효과가 있습니다."
          },
          {
            "question": "스킨케어 인플루언서 캠페인 비용은 얼마인가요?",
            "answer": "플랫폼, 크리에이터 등급, 크리에이터 수, 제작물, 사용권에 따라 달라집니다. 정액 요금을 제시하기보다 목표와 예산에 맞춰 캠페인 범위를 설계하고, 어떤 크리에이터 구성이 가장 좋은 수익을 내는지 보여드립니다."
          }
        ]
      },
      "cta": {
        "title": "스킨케어 캠페인을 시작하세요",
        "description": "대표 제품과 목표를 알려주시면 제품을 설명하고, 시연하고, 판매로 이어줄 수 있는 스킨케어 크리에이터와 연결해 드립니다.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "kBeautySkincare": {
    "path": "/korean-skincare-influencer-marketing",
    "title": "K-뷰티 스킨케어 인플루언서 마케팅 에이전시 | CA Agency",
    "description": "CA Agency는 한국 스킨케어 및 뷰티 브랜드를 Instagram, TikTok, YouTube에서 루틴을 성과로 바꾸는 크리에이터와 연결하는 K-뷰티 인플루언서 마케팅 에이전시입니다.",
    "ogImage": "/images/site/og/korean-skincare-influencer-marketing-v2.jpg",
    "content": {
      "hero": {
        "title": "한국 스킨케어 인플루언서\n마케팅 에이전시",
        "subtitle": "CA Agency는 K-뷰티 인플루언서 마케팅 에이전시로, 한국 스킨케어 및 뷰티 브랜드를 Instagram, TikTok, YouTube에서 루틴을 성과로 바꾸는 크리에이터와 연결합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "K-뷰티",
          "label": "전문 분야"
        },
        {
          "value": "18M+",
          "label": "크리에이터 도달"
        },
        {
          "value": "글로벌",
          "label": "오디언스 시장"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "플랫폼"
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
        "title": "최근 K-뷰티 캠페인",
        "subtitle": "알맞은 크리에이터에게 선보인 한국 스킨케어 및 뷰티 브랜드를 간략히 소개합니다.",
        "items": [
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "클리니컬 스킨케어 & 뷰티 디바이스"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "성분 중심 한국 스킨케어"
          },
          {
            "src": "/videos/work/georgii-yesstyle-web-v1.mp4",
            "brand": "YesStyle",
            "name": "K-뷰티 리테일 & 발견"
          },
          {
            "image": "/images/work/work-laneige-package.webp",
            "brand": "Laneige",
            "name": "프레스티지 한국 스킨케어"
          },
          {
            "image": "/images/work/work-sumwonmen-closet.webp",
            "brand": "Sumwon Men",
            "name": "한국 남성 그루밍"
          }
        ]
      },
      "process": {
        "title": "K-뷰티 캠페인 진행 방식",
        "subtitle": "첫 브리프부터 최종 리포트까지, 명확하고 반복 가능한 프로세스입니다.",
        "steps": [
          {
            "title": "디스커버리",
            "description": "제품, 핵심 클레임, 타깃 시장, 목표를 파악한 뒤 그에 맞춰 캠페인 브리프를 구성합니다."
          },
          {
            "title": "크리에이터 매칭",
            "description": "팔로워 수만이 아니라 오디언스 적합성, 인게이지먼트, 콘텐츠 품질을 기준으로 스킨케어에 능숙한 크리에이터를 직접 선별합니다."
          },
          {
            "title": "콘텐츠 & 승인",
            "description": "루틴 시연, 텍스처 영상, 정직한 비포 애프터 스토리텔링을 브리핑, 승인, 사용권까지 포함해 관리합니다."
          },
          {
            "title": "리포트",
            "description": "모든 캠페인을 도달, 인게이지먼트, 전환 기준으로 측정하므로 집행한 비용이 무엇으로 돌아왔는지 정확히 알 수 있습니다."
          }
        ]
      },
      "intro": {
        "heading": "브랜드가 신뢰하는 K-뷰티 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "한국 스킨케어는 레이어링 루틴, 클리니컬 유효 성분, 그리고 오디언스가 설명만 듣기보다 직접 시연으로 보고 싶어 하는 유리알 피부 결과로 글로벌 뷰티의 흐름을 바꿨습니다. CA Agency는 K-뷰티 및 한국 스킨케어 브랜드를 카메라 앞에서 루틴을 알려주고 Instagram, TikTok, YouTube에서 전환으로 이어지게 할 수 있는 크리에이터와 연결합니다."
          },
          {
            "text": "CA Agency는 Medicube, Mixsoon, YesStyle 같은 한국 스킨케어 브랜드는 물론 더 폭넓은 글로벌 뷰티 브랜드와 캠페인을 진행해 왔습니다. 그래서 이 카테고리에서 정보 전달 중심의 스토리텔링, 정직한 비포 애프터 증거, 트렌드 타이밍이 어떻게 실제 체험으로 이어지는지 이해하고 있습니다."
          },
          {
            "text": "단일 대표 제품 론칭부터 상시 크리에이터 프로그램까지, 크리에이터 선정, 브리핑, 콘텐츠 승인, 사용권, 광고 표시를 처음부터 끝까지 관리하며, 모든 캠페인을 도달, 인게이지먼트, 전환 기준으로 리포팅해 집행한 비용이 무엇으로 돌아왔는지 알 수 있게 합니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 CA Agency의 K-뷰티 인플루언서 마케팅을 선택하는 이유",
        "items": [
          {
            "title": "카테고리 전문가",
            "description": "성분을 짐작으로 이야기하는 제너럴리스트가 아니라, 스킨케어 유효 성분, 루틴, 중요한 클레임을 제대로 이해하는 크리에이터에게 브리핑합니다."
          },
          {
            "title": "전환으로 이어지는 정보 전달",
            "description": "루틴 시연, 텍스처 영상, 정직한 비포 애프터 스토리텔링이 스킨케어와 뷰티 제품에 대한 호기심을 체험으로 바꿉니다."
          },
          {
            "title": "트렌드에 맞춘 론칭",
            "description": "K-뷰티는 빠르게 움직입니다. 그래서 포맷과 트렌드가 지난 뒤가 아니라 정점에 있을 때에 맞춰 콘텐츠 시점을 잡습니다."
          },
          {
            "title": "글로벌 K-뷰티 도달",
            "description": "CA Agency의 크리에이터 네트워크는 한국 브랜드가 해외로 나아가도록 돕고, 해외 브랜드가 오디언스가 이미 사랑하는 K-뷰티 감성을 활용하도록 돕습니다."
          }
        ]
      },
      "talents": {
        "title": "스킨케어를 잘 아는 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "전문으로 하는 카테고리",
        "items": [
          {
            "icon": "💧",
            "title": "스킨케어 & 루틴",
            "description": "에센스, 세럼, 트리트먼트를 카메라 앞의 실제 루틴으로 설명합니다."
          },
          {
            "icon": "💄",
            "title": "메이크업 & 색조",
            "description": "마무리감과 지속력을 보여주는 유리알 피부 베이스, 틴트, 트렌드 중심의 룩입니다."
          },
          {
            "icon": "🔬",
            "title": "뷰티 테크 & 디바이스",
            "description": "홈케어 디바이스와 클리니컬 기기를 신뢰할 수 있는 결과 중심 콘텐츠로 시연합니다."
          }
        ]
      },
      "faq": {
        "title": "K-뷰티 인플루언서 마케팅 자주 묻는 질문",
        "items": [
          {
            "question": "한국 브랜드와만 일하나요?",
            "answer": "아니요. CA Agency는 K-뷰티와 스킨케어 카테고리를 전문으로 하며, 여기에는 글로벌로 확장하는 한국 브랜드와 K-뷰티가 대중화한 정보 전달 중심, 루틴 중심의 콘텐츠 스타일을 원하는 해외 브랜드가 모두 포함됩니다."
          },
          {
            "question": "스킨케어에는 어떤 플랫폼이 가장 효과적인가요?",
            "answer": "Instagram, TikTok, YouTube는 각각 역할이 있습니다. TikTok은 발견과 트렌드, Instagram은 완성도 높은 루틴과 Reels, YouTube는 심층 리뷰와 튜토리얼에 적합합니다. 목표에 맞는 조합을 구성해 드립니다."
          },
          {
            "question": "여러 시장에 걸친 글로벌 캠페인도 진행할 수 있나요?",
            "answer": "네. CA Agency의 크리에이터 네트워크는 여러 시장에 걸쳐 있어, 일관된 브랜드 스토리를 유지하면서 지역별로 K-뷰티 캠페인을 현지화할 수 있습니다."
          },
          {
            "question": "일반적인 K-뷰티 캠페인에는 무엇이 포함되나요?",
            "answer": "크리에이터 선정, 브리핑, 콘텐츠 제작 관리, 승인, 사용권, 광고 표시, 그리고 도달, 인게이지먼트, 전환 기준의 리포팅이 포함됩니다."
          }
        ]
      },
      "cta": {
        "title": "K-뷰티 캠페인을 시작하세요",
        "description": "한국 스킨케어 또는 뷰티 브랜드를 루틴을 판매로 이어줄 수 있는 크리에이터에게 선보이세요. 목표를 알려주시면 계획을 세워 드립니다.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  }
}
