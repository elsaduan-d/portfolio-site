"use client";

import type React from 'react';
import Link from 'next/link';
import { InlinePdfLinks } from '@/components/InlinePdfLinks';
import { SlideCarousel } from '@/components/SlideCarousel';
import { useLanguage } from '@/components/LanguageProvider';
import type { Project } from '@/data/projects';
import { localizeProject } from '@/lib/i18n';
import { getProjectCategories } from '@/lib/project-taxonomy';

export function ProjectDetailContent({ children, project }: { children?: React.ReactNode; project: Project }) {
  const { locale, t } = useLanguage();
  const localizedProject = localizeProject(project, locale);
  const projectCategories = getProjectCategories(project.slug);
  const hasDemo = Boolean(localizedProject.featuredEmbed || localizedProject.videoPath || localizedProject.demoSlides?.length);

  return (
    <main className="min-h-screen bg-canvas pb-14">
      <div className="container-shell pt-8">
        <Link href="/projects" className="button-tertiary -ml-4">
          ← {t('common.backProjects')}
        </Link>
        <div className="mt-6 border-t border-line pt-6">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <span key={category} className="rounded-full border border-line/80 bg-white/55 px-3 py-1.5 text-[11px] leading-none text-muted">
                {category}
              </span>
            ))}
          </div>
          <h1 className="mt-3 max-w-4xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">{localizedProject.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">{localizedProject.longDescription}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-line/70 py-3 text-xs text-muted/75">
            <span className="font-medium text-ink/55">{t('common.keywords')}</span>
            {localizedProject.tags.map((tag) => (
              <span key={tag} className="after:ml-3 after:text-muted/35 after:content-['/'] last:after:content-['']">
                {tag}
              </span>
            ))}
          </div>
          {localizedProject.links?.length ? (
            <div className="mt-6 rounded-[24px] border border-white/60 bg-white/30 p-4 shadow-[0_14px_40px_rgba(28,24,20,0.035)] backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted/70">{t('common.resources')}</p>
              <InlinePdfLinks links={localizedProject.links} className="mt-3" />
            </div>
          ) : null}
          {hasDemo ? (
            <section className="mt-8">
              <h2 className="text-xl font-semibold tracking-tight text-ink">{t('common.demo')}</h2>
              <div className="mt-4 space-y-5">
                {localizedProject.featuredEmbed ? (
                  <div className="overflow-hidden rounded-[28px] border border-line/80 bg-white/70 p-3 shadow-soft sm:p-4">
                    <div className="aspect-[16/9] overflow-hidden rounded-[22px] bg-black">
                      <iframe
                        src={localizedProject.featuredEmbed.src}
                        title={localizedProject.featuredEmbed.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : null}
                {localizedProject.videoPath ? (
                  <div className="overflow-hidden rounded-[28px] border border-line/80 bg-white/70 p-3 shadow-soft sm:p-4">
                    <video controls playsInline preload="metadata" className="w-full rounded-[22px] bg-black">
                      <source src={localizedProject.videoPath} type="video/mp4" />
                      Your browser does not support inline video playback.
                    </video>
                  </div>
                ) : null}
                {localizedProject.demoSlides?.length ? (
                  <SlideCarousel title={`${localizedProject.title} ${t('common.demo')}`} slides={localizedProject.demoSlides} />
                ) : null}
              </div>
            </section>
          ) : null}
          {localizedProject.slides?.length ? (
            <section className="mt-8">
              <h2 className="text-xl font-semibold tracking-tight text-ink">{t('common.projectWalkthrough')}</h2>
              <div className="mt-4">
                <SlideCarousel title={localizedProject.title} slides={localizedProject.slides} />
              </div>
            </section>
          ) : children}
        </div>
      </div>
    </main>
  );
}
