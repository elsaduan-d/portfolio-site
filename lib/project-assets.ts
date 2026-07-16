import { projects, type Project } from '@/data/projects';
import { getSlideItems, type SlideItem } from '@/lib/slide-assets';

export type ProjectWithAssets = Project & {
  slides: SlideItem[];
};

export async function getProjectsWithAssets(): Promise<ProjectWithAssets[]> {
  return Promise.all(
    projects.map(async (project) => ({
      ...project,
      slides: project.slides ?? (await getSlideItems(project.gallerySlug ?? project.slug, project.title))
    }))
  );
}
