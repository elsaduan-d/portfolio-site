export type Paper = {
  slug: string;
  title: string;
  course: string;
  period?: string;
  location?: string;
  description: string;
  bullets?: string[];
  pdfPath?: string;
};

export const papers: Paper[] = [
  {
    slug: 'algorithm-based-tutoring-gauth-doubao-aixue',
    title: 'Algorithm-based Tutoring: Gauth and Doubao-Aixue',
    course: 'MIT Learning, Media, and Technology',
    description:
      'A comparative AI product analysis examining how market context, policy, and user expectations shape tutoring product design in the U.S. and China.',
    pdfPath: '/papers/algorithm-based-tutoring-gauth-doubao-aixue.pdf'
  },
  {
    slug: 'khanmigo-writing-coach',
    title: 'Khanmigo Writing Coach: Instructionist and Constructionist Analysis',
    course: 'MIT Learning, Media, and Technology',
    description:
      'An analysis of scaffolding, learner agency, and feedback design in an AI writing coach, with a redesign lens grounded in learning theory.',
    pdfPath: '/papers/khanmigo-writing-coach-analysis.pdf'
  },
  {
    slug: 'lmt-assignment2-memo',
    title: 'Memorandum: Recommendation for Adopting AI Coding Tools in Undergraduate Game Design Courses',
    course: 'MIT Learning, Media, and Technology',
    description:
      'A recommendation memo on the educational value, adoption risks, and implementation conditions of AI coding tools in project-based game design learning.',
    pdfPath: '/papers/LMT Assignment2_Memo.pdf'
  },
  {
    slug: 'content-analysis-of-video-programming',
    title: 'Content Analysis of Video Programming',
    course: 'Harvard Growing Up in a Media World',
    description:
      'A content analysis of media programming that examines representation patterns, audience assumptions, and the design of children’s media environments.',
    pdfPath: '/papers/content-analysis-of-video-programming.pdf'
  },
  {
    slug: 'parents-perceptions-screen-media-game-devices',
    title: 'Quantitative Research on Parents Perceptions of Educational Benefits of Screen Media in Game Devices',
    course: 'ED POL 350/605: Applied Quantitative Education Research',
    period: 'Feb 2024 - May 2024',
    location: 'Madison, WI',
    description:
      'A quantitative study examining how parents perceive the educational benefits of screen media in game devices using national media-use survey data.',
    bullets: [
      'Inspected and processed raw data from The Common Sense Census: Media Use by Kids Age Zero to Eight in America, retaining 1,012 observations after cleaning and filtering from an initial 1,454 cases.',
      'Evaluated how parental perceptions of screen media benefits vary by socioeconomic status, educational background, and regional differences across the United States.',
      'Conducted a detailed analysis of socioeconomic factors by categorizing household income into broader segments and reclassifying education levels for meaningful comparisons.',
      'Explored regional differences and found consistent moderate acknowledgment of educational benefits across U.S. regions.',
      'Provided insights and recommendations for educators and policymakers to tailor strategies based on socioeconomic and regional factors.'
    ]
  },
  {
    slug: 'early-reading-training',
    title: 'Quantitative Research on Early Reading Training',
    course: 'ED POL 600: Problems in Educational Policy',
    period: 'Feb 2023 - May 2023',
    location: 'Madison, WI',
    description:
      'A quantitative education-policy paper analyzing the relationship between early reading training and later student confidence.',
    bullets: [
      'Processed and analyzed raw data from the Early Childhood Longitudinal Study (ECLS-K: 2010-2011) using R.',
      'Identified a positive correlation between early reading training and student confidence levels through regression analysis.',
      'Found stronger associations between pre-kindergarten reading preparation and third-grade confidence for male students through moderation effect analysis.',
      'Authored Building Strong Readers: The Link Between Early Training and Future Self-Confidence, with actionable recommendations for parents, educators, and future research.'
    ]
  },
  {
    slug: 'oecd-education-governance-through-pisa',
    title: "CIE Literature Review on OECD's Education Governance through PISA",
    course: 'ED POL 675: Introduction to Comparative and International Education',
    period: 'Oct 2022 - Dec 2022',
    location: 'Madison, WI',
    description:
      'A comparative and international education literature review on the OECD, PISA, and their influence on global education governance.',
    bullets: [
      "Conducted a comprehensive literature review on the OECD and PISA's role in educational governance.",
      "Analyzed the impact of PISA's expansion on global educational systems and policy reforms in nearly 100 countries.",
      "Critiqued OECD educational ideologies emphasizing global competitiveness and performance.",
      "Detailed the pros and cons of OECD strategies and global educational collaboration."
    ]
  }
];
