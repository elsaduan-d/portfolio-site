import type { Experience } from '@/data/experiences';
import type { Paper } from '@/data/papers';
import type { Project } from '@/data/projects';

export type Locale = 'en' | 'zh';

type Dictionary = Record<string, string>;

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.papers': 'Papers',
    'nav.contact': 'Contact',
    'nav.resume': 'Download Resume',
    'nav.toggle': '中文',
    'nav.toggleLabel': 'Switch to Chinese',
    'home.eyebrow': 'Personal Portfolio',
    'home.name': 'Yuzhi Duan',
    'home.alias': '/ Elsa Duan',
    'home.intro': 'I design and evaluate learning products that turn research insights into clear, usable, and meaningful digital experiences.',
    'home.viewProjects': 'View Projects',
    'home.contactMe': 'Contact Me',
    'home.focus': 'Focus Areas',
    'home.focus.product': 'Product strategy',
    'home.focus.learning': 'Learning design',
    'home.focus.ai': 'AI education',
    'home.focus.edtech': 'Evidence-based EdTech',
    'home.overviewEyebrow': 'Overview',
    'home.overviewTitle': 'Product thinking shaped by learning science, user research, and careful interface design.',
    'home.overviewBody': 'My work spans AI-assisted prototyping, product testing, educational design, and evidence-driven analysis for user-facing learning products. I’m especially interested in how interface decisions, feedback systems, and content structure shape what people actually learn.',
    'home.aboutMe': 'About Me',
    'home.viewExperience': 'View Experience',
    'home.quote': 'I design user-centered learning products that make emerging technology feel usable, human, and evidence-informed.',
    'home.quotePrefix': 'I design ',
    'home.quoteTag': 'user-centered learning products',
    'home.quoteSuffix': ' that make emerging technology feel usable, human, and evidence-informed.',
    'page.about.eyebrow': 'About',
    'page.about.title': 'A product and learning design practice shaped by evidence, usability, and educational intent.',
    'page.about.intro': 'I work at the intersection of product management, learning design, AI education, and evidence-based EdTech. My experience includes AI-assisted prototyping, product testing, data analysis, and research-informed design for user-facing learning products.',
    'page.experience.eyebrow': 'Experience',
    'page.experience.title': 'Roles spanning product operations, educational programming, and public-facing learning work.',
    'page.experience.intro': 'A mix of product work, event operations, educational programming, and research-informed design practice.',
    'page.projects.eyebrow': 'Projects',
    'page.projects.title': 'Products, prototypes, and learning experiences across AI education, games, and decision support.',
    'page.projects.intro': 'Select a project from the index to explore the product framing, design logic, and supporting slides or media.',
    'page.papers.eyebrow': 'Papers',
    'page.papers.title': 'Course papers and analyses on AI products, educational design, and media.',
    'page.papers.intro': 'Each paper opens directly in a new browser tab as a PDF. Use the index to move between items.',
    'about.p1': 'I’m most interested in products that need to be both useful and pedagogically thoughtful. That usually means working across product structure, user testing, interface decisions, and content logic rather than treating design, research, and strategy as separate tracks.',
    'about.p2': 'My projects often sit at the edge of emerging technology and human learning: teacher reflection tools, educational game concepts, decision-support websites, and product analyses that ask not just whether a system works, but what kinds of learning behavior it encourages.',
    'about.p3': 'My recent work has focused on user-centered AIGC product research, model output evaluation, and experiments with agent-based workflows. I connect prototype decisions with measurable outcomes by refining frontend interactions, mapping workflows, translating research findings into campaign KPIs, and coordinating cross-functional feedback loops that help early product ideas move toward launch.',
    'about.bio': 'I design learning and AI product experiences that make emerging technology feel more usable, human-centered, and evidence-informed. I like working where product strategy, learning design, and user research meet: clarifying messy problems, testing how people actually respond, and turning early ideas into clearer workflows and interface decisions. My recent work includes AIGC product research, model output evaluation, prototype testing, frontend interaction refinement, and cross-functional feedback loops that help product ideas move toward launch.',
    'about.education': 'Education',
    'about.harvard': 'Harvard Graduate School of Education',
    'about.harvardDegree': 'Ed.M. in Learning Design, Innovation, and Technology',
    'about.harvardPeriod': 'May 2025 - May 2026',
    'about.uw': 'University of Wisconsin-Madison',
    'about.uwDegree': 'B.S. in Education Studies',
    'about.uwMinors': 'Minors: Communication Arts, Digital Studies, Game Design',
    'about.uwPeriod': 'Jan 2021 - Dec 2024',
    'about.productLens': 'Product Lens',
    'about.productLensBody': 'Translating ambiguity into structured flows, clear feature logic, and more usable decision points.',
    'about.researchLens': 'Research Lens',
    'about.researchLensBody': 'Grounding decisions in comparison, analysis, testing, and research-informed reasoning.',
    'about.designLens': 'Design Lens',
    'about.designLensBody': 'Building interfaces that feel calm, editorial, and easy to trust rather than over-designed or noisy.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'What kind of human future are we building into our systems?',
    'contact.intro': 'If you are recruiting, collaborating, or curious about my work, I would be happy to connect.',
    'contact.email': 'Email:',
    'contact.linkedin': 'LinkedIn:',
    'contact.phone': 'Phone:',
    'contact.emailMe': 'Email Me',
    'common.keywords': 'Keywords',
    'common.resources': 'Resources',
    'common.demo': 'Demo',
    'common.projectWalkthrough': 'Project Walkthrough',
    'common.pdfPreview': 'PDF Preview',
    'common.openPdf': 'Open PDF',
    'common.backProjects': 'Back to projects',
    'common.viewFullCaseStudy': 'View Full Case Study',
    'common.all': 'All',
    'common.filter': 'Filter',
    'footer.focus': 'Product Management · Learning Design · AI Education · Evidence-Based EdTech'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.experience': '经历',
    'nav.projects': '项目',
    'nav.papers': '论文',
    'nav.contact': '联系',
    'nav.resume': '下载简历',
    'nav.toggle': 'EN',
    'nav.toggleLabel': 'Switch to English',
    'home.eyebrow': '个人作品集',
    'home.name': '段雨之',
    'home.alias': '/ Elsa Duan',
    'home.intro': '我设计并评估学习产品，将研究洞察转化为清晰、可用且有意义的数字体验。',
    'home.viewProjects': '查看项目',
    'home.contactMe': '联系我',
    'home.focus': '关注方向',
    'home.focus.product': '产品策略',
    'home.focus.learning': '学习设计',
    'home.focus.ai': 'AI 教育',
    'home.focus.edtech': '循证教育科技',
    'home.overviewEyebrow': '概览',
    'home.overviewTitle': '以学习科学、用户研究和细致界面设计为基础的产品思考。',
    'home.overviewBody': '我的工作涵盖 AI 辅助原型、产品测试、教育设计和面向用户学习产品的循证分析。我尤其关注界面决策、反馈系统和内容结构如何影响真实的学习行为。',
    'home.aboutMe': '关于我',
    'home.viewExperience': '查看经历',
    'home.quote': '我设计以用户为中心的学习产品，让新兴技术变得可用、人性化，并且有证据支撑。',
    'home.quotePrefix': '我设计',
    'home.quoteTag': '以用户为中心的学习产品',
    'home.quoteSuffix': '，让新兴技术变得可用、人性化，并且有证据支撑。',
    'page.about.eyebrow': '关于',
    'page.about.title': '以证据、可用性和教育意图为基础的产品与学习设计实践。',
    'page.about.intro': '我工作于产品管理、学习设计、AI 教育和循证教育科技的交叉领域。我的经验包括 AI 辅助原型、产品测试、数据分析，以及面向用户学习产品的研究驱动设计。',
    'page.experience.eyebrow': '经历',
    'page.experience.title': '横跨产品运营、教育项目和面向公众学习体验的实践经历。',
    'page.experience.intro': '我的经历结合了产品工作、活动运营、教育项目和研究驱动的设计实践。',
    'page.projects.eyebrow': '项目',
    'page.projects.title': '围绕 AI 教育、游戏和决策支持的产品、原型与学习体验。',
    'page.projects.intro': '从左侧目录选择项目，查看产品定位、设计逻辑以及相关幻灯片或媒体。',
    'page.papers.eyebrow': '论文',
    'page.papers.title': '关于 AI 产品、教育设计和媒体研究的课程论文与分析。',
    'page.papers.intro': '每篇论文都可以作为 PDF 直接在浏览器中打开。请使用左侧目录切换条目。',
    'about.p1': '我最感兴趣的是既有实际用途、又在教学上经过思考的产品。这通常意味着我会同时关注产品结构、用户测试、界面决策和内容逻辑，而不是把设计、研究和策略割裂开来。',
    'about.p2': '我的项目常常位于新兴技术与人类学习的交界处：教师反思工具、教育游戏概念、决策支持网站和产品分析。这些项目不仅追问系统是否有效，也关注它鼓励了怎样的学习行为。',
    'about.p3': '我近期的工作聚焦于以用户为中心的 AIGC 产品研究、模型输出评估和 agent 工作流实验。我会把原型决策和可衡量结果连接起来，包括优化前端交互、梳理工作流、将研究发现转化为营销 KPI，以及协调跨职能反馈循环，帮助早期产品想法走向上线。',
    'about.bio': '我设计学习与 AI 产品体验，希望让新兴技术变得更可用、更以用户为中心，也更有证据支撑。我喜欢在产品策略、学习设计和用户研究交汇的地方工作：把复杂问题梳理清楚，观察真实用户如何回应，并把早期想法转化为更清晰的工作流和界面决策。我的近期工作包括 AIGC 产品研究、模型输出评估、原型测试、前端交互优化，以及帮助产品想法走向上线的跨职能反馈循环。',
    'about.education': '教育背景',
    'about.harvard': '哈佛大学教育研究生院',
    'about.harvardDegree': '教育学硕士，学习设计、创新与技术',
    'about.harvardPeriod': '2025 年 5 月 - 2026 年 5 月',
    'about.uw': '威斯康星大学麦迪逊分校',
    'about.uwDegree': '教育研究理学学士',
    'about.uwMinors': '辅修：传播艺术、数字研究、游戏设计',
    'about.uwPeriod': '2021 年 1 月 - 2024 年 12 月',
    'about.productLens': '产品视角',
    'about.productLensBody': '把模糊问题转化为结构化流程、清晰的功能逻辑和更可用的决策节点。',
    'about.researchLens': '研究视角',
    'about.researchLensBody': '通过比较、分析、测试和研究驱动的推理来支撑设计与产品判断。',
    'about.designLens': '设计视角',
    'about.designLensBody': '打造冷静、清晰、值得信任的界面，而不是过度设计或信息噪音。',
    'contact.eyebrow': '联系',
    'contact.title': 'What kind of human future are we building into our systems?',
    'contact.intro': '如果你正在招聘、合作，或想进一步了解我的工作，我很乐意联系。',
    'contact.email': '邮箱：',
    'contact.linkedin': 'LinkedIn：',
    'contact.phone': '电话：',
    'contact.emailMe': '发邮件',
    'common.keywords': '关键词',
    'common.resources': '相关资料',
    'common.demo': '演示',
    'common.projectWalkthrough': '项目说明',
    'common.pdfPreview': 'PDF 预览',
    'common.openPdf': '打开 PDF',
    'common.backProjects': '返回项目',
    'common.viewFullCaseStudy': '查看完整案例研究',
    'common.all': '全部',
    'common.filter': '筛选',
    'footer.focus': '产品管理 · 学习设计 · AI 教育 · 循证教育科技'
  }
};

