import { ProjectExplorer } from '@/components/ProjectExplorer';
import { getProjectsWithAssets } from '@/lib/project-assets';

export default async function ProjectsPage() {
  const projects = await getProjectsWithAssets();

  return (
    <main className="container-shell section-padding">
      <ProjectExplorer items={projects} />
    </main>
  );
}
