export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Assistant AIGC Product Manager',
    organization: 'Bodao Technology / TaskMate',
    period: 'Aug 2023 - Present',
    description:
      'Worked on AIGC product research, workflow analysis, prototype feedback, and commercialization support across e-commerce and educational product scenarios.',
    bullets: [
      'Assisted in 10+ marketing research projects by gathering potential client information, background context, and market signals.',
      'Generated product and learning-design ideas for eight educational initiatives, including big data and social media courses for students.',
      'Designed and participated in an e-course on big data and e-commerce that reached 8,000+ online students.',
      'Mapped end-to-end workflows for TaskMate, including task submission, campaign context, multi-agent collaboration, review reporting, and teacher handoff.',
      'Provided structured UI and product recommendations for onboarding, prompt guidance, answer modes, taxonomy, navigation, uploads, and error states.',
      'Analyzed 20+ e-commerce education livestreams with Excel and translated performance data into product and content recommendations.',
      'Analyzed 18 students’ e-commerce streaming data and offered strategies that led to a 400% average increase in views.',
      'Trained the BoTok Edu AI model as a product recommender and learning advisor for users.',
      'Co-designed Botrix, a 2.5D gamified retail simulation platform built with Unity.',
      'Worked with cross-functional teams to merge advanced human-computer interaction techniques with educational content.'
    ]
  },
  {
    role: 'Founding Organizer',
    organization: 'China Education Symposium, Harvard Graduate School of Education',
    period: 'Sep 2025 - Nov 2025',
    description:
      'Co-organized an education and cultural forum focused on intangible cultural heritage education with a public-facing communications and event operations lens.',
    bullets: [
      'Coordinated four guest speakers across outreach, preparation meetings, rehearsal scheduling, and live event execution.',
      'Drafted bilingual speaker materials and audience-facing content for social media and event channels.',
      'Collected participant feedback and summarized takeaways for post-event review.'
    ]
  },
  {
    role: 'Graduate Assistant, Equity Workshop Producer',
    organization: 'UW-Madison Division of Diversity, Equity & Educational Achievement (DDEEA)',
    period: 'Aug 2023 - Dec 2024',
    description:
      'Produced the Graduate Assistants’ Equity Workshop (GAEW), supporting equity-centered training, campus communications, and resource coordination for graduate assistants, academic staff, and students.',
    bullets: [
      'Compiled the GAEW Resource Book and allocated 10+ pieces of information about laws, policies, regulations, and resources.',
      'Collaborated with eight departments, including DoIT, OHR, GPSD, Ombuds, EAO, University Veteran Services, SMRRP, and UHS.',
      'Produced and managed 30+ Zoom workshops, distributed materials, and supported 3,000+ academic staff and students.',
      'Updated website content, including session information and FAQs, through WordPress to ensure accurate user-facing information.',
      'Managed 12+ official administrative communications for effective campus-wide information sharing across three semesters.'
    ]
  },
  {
    role: 'Teaching Assistant',
    organization: 'The Confucius Institute at Chiang Mai University',
    period: 'Jul 2023 - Aug 2023',
    description:
      'Supported the Chinese + E-Commerce Training Program remotely through class operations, teacher communication, grading support, and student-facing assistance.',
    bullets: [
      'Assisted in the Chinese + E-Commerce Training Program with more than 100 students.',
      'Supported administrative work, class management, and communication with teachers.',
      'Helped grade and review student work and responded to student questions.'
    ]
  },
  {
    role: 'Administrative Intern',
    organization: 'The Finance and Trade School of Dali Bai Autonomous Prefecture',
    period: 'May 2023 - Jun 2023',
    description:
      'Assisted school administration, media production, reporting, and student project rehearsal support across online and on-site recruitment activities.',
    bullets: [
      'Assisted in online and on-site administration activities introducing the campus to prospective students.',
      'Created 10+ video clips and facilitated the shooting process for all seven departments.',
      'Analyzed data reports, reflected on project improvements, and revised the school administrative plan accordingly.',
      'Facilitated 25 student representatives in evaluating online-streaming projects and provided rehearsal feedback.'
    ]
  }
];
