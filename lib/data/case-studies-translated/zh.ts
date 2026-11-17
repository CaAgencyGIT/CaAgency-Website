import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import type { CaseStudyCopy } from '@/lib/data/case-studies-translated'

// Chinese copy for the case-study pages, served at /zh/case-studies/<slug>.
// Translated from lib/data/case-studies.ts (and creator-cases, profile-cases).
// Plain data: `studies` is keyed by the English slug.

export const ui: CaseStudyUi = {
  "eyebrowSuffix": "案例研究",
  "brand": "品牌",
  "platforms": "平台",
  "creator": "创作者",
  "services": "服务",
  "theBrief": "简报",
  "ourApproach": "我们的做法",
  "theOutcome": "成果",
  "overview": "概览",
  "inTheVideo": "视频内容",
  "inThePost": "帖子内容",
  "highlights": "亮点",
  "moreCaseStudies": "更多案例研究",
  "viewCaseStudy": "查看案例研究",
  "detailCtaTitle": "打造同样水准的成果",
  "detailCtaText": "向我们介绍您的品牌，我们将为您的下一场营销活动匹配合适的创作者。",
  "startCampaign": "开启您的营销活动",
  "viewAllWork": "查看全部作品",
  "watchTheWork": "观看作品",
  "seoTitleBrand": "{brand} 网红营销案例研究",
  "seoTitleCreator": "{brand} × {creator} 案例研究",
  "indexEyebrow": "案例研究",
  "indexHeading": "作品，以及背后的过程",
  "indexIntro": "每一支营销活动视频的背后，都有一份简报、一次创作者匹配和一套制作流程。这些案例研究展示了我们如何为美妆、护肤和科技品牌开展网红营销活动，从第一次沟通到最终交付。",
  "indexTitle": "网红营销案例研究",
  "indexDescription": "了解 CA Agency 如何为 YSL Beauty、NARS、HONOR 和 Mixsoon 等品牌开展网红营销活动：简报、做法，以及作品本身。",
  "indexCtaTitle": "下一个可能就是您的品牌",
  "indexCtaText": "告诉我们您要推出什么，我们将为您匹配合适的创作者。",
  "stillAlt": "{brand} 营销活动视频画面",
  "logoAlt": "{brand} 标志"
}

export const verticals: Record<string, string> = {
  "Beauty E-commerce": "美妆电商",
  "Beauty Retail": "美妆零售",
  "Beauty Tech": "美妆科技",
  "Clean Beauty": "纯净美妆",
  "Color Cosmetics": "色彩彩妆",
  "Consumer Tech": "消费科技",
  "Haircare": "护发",
  "K-Beauty Retail": "韩国美妆零售",
  "K-Beauty Skincare": "韩国护肤",
  "Luxury Beauty": "奢华美妆",
  "Makeup": "彩妆",
  "Premium Skincare": "高端护肤",
  "Prestige Beauty": "高端美妆",
  "Skincare": "护肤"
}

export const services: Record<string, string> = {
  "Brand-safety review": "品牌安全审核",
  "Campaign management": "营销活动管理",
  "Concept development": "创意构思",
  "Content production": "内容制作",
  "Creator matching": "创作者匹配",
  "Talent management": "达人管理",
  "Usage rights": "使用权"
}

