import type { SlideItem } from '@/lib/slide-assets';

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  gallerySlug?: string;
  videoPath?: string;
  featuredEmbed?: {
    title: string;
    src: string;
  };
  demoSlides?: SlideItem[];
  slides?: SlideItem[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'taskmate',
    title: 'TaskMate / E-commerce Multi-Agent AI Training Platform',
    category: 'Product Management',
    description:
      'A workflow-driven AIGC training platform for e-commerce learning, built around task submission, campaign context, multi-agent collaboration, and review reporting.',
    longDescription:
      'TaskMate sits at the intersection of product operations, AI workflow design, and training delivery. My work focused on mapping friction points, clarifying handoffs between users and instructors, and improving the product logic behind onboarding, task review, and AI-supported feedback loops.',
    tags: ['AIGC', 'multi-agent systems', 'product testing', 'workflow design'],
    links: [
      { label: 'View TaskMate Site', href: 'https://taskmate.nodorac.com/commerce' }
    ]
  },
  {
    slug: 'teacher-reflection-lab',
    title: 'Teacher Reflection Lab',
    category: 'AI Education Product',
    description:
      'An AI-supported reflection platform for novice teachers combining teaching personality insights, scenarios, and reflective feedback.',
    longDescription:
      'Teacher Reflection Lab is a professional learning concept focused on helping teachers reflect on real classroom dilemmas in a more structured, collaborative, and growth-oriented way. The product combines scenarios, guided reflection, and thoughtful AI support without replacing teacher judgment.',
    tags: ['AI reflection', 'teacher learning', 'learning design', 'product logic'],
    gallerySlug: 'teacher-reflection-lab-final-presentation',
    demoSlides: [
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-09.gif', alt: 'Teacher Reflection Lab demo slide 1' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-10.gif', alt: 'Teacher Reflection Lab demo slide 2' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-11.gif', alt: 'Teacher Reflection Lab demo slide 3' }
    ],
    slides: [
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-01.png', alt: 'Teacher Reflection Lab walkthrough slide 1' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-02.png', alt: 'Teacher Reflection Lab walkthrough slide 2' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-03.png', alt: 'Teacher Reflection Lab walkthrough slide 3' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-04.png', alt: 'Teacher Reflection Lab walkthrough slide 4' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-05.png', alt: 'Teacher Reflection Lab walkthrough slide 5' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-06.png', alt: 'Teacher Reflection Lab walkthrough slide 6' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-07.png', alt: 'Teacher Reflection Lab walkthrough slide 7' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-08.png', alt: 'Teacher Reflection Lab walkthrough slide 8' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-12.png', alt: 'Teacher Reflection Lab walkthrough slide 9' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-13.png', alt: 'Teacher Reflection Lab walkthrough slide 10' },
      { type: 'image', src: '/project-slides/teacher-reflection-lab-final-presentation/slide-14.png', alt: 'Teacher Reflection Lab walkthrough slide 11' }
    ],
    links: [
      { label: 'Pitch Deck', href: '/papers/teacher-reflection-lab-pitch-deck.pdf' },
      { label: 'Conference Proposal', href: '/papers/teacher-reflection-lab-conference-proposal.pdf' },
      { label: 'Big Five Guide', href: '/papers/teacher-reflection-lab-big-five-guide.pdf' },
      { label: 'Sample Scenario Guide', href: '/papers/teacher-reflection-lab-sean-number-simulation-script.pdf' },
      { label: 'MVP Audience Survey', href: 'https://forms.gle/HrVTG8ehg4U6XMUt5' }
    ]
  },
  {
    slug: 'table-craft',
    title: 'Table Craft',
    category: 'LLM Tooling',
    description:
      'An LLM-assisted data visualization tool that translates raw datasets into clearer user-facing charts and visual patterns.',
    longDescription:
      'Table Craft explored how natural-language prompts could be used to interpret datasets and map them to appropriate visual formats. The project emphasized usefulness, readability, and the reliability of prompt-to-chart translation.',
    tags: ['LLM APIs', 'data visualization', 'prompt design'],
    gallerySlug: 'table-craft'
  },
  {
    slug: 'edtech-analyzer',
    title: 'EdTech Analyzer',
    category: 'Decision Support',
    description:
      'A decision-support website for evaluating education technology tools through structured criteria and evidence-based reporting.',
    longDescription:
      'EdTech Analyzer was designed as a practical website for people making adoption choices about educational technology. It translates tool evaluation into a more transparent, interactive experience that is easier to skim and compare.',
    tags: ['web product', 'evaluation', 'evidence-based EdTech'],
    gallerySlug: 'edtech-analyzer'
  },
  {
    slug: 'eye-tracking-analysis',
    title: 'Eye-Tracking Analysis',
    category: 'UX Research',
    description:
      'A comparative UX research case study using Tobii eye-tracking data and Tableau visualizations to evaluate two paper-crane instructional layouts.',
    longDescription:
      'This project used Tobii eye-tracking data to compare how users visually navigated two instructional designs for the same paper-crane task. The Tableau analysis examined gaze paths, attention clusters, and cluster summaries to understand how layout design may influence scanning behavior, text-image integration, and cognitive load.',
    tags: ['UX Research', 'Tobii Eye Tracking', 'Tableau', 'Instructional Design', 'Visual Attention', 'Learning Design']
  },
  {
    slug: 'word-cross-wordy',
    title: 'Word Cross “Wordy”',
    category: 'Learning Game',
    description:
      'A crossword-style English learning game built for multimodal vocabulary recall using clues, translation, audio, and image concepts.',
    longDescription:
      'Wordy emphasizes repeated, low-stakes vocabulary practice while keeping the interaction lightweight and motivating. The project combines multimodal support with a familiar puzzle format to make vocabulary rehearsal feel playful rather than punitive.',
    tags: ['game design', 'multimodal learning', 'vocabulary'],
    gallerySlug: 'word-cross-wordy',
    featuredEmbed: {
      title: 'Word Cross Wordy demo video',
      src: 'https://www.youtube.com/embed/FCIXCsi9Wvc'
    }
  },
  {
    slug: 'a-ronins-reckoning',
    title: 'A Ronin\'s Reckoning',
    category: 'Interactive Game',
    description:
      'A narrative action game that explores combat, tension, and player decision-making through a stylized ronin experience.',
    longDescription:
      'A Ronin\'s Reckoning is a game design project centered on atmosphere, action, and player immersion. It reflects my interest in interactive systems that combine aesthetic direction, pacing, and user experience to create a cohesive playable world.',
    tags: ['game design', 'interactive experience', 'player experience'],
    links: [{ label: 'View on itch.io', href: 'https://kiinanishihara.itch.io/a-ronins-reckoning?secret=RdZzZkLeDCC8dHvlCiSgen6iTk' }]
  },
  {
    slug: 'how-people-learn-for-parents',
    title: 'Redesigning HGSE Foundation Course for Parents',
    category: 'Learning Design',
    description:
      'A redesign effort that translated HGSE foundation-course content, user needs, and backwards design into a more accessible experience for parent learners.',
    longDescription:
      'This project focused on adapting a graduate-level learning experience for parents. It brought together survey research, interviews, learner personas, and accessible activity design to make foundational learning-science content more audience-aware and actionable.',
    tags: ['personas', 'learner journey', 'backwards design', 'parent learning'],
    gallerySlug: 'how-people-learn-for-parents',
    demoSlides: [
      { type: 'image', src: '/project-slides/how-people-learn-for-parents/slide-3.png', alt: 'HGSE Foundation Course for Parents showcase slide 1' },
      { type: 'image', src: '/project-slides/how-people-learn-for-parents/slide-4.png', alt: 'HGSE Foundation Course for Parents showcase slide 2' },
      { type: 'image', src: '/project-slides/how-people-learn-for-parents/slide-5.png', alt: 'HGSE Foundation Course for Parents showcase slide 3' },
      { type: 'image', src: '/project-slides/how-people-learn-for-parents/slide-6.png', alt: 'HGSE Foundation Course for Parents showcase slide 4' },
      { type: 'image', src: '/project-slides/how-people-learn-for-parents/slide-7.png', alt: 'HGSE Foundation Course for Parents showcase slide 5' }
    ],
    slides: [
      { type: 'image', src: '/project-slides/how-people-learn-for-parents/slide-1.png', alt: 'HGSE Foundation Course for Parents survey slide' },
      { type: 'image', src: '/project-slides/how-people-learn-for-parents/slide-2.png', alt: 'HGSE Foundation Course for Parents learner personas slide' }
    ],
    links: [
      {
        label: 'Parent Survey',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSeHVT1b71XahJuR0ynTHc3r_g1LFdcvX_qUSP8XN-6X50V1-w/viewform'
      }
    ]
  },
  {
    slug: 'between-us',
    title: 'Between Us',
    category: 'Interactive Game',
    description:
      'A relationship-building prototype that uses guided questions, turn-taking, and shared reflection to support deeper interpersonal connection.',
    longDescription:
      'Between Us is an interactive social game that blends facilitation design with emotionally aware interaction flow. Players first respond to guided prompts and then author prompts for one another, turning conversation into a structured but personal experience.',
    tags: ['social game', 'facilitation', 'prototype'],
    videoPath: '/videos/between-us-screen-recording.mp4',
    links: [{ label: 'Watch Video', href: '/videos/between-us-screen-recording.mp4' }]
  },
  {
    slug: 'trash-buddies',
    title: 'Trash Buddies',
    category: 'Game-Based Learning',
    description:
      'A sustainability learning concept built around waste sorting, pattern recognition, and ecosystem awareness for younger learners.',
    longDescription:
      'Trash Buddies frames environmental learning as a mission-driven interaction where learners sort waste and see the broader sustainability implications of their actions. It aims to support both coordination skills and environmental understanding.',
    tags: ['sustainability', 'children', 'learning game'],
    gallerySlug: 'trash-buddies'
  },
  {
    slug: 'guess-the-library',
    title: 'Guess the Library',
    category: 'AR Experience',
    description:
      'An AR concept for exploring Harvard libraries through visual clues, discovery, and location-based interaction.',
    longDescription:
      'Guess the Library turns campus orientation into a playful exploration experience. Players learn about the facts and feel of each Harvard library by scanning the front of a card. The AR experience brings the space to life through seamless audio, text, and a 360 tour, giving players a more experiential feel and clearer informational insight into campus spaces. By using clues and recognition-driven interaction, it encourages curiosity and place-based learning rather than passive information delivery.',
    tags: ['AR', 'location-based learning', 'experience design'],
    gallerySlug: 'guess-the-library',
    featuredEmbed: {
      title: 'Guess the Library demo video',
      src: 'https://www.youtube.com/embed/ntF3F1Zh3SE'
    },
    slides: [
      {
        type: 'image',
        src: '/project-slides/guess-the-library/slide-1.gif',
        alt: 'Guess the Library slide 1',
        composition: 'guess-the-library-slide-1',
        frameSrc: '/project-slides/guess-the-library/slide-1.png'
      },
      { type: 'image', src: '/project-slides/guess-the-library/slide-2.png', alt: 'Guess the Library slide 2' },
      { type: 'image', src: '/project-slides/guess-the-library/slide-3.png', alt: 'Guess the Library slide 3' }
    ]
  },
  {
    slug: 'boston-easytrip',
    title: 'Boston EasyTrip',
    category: 'Service Design',
    description:
      'A visitor-support concept that improves travel planning with budget options, food recommendations, and practical city guidance.',
    longDescription:
      'Boston EasyTrip was designed as a more useful visitor experience with practical travel support, local recommendations, and context-aware planning help. It focuses on service clarity and a more supportive information architecture for visitors.',
    tags: ['service design', 'travel UX', 'information architecture'],
    gallerySlug: 'boston-easytrip',
    featuredEmbed: {
      title: 'Boston EasyTrip demo video',
      src: 'https://www.youtube.com/embed/UvHltmG_xIA'
    }
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