export function translate(locale: Locale, key: string) {
  return dictionary[locale][key] ?? dictionary.en[key] ?? key;
}

const zhProjects: Record<string, Partial<Project>> = {
  taskmate: {
    title: 'TaskMate / 电商多智能体 AI 训练平台',
    category: '产品管理',
    description: '一个面向电商学习的 AIGC 训练平台，围绕任务提交、营销情境、多智能体协作和评审报告构建。',
    longDescription: 'TaskMate 位于产品运营、AI 工作流设计和培训交付的交叉点。我的工作聚焦于梳理用户和教师之间的摩擦点与交接流程，并优化入门引导、任务评审和 AI 辅助反馈背后的产品逻辑。',
    tags: ['AIGC', '多智能体系统', '产品测试', '工作流设计'],
    links: [{ label: '查看 TaskMate 网站', href: 'https://taskmate.nodorac.com/commerce' }]
  },
  'teacher-reflection-lab': {
    title: 'Teacher Reflection Lab',
    category: 'AI 教育产品',
    description: '一个面向新手教师的 AI 辅助反思平台，结合教学人格洞察、情境模拟和反思反馈。',
    longDescription: 'Teacher Reflection Lab 是一个专业学习产品概念，帮助教师更结构化、更协作、更具成长导向地反思真实课堂困境。产品结合情境、引导式反思和谨慎的 AI 支持，但不替代教师判断。',
    tags: ['AI 反思', '教师学习', '学习设计', '产品逻辑'],
    links: [
      { label: 'Pitch Deck', href: '/papers/teacher-reflection-lab-pitch-deck.pdf' },
      { label: '会议提案', href: '/papers/teacher-reflection-lab-conference-proposal.pdf' },
      { label: 'Big Five 指南', href: '/papers/teacher-reflection-lab-big-five-guide.pdf' },
      { label: '样例情境指南', href: '/papers/teacher-reflection-lab-sean-number-simulation-script.pdf' },
      { label: 'MVP 用户问卷', href: 'https://forms.gle/HrVTG8ehg4U6XMUt5' }
    ]
  },
  'table-craft': {
    category: 'LLM 工具',
    description: '一个 LLM 辅助的数据可视化工具，将原始数据转化为更清晰的面向用户图表。',
    longDescription: 'Table Craft 探索如何用自然语言提示解释数据集，并映射到合适的可视化形式。项目强调有用性、可读性以及 prompt-to-chart 转换的可靠性。',
    tags: ['LLM API', '数据可视化', '提示设计']
  },
  'edtech-analyzer': {
    category: '决策支持',
    description: '一个帮助用户通过结构化标准和循证报告评估教育科技工具的决策支持网站。',
    longDescription: 'EdTech Analyzer 面向需要做教育科技采用决策的人群，将工具评估转化为更透明、更可交互、更容易浏览和比较的体验。',
    tags: ['网页产品', '评估', '循证教育科技']
  },
  'eye-tracking-analysis': {
    title: '眼动追踪分析',
    category: 'UX 研究',
    description: '一个使用 Tobii 眼动数据和 Tableau 可视化比较两种纸鹤教学版式的 UX 研究案例。',
    longDescription: '该项目使用 Tobii 眼动数据比较用户如何浏览同一个纸鹤任务的两种说明设计。Tableau 分析关注视线路径、注意力聚类和聚类摘要，以理解版式如何影响扫描行为、图文整合和认知负荷。',
    tags: ['UX 研究', 'Tobii 眼动追踪', 'Tableau', '教学设计', '视觉注意', '学习设计']
  },
  'word-cross-wordy': {
    title: 'Word Cross “Wordy”',
    category: '学习游戏',
    description: '一个 crossword 风格的英语学习游戏，通过线索、翻译、音频和图像概念支持多模态词汇回忆。',
    longDescription: 'Wordy 强调重复、低压力的词汇练习，同时保持轻量且有动机的交互。项目将多模态支持与熟悉的拼字游戏形式结合，让词汇复习更像游戏而不是惩罚。',
    tags: ['游戏设计', '多模态学习', '词汇学习']
  },
  'a-ronins-reckoning': {
    title: 'A Ronin\'s Reckoning',
    category: '互动游戏',
    description: '一个叙事动作游戏，通过风格化的浪人体验探索战斗、张力和玩家决策。',
    longDescription: 'A Ronin\'s Reckoning 是一个围绕氛围、动作和玩家沉浸感展开的游戏设计项目，体现了我对将美术方向、节奏和用户体验整合成完整可玩世界的兴趣。',
    tags: ['游戏设计', '互动体验', '玩家体验'],
    links: [{ label: '在 itch.io 查看', href: 'https://kiinanishihara.itch.io/a-ronins-reckoning?secret=RdZzZkLeDCC8dHvlCiSgen6iTk' }]
  },
  'how-people-learn-for-parents': {
    title: '为家长重新设计 HGSE 基础课程',
    category: '学习设计',
    description: '一个将 HGSE 基础课程内容、用户需求和逆向设计转化为更适合家长学习者体验的项目。',
    longDescription: '该项目聚焦于将研究生层级的学习体验改造为面向家长的学习产品。它结合问卷、访谈、学习者画像和可访问活动设计，使学习科学内容更贴近目标受众并可行动化。',
    tags: ['用户画像', '学习者旅程', '逆向设计', '家长学习'],
    links: [{ label: '家长问卷', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeHVT1b71XahJuR0ynTHc3r_g1LFdcvX_qUSP8XN-6X50V1-w/viewform' }]
  },
  'between-us': {
    category: '互动游戏',
    description: '一个通过引导式提问、轮流回应和共同反思支持更深层人际连接的关系建立原型。',
    longDescription: 'Between Us 是一个结合引导设计与情感敏感交互流程的社交游戏。玩家先回应系统提供的问题，再为彼此创作问题，让对话变成既有结构又个人化的体验。',
    tags: ['社交游戏', '引导设计', '原型'],
    links: [{ label: '观看视频', href: '/videos/between-us-screen-recording.mp4' }]
  },
  'trash-buddies': {
    category: '游戏化学习',
    description: '一个面向低龄学习者的可持续学习概念，围绕垃圾分类、模式识别和生态意识展开。',
    longDescription: 'Trash Buddies 将环保学习设计成任务驱动的互动体验，学习者通过垃圾分类理解行动背后的可持续影响。它旨在同时支持协调能力和环境理解。',
    tags: ['可持续发展', '儿童', '学习游戏']
  },
  'guess-the-library': {
    title: 'Guess the Library',
    category: 'AR 体验',
    description: '一个通过视觉线索、探索和基于地点的互动来认识哈佛图书馆的 AR 概念。',
    longDescription: 'Guess the Library 将校园导览转化为有趣的探索体验。玩家通过扫描卡片正面了解每个哈佛图书馆的事实和氛围，AR 体验结合音频、文字和 360 导览，让空间信息更具体验感。',
    tags: ['AR', '基于地点的学习', '体验设计']
  },
  'boston-easytrip': {
    title: 'Boston EasyTrip',
    category: '服务设计',
    description: '一个通过预算方案、美食推荐和实用城市指南改善旅行规划的访客支持概念。',
    longDescription: 'Boston EasyTrip 被设计为更实用的访客体验，提供旅行支持、本地推荐和情境化规划帮助。项目关注服务清晰度和对游客更友好的信息架构。',
    tags: ['服务设计', '旅行 UX', '信息架构']
  }
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === 'en') return project;
  const translated = zhProjects[project.slug];
  return translated ? { ...project, ...translated } : project;
}

const zhExperiences: Partial<Experience>[] = [
  {
    role: 'AIGC 产品经理助理',
    organization: '博导科技 / TaskMate',
    period: '2023 年 8 月 - 至今',
    description: '参与 AIGC 产品研究、工作流分析、原型反馈和商业化支持，覆盖电商和教育产品场景。',
    bullets: [
      '协助 10+ 个市场研究项目，收集潜在客户信息、背景语境和市场信号。',
      '为八个教育项目提出产品和学习设计想法，包括面向学生的大数据与社交媒体课程。',
      '设计并参与大数据与电商在线课程，覆盖 8,000+ 名线上学生。',
      '梳理 TaskMate 端到端流程，包括任务提交、营销情境、多智能体协作、评审报告和教师交接。',
      '围绕入门引导、提示词指导、回答模式、分类体系、导航、上传和错误状态提出结构化 UI 与产品建议。',
      '使用 Excel 分析 20+ 场电商教育直播，并将表现数据转化为产品和内容建议。',
      '分析 18 名学生的电商直播数据，提出策略后平均观看量提升 400%。',
      '训练 BoTok Edu AI 模型，使其作为用户的产品推荐器和学习顾问。',
      '共同设计 Botrix，一个基于 Unity 的 2.5D 游戏化零售模拟平台。',
      '与跨职能团队合作，将先进的人机交互技术与教育内容整合。'
    ]
  },
  {
    role: '创始组织者',
    organization: '中国教育论坛，哈佛大学教育研究生院',
    period: '2025 年 9 月 - 2025 年 11 月',
    description: '共同组织聚焦非遗教育的教育与文化论坛，负责公众传播与活动运营。',
    bullets: ['协调四位嘉宾的邀约、筹备会议、彩排安排和现场执行。', '撰写双语嘉宾材料和面向观众的社交媒体及活动内容。', '收集参与者反馈，并总结活动后续复盘要点。']
  },
  {
    role: '研究生助理，Equity Workshop Producer',
    organization: 'UW-Madison 多元、公平与教育成就部门（DDEEA）',
    period: '2023 年 8 月 - 2024 年 12 月',
    description: '制作 Graduate Assistants’ Equity Workshop，支持面向研究生助教、学术员工和学生的公平培训、校园沟通与资源协调。',
    bullets: ['编制 GAEW 资源手册，整理 10+ 条法律、政策、规定与资源信息。', '与八个部门合作，包括 DoIT、OHR、GPSD、Ombuds、EAO、University Veteran Services、SMRRP 和 UHS。', '制作并管理 30+ 场 Zoom 工作坊，分发材料并支持 3,000+ 名学术员工和学生。', '通过 WordPress 更新网站内容，包括场次信息和 FAQ，确保面向用户的信息准确。', '管理 12+ 份官方行政沟通，支持三个学期内的校园范围信息共享。']
  },
  {
    role: '教学助理',
    organization: '清迈大学孔子学院',
    period: '2023 年 7 月 - 2023 年 8 月',
    description: '远程支持“中文 + 电商”培训项目，包括课堂运营、教师沟通、批改支持和学生答疑。',
    bullets: ['协助服务 100+ 名学生的“中文 + 电商”培训项目。', '支持行政工作、课堂管理和教师沟通。', '协助批改和评阅学生作业，并回答学生问题。']
  },
  {
    role: '行政实习生',
    organization: '大理白族自治州财贸学校',
    period: '2023 年 5 月 - 2023 年 6 月',
    description: '参与学校线上与线下招生活动中的行政支持、媒体制作、报告分析和学生项目彩排支持。',
    bullets: ['协助线上和线下校园介绍活动，面向潜在学生展示学校。', '制作 10+ 段视频素材，并协助七个部门完成拍摄流程。', '分析数据报告、反思项目改进，并相应修订学校行政方案。', '协助 25 名学生代表评估线上直播项目，并提供彩排反馈。']
  }
];

export function localizeExperience(item: Experience, index: number, locale: Locale): Experience {
  return locale === 'zh' ? { ...item, ...zhExperiences[index] } : item;
}

const zhPapers: Record<string, Partial<Paper>> = {
  'algorithm-based-tutoring-gauth-doubao-aixue': {
    title: '算法驱动的辅导产品：Gauth 与豆包爱学',
    course: 'MIT Learning, Media, and Technology',
    description: '一篇比较 AI 产品分析，研究市场语境、政策和用户期待如何塑造美国与中国辅导产品设计。'
  },
  'khanmigo-writing-coach': {
    title: 'Khanmigo Writing Coach：Instructionist 与 Constructionist 分析',
    description: '一篇关于 AI 写作教练中支架、学习者能动性和反馈设计的分析，并以学习理论为基础提出再设计视角。'
  },
  'lmt-assignment2-memo': {
    title: '备忘录：在本科游戏设计课程中采用 AI 编程工具的建议',
    description: '一份关于 AI 编程工具在项目式游戏设计学习中的教育价值、采用风险和实施条件的建议备忘录。'
  },
  'content-analysis-of-video-programming': {
    title: '视频节目内容分析',
    course: 'Harvard Growing Up in a Media World',
    description: '一项媒体节目内容分析，考察儿童媒体环境中的再现模式、受众假设和设计逻辑。'
  },
  'parents-perceptions-screen-media-game-devices': {
    title: '家长对游戏设备中屏幕媒体教育收益认知的定量研究',
    course: 'ED POL 350/605：应用定量教育研究',
    period: '2024 年 2 月 - 2024 年 5 月',
    location: 'Madison, WI',
    description: '一项使用全国媒体使用调查数据，研究家长如何看待游戏设备中屏幕媒体教育收益的定量研究。',
    bullets: [
      '清理并处理 The Common Sense Census: Media Use by Kids Age Zero to Eight in America 原始数据，从最初 1,454 个案例中筛选保留 1,012 个观测值。',
      '评估家长对屏幕媒体教育收益的认知如何受到社会经济地位、教育背景和美国不同地区差异的影响。',
      '将家庭收入重新划分为更宽泛的区间，并重组教育水平分类，以支持更有意义的比较分析。',
      '分析地区差异，发现美国不同地区对教育收益的认可整体呈现相对稳定的中等水平。',
      '基于分析结果，为教育者和政策制定者提出考虑社会经济与地区因素的策略建议。'
    ]
  },
  'early-reading-training': {
    title: '早期阅读训练的定量研究',
    course: 'ED POL 600：教育政策问题',
    period: '2023 年 2 月 - 2023 年 5 月',
    location: 'Madison, WI',
    description: '一篇分析早期阅读训练与后续学生自信心之间关系的定量教育政策论文。',
    bullets: [
      '使用 R 处理并分析 Early Childhood Longitudinal Study（ECLS-K: 2010-2011）原始数据。',
      '通过回归分析识别早期阅读训练与学生自信心水平之间的正向相关关系。',
      '通过调节效应分析发现，学前阅读准备与三年级自信心之间的关联在男生群体中更强。',
      '撰写学术论文 Building Strong Readers: The Link Between Early Training and Future Self-Confidence，并为家长、教育者和未来研究提出可行动建议。'
    ]
  },
  'oecd-education-governance-through-pisa': {
    title: '关于 OECD 通过 PISA 进行教育治理的 CIE 文献综述',
    course: 'ED POL 675：比较与国际教育导论',
    period: '2022 年 10 月 - 2022 年 12 月',
    location: 'Madison, WI',
    description: '一篇关于 OECD、PISA 及其对全球教育治理影响的比较与国际教育文献综述。',
    bullets: [
      '围绕 OECD 与 PISA 在教育治理中的角色开展系统性文献综述。',
      '分析 PISA 扩展如何影响近 100 个国家的教育系统和政策改革。',
      '批判性讨论 OECD 强调全球竞争力和绩效导向的教育理念。',
      '梳理 OECD 策略及其全球教育合作模式的优势与局限。'
    ]
  }
};

export function localizePaper(paper: Paper, locale: Locale): Paper {
  if (locale === 'en') return paper;
  const translated = zhPapers[paper.slug];
  return translated ? { ...paper, ...translated } : paper;
}
