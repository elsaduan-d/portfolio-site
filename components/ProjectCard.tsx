import Link from 'next/link';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface flex h-full flex-col p-7 transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{project.category}</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <Link href={`/projects/${project.slug}`} className="button-tertiary -ml-4">
          View project
        </Link>
      </div>
    </article>
  );
}
