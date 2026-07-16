import { notFound } from 'next/navigation';
import { EyeTrackingCaseStudy } from '@/components/EyeTrackingCaseStudy';
import { ProjectGallery } from '@/components/ProjectGallery';
import { ProjectDetailContent } from '@/components/ProjectDetailContent';
import { projects, getProjectBySlug } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (project.slug === 'eye-tracking-analysis') {
    return <EyeTrackingCaseStudy />;
  }

  return (
    <ProjectDetailContent project={project}>
      <ProjectGallery slug={project.gallerySlug ?? project.slug} title={project.title} />
    </ProjectDetailContent>
  );
}
