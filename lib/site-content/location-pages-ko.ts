import type { LocationLabels } from '@/lib/site-content/location-pages'
import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// Korean versions of every market page, served at /ko/<path>. Translated from
// the English defaults; not editable in the admin. Plain data: keys are the
// market keys from lib/data/locations.ts.

export const koreanLocationLabels: LocationLabels = {
  intro: '회사 소개',
  caseStudies: '사례 연구',
  process: '진행 방식',
  highlights: 'CA Agency를 선택하는 이유',
  talents: '크리에이터',
  industries: '산업 분야',
  faq: '자주 묻는 질문',
  otherMarkets: '다른 시장',
}

export const koreanLocationPages: Record<string, TranslatedLocationPage> = {
  "dubai": {
    "path": "/influencer-marketing-dubai",
    "title": "두바이 인플루언서 마케팅 에이전시 | CA Agency",
    "description": "CA Agency는 두바이의 인플루언서 마케팅 에이전시로, 두바이와 UAE 전역의 검증된 크리에이터와 함께 브랜드의 Instagram, TikTok, YouTube 캠페인을 진행합니다.",
    "ogImage": "/images/site/og/influencer-marketing-dubai-v2.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      }
    ],
    "content": {
      "hero": {
        "title": "두바이 인플루언서\n마케팅 에이전시",
        "subtitle": "CA Agency는 두바이의 인플루언서 마케팅 에이전시로, UAE 전역의 검증된 크리에이터와 함께 브랜드가 성과 높은 Instagram, TikTok, YouTube 캠페인을 론칭하도록 돕습니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "합산 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "UAE",
          "label": "핵심 시장"
        }
      ],
      "highlights": {
        "title": "브랜드가 두바이 인플루언서 에이전시로 CA Agency를 선택하는 이유",
        "items": [
          {
            "title": "현지 시장 전문성",
            "description": "럭셔리, 뷰티, 패션, 호스피탈리티, 라이프스타일 전반에서 두바이 오디언스가 제품을 발견하고, 평가하고, 구매하는 방식에 맞춰 인플루언서 캠페인을 설계합니다."
          },
          {
            "title": "지역 확장성",
            "description": "두바이 크리에이터와 시작한 캠페인은 브리프상 더 넓은 도달이 필요할 때 아부다비와 GCC 전역으로 효율적으로 확장할 수 있습니다."
          },
          {
            "title": "검증된 크리에이터 네트워크",
            "description": "Instagram, TikTok, YouTube에서 콘텐츠 품질, 오디언스 적합성, 브랜드 세이프티를 갖춘 실행력이 입증된 크리에이터를 섭외합니다."
          },
          {
            "title": "성과 중심 실행",
            "description": "겉으로 보이는 수치에만 그치지 않고, 양질의 트래픽, 전환, 브랜디드 콘텐츠 성과처럼 측정 가능한 결과에 집중합니다."
          }
        ]
      },
      "talents": {
        "title": "두바이 시장 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "🏨",
            "title": "호스피탈리티",
            "description": "두바이에서는 호텔, 다이닝, 여행지 캠페인이 크리에이터의 숏폼 콘텐츠를 통해 좋은 성과를 냅니다."
          },
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "스킨케어, 메이크업, 럭셔리 뷰티 론칭은 크리에이터가 이끄는 정보 전달과 신뢰를 바탕으로 강한 성과를 보입니다."
          },
          {
            "icon": "👗",
            "title": "패션",
            "description": "두바이 오디언스는 프리미엄 스타일링, 쇼핑, 트렌드 중심의 협업에 좋은 반응을 보입니다."
          }
        ]
      },
      "cta": {
        "title": "두바이 캠페인을 시작하세요",
        "description": "브랜드와 목표에 맞는 크리에이터와 함께 두바이의 알맞은 오디언스에게 다가가세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "uae": {
    "path": "/influencer-marketing-uae",
    "title": "UAE 인플루언서 마케팅 에이전시 | CA Agency",
    "description": "CA Agency는 UAE 인플루언서 마케팅 에이전시로, 두바이, 아부다비, 샤르자를 비롯한 여러 지역에서 브랜드의 크리에이터 캠페인 진행을 돕습니다.",
    "ogImage": "/images/site/og/influencer-marketing-uae-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "content": {
      "hero": {
        "title": "UAE 인플루언서\n마케팅 에이전시",
        "subtitle": "CA Agency는 UAE 인플루언서 마케팅 에이전시로, 두바이, 아부다비, 샤르자를 비롯한 여러 지역의 크리에이터와 브랜드를 연결해 Instagram, TikTok, YouTube에서 성과 중심 캠페인을 진행합니다.",
        "primaryButtonLabel": "캠페인 시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "크리에이터 만나기",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "전국",
          "label": "커버리지"
        },
        {
          "value": "여러 도시",
          "label": "크리에이터 네트워크"
        },
        {
          "value": "크로스 플랫폼",
          "label": "캠페인 실행"
        },
        {
          "value": "지역 전반",
          "label": "브랜드 도달"
        }
      ],
      "highlights": {
        "title": "브랜드가 UAE 인플루언서 에이전시로 CA Agency를 선택하는 이유",
        "items": [
          {
            "title": "전국 단위 크리에이터 접근",
            "description": "팔로워 수만이 아니라 오디언스 적합성을 기준으로 두바이, 아부다비, 샤르자 및 그 밖의 에미리트 크리에이터와 캠페인을 진행합니다."
          },
          {
            "title": "크로스 플랫폼 캠페인",
            "description": "현지 시장의 뉘앙스를 반영해 Instagram, TikTok, YouTube 전반의 인플루언서 캠페인을 처음부터 끝까지 관리합니다."
          },
          {
            "title": "아랍어와 영어 도달",
            "description": "여러 언어를 쓰는 UAE 오디언스 전반에서 브랜드가 현지 적합성과 글로벌 매력을 함께 갖추도록 돕습니다."
          },
          {
            "title": "비즈니스 성과 중심",
            "description": "CA Agency의 UAE 캠페인은 명확한 리포팅과 함께 인지, 고려, 트래픽, 전환 목표를 뒷받침하도록 설계됩니다."
          }
        ]
      },
      "talents": {
        "title": "UAE 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "UAE 인플루언서 서비스",
        "items": [
          {
            "icon": "📣",
            "title": "캠페인 매니지먼트",
            "description": "Instagram, TikTok, YouTube 전반에서 인플루언서 캠페인을 처음부터 끝까지 실행합니다."
          },
          {
            "icon": "🎯",
            "title": "크리에이터 섭외",
            "description": "뷰티, 패션, 라이프스타일, 푸드, 테크 분야에서 UAE를 대표하는 크리에이터와 연결해 드립니다."
          },
          {
            "icon": "🎥",
            "title": "콘텐츠 제작",
            "description": "UAE 오디언스의 공감을 얻는 고품질 브랜디드 콘텐츠를 제작합니다."
          }
        ]
      },
      "cta": {
        "title": "UAE 인플루언서 캠페인을 시작하세요",
        "description": "브랜드에 맞는 크리에이터와 캠페인 전략을 연결해 주는 인플루언서 마케팅 에이전시와 함께 UAE 오디언스에게 다가가세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "saudiArabia": {
    "path": "/influencer-marketing-saudi-arabia",
    "title": "사우디아라비아 인플루언서 마케팅 | CA Agency",
    "description": "리야드, 제다를 비롯한 사우디아라비아 시장 전반에 맞춘 크리에이터 파트너십으로 사우디 오디언스에게 다가가세요.",
    "ogImage": "/images/site/og/influencer-marketing-saudi-arabia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "content": {
      "hero": {
        "title": "사우디아라비아 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "현지 문화를 이해하는 성과 중심 캠페인으로 리야드, 제다를 비롯한 사우디아라비아 시장 전반에서 공감을 얻는 크리에이터와 연결하세요.",
        "primaryButtonLabel": "캠페인 시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "높음",
          "label": "모바일 이용률"
        },
        {
          "value": "빠름",
          "label": "크리에이터 이코노미 성장"
        },
        {
          "value": "강함",
          "label": "뷰티·패션 수요"
        },
        {
          "value": "지역 전반",
          "label": "영향력"
        }
      ],
      "highlights": {
        "title": "사우디아라비아에서 인플루언서 마케팅을 해야 하는 이유",
        "items": [
          {
            "title": "젊은 디지털 오디언스",
            "description": "사우디아라비아는 인터넷 연결성이 매우 높고 모바일 중심으로 생활하는 인구가 크리에이터와 활발히 소통하는 시장입니다."
          },
          {
            "title": "문화 중심 전략",
            "description": "메시지, 포맷, 크리에이터가 현지 문화와 오디언스의 기대에 맞을 때 캠페인이 가장 좋은 성과를 냅니다."
          },
          {
            "title": "크리에이터에 대한 높은 신뢰",
            "description": "오디언스는 제품을 발견하고 구매를 결정할 때 크리에이터의 추천에 의지하는 경우가 많습니다."
          },
          {
            "title": "빠르게 늘어나는 브랜드 참여",
            "description": "도달과 관련성을 높이기 위해 크리에이터 파트너십으로 예산을 옮기는 브랜드가 늘고 있습니다."
          }
        ]
      },
      "talents": {
        "title": "사우디아라비아 시장 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "뷰티 콘텐츠와 튜토리얼은 제품 발견과 첫 사용을 이끄는 주요 동력입니다."
          },
          {
            "icon": "👗",
            "title": "패션",
            "description": "모디스트 패션, 프리미엄 스타일링, 시즌 캠페인이 강한 성과를 보입니다."
          },
          {
            "icon": "📱",
            "title": "테크 & 라이프스타일",
            "description": "테크 론칭과 일상 라이프스타일 크리에이터는 브랜드가 트렌디하고 친근하게 느껴지도록 돕습니다."
          }
        ]
      },
      "cta": {
        "title": "사우디아라비아 캠페인을 시작하세요",
        "description": "사우디 오디언스에게 진정성 있게 다가가는 크리에이터 파트너십을 만들어 보세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "gcc": {
    "path": "/influencer-marketing-gcc",
    "title": "GCC 인플루언서 마케팅 | CA Agency",
    "description": "걸프 지역 시장 전반을 아우르는 하나의 조율된 인플루언서 마케팅 에이전시 전략으로 GCC 전역에서 크리에이터 캠페인을 확장하세요.",
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
        "title": "GCC 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "UAE, 사우디아라비아, 카타르, 쿠웨이트, 바레인, 오만을 아우르는 하나의 조율된 인플루언서 마케팅 전략으로 GCC 전역에서 크리에이터 캠페인을 진행하세요.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "크리에이터 만나기",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "6",
          "label": "핵심 시장"
        },
        {
          "value": "지역 단위",
          "label": "캠페인 조율"
        },
        {
          "value": "다국어",
          "label": "실행"
        },
        {
          "value": "국경 간",
          "label": "크리에이터 도달"
        }
      ],
      "highlights": {
        "title": "브랜드가 GCC 인플루언서 캠페인에 CA Agency를 선택하는 이유",
        "items": [
          {
            "title": "지역 전반의 일관성",
            "description": "콘텐츠는 각 시장에 맞게 조정하면서 브랜드 메시지는 일관되게 유지합니다."
          },
          {
            "title": "확장 가능한 도달",
            "description": "내부 업무를 중복하지 않고도 여러 크리에이터와 여러 국가를 함께 조율합니다."
          },
          {
            "title": "현지 적합성",
            "description": "시장을 이해하는 크리에이터와 오디언스의 미묘한 차이를 반영한 캠페인 구조를 활용합니다."
          },
          {
            "title": "간결한 운영",
            "description": "브리핑, 승인, 콘텐츠, 리포팅을 하나의 파트너를 통해 관리합니다."
          }
        ]
      },
      "talents": {
        "title": "GCC 캠페인을 위한 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "✈️",
            "title": "여행 & 호스피탈리티",
            "description": "여행지와 호스피탈리티 캠페인은 이 지역 전반으로 특히 잘 확장됩니다."
          },
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "뷰티 브랜드는 크리에이터에 대한 높은 신뢰와 튜토리얼 형식의 콘텐츠에서 효과를 얻습니다."
          },
          {
            "icon": "🛍️",
            "title": "리테일",
            "description": "리테일 론칭은 각 시장의 크리에이터를 통해 현지화할 때 좋은 성과를 냅니다."
          }
        ]
      },
      "cta": {
        "title": "GCC 진출 계획을 세워 보세요",
        "description": "하나의 캠페인 프레임워크로 여러 걸프 시장을 함께 조율하세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "korea": {
    "path": "/influencer-marketing-korea",
    "title": "한국 인플루언서 마케팅 | CA Agency",
    "description": "CA Agency는 뷰티, 패션, 라이프스타일, 테크 분야의 현지화된 인플루언서 마케팅 캠페인으로 브랜드가 한국 오디언스에게 다가가도록 돕습니다.",
    "ogImage": "/images/site/og/influencer-marketing-korea-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Korea"
      }
    ],
    "content": {
      "hero": {
        "title": "한국 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 뷰티, 패션, 라이프스타일, 테크 분야의 현지화된 인플루언서 마케팅 캠페인으로 브랜드가 한국 오디언스에게 다가가도록 돕습니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "트렌드 주도",
          "label": "소비자 행동"
        },
        {
          "value": "높음",
          "label": "뷰티 수용도"
        },
        {
          "value": "강함",
          "label": "소셜 커머스"
        },
        {
          "value": "빠름",
          "label": "캠페인 속도"
        }
      ],
      "highlights": {
        "title": "브랜드가 한국 시장 인플루언서 캠페인에 CA Agency를 선택하는 이유",
        "items": [
          {
            "title": "뷰티를 선도하는 시장",
            "description": "한국은 세계에서 가장 영향력 있는 뷰티 시장 중 하나이며, 크리에이터의 영향력이 큽니다."
          },
          {
            "title": "트렌드에 대한 민감도",
            "description": "오디언스는 새로운 포맷, 감각적인 비주얼, 지금의 문화 흐름을 반영한 메시지에 반응합니다."
          },
          {
            "title": "사회적 증거의 중요성",
            "description": "크리에이터는 제품을 검증하고 첫 사용을 이끄는 데 큰 역할을 합니다."
          },
          {
            "title": "해외 진출에 유리한 포지셔닝",
            "description": "한국 캠페인은 현지 인지도와 해외에서의 브랜드 이미지를 함께 뒷받침하는 경우가 많습니다."
          }
        ]
      },
      "talents": {
        "title": "한국 시장 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "💄",
            "title": "뷰티 & 스킨케어",
            "description": "한국에서는 정보 전달 중심의 제품 스토리텔링이 특히 좋은 성과를 냅니다."
          },
          {
            "icon": "👟",
            "title": "패션 & 스트리트웨어",
            "description": "스타일 중심의 크리에이터 콘텐츠는 트렌드 적합성과 브랜드의 위상을 높입니다."
          },
          {
            "icon": "📲",
            "title": "테크 & 가젯",
            "description": "제품 시연과 라이프스타일 속 자연스러운 노출은 테크 브랜드가 돋보이도록 돕습니다."
          }
        ]
      },
      "cta": {
        "title": "한국 캠페인을 시작하세요",
        "description": "한국 시장의 문화에 맞는 크리에이터 파트너십을 만들어 보세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "asia": {
    "path": "/influencer-marketing-asia",
    "title": "아시아 인플루언서 마케팅 | CA Agency",
    "description": "CA Agency는 현지화된 크리에이터 전략과 여러 시장을 아우르는 실행으로 브랜드가 아시아 전역에서 인플루언서 마케팅 캠페인을 진행하도록 돕습니다.",
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
        "title": "아시아 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 시장을 이해하는 크리에이터, 현지화된 전략, 국경을 넘는 캠페인 매니지먼트로 브랜드가 아시아 전역에서 인플루언서 마케팅 캠페인을 진행하도록 돕습니다.",
        "primaryButtonLabel": "캠페인 시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "다중 시장",
          "label": "캠페인 실행"
        },
        {
          "value": "지역 단위",
          "label": "크리에이터 네트워크"
        },
        {
          "value": "현지화",
          "label": "시장 전략"
        },
        {
          "value": "크로스 플랫폼",
          "label": "실행"
        }
      ],
      "highlights": {
        "title": "브랜드에 아시아 인플루언서 에이전시가 필요한 이유",
        "items": [
          {
            "title": "시장별 차이가 중요합니다",
            "description": "아시아는 하나의 오디언스가 아닙니다. 각 시장과 소비자 행동에 맞춰 크리에이터 선정, 메시지, 콘텐츠 포맷을 조정합니다."
          },
          {
            "title": "국경을 넘는 조율",
            "description": "실행이 흩어지지 않도록 여러 아시아 시장에 걸친 브리프, 승인, 제작, 리포팅 관리를 돕습니다."
          },
          {
            "title": "플랫폼을 이해하는 전략",
            "description": "타깃 시장에 따라 Instagram, TikTok, YouTube와 현지 플랫폼 이용 행태를 알맞게 조합해 캠페인을 설계합니다."
          },
          {
            "title": "비즈니스 성과",
            "description": "도달에만 집중하지 않습니다. 인지, 고려, 트래픽, 전환 목표를 뒷받침하는 크리에이터 캠페인을 만듭니다."
          }
        ]
      },
      "talents": {
        "title": "아시아 캠페인을 위한 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "아시아에서 성과가 높은 카테고리",
        "items": [
          {
            "icon": "💄",
            "title": "뷰티 & 스킨케어",
            "description": "뷰티 브랜드는 아시아의 많은 시장에서 정보 전달 중심의 콘텐츠, 제품 체험, 크리에이터에 대한 높은 신뢰로 효과를 얻습니다."
          },
          {
            "icon": "📱",
            "title": "테크 & 모바일",
            "description": "크리에이터는 시연과 리뷰를 통해 테크 브랜드가 기능을 설명하고, 제품을 차별화하고, 전환을 이끌도록 돕습니다."
          },
          {
            "icon": "🧳",
            "title": "여행 & 호스피탈리티",
            "description": "역내 여행 수요와 여행지 중심 콘텐츠 덕분에 크리에이터 파트너십은 인지도와 예약을 높이는 데 효과적입니다."
          }
        ]
      },
      "cta": {
        "title": "아시아 인플루언서 캠페인을 시작하세요",
        "description": "아시아 여러 시장에 걸쳐 크리에이터, 콘텐츠, 전략을 조율할 수 있는 인플루언서 마케팅 에이전시와 함께하세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "usa": {
    "path": "/influencer-marketing-usa",
    "title": "미국 인플루언서 마케팅 | CA Agency",
    "description": "CA Agency는 미국 시장을 위한 인플루언서 마케팅 에이전시로, 브랜드가 Instagram, TikTok, YouTube에서 크리에이터 캠페인을 진행하도록 돕습니다.",
    "ogImage": "/images/site/og/influencer-marketing-usa-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "content": {
      "hero": {
        "title": "미국 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 미국 시장을 위한 인플루언서 마케팅 에이전시로, 브랜드가 Instagram, TikTok, YouTube에서 성과 중심 크리에이터 캠페인을 진행하도록 돕습니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$6.2B",
          "label": "2025년 미국 시장 규모"
        },
        {
          "value": "84%",
          "label": "YouTube를 이용하는 성인"
        },
        {
          "value": "75%",
          "label": "Instagram을 활용하는 마케터"
        },
        {
          "value": "60%",
          "label": "TikTok 마케팅 활용"
        }
      ],
      "intro": {
        "heading": "미국 브랜드가 신뢰하는 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "미국 시장을 위한 풀서비스 인플루언서 마케팅 에이전시인 CA Agency는 브랜드가 미국 크리에이터를 통해 측정 가능한 성장을 이루도록 돕습니다. 뉴욕과 로스앤젤레스부터 마이애미와 오스틴까지, 미국 오디언스가 이미 시간을 보내는 Instagram, TikTok, YouTube에서 그들에게 닿는 크리에이터 캠페인을 설계하고, 모든 활동을 실제 비즈니스 성과와 연결합니다."
          },
          {
            "text": "미국의 크리에이터 이코노미는 세계에서 가장 크고 경쟁이 치열합니다. 그래서 매출을 만드는 캠페인과 흔적 없이 사라지는 캠페인의 차이는 크리에이터 선정, 브리핑, 성과 측정에서 갈립니다. CA Agency 팀은 이 세 가지를 모두 맡습니다. 오디언스, 전문 분야, 인게이지먼트가 제품과 실제로 맞는 검증된 미국 인플루언서를 브랜드와 매칭하고, 계약, 콘텐츠 승인, 사용권, FTC(미국 연방거래위원회) 기준에 맞는 광고 표기까지 처음부터 끝까지 관리합니다."
          },
          {
            "text": "TikTok Shop에서 론칭하는 DTC 뷰티 브랜드든, YouTube에서 전문성을 쌓아 가는 SaaS 기업이든, 페이드 소셜용 UGC를 확대하는 리테일러든, 목표와 예산에 맞게 마이크로, 미드티어, 매크로 크리에이터를 알맞게 조합합니다. 모든 캠페인은 도달, 인게이지먼트, 클릭, 전환이라는 명확한 KPI를 기준으로 리포팅하므로 인플루언서 마케팅 예산이 어떤 결과로 돌아왔는지 언제나 확인하실 수 있습니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 미국 시장 인플루언서 캠페인에 CA Agency를 선택하는 이유",
        "items": [
          {
            "title": "세계 최대 시장",
            "description": "미국 크리에이터 이코노미는 규모, 성숙한 인프라, 여러 산업에서 입증된 성과를 갖추고 있습니다."
          },
          {
            "title": "높은 소비자 신뢰",
            "description": "소비자는 제품을 발견하고, 검증하고, 확신을 갖고 구매하는 과정에서 크리에이터에게 의지합니다."
          },
          {
            "title": "다양한 플랫폼",
            "description": "YouTube, Instagram, TikTok과 새롭게 떠오르는 채널 전반에 탄탄한 크리에이터 생태계가 있습니다."
          },
          {
            "title": "마이크로 인플루언서의 강점",
            "description": "규모가 작은 크리에이터가 인게이지먼트와 비용 효율에서 더 나은 성과를 내는 경우가 많습니다."
          }
        ]
      },
      "talents": {
        "title": "미국 시장 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "💄",
            "title": "뷰티 & 퍼스널 케어",
            "description": "마이크로 인플루언서는 뷰티 브랜드의 제품 체험과 전환을 이끄는 데 도움이 됩니다."
          },
          {
            "icon": "👗",
            "title": "패션 & 리테일",
            "description": "숏폼 스타일 콘텐츠는 브랜드 인지도와 직접 판매를 모두 뒷받침합니다."
          },
          {
            "icon": "💪",
            "title": "헬스 & 웰니스",
            "description": "웰니스 크리에이터는 브랜드가 신뢰와 습관적인 참여를 쌓도록 돕습니다."
          }
        ]
      },
      "faq": {
        "title": "미국 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "미국 인플루언서 마케팅 비용은 얼마인가요?",
            "answer": "미국 인플루언서 마케팅에 일률적인 가격은 없습니다. 비용은 플랫폼, 참여하는 크리에이터 등급(마이크로부터 매크로까지), 크리에이터 수, 콘텐츠 제작물, 사용권에 따라 달라집니다. CA Agency는 정액 요금을 제시하는 대신 목표와 예산에 맞춰 캠페인마다 범위를 정하고 지출을 측정 가능한 성과에 맞춥니다. 그래서 팔로워 수만이 아니라 결과에 투자하실 수 있습니다. 예산과 목표를 알려 주시면 그에 맞는 크리에이터 조합을 구성해 드립니다."
          },
          {
            "question": "미국 인플루언서 마케팅에는 어떤 플랫폼이 가장 효과적인가요?",
            "answer": "미국 인플루언서 마케팅은 Instagram, TikTok, YouTube가 주도합니다. 뷰티, 패션, 라이프스타일에서는 Instagram과 TikTok이 앞서고, TikTok은 발견과 바이럴 도달을 이끌며, YouTube는 심층 리뷰, 테크, 신중한 검토가 필요한 구매에서 가장 강합니다. 오디언스와 목표에 따라 플랫폼 조합을 추천해 드립니다."
          },
          {
            "question": "우리 브랜드에 맞는 미국 인플루언서는 어떻게 찾나요?",
            "answer": "팔로워 수만이 아니라 오디언스 인구통계, 인게이지먼트의 질, 콘텐츠 스타일, 브랜드 세이프티, 과거 성과를 기준으로 크리에이터를 검증합니다. 모든 크리에이터는 추천에 앞서 타깃 고객, 카테고리, 캠페인 목표에 맞는지 확인합니다."
          },
          {
            "question": "FTC 광고 표기와 크리에이터 계약도 맡아 주나요?",
            "answer": "네. 크리에이터 계약, 사용권 및 화이트리스팅 권한, 콘텐츠 승인, FTC 기준에 맞는 광고 표기(#ad 표시 등)를 처음부터 끝까지 관리하므로 캠페인이 규정을 지키면서 브랜드에 맞게 진행됩니다."
          },
          {
            "question": "인플루언서 캠페인 성과는 어떻게 측정하나요?",
            "answer": "모든 캠페인은 도달, 노출, 인게이지먼트율, 링크 클릭, 전환이라는 명확한 KPI와 연결되며, 투명한 리포팅으로 예산이 어떤 결과로 돌아왔는지 정확히 확인하실 수 있습니다."
          },
          {
            "question": "미국 전국 캠페인이나 특정 도시 대상 캠페인을 진행할 수 있나요?",
            "answer": "둘 다 가능합니다. 미국 전국 캠페인을 진행하며, 뉴욕, 로스앤젤레스, 마이애미, 시카고 같은 특정 시장을 그 지역에 맞는 크리에이터와 함께 공략할 수도 있습니다."
          }
        ]
      },
      "cta": {
        "title": "미국 캠페인을 시작하세요",
        "description": "오디언스와 목표에 맞춰 매칭한 크리에이터와 함께 미국 오디언스에게 다가가세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "uk": {
    "path": "/influencer-marketing-uk",
    "title": "영국 인플루언서 마케팅 | CA Agency",
    "description": "성과 중심 전략과 명확한 리포팅을 바탕으로 Instagram, TikTok, YouTube에서 영국 크리에이터와 함께 영국 인플루언서 마케팅 캠페인을 진행하세요.",
    "ogImage": "/images/site/og/influencer-marketing-uk-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "content": {
      "hero": {
        "title": "영국 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "영국에서 가장 영향력 있는 콘텐츠 크리에이터와 브랜드를 연결하세요. 구매 의향이 높고 크리에이터 생태계가 성숙한 유럽 최대의 인플루언서 마케팅 시장에 진입하세요.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "£930M",
          "label": "2024년 영국 시장"
        },
        {
          "value": "55.5M",
          "label": "소셜 미디어 이용자"
        },
        {
          "value": "69%",
          "label": "콘텐츠를 본 뒤 구매"
        },
        {
          "value": "89%",
          "label": "Instagram을 활용하는 브랜드"
        }
      ],
      "highlights": {
        "title": "영국에서 인플루언서 마케팅을 해야 하는 이유",
        "items": [
          {
            "title": "유럽 최대 시장",
            "description": "영국은 인플루언서 마케팅의 성숙도, 지출 규모, 운영의 정교함에서 유럽을 선도합니다."
          },
          {
            "title": "높은 전환율",
            "description": "영국 소비자는 크리에이터의 추천을 본 뒤 구매하는 경우가 많습니다."
          },
          {
            "title": "정교한 크리에이터 생태계",
            "description": "브랜드는 일회성 셀러브리티 게시물보다 장기적이고 진정성 있는 크리에이터 파트너십을 점점 더 선호합니다."
          },
          {
            "title": "데이터 기반 성과",
            "description": "영국 시장에서는 성과 측정과 브랜드 세이프티가 기본적으로 요구됩니다."
          }
        ]
      },
      "talents": {
        "title": "영국 시장 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "👗",
            "title": "패션",
            "description": "패션은 영국에서 여전히 성과가 가장 높은 크리에이터 카테고리 중 하나입니다."
          },
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "뷰티 캠페인은 크리에이터의 높은 영향력과 튜토리얼 포맷에서 효과를 얻습니다."
          },
          {
            "icon": "🍽️",
            "title": "식음료",
            "description": "음식, 음료, 일상적인 추천 분야에서 크리에이터에 대한 신뢰가 특히 높습니다."
          }
        ]
      },
      "cta": {
        "title": "영국 캠페인을 시작하세요",
        "description": "영국 오디언스를 위한 신뢰도 높은 크리에이터 파트너십을 만들어 보세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "canada": {
    "path": "/influencer-marketing-canada",
    "title": "캐나다 인플루언서 마케팅 | CA Agency",
    "description": "토론토, 밴쿠버, 몬트리올 등 주요 시장에서 영어·프랑스어 이중 언어로 진행하는 크리에이터 중심 인플루언서 캠페인과 명확한 리포팅으로 캐나다 오디언스에게 다가가세요.",
    "ogImage": "/images/site/og/influencer-marketing-canada-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "content": {
      "hero": {
        "title": "캐나다 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "캐나다를 대표하는 콘텐츠 크리에이터와 브랜드를 연결하세요. 토론토, 밴쿠버, 몬트리올을 아우르는 탄탄한 이중 언어 크리에이터 시장에 진입하세요.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$660M",
          "label": "2025년 시장 규모"
        },
        {
          "value": "882K+",
          "label": "활동 중인 인플루언서"
        },
        {
          "value": "70%",
          "label": "인플루언서를 통해 제품 발견"
        },
        {
          "value": "40%",
          "label": "즉시 구매"
        }
      ],
      "highlights": {
        "title": "캐나다에서 인플루언서 마케팅을 해야 하는 이유",
        "items": [
          {
            "title": "방대한 크리에이터 네트워크",
            "description": "캐나다는 주요 도시와 핵심 콘텐츠 카테고리 전반에 걸쳐 폭넓은 크리에이터층을 갖추고 있습니다."
          },
          {
            "title": "높은 구매 의향",
            "description": "캐나다 소비자의 상당수가 크리에이터를 통해 제품을 발견합니다."
          },
          {
            "title": "이중 언어 전문성",
            "description": "영어와 프랑스어 현지화가 중요하며, 퀘벡을 대상으로 하는 캠페인에서는 특히 그렇습니다."
          },
          {
            "title": "장기적 가치",
            "description": "지속적인 크리에이터 협업이 일회성 파트너십보다 더 나은 성과를 내는 경향이 있습니다."
          }
        ]
      },
      "talents": {
        "title": "캐나다 시장 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "👗",
            "title": "패션",
            "description": "현지 적합성과 글로벌 트렌드가 만나 패션은 강한 크리에이터 카테고리가 됩니다."
          },
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "스킨케어와 뷰티 콘텐츠는 정보 전달 중심의 크리에이터 콘텐츠와 함께 좋은 성과를 냅니다."
          },
          {
            "icon": "💻",
            "title": "테크",
            "description": "테크 론칭과 리뷰는 크리에이터에 대한 신뢰와 상세한 시연에서 효과를 얻습니다."
          }
        ]
      },
      "cta": {
        "title": "캐나다 캠페인을 시작하세요",
        "description": "알맞은 크리에이터 조합과 시장에 대한 섬세한 이해로 캐나다 오디언스에게 다가가세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "australia": {
    "path": "/influencer-marketing-australia",
    "title": "호주 인플루언서 마케팅 | CA Agency",
    "description": "검증된 크리에이터와 투명한 성과 리포팅을 바탕으로 시드니, 멜버른을 비롯한 호주 전역에서 크리에이터 중심 인플루언서 마케팅 캠페인을 시작하세요.",
    "ogImage": "/images/site/og/influencer-marketing-australia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "content": {
      "hero": {
        "title": "호주 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "시드니, 멜버른을 비롯한 호주 전역에서 가장 영향력 있는 콘텐츠 크리에이터와 브랜드를 연결하세요.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$589M",
          "label": "2025년 시장 규모"
        },
        {
          "value": "20.9M",
          "label": "소셜 미디어 이용자"
        },
        {
          "value": "46%",
          "label": "콘텐츠를 본 뒤 구매"
        },
        {
          "value": "70%",
          "label": "예산을 늘리는 브랜드"
        }
      ],
      "highlights": {
        "title": "호주에서 인플루언서 마케팅을 해야 하는 이유",
        "items": [
          {
            "title": "참여도 높은 오디언스",
            "description": "호주 사람들은 소셜 미디어를 많이 이용하며 크리에이터가 이끄는 콘텐츠에 강하게 반응합니다."
          },
          {
            "title": "강한 구매 영향력",
            "description": "인플루언서는 정보 탐색, 고려, 전환 과정에서 의미 있는 역할을 합니다."
          },
          {
            "title": "진정성을 우선하는 문화",
            "description": "친근하게 공감할 수 있는 크리에이터와 신뢰에 기반한 파트너십이 지나치게 다듬어진 캠페인보다 나은 성과를 냅니다."
          },
          {
            "title": "늘어나는 투자",
            "description": "호주 브랜드는 인플루언서 마케팅 지출을 계속 늘리고 있습니다."
          }
        ]
      },
      "intro": {
        "heading": "시드니, 멜버른, 그리고 호주 전역을 위한 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "CA Agency는 호주 오디언스에게 다가가려는 브랜드를 위해 전국 단위 론칭부터 시드니와 멜버른의 도시별 활동까지 인플루언서 마케팅 캠페인을 진행합니다. Instagram, TikTok, YouTube의 호주 크리에이터와 브랜드를 매칭하고, 브리프부터 리포트까지 캠페인을 관리합니다."
          },
          {
            "text": "시드니의 인플루언서 마케팅은 뷰티, 패션, 피트니스, 그리고 이 도시를 대표하는 해변과 아웃도어 라이프스타일에 무게가 실려 있습니다. 시드니 크리에이터는 제품 론칭, 이벤트 커버리지, 세련되고 동경을 불러일으키는 느낌이 필요한 콘텐츠에 잘 맞는 선택입니다."
          },
          {
            "text": "멜버른의 인플루언서 마케팅은 성격이 다릅니다. 보다 에디토리얼하고, 패션, 음식, 커피, 문화에 더 집중되어 있습니다. 멜버른 크리에이터는 깊이 있고 스타일 중심적인 콘텐츠와 트렌드를 면밀히 따르는 오디언스를 원하는 브랜드에 어울립니다. 많은 전국 캠페인이 두 도시를 모두 활용한 뒤, 더 넓은 도달을 위해 브리즈번, 퍼스, 애들레이드의 크리에이터를 추가합니다."
          },
          {
            "text": "호주에 진출하는 한국 뷰티 브랜드를 포함한 뷰티 및 스킨케어 브랜드를 위해서는 현지 취향뿐 아니라 현지 규정도 고려해 계획합니다. 광고는 명확하게 표기해야 하며, 치료용품(therapeutic goods)으로 규제되는 제품은 유료 추천에 대해 더 엄격한 규정이 적용됩니다. 호주에서는 많은 자외선 차단제가 여기에 포함됩니다. CA Agency는 콘텐츠를 제작하기 전에 이에 맞춰 크리에이터에게 브리핑합니다."
          }
        ]
      },
      "process": {
        "title": "호주 인플루언서 캠페인 진행 방식",
        "steps": [
          {
            "title": "브리프와 목표",
            "description": "목표, 오디언스, 예산, 일정을 정하고, 캠페인이 전국 단위인지 시드니, 멜버른 또는 다른 도시에 집중하는지 함께 합의합니다."
          },
          {
            "title": "크리에이터 후보 리스트",
            "description": "오디언스 지역, 인게이지먼트, 과거 브랜드 협업 이력이 담긴 호주 크리에이터 후보 리스트를 받아 보실 수 있으며, 모든 후보는 추천에 앞서 확인을 거칩니다."
          },
          {
            "title": "계약과 브리핑",
            "description": "계약, 사용권, 그리고 호주 규정이 요구하는 광고 표기를 포함한 크리에이티브 브리프를 맡아 진행합니다."
          },
          {
            "title": "콘텐츠와 승인",
            "description": "크리에이터가 콘텐츠를 제작하면 CA Agency가 브리프에 비추어 검토하고, 게시 전에 브랜드가 승인합니다."
          },
          {
            "title": "리포팅",
            "description": "크리에이터별, 도시별 도달, 인게이지먼트, 클릭, 전환을 받아 보시고, 다음에 무엇을 반복해야 할지 명확하게 파악하실 수 있습니다."
          }
        ]
      },
      "talents": {
        "title": "호주 시장 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 높은 산업 분야",
        "items": [
          {
            "icon": "🏃",
            "title": "라이프스타일 & 피트니스",
            "description": "라이프스타일과 피트니스 크리에이터는 호주 오디언스에게 강한 영향력을 갖고 있습니다."
          },
          {
            "icon": "👗",
            "title": "패션",
            "description": "패션은 트렌드를 따르면서도 친근한 크리에이터 스토리텔링과 함께 좋은 성과를 냅니다."
          },
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "뷰티 크리에이터는 제품 발견, 체험, 반복적인 참여를 이끄는 데 도움이 됩니다."
          }
        ]
      },
      "faq": {
        "title": "호주 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "시드니와 멜버른에서 인플루언서 캠페인을 진행하나요?",
            "answer": "네. 시드니와 멜버른 크리에이터와 함께하는 도시별 캠페인은 물론, 브리즈번, 퍼스, 애들레이드를 더한 전국 캠페인도 기획합니다."
          },
          {
            "question": "CA Agency는 호주에 있는 회사인가요?",
            "answer": "아니요. CA Agency의 본사는 두바이에 있으며, 암스테르담과 델라웨어에 디비전을 두고 있습니다. 호주 캠페인은 호주에 거주하는 크리에이터와 함께 원격으로 진행하며, 브리핑, 계약, 승인, 리포팅을 하나의 팀이 관리합니다."
          },
          {
            "question": "호주에서는 스폰서드 콘텐츠를 어떻게 표기해야 하나요?",
            "answer": "호주 광고 규약과 소비자법에 따라 유료 크리에이터 콘텐츠는 광고임을 명확히 구분할 수 있어야 합니다. 예를 들어 명확한 \"Ad\"(광고) 또는 유료 파트너십 라벨을 붙이는 방식입니다. CA Agency는 이를 모든 브리프에 포함하고 승인 전에 확인합니다."
          },
          {
            "question": "호주에는 스킨케어와 자외선 차단제에 대한 특별한 규정이 있나요?",
            "answer": "네. 치료용품(therapeutic goods)으로 규제되는 제품에는 유료 후기에 대한 제한을 포함해 더 엄격한 광고 규정이 적용되며, 많은 자외선 차단제가 여기에 포함됩니다. CA Agency는 크리에이터 콘텐츠를 기획하기 전에 제품이 어떻게 분류되는지 확인합니다."
          },
          {
            "question": "호주 인플루언서 마케팅 비용은 얼마인가요?",
            "answer": "비용은 플랫폼, 크리에이터 등급, 크리에이터 수, 제작물, 사용권에 따라 달라집니다. 정액 요금을 제시하는 대신 예산과 목표에 맞춰 캠페인마다 범위를 정합니다."
          }
        ]
      },
      "cta": {
        "title": "호주 캠페인을 시작하세요",
        "description": "카테고리와 시장에 맞는 크리에이터와 함께 호주 오디언스에게 다가가세요.",
        "buttonLabel": "문의하기",
        "buttonHref": "/contact"
      }
    }
  },
  "sydney": {
    "path": "/influencer-marketing-sydney",
    "title": "시드니 인플루언서 마케팅 | CA Agency",
    "description": "시드니를 위한 인플루언서 마케팅 캠페인. Instagram과 TikTok에서 활동하는 검증된 시드니 크리에이터를 뷰티, 스킨케어, 라이프스타일 브랜드와 연결하고 명확한 리포팅을 제공합니다.",
    "ogImage": "/images/site/og/influencer-marketing-sydney-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      }
    ],
    "content": {
      "hero": {
        "title": "시드니 캠페인을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 시드니를 위한 인플루언서 마케팅 캠페인을 운영하며, 뷰티, 스킨케어, 라이프스타일 브랜드를 Instagram, TikTok, YouTube의 시드니 크리에이터와 매칭합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "총 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "시드니",
          "label": "집중 시장"
        }
      ],
      "intro": {
        "heading": "시드니 캠페인을 위한 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "시드니는 호주 최대의 도시이자 호주 뷰티, 패션, 미디어 산업의 중심지입니다. 시드니를 위한 인플루언서 마케팅 에이전시를 찾는 브랜드는 대개 세 가지 중 하나를 원합니다. 주목받는 런칭, 세련되고 동경을 불러일으키는 콘텐츠, 또는 스타일에 민감한 시드니 오디언스에 대한 꾸준한 도달입니다. CA Agency는 이러한 목표를 중심으로 시드니 캠페인을 기획합니다."
          },
          {
            "text": "시드니 크리에이터의 콘텐츠에는 한눈에 알아볼 수 있는 개성이 있습니다. 해변과 해안선, 피트니스와 웰니스, 클린 뷰티, 그리고 스킨케어와 선케어에 특히 잘 어울리는 밝은 야외 감성입니다. 저희는 동부 교외부터 이너 웨스트까지, 팔로워가 실제로 시드니와 그 주변에 거주하는 시드니 인플루언서를 브랜드와 매칭하며, 누구든 추천하기 전에 오디언스의 위치를 확인합니다."
          },
          {
            "text": "저희는 시드니에 본사를 둔 에이전시가 아닙니다. 본사는 두바이에 있고 암스테르담과 델라웨어에 지사를 두고 있으며, 호주 캠페인은 현지 크리에이터와 함께 원격으로 운영합니다. 브랜드 입장에서는 시드니, 호주의 다른 지역, 그리고 활동 중인 다른 모든 시장을 하나의 팀이 맡고, 어디서나 동일한 리포팅을 받는다는 뜻입니다."
          },
          {
            "text": "뷰티와 스킨케어는 저희의 핵심 카테고리이며, 호주에 진출하는 한국 뷰티 브랜드도 여기에 포함됩니다. 저희는 첫 브리프부터 호주 광고 규정을 고려해 기획합니다. 협찬 콘텐츠는 명확하게 표시해야 하며, 다수의 자외선 차단제를 포함해 치료용품으로 규제되는 제품은 유료 추천에 더 엄격한 제한이 적용됩니다."
          }
        ]
      },
      "process": {
        "title": "시드니 인플루언서 캠페인 진행 방식",
        "steps": [
          {
            "title": "브리프와 목표",
            "description": "목표, 오디언스, 예산, 일정을 함께 정하고, 캠페인을 시드니에서만 진행할지 호주 전국 플랜의 일부로 진행할지 결정합니다."
          },
          {
            "title": "크리에이터 후보 리스트",
            "description": "오디언스 위치, 참여도, 과거 브랜드 협업 이력이 담긴 시드니 크리에이터 후보 리스트를 받아보실 수 있으며, 저희는 추천에 앞서 이를 모두 확인합니다."
          },
          {
            "title": "계약과 브리핑",
            "description": "계약, 콘텐츠 사용권, 그리고 호주 규정이 요구하는 광고 표시를 포함한 크리에이티브 브리프를 저희가 처리합니다."
          },
          {
            "title": "콘텐츠와 승인",
            "description": "크리에이터가 콘텐츠를 제작하면 저희가 브리프에 맞는지 검토하고, 게시 전에 브랜드가 승인합니다."
          },
          {
            "title": "리포팅",
            "description": "크리에이터별 도달, 참여, 클릭, 전환 수치와 함께, 무엇을 다시 진행하면 좋을지 명확하게 확인하실 수 있습니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 시드니 인플루언서 마케팅에 저희를 선택하는 이유",
        "items": [
          {
            "title": "실제 시드니 오디언스",
            "description": "크리에이터의 팔로워가 어디에 거주하는지 검증하므로, 예산이 시드니 콘텐츠를 좋아하는 사람들만이 아니라 시드니에 있는 사람들에게 도달합니다."
          },
          {
            "title": "뷰티와 스킨케어 중심",
            "description": "저희 캠페인은 주로 뷰티, 스킨케어, 라이프스타일 브랜드를 위해 설계되며, 이는 시드니 크리에이터가 가장 강점을 보이는 카테고리입니다."
          },
          {
            "title": "런칭에 바로 쓰는 콘텐츠",
            "description": "시드니 크리에이터는 런칭에 효과적이고 유료 소셜 광고 소재로도 활용할 수 있는 세련되고 동경을 불러일으키는 콘텐츠를 제작합니다."
          },
          {
            "title": "하나의 팀, 모든 시장",
            "description": "시드니 캠페인은 단독으로 진행할 수도 있고, 멜버른, 호주 전국 활동, 다른 국가의 캠페인과 함께 진행할 수도 있습니다."
          }
        ]
      },
      "talents": {
        "title": "함께하는 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "시드니에서 성과가 좋은 산업",
        "items": [
          {
            "icon": "💄",
            "title": "뷰티 & 스킨케어",
            "description": "스킨케어, 선케어, 클린 뷰티는 시드니의 야외 중심 라이프스타일과 뷰티에 관심이 높은 오디언스에 잘 맞습니다."
          },
          {
            "icon": "🏃",
            "title": "피트니스 & 웰니스",
            "description": "활동적인 해안 생활 덕분에 시드니에서는 피트니스와 웰니스 크리에이터의 영향력이 특히 큽니다."
          },
          {
            "icon": "👗",
            "title": "패션",
            "description": "스윔웨어, 리조트 웨어, 프리미엄 패션은 스타일을 앞세우는 시드니 크리에이터와 함께할 때 좋은 성과를 냅니다."
          }
        ]
      },
      "faq": {
        "title": "시드니 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "CA Agency는 시드니에 있는 인플루언서 마케팅 에이전시인가요?",
            "answer": "저희는 시드니를 위한 인플루언서 마케팅 캠페인을 운영하지만, 시드니에 본사를 둔 에이전시가 아닙니다. 본사는 두바이에 있으며 암스테르담과 델라웨어에 지사가 있습니다. 캠페인은 하나의 팀이 원격으로 관리하고, 시드니에 거주하는 크리에이터가 실행합니다."
          },
          {
            "question": "브랜드에 맞는 시드니 인플루언서는 어떻게 찾나요?",
            "answer": "오디언스 위치, 참여의 질, 콘텐츠 스타일, 브랜드 세이프티, 과거 성과를 기준으로 크리에이터 후보를 선정합니다. 시드니 캠페인의 경우 크리에이터를 추천하기 전에 오디언스의 의미 있는 비중이 시드니 지역에 있는지 확인합니다."
          },
          {
            "question": "시드니 인플루언서 마케팅 비용은 얼마인가요?",
            "answer": "비용은 플랫폼, 크리에이터 등급, 크리에이터 수, 결과물, 콘텐츠 사용권에 따라 달라집니다. 저희는 정액 요금을 제시하는 대신 브랜드의 예산과 목표에 맞춰 시드니 캠페인마다 범위를 설계합니다."
          },
          {
            "question": "시드니 인플루언서 마케팅에는 어떤 플랫폼이 가장 효과적인가요?",
            "answer": "뷰티, 패션, 피트니스, 라이프스타일에서는 Instagram과 TikTok이 앞서 있으며, YouTube는 긴 리뷰에 유용합니다. 저희는 브랜드의 오디언스와 캠페인 목표에 따라 플랫폼 조합을 추천합니다."
          },
          {
            "question": "호주의 협찬 콘텐츠 표시도 관리해 주시나요?",
            "answer": "네. 호주 광고 규약과 소비자법에 따라 유료 크리에이터 콘텐츠는 광고임을 명확히 구별할 수 있어야 합니다. 광고 표시는 모든 브리프에 포함되며, 저희는 승인 전에 게시물을 하나하나 확인합니다. 다수의 자외선 차단제와 같은 치료용품의 경우 추천에 관한 더 엄격한 규정도 함께 확인합니다."
          },
          {
            "question": "시드니 캠페인을 멜버른이나 호주의 다른 지역으로 확장할 수 있나요?",
            "answer": "네. 많은 브랜드가 시드니에서 시작해 멜버른을 추가하고, 이어서 브리즈번, 퍼스, 애들레이드로 넓혀 갑니다. 저희는 하나의 캠페인 프레임워크를 유지하면서 도시별로 크리에이터를 추가합니다."
          }
        ]
      },
      "cta": {
        "title": "시드니 캠페인을 시작하세요",
        "description": "브랜드에 대해 알려주시면 알맞은 시드니 크리에이터와 매칭해 드립니다.",
        "buttonLabel": "연락하기",
        "buttonHref": "/contact"
      }
    }
  },
  "melbourne": {
    "path": "/influencer-marketing-melbourne",
    "title": "멜버른 인플루언서 마케팅 | CA Agency",
    "description": "멜버른을 위한 인플루언서 마케팅 캠페인. Instagram과 TikTok에서 활동하는 검증된 멜버른 크리에이터를 패션, 뷰티, 스킨케어 브랜드와 연결하고 명확한 리포팅을 제공합니다.",
    "ogImage": "/images/site/og/influencer-marketing-melbourne-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne"
      }
    ],
    "content": {
      "hero": {
        "title": "멜버른 캠페인을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 멜버른을 위한 인플루언서 마케팅 캠페인을 운영하며, 뷰티, 스킨케어, 패션 브랜드를 Instagram, TikTok, YouTube의 멜버른 크리에이터와 매칭합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "총 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "멜버른",
          "label": "집중 시장"
        }
      ],
      "intro": {
        "heading": "멜버른 캠페인을 위한 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "멜버른은 호주의 패션, 미식, 커피, 문화의 수도이며, 멜버른의 크리에이터에게도 그 특징이 그대로 드러납니다. 멜버른을 위한 인플루언서 에이전시를 찾는 브랜드는 대개 에디토리얼 감각이 더 살아 있는 콘텐츠를 원합니다. 공들인 스타일링, 뚜렷한 관점, 그리고 트렌드를 면밀히 따라가는 오디언스입니다. CA Agency는 이러한 특성을 중심으로 멜버른 캠페인을 기획합니다."
          },
          {
            "text": "멜버른 인플루언서는 스킨케어 루틴이든, 인디 패션이든, 이 도시의 골목과 카페 문화든, 분명한 관점을 중심으로 충성도와 참여도가 높은 커뮤니티를 만들어 가는 경향이 있습니다. 저희는 팔로워가 멜버른과 그 주변에 거주하고 취향이 제품과 맞는 크리에이터를 브랜드와 매칭하며, 누구든 추천하기 전에 오디언스 데이터를 확인합니다."
          },
          {
            "text": "저희는 멜버른에 본사를 둔 에이전시가 아닙니다. 본사는 두바이에 있고 암스테르담과 델라웨어에 지사를 두고 있으며, 호주 캠페인은 현지 크리에이터와 함께 원격으로 운영합니다. 브랜드는 멜버른, 시드니, 그리고 활동 중인 다른 모든 시장을 하나의 팀에 맡기고, 어디서나 동일한 리포팅을 받습니다."
          },
          {
            "text": "호주에 진출하는 한국 뷰티 브랜드를 포함한 뷰티 및 스킨케어 브랜드에게, 크리에이터 캠페인은 멜버른에서 전통적으로 뷰티 PR이 하던 역할을 대신하는 경우가 많습니다. 신뢰받는 사람들의 손에 제품을 전하고 알맞은 오디언스 앞에 선보이는 일입니다. 저희는 다수의 자외선 차단제와 같은 치료용품에 적용되는 더 엄격한 규정을 포함해, 호주의 광고 표시 규정을 모든 브리프에 반영합니다."
          }
        ]
      },
      "process": {
        "title": "멜버른 인플루언서 캠페인 진행 방식",
        "steps": [
          {
            "title": "브리프와 목표",
            "description": "목표, 오디언스, 예산, 일정을 함께 정하고, 캠페인을 멜버른에서만 진행할지 호주 전국 플랜의 일부로 진행할지 결정합니다."
          },
          {
            "title": "크리에이터 후보 리스트",
            "description": "오디언스 위치, 참여도, 과거 브랜드 협업 이력이 담긴 멜버른 크리에이터 후보 리스트를 받아보실 수 있으며, 저희는 추천에 앞서 이를 모두 확인합니다."
          },
          {
            "title": "계약과 브리핑",
            "description": "계약, 콘텐츠 사용권, 그리고 호주 규정이 요구하는 광고 표시를 포함한 크리에이티브 브리프를 저희가 처리합니다."
          },
          {
            "title": "콘텐츠와 승인",
            "description": "크리에이터가 콘텐츠를 제작하면 저희가 브리프에 맞는지 검토하고, 게시 전에 브랜드가 승인합니다."
          },
          {
            "title": "리포팅",
            "description": "크리에이터별 도달, 참여, 클릭, 전환 수치와 함께, 무엇을 다시 진행하면 좋을지 명확하게 확인하실 수 있습니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 멜버른 인플루언서 마케팅에 저희를 선택하는 이유",
        "items": [
          {
            "title": "실제 멜버른 오디언스",
            "description": "크리에이터의 팔로워가 어디에 거주하는지 검증하므로, 예산이 멜버른에 있는 사람들에게 도달합니다."
          },
          {
            "title": "스타일을 앞세우는 크리에이터",
            "description": "멜버른 오디언스는 양보다 취향을 높이 평가하기 때문에, 저희는 뚜렷한 관점을 가진 크리에이터를 찾습니다."
          },
          {
            "title": "뷰티와 스킨케어 중심",
            "description": "저희 캠페인은 K-뷰티 런칭을 포함해 주로 뷰티, 스킨케어, 패션 브랜드를 위해 설계됩니다."
          },
          {
            "title": "하나의 팀, 모든 시장",
            "description": "멜버른 캠페인은 단독으로 진행할 수도 있고, 시드니, 호주 전국 활동, 다른 국가의 캠페인과 함께 진행할 수도 있습니다."
          }
        ]
      },
      "talents": {
        "title": "함께하는 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "멜버른에서 성과가 좋은 산업",
        "items": [
          {
            "icon": "👗",
            "title": "패션",
            "description": "인디 레이블과 공들인 스타일링은 패션에 앞서가는 멜버른 크리에이터와 잘 어울립니다."
          },
          {
            "icon": "💄",
            "title": "뷰티 & 스킨케어",
            "description": "루틴 중심의 솔직한 스킨케어 콘텐츠는 정보에 밝은 멜버른 오디언스의 신뢰를 얻습니다."
          },
          {
            "icon": "☕",
            "title": "푸드 & 라이프스타일",
            "description": "카페, 다이닝, 문화 콘텐츠는 이 도시의 크리에이터에게 자연스럽게 어울립니다."
          }
        ]
      },
      "faq": {
        "title": "멜버른 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "CA Agency는 멜버른에 있는 인플루언서 에이전시인가요?",
            "answer": "저희는 멜버른을 위한 인플루언서 마케팅 캠페인을 운영하지만, 멜버른에 본사를 둔 에이전시가 아닙니다. 본사는 두바이에 있으며 암스테르담과 델라웨어에 지사가 있습니다. 캠페인은 하나의 팀이 원격으로 관리하고, 멜버른에 거주하는 크리에이터가 실행합니다."
          },
          {
            "question": "멜버른의 인플루언서 마케팅은 시드니와 어떻게 다른가요?",
            "answer": "멜버른 콘텐츠는 대체로 에디토리얼 성격이 더 강하고 스타일을 앞세우며 패션, 미식, 문화에 강점이 있는 반면, 시드니는 뷰티, 피트니스, 야외 라이프스타일 쪽에 더 가깝습니다. 그래서 많은 호주 전국 캠페인이 두 도시의 크리에이터를 함께 활용합니다."
          },
          {
            "question": "멜버른에서 뷰티 PR 서비스도 제공하나요?",
            "answer": "저희는 인플루언서 마케팅 에이전시이며, 전통적인 PR 회사가 아닙니다. 뷰티 브랜드를 위해서는 과거 PR이 하던 일 가운데 크리에이터 영역을 맡습니다. 제품 시딩, 크리에이터 파트너십, 멜버른 크리에이터와의 협찬 콘텐츠를 진행하고, 명확한 성과를 기준으로 리포팅합니다."
          },
          {
            "question": "멜버른 인플루언서 마케팅 비용은 얼마인가요?",
            "answer": "비용은 플랫폼, 크리에이터 등급, 크리에이터 수, 결과물, 콘텐츠 사용권에 따라 달라집니다. 저희는 정액 요금을 제시하는 대신 브랜드의 예산과 목표에 맞춰 멜버른 캠페인마다 범위를 설계합니다."
          },
          {
            "question": "호주의 협찬 콘텐츠 표시도 관리해 주시나요?",
            "answer": "네. 호주 광고 규약과 소비자법에 따라 유료 크리에이터 콘텐츠는 광고임을 명확히 구별할 수 있어야 합니다. 광고 표시는 모든 브리프에 포함되며, 저희는 승인 전에 게시물을 하나하나 확인합니다."
          },
          {
            "question": "멜버른 캠페인을 시드니나 호주의 다른 지역으로 확장할 수 있나요?",
            "answer": "네. 저희는 하나의 캠페인 프레임워크를 유지하면서 플랜이 커지는 데 맞춰 시드니, 브리즈번, 퍼스, 애들레이드의 크리에이터를 추가합니다."
          }
        ]
      },
      "cta": {
        "title": "멜버른 캠페인을 시작하세요",
        "description": "브랜드에 대해 알려주시면 알맞은 멜버른 크리에이터와 매칭해 드립니다.",
        "buttonLabel": "연락하기",
        "buttonHref": "/contact"
      }
    }
  },
  "europe": {
    "path": "/influencer-marketing-europe",
    "title": "유럽 인플루언서 마케팅 | CA Agency",
    "description": "유럽을 위한 하나의 인플루언서 마케팅 에이전시. 독일, 프랑스, 스위스, 북유럽, 영국의 크리에이터 캠페인을 암스테르담 유럽 지사에서 운영합니다.",
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
        "title": "유럽 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 유럽을 위한 인플루언서 마케팅 에이전시로, 암스테르담의 유럽 지사에서 독일, 프랑스, 스위스, 북유럽, 영국 전역의 뷰티 및 스킨케어 브랜드 크리에이터 캠페인을 운영합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "총 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "유럽",
          "label": "집중 시장"
        }
      ],
      "intro": {
        "heading": "유럽의 모든 시장을 위한 하나의 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "유럽은 하나의 시장이 아닙니다. 베를린에서 통하는 캠페인도 파리, 취리히, 스톡홀름에서는 다른 크리에이터, 다른 언어, 다른 톤이 필요합니다. 유럽을 위한 풀서비스 인플루언서 마케팅 에이전시로서 CA Agency는 국가마다 그 시장에 맞게 기획하면서도, 캠페인 전체는 하나의 팀, 하나의 브리프, 하나의 리포트로 운영합니다."
          },
          {
            "text": "저희 유럽 지사는 두바이 본사, 델라웨어의 북미 지사와 함께 암스테르담에서 일합니다. 덕분에 시간대와 언어가 다른 크리에이터들을 조율하고, 국가별로 계약과 콘텐츠 사용권을 처리하며, 캠페인을 진행하는 모든 시장에서 광고 표시를 현지 소비자 규정에 맞게 유지할 수 있습니다."
          },
          {
            "text": "저희는 주로 뷰티, 스킨케어, 라이프스타일 브랜드와 일하며, 유럽에 처음 진출하는 한국 뷰티 브랜드도 여기에 포함됩니다. 독일어 TikTok 콘텐츠가 필요하든, 프랑스 Instagram 크리에이터가 필요하든, 북유럽 전역에서 영어로 도달하고 싶든, 브랜드의 목표에 맞춰 크리에이터 조합을 구성하고 모든 캠페인 집행을 명확한 KPI 기준으로 리포팅합니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 유럽 캠페인에 저희 인플루언서 에이전시를 선택하는 이유",
        "items": [
          {
            "title": "국가별 기획",
            "description": "각 시장에는 다른 나라 캠페인을 번역한 복사본이 아니라, 그 나라의 언어로 말하고 그 오디언스를 아는 크리에이터를 배정합니다."
          },
          {
            "title": "하나의 팀, 여러 시장",
            "description": "브리핑, 계약, 승인, 리포팅을 하나의 팀이 진행하므로, 5개국 런칭이라고 해서 에이전시 다섯 곳이 필요하지 않습니다."
          },
          {
            "title": "현지 광고 표시 규정",
            "description": "광고 표시는 국가마다 다릅니다. 저희는 콘텐츠가 게시되기 전에 각 시장에서 요구되는 문구를 크리에이터에게 브리핑합니다."
          },
          {
            "title": "측정된 성과",
            "description": "도달, 참여, 클릭, 전환을 시장별로 리포팅하므로, 어느 국가에 예산을 더 투입할 만한지 확인하실 수 있습니다."
          }
        ]
      },
      "talents": {
        "title": "유럽 캠페인을 위한 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 좋은 산업",
        "items": [
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "메이크업 런칭과 튜토리얼은 현지 크리에이터와 함께하면 유럽 여러 시장에서 잘 통합니다."
          },
          {
            "icon": "🧴",
            "title": "스킨케어",
            "description": "정보 전달 중심의 스킨케어 콘텐츠는 성분에 밝은 유럽 소비자의 신뢰를 쌓습니다."
          },
          {
            "icon": "👗",
            "title": "패션 & 라이프스타일",
            "description": "스타일링과 일상 루틴 콘텐츠는 제품을 실제 유럽인의 생활 속에 담아냅니다."
          }
        ]
      },
      "faq": {
        "title": "유럽 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "유럽의 어느 국가에서 인플루언서 캠페인을 진행하나요?",
            "answer": "저희는 유럽 전역에서 크리에이터 캠페인을 기획하고 운영하며, 독일, 프랑스, 스위스, 북유럽 국가(스웨덴, 노르웨이, 핀란드, 덴마크), 네덜란드, 영국에 집중하고 있습니다. 캠페인은 한 국가에서 진행할 수도 있고 여러 국가에서 동시에 진행할 수도 있습니다."
          },
          {
            "question": "현지 언어로 활동하는 크리에이터와 협업하나요?",
            "answer": "네. 독일, 프랑스, 스위스 캠페인은 현지 언어로 게시하는 크리에이터에게 브리핑합니다. 북유럽에서는 많은 크리에이터가 자국어뿐 아니라 영어로도 오디언스와 소통하며, 저희는 브랜드에 맞는 조합을 선택합니다."
          },
          {
            "question": "유럽 전역의 광고 표시는 어떻게 관리하나요?",
            "answer": "유럽 어디에서나 유료 크리에이터 콘텐츠는 광고임을 알아볼 수 있어야 하지만, 요구되는 문구는 국가마다 다릅니다. 예를 들어 독일에서는 \"Werbung\" 또는 \"Anzeige\", 프랑스에서는 \"Publicité\" 또는 \"Collaboration commerciale\"입니다. 저희는 모든 브리프에 올바른 표시를 포함하고, 콘텐츠가 승인되기 전에 이를 확인합니다."
          },
          {
            "question": "유럽 인플루언서 마케팅 비용은 얼마인가요?",
            "answer": "비용은 국가, 플랫폼, 크리에이터 등급, 크리에이터 수, 결과물, 콘텐츠 사용권에 따라 달라집니다. 저희는 정액 요금을 제시하는 대신 브랜드의 목표와 예산에 맞춰 캠페인마다 범위를 설계합니다. 예산과 대상 시장을 알려주시면 그에 맞춰 크리에이터 플랜을 구성해 드립니다."
          },
          {
            "question": "한국 뷰티 브랜드의 유럽 런칭도 가능한가요?",
            "answer": "네. K-뷰티는 저희의 핵심 카테고리 중 하나입니다. 한국 스킨케어 및 메이크업 브랜드가 첫 유럽 진출 시장을 선택하도록 돕고, 이미 스킨케어에 관심을 두고 팔로우하는 오디언스를 가진 크리에이터와 매칭하며, 국가별로 메시지를 조정합니다."
          }
        ]
      },
      "cta": {
        "title": "유럽 캠페인을 시작하세요",
        "description": "어떤 유럽 시장이 중요한지 알려주시면 알맞은 크리에이터와 매칭해 드립니다.",
        "buttonLabel": "연락하기",
        "buttonHref": "/contact"
      }
    }
  },
  "germany": {
    "path": "/influencer-marketing-germany",
    "title": "독일 인플루언서 마케팅 | CA Agency",
    "description": "독일과 DACH 지역을 위한 인플루언서 마케팅 에이전시. Instagram, TikTok, YouTube의 독일어권 크리에이터를 뷰티 및 스킨케어 브랜드와 연결합니다.",
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
        "title": "독일 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 독일과 DACH 지역을 위한 인플루언서 마케팅 에이전시로, 뷰티 및 스킨케어 브랜드를 Instagram, TikTok, YouTube의 독일어권 크리에이터와 연결합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "총 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "DACH",
          "label": "집중 시장"
        }
      ],
      "intro": {
        "heading": "독일, 오스트리아, 스위스를 위한 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "독일은 유럽연합 최대의 소비 시장이며, 독일 오디언스는 이미 신뢰하는 크리에이터가 자국어로 전하는 콘텐츠를 기대합니다. CA Agency는 독일어권 크리에이터와 함께 독일을 위한 인플루언서 캠페인을 기획하므로, 독일 고객이 궁금해할 방식 그대로 제품을 설명할 수 있습니다."
          },
          {
            "text": "독일 소비자는 성분표를 읽고, 리뷰를 비교하며, 과장된 홍보보다 솔직하고 자세한 콘텐츠를 높이 평가합니다. 저희는 오디언스, 전문 분야, 톤이 이러한 기대에 맞는 크리에이터를 브랜드와 매칭한 뒤, 암스테르담의 유럽 지사에서 브리핑, 계약, 콘텐츠 승인, 콘텐츠 사용권을 관리합니다."
          },
          {
            "text": "독일어는 오스트리아와 스위스 대부분 지역에서도 쓰이기 때문에, 잘 기획한 하나의 캠페인으로 DACH 지역 전체에 도달할 수 있습니다. 저희는 크리에이터 조합과 국가마다 다른 세부 사항을 조정하고, 시장별로 성과를 따로 리포팅합니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 독일 캠페인에 저희 인플루언서 에이전시를 선택하는 이유",
        "items": [
          {
            "title": "독일어 콘텐츠",
            "description": "크리에이터가 오디언스에게 독일어로 이야기하며, 이는 신뢰는 물론 TikTok과 YouTube 검색에도 중요합니다."
          },
          {
            "title": "명확한 광고 표시",
            "description": "독일에서 유료 게시물은 \"Werbung\" 또는 \"Anzeige\"로 표시해야 합니다. 저희는 이 표시를 모든 브리프에 반영하고 승인 전에 확인합니다."
          },
          {
            "title": "DACH 도달",
            "description": "하나의 캠페인 프레임워크를 독일에서 오스트리아와 스위스 독일어권으로 확장할 수 있습니다."
          },
          {
            "title": "디테일을 중시하는 오디언스",
            "description": "독일 구매자는 내실 있는 내용에 반응하기 때문에, 저희는 제품을 제대로 설명하는 크리에이터를 선호합니다."
          }
        ]
      },
      "talents": {
        "title": "독일 캠페인을 위한 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 좋은 산업",
        "items": [
          {
            "icon": "🧴",
            "title": "스킨케어",
            "description": "성분 중심의 스킨케어 콘텐츠는 구매 전에 꼼꼼히 알아보는 독일 소비자의 방식에 잘 맞습니다."
          },
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "튜토리얼과 솔직한 첫인상 콘텐츠는 신규 메이크업 브랜드가 독일에서 신뢰를 얻는 데 도움이 됩니다."
          },
          {
            "icon": "💪",
            "title": "헬스 & 웰니스",
            "description": "루틴 기반의 크리에이터 콘텐츠는 웰니스 브랜드의 장기적인 참여를 쌓아 갑니다."
          }
        ]
      },
      "faq": {
        "title": "독일 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "독일어권 인플루언서와 협업하나요?",
            "answer": "네. 독일, 오스트리아, 스위스 독일어권 캠페인은 독일어로 게시하고 팔로워가 주로 DACH 지역에 있는 크리에이터에게 브리핑합니다."
          },
          {
            "question": "독일에서 광고 표시는 어떻게 이루어지나요?",
            "answer": "유료 크리에이터 콘텐츠는 광고임을 명확히 알아볼 수 있어야 합니다. 실무에서는 게시물 시작 부분에 눈에 띄는 \"Werbung\" 또는 \"Anzeige\" 표시를 독일어로 넣는다는 뜻입니다. 저희는 이를 모든 브리프에 포함하고, 승인 전에 게시물을 하나하나 확인합니다."
          },
          {
            "question": "독일 인플루언서 마케팅에는 어떤 플랫폼이 가장 효과적인가요?",
            "answer": "뷰티, 스킨케어, 라이프스타일에서는 Instagram과 TikTok이 앞서 있으며, YouTube는 심층 리뷰에서 여전히 강세입니다. 저희는 브랜드의 오디언스와 캠페인 목표에 따라 플랫폼 조합을 추천합니다."
          },
          {
            "question": "독일 인플루언서 캠페인 비용은 얼마인가요?",
            "answer": "플랫폼, 크리에이터 등급, 크리에이터 수, 결과물, 콘텐츠 사용권에 따라 달라집니다. 저희는 정액 요금을 제시하는 대신 브랜드의 예산과 목표에 맞춰 캠페인마다 범위를 설계합니다."
          },
          {
            "question": "하나의 캠페인으로 독일, 오스트리아, 스위스를 모두 다룰 수 있나요?",
            "answer": "네. 언어가 같아 DACH 캠페인은 효율적입니다. 저희는 하나의 프레임워크를 기획하고, 도움이 되는 경우 국가별로 크리에이터를 추가하며, 시장마다 따로 리포팅합니다."
          }
        ]
      },
      "cta": {
        "title": "독일 캠페인을 시작하세요",
        "description": "브랜드와 목표에 맞춰 매칭한 크리에이터와 함께 독일어권 오디언스에게 다가가세요.",
        "buttonLabel": "연락하기",
        "buttonHref": "/contact"
      }
    }
  },
  "france": {
    "path": "/influencer-marketing-france",
    "title": "프랑스 인플루언서 마케팅 | CA Agency",
    "description": "프랑스를 위한 인플루언서 마케팅 에이전시. 프랑스어권 크리에이터를 뷰티 및 스킨케어 브랜드와 연결하며, 규정을 준수하고 광고임을 명확히 표시한 캠페인을 진행합니다.",
    "ogImage": "/images/site/og/influencer-marketing-france-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "France"
      }
    ],
    "content": {
      "hero": {
        "title": "프랑스 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 프랑스를 위한 인플루언서 마케팅 에이전시로, 뷰티 및 스킨케어 브랜드를 Instagram, TikTok, YouTube의 프랑스어권 크리에이터와 연결합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "총 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "프랑스",
          "label": "집중 시장"
        }
      ],
      "intro": {
        "heading": "프랑스 시장을 위한 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "프랑스는 세계에서 가장 까다로운 뷰티 시장 중 하나입니다. 프랑스 소비자는 스킨케어를 잘 알고, 비교 대상이 되는 강력한 자국 브랜드가 있으며, 프랑스어로 된 콘텐츠를 기대합니다. CA Agency는 이러한 오디언스에게 브랜드를 신뢰감 있게 소개할 수 있는 프랑스어권 크리에이터와 함께 프랑스를 위한 인플루언서 캠페인을 기획합니다."
          },
          {
            "text": "프랑스는 또한 대부분의 국가보다 크리에이터 마케팅을 더 엄격하게 규제합니다. 상업적 인플루언서 활동에 관한 2023년 6월 9일 제정된 프랑스 법 이후로, 유료 콘텐츠에는 \"Publicité\" 또는 \"Collaboration commerciale\" 표시를 명확하게 넣어야 하며 일부 제품 카테고리는 제한됩니다. 저희는 크리에이터에게 이 규정을 브리핑하고, 모든 게시물을 게시 전에 검토합니다."
          },
          {
            "text": "저희는 암스테르담의 유럽 지사에서 크리에이터 선정, 계약, 콘텐츠 승인, 콘텐츠 사용권, 리포팅을 담당합니다. 덕분에 브랜드 팀은 프랑스는 물론 이후에 추가하는 인접 시장까지 하나의 창구로 소통할 수 있습니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 프랑스 캠페인에 저희 인플루언서 에이전시를 선택하는 이유",
        "items": [
          {
            "title": "프랑스어 크리에이터",
            "description": "콘텐츠는 다른 시장의 것을 번역하는 것이 아니라, 팔로워가 프랑스에 있는 크리에이터가 프랑스어로 제작합니다."
          },
          {
            "title": "기획 단계부터 규정 준수",
            "description": "모든 브리프에는 프랑스에서 유료 콘텐츠에 요구되는 \"Publicité\" 또는 \"Collaboration commerciale\" 표시가 포함됩니다."
          },
          {
            "title": "뷰티 전문성",
            "description": "저희는 주로 뷰티 및 스킨케어 브랜드와 일하며, 자리 잡은 프랑스 브랜드들 옆에서 새로운 브랜드를 어떻게 포지셔닝할지 알고 있습니다."
          },
          {
            "title": "투명한 리포팅",
            "description": "캠페인을 집행할 때마다 도달, 참여, 클릭, 전환을 명확하게 리포팅합니다."
          }
        ]
      },
      "talents": {
        "title": "프랑스 캠페인을 위한 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 좋은 산업",
        "items": [
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "메이크업 콘텐츠는 뷰티를 관심 있게 지켜보는 프랑스 오디언스에게 강한 성과를 냅니다."
          },
          {
            "icon": "🧴",
            "title": "스킨케어",
            "description": "루틴과 성분 콘텐츠는 신규 스킨케어 브랜드가 약국 인기 제품들 곁에 자리 잡는 데 도움이 됩니다."
          },
          {
            "icon": "👗",
            "title": "패션",
            "description": "스타일링 콘텐츠는 유럽에서 패션 감각이 가장 높은 오디언스 중 하나와 브랜드를 연결합니다."
          }
        ]
      },
      "faq": {
        "title": "프랑스 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "프랑스어권 인플루언서와 협업하나요?",
            "answer": "네. 프랑스 캠페인은 프랑스어로 게시하고 오디언스가 주로 프랑스에 있는 크리에이터에게 브리핑합니다. 같은 방식은 스위스 프랑스어권과 벨기에에도 적용할 수 있습니다."
          },
          {
            "question": "프랑스의 인플루언서 광고 규정은 무엇인가요?",
            "answer": "상업적 인플루언서 활동에 관한 2023년 6월 9일 제정된 프랑스 법은 유료 콘텐츠에 \"Publicité\" 또는 \"Collaboration commerciale\"를 명확하게 표시하도록 요구하며, 특정 제품과 서비스의 홍보를 제한합니다. 저희는 이러한 요건을 모든 브리프에 반영하고, 승인 전에 게시물을 하나하나 확인합니다."
          },
          {
            "question": "프랑스 인플루언서 마케팅에는 어떤 플랫폼이 가장 효과적인가요?",
            "answer": "뷰티, 스킨케어, 패션에서는 Instagram과 TikTok이 앞서 있으며, YouTube는 긴 리뷰와 루틴 콘텐츠에 강합니다. 저희는 브랜드의 오디언스와 목표에 따라 플랫폼 조합을 추천합니다."
          },
          {
            "question": "프랑스 인플루언서 캠페인 비용은 얼마인가요?",
            "answer": "비용은 플랫폼, 크리에이터 등급, 크리에이터 수, 결과물, 콘텐츠 사용권에 따라 달라집니다. 저희는 정액 요금을 제시하는 대신 브랜드의 예산과 목표에 맞춰 캠페인마다 범위를 설계합니다."
          },
          {
            "question": "해외 뷰티 브랜드의 프랑스 진출을 도와줄 수 있나요?",
            "answer": "네. 저희는 한국 뷰티 브랜드를 포함해 프랑스 밖의 브랜드가 알맞은 크리에이터를 선택하고, 프랑스 소비자에 맞게 메시지를 조정하며, 규정을 준수하는 현지 제작 콘텐츠로 런칭하도록 돕습니다."
          }
        ]
      },
      "cta": {
        "title": "프랑스 캠페인을 시작하세요",
        "description": "브랜드와 목표에 맞춰 매칭한 크리에이터와 함께 프랑스 오디언스에게 다가가세요.",
        "buttonLabel": "연락하기",
        "buttonHref": "/contact"
      }
    }
  },
  "switzerland": {
    "path": "/influencer-marketing-switzerland",
    "title": "스위스 인플루언서 마케팅 | CA Agency",
    "description": "스위스를 위한 인플루언서 마케팅 에이전시. 독일어권, 프랑스어권, 이탈리아어권 전역에서 뷰티 및 스킨케어 브랜드의 크리에이터 캠페인을 운영합니다.",
    "ogImage": "/images/site/og/influencer-marketing-switzerland-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Switzerland"
      }
    ],
    "content": {
      "hero": {
        "title": "스위스 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 스위스를 위한 인플루언서 마케팅 에이전시로, 독일어권, 프랑스어권, 이탈리아어권 전역에서 뷰티 및 스킨케어 브랜드의 크리에이터 캠페인을 운영합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "총 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "스위스",
          "label": "집중 시장"
        }
      ],
      "intro": {
        "heading": "다국어 국가 스위스를 위한 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "스위스는 구매력이 높고 여러 언어를 쓰는 작은 시장입니다. 취리히 캠페인에는 독일어권 크리에이터가, 제네바와 로잔에는 프랑스어가, 티치노에는 이탈리아어가 필요합니다. CA Agency는 스위스를 위한 인플루언서 캠페인을 지역별로 기획하므로, 각 오디언스가 자신의 언어로 브랜드를 접하게 됩니다."
          },
          {
            "text": "스위스 소비자는 품질과 절제를 중시하며, 외부에서 들여온 느낌보다 현지인처럼 느껴지는 크리에이터에게 반응합니다. 저희는 팔로워가 실제로 스위스에 있는 크리에이터를 선정하고, 누구든 추천하기 전에 오디언스 데이터를 확인하며, 스위스의 공정성 규정에 맞게 광고임을 명확히 표시합니다."
          },
          {
            "text": "스위스는 독일, 오스트리아, 프랑스와 언어를 공유하기 때문에, 스위스 캠페인은 단독으로 진행할 수도 있고 더 넓은 DACH 또는 유럽 플랜 안에 포함할 수도 있습니다. 암스테르담의 유럽 지사가 하나의 팀으로 크리에이터, 계약, 승인, 리포팅을 관리합니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 스위스 캠페인에 저희 인플루언서 에이전시를 선택하는 이유",
        "items": [
          {
            "title": "세 개의 언어권",
            "description": "스위스의 독일어권, 프랑스어권, 이탈리아어권을 따로 기획하고 각각 리포팅합니다."
          },
          {
            "title": "실제 스위스 오디언스",
            "description": "크리에이터의 팔로워가 어디에 거주하는지 확인하므로, 예산이 스위스 내 도달에 쓰입니다."
          },
          {
            "title": "프리미엄 포지셔닝",
            "description": "브랜드에 대한 기대치가 높고 품질을 중시하는 오디언스에 맞춰 콘텐츠를 제작합니다."
          },
          {
            "title": "더 큰 플랜의 일부",
            "description": "스위스 활동은 에이전시를 추가하지 않고도 독일, 오스트리아, 프랑스 캠페인과 연결할 수 있습니다."
          }
        ]
      },
      "talents": {
        "title": "스위스 캠페인을 위한 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 좋은 산업",
        "items": [
          {
            "icon": "🧴",
            "title": "스킨케어",
            "description": "프리미엄 스킨케어는 품질과 검증된 효과에 비용을 지불하는 스위스 오디언스에 잘 맞습니다."
          },
          {
            "icon": "💄",
            "title": "뷰티",
            "description": "이곳에서는 요란한 홍보보다 신중하고 솔직한 뷰티 콘텐츠가 더 좋은 성과를 냅니다."
          },
          {
            "icon": "⌚",
            "title": "럭셔리 & 라이프스타일",
            "description": "크리에이터 콘텐츠는 프리미엄 제품을 동경을 불러일으키면서도 현실감 있는 일상 속에 담아냅니다."
          }
        ]
      },
      "faq": {
        "title": "스위스 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "스위스의 어느 언어권을 다루나요?",
            "answer": "저희는 스위스의 독일어권, 프랑스어권, 이탈리아어권 캠페인을 기획합니다. 대부분의 브랜드는 독일어권에서 시작해, 전국 도달을 위해 프랑스어권 크리에이터를 추가합니다."
          },
          {
            "question": "독일이나 프랑스 캠페인을 스위스에서 다시 활용할 수 있나요?",
            "answer": "부분적으로 가능합니다. 언어는 그대로 쓸 수 있지만, 스위스 오디언스는 스위스에 거주하는 크리에이터에게 가장 잘 반응합니다. 저희는 보통 캠페인 아이디어는 유지하고, 이를 실행할 스위스 크리에이터를 추가합니다."
          },
          {
            "question": "스위스에서 협찬 콘텐츠는 어떻게 표시하나요?",
            "answer": "스위스의 공정성 규정에 따라 유료 크리에이터 콘텐츠는 광고임을 명확히 알아볼 수 있어야 합니다. 저희는 모든 브리프에 명확한 광고 표시를 포함하고, 게시물이 승인되기 전에 이를 확인합니다."
          },
          {
            "question": "스위스 인플루언서 캠페인 비용은 얼마인가요?",
            "answer": "비용은 언어권, 플랫폼, 크리에이터 등급, 크리에이터 수, 콘텐츠 사용권에 따라 달라집니다. 저희는 정액 요금을 제시하는 대신 브랜드의 예산과 목표에 맞춰 캠페인마다 범위를 설계합니다."
          }
        ]
      },
      "cta": {
        "title": "스위스 캠페인을 시작하세요",
        "description": "브랜드에 맞춰 매칭한 크리에이터와 함께 알맞은 언어로 스위스 오디언스에게 다가가세요.",
        "buttonLabel": "연락하기",
        "buttonHref": "/contact"
      }
    }
  },
  "nordics": {
    "path": "/influencer-marketing-nordics",
    "title": "북유럽 인플루언서 마케팅 | CA Agency",
    "description": "북유럽을 위한 인플루언서 마케팅 에이전시. 스웨덴, 노르웨이, 핀란드, 덴마크에서 뷰티 및 스킨케어 브랜드의 크리에이터 캠페인을 시장별로 기획해 운영합니다.",
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
        "title": "북유럽 시장을 위한\n인플루언서 마케팅 에이전시",
        "subtitle": "CA Agency는 북유럽을 위한 인플루언서 마케팅 에이전시로, 스웨덴, 노르웨이, 핀란드, 덴마크에서 뷰티 및 스킨케어 브랜드의 크리에이터 캠페인을 운영합니다.",
        "primaryButtonLabel": "시작하기",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "작업 보기",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "진행한 캠페인"
        },
        {
          "value": "18M+",
          "label": "총 팔로워"
        },
        {
          "value": "150+",
          "label": "글로벌 브랜드"
        },
        {
          "value": "북유럽",
          "label": "집중 시장"
        }
      ],
      "intro": {
        "heading": "스웨덴, 노르웨이, 핀란드, 덴마크를 위한 인플루언서 마케팅 에이전시",
        "paragraphs": [
          {
            "text": "북유럽 국가들은 유럽에서 가장 디지털화된 시장에 속합니다. 스웨덴, 노르웨이, 핀란드, 덴마크의 오디언스는 Instagram, TikTok, YouTube에서 많은 시간을 보내고, 온라인 쇼핑에 익숙하며, 브랜드가 솔직하고 절제되어 있기를 기대합니다. CA Agency는 이러한 기대를 중심으로 북유럽을 위한 인플루언서 캠페인을 기획합니다."
          },
          {
            "text": "북유럽 국가는 저마다 고유한 언어와 크리에이터가 있으며, 스웨덴 크리에이터가 자동으로 노르웨이나 핀란드에 도달하는 것은 아닙니다. 저희는 스톡홀름, 오슬로, 헬싱키, 코펜하겐을 각각 별개의 오디언스로 기획하고, 시장별로 현지어 콘텐츠와 영어 콘텐츠 중에서 선택하며, 각국의 소비자 규정에 맞게 광고임을 명확히 표시합니다."
          },
          {
            "text": "북유럽 소비자는 성분, 지속가능성, 투명성을 중요하게 여기므로, 이 지역은 스킨케어와 클린 뷰티에 잘 맞습니다. 저희는 암스테르담의 유럽 지사에서 북유럽 한 국가든 네 국가 모두든 크리에이터, 계약, 승인, 리포팅을 관리합니다."
          }
        ]
      },
      "highlights": {
        "title": "브랜드가 북유럽 캠페인에 저희 인플루언서 에이전시를 선택하는 이유",
        "items": [
          {
            "title": "네 개의 시장, 하나의 플랜",
            "description": "스웨덴, 노르웨이, 핀란드, 덴마크를 따로 기획하고 하나의 팀이 관리합니다."
          },
          {
            "title": "솔직하고 절제된 콘텐츠",
            "description": "북유럽 오디언스가 신뢰하는 차분하고 믿음직한 톤에 맞춰 크리에이터에게 브리핑합니다."
          },
          {
            "title": "명확하게 표시한 광고",
            "description": "북유럽의 소비자 당국은 유료 게시물이 명확하게 표시되기를 요구합니다. 모든 브리프에 올바른 표시가 포함됩니다."
          },
          {
            "title": "현지어 또는 영어",
            "description": "브랜드의 오디언스를 기준으로 시장별로 현지어 콘텐츠와 영어 중에서 선택합니다."
          }
        ]
      },
      "talents": {
        "title": "북유럽 캠페인을 위한 크리에이터",
        "buttonLabel": "모든 크리에이터 보기",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "성과가 좋은 산업",
        "items": [
          {
            "icon": "🧴",
            "title": "스킨케어",
            "description": "성분에 밝은 북유럽 소비자는 명확하고 정보 전달 중심인 스킨케어 콘텐츠에 반응합니다."
          },
          {
            "icon": "🌿",
            "title": "클린 뷰티",
            "description": "투명성과 지속가능성에 관한 주장이 중요하며, 크리에이터는 이를 신뢰감 있게 설명하는 데 도움이 됩니다."
          },
          {
            "icon": "🏃",
            "title": "라이프스타일 & 웰니스",
            "description": "일상 루틴 콘텐츠는 활동적이고 야외 활동을 즐기는 북유럽 라이프스타일에 잘 맞습니다."
          }
        ]
      },
      "faq": {
        "title": "북유럽 인플루언서 마케팅, 자주 묻는 질문",
        "items": [
          {
            "question": "북유럽의 어느 국가에서 인플루언서 캠페인을 진행하나요?",
            "answer": "스웨덴, 노르웨이, 핀란드, 덴마크입니다. 캠페인은 한 국가에서 진행할 수도 있고 지역 전체에서 진행할 수도 있으며, 크리에이터는 시장별로 선정합니다."
          },
          {
            "question": "북유럽 캠페인은 영어와 현지어 중 무엇으로 진행해야 하나요?",
            "answer": "둘 다 효과가 있을 수 있습니다. 영어는 북유럽 전역에서 널리 통하지만, 현지어 콘텐츠가 대체로 더 친근하고 신뢰감 있게 느껴집니다. 저희는 브랜드와 오디언스를 기준으로 시장별 조합을 추천합니다."
          },
          {
            "question": "북유럽 국가에서 협찬 콘텐츠는 어떻게 표시하나요?",
            "answer": "각국의 소비자 당국은 유료 콘텐츠가 게시물 시작 부분에서 오디언스가 이해할 수 있는 방식으로 광고임을 명확히 표시하기를 요구합니다. 저희는 모든 브리프에 올바른 문구를 포함하고 승인 전에 이를 확인합니다."
          },
          {
            "question": "크리에이터 한 명으로 지역 전체에 도달할 수 있나요?",
            "answer": "그런 경우는 드뭅니다. 팔로워는 크리에이터의 자국에 집중되어 있으므로, 저희는 보통 시장마다 최소 하나의 크리에이터 그룹을 기획하고 국가별로 따로 리포팅합니다."
          },
          {
            "question": "북유럽 인플루언서 캠페인 비용은 얼마인가요?",
            "answer": "비용은 국가 수, 플랫폼, 크리에이터 등급, 결과물, 콘텐츠 사용권에 따라 달라집니다. 저희는 정액 요금을 제시하는 대신 브랜드의 예산과 목표에 맞춰 캠페인마다 범위를 설계합니다."
          }
        ]
      },
      "cta": {
        "title": "북유럽 캠페인을 시작하세요",
        "description": "브랜드에 맞춰 매칭한 크리에이터와 함께 스웨덴, 노르웨이, 핀란드, 덴마크의 오디언스에게 다가가세요.",
        "buttonLabel": "연락하기",
        "buttonHref": "/contact"
      }
    }
  }
}
