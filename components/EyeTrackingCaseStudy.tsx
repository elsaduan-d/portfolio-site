"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

type EvidenceItem = {
  id: string;
  type: string;
  title: string;
  src: string;
  alt: string;
  caption: string;
  fit?: 'cover' | 'contain';
  position?: string;
  featured?: boolean;
};

type DesignCondition = {
  label: 'A' | 'B';
  title: string;
  shortTitle: string;
  summary: string;
  stimulus: EvidenceItem;
  evidence: EvidenceItem[];
};

const tags = [
  'UX Research',
  'Eye Tracking',
  'Instructional Design',
  'Visual Attention',
  'Learning Design',
  'Data Visualization'
];

const zhTags = ['UX 研究', '眼动追踪', '教学设计', '视觉注意', '学习设计', '数据可视化'];

const methods = [
  {
    title: 'Stimuli',
    body: 'Two paper-crane instruction designs with different text-image layouts.'
  },
  {
    title: 'Data',
    body: 'Gaze X and Gaze Y coordinates collected over time using the Tobii eye-tracking system.'
  },
  {
    title: 'Visualizations',
    body: 'Tableau visualizations of gaze paths, gaze-over-time plots, attention clusters, and cluster count summaries.'
  },
  {
    title: 'Analysis Goal',
    body: 'Compare how users distributed attention across text, diagrams, and visual regions.'
  }
];

const zhMethods = [
  {
    title: '实验材料',
    body: '两种纸鹤折叠说明设计，采用不同的图文版式。'
  },
  {
    title: '数据',
    body: '使用 Tobii 眼动追踪系统收集随时间变化的 Gaze X 与 Gaze Y 坐标。'
  },
  {
    title: '可视化',
    body: '使用 Tableau 可视化视线路径、随时间变化的注视图、注意力聚类和聚类数量摘要。'
  },
  {
    title: '分析目标',
    body: '比较用户如何在文字、图示和不同视觉区域之间分配注意力。'
  }
];

