import type { TalentUi } from '@/lib/data/talent-ui'
import type { LegalCopy } from '@/lib/data/people-translated'

// Chinese talent-profile labels, roster bios and legal pages, served under /zh/.
// Translated from the roster bios in sources.ts and the legal defaults in
// lib/site-content/definitions.ts. Plain data.

export const talentUi: TalentUi = {
  "roleYoutube": "YouTube 创作者",
  "roleSocial": "Instagram 和 TikTok 达人",
  "fallbackBio": "{name} 是 CA Agency 代表的一位才华出众的内容创作者，以创作能在各大社交媒体平台引起受众共鸣的精彩内容而为人所知。",
  "fallbackDescription": "{name} 是 CA Agency 代表的创作者。了解 {name} 的内容、受众以及品牌合作机会。",
  "shareFallback": "来看看 {name}，CA Agency 的一位才华出众的创作者",
  "collaborate": "有意与 {name} 合作？",
  "getInTouch": "联系我们",
  "campaigns": "与 CA Agency 合作的营销活动",
  "moreYoutube": "更多 YouTube 创作者",
  "moreTalents": "更多达人",
  "backToTalents": "返回全部达人"
}

export const bios: Record<string, string> = {
  "yassuo": "Yassuo 是最知名的 League of Legends 创作者之一，以他的 Yasuo 操作而闻名。他的长篇游戏视频、精彩集锦和直播为他在 YouTube 上积累了超过 140 万订阅者，在 TikTok 上积累了约 24 万粉丝，同时在 Twitch 和 Kick 上拥有活跃的直播社群。他与游戏领域内外的品牌合作，从外设、硬件和能量饮料，到游戏和应用的发布。他在游戏社群中的长期影响力，让品牌能够直接触达一批忠实且高度活跃的受众。",
  "albina-mavriqi": "Albina Mavriqi（@albina）已成为护肤领域最受信赖的声音之一。她的内容致力于把护肤讲得清楚易懂，通过成分解析、详细的护肤步骤和真诚的产品测评来呈现，并常常辅以使用前后的对比效果。这种注重科普的方式，为她在 Instagram 上建立了超过 110 万粉丝的忠实社群，在 TikTok 上也有超过 26 万粉丝。她的合作经历包括为 Sephora、Medicube、Mixsoon、Torriden、Arencia 和 Lilyeve 打造的营销活动，从以成分为主导的新品发布到持续的品牌合作。对品牌而言，她兼具大规模的触达力和真正的公信力，这样的组合十分难得，能把认知转化为有依据的购买决定。",
  "luka": "Luka（Lux27）创作旅行和冒险类 vlog，内容从长途公路旅行到现场活动报道，同时也发行自己的音乐。这样的组合为他在 YouTube 上赢得了约 50 万订阅者，在 Instagram 上赢得了超过 57 万粉丝，并以 @lukabojovic23 的账号在 TikTok 上拥有超过 33 万粉丝。他在这三个平台上与旅行、汽车、科技和生活方式品牌合作。他以故事为主线的 vlog，让品牌能够自然地融入令人难忘、以冒险为主题的内容之中。",
  "rebecca-ghaderi": "Rebecca Ghaderi 的内容以沉静而高雅的美学为特色。她以质地为重点的视频，着重展现产品在肌肤上的外观和触感，这一风格为她在 Instagram 上赢得了超过 250 万粉丝，她同时也活跃于 TikTok 和 YouTube。她的社群向她寻求温和护肤和高端美妆方面的推荐。她曾与 Haruharu Wonder、ELLIS Brooklyn、Saie 和 Prada Beauty 合作，以她标志性的精致风格呈现每一个品牌。她将出众的触达力与高端的视觉形象相结合，为每一次合作同时带来规模与声望。",
  "anton-drozhzhin": "Anton Drozhzhin（@closmain）致力于让男士也能轻松接触护肤。他对 K-beauty 护肤步骤的逐步讲解清晰明了、不用术语，让新手有信心建立属于自己的护肤流程。这种方式为他在 TikTok 上赢得了近 79 万粉丝，在 Instagram 上赢得了超过 65 万粉丝，使他成为男士护肤领域的重要参考。他曾为 SKIN1004 和 VT Cosmetics 打造营销活动，把韩国护肤介绍给一批全新且高度活跃的受众。对于希望在男士护肤领域成长的品牌，他是一位可信且有影响力的合作伙伴。",
  "choda": "Choda 是一位 YouTuber 和直播主，他的 vlog 涵盖旅行、体育和现场活动，从 FIFA World Cup 到他的第一次中国之行。他的内容为他在 YouTube 上积累了近 130 万订阅者，在 Instagram 上积累了超过 75 万粉丝，并以 @choda19a 的账号在 TikTok 上拥有超过 62 万粉丝。他通过 YouTube 长视频、直播和短视频，与旅行、体育、科技和生活方式领域的品牌合作。他能把大型活动呈现得生动鲜活，这使他成为高曝光营销活动的有力合作伙伴。",
  "voyage": "Voyage 是一位音乐人，他的歌曲、专辑混音和歌词视频为他在 Instagram（@voyage.mp3）上赢得了近 90 万粉丝，在 YouTube 上赢得了超过 20 万订阅者。他的社群首先是为音乐而关注他，这让品牌合作可以成为一次作品发布的一部分，而不是一条普通的赞助帖子。他是以音乐为主导的营销活动和新品发布的理想合作伙伴。这种富有创意的方式让品牌留下令人难忘的印象，其影响远远超出单条帖子。",
  "melly-sanchez": "Melly Sanchez（@thefashionfreakk）在 TikTok 上拥有超过 220 万粉丝，在 Instagram 上拥有近 150 万粉丝，是美妆领域最知名的名字之一。鲜明的个人风格塑造了她的内容，她通过细致的特写上妆，把美妆呈现为完整造型的一部分。她庞大而活跃的社群既看重她带来的灵感，也看重她真诚的初次使用感受。她曾担任 Fenty Beauty、NARS、Huda Beauty、Rare Beauty 和 Too Faced 营销活动的主角，其中包括一条关于 Fenty 的 Pro Filt'r Fluid Flex Foundation 的初次使用感受视频。她与领先高端品牌合作的过往成绩，使她成为备受瞩目的新品发布的可靠之选。",
  "windoh": "Windoh 制作富有野心、高制作水准的 YouTube 内容，从超级跑车和旅行到大型挑战项目，旨在从头到尾抓住观众的注意力。他在 YouTube 上建立了超过 170 万订阅者的忠实社群，在 Instagram 上拥有超过 75 万粉丝，此外还在 Twitch 上直播。他与汽车、科技、游戏和生活方式品牌合作，形式从视频内的植入片段到直播活动。他的制作质量和叙事能力，确保品牌植入与内容本身同样引人入胜。",
  "dariia-bordun": "Dariia Bordun（@_idareen_）以她精致、注重细节的美妆风格而受到认可。她以上妆过程为主的视频逐步呈现每一款产品，特写画面精致考究，使她与奢侈品牌天然契合。她在 Instagram 上拥有超过 42 万粉丝，在 TikTok 上的影响力也在不断增长，她呈现的妆容既令人向往，又能够实现。她曾与 Chanel Beauty、Armani Beauty、Valentino Beauty、YSL Beauty、Kiko Milano、Vichy 和 Lashify 合作。她的内容具有杂志大片式营销活动的高端质感，同时保持社交媒体原生的风格。",
  "baka": "Baka（@bakaprase）是一位广为人知的喜剧和娱乐创作者。他的内容为他在 Instagram 上建立了超过 170 万粉丝的高度活跃社群，在 TikTok 上也有近 90 万粉丝，他的视频在自己的粉丝群之外也被广泛分享。他与品牌在新品发布、应用推广和长期合作方面展开合作。他的幽默让品牌能以自然、令人难忘的方式大规模触达广泛的受众。",
  "aiym-kablan": "Aiym Kablan 的内容建立在一个简单的原则之上：不仅要了解该用什么，还要了解它为什么重要。在 Instagram（超过 57 万粉丝）、TikTok（约 21 万）和 YouTube（超过 27 万订阅者）上，她用心而清晰地带领社群了解她护肤流程中的每一步。她在三个平台上的布局，让品牌能够把深入的 YouTube 内容与有冲击力的短视频结合起来。她的合作包括为 Purito 打造的多支视频的屏障护理营销活动，以及与 K-SECRET 的合作。她细致周到、研究充分的方式，使她在多视频营销活动和长期合作中尤其有成效。",
  "jay-sadiq": "Jay Sadiq 的内容涵盖男士穿搭、仪容打理、护肤和生活方式，其理念是自我护理是出色风格不可或缺的一部分。他以自信和真实的态度分享穿搭灵感、打理技巧和护肤流程。他的社群包括 TikTok 上超过 72 万粉丝、Instagram 上超过 35 万粉丝以及他的 YouTube 频道 @jaystyle_，他们期待他帮助自己提升外在形象和日常习惯。他曾为 Mixsoon 和 Rejuran 打造营销活动，以自然、可信的方式向他的受众介绍 K-beauty 护肤。对于希望通过男士真正愿意互动的内容来触达他们的品牌，他是一位实力出众的合作伙伴。",
  "beatrix-ramosaj": "Beatrix Ramosaj 专注于让产品效果自己说话的内容。她的试色上妆视频和注重成品效果的护发内容，清晰细致地展示颜色、质地和显色度，为她在 Instagram 上的近 70 万粉丝和不断壮大的 TikTok 社群同时带来灵感和实用价值。她的合作经历包括为 Patrick Ta、Juvia's Place、Gisou、Abib 和 Biodance 打造的营销活动，其中包括围绕 Patrick Ta 腮红系列创作的柔和“过渡腮红”妆容。在需要清楚展示质地、色号范围和妆效的新品发布中，她的内容尤其有效。",
  "khutjo-matsoma": "Khutjo Matsoma 创作植根于她日常生活习惯的生活方式和美妆内容。从护肤品到消费科技产品，各类产品自然地出现在她的一天之中，让合作显得真实而非推销。她在 Instagram 上建立了约 30 万粉丝的忠实社群，在 TikTok 上拥有超过 37 万粉丝。她的合作经历包括为 Medicube、Dr. Althea、Frankly、IUNIK 和 Samsung 打造的营销活动，横跨 K-beauty 护肤和科技领域。她的多面性让她能够代表多个品类的品牌，同时保持一致而真实的个人风格。",
  "albulena-mavriqi": "Albulena（Lena）Mavriqi 因她贴近生活、真实自然的美妆风格而受到喜爱。她的内容融合了彩妆、护肤和日常生活，以自然、有生活气息而非刻意摆拍的方式呈现产品。Instagram 上超过 41 万粉丝和 TikTok 上超过 10 万粉丝既关注她的护肤和化妆流程，也关注她的日常。她曾为 Purito、NYX Professional Makeup 和 First Aid Beauty 打造营销活动，涵盖护肤和彩妆。她自然的风格帮助品牌以亲切而真诚的方式与受众建立联系。",
  "georgii-galaev": "Georgii Galaev（@pomogisebe）是一位视频博主，以他聊天式、值得信赖的风格而为人所知。他实用而真诚的内容帮助社群发现能让日常生活更轻松的产品，使他的推荐带有个人色彩而非推销意味。他在 Instagram 上积累了约 47 万粉丝。他的合作包括 YesStyle，他在其中向粉丝介绍了如何发现和选购韩国护肤品，此外还有 Anua 和 AXIS-Y。他能够清晰、自然地讲解产品，这使他成为美妆品牌和电商品牌的有力合作伙伴。",
  "anisa-hukmova": "Anisa Hukmova（@anisavisage）以清晰的分步教程而为人所知，这些教程准确示范一款产品该如何使用。她对科普的投入，为她在 Instagram 上建立了超过 75 万粉丝的忠实社群，在 TikTok 上有约 18 万粉丝，在 YouTube 上有超过 11 万订阅者。她将短视频内容与较长的 YouTube 视频相结合，与既想启发受众也想传授知识的美妆和护肤品牌合作。她的教程为品牌带来持久、高价值的内容，在发布很久之后仍能持续提供信息并促成转化。",
  "melani-seiffert": "Melani Seiffert 以她的 get-ready-with-me 视频而为人所知，她创作的美妆内容精致而又有个人特色。她把产品无缝融入受众本就在关注的日常流程之中，使合作显得真实自然。她在 TikTok 上拥有超过 57 万粉丝，在 Instagram 上拥有超过 15 万粉丝，这反映出一个既看重她的专业能力、也看重她亲和风格的社群。她曾与 Revolve Beauty、SKIN1004、d'Alba 和 Medicube 合作，涵盖彩妆和 K-beauty 护肤。对于希望成为受众日常流程一部分的品牌，她的内容非常契合。",
  "saranda-mavriqi": "Saranda Mavriqi 热衷于护肤背后的科学：产品里有什么成分，以及它为什么有效。她以护肤流程为主的视频信息丰富、简洁清爽、易于跟随，她的社群依靠她来分辨有效的产品和一时的潮流。她在 Instagram 上拥有超过 36 万粉丝，TikTok 受众也在不断增长，她曾为 DELERE、d'Alba 和 Beauty of Joseon 打造营销活动，其中包括向粉丝介绍 DELERE 的奢华成分。对于产品有精彩故事可讲的品牌，从核心成分到可见的效果，她都是理想的合作伙伴。",
  "vania-fernandes": "Vania Fernandes 是一位已获认证的美妆、护肤和生活方式创作者，在各平台上保持着强劲而稳定的影响力。在拥有超过 64 万粉丝的 TikTok 上，她分享护肤流程、get-ready-with-me 视频和可见的使用前后对比效果，而她的 Instagram（超过 7 万粉丝）则展示她的穿搭、健身和生活方式。她是 Fashion Nova 的品牌大使，也创作过科技内容，包括为 Samsung Galaxy S26 Ultra 创作的内容。她在美妆、生活方式和科技领域的经验，使她成为适合众多品牌的多面合作伙伴。",
  "aurela-elshani": "正如她的账号名所示，Aurela Elshani（@glowbyaure）专注于健康、有光泽的肌肤。她的内容细致入微地呈现护肤流程、质地和效果，她以护肤为核心的社群在 Instagram 上有超过 12 万粉丝，在 TikTok 上有超过 3.5 万粉丝，他们依靠她获得真诚、注重效果的推荐。她曾为韩国护肤品牌 Arencia 和 Meditherapy 打造营销活动。她专注的专业能力，使她成为希望展示真实效果的 K-beauty 和护肤品牌的自然之选。",
  "qendresa-konushevci": "Qendresa Konushevci 的内容围绕真诚和可见的效果展开。她分享护肤技巧、妆容和使用前后的对比，展示一款产品随时间推移的表现。这种透明的方式为她在 Instagram 上赢得了超过 10 万粉丝的紧密社群，她同时也活跃于 TikTok。她与寻求真实、注重效果的内容的美妆和护肤品牌合作。她在社群中的公信力，使她的推荐格外有说服力。",
  "dora-nguyen": "Dora Nguyen（@soleildoraa）是一位护肤创作者，以她透亮的玻璃肌效果而受到认可。她分享身体护理、去角质和提亮流程、妆前护肤、唇部护理以及使用前后的对比效果，全部以简洁清爽的特写风格呈现。她在 Instagram 上拥有超过 4 万粉丝，在 TikTok 上拥有超过 2.7 万粉丝，建立了一个信任她推荐的忠实社群。她与寻求注重效果的内容的护肤、美妆和生活方式品牌合作。她可见的效果和始终如一的美学风格，使她成为提亮、身体护理和光泽类产品的有吸引力的合作伙伴。",
  "anhelina-andrusik": "Anhelina Andrusik（@theanhelinaa）把快速化妆技巧和美妆妙招与精致、华丽的美学结合在一起。她的内容还延伸到护肤、美甲灵感、旅行和生活方式，目的都是让美变得触手可及。她建立了一个在 Instagram 上超过 10 万粉丝、在 TikTok 上超过 6 万粉丝的社群，他们欣赏她优雅而平易近人的风格。她与寻求时尚、富有启发性的内容的美妆、护肤和生活方式品牌合作。她快速、实用的形式，非常适合希望内容既易于分享又便于照着做的品牌。",
  "gvantsa-okinashvili": "Gvantsa Okinashvili（@iamgvantsi）以她对高端细节的眼光而与众不同。她的特写内容呈现护肤步骤、面膜、香氛和彩妆，画面简洁清爽、精致考究，使她成为奢侈和高端美妆品牌的自然合作伙伴。她在 Instagram 上拥有超过 10 万粉丝，同时也以 @gvantsaoki 的账号活跃于 TikTok。她曾与 Medicube、Huda Beauty、Estée Lauder、Valentino Beauty、Prada Beauty 和 TIRTIR 合作创作内容。她精致的视觉风格确保每一款产品都以最佳状态呈现。",
  "ardita-gashi": "Ardita Gashi 以简洁清爽、平易近人的风格呈现妆容和护肤流程，让每一款产品都容易理解。她在 Instagram 上拥有超过 7.5 万粉丝的紧密而活跃的社群，加上她的 TikTok 受众，都看重她的真实，并经常向她寻求推荐。她曾为 Purito 打造过一场营销活动，并与寻求真诚、以日常流程为主的内容的美妆和护肤品牌合作。她与社群之间的紧密联系，帮助品牌从第一条帖子起就建立信任。",
  "loresa-konushevci": "Loresa Konushevci 创作涵盖美妆流程、穿搭和旅行的多元内容。这种多样性让她在 Instagram 上超过 9 万粉丝的社群以及她的 TikTok 受众，能够全面了解她的风格和日常生活，同时也为品牌提供了多种自然融入她内容的方式。她曾与 Celimax、ECLADO 和 REVCELL 合作，涵盖 K-beauty 护肤和美容科技。她紧密而活跃的社群，使她成为单次新品发布和较长期合作的宝贵合作伙伴。"
}

