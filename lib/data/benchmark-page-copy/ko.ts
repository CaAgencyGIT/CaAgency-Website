import type { BenchmarkCopy, BenchmarkData, Tier } from '@/lib/data/benchmark-page-copy'

// Korean copy of the benchmark page. Every number comes from the data through
// `f`; only the fixed thresholds of the English (100,000 / one million / 7 days)
// are written out, the Korean way.

const tier = (d: BenchmarkData['tiktok']['tiers'] | BenchmarkData['instagram']['tiers'], name: Tier) =>
  (d as readonly { tier: string; viewsPerFollower: number }[]).find((t) => t.tier === name)!.viewsPerFollower

export const koBenchmarkCopy: BenchmarkCopy = {
  metaTitle: '2026 뷰티 크리에이터 벤치마크: TikTok과 Instagram Reels',
  metaDescription: (d, f) =>
    `CA Agency 소속 뷰티·스킨케어 크리에이터의 TikTok 영상 ${f.int(d.tiktok.posts)}개와 Instagram Reels ${f.int(d.instagram.reels)}개를 분석한 2026년 자체 벤치마크입니다. 팔로워 대비 도달률, 참여율, 가장 효과적인 영상 길이를 확인할 수 있습니다.`,
  keywords: [
    '2026 인플루언서 마케팅 벤치마크',
    '뷰티 크리에이터 틱톡 조회수',
    '인스타그램 릴스 평균 도달률',
    '틱톡 팔로워 대비 조회수',
    '2026 인플루언서 참여율 평균',
    '틱톡 영상 최적 길이',
  ],
  eyebrow: (date) => `CA Agency 리서치 · ${date}`,
  title: '2026 뷰티 크리에이터 벤치마크: TikTok과 Instagram Reels',
  intro: (d, f) =>
    `뷰티·스킨케어 크리에이터는 게시물 하나로 실제로 어느 정도의 성과를 낼까요? 이 벤치마크는 CA Agency 소속 크리에이터 중 ${d.tiktok.creators}명의 TikTok 영상 ${f.int(d.tiktok.posts)}개와 ${d.instagram.creators}명의 Instagram Reels ${f.int(d.instagram.reels)}개를 대상으로, 공개된 조회수, 좋아요 수, 댓글 수를 바탕으로 산출했습니다. 모든 수치는 중앙값이므로 특정 크리에이터를 식별할 수 없으며, 규모가 큰 계정 하나가 결과를 왜곡할 수도 없습니다.`,
  findingsEyebrow: '핵심 결과',
  findingsTitle: '알아 두어야 할 다섯 가지 수치',
  findings: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    const commonest = [...L].sort((a, b) => b.shareOfVideos - a.shareOfVideos)[0]
    return [
      {
        title: '일반적인 TikTok 영상은 팔로워 수의 약 절반에 도달합니다',
        body: `영상당 조회수 중앙값은 팔로워 수의 ${f.pct(tt.viewsPerFollower)}입니다. 이 비율은 계정이 커질수록 낮아집니다. 팔로워 10만 미만은 ${f.pct(tier(tt.tiers, 'under 100K'))}, 10만–50만은 ${f.pct(tier(tt.tiers, '100K–500K'))}, 50만 이상은 ${f.pct(tier(tt.tiers, '500K+'))}입니다.`,
      },
      {
        title: 'Instagram Reels는 계정이 커져도 도달률을 유지합니다',
        body: `일반적인 Reel은 팔로워의 ${f.pct(ig.viewsPerFollower)}에게 도달합니다. 10만 미만은 ${f.pct(tier(ig.tiers, 'under 100K'))}, 10만–50만은 ${f.pct(tier(ig.tiers, '100K–500K'))}이며, 50만 이상에서도 여전히 ${f.pct(tier(ig.tiers, '500K+'))}입니다.`,
      },
      {
        title: '아주 짧거나 긴 TikTok 영상이 중간 길이보다 성과가 좋습니다',
        body: `각 크리에이터의 평소 영상과 비교하면 ${label.length(shortest.length)} 클립은 ${f.times(shortest.vsCreatorTypical)}, ${label.length(longest.length)} 영상은 ${f.times(longest.vsCreatorTypical)}의 조회수를 얻습니다. ${label.length(weakest.length)} 구간이 가장 약한 길이(${f.times(weakest.vsCreatorTypical)})이지만, 가장 많은 영상(${f.pct(commonest.shareOfVideos)})이 ${label.length(commonest.length)} 구간에 속합니다.`,
      },
      {
        title: 'TikTok 영상 중 조회수 10만 회를 넘는 비율',
        body: `${f.pct(tt.shareOver1M)}는 조회수 100만 회를 넘습니다. 일반적인 크리에이터는 일주일에 약 ${Math.round(tt.postsPerWeek)}개의 TikTok 영상을 게시합니다.`,
      },
      {
        title: 'TikTok 조회수 대비 참여율',
        body: `좋아요와 댓글을 합하면 TikTok 조회수의 ${f.pct(tt.engagementPerView)}, Reel 조회수의 ${f.pct(ig.engagementPerView)}(팔로워 대비 ${f.pct(ig.engagementPerFollower)})에 해당합니다.`,
      },
    ]
  },
  tiktokEyebrow: 'TikTok',
  tiktokTitle: '계정 규모별 도달률과 참여율',
  tiktokHead: ['팔로워', '크리에이터 수', '영상당 조회수 중앙값', '팔로워 대비 조회수 비율', '조회수 대비 참여율'],
  instagramEyebrow: 'Instagram',
  instagramTitle: '계정 규모별 Reels 성과',
  instagramHead: ['팔로워', '크리에이터 수', 'Reel당 조회수 중앙값', '팔로워 대비 조회수 비율', '팔로워 대비 참여율'],
  lengthTitle: '영상 길이별 조회수',
  lengthHead: ['길이', '영상 비중', '크리에이터 평소 영상 대비 조회수'],
  tier: { 'under 100K': '10만 미만', '100K–500K': '10만–50만', '500K+': '50만 이상' },
  length: { '≤10 s': '10초 이하', '11–20 s': '11–20초', '21–30 s': '21–30초', '31–60 s': '31–60초', 'over 60 s': '60초 초과' },
  methodTitle: '측정 방법',
  method: (d, f, p) => [
    '크리에이터: CA Agency 소속 크리에이터로, 주로 뷰티, 스킨케어, 라이프스타일 분야이며 UAE, 유럽, 미국, 남아프리카공화국, 중앙아시아에서 활동합니다.',
    `TikTok: 크리에이터 ${d.tiktok.creators}명, ${f.date(p.from)}부터 ${f.date(p.to)}까지 게시된 영상 ${f.int(d.tiktok.posts)}개(해당 기간의 전체 게시물).`,
    `Instagram: 크리에이터 ${d.instagram.creators}명, Reels ${f.int(d.instagram.reels)}개(각 크리에이터의 최근 Reels).`,
    `공개 수치는 ${f.date(p.readOn)} 기준으로 수집했습니다. 최근 7일 이내의 게시물은 수치가 아직 증가하는 중이므로 제외했습니다.`,
    '크리에이터별 중앙값을 구한 뒤 전체 크리에이터의 중앙값을 산출했습니다. 영상 길이는 각 크리에이터의 평소 영상과 비교했습니다.',
  ],
  caveatsTitle: '해석 시 유의 사항',
  caveats: (d, _f, bands) => [
    '이 데이터는 시장 전체가 아니라 성과를 기준으로 선별한 한 에이전시의 크리에이터 명단입니다. 업계 평균이 아니라 역량 있는 뷰티 크리에이터가 달성하는 수치로 이해해 주십시오.',
    `크리에이터 ${d.tiktok.creators}명에서 ${d.instagram.creators}명은 많지 않은 표본이며, 팔로워 구간마다 ${bands.min}명에서 ${bands.max}명의 크리에이터를 기반으로 합니다.`,
    `Instagram 참여율에서는 좋아요 수를 숨긴 크리에이터 ${d.instagram.creators - d.instagram.creatorsWithLikes}명을 제외했습니다.`,
  ],
  license: { before: 'CA Agency를 출처로 밝히면 ', after: ' 라이선스에 따라 자유롭게 인용할 수 있습니다.' },
  faqEyebrow: '자주 묻는 질문',
  faqTitle: '이 벤치마크에 대한 질문',
  faq: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    return [
      {
        question: '2026년 뷰티 크리에이터는 TikTok 영상 하나당 조회수가 얼마나 나오나요?',
        answer: `CA Agency 소속 크리에이터 기준으로, TikTok 영상의 조회수 중앙값은 크리에이터 팔로워 수의 ${f.pct(tt.viewsPerFollower)}입니다. 팔로워 10만 미만 크리에이터는 약 ${f.pct(tier(tt.tiers, 'under 100K'))}, 50만 이상 크리에이터는 약 ${f.pct(tier(tt.tiers, '500K+'))}에 도달합니다. 영상의 ${f.pct(tt.shareOver100K)}는 조회수 10만 회를 넘습니다.`,
      },
      {
        question: 'Instagram Reels와 TikTok 중 어느 쪽이 팔로워에게 더 많이 도달하나요?',
        answer: `이 데이터에서는 계정이 커질수록 Reels가 도달률을 더 잘 유지합니다. 일반적인 Reel은 팔로워의 ${f.pct(ig.viewsPerFollower)}에게 도달하고, 팔로워 50만 이상 계정에서도 ${f.pct(tier(ig.tiers, '500K+'))}를 유지하는 반면, 같은 규모의 TikTok은 ${f.pct(tier(tt.tiers, '500K+'))}입니다.`,
      },
      {
        question: '뷰티 콘텐츠에 가장 좋은 TikTok 영상 길이는 몇 초인가요?',
        answer: `각 크리에이터의 평소 영상 대비, 아주 짧은 클립(${label.length(shortest.length)})은 ${f.times(shortest.vsCreatorTypical)}, 긴 영상(${label.length(longest.length)})은 ${f.times(longest.vsCreatorTypical)}의 조회수를 얻었고, ${label.length(weakest.length)} 구간은 ${f.times(weakest.vsCreatorTypical)}로 가장 낮았습니다. 길이는 여러 요인 중 하나일 뿐이며, 도입부, 주제, 게시 시점도 중요합니다.`,
      },
      {
        question: '2026년 뷰티 크리에이터의 좋은 참여율은 어느 정도인가요?',
        answer: `당사 소속 크리에이터의 중앙값 기준으로, 좋아요와 댓글을 합한 수치는 TikTok에서 조회수의 ${f.pct(tt.engagementPerView)}, Instagram Reels에서 조회수의 ${f.pct(ig.engagementPerView)}(팔로워 대비 ${f.pct(ig.engagementPerFollower)})였습니다.`,
      },
      {
        question: '이 수치를 인용해도 되나요?',
        answer: '네. 이 수치는 CC BY 4.0 라이선스로 공개되어 있습니다. 인용 시 CA Agency를 출처로 표기하고 링크(caagency.com/influencer-benchmarks-2026)를 함께 남겨 주십시오.',
      },
    ]
  },
  ctaTitle: '실제 데이터를 바탕으로 캠페인을 계획하세요',
  cta: {
    before: '이 크리에이터들이 브랜드와 함께 어떤 성과를 냈는지 ',
    link: '사례 연구',
    after: '에서 확인하시거나, 출시 계획을 알려 주시면 꼭 맞는 크리에이터를 연결해 드립니다.',
  },
  ctaButton: '캠페인 시작하기',
  translationNote: '이 페이지는 번역본이며, 원문은 영어로 작성되었습니다. 원문: ',
}