const designConditions: DesignCondition[] = [
  {
    label: 'A',
    title: 'Design A: Text-Heavy Split Layout',
    shortTitle: 'Text-Heavy Split Layout',
    summary:
      'Design A separates a long procedural text list from the visual diagram sequence. Users need to connect written steps with corresponding images across two separated regions.',
    stimulus: {
      id: 'design-a-stimulus',
      type: 'Stimulus',
      title: 'Design A stimulus',
      src: '/eye-tracking/design-a-stimulus.jpg',
      alt: 'Design A paper crane instruction stimulus with long procedural text on the left and diagrams on the right',
      caption:
        'Original text-heavy split layout used as the visual stimulus, with procedural text separated from the diagram sequence.',
      fit: 'contain',
      featured: true
    },
    evidence: [
      {
        id: 'design-a-stimulus-evidence',
        type: 'Stimulus',
        title: 'Original instructional layout',
        src: '/eye-tracking/design-a-stimulus.jpg',
        alt: 'Design A original instructional layout with long text and separate image region',
        caption:
          'The same paper-crane task appears as a long text list on the left and a separate diagram field on the right.',
        fit: 'contain',
        featured: true
      },
      {
        id: 'design-a-gaze-path',
        type: 'Gaze Path / Over Time',
        title: 'Gaze path over time',
        src: '/eye-tracking/design-a-gaze-path-over-time.jpg',
        alt: 'Design A gaze path over time visualization across the split text and diagram layout',
        caption:
          'Gaze paths show movement across the split instruction layout over time, including switching between the text-heavy region and diagram area.',
        fit: 'cover',
        position: 'left center'
      },
      {
        id: 'design-a-attention',
        type: 'Attention Distribution',
        title: 'Repeated attention regions',
        src: '/eye-tracking/design-a-attention-distribution.jpg',
        alt: 'Design A gaze point distribution over text and diagram regions',
        caption:
          'Gaze points reveal which regions attracted repeated attention in the separated text-and-diagram layout.',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-a-cluster',
        type: 'Cluster Analysis',
        title: 'Attention clusters',
        src: '/eye-tracking/design-a-cluster-analysis.jpg',
        alt: 'Design A clustered gaze points showing text and diagram attention regions',
        caption:
          'Clustered gaze points identify recurring focus areas across the long text region and the visual diagram region.',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-a-cluster-count',
        type: 'Cluster Count',
        title: 'Cluster count summary',
        src: '/eye-tracking/design-a-cluster-count.jpg',
        alt: 'Design A horizontal bar chart summarizing gaze point counts by cluster',
        caption:
          'Cluster counts summarize the density of gaze points across the major attention regions identified in Design A.',
        fit: 'contain'
      }
    ]
  },
  {
    label: 'B',
    title: 'Design B: Visual Step-by-Step Layout',
    shortTitle: 'Visual Step-by-Step Layout',
    summary:
      'Design B pairs each diagram with a short caption, creating a more image-centered and spatially integrated step-by-step layout.',
    stimulus: {
      id: 'design-b-stimulus',
      type: 'Stimulus',
      title: 'Design B stimulus',
      src: '/eye-tracking/design-b-stimulus.jpg',
      alt: 'Design B paper crane instruction stimulus with diagram-caption pairs arranged step by step',
      caption:
        'Original visual step-by-step layout used as the visual stimulus, with each diagram paired with a short caption.',
      fit: 'contain',
      featured: true
    },
    evidence: [
      {
        id: 'design-b-stimulus-evidence',
        type: 'Stimulus',
        title: 'Original instructional layout',
        src: '/eye-tracking/design-b-stimulus.jpg',
        alt: 'Design B original instructional layout with diagram-caption pairs',
        caption:
          'The same procedure is organized into smaller diagram-caption units, making each step spatially integrated.',
        fit: 'contain',
        featured: true
      },
      {
        id: 'design-b-gaze-path',
        type: 'Gaze Path / Over Time',
        title: 'Gaze path over time',
        src: '/eye-tracking/design-b-gaze-path-over-time.jpg',
        alt: 'Design B gaze path over time visualization across visual step units',
        caption:
          'Gaze paths show how users moved across the step-by-step diagram-caption layout over time.',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-b-attention',
        type: 'Attention Distribution',
        title: 'Repeated attention regions',
        src: '/eye-tracking/design-b-attention-distribution.jpg',
        alt: 'Design B gaze point distribution over diagram-caption regions',
        caption:
          'Gaze points reveal repeated attention around diagram groups and adjacent captions in the integrated layout.',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-b-cluster',
        type: 'Cluster Analysis',
        title: 'Attention clusters',
        src: '/eye-tracking/design-b-cluster-analysis.jpg',
        alt: 'Design B clustered gaze points over step-by-step diagram units',
        caption:
          'Clustered gaze points identify recurring focus areas aligned with step units in the visual layout.',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-b-cluster-count',
        type: 'Cluster Count',
        title: 'Cluster count summary',
        src: '/eye-tracking/design-b-cluster-count.jpg',
        alt: 'Design B horizontal bar chart summarizing gaze point counts by cluster',
        caption:
          'Cluster counts summarize the relative density of gaze points across the attention regions identified in Design B.',
        fit: 'contain'
      }
    ]
  }
];