export const legal: LegalCopy = {
  "notice": "本译文仅为方便阅读而提供。本页面的英文版本为具有效力的正式文本。",
  "readEnglish": "阅读英文版本",
  "lastUpdated": "最后更新：{date}",
  "privacy": {
    "metaTitle": "隐私政策",
    "metaDescription": "了解 CA Agency 如何依照阿联酋数据保护法规收集、使用和保护您的个人数据，以及我们处理这些数据的目的。",
    "title": "隐私政策",
    "lastUpdated": "2024 年 12 月 27 日",
    "html": "<h2>1. 引言</h2><p>本文件为 CA Agency 的隐私政策，说明在您访问我们的网站或使用我们的网红营销和达人管理服务时，我们如何收集、使用、披露和保护您的个人数据。</p><h2>2. 数据控制者</h2><p>CA Agency 是对您的个人数据负责的数据控制者。如对本政策有任何疑问，请通过 info@caagency.com 与我们联系。</p><h2>3. 我们收集哪些个人数据</h2><ul><li>联系信息，例如姓名、电子邮件地址、电话号码和公司名称。</li><li>职业信息，例如职位、社交媒体账号和作品集链接。</li><li>达人申请数据，包括照片、视频和社交媒体统计数据。</li><li>业务咨询详情和沟通记录。</li><li>设备信息、使用数据和 Cookie。</li></ul><h2>4. 我们如何使用您的个人数据</h2><ul><li>提供我们的网红营销和达人管理服务。</li><li>回复咨询并就我们的服务进行沟通。</li><li>为营销活动将品牌与合适的网红相连接。</li><li>管理合同、付款和业务关系。</li><li>改进我们的网站、遵守法律并保障安全。</li></ul><h2>5. 处理的法律依据</h2><ul><li>合同的履行。</li><li>正当利益。</li><li>法定义务。</li><li>在需要时取得的同意。</li></ul><h2>6. 我们如何共享您的数据</h2><p>我们可能与客户、服务提供商、法律主管机关共享个人数据，或在业务转让相关的情形下共享个人数据。我们不出售个人数据。</p><h2>7. 国际数据传输</h2><p>我们可能在采取适当保障措施的前提下，将个人数据传输至阿联酋境外。</p><h2>8. 数据保留</h2><p>我们仅在为实现本政策所述目的以及满足法律或运营要求所必需的期限内保留个人数据。</p><h2>9. 您的权利</h2><p>在适用法律规定的范围内，您可能有权访问、更正、删除您的个人数据或限制对其的处理。</p><h2>10. 联系方式</h2><p>如有与隐私相关的问题，请联系 <a href=\"mailto:info@caagency.com\">info@caagency.com</a>。</p>"
  },
  "terms": {
    "metaTitle": "服务条款",
    "metaDescription": "CA Agency 的服务条款，涵盖网站和服务的使用、付款、知识产权以及法律条件。",
    "title": "服务条款",
    "lastUpdated": "2024 年 12 月 27 日",
    "html": "<h2>1. 协议</h2><p>本服务条款适用于您对 CA Agency 网站和服务的使用。</p><h2>2. 服务</h2><p>CA Agency 提供网红营销、创作者管理、营销活动执行以及相关的数字服务。</p><h2>3. 客户的责任</h2><ul><li>提供准确的营销活动信息和时间安排。</li><li>及时审批交付成果。</li><li>按照合同支付约定的费用。</li></ul><h2>4. 达人的责任</h2><ul><li>按照约定的规格创作并交付内容。</li><li>在合作中保持真实性和透明度。</li><li>遵守平台条款和披露要求。</li></ul><h2>5. 知识产权</h2><p>营销活动内容的所有权和许可，以各方之间适用的协议为准。</p><h2>6. 付款条款</h2><p>付款时间安排、币种以及逾期付款的后果，由适用的书面协议规定。</p><h2>7. 保密</h2><p>各方均须对保密信息予以保密，包括营销活动策略、定价和效果数据。</p><h2>8. 责任限制</h2><p>在法律允许的范围内，CA Agency 不对间接损害或后果性损害承担责任，且责任总额以相关协议的规定为限。</p><h2>9. 适用法律</h2><p>本条款受阿拉伯联合酋长国法律管辖，争议由阿联酋迪拜的法院管辖。</p>"
  },
  "businessLicense": {
    "metaTitle": "营业执照",
    "metaDescription": "CA Agency 的营业执照和注册信息。阿联酋迪拜的持牌网红营销机构。注册号 2417532.01。",
    "imageAlt": "CA Agency 营业执照",
    "companyInformation": "公司信息",
    "legalDocuments": "法律文件",
    "title": "营业执照",
    "imageUrl": "/images/site/business-license-2026.webp",
    "companyInfo": [
      {
        "label": "公司名称",
        "value": "CA Agency L.L.C-FZ"
      },
      {
        "label": "执照编号",
        "value": "2417532.01"
      },
      {
        "label": "公司类型",
        "value": "有限责任公司（自由区）"
      },
      {
        "label": "注册地址",
        "value": "Meydan Grandstand, 6th floor\nMeydan Road, Nad Al Sheba\nDubai, 阿拉伯联合酋长国"
      },
      {
        "label": "经理",
        "value": "Ilias Chaabit"
      },
      {
        "label": "联系邮箱",
        "value": "info@caagency.com",
        "href": "mailto:info@caagency.com"
      }
    ],
    "about": {
      "title": "关于 CA Agency",
      "paragraphs": [
        {
          "text": "CA Agency 是一家持牌的全方位网红营销机构，总部位于阿拉伯联合酋长国迪拜。我们成立于 2019 年，专注于在 Instagram、TikTok 和 YouTube 上连接全球品牌与顶尖内容创作者。"
        },
        {
          "text": "本机构依照阿联酋商业法规运营，并在 Meydan Free Zone 管理机构注册。"
        }
      ]
    },
    "documents": [
      {
        "label": "2026 年营业执照（PDF）",
        "href": "/assets/rev-2026-07/ca-agency-business-license-2026.pdf"
      },
      {
        "label": "服务条款",
        "href": "/terms-of-service"
      },
      {
        "label": "隐私政策",
        "href": "/privacy-policy"
      }
    ]
  }
}
