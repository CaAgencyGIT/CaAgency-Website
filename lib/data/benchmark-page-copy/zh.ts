import type { BenchmarkCopy, BenchmarkData, Tier } from '@/lib/data/benchmark-page-copy'

// Simplified Chinese copy of the benchmark page (/zh/influencer-benchmarks-2026).
// Every number comes from the data through `f`, exactly as in the English copy.

const tier = (d: BenchmarkData['tiktok']['tiers'] | BenchmarkData['instagram']['tiers'], name: Tier) =>
  (d as readonly { tier: string; viewsPerFollower: number }[]).find((t) => t.tier === name)!.viewsPerFollower

export const zhBenchmarkCopy: BenchmarkCopy = {
  metaTitle: '2026 年美妆达人基准数据：TikTok 与 Instagram Reels',
  metaDescription: (d, f) =>
    `基于 CA Agency 旗下美妆护肤达人的 ${f.int(d.tiktok.posts)} 条 TikTok 视频和 ${f.int(d.instagram.reels)} 条 Instagram Reels 得出的 2026 年原创基准数据：单位粉丝触达、互动率以及最佳视频时长。`,
  keywords: [
    '2026 网红营销基准数据',
    'TikTok 美妆达人数据',
    'Instagram Reels 基准数据',
    'TikTok 粉丝播放比',
    '2026 网红互动率',
    'TikTok 最佳视频时长',
  ],
  eyebrow: (date) => `CA Agency 研究 · ${date}`,
  title: '2026 年美妆达人基准数据：TikTok 与 Instagram Reels',
  intro: (d, f) =>
    `一位美妆或护肤达人每条内容实际能取得怎样的效果？这些基准数据来自 CA Agency 自有达人阵容中 ${d.tiktok.creators} 位达人的 ${f.int(d.tiktok.posts)} 条 TikTok 视频，以及 ${d.instagram.creators} 位达人的 ${f.int(d.instagram.reels)} 条 Instagram Reels，采用公开的播放量、点赞数和评论数。所有数字均为中位数，因此无法识别出任何一位达人，也不会有单个大账号左右结果。`,
  findingsEyebrow: '主要发现',
  findingsTitle: '值得了解的五个数字',
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
        title: '一条典型的 TikTok 视频约能触达一半粉丝',
        body: `每条视频的播放量中位数相当于粉丝数的 ${f.pct(tt.viewsPerFollower)}。账号越大，这一比例越低：粉丝 10 万以下为 ${f.pct(tier(tt.tiers, 'under 100K'))}，10 万–50 万为 ${f.pct(tier(tt.tiers, '100K–500K'))}，50 万以上为 ${f.pct(tier(tt.tiers, '500K+'))}。`,
      },
      {
        title: 'Instagram Reels 在大账号上依然保持触达',
        body: `一条典型的 Reel 可触达 ${f.pct(ig.viewsPerFollower)} 的粉丝：10 万以下为 ${f.pct(tier(ig.tiers, 'under 100K'))}，10 万–50 万为 ${f.pct(tier(ig.tiers, '100K–500K'))}，50 万以上仍有 ${f.pct(tier(ig.tiers, '500K+'))}。`,
      },
      {
        title: '极短和较长的 TikTok 视频表现优于中等时长',
        body: `与每位达人自己的典型视频相比，${label.length(shortest.length)} 的短片播放量为其 ${f.times(shortest.vsCreatorTypical)}，${label.length(longest.length)} 的视频为 ${f.times(longest.vsCreatorTypical)}。${label.length(weakest.length)} 是表现最弱的时长（${f.times(weakest.vsCreatorTypical)}），但大多数视频（${f.pct(commonest.shareOfVideos)}）恰恰是 ${label.length(commonest.length)}。`,
      },
      {
        title: '的 TikTok 视频播放量超过 10 万',
        body: `${f.pct(tt.shareOver1M)} 的视频播放量超过 100 万。典型达人每周发布约 ${Math.round(tt.postsPerWeek)} 条 TikTok 视频。`,
      },
      {
        title: 'TikTok 单次播放互动率',
        body: `点赞加评论相当于 TikTok 播放量的 ${f.pct(tt.engagementPerView)}，以及 Reels 播放量的 ${f.pct(ig.engagementPerView)}（相当于粉丝数的 ${f.pct(ig.engagementPerFollower)}）。`,
      },
    ]
  },
  tiktokEyebrow: 'TikTok',
  tiktokTitle: '按账号规模划分的触达与互动',
  tiktokHead: ['粉丝数', '达人数', '单条视频播放量中位数', '播放量占粉丝数比例', '单次播放互动率'],
  instagramEyebrow: 'Instagram',
  instagramTitle: '按账号规模划分的 Reels 数据',
  instagramHead: ['粉丝数', '达人数', '单条 Reel 播放量中位数', '播放量占粉丝数比例', '粉丝互动率'],
  lengthTitle: '按视频时长划分的播放量',
  lengthHead: ['时长', '视频占比', '相对达人典型视频的播放量'],
  tier: { 'under 100K': '10 万以下', '100K–500K': '10 万–50 万', '500K+': '50 万以上' },
  length: { '≤10 s': '≤10 秒', '11–20 s': '11–20 秒', '21–30 s': '21–30 秒', '31–60 s': '31–60 秒', 'over 60 s': '60 秒以上' },
  methodTitle: '我们如何测量',
  method: (d, f, p) => [
    '达人：CA Agency 旗下达人阵容，以美妆、护肤和生活方式为主，分布在阿联酋、欧洲、美国、南非和中亚。',
    `TikTok：${d.tiktok.creators} 位达人，${f.date(p.from)} 至 ${f.date(p.to)} 期间发布的 ${f.int(d.tiktok.posts)} 条视频（该期间的全部历史内容）。`,
    `Instagram：${d.instagram.creators} 位达人，${f.int(d.instagram.reels)} 条 Reels（每位达人最近发布的 Reels）。`,
    `公开数据读取于 ${f.date(p.readOn)}。最近 7 天内发布的内容因数据仍在增长而未计入。`,
    '先计算每位达人的中位数，再计算所有达人之间的中位数。视频时长以每位达人自己的典型视频为参照进行比较。',
  ],
  caveatsTitle: '解读时请注意',
  caveats: (d, _f, bands) => [
    '这是一家机构按表现挑选的达人阵容，并非整个市场：请把这些数字理解为优秀美妆达人能达到的水平，而不是行业平均值。',
    `${d.tiktok.creators} 到 ${d.instagram.creators} 位达人只是一个中等规模的样本；每个粉丝区间基于 ${bands.min} 到 ${bands.max} 位达人。`,
    `Instagram 互动数据不包括隐藏点赞数的 ${d.instagram.creators - d.instagram.creatorsWithLikes} 位达人。`,
  ],
  license: { before: '可依据 ', after: ' 免费引用，请注明来源 CA Agency。' },
  faqEyebrow: '常见问题',
  faqTitle: '关于这些基准数据的问题',
  faq: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    return [
      {
        question: '2026 年美妆达人一条 TikTok 视频一般能有多少播放量？',
        answer: `在 CA Agency 的达人阵容中，TikTok 视频播放量的中位数相当于达人粉丝数的 ${f.pct(tt.viewsPerFollower)}。粉丝 10 万以下的达人约为 ${f.pct(tier(tt.tiers, 'under 100K'))}，50 万以上的达人约为 ${f.pct(tier(tt.tiers, '500K+'))}。${f.pct(tt.shareOver100K)} 的视频播放量超过 10 万。`,
      },
      {
        question: 'Instagram Reels 和 TikTok 哪个能触达更多粉丝？',
        answer: `从这组数据看，随着账号变大，Reels 的触达保持得更好：一条典型的 Reel 可触达 ${f.pct(ig.viewsPerFollower)} 的粉丝，粉丝 50 万以上的账号仍有 ${f.pct(tier(ig.tiers, '500K+'))}，而同等规模的 TikTok 账号为 ${f.pct(tier(tt.tiers, '500K+'))}。`,
      },
      {
        question: '美妆内容的 TikTok 视频多长最好？',
        answer: `极短的短片（${label.length(shortest.length)}）播放量为每位达人典型视频的 ${f.times(shortest.vsCreatorTypical)}，较长的视频（${label.length(longest.length)}）为 ${f.times(longest.vsCreatorTypical)}，而 ${label.length(weakest.length)} 的表现最差，为 ${f.times(weakest.vsCreatorTypical)}。时长只是众多因素之一：开头吸引力、选题和发布时间同样重要。`,
      },
      {
        question: '2026 年美妆达人的互动率多少算好？',
        answer: `对于我们达人阵容中的中位数达人，点赞加评论在 TikTok 上相当于播放量的 ${f.pct(tt.engagementPerView)}，在 Instagram Reels 上相当于播放量的 ${f.pct(ig.engagementPerView)}（相当于粉丝数的 ${f.pct(ig.engagementPerFollower)}）。`,
      },
      {
        question: '我可以引用这些数据吗？',
        answer: '可以。这些数据依据 CC BY 4.0 发布：引用时请注明来源并附上 CA Agency 的链接（caagency.com/influencer-benchmarks-2026）。',
      },
    ]
  },
  ctaTitle: '用真实数据规划您的营销活动',
  cta: {
    before: '在我们的',
    link: '案例研究',
    after: '中了解这些达人为品牌带来的效果，或者告诉我们您的新品发布计划，我们会为您匹配合适的达人。',
  },
  ctaButton: '开启您的营销活动',
  translationNote: '本页为译文，原文为 ',
}