const zhDesignConditions: DesignCondition[] = [
  {
    label: 'A',
    title: '设计 A：文字密集的分区版式',
    shortTitle: '文字密集的分区版式',
    summary:
      '设计 A 将较长的步骤文字列表与图示序列分开。用户需要在两个相互分离的区域之间，将文字步骤和对应图像连接起来。',
    stimulus: {
      id: 'design-a-stimulus',
      type: '实验材料',
      title: '设计 A 实验材料',
      src: '/eye-tracking/design-a-stimulus.jpg',
      alt: '设计 A 纸鹤说明，左侧为长步骤文字，右侧为图示',
      caption:
        '原始的文字密集分区版式，用作视觉刺激材料，其中步骤文字与图示序列相互分离。',
      fit: 'contain',
      featured: true
    },
    evidence: [
      {
        id: 'design-a-stimulus-evidence',
        type: '实验材料',
        title: '原始教学版式',
        src: '/eye-tracking/design-a-stimulus.jpg',
        alt: '设计 A 原始教学版式，包含长文字和独立图示区域',
        caption:
          '同一个纸鹤任务以左侧长文字列表和右侧独立图示区域呈现。',
        fit: 'contain',
        featured: true
      },
      {
        id: 'design-a-gaze-path',
        type: '视线路径 / 时间变化',
        title: '随时间变化的视线路径',
        src: '/eye-tracking/design-a-gaze-path-over-time.jpg',
        alt: '设计 A 中跨越文字和图示分区的视线路径可视化',
        caption:
          '视线路径展示了用户如何在分区说明版式中移动，包括在文字密集区域和图示区域之间切换。',
        fit: 'cover',
        position: 'left center'
      },
      {
        id: 'design-a-attention',
        type: '注意力分布',
        title: '重复关注区域',
        src: '/eye-tracking/design-a-attention-distribution.jpg',
        alt: '设计 A 中文字和图示区域上的注视点分布',
        caption:
          '注视点显示在分离的文字与图示版式中，哪些区域吸引了重复关注。',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-a-cluster',
        type: '聚类分析',
        title: '注意力聚类',
        src: '/eye-tracking/design-a-cluster-analysis.jpg',
        alt: '设计 A 中文字与图示区域上的注视点聚类',
        caption:
          '注视点聚类识别出用户在长文字区域和图示区域中的反复聚焦位置。',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-a-cluster-count',
        type: '聚类数量',
        title: '聚类数量摘要',
        src: '/eye-tracking/design-a-cluster-count.jpg',
        alt: '设计 A 中按聚类汇总注视点数量的条形图',
        caption:
          '聚类数量摘要展示了设计 A 中主要注意力区域的注视点密度。',
        fit: 'contain'
      }
    ]
  },
  {
    label: 'B',
    title: '设计 B：视觉化分步骤版式',
    shortTitle: '视觉化分步骤版式',
    summary:
      '设计 B 将每个图示与短说明配对，形成更以图像为中心、空间上更整合的分步骤版式。',
    stimulus: {
      id: 'design-b-stimulus',
      type: '实验材料',
      title: '设计 B 实验材料',
      src: '/eye-tracking/design-b-stimulus.jpg',
      alt: '设计 B 纸鹤说明，以图示和短说明配对逐步排列',
      caption:
        '原始的视觉化分步骤版式，用作视觉刺激材料，每个图示都配有简短说明。',
      fit: 'contain',
      featured: true
    },
    evidence: [
      {
        id: 'design-b-stimulus-evidence',
        type: '实验材料',
        title: '原始教学版式',
        src: '/eye-tracking/design-b-stimulus.jpg',
        alt: '设计 B 原始教学版式，包含图示与短说明配对',
        caption:
          '同一流程被组织成较小的图示与说明单元，使每一步在空间上更整合。',
        fit: 'contain',
        featured: true
      },
      {
        id: 'design-b-gaze-path',
        type: '视线路径 / 时间变化',
        title: '随时间变化的视线路径',
        src: '/eye-tracking/design-b-gaze-path-over-time.jpg',
        alt: '设计 B 中跨越视觉步骤单元的视线路径可视化',
        caption:
          '视线路径展示了用户如何随时间浏览分步骤的图示与说明版式。',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-b-attention',
        type: '注意力分布',
        title: '重复关注区域',
        src: '/eye-tracking/design-b-attention-distribution.jpg',
        alt: '设计 B 中图示与说明区域上的注视点分布',
        caption:
          '注视点显示用户在整合版式中反复关注图示组及其相邻说明。',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-b-cluster',
        type: '聚类分析',
        title: '注意力聚类',
        src: '/eye-tracking/design-b-cluster-analysis.jpg',
        alt: '设计 B 中分步骤图示单元上的注视点聚类',
        caption:
          '注视点聚类识别出与视觉步骤单元相对应的反复聚焦区域。',
        fit: 'cover',
        position: 'center center'
      },
      {
        id: 'design-b-cluster-count',
        type: '聚类数量',
        title: '聚类数量摘要',
        src: '/eye-tracking/design-b-cluster-count.jpg',
        alt: '设计 B 中按聚类汇总注视点数量的条形图',
        caption:
          '聚类数量摘要展示了设计 B 中各注意力区域的相对注视密度。',
        fit: 'contain'
      }
    ]
  }
];

