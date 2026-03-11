import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'chat',
    name: 'AI聊天助手',
    icon: 'MessageSquare',
    tools: [
      { id: 'chatgpt', name: 'ChatGPT', description: 'OpenAI开发的AI聊天机器人，最强大的对话AI', url: 'https://chat.openai.com', tags: ['聊天', '写作', '编程'], isHot: true },
      { id: 'claude', name: 'Claude', description: 'Anthropic开发的AI助手，擅长长文本处理', url: 'https://claude.ai', tags: ['聊天', '写作', '分析'], isHot: true },
      { id: 'gemini', name: 'Gemini', description: 'Google开发的AI助手，多模态能力强', url: 'https://gemini.google.com', tags: ['聊天', '搜索', '多模态'], isHot: true },
      { id: 'wenxin', name: '文心一言', description: '百度推出的AI大模型，中文理解能力强', url: 'https://yiyan.baidu.com', tags: ['聊天', '中文', '搜索'], isHot: true },
      { id: 'doubao', name: '豆包', description: '字节跳动推出的AI助手，功能丰富', url: 'https://www.doubao.com', tags: ['聊天', '中文', '多功能'], isHot: true },
      { id: 'tongyi', name: '通义千问', description: '阿里巴巴推出的AI大模型', url: 'https://tongyi.aliyun.com', tags: ['聊天', '中文', '办公'], isHot: true },
      { id: 'zhipu', name: '智谱清言', description: '智谱AI推出的对话模型，GLM系列', url: 'https://chatglm.cn', tags: ['聊天', '中文', '开源'], isHot: true },
      { id: 'kimi', name: 'Kimi', description: '月之暗面推出的AI助手，支持超长文本', url: 'https://kimi.moonshot.cn', tags: ['聊天', '长文本', '中文'], isHot: true },
      { id: 'xinghuo', name: '讯飞星火', description: '科大讯飞推出的AI大模型', url: 'https://xinghuo.xfyun.cn', tags: ['聊天', '语音', '中文'], isHot: false },
      { id: 'hunyuan', name: '腾讯混元', description: '腾讯推出的AI大模型', url: 'https://hunyuan.tencent.com', tags: ['聊天', '中文', '多模态'], isHot: false },
      { id: 'baichuan', name: '百川智能', description: '王小川创立的AI公司，专注大模型', url: 'https://www.baichuan-ai.com', tags: ['聊天', '中文', '开源'], isHot: false },
      { id: 'lingyi', name: '零一万物', description: '李开复创办的AI公司', url: 'https://www.lingyiwanwu.com', tags: ['聊天', '中文', 'Yi系列'], isHot: false },
      { id: 'deepseek', name: 'DeepSeek', description: '深度求索推出的AI助手，推理能力强', url: 'https://chat.deepseek.com', tags: ['聊天', '编程', '推理'], isHot: true },
      { id: 'poe', name: 'Poe', description: 'Quora推出的AI聚合平台，汇集多个模型', url: 'https://poe.com', tags: ['聚合', '聊天', '多模型'], isHot: false },
      { id: 'you', name: 'You.com', description: 'AI搜索引擎，提供对话式搜索体验', url: 'https://you.com', tags: ['搜索', '聊天', 'AI'], isHot: false },
    ]
  },
  {
    id: 'image',
    name: 'AI图像生成',
    icon: 'Image',
    tools: [
      { id: 'midjourney', name: 'Midjourney', description: '最热门的AI图像生成工具，艺术风格独特', url: 'https://www.midjourney.com', tags: ['图像生成', '艺术创作', '高质量'], isHot: true },
      { id: 'dalle3', name: 'DALL-E 3', description: 'OpenAI的图像生成模型，与ChatGPT集成', url: 'https://openai.com/dall-e-3', tags: ['图像生成', 'OpenAI', '文字理解'], isHot: true },
      { id: 'sd', name: 'Stable Diffusion', description: '开源AI图像生成模型，可本地部署', url: 'https://stability.ai', tags: ['图像生成', '开源', '本地部署'], isHot: true },
      { id: 'leonardo', name: 'Leonardo.ai', description: '专业AI图像生成平台，游戏资产设计', url: 'https://leonardo.ai', tags: ['图像生成', '游戏', '设计'], isHot: true },
      { id: 'firefly', name: 'Adobe Firefly', description: 'Adobe推出的AI创意工具，与PS集成', url: 'https://www.adobe.com/sensei/generative-ai/firefly.html', tags: ['图像生成', '设计', 'Adobe'], isHot: true },
      { id: 'jimeng', name: '即梦', description: '字节跳动推出的AI图像视频生成工具', url: 'https://jimeng.jianying.com', tags: ['图像生成', '视频', '中文'], isHot: true },
      { id: 'keling-img', name: '可灵AI图像', description: '快手推出的AI图像生成工具', url: 'https://klingai.kuaishou.com', tags: ['图像生成', '中文', '快手'], isHot: true },
      { id: 'tongyi-img', name: '通义万相', description: '阿里巴巴的AI图像生成模型', url: 'https://tongyi.aliyun.com/wanxiang', tags: ['图像生成', '中文', '阿里'], isHot: false },
      { id: 'yige', name: '文心一格', description: '百度的AI艺术创意辅助平台', url: 'https://yige.baidu.com', tags: ['图像生成', '中文', '艺术'], isHot: false },
      { id: 'playground', name: 'Playground AI', description: '免费AI图像生成工具，每日有免费额度', url: 'https://playgroundai.com', tags: ['图像生成', '免费', '易用'], isHot: false },
      { id: 'ideogram', name: 'Ideogram', description: '擅长文字渲染的AI图像生成工具', url: 'https://ideogram.ai', tags: ['图像生成', '文字', '设计'], isHot: true },
      { id: 'recraft', name: 'Recraft', description: '专业矢量图形AI生成工具', url: 'https://www.recraft.ai', tags: ['图像生成', '矢量', '设计'], isHot: false },
      { id: 'flux', name: 'Flux', description: 'Black Forest Labs推出的高质量图像模型', url: 'https://flux1.ai', tags: ['图像生成', '高质量', '开源'], isHot: true },
      { id: 'civitai', name: 'Civitai', description: 'Stable Diffusion模型分享社区', url: 'https://civitai.com', tags: ['模型社区', '开源', '图像'], isHot: false },
      { id: 'liblib', name: 'LiblibAI', description: '国内AI绘画模型分享平台', url: 'https://www.liblib.art', tags: ['图像生成', '中文', '社区'], isHot: false },
    ]
  },
  {
    id: 'video',
    name: 'AI视频制作',
    icon: 'Video',
    tools: [
      { id: 'sora', name: 'Sora', description: 'OpenAI的AI视频生成模型，生成高质量视频', url: 'https://openai.com/sora', tags: ['视频生成', 'OpenAI', '高质量'], isHot: true },
      { id: 'runway', name: 'Runway Gen-3', description: '专业AI视频生成和编辑平台', url: 'https://runwayml.com', tags: ['视频生成', '编辑', '专业'], isHot: true },
      { id: 'pika', name: 'Pika Labs', description: 'AI视频生成工具，支持文字/图片转视频', url: 'https://pika.art', tags: ['视频生成', '易用', '快速'], isHot: true },
      { id: 'heygen', name: 'HeyGen', description: 'AI数字人视频生成平台', url: 'https://www.heygen.com', tags: ['数字人', '视频', '营销'], isHot: true },
      { id: 'synthesia', name: 'Synthesia', description: '企业级AI视频生成平台', url: 'https://www.synthesia.io', tags: ['数字人', '企业', '培训'], isHot: true },
      { id: 'keling-video', name: '可灵AI视频', description: '快手的AI视频生成工具，效果出色', url: 'https://klingai.kuaishou.com', tags: ['视频生成', '中文', '快手'], isHot: true },
      { id: 'jichuang', name: '即创', description: '抖音推出的AI创作平台', url: 'https://aic.oceanengine.com', tags: ['视频生成', '中文', '抖音'], isHot: true },
      { id: 'capcut', name: '剪映/CapCut', description: '字节跳动的视频剪辑工具，集成AI功能', url: 'https://www.capcut.com', tags: ['视频编辑', 'AI剪辑', '中文'], isHot: true },
      { id: 'luma', name: 'Luma Dream Machine', description: '快速生成高质量AI视频', url: 'https://lumalabs.ai/dream-machine', tags: ['视频生成', '快速', '高质量'], isHot: true },
      { id: 'kling', name: 'Kling AI', description: '快手的AI视频生成模型', url: 'https://klingai.com', tags: ['视频生成', '中文', '快手'], isHot: true },
      { id: 'stable-video', name: 'Stable Video', description: 'Stability AI的视频生成工具', url: 'https://www.stablevideo.com', tags: ['视频生成', '开源', 'Stability'], isHot: false },
      { id: 'invideo', name: 'InVideo AI', description: 'AI视频创作平台，模板丰富', url: 'https://invideo.io', tags: ['视频生成', '模板', '营销'], isHot: false },
      { id: 'fliki', name: 'Fliki', description: '文字转视频AI工具', url: 'https://fliki.ai', tags: ['文字转视频', '配音', '内容'], isHot: false },
      { id: 'pictory', name: 'Pictory', description: 'AI视频营销内容生成', url: 'https://pictory.ai', tags: ['视频生成', '营销', '自动化'], isHot: false },
      { id: 'veed', name: 'Veed.io', description: '在线AI视频编辑工具', url: 'https://www.veed.io', tags: ['视频编辑', '字幕', '在线'], isHot: false },
    ]
  },
  {
    id: 'audio',
    name: 'AI音频/音乐',
    icon: 'Music',
    tools: [
      { id: 'elevenlabs', name: 'ElevenLabs', description: '最逼真的AI语音合成工具', url: 'https://elevenlabs.io', tags: ['语音合成', '配音', '多语言'], isHot: true },
      { id: 'suno', name: 'Suno', description: 'AI音乐生成工具，可生成完整歌曲', url: 'https://suno.ai', tags: ['音乐生成', 'AI作曲', '歌曲'], isHot: true },
      { id: 'udio', name: 'Udio', description: '高质量AI音乐生成平台', url: 'https://www.udio.com', tags: ['音乐生成', 'AI作曲', '高质量'], isHot: true },
      { id: 'mubert', name: 'Mubert', description: 'AI生成免版税音乐', url: 'https://mubert.com', tags: ['音乐生成', '免版税', '背景音'], isHot: false },
      { id: 'aiva', name: 'AIVA', description: 'AI音乐作曲助手', url: 'https://www.aiva.ai', tags: ['音乐生成', '作曲', '专业'], isHot: false },
      { id: 'xunfei-voice', name: '讯飞配音', description: '科大讯飞的AI配音工具', url: 'https://peiyin.xunfei.cn', tags: ['语音合成', '中文', '配音'], isHot: false },
      { id: 'moyin', name: '魔音工坊', description: '中文AI配音工具，音色丰富', url: 'https://www.moyin.com', tags: ['语音合成', '中文', '配音'], isHot: false },
      { id: 'murf', name: 'Murf AI', description: '专业AI语音生成平台', url: 'https://murf.ai', tags: ['语音合成', '专业', '多语言'], isHot: false },
      { id: 'playht', name: 'Play.ht', description: 'AI语音生成和克隆', url: 'https://play.ht', tags: ['语音合成', '语音克隆', '多语言'], isHot: false },
      { id: 'descript', name: 'Descript', description: 'AI音频/视频编辑工具', url: 'https://www.descript.com', tags: ['音频编辑', '视频编辑', '转录'], isHot: false },
      { id: 'adobe-podcast', name: 'Adobe Podcast', description: 'Adobe的AI音频增强工具', url: 'https://podcast.adobe.com', tags: ['音频增强', '降噪', 'Adobe'], isHot: false },
      { id: 'voicemod', name: 'Voicemod', description: 'AI实时变声器', url: 'https://www.voicemod.net', tags: ['变声', '实时', '游戏'], isHot: false },
    ]
  },
  {
    id: 'writing',
    name: 'AI写作助手',
    icon: 'PenTool',
    tools: [
      { id: 'jasper', name: 'Jasper', description: '企业级AI写作助手', url: 'https://www.jasper.ai', tags: ['写作', '营销', '企业'], isHot: true },
      { id: 'copyai', name: 'Copy.ai', description: '营销文案AI写作工具', url: 'https://www.copy.ai', tags: ['写作', '营销', '文案'], isHot: true },
      { id: 'writesonic', name: 'Writesonic', description: '多功能AI写作平台', url: 'https://writesonic.com', tags: ['写作', 'SEO', '营销'], isHot: false },
      { id: 'notion-ai', name: 'Notion AI', description: 'Notion集成的AI写作助手', url: 'https://www.notion.so/product/ai', tags: ['写作', '笔记', '协作'], isHot: true },
      { id: 'grammarly', name: 'Grammarly', description: 'AI写作辅助和语法检查', url: 'https://www.grammarly.com', tags: ['写作', '语法', '校对'], isHot: true },
      { id: 'huoshan', name: '火山写作', description: '字节跳动的AI写作工具', url: 'https://www.writingo.net', tags: ['写作', '中文', '字节'], isHot: false },
      { id: 'mita', name: '秘塔写作猫', description: '中文AI写作辅助工具', url: 'https://www.xiezuocat.com', tags: ['写作', '中文', '校对'], isHot: false },
      { id: 'biling', name: '笔灵AI', description: '专业中文AI写作工具', url: 'https://ibiling.cn', tags: ['写作', '中文', '论文'], isHot: false },
      { id: 'yizhuan', name: '易撰', description: '自媒体内容创作工具', url: 'https://www.yizhuan5.com', tags: ['写作', '自媒体', '中文'], isHot: false },
      { id: 'rytr', name: 'Rytr', description: ' affordable AI写作助手', url: 'https://rytr.me', tags: ['写作', '性价比', '多语言'], isHot: false },
      { id: 'wordtune', name: 'Wordtune', description: 'AI写作润色工具', url: 'https://www.wordtune.com', tags: ['写作', '润色', '改写'], isHot: false },
      { id: 'quillbot', name: 'QuillBot', description: 'AI改写和润色工具', url: 'https://quillbot.com', tags: ['改写', '润色', '学术'], isHot: false },
    ]
  },
  {
    id: 'coding',
    name: 'AI编程开发',
    icon: 'Code',
    tools: [
      { id: 'copilot', name: 'GitHub Copilot', description: 'GitHub推出的AI编程助手', url: 'https://github.com/features/copilot', tags: ['编程', '代码补全', 'GitHub'], isHot: true },
      { id: 'cursor', name: 'Cursor', description: 'AI原生代码编辑器，基于VS Code', url: 'https://cursor.sh', tags: ['编程', '编辑器', 'AI优先'], isHot: true },
      { id: 'codeium', name: 'Codeium', description: '免费的AI代码补全工具', url: 'https://codeium.com', tags: ['编程', '免费', '代码补全'], isHot: true },
      { id: 'tabnine', name: 'Tabnine', description: '企业级AI代码助手', url: 'https://www.tabnine.com', tags: ['编程', '企业', '代码补全'], isHot: false },
      { id: 'codewhisperer', name: 'Amazon CodeWhisperer', description: '亚马逊的AI编程助手', url: 'https://aws.amazon.com/codewhisperer', tags: ['编程', 'AWS', '云原生'], isHot: false },
      { id: 'tongyi-code', name: '通义灵码', description: '阿里巴巴的AI编程助手', url: 'https://tongyi.aliyun.com/lingma', tags: ['编程', '中文', '阿里'], isHot: true },
      { id: 'codegeex', name: 'CodeGeeX', description: '智谱AI的代码生成模型', url: 'https://codegeex.cn', tags: ['编程', '中文', '开源'], isHot: false },
      { id: 'replit', name: 'Replit Ghostwriter', description: 'Replit集成的AI编程助手', url: 'https://replit.com', tags: ['编程', '在线IDE', '协作'], isHot: false },
      { id: 'cody', name: 'Sourcegraph Cody', description: 'AI代码理解和生成工具', url: 'https://sourcegraph.com/cody', tags: ['编程', '代码理解', '企业'], isHot: false },
      { id: 'continue', name: 'Continue', description: '开源AI代码助手插件', url: 'https://continue.dev', tags: ['编程', '开源', '插件'], isHot: false },
      { id: 'windsurf', name: 'Windsurf', description: 'Codeium推出的AI编辑器', url: 'https://codeium.com/windsurf', tags: ['编程', '编辑器', 'AI优先'], isHot: true },
      { id: 'bolt', name: 'Bolt.new', description: 'AI驱动的全栈开发工具', url: 'https://bolt.new', tags: ['编程', '全栈', '快速开发'], isHot: true },
    ]
  },
  {
    id: 'office',
    name: 'AI办公效率',
    icon: 'Briefcase',
    tools: [
      { id: 'ms-copilot', name: 'Microsoft Copilot', description: '微软365的AI助手', url: 'https://copilot.microsoft.com', tags: ['办公', '微软', '生产力'], isHot: true },
      { id: 'gamma', name: 'Gamma', description: 'AI演示文稿生成工具', url: 'https://gamma.app', tags: ['演示', 'PPT', '设计'], isHot: true },
      { id: 'beautiful', name: 'Beautiful.ai', description: '智能演示文稿制作', url: 'https://www.beautiful.ai', tags: ['演示', 'PPT', '自动化'], isHot: false },
      { id: 'tome', name: 'Tome', description: 'AI故事叙述和演示工具', url: 'https://tome.app', tags: ['演示', '叙事', '设计'], isHot: false },
      { id: 'feishu', name: '飞书妙记', description: '飞书的AI会议记录工具', url: 'https://www.feishu.cn', tags: ['办公', '会议', '中文'], isHot: true },
      { id: 'dingtalk', name: '钉钉魔法棒', description: '钉钉的AI助手功能', url: 'https://www.dingtalk.com', tags: ['办公', '协作', '中文'], isHot: false },
      { id: 'notion', name: 'Notion', description: '全能工作空间，集成AI功能', url: 'https://www.notion.so', tags: ['笔记', '协作', '知识库'], isHot: true },
      { id: 'lark', name: 'Lark', description: '字节跳动的企业协作平台', url: 'https://www.larksuite.com', tags: ['办公', '协作', '中文'], isHot: false },
      { id: 'otter', name: 'Otter.ai', description: 'AI会议转录和笔记', url: 'https://otter.ai', tags: ['会议', '转录', '笔记'], isHot: false },
      { id: 'fireflies', name: 'Fireflies.ai', description: 'AI会议助手', url: 'https://fireflies.ai', tags: ['会议', '转录', '分析'], isHot: false },
    ]
  },
  {
    id: 'design',
    name: 'AI设计工具',
    icon: 'Palette',
    tools: [
      { id: 'canva', name: 'Canva AI', description: 'Canva的AI设计功能', url: 'https://www.canva.com', tags: ['设计', '模板', '易用'], isHot: true },
      { id: 'adobe-express', name: 'Adobe Express', description: 'Adobe的在线设计工具', url: 'https://www.adobe.com/express', tags: ['设计', 'Adobe', '快速'], isHot: false },
      { id: 'figma-ai', name: 'Figma AI', description: 'Figma的AI设计功能', url: 'https://www.figma.com/ai', tags: ['设计', 'UI/UX', '协作'], isHot: true },
      { id: 'gaoding', name: '稿定设计', description: '中文在线设计工具', url: 'https://www.gaoding.com', tags: ['设计', '中文', '模板'], isHot: false },
      { id: 'chuangkit', name: '创客贴', description: '中文平面设计工具', url: 'https://www.chuangkit.com', tags: ['设计', '中文', '营销'], isHot: false },
      { id: 'visme', name: 'Visme', description: '在线设计和演示工具', url: 'https://www.visme.co', tags: ['设计', '演示', '信息图'], isHot: false },
      { id: 'vistacreate', name: 'VistaCreate', description: '在线图形设计工具', url: 'https://create.vista.com', tags: ['设计', '社交媒体', '模板'], isHot: false },
      { id: 'designs-ai', name: 'Designs.ai', description: 'AI设计工具套件', url: 'https://designs.ai', tags: ['设计', '品牌', '自动化'], isHot: false },
      { id: 'looka', name: 'Looka', description: 'AI Logo设计工具', url: 'https://looka.com', tags: ['Logo', '品牌', '设计'], isHot: false },
      { id: 'brandmark', name: 'Brandmark', description: 'AI品牌设计工具', url: 'https://brandmark.io', tags: ['Logo', '品牌', '设计'], isHot: false },
    ]
  },
  {
    id: 'search',
    name: 'AI搜索研究',
    icon: 'Search',
    tools: [
      { id: 'perplexity', name: 'Perplexity', description: 'AI搜索引擎，提供带来源的答案', url: 'https://www.perplexity.ai', tags: ['搜索', '研究', '问答'], isHot: true },
      { id: 'mita-search', name: '秘塔AI搜索', description: '中文AI搜索引擎', url: 'https://metaso.cn', tags: ['搜索', '中文', '研究'], isHot: true },
      { id: 'devv', name: 'Devv', description: '面向开发者的AI搜索', url: 'https://devv.ai', tags: ['搜索', '编程', '开发者'], isHot: true },
      { id: 'phind', name: 'Phind', description: '开发者优先的AI搜索引擎', url: 'https://www.phind.com', tags: ['搜索', '编程', '技术'], isHot: true },
      { id: 'you-search', name: 'You.com', description: 'AI搜索引擎', url: 'https://you.com', tags: ['搜索', 'AI', '隐私'], isHot: false },
      { id: 'bing-copilot', name: 'Bing Copilot', description: '微软Bing的AI搜索', url: 'https://www.bing.com/chat', tags: ['搜索', '微软', 'AI'], isHot: true },
      { id: 'andi', name: 'Andi', description: '对话式AI搜索引擎', url: 'https://andisearch.com', tags: ['搜索', '对话', '隐私'], isHot: false },
      { id: 'iask', name: 'iAsk', description: 'AI问答搜索引擎', url: 'https://iask.ai', tags: ['搜索', '问答', '免费'], isHot: false },
      { id: 'walles', name: 'Walles.AI', description: 'AI搜索和阅读助手', url: 'https://walles.ai', tags: ['搜索', '阅读', '助手'], isHot: false },
      { id: 'consensus', name: 'Consensus', description: 'AI学术搜索引擎', url: 'https://consensus.app', tags: ['搜索', '学术', '研究'], isHot: false },
    ]
  },
  {
    id: 'avatar',
    name: 'AI数字人',
    icon: 'User',
    tools: [
      { id: 'did', name: 'D-ID', description: 'AI数字人视频生成', url: 'https://www.d-id.com', tags: ['数字人', '视频', '营销'], isHot: true },
      { id: 'syn-avatar', name: 'Synthesia', description: '企业级AI数字人平台', url: 'https://www.synthesia.io', tags: ['数字人', '企业', '培训'], isHot: true },
      { id: 'heygen-avatar', name: 'HeyGen', description: 'AI数字人视频生成', url: 'https://www.heygen.com', tags: ['数字人', '视频', '营销'], isHot: true },
      { id: 'guiji', name: '硅基智能', description: '中文AI数字人平台', url: 'https://www.guiji.ai', tags: ['数字人', '中文', '直播'], isHot: false },
      { id: 'xiaoice', name: '小冰', description: '微软小冰，AI虚拟人', url: 'https://www.xiaoice.com', tags: ['数字人', '中文', '情感'], isHot: false },
      { id: 'hourone', name: 'Hour One', description: 'AI虚拟人视频平台', url: 'https://hourone.ai', tags: ['数字人', '视频', '企业'], isHot: false },
      { id: 'colossyan', name: 'Colossyan', description: 'AI视频生成与数字人', url: 'https://www.colossyan.com', tags: ['数字人', '视频', '培训'], isHot: false },
      { id: 'elai', name: 'Elai.io', description: 'AI数字人视频生成', url: 'https://elai.io', tags: ['数字人', '视频', '营销'], isHot: false },
    ]
  },
  {
    id: 'education',
    name: 'AI教育学习',
    icon: 'GraduationCap',
    tools: [
      { id: 'khanmigo', name: 'Khanmigo', description: '可汗学院的AI学习助手', url: 'https://www.khanacademy.org', tags: ['教育', '学习', '辅导'], isHot: true },
      { id: 'duolingo', name: 'Duolingo Max', description: '多邻国的AI语言学习', url: 'https://www.duolingo.com', tags: ['语言', '学习', '游戏化'], isHot: true },
      { id: 'quizlet', name: 'Quizlet', description: 'AI学习卡片和测验', url: 'https://quizlet.com', tags: ['学习', '记忆', '测验'], isHot: false },
      { id: 'zuoyebang', name: '作业帮', description: '中文AI学习辅导', url: 'https://www.zybang.com', tags: ['教育', '中文', '作业'], isHot: false },
      { id: 'yuanfudao', name: '猿辅导', description: '在线教育平台，集成AI', url: 'https://www.yuanfudao.com', tags: ['教育', '中文', '在线'], isHot: false },
      { id: 'coursera', name: 'Coursera Coach', description: 'Coursera的AI学习助手', url: 'https://www.coursera.org', tags: ['教育', '在线课程', 'AI'], isHot: false },
      { id: 'udemy', name: 'Udemy AI', description: 'Udemy的AI学习功能', url: 'https://www.udemy.com', tags: ['教育', '在线课程', '技能'], isHot: false },
      { id: 'tutorai', name: 'TutorAI', description: 'AI个性化学习平台', url: 'https://www.tutorai.me', tags: ['教育', '个性化', 'AI辅导'], isHot: false },
    ]
  },
  {
    id: 'marketing',
    name: 'AI电商营销',
    icon: 'ShoppingCart',
    tools: [
      { id: 'adcreative', name: 'AdCreative.ai', description: 'AI广告创意生成', url: 'https://www.adcreative.ai', tags: ['广告', '创意', '营销'], isHot: true },
      { id: 'jasper-mkt', name: 'Jasper', description: 'AI营销文案写作', url: 'https://www.jasper.ai', tags: ['营销', '文案', 'SEO'], isHot: true },
      { id: 'copyai-mkt', name: 'Copy.ai', description: 'AI营销内容生成', url: 'https://www.copy.ai', tags: ['营销', '文案', '社交媒体'], isHot: true },
      { id: 'chanmama', name: '蝉妈妈', description: '抖音电商数据分析', url: 'https://www.chanmama.com', tags: ['电商', '数据分析', '中文'], isHot: false },
      { id: 'kaogujia', name: '考古加', description: '直播电商数据平台', url: 'https://www.kaogujia.com', tags: ['电商', '直播', '数据'], isHot: false },
      { id: 'youmiyun', name: '有米云', description: '营销情报分析平台', url: 'https://www.youmiyun.com', tags: ['营销', '广告', '数据'], isHot: false },
      { id: 'bigspy', name: 'BigSpy', description: '广告间谍工具', url: 'https://bigspy.com', tags: ['广告', '竞品', '营销'], isHot: false },
      { id: 'adspy', name: 'AdSpy', description: 'Facebook广告情报工具', url: 'https://adspy.com', tags: ['广告', 'Facebook', '营销'], isHot: false },
    ]
  },
];

export const getAllTools = () => {
  return categories.flatMap(cat => cat.tools);
};

export const getHotTools = () => {
  return getAllTools().filter(tool => tool.isHot);
};

export const getToolsByCategory = (categoryId: string) => {
  return categories.find(cat => cat.id === categoryId)?.tools || [];
};

export const searchTools = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return getAllTools().filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
