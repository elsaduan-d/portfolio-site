export const PROJECT_FILTERS = [
  'All',
  'AI Products',
  'Learning Products',
  'Interactive Experiences',
  'Research Projects'
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];
export type ProjectCategory = Exclude<ProjectFilter, 'All'>;

const PROJECT_CATEGORY_MAP: Record<string, ProjectCategory[]> = {
  taskmate: ['AI Products'],
  'teacher-reflection-lab': ['AI Products', 'Learning Products'],
  'table-craft': ['AI Products'],
  'edtech-analyzer': ['AI Products'],
  'eye-tracking-analysis': ['Research Projects'],
  'word-cross-wordy': ['AI Products', 'Learning Products', 'Interactive Experiences'],
  'a-ronins-reckoning': ['Interactive Experiences'],
  'how-people-learn-for-parents': ['Learning Products', 'Research Projects'],
  'between-us': ['Interactive Experiences'],
  'trash-buddies': ['Learning Products', 'Interactive Experiences'],
  'guess-the-library': ['Interactive Experiences', 'Learning Products'],
  'boston-easytrip': ['Learning Products', 'Interactive Experiences']
};

export function getProjectCategories(slug: string): ProjectCategory[] {
  return PROJECT_CATEGORY_MAP[slug] ?? [];
}