const findings = [
  {
    title: 'Layout shaped attention behavior',
    body:
      'The two layouts created different visual navigation demands. The split layout required users to coordinate separated text and diagram regions, while the visual step-by-step layout organized attention around smaller diagram-caption units.'
  },
  {
    title: 'Text-image separation increased visual switching',
    body:
      'In the text-heavy split layout, gaze paths suggest frequent movement between written instructions and visual diagrams, indicating that users needed to integrate information across spatially separated regions.'
  },
  {
    title: 'Integrated step units supported clearer scanning',
    body:
      'In the visual step-by-step layout, gaze clusters appeared more closely aligned with individual instructional units, suggesting that pairing diagrams with captions may support more localized scanning.'
  },
  {
    title: 'Eye-tracking evidence revealed usability issues',
    body:
      'The gaze visualizations helped identify where instructional layout may increase search effort, cognitive load, or uncertainty during procedural learning.'
  }
];

const zhFindings = [
  {
    title: '版式影响注意力行为',
    body:
      '两种版式带来了不同的视觉浏览需求。分区版式要求用户协调分离的文字和图示区域，而视觉化分步骤版式则将注意力组织在更小的图示与说明单元周围。'
  },
  {
    title: '图文分离增加视觉切换',
    body:
      '在文字密集的分区版式中，视线路径显示用户频繁在文字说明和视觉图示之间移动，说明用户需要跨越空间上分离的区域整合信息。'
  },
  {
    title: '整合的步骤单元支持更清晰的扫描',
    body:
      '在视觉化分步骤版式中，注视聚类更贴近单个教学步骤单元，说明图示与说明的配对可能支持更局部、更清晰的浏览。'
  },
  {
    title: '眼动证据揭示可用性问题',
    body:
      '这些视线可视化帮助识别教学版式在哪些位置可能增加搜索成本、认知负荷或过程性学习中的不确定性。'
  }
];

const implications = [
  'Pair each procedural step with its corresponding visual.',
  'Reduce distance between related text and diagrams.',
  'Use stronger visual hierarchy for step sequences.',
  'Make numbering and visual anchors easier to follow.',
  'Design procedural learning materials to minimize search effort.',
  'Use gaze evidence to evaluate whether users can efficiently connect instructions and visuals.'
];

const zhImplications = [
  '将每一个步骤与对应图示配对。',
  '缩短相关文字和图示之间的距离。',
  '为步骤序列建立更清晰的视觉层级。',
  '让编号和视觉锚点更容易跟随。',
  '设计过程性学习材料时，尽量减少用户的搜索成本。',
  '用眼动证据评估用户是否能高效连接说明和图示。'
];