export const studies: Record<string, CaseStudyCopy> = {
  "honor-smartphone-launch": {
    "title": "HONOR 创作者合作",
    "summary": "一支以故事为主线的智能手机内容，展现 HONOR 手机在日常时刻中的样子，从给朋友发消息到对镜自拍。",
    "brief": "HONOR 希望新款智能手机出现在真实的日常使用中，而不是通过一张参数表来呈现，并用贴近生活、带有本地特色的语气讲述故事。这次上市面向该地区年轻、以社交平台为先的受众，他们最容易被用自己的语言讲述的、有共鸣的故事打动。简报的要求是让手机成为日常生活的一部分，通过使用来展示它的设计和相机，并保持轻松、符合平台原生风格的调性。",
    "approach": "创作者围绕自己的一天搭建了一段简短的叙事：梳妆准备、用当地方言的消息气泡和朋友聊天、开箱新手机，再拍一张对镜自拍。手机自然地出现在每个场景中，设计和相机是通过使用展示出来的，而不是靠讲解。",
    "outcome": "HONOR 获得了以故事驱动的创作者内容，让这款手机成为日常生活的一部分。内容贴近生活的调性适合自然流量渠道，也适合观感原生的付费投放。"
  },
  "ysl-beauty-campaign": {
    "title": "YSL Beauty 创作者营销活动",
    "summary": "既保留 YSL 的精致质感，又能自然融入创作者主页的奢华美妆内容。",
    "brief": "奢华美妆讲究平衡：内容既要守住品牌的高端调性，又要像创作者真心愿意发布的东西。YSL Beauty 需要能同时做到这两点的短视频。",
    "approach": "我们选择了一位自身审美本就与品牌相近的美妆创作者，包括布光、调性和质感，这样赞助内容不会与她的主页脱节。以上妆为主的镜头让产品始终留在画面中，并近距离展示质地和上妆效果。",
    "outcome": "YSL Beauty 获得了在竖屏、有声格式下依然保持高端观感的创作者内容，这类素材既能在创作者的频道上自然发布，也能由品牌方用作付费社交广告。"
  },
  "kylie-cosmetics-campaign": {
    "title": "Kylie Cosmetics 创作者营销活动",
    "summary": "一支聚焦唇妆的教程，展示 Kylie Cosmetics 的唇线笔加唇妆组合，打造轮廓清晰、有光泽的裸色唇。",
    "brief": "Kylie Cosmetics 以唇妆起家，因此内容需要清晰、快速地展示这一标志性妆容，并让观众可以照着做。Kylie Cosmetics 的受众期待精致、紧跟潮流的内容，也很了解这个品牌，所以挑战在于呈现一个有当下感的妆容，同时让产品始终清晰对焦。视频需要简短、容易模仿，并在视觉上与品牌的光泽感审美保持一致。",
    "approach": "创作者以大特写拍摄，先用 Kylie Cosmetics 唇线笔勾勒唇形，再叠加颜色和光泽，每一步都清晰可见。均匀的布光、干净的背景和一件简单的黑色上衣，让注意力集中在产品和妆效上，最后她对着镜头停留展示成果，让观众看到完整妆容。",
    "outcome": "Kylie Cosmetics 获得了一支干净、可重复操作的唇妆教程，展示了产品的使用过程和最终效果。简洁的造型让它在创作者的频道上行之有效，也便于改编用于付费投放。"
  },
  "yesstyle-collaboration": {
    "title": "YesStyle 创作者合作",
    "summary": "一套分步骤的毛孔护理流程，全部使用 YesStyle 上有售的 K-beauty 畅销产品。",
    "brief": "YesStyle 是选购 K-beauty 的目的地，因此内容需要展示购物者在这里能搭配出多么丰富的组合。目标是一套科普型护肤流程，用几款产品、按一个容易跟做的顺序，解决一个常见困扰：明显的毛孔。作为零售商而非单一品牌，当内容能同时把观众引向多款产品时，YesStyle 受益最大。简报要求搭建一套前后逻辑清晰的流程，展示来自不同品牌、且都能在 YesStyle 买到的产品，并加入可追踪的优惠，让内容既能按触达、也能按销售来衡量。",
    "approach": "Georgii Galaev 以“perfect pores?”这个问题开场，然后在画面上给每一步编号。他用 ma:nyo Herbgreen Cleansing Oil 在黑头部位按摩整整一分钟，接着把 Anua Rice Enzyme Brightening Cleansing Powder 在手中打出泡沫后使用，再敷上 Medicube Zero Pore Blackhead Mud Mask，最后用 Medicube PDRN Pink Collagen Capsule Cream 收尾。特写取景加上他自己的折扣码，把一套护肤流程变成了一份现成的购物清单。",
    "outcome": "YesStyle 获得了一支实用性很高的教程，在一支视频里展示了其商品目录中的多个品牌，并给了观众一个明确的购买理由。编号步骤和创作者折扣码让它在收藏和可追踪的转化两方面都行之有效。"
  },
  "insta360-campaign": {
    "title": "Insta360 X 创作者营销活动",
    "summary": "以动感为主的创作者内容，让 Insta360 X 相机自己展示自己。",
    "brief": "只要画面能展现它的本领，360° 相机就是自己最好的推销员。Insta360 需要的创作者内容，是让产品拍出的画面成为主角，而不是一支对着镜头讲解的测评。",
    "approach": "创意让相机动起来：由创作者拍摄的画面，展示了 X 系列为人熟知的那些看似不可能的角度和重新取景。设备在使用中出镜，成果则在剪辑中自己说话。",
    "outcome": "Insta360 获得了“用展示代替讲述”的创作者视频，内容本身就是产品的证明，对相机硬件来说，这是最有力的形式。"
  },
  "mixsoon-skincare": {
    "title": "Mixsoon K-Beauty 营销活动",
    "summary": "一支对镜讲解的成分科普视频，介绍 Mixsoon 的 Bean Copper Peptide Firming Serum，面向男士护肤。",
    "brief": "Mixsoon 希望触达对抗老护肤感兴趣的男性，用清晰、直接的语言说明 Bean Copper Peptide Firming Serum 的作用。男性是增长很快的护肤受众，但往往需要更清楚的解释和直截了当的语气。简报要求内容直接、可信，讲清这款精华如何起作用、它的关键成分为什么重要，同时不要让人觉得这是一支拍给别人看的美妆广告。",
    "approach": "Jay Sadiq 手持精华，直接对着镜头讲解它的主要成分。画面上的引述文字逐一拆解功效：铜肽（GHK-Cu）有助于肌肤看起来更紧致并支持胶原蛋白生成，发酵豆类精华则提供补水和滋养。最后他上脸涂抹，展示它多么容易融入日常理容流程。",
    "outcome": "Mixsoon 获得了可信、以科普为主的内容，为品牌打开了男士护肤受众。清晰的成分拆解让它既适合自然发布，也适合用作效果广告素材。"
  },
  "kiko-milano-campaign": {
    "title": "Kiko Milano × @_idareen_",
    "summary": "CA Agency 达人 @_idareen_ 出镜 Kiko Milano 营销活动，带来以上妆为主的美妆内容。",
    "brief": "Kiko Milano 希望由一位在美妆领域真正有公信力的创作者，在互动活跃的受众面前演示产品，内容首先是一支教程，其次才是广告。",
    "approach": "我们为品牌匹配了旗下达人 @_idareen_，她的美妆内容风格与 Kiko 亲民又不失魅力的定位相契合，并由我们全程管理这次合作：简报、制作、品牌审核和交付。",
    "outcome": "这次合作产出了精致、以上妆为主的营销活动内容，出自我们自己旗下的创作者，这就是全方位服务的模式：品牌端和达人端都由 CA Agency 负责。"
  },
  "juvias-place-campaign": {
    "title": "Juvia's Place × @beatrixramosaj",
    "summary": "CA Agency 达人 @beatrixramosaj 为 Juvia's Place 打造的、以显色度为主角的创作者内容。",
    "brief": "Juvia's Place 因浓郁、高显色的色彩而受人喜爱。简报要求通过一位妆容受到受众信任的创作者，把这种显色效果呈现在镜头前。",
    "approach": "我们的达人 @beatrixramosaj 围绕试色和上妆的瞬间来搭建内容，让颜色本身去说服观众。我们负责排期、品牌反馈和最终交付。",
    "outcome": "Juvia's Place 获得了以其最鲜明的优势，也就是显色效果，为先的创作者内容，并通过有专人管理的达人合作交付，只需对接一个联系人。"
  },
  "nars-campaign": {
    "title": "NARS × @thefashionfreakk",
    "summary": "由 CA Agency 达人 @thefashionfreakk 出镜、为 NARS 打造的高端美妆内容。",
    "brief": "NARS 需要带有高端美妆质感的创作者内容，同时通过一位人们因其穿搭风格、而不只是因产品而关注的人物来触达受众。",
    "approach": "我们为 NARS 搭配了旗下达人 @thefashionfreakk，她以时尚为主导的审美，把美妆产品放进一个更完整的穿搭故事里。内容把产品融入她的标志性造型，而不是把它单独拎出来。",
    "outcome": "这次合作为 NARS 带来了有穿搭语境的创作者内容，美妆作为一个造型、一种生活的一部分来呈现，而这正是高端品牌在短视频上胜出的地方。"
  },
  "elemis-campaign": {
    "title": "ELEMIS 创作者营销活动",
    "summary": "为 ELEMIS 打造的高端护肤故事，围绕仪式感、质地和日常流程展开。",
    "brief": "ELEMIS 属于高端护肤，这类内容必须传达仪式感和质地，也就是人们愿意多花钱的感官理由。简报要求创作者内容带有这种更高级的、呵护自己的感觉。",
    "approach": "内容围绕涂抹的仪式感来搭建：质地特写、从容的节奏，以及一段第一人称旁白，听起来像真实的日常流程，而不是照着念的稿子。",
    "outcome": "ELEMIS 获得了注重感官、以日常流程为主的创作者内容，与其高端定位相匹配，并通过全程管理的创作者合作制作完成。"
  },
  "fenty-beauty-campaign": {
    "title": "Fenty Beauty 创作者营销活动",
    "summary": "一支实时试用 Fenty Beauty Pro Filt’r Fluid Flex Foundation 的视频，围绕它上脸有多轻盈展开。",
    "brief": "Fenty Beauty 希望以真实的第一印象为切入点，介绍新款 Pro Filt’r Fluid Flex Foundation。目标是展示遮瑕力和妆效，同时捕捉创作者对配方的真实反应。粉底液新品的成败取决于信任：观众在购买前想看到真实的遮瑕力、真实的妆效和真实的反应。简报要求拍下对新款 Pro Filt’r Fluid Flex Foundation 未经脚本设计的第一印象，完整展示上妆过程、不用剪辑遮掩效果，并说出色号，方便肤色相近的观众购买。",
    "approach": "Melly Sanchez 在镜头前用刷子上粉底，色号为 396N，画面上的字幕“wait… why does this feel like NOTHING on my skin?!”记录了她当下的反应。上妆过程完整呈现，观众可以自己判断遮瑕力和自然哑光妆效，而创作者自信的造型让视频牢牢留在 Fenty 大胆、包容的品牌世界里。",
    "outcome": "Fenty Beauty 获得了真实的第一印象内容，用创作者自己的话突出了配方的主要优点：遮瑕力、哑光妆效和轻盈肤感。它既可以作为新品上市素材自然发布，也可以用作可信的付费广告素材。"
  },
  "delere-campaign": {
    "title": "DELERE 创作者营销活动",
    "summary": "一支鱼子酱护肤的入门介绍，把 DELERE 的奢华成分故事变成观众能在肌肤上看到的东西。",
    "brief": "“Caviar as skincare?!”是大多数受众都会有的疑问，DELERE 需要能回答这个问题的内容。简报要求讲清配方，即 15% 鱼子酱 omega-3 和胶原蛋白肽，同时展示观众可以期待的光泽感，而且都要放在一支短的竖屏视频里。作为奢华护肤领域较新的名字，DELERE 还需要在从未听说过它的观众中建立可信度。这意味着要把成分宣称与肌肤上看得见的证明结合起来，保持高端而非噱头式的调性，并为品牌提供一份可以在各类品牌认知营销活动中重复使用的素材。",
    "approach": "Saranda Mavriqi 先用引发好奇的开场抓住观众，随后直接进入上脸环节：面霜先用刷子缓缓刷开，再用手按压吸收，让观众同时看到质地和妆效。画面文字承载成分故事，镜头则一直停留在她的肌肤上，视频最后落在光泽透亮的效果上，场景是一间安静的浴室，与品牌的高端定位相符。",
    "outcome": "DELERE 获得了用通俗的话介绍一种陌生奢华成分、并以看得见的质地和光泽作支撑的创作者内容。成分字幕让它成为面向新受众的有力科普素材，而干净、高级的观感也让它用于付费社交广告时符合品牌调性。"
  },
  "sephora-campaign": {
    "title": "Sephora 创作者营销活动",
    "summary": "一个以屏障为先的护肤故事，把 Sephora 自有的 Hydrate 系列编排成应对肌肤干燥、敏感日子的护肤流程。",
    "brief": "Sephora 希望把自有的 Hydrate 系列定位为一个经过用心设计的护肤系列，而不是平价替代品。挑战在于展示三种质地、三种不同的用途：含透明质酸和聚谷氨酸的 Bouncy Water Jelly、含脂质和神经酰胺的 Balmy Rich Cream，以及 Satin Light Cream，并让观众能立刻对应到自己某一天的肌肤状态。受众是懂护肤的购物者，他们已经熟悉成分名称，想知道什么时候该用什么，而不是被推销一个奇迹。视频需要在 TikTok 和 Reels 上自然落地，不显得像零售广告，全程让 Sephora 的名字可见，并给观众留下一条在货架前就能用上的简单法则。",
    "approach": "Albina Mavriqi 从一个真实的问题开场：泛红和干燥的特写，字幕写着“on dry or irritated skin days, my barrier needs extra support.”这份坦诚为随后的产品亮相做了铺垫。每一罐都对着镜头停留足够长的时间，让人看清主打成分，然后切到面霜的质地，让观众自己判断滋润程度。视频以效果收尾，水润、看得出更舒缓的肌肤，并围绕“based on what my skin needs that day”来选择补水产品这一想法展开，把一组产品阵容变成了一份选择指南。",
    "outcome": "Sephora 获得了一支以成分为主导的科普型创作者视频，推销的是整个系列的逻辑，而不只是某一个单品。前后对比的框架和画面上的成分标注，让它既可以作为 Albina 频道上的自然内容，也同样可以作为面向正在比较保湿产品的护肤购物者的付费素材。"
  },
  "revolve-beauty-campaign": {
    "title": "Revolve Beauty 创作者营销活动",
    "summary": "一个“frost-kissed”冬日华丽妆容，全部使用 Revolve Beauty 有售的产品打造。",
    "brief": "Revolve Beauty 想要一个季节性妆容，展示其多品牌选品的丰富程度，并直接链接到可购买的产品。内容还要有足够的时尚大片感，才能对上 Revolve 的时尚受众。Revolve Beauty 销售的是一组精选品牌，因此简报要求妆容展示其中几个品牌，同时仍然是一个统一的整体构想。内容需要一个季节性的切入点、与 Revolve 时尚形象一致的大片式造型，以及一份清晰的产品清单，让观众可以直接从这家零售商购买同款妆容。",
    "approach": "Melani Seiffert 在水晶吊灯映照的场景里，裹着白色人造皮草，打造了一个柔和的冬日华丽妆容。她依次使用 Revolve Beauty 的一组产品，包括 Tower 28 Swipe Serum Concealer、Nudestix Tinted Blur Sculpt Stick 和 Kevyn Aucoin The Sensual Skin 腮红，每一款都先对着镜头展示再上妆。冷调、华丽的造型让视频看起来像一组时尚大片，同时又容易跟着做。",
    "outcome": "Revolve Beauty 获得了一支大片质感的教程，在一个可购买的妆容里展示了多个品牌。高级的审美适合 Revolve 自己的渠道，而逐个产品展开的结构有助于引导点击进入零售商页面。"
  },
  "anua-campaign": {
    "title": "Anua 护肤创作者营销活动",
    "summary": "一支用 Anua 刮痧霜讲解五条法则的面部按摩教程，从淋巴引流到轮廓塑形。",
    "brief": "Anua 希望把它的刮痧霜呈现为让面部按摩变得简单有效的产品。内容需要教手法，而不只是展示产品。面部塑形和淋巴引流很流行，但许多观众并不确定怎样做才对。简报要求把 Anua 刮痧霜定位为让这套手法变简单的产品，并做出一支有教学价值、非常值得收藏、观众会回头再看的视频。",
    "approach": "Georgii Galaev 把视频做成了一堂迷你大师课，每一步都在画面上标注：打开淋巴结、塑造下颌线、提拉颧骨、给鼻部消肿，再把一切向下引流。他全程使用 Anua 刮痧霜，展示自带的工具和面霜如何为每个动作提供足够的顺滑度。",
    "outcome": "Anua 获得了一支非常值得收藏、以手法为主的教程，把它的产品定位为这套流程中不可或缺的一环。它既可以作为科普型的自然内容，也可以作为面向对面部塑形感兴趣的观众的付费广告素材。"
  },
  "purito-campaign": {
    "title": "Purito 创作者营销活动",
    "summary": "一支带时间戳的“morning routine” vlog，把 Purito Seoul 融入真实的、一步一步的晨间流程。",
    "brief": "Purito Seoul 纯净、适合敏感肌的定位，在融入真实生活时效果最好。目标是让内容自然地存在于广受欢迎的日常流程 vlog 形式里，而不是插在其中的一段广告。Purito 的受众对过度制作的广告抱有戒心，更容易被坦诚、不加滤镜的日常流程打动。简报要求采用观看时长高的形式，让产品在一个真实的早晨里凭自身赢得位置，而不是打断它，并希望内容在发布很久之后仍能持续带来发现流量。",
    "approach": "Aiym Kablan 一分钟一分钟地记录她的早晨，画面上带着时间戳：洗澡、包头发、做护肤前的准备，然后进入她的日常流程。Purito Seoul 出现在这些步骤的自然衔接中，随手拿起、随手涂上，所以产品是在情境中被看到的，而不是被刻意展示。温馨、不加滤镜的场景和有共鸣的细节，让它真实而且非常耐看。",
    "outcome": "Purito Seoul 获得了原生的、以生活方式为先的内容，采用的是最吸引人的短视频形式之一。因为产品存在于一段观众本来就想看的日常流程里，这支视频既可以作为面向新受众的发现型内容，也可以作为可信、没有推销压力的付费素材。"
  },
  "gisou-campaign": {
    "title": "Gisou 创作者营销活动",
    "summary": "以头发为主角的内容，让 Gisou 标志性的光泽感在蓬松的长卷发上自己说话。",
    "brief": "Gisou 的品牌建立在健康光泽之上，所以内容必须让这种光泽在镜头前看得见。目标是一个简短、令人向往的秀发瞬间，像是 Beatrix 主页里自然的一部分，而不是产品演示。Gisou 的社群买的不只是产品，同样也是一种造型和一种生活方式，因此简报更看重氛围而不是讲解。内容必须能自然地与品牌自己的精致影像放在一起，让头发成为每一帧的主角，并且在没有声音和字幕的情况下，对快速滑动的观众也同样成立。",
    "approach": "Beatrix Ramosaj 在柔和、均匀的日光下拍摄，光线正好捕捉到她蓬松吹发造型上的光泽。视频不是一支教程，而是围绕动态来搭建：她用手指梳过发丝，把产品在掌心揉开，再抹到发梢，观众可以实时看到头发的反应。近景取景让注意力集中在质感和光泽上，平缓的节奏呼应了 Gisou 低调、高端的调性。",
    "outcome": "Gisou 获得了一支精致、以生活方式为主的秀发视频，在几秒钟内、无需大量文案，就传达了品牌的核心承诺：看起来健康的光泽。干净的视觉风格既适合 Beatrix 的受众，也适合与 Gisou 自己的品牌内容并列的付费投放。"
  },
  "samsung-campaign": {
    "title": "Samsung 创作者营销活动",
    "summary": "以生活方式为主的创作者内容，把 Samsung 设备放进真实的日常生活里。",
    "brief": "Samsung 希望设备以生活伙伴的形象出现，而不是一张参数表，内容要像创作者的一天，让产品自然地赢得出镜时间。",
    "approach": "我们围绕旗下达人 Khutjo Matsoma 的日常内容风格来搭建创意：设备出现在它本来就会出现的地方，拍照的瞬间、外出途中的使用，最后落在一个功能亮点上，不用硬性推销也能让人记住。",
    "outcome": "Samsung 获得了真实、原生于信息流的创作者视频，能触达那些会直接划过传统科技广告的受众。"
  },
  "haruharu-wonder-campaign": {
    "title": "Haruharu Wonder 创作者营销活动",
    "summary": "一个充满活力的户外光泽故事，主角是全天都在使用的 Haruharu Wonder 黑米光泽喷雾。",
    "brief": "Haruharu Wonder 希望把这款喷雾呈现为一种不黏腻的方式，让肌肤在外出时保持水润和光泽。Haruharu Wonder 的黑米喷雾在 Amazon 上销售很广，因此简报的重点是演示真实生活中的使用。内容需要展示喷雾在一天中被多次使用，突出不黏腻的肤感，并保持与品牌相符的自然、户外的调性。",
    "approach": "Rebecca Ghaderi 在户外拍摄自己的一整天，从清晨在阳光下散步，到之后放松的时刻，每一次都用 Haruharu Wonder 光泽喷雾喷脸。明亮的自然光让清爽、水润的妆效一目了然，不同的场景则展示了喷雾如何融入忙碌的日常。",
    "outcome": "Haruharu Wonder 获得了展现真实、反复使用和自然光泽的生活方式内容。它既适合自然发布，也适合为其 Amazon 商品页做付费投放。"
  },
  "armani-beauty-campaign": {
    "title": "Armani Beauty 创作者营销活动",
    "summary": "一支可叠加上色的腮红教程，使用 Armani Beauty 的 Luminous Silk 腮红液。",
    "brief": "Armani Beauty 希望展示它的腮红液如何晕染成自然、有光泽的红晕，让妆容保持轻松又高级。Armani Beauty 的奢华定位需要精致、从容的内容。简报要求展示这款腮红液如何从一层薄透的颜色叠加到红晕，突出它的光泽妆效，并让产品本身清晰可见。",
    "approach": "创作者把 Armani Luminous Silk 腮红液点在脸颊上，再用刷子晕开，一点点叠加颜色，让观众看到它的可叠加性。特写取景和柔和的光线展现了光泽妆效，视频最后落在对着镜头举起的产品上，旁边是完成后的光泽妆容。",
    "outcome": "Armani Beauty 获得了一支干净、优雅的单品演示，突出了易晕染性和妆效。它既适合自然发布，也适合付费投放。"
  },
  "valentino-beauty-campaign": {
    "title": "Valentino Beauty 创作者营销活动",
    "summary": "一支讲颜色搭配的彩妆教程，把 Valentino 的 Spike 口红和 Eye2Cheek 腮红组合成一个协调的妆容。",
    "brief": "Valentino Beauty 希望展示它的唇部和脸颊产品可以成套使用。这个创意必须像观众会收藏的造型建议，而不是一次产品试色。Valentino Beauty 的彩妆定位为高定，所以内容既要有造型感、显得用心，又要实用。两款主打产品需要能通过名称和色号被清楚辨认，方便观众复刻妆容，完成后的面部也要足够上镜，让品牌可以在创作者主页之外使用。",
    "approach": "Dariia Bordun 用一个时尚类比来搭建视频：就像鞋子要和包搭配一样，嘴唇和脸颊的颜色也应该相配。她先涂上 Spike Valentino Buttery Matte Lip，色号 134 Couture in the Streets，再用 Valentino Eye2Cheek，色号 01 Born in Roma，晕出一圈柔和的“halo”色彩，把整张脸串联起来。带铆钉的金色口红和红色高定粉盒对着镜头展示，画面上标出色号名称，妆容很容易照着买。",
    "outcome": "Valentino Beauty 获得了一支把两款产品作为一个妆容来推销的教程，还给了观众一个可以反复使用的技巧。标明的色号、特写上妆和协调的成品妆效，让它既适合自然发布，也适合作为以转化为目标的付费素材。"
  },
  "chanel-beauty-campaign": {
    "title": "Chanel Beauty 创作者营销活动",
    "summary": "一支只用一款产品的底妆教程，展示 Chanel 的 Les Beiges Pearly Glow 如何打造珠光肌肤妆效。",
    "brief": "Chanel Beauty 希望以轻松又奢华的方式展示一款提亮肤色的单品。挑战在于把一种细腻的效果，也就是珠光光泽，清楚地呈现在镜头前。Chanel 的受众期待克制与优雅，因此内容需要避免硬性推销，同时仍让产品成为明确的主角。简报要求在镜头前令人信服地展示一种细腻、能反射光线的妆效，保持简约奢华的造型，并把产品呈现为一件轻松的日常必备品。",
    "approach": "Dariia Bordun 从素颜开始，然后拿出 Chanel Les Beiges Pearly Glow，用指尖上脸，在面部高点位置晕开。柔和、显气色的光线让珠光光泽看得见地一层层显现，字幕“ACTUALLY the only product you need for that pearlescent skin effect”则把它定位为一款主打产品。最后她把瓶子举在完成后的光泽妆容旁边。",
    "outcome": "Chanel Beauty 获得了一支优雅的单品教程，让一种细腻的妆效容易看见，也容易让人想要。简约的造型和清晰的前后对比，让它无论自然发布还是付费使用都符合品牌调性。"
  },
  "rare-beauty-campaign": {
    "title": "Rare Beauty 创作者营销活动",
    "summary": "一个红润有光泽的妆容，把 Rare Beauty 的腮红和唇油搭配在一起。",
    "brief": "Rare Beauty 想要一个欢快、日常好驾驭的妆容，展示它两个备受追捧的品类，腮红和唇部产品，如何搭配使用。Rare Beauty 的社群更喜欢欢快、容易上手的彩妆，而不是复杂的技法。简报要求把腮红和唇油的搭配呈现为一个有趣、简单的妆容，保持积极、包容的调性，并让两款产品都容易辨认和购买。",
    "approach": "Melly Sanchez 在一个俏皮的场景里打造了一个粉嫩的全粉色妆容，还配上粉色发夹和柔和的霓虹灯光。她用刷子把 Rare Beauty 腮红轻拍在脸颊上，对着镜头展示产品，勾勒唇线，最后用唇油收尾，带来有光泽的红润感。字幕“Rare beauty blush + lip oil”让这个组合很容易照着买。",
    "outcome": "Rare Beauty 获得了一支积极向上、符合品牌调性的教程，把两款产品作为一个妆容来推销。明亮的造型和清晰的步骤，既适合自然发布，也适合付费社交广告。"
  },
  "saie-campaign": {
    "title": "Saie 创作者营销活动",
    "summary": "一个阳光感十足、随时随地完成的光泽妆容，全部使用 Saie 产品，直接从化妆包里拿出来上妆。",
    "brief": "Saie 纯净、以肌肤为先的产品，是为轻松的光泽妆效而生的。目标是在一个放松、真实的生活场景里展示它们，与品牌毫不费力的调性相符。Saie 的受众看重纯净成分和轻松自然的妆容。简报要求内容放松、贴近真实生活，展示这些产品上妆有多快、在自然光下是什么样子，以及它们如何融入随时出发的生活方式。",
    "approach": "Rebecca Ghaderi 在明亮的夏日光线下于户外化妆，直接从包里拿出 Saie 产品。她用 Saie 刷具点涂并晕开腮红和底妆产品，每一款都对着镜头展示，让观众在自然光下看到色号、工具和阳光亲吻般的妆效。",
    "outcome": "Saie 获得了真实、以生活方式为先的彩妆内容，展示了产品在真实条件下的样子。它很适合自然发布，也适合作为亲切、信任度高的付费广告素材。"
  },
  "patrick-ta-campaign": {
    "title": "Patrick Ta 创作者营销活动",
    "summary": "一支柔和华丽妆容教程，围绕 Patrick Ta 的闪片眼影和腮红双拼盘展开。",
    "brief": "Patrick Ta 的产品以有光泽、立体的妆效著称。简报要求在眼部和脸颊上展示这种标志性的光泽，并做成观众可以复刻的妆容。Patrick Ta 的产品定位为专业品质，因此简报要求内容近距离展示质地、显色度和妆效。妆容需要华丽但可实现，粉盒也要展示得足够清楚，让观众在店里能认出来。",
    "approach": "Beatrix Ramosaj 以闪片眼影盘和腮红双拼盘的特写开场，然后一步步打造妆容：把闪片按压在眼皮上，勾勒睫毛和眼线，再把腮红扫在脸颊上。对粉盒和质地的近景取景展示了产品的品质，完成后的妆容则展现了它的光泽效果。",
    "outcome": "Patrick Ta 获得了一支高级、以产品为主角的教程，展示了多款产品和一个统一的成品妆容。它适合创作者的受众，也可以用作令人向往的付费内容。"
  },
  "medicube-campaign": {
    "title": "Medicube 创作者营销活动",
    "summary": "一套围绕 Medicube Collagen Night Wrapping Mask 的玻璃肌晚间护肤流程，从上脸到撕下面膜的揭晓。",
    "brief": "Medicube 的 Collagen Night Wrapping Mask 采用独特的可撕式形态，因此内容需要展示完整的体验，包括上脸、过夜和效果，同时说明它的作用。Medicube 的胶原蛋白面膜是一款爆红产品，所以内容必须在拥挤的信息流中脱颖而出。简报要求做一次从上脸到揭晓的完整、令人满足的演示，清楚说明何时用、为什么用，并呈现足以让人停下滑动的玻璃肌效果。",
    "approach": "Melani Seiffert 以她“mirror-like glowy skin”的画面开场，然后展示面膜作为护肤流程的最后一步被刷上脸。画面字幕说明，它在护肤之后使用，把一切锁住一整夜，并含有胶原蛋白提取物和透明质酸，有助于改善弹性并提供深层补水。视频以令人满足的撕膜过程和水润、玻璃般肌肤的特写结束。",
    "outcome": "Medicube 获得了对一款主打产品的完整演示，有清晰的科普和非常适合分享的揭晓瞬间。它既可以作为自然流量的发现型内容，也可以作为面向护肤购物者的效果广告素材。"
  },
  "celimax-campaign": {
    "title": "Celimax 创作者营销活动",
    "summary": "一支讲解 Celimax retinal shot 精准用法的教程，对应黑眼圈、细纹和肤色不均。",
    "brief": "视黄醛（retinal）可能让人望而却步，所以 Celimax 需要的内容要准确展示该用在哪里、怎么用。目标是为关注色斑、细纹和肤色不均的观众，做一次清晰、以功效为主的演示。许多观众对视黄醛感到好奇，却不确定怎么用、用在哪里。简报要求做一次精准、让人没有畏难感的演示，准确展示产品该涂在哪里，说明每个区域对应的功效，并把 Celimax 定位为进入视黄醛护肤的轻松入门之选。",
    "approach": "Loresa Konushevci 把 Celimax retinal shot 点在它针对的部位：眼下、法令纹沿线和额头，画面字幕标出每一项功效：提亮黑眼圈、减少细纹、让肌肤更平滑紧致。随后她按摩至吸收，展示少量产品就能覆盖全脸。鲜黄色的点让这套手法很容易模仿。",
    "outcome": "Celimax 获得了一支教学视频，让使用视黄醛不再需要猜测，并把每一个涂抹位置与一项功效对应起来。它既可以作为面向新用户的科普内容，也可以作为清晰、利于转化的付费素材。"
  },
  "abib-campaign": {
    "title": "Abib 创作者营销活动",
    "summary": "用 Abib 的 Airy Sunstick 补涂防晒的一天，从公园到车里。",
    "brief": "大多数人只涂一次防晒，然后就忘了补涂。Abib 希望展示它的 Airy Sunstick 让你无论身在何处都能快速、轻松地补涂，并介绍那枚会随紫外线强度升高而变色的紫外线指示挂饰。内容必须像真实出门的一天，展示防晒棒在脸上顺滑推开且不泛白，并让挂饰的变色一眼就能看懂。",
    "approach": "Beatrix Ramosaj 跟随紫外线指数度过她的一天。在户外阳光最强的时候，挂饰变成深红色，她几秒钟就完成补涂，用 C 形的防晒棒快速覆盖大面积区域，并贴合面部轮廓涂抹。之后在车里，随着紫外线强度下降，她再次补涂，画面上的标签记录着指数的变化，妆效始终清透自然。",
    "outcome": "Abib 获得了一支实用、以故事为主线的创作者视频，把补涂变成一个简单的习惯，并让紫外线指示挂饰成为吸引人的看点。它既可以作为面向防晒购物者的发现型内容，也可以作为付费社交广告中清晰的产品演示。"
  },
  "axis-y-campaign": {
    "title": "AXIS-Y 创作者营销活动",
    "summary": "一套介绍 AXIS-Y 唇油的唇部护理流程，从试色到有光泽、被呵护的妆效。",
    "brief": "AXIS-Y 以护肤闻名，它的唇油把同样以呵护为先的理念带到了唇部。简报要求把唇油既作为护理、也作为妆效来展示：色号看起来怎么样，质地如何顺滑推开，以及涂上之后嘴唇的样子。内容需要像美妆流程中自然的一部分，让瓶身清楚地留在画面里，并适合 Instagram 和 TikTok 上讲究精致的美妆受众。",
    "approach": "Sadaf Torabi 开场把几支唇油并排举起，让每个色号都一目了然，然后以特写逐一上唇。镜头紧紧对着斜口刷头和嘴唇，观众可以看清质地和有光泽、水润的妆效，最后她以完成的妆容收尾。",
    "outcome": "AXIS-Y 获得了一支精致、以产品为主角的美妆视频，在不到二十秒内展示了唇油的色号、质地和妆效。它既可以作为自然流量的发现型内容，也可以作为围绕唇部护理的付费社交广告的干净素材。"
  },
  "arencia-campaign": {
    "title": "Arencia 创作者营销活动",
    "summary": "一份按肌肤困扰逐项对应的指南，把每一款 Arencia Booster Shot 与它针对的肌肤问题配对。",
    "brief": "Arencia 有几款含不同活性成分的 booster shot，所以购物者在选择时需要帮助。简报要求清楚地讲解这个系列，让每款产品都像是某个具体困扰的答案。Arencia 的 booster 系列针对不同需求含有不同的活性成分，这可能让新顾客感到困惑。简报要求让这个系列容易挑选，把每款产品与一个看得见的困扰联系起来，并做出一份长期适用、值得收藏的素材，起到选品指南的作用。",
    "approach": "Aurela Elshani 把视频做成了一张可视化的对照表。针对每一种困扰，她先展示该部位的特写，再涂上对应的 booster，画面上的标签把两者配对：颈纹配 NAD+，闭口粉刺配甘醇酸，眼下松弛配视黄醛（retinal），法令纹配 PDRN。困扰部位的内嵌特写，加上一点一点的涂抹，让每一步都一看就懂。",
    "outcome": "Arencia 获得了一支非常值得收藏、以科普为主的视频，通过帮助观众自己选出合适的产品来推销整个系列。它既可以作为发现型内容，也可以作为针对特定肌肤困扰的效果广告素材。"
  },
  "lilyeve-campaign": {
    "title": "Lilyeve 创作者营销活动",
    "summary": "头皮护理内容，展示 Lilyeve 的 GROW:TURN Pink Collagen Capsule Ampoule 如何融入护发流程。",
    "brief": "胶原蛋白是人们熟悉的护肤成分，但用在头发上还是个新概念。Lilyeve 需要的内容，要让头皮护理显得简单又令人向往，并展示回报：看起来更健康、更有光泽的头发。受众已经在护肤上有所投入，却常常把护发放在次要位置。Lilyeve 需要把 GROW:TURN Pink Collagen Capsule Ampoule 介绍为一个简单、愉悦的仪式，展示它的胶囊质地和刷头如何使用，并把这套流程与一个观众自己也想拥有的视觉效果联系起来。",
    "approach": "Albina Mavriqi 以一个特写开场：刷头把安瓶精华直接涂到头皮上，展示它用起来有多简单。随后视频切到揭晓画面，一头柔顺的“glass-like”长发，最后落在 GROW:TURN Pink Collagen Capsule Ampoule 上，画面上显示产品名称。使用前和使用后的结构，在几秒钟内把产品和效果联系了起来。",
    "outcome": "Lilyeve 获得了通过清晰的演示和令人向往的效果来介绍一个新品类，也就是头发用胶原蛋白，的内容。它既可以作为面向新受众的科普内容，也可以作为付费社交广告的有力视觉素材。"
  },
  "dr-althea-campaign": {
    "title": "Dr. Althea 创作者营销活动",
    "summary": "一个以补水为重点的玻璃肌瞬间，主角是 Dr. Althea 的 Aqua Marine Jelly Mist。",
    "brief": "Dr. Althea 希望把它的面部喷雾呈现为一次快速的补水加持，留下清爽、水润的妆效。面部喷雾容易被看成可有可无的附加品，所以简报要求让 Aqua Marine Jelly Mist 像是必不可少的补水步骤。内容需要一个有力的视觉看点、清晰的光泽效果，以及能自然融入短视频平台、懂潮流的调性。",
    "approach": "Khutjo Matsoma 在一组慢速特写镜头中使用喷雾，捕捉到细腻的喷雾和它留下的透亮肌肤。字幕“facemistmaxxing”增添了俏皮、懂潮流的调性，而布光则突出了她水润的玻璃肌光泽。",
    "outcome": "Dr. Althea 获得了一支视觉上很抓人、紧跟潮流的视频，在几秒钟内传达了补水和光泽。它适合获取自然触达，也可以用作吸引眼球的付费广告素材。"
  },
  "torriden-campaign": {
    "title": "Torriden 创作者营销活动",
    "summary": "一个关于 Torriden Cellmazing Low Molecular Collagen Firming Cream 的紧致护肤故事，从质地到弹润效果。",
    "brief": "胶原蛋白面霜常被认为质地厚重。Torriden 希望展示它的 Cellmazing Firming Cream 用起来轻盈，同时带来看起来更紧致、更有弹性的肌肤。Torriden 希望在已经熟悉其补水畅销产品的购物者中，提高紧致系列的认知度。简报要求内容回应人们对胶原蛋白面霜的一个常见顾虑，用简单的话讲清配方，并链接到一个明确、可追踪的优惠。",
    "approach": "Albina Mavriqi 以“when your skin loses its bounce…”开场，按压脸颊，让这个困扰变得具体可感。她挤出面霜，字幕写着“collagen creams are usually heavy, but this melts in like a moisturiser”，并在画面上列出主要成分：5D 低分子胶原蛋白、带来弹性的肽和负责补水的透明质酸。她按摩至吸收，最后落在一个有光泽、饱满的效果上，视频把它描述为看起来更平滑的纹路，以及一步到位的补水和紧致。",
    "outcome": "Torriden 获得了以成分为主导的创作者内容，打消了一个常见顾虑，并展示了清晰的效果。配合她的折扣码，它既是科普内容，也是以转化为目标的素材。"
  },
  "beauty-of-joseon-campaign": {
    "title": "Beauty of Joseon 创作者营销活动",
    "summary": "一份七天眼下日记，使用 Beauty of Joseon 含人参和视黄醛的 Revive Eye Serum 与 Revive Under Eye Patch。",
    "brief": "Beauty of Joseon 希望展示它的视黄醛眼部组合在一段时间内的使用效果，而不是只用一次之后的样子。内容需要通过坚持使用和看得见的前后对比来建立信任。眼部护理的买家对速效方案持怀疑态度，所以简报要求靠坚持而不是靠宣称来建立可信度。内容需要展示两款产品搭配使用，记录几天内的进展，并让观众可以轻松地自己判断对比结果。",
    "approach": "Saranda Mavriqi 以分屏的前后对比开场，然后一天一天记录她的流程。她介绍了 Revive Under Eye Patch (Ginseng + Retinal) 和 Revive Eye Serum，把眼贴和精华用在眼下，画面上标着 Day 1、Day 3、Day 5 和 Day 7。光线充足的近景特写让这个部位便于比较，视频最后回到使用前的画面，让观众自己判断变化。",
    "outcome": "Beauty of Joseon 获得了日记式的内容，把两款产品放进一套可信的流程里，并展示了它们的持续使用。它既可以作为建立信任的自然内容，也可以作为面向眼部护理购物者的、有说服力的付费素材。"
  },
  "frankly-campaign": {
    "title": "Frankly 创作者营销活动",
    "summary": "一套以几滴 Frankly Closer Serum 为核心的无毛孔玻璃肌护肤流程。",
    "brief": "Frankly 希望展示它的 Closer Serum 如何针对明显的毛孔和肤质问题，并让观众在镜头前清楚地看到效果。对许多观众来说，Frankly 还是一个较新的名字，所以内容需要留下深刻的第一印象。简报要求把 Closer Serum 与一个具体、有共鸣的困扰，也就是毛孔和肤质不均，联系起来，并在一支短视频内展示妆效上看得见的改善。",
    "approach": "Khutjo Matsoma 以目标“poreless glass skin”开场，然后用肤质和毛孔的超近特写做铺垫。她用滴管取几滴 Frankly Closer Serum 上脸，按压进肌肤，最后以有光泽、看起来均匀的特写收尾。暖色的光线和缓慢、从容的动作，突出了光滑、玻璃般的妆效。",
    "outcome": "Frankly 获得了一支清晰、以效果为重点的精华演示，视觉回报很强。它既可以作为面向 Khutjo 护肤受众的自然内容，也可以作为面向关注毛孔和肤质的观众的付费广告素材。"
  },
  "biodance-campaign": {
    "title": "Biodance 创作者营销活动",
    "summary": "一个记录日常一天的故事，展示 Biodance 过夜面膜带来的光泽如何持续，并用 Caviar PDRN Jelly Serum Mist 随时补充。",
    "brief": "Biodance 想要传达持久的“24-hour mask glow”这一概念。内容必须在情境中展示两款产品：在家使用的过夜面膜，以及在第二天全天作为快速焕新使用的精华喷雾。Biodance 最为人熟知的是它的过夜面膜，简报要求把这份认知延伸到 Caviar PDRN Jelly Serum Mist。内容必须把两款产品呈现为一套组合，传达光泽能持续多久，并采用令人向往的生活方式形式，而不是静态的产品演示。",
    "approach": "Beatrix Ramosaj 围绕一只时钟来搭建故事。时间戳从晚上 8 点她在床上敷面膜开始，经过她在家的夜晚，一直到第二天下午：在笔记本电脑前、在户外、外出的一天。每到一个时间点，她都会拿起 Caviar PDRN Jelly Serum Mist，让观众看到光泽在真实生活中是如何保持的。温暖的室内和阳光明媚的户外，让视频既令人向往又有共鸣。",
    "outcome": "Biodance 获得了以生活方式为主的内容，演示了两款产品和一个清晰的使用方式：晚上三小时，再用三秒钟保持光泽。叙事形式能留住注意力，也为品牌提供了一份可用于自然发布和付费使用的多用途素材。"
  },
  "skin1004-campaign": {
    "title": "SKIN1004 创作者营销活动",
    "summary": "一支介绍 SKIN1004 Azelaic Acid 10% 的日常护肤流程视频，围绕 Anton 自己的痘痘肌经历展开。",
    "brief": "SKIN1004 希望向正在应对痘痘、泛红和痘印的观众介绍 Azelaic Acid 10%。壬二酸有效，但对许多人来说仍然陌生，所以简报需要一位能从亲身经历出发的创作者，用通俗的话讲清这种成分的作用，以及它如何融入日常护肤流程。内容必须坦诚、让人安心，而不是冷冰冰的临床口吻，在画面上标出每一项功效，并把瓶身展示得足够清楚，让观众之后还能找到它。",
    "approach": "Anton Drozhzhin 曾公开谈论自己的痘痘问题，他把这款精华介绍为自己希望早点知道的成分。视频用简短、干净的镜头走完他的流程：把精华滴在额头和脸颊上，在手背上展示质地，再把精华按压进肌肤。画面字幕把每一步与一项功效对应起来（每天使用 10% 壬二酸、控制多余皮脂、舒缓泛红），随后是瓶身特写，最后是他平稳、均匀的肌肤。",
    "outcome": "SKIN1004 获得了一支个人化、以科普为主的创作者视频，在几秒钟内讲清一种不太为人熟悉的活性成分，并让产品全程留在画面里。它适合面向痘痘肌受众的自然发现，也可以重复用作聚焦泛红和痘印的效果广告素材。"
  },
  "rejuran-jay": {
    "title": "Rejuran × Jay Sadiq",
    "summary": "Jay Sadiq 在一套夏季毛孔护理流程中实测 Rejuran 的 Pore Tightening Pad & Ampoule。",
    "brief": "毛孔护理是常见的困扰，在夏天尤其如此。Jay 演示了 Rejuran 的 Pore Tightening Pad & Ampoule 如何使用，并通过上脸过程和前后对比突出它们细致毛孔的功效。",
    "approach": "影片以产品介绍开场，Jay 手持棉片，画面上显示“This is the Rejuran Pore Tightening Pad & Ampoule, designed for summer pore care”。他用一片棉片擦拭肌肤，把棉片敷在鼻子和脸颊上当作清凉面膜，然后接着使用安瓶精华。画面字幕讲解每一步，随后 Reel 切到“Before”和“After”的对比。",
    "outcome": "一套分步骤的护肤流程，有清晰的产品镜头，以及观众可以自己判断的前后对比。"
  },
  "eclado-loresa": {
    "title": "ECLADO × Loresa Konushevci",
    "summary": "Loresa Konushevci 展示 ECLADO 的 CELVIX PRO 家用射频（RF）仪，搭配 EXO FILAGEN CREAM，从第一步涂抹到最终的光泽。",
    "brief": "家用美容仪需要让人看到使用中的样子：怎么握、怎么滑动，以及用完之后肌肤是什么样子。这支 Reel 介绍了 ECLADO 的 CELVIX PRO，文案中把它介绍为一款让肌肤看起来更紧致、轮廓更分明的家用射频（RF）仪，同时介绍了让它顺滑滑动的 EXO FILAGEN CREAM。",
    "approach": "Loresa 以一个标着“Before”的素颜特写开场，涂上 EXO FILAGEN CREAM，然后用仪器在脸颊和下颌处操作。画面字幕逐一说明每个阶段：促进吸收、提拉塑形、提升光泽的护理，随后 Reel 以一个“After”镜头结束，画面中是水润、看起来有光泽的肌肤。",
    "outcome": "一支清晰、分步骤的仪器演示，采用 Loresa 自己沉稳的特写风格，仪器和面霜都始终留在画面中。"
  },
  "too-faced-melly": {
    "title": "Too Faced × Melly Sanchez",
    "summary": "Melly Sanchez 在一支粉色调的“和我一起准备出门”Reel 中，为 Too Faced 活动换装打扮。",
    "brief": "活动类内容在观众感到自己也参与了前期准备时效果最好。Melly 的文案交代了场景：“get dressed with me for a Too Faced event”（和我一起为 Too Faced 活动穿搭）。",
    "approach": "Melly 先举起自己选好的柔粉色连衣裙，然后一件一件搭出整套造型，对着镜头展示鞋子、首饰和细节，最后穿着完成的造型走过走廊。",
    "outcome": "一支以时尚为主线的“和我一起准备出门”视频，把 Too Faced 活动的氛围带给 Melly 的受众。"
  },
  "vt-cosmetics-anton": {
    "title": "VT Cosmetics × Anton Drozhzhin",
    "summary": "Anton Drozhzhin 把 VT Cosmetics 的震动眼霜作为一项韩国护肤科技来介绍。",
    "brief": "自带震动涂抹头的眼霜，展示出来比用语言描述更容易。这支 Reel 通过 Anton 自己的护肤步骤来呈现 VT Cosmetics 的震动眼霜。",
    "approach": "Anton 开场手持涂抹头，随后用特写展示震动的头部，屏幕上出现“Vibrating eye cream”字样。他把眼霜涂在双眼下方和眼周，配有简短字幕，点出视频中展示的各项益处，最后以涂抹头使用中的画面收尾。",
    "outcome": "一次产品科技演示，仪器、质地和上脸过程都以近景呈现。"
  },
  "vichy-dariia": {
    "title": "Vichy × Dariia Bordun",
    "summary": "Dariia Bordun 从 Vichy 护肤开始，一步一步打造日常“伪素颜”妆容。",
    "brief": "伪素颜妆容从肌肤开始。这支 Reel 的屏幕标题是“everyday no makeup makeup step by step tutorial”（日常伪素颜妆分步教程），在上任何彩妆之前先用 Vichy。",
    "approach": "Dariia 先画眉，然后涂上 Vichy 护肤品，用双手按压吸收。接着用美妆蛋晕开轻薄底妆，再画眼线、涂唇蜜，每一步都简短、容易照着做，最后呈现清新自然的妆容。",
    "outcome": "一支实用的日常教程，护肤被呈现为整套步骤的第一步。"
  },
  "iunik-khutjo": {
    "title": "IUNIK × Khutjo Matsoma",
    "summary": "Khutjo Matsoma 把 IUNIK 的 Beta-Glucan Power Moisture Serum 呈现为“肌肤饮品”，带出水润的玻璃肌妆感。",
    "brief": "补水在看得见的时候最容易理解。这支 Reel 把 IUNIK 的 Beta-Glucan Power Moisture Serum 比作给肌肤喝的一杯水，这个简单的创意贯穿整支视频。",
    "approach": "Khutjo 开场手拿一杯水，随后换成精华，屏幕上出现“SKIN DRINK SERUM!”。她用滴管取用精华，用指尖按压吸收，再转向光线展示水润光泽。简短字幕点出她强调的配方要点，Reel 以瓶身和她透亮的肌肤同框收尾。",
    "outcome": "一个简单好记的创意，靠近景上脸画面和水光感的玻璃肌效果来呈现。"
  },
  "patrick-ta-beatrix": {
    "title": "Patrick Ta × Beatrix Ramosaj",
    "summary": "Beatrix Ramosaj 用 Patrick Ta 的全新腮红系列打造柔和的“过渡腮红”妆容，并在系列上市前分享。",
    "brief": "Patrick Ta 的这次新品在文案中被称为“The Evolution of Blush”（腮红的进化），核心是从眼下自然融入脸颊的腮红。Beatrix 在系列上市前一天分享了它，展示上色位置与质地如何相互配合。",
    "approach": "Beatrix 把颜色点在眼睛正下方，趁其未干时轻拍而不是拖拽，再晕染开。接着她用上柔焦腮红双色盘，最后落在苹果肌上。屏幕字幕讲解每一步，Reel 以完成后柔和、带大片感的红晕和手中的产品收尾。",
    "outcome": "一个以教程为主线、观众可以逐步跟做的妆容，并配有 Beatrix 自己对该系列的描述：柔和、浪漫、每天都能用。"
  },
  "k-secret-aiym": {
    "title": "K-SECRET × Aiym Kablan",
    "summary": "Aiym Kablan 把 K-SECRET 的 SEOUL 1988 Eye Cream 融入她的晨间光泽护肤流程。",
    "brief": "眼霜在晨间护肤中很容易被忘记。这支 Reel 跟随 Aiym 走完她的晨间流程，展示 K-SECRET 的 SEOUL 1988 Eye Cream 在其中的位置。",
    "approach": "Aiym 依次完成晨间的各个步骤：用牙线、刷牙、洁面，每一步都有字幕标注。屏幕文字说明她为什么为娇嫩的眼周选择专门的眼霜，随后她在眼周点上少量 SEOUL 1988 Eye Cream，Reel 以“Enjoy the results”收尾。",
    "outcome": "一种贴近日常的晨间护肤形式，让眼霜有了明确的位置和用途。"
  },
  "lashify-dariia": {
    "title": "Lashify × Dariia Bordun",
    "summary": "Dariia Bordun 测试 Lashify 奶油质地裸色唇线笔的晕染度和防晕染表现，并在镜头前做了水测试。",
    "brief": "评价唇线笔看两点：好不好晕染，能保持多久。Dariia 的 Reel 文案是“creamy nude lipliners that blend perfectly and won’t smudge”（奶油质地的裸色唇线笔，晕染完美、不晕妆），视频对这两点都做了测试。",
    "approach": "Dariia 以“Waterproof lip liner???”和一杯水开场，先在手上试色，再用每个色号勾勒并填满双唇。屏幕上标出色号 Nude Taupe、Nude Plum 和 Nude Rouge。最后她把水倒在嘴唇上，展示唇线保持原位。",
    "outcome": "一支以演示为主的测评，展示了色号范围，并让产品的宣称接受一次看得见的测试。"
  },
  "first-aid-beauty-albulena": {
    "title": "First Aid Beauty × Albulena Mavriqi",
    "summary": "Albulena Mavriqi 展示 First Aid Beauty 的妆前护肤与粉底叠加的状态，文案为“Good skin = flawless makeup”。",
    "brief": "肌肤准备得好，妆容更服帖。这支 Reel 把两者联系起来，展示在用 First Aid Beauty 护理过的肌肤上涂抹粉底。",
    "approach": "在嘴部和下巴周围的大特写中，Albulena 用刮棒取粉底上脸，用美妆蛋晕开，并以并排对比展示妆效。Reel 以手持 First Aid Beauty 罐装产品收尾。",
    "outcome": "一支以微距和质地为主的视频，把一款护肤产品与平滑的妆效联系起来。"
  },
  "meditherapy-aurela": {
    "title": "Meditherapy × Aurela Elshani",
    "summary": "Aurela Elshani 用特写镜头记录使用 Meditherapy 的 Hyaluronic Skin Booster First Serum 的 14 天。",
    "brief": "补水精华最适合用一段时间来呈现。在这支 Reel 中，Aurela 通过上脸特写和肌肤对比画面，生动呈现 Hyaluronic Skin Booster First Serum，突出它的补水益处，以及肌肤看起来更平滑、更饱满的状态。",
    "approach": "视频从额头细纹的特写开始，随后记录 Aurela 涂抹精华的过程，屏幕上标注天数：Day 1、Day 3、Day 7、Day 10 和 Day 14。镜头始终紧贴同一区域，观众可以自己对比肌理，Reel 以 Aurela 手持瓶身收尾。",
    "outcome": "一种日记式的特写形式，让产品和肌肤始终处于每个镜头的中心。"
  },
  "arencia-albina": {
    "title": "Arencia × Albina Mavriqi",
    "summary": "Albina Mavriqi 在一套眼下和脸颊的特写护肤步骤中展示 Arencia 的 NAD+ Booster Shot。",
    "brief": "眼下护理讲究精准。这支 Reel 以“POV: your skin needs NAD+”开场，介绍 Arencia 的 NAD+ Booster Shot，屏幕字幕指出细纹和皱纹是重点关注的区域。",
    "approach": "Albina 把淡紫色的产品点在眼下和脸颊上，再用面部工具推开抹匀。微距镜头展示产品在肌肤上的质地，管身也有清晰展示，Reel 最后以一个较远的镜头收尾，呈现她看起来有光泽、水润的肤色。",
    "outcome": "一支精致、注重细节的上脸视频，产品名称和质地都容易辨认。"
  },
  "revcell-loresa": {
    "title": "REVCELL × Loresa Konushevci",
    "summary": "Loresa Konushevci 把她的 REVCELL 护肤流程变成一场居家水疗，从 Vita Collagen Activfilm 到即时光泽。",
    "brief": "多步骤的护肤流程需要一个故事把它串起来。Loresa 把她的 REVCELL 流程设定为居家水疗日，文案为“Healthy, glowing skin starts with my REVCELL routine”（健康透亮的肌肤从我的 REVCELL 护肤流程开始）。",
    "approach": "Reel 从摆在托盘上的产品开始，随后逐步展示：把 Vita Collagen Activfilm 膜片敷在脸上，抹开一层乳霜质地的产品，再用针管式涂抹器上一款精华。视频以配有“Instant glow”字幕的特写收尾。",
    "outcome": "一支以生活方式为主线的护肤视频，按顺序、在真实场景中展示多款产品。"
  },
  "nyx-albulena": {
    "title": "NYX Professional Makeup × Albulena Mavriqi",
    "summary": "Albulena Mavriqi 用一款 NYX Professional Makeup 眉胶回应一个常见的困扰：眉毛总是塌下来。",
    "brief": "这支 Reel 以让人有共鸣的“POV: eyebrows keep falling?”开场，把一款 NYX Professional Makeup 眉胶呈现为解决办法。",
    "approach": "Albulena 近距离展示亮粉色的管身，把眉胶向上刷过眉毛，最后在自然光下呈现定型、上扬的眉毛。视频简短直接，每个镜头里都有产品和眉毛。",
    "outcome": "一种快速的“问题加解决方案”形式，适合短视频观看。"
  },
  "prada-beauty-rebecca": {
    "title": "Prada Beauty × Rebecca Ghaderi",
    "summary": "Rebecca Ghaderi 现身 Prada Beauty Touch Blush 快闪店，身着波点造型，在品牌粉色与红色的布景前拍摄。",
    "brief": "Rebecca 到访 Prada Beauty Touch Blush 快闪店，这是一个围绕新品上市布置的粉色与红色空间。她的图片帖在这里以幻灯片形式展示全部 11 张图片，从封面开始。",
    "approach": "这组轮播图在两类画面之间切换：Rebecca 身穿白衬衫和波点连衣裙、站在 Prada 和 Touch Blush 标识前的人像，以及腮红粉盒和布景的细节。封面图中，她置身快闪店，身后是 Touch Blush 陈列。",
    "outcome": "一则带大片感、以活动为主线的图片帖，由场景和造型来承载品牌的视觉风格。"
  },
  "mixsoon-dora": {
    "title": "Mixsoon × Dora Nguyen",
    "summary": "Dora Nguyen 把 Mixsoon 的 Bean Copper Peptide Firming Serum 涂在笑纹和额头上，并用简短字幕讲解每一步。",
    "brief": "细纹在能指给人看的时候最容易讲清楚。这支视频介绍 Mixsoon 的 Bean Copper Peptide Firming Serum，文案中把它称为 Dora 用铜肽精华“fading smile lines and forehead wrinkles”（淡化笑纹和额头皱纹）的方法。",
    "approach": "Dora 开场指着自己的笑纹和额头，字幕为“Treat These Aging Signals Before Getting Wrinkles”，随后在指间展示精华可拉伸的质地。她按压泵头取用，涂在脸颊、额头和眼下，再用一支细长的面部工具推匀，屏幕字幕提到铜肽、看起来更平滑、更紧致的肌肤，以及用于补水的豆类精粹。",
    "outcome": "一套近景拍摄、容易跟做的护肤步骤，从头到尾都让精华及其质地留在画面中，最后以瓶身本身收尾。"
  },
  "arencia-dora": {
    "title": "Arencia × Dora Nguyen",
    "summary": "Dora Nguyen 用 Arencia 的 NAD+ Booster Shot 为颈部安排了专属护理，以逐日的特写镜头呈现涂抹过程。",
    "brief": "在护肤流程中，颈部护理常常是事后才想起的一步。Dora 的文案“Neck care routine 💜 NAD+ Booster Shot”，把 Arencia 这支薰衣草紫的 booster 管放在一套专为颈部设计的流程中心。",
    "approach": "视频从 Dora 颈部的纹路和一句提问“Filler cream exists?”开始，接着从管中挤出薰衣草紫色的霜体。她在涂好的霜上用保鲜膜包住颈部，然后进入逐日的画面：在颈部画出波浪形的 booster 线条，再用指尖按压吸收。视频以她双手框住平滑、带柔和光泽的颈部收尾。",
    "outcome": "一套聚焦、视觉化的护理流程，由产品的颜色和质地来讲故事，全程以特写拍摄。"
  },
  "axis-y-dora": {
    "title": "AXIS-Y × Dora Nguyen",
    "summary": "Dora Nguyen 用一段简短的逐日肌肤日记记录 AXIS-Y 的 Dark Spot Correcting Glow Serum，重点关注痘印。",
    "brief": "痘印和肤色不均是一种缓慢的日常困扰。这支视频介绍 AXIS-Y 的 Dark Spot Correcting Glow Serum，Dora 的文案称它有助于淡化痘印、匀净不均的肤色并恢复健康光泽。",
    "approach": "Dora 以脸颊特写开场，配字“Fade acne & redness with just ONE product..”，把管身举到镜头前，再把精华挤到肌肤上。字幕标出日记的每个阶段以及她强调的要点：抗氧化成分、舒缓并让肤色看起来更均匀、平和自然的光泽，以及轻盈、吸收快的肤感。视频以两支管身举在她脸旁收尾。",
    "outcome": "一种简单的日记形式，让观众跟着看这款精华在几天中的使用，结尾在屏幕上标出产品名称。"
  },
  "medicube-dora": {
    "title": "Medicube × Dora Nguyen",
    "summary": "Dora Nguyen 展示 Medicube 的 Zero Pore Pads 不只能用在脸上，她从鼻子一直用到脚后跟。",
    "brief": "爽肤棉片通常只用在脸上。Dora 的文案“Your sign to add ‘zero pore’ toner pads to your skincare routine for clear skin”，为整支视频定下一个核心想法：这款棉片几乎哪里都能用。",
    "approach": "Dora 以“Reminder that you can use Zero Pore Pads anywhere”开场，把 Medicube Zero Pore Pad 的罐子举到镜头前。她用棉片擦拭鼻子和面部，此时字幕为“Clears pores & smooths skin texture”，随后转到腿部和腋下（“Get rid of strawberry skin”）、脚后跟（“Smooths dry heels”）和胸口（“Reduces chest acne”）。",
    "outcome": "一支快节奏、实用的视频，展示一款产品的多种日常用法，罐身在开头有清晰展示。"
  },
  "axis-y-qendresa": {
    "title": "AXIS-Y × Qendresa Konushevci",
    "summary": "Qendresa Konushevci 围绕 AXIS-Y 的 Dark Spot Correcting Glow Toner 和精华，搭建了一套从容的暗斑护理流程，分多日叠加使用。",
    "brief": "暗斑的淡化靠的是坚持，而不是某一个步骤。Qendresa 的文案“Fade the look of dark spots and reveal your natural glow”，把 AXIS-Y 的暗斑系列呈现为她日常护肤的一部分。",
    "approach": "视频从有瑕疵肌肤的特写开始，字幕为“My life saver”，随后切到 Qendresa 手持 Dark Spot Correcting Glow Toner。她把爽肤水按压进肌肤，把精华泵到脸颊和眼下并轻拍吸收，每次护肤都用不同的发带来区分。最后她把爽肤水和 Dark Spot Correcting Glow Serum 管身并排拿在手中。",
    "outcome": "一套轻松、可重复的护肤流程，配有柔和透亮的特写，两款 AXIS-Y 产品的名称都能在包装上看到。"
  },
  "arencia-qendresa": {
    "title": "Arencia × Qendresa Konushevci",
    "summary": "Qendresa Konushevci 在一份快速指南中，把 4 款 Arencia booster shot 与 4 种肌肤困扰一一对应，从唇色暗沉到笑纹。",
    "brief": "一个针对性 booster 系列，在每一款都对应一种困扰时更容易理解。Qendresa 的文案“Booster shots💜🤍🩷💛”，介绍了 4 支各有颜色的 Arencia 管装产品。",
    "approach": "Qendresa 开场手持 NAD+、Eraser Shot Glycolic Acid、PDRN 和 Vitamin C 四支 booster，配字“Always remember...”。随后屏幕字幕把每种困扰与一款 booster 配对：唇色暗沉配 Vitamin C，点涂在唇周；颈纹配 NAD+；闭口粉刺配 Glycolic Acid，用在额头；笑纹配 PDRN。",
    "outcome": "一份清晰的“哪款对应什么”指南，每个产品标签都留在画面中，给观众一份便于收藏的参考。"
  },
  "purito-qendresa": {
    "title": "Purito × Qendresa Konushevci",
    "summary": "Qendresa Konushevci 介绍 Purito 的 Retinol Retinal 2000 NAD+ Serum，展示如何摇匀以及上脸的样子。",
    "brief": "用 Retinol 还是 Retinal，是刚入门的人常问的问题。Qendresa 的文案点出了 Purito 的 Retinol Retinal 2000 NAD+ Serum，视频则用一款两者兼有的精华来回答这个问题。",
    "approach": "Qendresa 以“Your skin needs Retinol or Retinal...”开场，画面是她额头和眼下的特写，她的回答是“My skin both”。她举起瓶子，配字“Shake to activate retinol AND retinal”，然后用滴管把金色精华涂在全脸。字幕提到“Retinal + Retinol = Fast + deep care”以及摸起来更紧致的肤质，最后她拿着瓶子对镜头微笑收尾。",
    "outcome": "一支简短、信息清楚的视频，用通俗的话解释这款精华“二合一”的概念，并以特写呈现滴管上脸的过程。"
  },
  "dr-althea-qendresa": {
    "title": "Dr. Althea × Qendresa Konushevci",
    "summary": "Qendresa Konushevci 分享自己的肌肤故事，从青春期的痘痘到如今的护肤流程，其中用到 Dr. Althea 的 345 Relief Cream。",
    "brief": "肌肤故事一步一步讲出来时最显真诚。Qendresa 的文案“My skin didn’t change overnight, but every step was worth it.”，把 Dr. Althea 的 345 Relief Cream 呈现为她现在护肤流程的一部分。",
    "approach": "视频从过去长痘的特写开始，屏幕字幕讲到她整个青春期都在和痘痘打交道，随后切换到“My skin now...”。Qendresa 把面霜点在额头和脸颊上，用指尖轻拍吸收，再抹到颈部和前胸，最后以“From acne to clear skin”和举到镜头前的 345 Relief Cream 管身收尾。",
    "outcome": "一支个人化、节奏舒缓的视频，把 Qendresa 自己的故事与简单的上脸步骤结合起来，结尾产品清晰可见。"
  },
  "patrick-ta-anisa": {
    "title": "Patrick Ta × Anisa Hukmova",
    "summary": "Anisa Hukmova 带来一支“新手对比专业”的眼妆教程，用一支 Patrick Ta 棒状产品提拉并勾勒眼型。",
    "brief": "手法上的小改变，会让眼妆大不相同。Anisa 的文案“Eye makeup tutorial”标记了 Patrick Ta Beauty，视频围绕并排的“beginner ✗ / pro ✓”对比展开。",
    "approach": "Anisa 先在一侧画出烟熏眼妆，另一侧是更朴素的新手式眼妆。她用一支 Patrick Ta 棒状产品从眼尾向外画出一条浅色的提拉线，用刷子晕开，再把眼影带到眼窝褶皱和睫毛根部，最后呈现轮廓清晰、上扬的眼妆。",
    "outcome": "一支快速、容易照着做的教程，延续 Anisa 的特写风格，Patrick Ta 棒状产品清楚地拿在手中。"
  },
  "yesstyle-anisa": {
    "title": "YesStyle × Anisa Hukmova",
    "summary": "Anisa Hukmova 分享一个快速的丰唇小技巧，她在文案中说所用产品全部来自 YesStyle。",
    "brief": "唇妆组合是 Anisa 的招牌内容之一。她的文案介绍了一个“Lip Plumping Hack”，标记了 Holika Holika 和 Kaleidos Makeup，并说明视频中使用的所有产品都来自 YesStyle。",
    "approach": "Anisa 先涂口红，用棕色唇线笔把唇线画到唇外并填满唇形，再在边缘加上遮瑕，用唇刷晕开。最后她用一支红色管身的产品叠上一层水光，以饱满、玻璃感的双唇和举到镜头前的唇蜜收尾。",
    "outcome": "一套分步的唇妆组合，观众几秒钟就能跟上，完成的妆容和最后一款产品同框展示。"
  },
  "tirtir-anisa": {
    "title": "TIRTIR × Anisa Hukmova",
    "summary": "Anisa Hukmova 对比“+5Y”和“−5Y”两种腮红位置，用 TIRTIR 产品打造上扬、更柔和的红晕。",
    "brief": "腮红的位置可以改变整张脸。Anisa 的文案“+5y VS -5y with @TIRTIR Inc. from @YesStyle”，引出了偏低偏重的画法与上扬画法之间的快速对比。",
    "approach": "Anisa 给偏低、偏重的腮红打上叉，然后重新开始：先展示放在盒子上的 TIRTIR Mood Glider Lip & Blush，再用浅色遮瑕和一支红色腮红棒，从脸颊向太阳穴方向画出一条位置更高的线。她用刷子晕开，最后手持一支 TIRTIR 棒状产品，停在完成后更柔和的红晕旁。",
    "outcome": "一组快速的前后对比，让腮红位置容易记住，TIRTIR 包装全程出镜。"
  },
  "dr-althea-anhelina": {
    "title": "Dr. Althea × Anhelina Andrusik",
    "summary": "Anhelina Andrusik 拍摄了一套“glass skincare routine”，层层叠加的护肤步骤中包括一款 Dr. Althea 按压泵泡沫和该品牌的 345 Relief Cream。",
    "brief": "玻璃肌护肤流程在每一步都按顺序展示时最容易跟做。文案邀请观众收藏这支视频，这样就不用再猜该做哪些步骤；Dr. Althea 的产品是这套流程的核心，同时还有其他几款心爱的护肤品。",
    "approach": "在柔粉色背景前，Anhelina 以肌肤特写开场，字幕为“glass skincare routine”。她在镜头前完成每一步：从爽肤棉片、倒在掌心的乳状产品，到一款 Dr. Althea 按压泵泡沫，她把泡沫直接挤在额头和脸颊上；随后举起 345 Relief Cream，最后把一款提亮霜（strobe cream）抹在颧骨上收尾。",
    "outcome": "一套快速、便于收藏的护肤流程，结尾是清爽、看起来水润的肌肤特写，每款 Dr. Althea 产品都清楚地举到镜头前。"
  },
  "skin1004-anhelina": {
    "title": "SKIN1004 × Anhelina Andrusik",
    "summary": "Anhelina Andrusik 在新公寓里梳妆准备，SKIN1004 的 Madagascar Centella Ampoule 是她晨间护肤中的关键一步。",
    "brief": "“和我一起准备出门”类视频展示的是产品在真实流程中的样子，而不是单独出现。这支视频的文案为“Grwm in my new apartment”，记录了 Anhelina 的秋日早晨，SKIN1004 是她连同自己的韩国护肤品一起标记的品牌之一。",
    "approach": "在“get ready with me in my new apartment”的标题下，Anhelina 从起床、淋浴、穿衣一路来到梳妆台前。她在这里把爽肤水按压进肌肤，然后举起 SKIN1004 的 Madagascar Centella Ampoule，用滴管吸取并轻拍吸收，之后再叠加精华、眼贴和有色唇部产品。",
    "outcome": "一套柔和、富有美感的晨间流程，SKIN1004 安瓶在其中有自己的特写镜头，并展示了使用过程。"
  },
  "patrick-ta-anhelina": {
    "title": "Patrick Ta × Anhelina Andrusik",
    "summary": "Anhelina Andrusik 复刻一款有光泽感的秀场灵感妆容，核心是 Patrick Ta 色号为“in your dreams”的双色眼影。",
    "brief": "这支视频的屏幕标题是“Victoria’s Secret makeup tutorial”，目标是复刻柔和、有光泽的秀场妆容。文案指出，光泽眼影的秘诀是 Anhelina 新的心头好：Patrick Ta 的双色眼影，色号“in your dreams”。",
    "approach": "Anhelina 开场把完成的妆容与一张秀场参考图并排展示，然后一步一步完成全脸：底妆、遮瑕、修容、散粉和高光。她把 Patrick Ta 双色眼影举到镜头前，把闪片扫在眼皮上，最后完成睫毛膏、腮红、唇妆和眉毛。",
    "outcome": "一支全脸教程，观众可以从素颜一路跟到完成的妆容，Patrick Ta 双色眼影在中段有清晰展示。"
  },
  "purito-anhelina": {
    "title": "Purito × Anhelina Andrusik",
    "summary": "Anhelina Andrusik 第一次尝试 Purito 护肤品，以敏感、油性/混合性、易长痘肌肤使用者的身份逐一讲解每款产品。",
    "brief": "敏感肌观众在尝试之前，想先听听产品用起来的感受。Anhelina 在文案中说，自己是敏感、油性/混合性、易长痘肌肤的女生，第一次尝试 Purito Seoul，并感谢 YesStyle 和 Purito 寄来产品。",
    "approach": "Anhelina 直接对着镜头说话，开箱整个系列，并举起 Mighty Bamboo Panthenol Cream 和 Oat-in Calming Gel Cream。她在手背上试了一款面霜，一边讲一边把产品涂到脸上，最后把包括 Daily Soft Touch Sunscreen 在内的全套产品摆在面前。",
    "outcome": "一份真实、边用边讲的初次使用印象，每款 Purito 产品都留在画面中，让观众对质地和肤感有所了解。"
  },
  "abib-vania": {
    "title": "Abib × Vania Fernandes",
    "summary": "Vania Fernandes 在疲惫的眼下肌肤上测试 Abib 的 Collagen eye patch（Jericho rose jelly），从早上 8 点的特写到并排的前后对比。",
    "brief": "眼下看起来疲惫，是常见的晨间困扰。Vania 在文案中称它是自己早晨最大的敌人，并着手测试 Abib 的果冻胶原眼贴，想知道它是否值得加入护肤流程。",
    "approach": "Vania 以标有“8:00 am”的眼下特写开场，然后把 Abib Collagen eye patch 的罐子举到镜头前。她贴上果冻眼贴，屏幕上显示“wait 20-30 min”，揭下其中一片，接着是“final result”镜头和前后对比的分屏画面。",
    "outcome": "一种简短、清晰的“测试加揭晓”形式，罐身和眼贴的果冻质地都以特写呈现。"
  },
  "fenty-skin-vania": {
    "title": "Fenty Skin × Vania Fernandes",
    "summary": "Vania Fernandes 开箱 Fenty Skin 节日款 Quench Kit，并在一套快速的三步流程中用上其中的迷你装。",
    "brief": "节日套装在内容物被真正用起来、而不只是展示时最容易理解。Vania 在文案中说 Fenty 节日系列“understood the assignment”，还说自己迷上了 Quench Kit 里的迷你装。",
    "approach": "Vania 把套装从带插画的礼盒中取出，并在屏幕上标出每件单品的名称：Mini Backpack、Few N Plump Intensive Hydration Mask、Plush Puddin’ Intensive Recovery Lip Mask 和 Fat Water Hydrating Milky Toner。随后她依次完成“step 1: toner”“step 2: leave in mask”和“step 3: lip treatment”，再把迷你装放回背包。",
    "outcome": "一支有节日氛围的开箱视频，同时也是一套简单的护肤流程，套装中的每款产品都有名称标注并展示了使用过程。"
  },
  "skin1004-vania": {
    "title": "SKIN1004 × Vania Fernandes",
    "summary": "Vania Fernandes 把 SKIN1004 的 Probio-Cica Bakuchiol Eye Cream 涂在黑眼圈处，并带来快速的前后对比。",
    "brief": "黑眼圈是被搜索最多的护肤困扰之一。Vania 在文案中说自己迷上了 SKIN1004 的 Probio-Cica Bakuchiol Eye Cream，并问她的受众是否应该做一次更长时间的测试。",
    "approach": "视频以她眼下的大特写开场，屏幕上是“dark circles???”。Vania 直接从标有“CENTELLA Probio-Cica Eye Cream”的管中把眼霜点涂上去，用指尖轻拍吸收，最后以“before”和“after”对比收尾，并把管身举在脸旁。",
    "outcome": "一支快速、聚焦的特写视频，几秒钟内展示了质地、上脸过程和管身。"
  },
  "medicube-vania": {
    "title": "Medicube × Vania Fernandes",
    "summary": "Vania Fernandes 第一次尝试 Medicube Booster Pro，搭配 Collagen Jelly Cream 使用，并展示使用后当下的肌肤状态。",
    "brief": "美容仪需要让人看到使用过程：怎么握、怎么移动，以及用后肌肤看起来如何。Vania 在文案中写道，她“finally trying the viral medicube booster pro”。",
    "approach": "Vania 开场时屏幕上是“trying the viral medicube booster pro”，她举起 Collagen Jelly Cream 并涂抹，然后展示仪器设置为“booster mode: level 1”。她让仪器滑过脸颊和眼下，转头展示两侧，最后以“the finish immediately after”收尾。",
    "outcome": "一支干净利落的仪器特写演示，从头到尾都让 Booster Pro 和面霜留在画面中。"
  },
  "purito-ardita": {
    "title": "Purito × Ardita Gashi",
    "summary": "Ardita Gashi 展示 Purito 面向敏感肌的 Oat-in Calming 护理，从乳状的第一步到舒缓的啫喱面霜。",
    "brief": "敏感、易长痘的肌肤需要温和的步骤。文案把这支 Reel 描述为针对这类肤质的细致护理，用 Purito Seoul 的 Oat-in Calming 系列带来“gentle cleansing, soothing hydration and barrier care”（温和清洁、舒缓保湿和屏障护理）。",
    "approach": "Ardita 把白色 Purito 瓶中的乳状产品倒在脸颊、手和锁骨上，然后举起 Oat-in Calming Gel Cream，挤在手背上，再按压进肌肤。Reel 以她披下头发、清爽水润的肌肤状态收尾。",
    "outcome": "一套简短、注重感官体验的护肤流程，两款产品都留在画面中，让质地自己说话。"
  },
  "abib-ardita": {
    "title": "Abib × Ardita Gashi",
    "summary": "Ardita Gashi 在打造平滑底妆之前，用 Abib 的 Collagen eye patch 给眼下区域更多关注。",
    "brief": "文案把这一步定位为针对眼下细褶的步骤，“giving this step the attention it deserves”（给这一步应有的重视），并标记了 Abib，同时带上 Iron Patch 和 Collagen 话题标签。",
    "approach": "Ardita 以眼下特写开场，配字“My under-eye creases keep getting more noticeable”，随后为这一区域做准备，屏幕上出现“This Iron Patch helps smooth the look of fine lines”。接着她上遮瑕和粉底，展示“After”特写，最后把 Abib Collagen eye patch 的罐子举到镜头前。",
    "outcome": "一个从妆前准备到上妆的快速故事，把护肤与看起来更平滑的底妆联系起来，结尾清楚展示罐身。"
  },
  "anua-ardita": {
    "title": "Anua × Ardita Gashi",
    "summary": "Ardita Gashi 喷上 Anua 的 PDRN 和玻尿酸胶囊喷雾，再用面霜锁住，呈现水润、看起来饱满的肌肤状态。",
    "brief": "文案把 Anua 的 Blue Dewy Spray 介绍为一种“dewy, plump & glowing skin in a mist”（一喷拥有水润、饱满、透亮肌肤）的方式。视频的重点是这款喷雾能多快融入护肤流程。",
    "approach": "Ardita 举起瓶子，屏幕上是“All you need is this…”，然后把喷雾喷在面部和颈部，字幕提到 PDRN、胶原蛋白和“Deep Hydration & Plumpness”。她把一款 Anua 面霜点在面部和颈部，配字“A cream to lock in hydration”，抹匀后以“After”特写收尾。",
    "outcome": "一套快速的特写护肤流程，展示喷雾和面霜的使用过程，最后呈现清爽水润的光泽。"
  },
  "axis-y-ardita": {
    "title": "AXIS-Y × Ardita Gashi",
    "summary": "Ardita Gashi 用一周时间给眼下使用 AXIS-Y 的 Vegan Collagen Eye Serum，并用它的冰感滚珠头涂抹。",
    "brief": "文案把 AXIS-Y 的 Vegan Collagen Eye Serum 介绍为她为“fresh under-eyes, healthy glow”（清爽眼下、健康光泽）选择的产品。视频围绕一个简单的日常习惯展开：一款眼部精华，每天使用，持续一周。",
    "approach": "Ardita 贴近镜头开场，屏幕上是“My eyes were in need of this serum”，然后举起绿色瓶盖的管身和它的滚珠头。她在 day 1、day 4 和 day 7 把它涂在眼下，最后在柔和的日光中把管身举在脸旁收尾。",
    "outcome": "一套清晰的日记式护肤流程，准确展示滚珠涂抹头的用法，延续 Ardita 自己的特写风格。"
  },
  "john-farmer-gvantsa": {
    "title": "John Farmer × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili 把 JOHN FARMER 的 Ginseng Caffeine 洗发水变成一套宁静的烛光护发流程，从第一捧泡沫到有光泽、看起来健康的秀发。",
    "brief": "韩国护发产品常常通过成分来讲解。Gvantsa 的 Reel 介绍 JOHN FARMER Ginseng Caffeine，她在文案中说它含有“real whole ginseng”（真正的整根人参）和咖啡因，有助于维护健康的头皮和看起来更健康的头发。",
    "approach": "Reel 从与蜡烛一起摆放的琥珀色瓶子开始，随后进入淋浴间：按压出洗发水，在头皮上揉出丰富的泡沫，再冲洗过发丝，产品始终留在画面中。结尾是穿着浴袍的 Gvantsa，用手拨过柔软有光泽的头发。",
    "outcome": "一支节奏舒缓、富有氛围感的护发视频，让产品保持在中心位置，并以完成后的头发收尾。"
  },
  "medicube-gvantsa": {
    "title": "Medicube × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili 同时敷上两款 Medicube 凝胶面膜，一款主打光泽，一款主打紧致，并在同一张脸上做对比。",
    "brief": "“Same face, two different masks, so which one does your skin need?”（同一张脸，两款不同的面膜，你的肌肤需要哪一款？）文案介绍了 Medicube 的 PDRN Pink Collagen Gel Mask，用于暗沉、疲惫的日子，以及 EGF NAD Firming Gel Mask，用于她希望肌肤看起来更平滑、更紧致的时候。",
    "approach": "Gvantsa 举起每个包装，然后把粉色面膜敷在半边脸上，把颜色更深的玫瑰色面膜敷在另外半边，字幕说明各自的侧重点。几小时后两款面膜都变得透明，她把面膜揭下，展示清爽、平滑的肌肤状态。文案还提到，她会把剩下的面膜片用在笑纹和颈部。",
    "outcome": "一组一目了然的半脸对比，帮助观众在两款面膜之间做选择，画面平静、贴近镜头。"
  },
  "estee-lauder-gvantsa": {
    "title": "Estée Lauder × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili 的“makeup with me”流程，以 Estée Lauder 的 Advanced Night Repair 和 Double Wear 粉底为基础。",
    "brief": "一种“和我一起化妆”的形式，文案中带有 #esteelauder 标签，从妆前护肤开始，用 Estée Lauder 产品一步步完成柔和、完整的妆容。",
    "approach": "Gvantsa 在梳妆镜前开场，然后举起 Advanced Night Repair 精华、Double Wear 粉底和一支金色外壳的睫毛膏。她涂上精华，按压上底妆，用散粉定妆，再用刷子添上色彩，最后对着手持镜刷睫毛膏，并看向镜头收尾。",
    "outcome": "一套轻松的分步流程，产品始终留在画面中，最后呈现自然、精致的妆效。"
  }
}
