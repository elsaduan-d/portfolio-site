"use client";

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import type { SlideItem } from '@/lib/slide-assets';
import { InlinePdfLinks } from '@/components/InlinePdfLinks';
import { useLanguage } from '@/components/LanguageProvider';
import { SlideCarousel } from '@/components/SlideCarousel';
import { localizeProject } from '@/lib/i18n';

export type ProjectWithAssets = Project & {
  slides: SlideItem[];
};

export function ProjectExplorer({ items }: { items: ProjectWithAssets[] }) {
  const [selectedSlug, setSelectedSlug] = useState(items[0]?.slug ?? '');
  const contentRef = useRef<HTMLElement | null>(null);
  const { locale, t } = useLanguage();
  const localizedItems = useMemo(
    () => items.map((item) => localizeProject(item, locale) as ProjectWithAssets),
    [items, locale]
  );

  const selected = useMemo(
    () => localizedItems.find((item) => item.slug === selectedSlug) ?? localizedItems[0],
    [localizedItems, selectedSlug]
  );

  if (!selected) return null;

  const hasDemo = Boolean(selected.featuredEmbed || selected.videoPath || selected.demoSlides?.length);

  function selectProject(slug: string) {
    setSelectedSlug(slug);
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-12">
      <aside className="relative z-20 rounded-[28px] border border-white/60 bg-white/25 p-3 shadow-[0_18px_55px_rgba(28,24,20,0.05)] backdrop-blur lg:sticky lg:top-28 lg:self-start">
        <ul className="divide-y divide-line/70">
          {localizedItems.map((item) => {
            const isActive = item.slug === selected.slug;

            return (
              <li key={item.slug}>
                <button
                  id={item.slug}
                  type="button"
                  onClick={() => selectProject(item.slug)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative w-full scroll-mt-28 rounded-2xl px-3 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 ${
                    isActive
                      ? 'bg-white/70 shadow-[0_12px_32px_rgba(28,24,20,0.07)]'
                      : 'hover:bg-white/45'
                  }`}
                >
                  <span className={`absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px rounded-full transition ${isActive ? 'bg-ink/70' : 'bg-transparent'}`} />
                  <span className="block min-w-0 pl-2">
                    <span className={`block text-[13px] font-medium leading-5 transition ${isActive ? 'text-ink' : 'text-muted group-hover:text-ink'}`}>
                      {item.title}
                    </span>
                    <span className={`mt-1 block text-[11px] leading-5 transition ${isActive ? 'text-ink/62' : 'text-muted/60 group-hover:text-muted/80'}`}>
                      {item.category}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <section ref={contentRef} className="min-w-0 scroll-mt-28 rounded-[34px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(255,255,255,0.30))] p-5 shadow-[0_24px_80px_rgba(28,24,20,0.08)] backdrop-blur-xl sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">{selected.category}</p>
        <h2 className="mt-2 max-w-4xl font-serif text-2xl tracking-tight text-ink sm:text-3xl">{selected.title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">{selected.longDescription}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-line/70 py-3 text-xs text-muted/75">
          <span className="font-medium text-ink/55">{t('common.keywords')}</span>
          {selected.tags.map((tag) => (
            <span key={tag} className="after:ml-3 after:text-muted/35 after:content-['/'] last:after:content-['']">
              {tag}
            </span>
          ))}
        </div>

        {selected.links?.length ? (
          <div className="mt-6 rounded-[24px] border border-white/60 bg-white/30 p-4 shadow-[0_14px_40px_rgba(28,24,20,0.035)] backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted/70">{t('common.resources')}</p>
            <InlinePdfLinks links={selected.links} className="mt-3" />
          </div>
        ) : null}

        {selected.slug === 'eye-tracking-analysis' ? (
          <div className="mt-6">
            <Link href={`/projects/${selected.slug}`} className="button-primary">
              {t('common.viewFullCaseStudy')}
            </Link>
          </div>
        ) : null}

        {hasDemo ? (
          <section className="mt-8">
            <h3 className="text-xl font-semibold tracking-tight text-ink">{t('common.demo')}</h3>
            <div className="mt-5 space-y-5">
              {selected.featuredEmbed ? (
                <div className="overflow-hidden rounded-[28px] border border-line/80 bg-white/70 p-3 shadow-soft sm:p-4">
                  <div className="aspect-[16/9] overflow-hidden rounded-[22px] bg-black">
                    <iframe
                      src={selected.featuredEmbed.src}
                      title={selected.featuredEmbed.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : null}
              {selected.videoPath ? (
                <div className="overflow-hidden rounded-[28px] border border-line/80 bg-white/70 p-3 shadow-soft sm:p-4">
                  <video controls playsInline preload="metadata" className="w-full rounded-[22px] bg-black">
                    <source src={selected.videoPath} type="video/mp4" />
                    Your browser does not support inline video playback.
                  </video>
                </div>
              ) : null}
              {selected.demoSlides?.length ? (
                <SlideCarousel title={`${selected.title} demo`} slides={selected.demoSlides} />
              ) : null}
            </div>
          </section>
        ) : null}

        {selected.slides.length ? (
          <section className="mt-8">
            <h3 className="text-xl font-semibold tracking-tight text-ink">{t('common.projectWalkthrough')}</h3>
            <div className="mt-5">
              <SlideCarousel title={selected.title} slides={selected.slides} />
            </div>
          </section>
        ) : null}
      </section>
    </div>
  );
}