const caseCopy = {
  en: {
    designLabel: 'Design',
    back: 'Back to projects',
    heroEyebrow: 'UX Research Case Study',
    title: 'Eye-Tracking Analysis',
    subtitle: 'Comparing Visual Attention Across Two Instructional Designs',
    intro:
      'This project used Tobii eye-tracking data to compare how users visually navigated two instructional designs for the same paper-crane task. Using Tableau to analyze gaze paths, gaze-over-time patterns, attention clusters, and cluster summaries, I examined how layout design may influence scanning behavior, text-image integration, and cognitive load.',
    comparisonSummary:
      'The case compares two layouts for the same procedure, then uses gaze evidence to interpret how each layout shaped attention.',
    contextEyebrow: 'Study Context',
    contextTitle: 'Same task, different instructional layouts.',
    contextBody:
      'The task materials presented the same paper-crane procedure in two formats: a text-heavy split layout and a visual step-by-step layout. The analysis focused on how users moved between text, diagrams, and different regions of the interface.',
    researchQuestion: 'Research Question',
    researchQuestionBody:
      'How do users allocate visual attention across two different instructional layouts for the same procedural learning task? Does a text-heavy split layout create different scanning patterns than a visual step-by-step layout?',
    conditionsEyebrow: 'Design Conditions',
    conditionsTitle: 'Two instructional designs.',
    conditionsBody: 'Design A separates dense text from visuals. Design B integrates each diagram with a short caption.',
    methodEyebrow: 'Method',
    methodTitle: 'Analysis approach.',
    evidenceEyebrow: 'Visual Evidence',
    evidenceTitle: 'Design A and Design B evidence.',
    evidenceBody:
      'Each condition includes the stimulus, gaze path, attention distribution, cluster analysis, and cluster count summary.',
    findingsEyebrow: 'Comparative Findings',
    findingsTitle: 'How layout changed attention patterns.',
    implicationsEyebrow: 'Design Implications',
    implicationsTitle: 'How gaze evidence translates into instructional UX recommendations.',
    reflectionEyebrow: 'Reflection',
    reflectionTitle:
      'This project helped me understand how eye-tracking data can support evidence-based UX evaluation.',
    reflectionBody:
      'Instead of treating gaze visualizations as decorative outputs, I learned to use them to compare design conditions, interpret attention patterns, and generate design implications for instructional interfaces.',
    close: 'Close'
  },
  zh: {
    designLabel: '设计',
    back: '返回项目',
    heroEyebrow: 'UX 研究案例',
    title: '眼动追踪分析',
    subtitle: '比较两种教学设计中的视觉注意力',
    intro:
      '本项目使用 Tobii 眼动追踪数据，比较用户如何浏览同一个纸鹤任务的两种教学设计。通过 Tableau 分析视线路径、随时间变化的注视模式、注意力聚类和聚类摘要，我研究了版式设计如何影响扫描行为、图文整合和认知负荷。',
    comparisonSummary:
      '该案例比较同一流程的两种版式，并使用眼动证据解释每种版式如何塑造注意力分布。',
    contextEyebrow: '研究背景',
    contextTitle: '同一个任务，不同的教学版式。',
    contextBody:
      '任务材料以两种形式呈现同一纸鹤流程：文字密集的分区版式，以及视觉化的分步骤版式。分析重点是用户如何在文字、图示和界面不同区域之间移动注意力。',
    researchQuestion: '研究问题',
    researchQuestionBody:
      '面对同一个过程性学习任务，用户如何在两种不同教学版式中分配视觉注意力？文字密集的分区版式是否会产生不同于视觉化分步骤版式的扫描模式？',
    conditionsEyebrow: '设计条件',
    conditionsTitle: '两种教学设计。',
    conditionsBody: '设计 A 将密集文字与图示分离。设计 B 将每个图示与简短说明整合在一起。',
    methodEyebrow: '方法',
    methodTitle: '分析路径。',
    evidenceEyebrow: '视觉证据',
    evidenceTitle: '设计 A 与设计 B 的证据。',
    evidenceBody:
      '每个条件都包括实验材料、视线路径、注意力分布、聚类分析和聚类数量摘要。',
    findingsEyebrow: '比较发现',
    findingsTitle: '版式如何改变注意力模式。',
    implicationsEyebrow: '设计启示',
    implicationsTitle: '如何将眼动证据转化为教学 UX 建议。',
    reflectionEyebrow: '反思',
    reflectionTitle:
      '这个项目帮助我理解眼动数据如何支持基于证据的 UX 评估。',
    reflectionBody:
      '我不再把视线可视化只看作展示性输出，而是学习如何用它比较设计条件、解释注意力模式，并为教学界面生成设计启示。',
    close: '关闭'
  }
};

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return (
    <div
      ref={setNode}
      className={`${className} transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body,
  tone = 'light'
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: 'light' | 'dark';
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${tone === 'dark' ? 'text-white/50' : 'text-stone-500'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-serif text-2xl tracking-tight sm:text-3xl md:text-4xl ${tone === 'dark' ? 'text-white' : 'text-stone-950'}`}>
        {title}
      </h2>
      {body ? <p className={`mt-4 text-sm leading-7 sm:text-base ${tone === 'dark' ? 'text-white/65' : 'text-stone-600'}`}>{body}</p> : null}
    </div>
  );
}

