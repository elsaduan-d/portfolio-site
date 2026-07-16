import { PageHeader } from '@/components/PageHeader';
import { ProjectExplorer } from '@/components/ProjectExplorer';
import { getProjectsWithAssets } from '@/lib/project-assets';

export default async function ProjectsPage() {
  const projects = await getProjectsWithAssets();

  return (
    <main className="container-shell section-padding">
      <PageHeader
        i18nKey="projects"
        eyebrow="Projects"
        title="Products, prototypes, and learning experiences across AI education, games, and decision support."
        intro="Select a project from the index to explore the product framing, design logic, and supporting slides or media."
      />
      <section className="pt-8">
        <ProjectExplorer items={projects} />
      </section>
    </main>
  );
}
