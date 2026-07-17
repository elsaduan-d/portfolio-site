"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { Project } from '@/data/projects';
import type { SlideItem } from '@/lib/slide-assets';
import { useLanguage } from '@/components/LanguageProvider';
import { localizeProject } from '@/lib/i18n';

export type ProjectWithAssets = Project & {
  slides: SlideItem[];
};

export function ProjectExplorer({ items }: { items: ProjectWithAssets[] }) {
  const [filter, setFilter] = useState('all');
  const { locale, t } = useLanguage();
  const localizedItems = useMemo(
    () => items.map((item) => localizeProject(item, locale) as ProjectWithAssets),
    [items, locale]
  );
  const filters = ['all', ...Array.from(new Set(localizedItems.map((item) => item.category)))];
  const visibleItems = filter === 'all' ? localizedItems : localizedItems.filter((item) => item.category === filter);

  useEffect(() => {
    setFilter('all');
  }, [locale]);

  return (
    <section>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => {
          const isActive = item === filter;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-3.5 py-2 text-xs transition ${
                isActive ? 'border-ink bg-ink text-white' : 'border-line bg-white/55 text-muted hover:border-ink/40 hover:text-ink'
              }`}
            >
              {item === 'all' ? t('common.all') : item}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group overflow-hidden rounded-[30px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(255,255,255,0.34))] p-3 shadow-[0_24px_70px_rgba(28,24,20,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_95px_rgba(28,24,20,0.12)]"
          >
            <ProjectImage project={project} />
            <div className="px-2 pb-3 pt-5">
              <p className="text-[11px] leading-5 text-muted/75">{project.category}</p>
              <h2 className="mt-1 font-serif text-xl tracking-tight text-ink">{project.title}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProjectImage({ project }: { project: ProjectWithAssets }) {
  const image = getProjectImage(project);

  if (!image) {
    return (
      <div className="relative flex aspect-[16/10] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_28%_25%,rgba(255,255,255,0.78),transparent_28%),linear-gradient(135deg,rgba(35,32,28,0.92),rgba(124,112,92,0.52))] p-5 text-white">
        <div className="mt-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/62">{project.category}</p>
          <p className="mt-2 max-w-[14rem] font-serif text-2xl leading-tight">{project.title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[#f7f3ea]">
      <Image
        src={image.src}
        alt={`${project.title} preview`}
        fill
        className={`${image.fit === 'contain' ? 'object-contain' : 'object-cover'} transition duration-700 group-hover:scale-[1.04]`}
        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
    </div>
  );
}

function getProjectImage(project: ProjectWithAssets) {
  if (project.slug === 'boston-easytrip') return { src: '/project-covers/boston-easytrip-cover.png', fit: 'contain' as const };
  if (project.slug === 'word-cross-wordy') return { src: '/project-covers/word-cross-wordy-cover.png', fit: 'contain' as const };
  if (project.slug === 'taskmate') return { src: '/project-covers/taskmate-cover.png', fit: 'cover' as const };
  if (project.slug === 'teacher-reflection-lab') return { src: '/project-covers/teacher-reflection-lab-cover.png', fit: 'cover' as const };
  if (project.slug === 'table-craft') return { src: '/project-covers/table-craft-cover.png', fit: 'cover' as const };
  if (project.slug === 'edtech-analyzer') return { src: '/project-covers/edtech-analyzer-cover.png', fit: 'cover' as const };
  if (project.slug === 'a-ronins-reckoning') return { src: '/project-covers/a-ronins-reckoning-cover.png', fit: 'cover' as const };
  if (project.slug === 'eye-tracking-analysis') return { src: '/project-covers/eye-tracking-analysis-cover.png', fit: 'cover' as const };
  if (project.slug === 'how-people-learn-for-parents') return { src: '/project-covers/hgse-foundation-course-cover.png', fit: 'cover' as const };
  if (project.slug === 'guess-the-library') return { src: '/project-covers/guess-the-library-cover.png', fit: 'cover' as const };
  if (project.slug === 'between-us') return { src: '/project-covers/between-us-cover.png', fit: 'cover' as const };
  if (project.slug === 'trash-buddies') return { src: '/project-covers/trash-buddies-cover.png', fit: 'cover' as const };
  if (project.demoSlides?.[0]?.type === 'image') return { src: project.demoSlides[0].frameSrc ?? project.demoSlides[0].src, fit: 'cover' as const };
  if (project.slides?.[0]?.type === 'image') return { src: project.slides[0].frameSrc ?? project.slides[0].src, fit: 'cover' as const };
  return null;
}