function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[2rem] border border-white/70 bg-white/58 shadow-[0_24px_90px_rgba(30,24,18,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function EvidenceImage({ item, onOpen, compact = false }: { item: EvidenceItem; onOpen: (item: EvidenceItem) => void; compact?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className={`group w-full text-left ${item.featured && !compact ? 'lg:col-span-2' : ''}`}
      aria-label={`Open ${item.title} image`}
    >
      <GlassPanel className="h-full overflow-hidden p-3 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_34px_110px_rgba(30,24,18,0.13)]">
        <div className={`relative overflow-hidden rounded-[1.45rem] bg-stone-100 ${compact ? 'h-[230px]' : item.featured ? 'h-[270px] sm:h-[360px]' : 'h-[230px] sm:h-[300px]'}`}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            loading={item.featured ? 'eager' : 'lazy'}
            className={`transition duration-700 group-hover:scale-[1.025] ${
              item.fit === 'contain' ? 'object-contain p-4' : 'object-cover'
            }`}
            style={{ objectPosition: item.position ?? 'center center' }}
            sizes={item.featured ? '(min-width: 1024px) 980px, 100vw' : '(min-width: 1024px) 520px, 100vw'}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/18 to-transparent px-5 pb-5 pt-20 opacity-85 transition duration-300 group-hover:opacity-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">{item.type}</p>
            <h3 className="mt-2 text-lg font-medium tracking-tight text-white">{item.title}</h3>
          </div>
        </div>
        <p className="px-2 pb-3 pt-4 text-sm leading-7 text-stone-600">{item.caption}</p>
      </GlassPanel>
    </button>
  );
}

function ConditionComparisonCard({ condition, designLabel, onOpen }: { condition: DesignCondition; designLabel: string; onOpen: (item: EvidenceItem) => void }) {
  return (
    <button type="button" onClick={() => onOpen(condition.stimulus)} className="group h-full text-left">
      <GlassPanel className="h-full overflow-hidden p-3 transition duration-300 group-hover:-translate-y-1 group-hover:bg-white/72">
        <div className="relative h-[240px] overflow-hidden rounded-[1.45rem] bg-white sm:h-[320px]">
          <Image
            src={condition.stimulus.src}
            alt={condition.stimulus.alt}
            fill
            className="object-contain p-4 transition duration-700 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 520px, 100vw"
            priority
          />
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-stone-500">{designLabel} {condition.label}</p>
          <h3 className="mt-2 text-xl font-medium tracking-tight text-stone-950">{condition.shortTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-stone-600">{condition.summary}</p>
        </div>
      </GlassPanel>
    </button>
  );
}

function ConditionEvidenceSection({ condition, designLabel, onOpen }: { condition: DesignCondition; designLabel: string; onOpen: (item: EvidenceItem) => void }) {
  return (
    <section className="rounded-[2.2rem] border border-stone-200/70 bg-white/42 p-4 shadow-[0_20px_80px_rgba(30,24,18,0.05)] backdrop-blur sm:p-5 lg:p-6">
      <div className="grid gap-5 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">{designLabel} {condition.label}</p>
          <h3 className="mt-3 font-serif text-2xl tracking-tight text-stone-950">{condition.shortTitle}</h3>
          <p className="mt-4 text-sm leading-7 text-stone-600">{condition.summary}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {condition.evidence.map((item) => (
            <EvidenceImage key={item.id} item={item} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function EyeTrackingCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<EvidenceItem | null>(null);
  const { locale } = useLanguage();
  const copy = caseCopy[locale];
  const localizedTags = locale === 'zh' ? zhTags : tags;
  const localizedMethods = locale === 'zh' ? zhMethods : methods;
  const localizedConditions = locale === 'zh' ? zhDesignConditions : designConditions;
  const localizedFindings = locale === 'zh' ? zhFindings : findings;
  const localizedImplications = locale === 'zh' ? zhImplications : implications;

  useEffect(() => {
    if (!selectedImage) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedImage(null);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedImage]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f3] text-stone-950">
      <section className="relative border-b border-stone-200/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_0%,rgba(218,226,232,0.68),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,247,243,0.96))]" />
        <div className="container-shell relative py-8 sm:py-12 lg:py-16">
          <Link href="/projects" className="button-tertiary -ml-4">
            ← {copy.back}
          </Link>
          <div className="mt-10 grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.75fr)]">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">{copy.heroEyebrow}</p>
              <h1 className="mt-4 max-w-5xl font-serif text-4xl tracking-tight text-stone-950 sm:text-5xl">
                {copy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-7 text-stone-700 sm:text-xl">
                {copy.subtitle}
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
                {copy.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {localizedTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-stone-300/80 bg-white/60 px-3 py-1.5 text-xs text-stone-600 shadow-sm backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:pb-2">
              <GlassPanel className="p-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  {localizedConditions.map((condition) => (
                    <button
                      key={condition.label}
                      type="button"
                      onClick={() => setSelectedImage(condition.stimulus)}
                      className="group text-left"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-white">
                        <Image
                          src={condition.stimulus.src}
                          alt={condition.stimulus.alt}
                          fill
                          priority
                          className="object-cover transition duration-700 group-hover:scale-[1.03]"
                          sizes="(min-width: 1024px) 240px, 50vw"
                          style={{ objectPosition: 'center center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
                        <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                          {copy.designLabel} {condition.label}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="px-3 pb-3 pt-5 text-sm leading-7 text-stone-600">
                  {copy.comparisonSummary}
                </p>
              </GlassPanel>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-shell py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:gap-12">
          <Reveal>
            <SectionTitle
              eyebrow={copy.contextEyebrow}
              title={copy.contextTitle}
              body={copy.contextBody}
            />
          </Reveal>
          <Reveal>
            <GlassPanel className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">{copy.researchQuestion}</p>
              <p className="mt-4 font-serif text-xl leading-snug tracking-tight text-stone-950 sm:text-2xl">
                {copy.researchQuestionBody}
              </p>
            </GlassPanel>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-stone-200/70 bg-white/35">
        <div className="container-shell py-14 sm:py-16">
          <Reveal>
            <SectionTitle
              eyebrow={copy.conditionsEyebrow}
              title={copy.conditionsTitle}
              body={copy.conditionsBody}
            />
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {localizedConditions.map((condition) => (
              <Reveal key={condition.label} className="h-full">
                <ConditionComparisonCard condition={condition} designLabel={copy.designLabel} onOpen={setSelectedImage} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-14 sm:py-16">
        <Reveal>
          <SectionTitle eyebrow={copy.methodEyebrow} title={copy.methodTitle} />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {localizedMethods.map((method, index) => (
            <Reveal key={method.title} className="h-full">
              <GlassPanel className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/72">
                <p className="text-xs text-stone-400">0{index + 1}</p>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-stone-950">{method.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{method.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200/70 bg-white/30">
        <div className="container-shell py-14 sm:py-16">
          <Reveal>
            <SectionTitle
              eyebrow={copy.evidenceEyebrow}
              title={copy.evidenceTitle}
              body={copy.evidenceBody}
            />
          </Reveal>
          <div className="mt-8 space-y-6">
            {localizedConditions.map((condition) => (
              <Reveal key={condition.label}>
                <ConditionEvidenceSection condition={condition} designLabel={copy.designLabel} onOpen={setSelectedImage} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-stone-200/70 bg-stone-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(180,201,218,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <div className="container-shell relative py-14 sm:py-16">
          <Reveal>
            <SectionTitle
              eyebrow={copy.findingsEyebrow}
              title={copy.findingsTitle}
              tone="dark"
            />
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {localizedFindings.map((finding) => (
              <Reveal key={finding.title}>
                <div className="h-full rounded-[1.7rem] border border-white/12 bg-white/[0.07] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
                  <h3 className="text-xl font-medium leading-snug tracking-tight text-white">{finding.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/68">{finding.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1fr] lg:gap-12">
          <Reveal>
            <SectionTitle
              eyebrow={copy.implicationsEyebrow}
              title={copy.implicationsTitle}
            />
          </Reveal>
          <div className="grid gap-4">
            {localizedImplications.map((implication, index) => (
              <Reveal key={implication}>
                <GlassPanel className="flex items-center gap-5 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/72">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm text-white">
                    {index + 1}
                  </span>
                  <p className="text-base leading-7 text-stone-700">{implication}</p>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 sm:pb-20">
        <Reveal>
          <GlassPanel className="p-6 sm:p-8 lg:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">{copy.reflectionEyebrow}</p>
            <p className="mt-4 max-w-4xl font-serif text-xl leading-snug tracking-tight text-stone-950 sm:text-3xl">
              {copy.reflectionTitle}
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
              {copy.reflectionBody}
            </p>
          </GlassPanel>
        </Reveal>
      </section>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} image viewer`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-2 pb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{selectedImage.type}</p>
                <h2 className="mt-1 text-xl font-medium tracking-tight text-stone-950">{selectedImage.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-full border border-stone-200 px-4 py-2 text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-950"
              >
                {copy.close}
              </button>
            </div>
            <div className="max-h-[74vh] overflow-auto rounded-[1.5rem] bg-stone-100">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1900}
                height={1100}
                className="h-auto w-full"
                sizes="100vw"
              />
            </div>
            <p className="px-2 pt-3 text-sm leading-6 text-stone-600">{selectedImage.caption}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
