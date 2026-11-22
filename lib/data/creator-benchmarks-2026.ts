// Figures for /influencer-benchmarks-2026, computed on 22 Nov 2026 from CA Agency's own reads of its
// roster's public TikTok and Instagram counts (finance repo data: automation/data/benchmark-2026/compute.py).
// Medians per creator, then across creators. Percentages are already ×100. Do not edit by hand: rerun the
// script and regenerate, so the page never drifts from the computed numbers.

export const BENCHMARKS_READ_ON = '2026-11-22'
export const TIKTOK_PERIOD = { from: '2025-11-22', to: '2026-11-15' }

export const creatorBenchmarks2026 = {
  "tiktok": {
    "creators": 13,
    "posts": 2982,
    "viewsPerFollower": 47.0,
    "engagementPerView": 4.1,
    "postsPerWeek": 3.9,
    "shareOver100K": 44.0,
    "shareOver1M": 8.6,
    "tiers": [
      {
        "tier": "under 100K",
        "creators": 5,
        "medianViews": 48200,
        "viewsPerFollower": 70.0,
        "engagementPerView": 1.2
      },
      {
        "tier": "100K–500K",
        "creators": 4,
        "medianViews": 99250,
        "viewsPerFollower": 43.0,
        "engagementPerView": 4.6
      },
      {
        "tier": "500K+",
        "creators": 4,
        "medianViews": 90850,
        "viewsPerFollower": 14.0,
        "engagementPerView": 5.9
      }
    ],
    "lengths": [
      {
        "length": "≤10 s",
        "shareOfVideos": 16.0,
        "vsCreatorTypical": 1.2
      },
      {
        "length": "11–20 s",
        "shareOfVideos": 45.0,
        "vsCreatorTypical": 0.88
      },
      {
        "length": "21–30 s",
        "shareOfVideos": 10.0,
        "vsCreatorTypical": 0.79
      },
      {
        "length": "31–60 s",
        "shareOfVideos": 15.0,
        "vsCreatorTypical": 0.87
      },
      {
        "length": "over 60 s",
        "shareOfVideos": 13.0,
        "vsCreatorTypical": 1.43
      }
    ]
  },
  "instagram": {
    "creators": 22,
    "reels": 968,
    "creatorsWithLikes": 18,
    "viewsPerFollower": 65.0,
    "engagementPerView": 1.7,
    "engagementPerFollower": 0.9,
    "tiers": [
      {
        "tier": "under 100K",
        "creators": 4,
        "medianViews": 42997,
        "viewsPerFollower": 71.0,
        "engagementPerFollower": 2.4
      },
      {
        "tier": "100K–500K",
        "creators": 11,
        "medianViews": 125494,
        "viewsPerFollower": 66.0,
        "engagementPerFollower": 0.9
      },
      {
        "tier": "500K+",
        "creators": 7,
        "medianViews": 409136,
        "viewsPerFollower": 61.0,
        "engagementPerFollower": 0.6
      }
    ]
  }
} as const
