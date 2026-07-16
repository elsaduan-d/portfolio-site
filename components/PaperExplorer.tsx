"use client";

import { useRef, useState } from 'react';
import type { Paper } from '@/data/papers';
import { useLanguage } from '@/components/LanguageProvider';
import { localizePaper } from '@/lib/i18n';

export function PaperExplorer({ items }: { items: Paper[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const contentRef = useRef<HTMLElement | null>(null);
  const { locale, t } = useLanguage();
  const localizedItems = items.map((item) => ({
    ...localizePaper(item, locale),
    category: getPaperCategory(item.slug)
  }));
  const filters = ['all', ...Array.from(new Set(localizedItems.map((item) => item.category)))];
  const visibleItems = filter === 'all' ? localizedItems : localizedItems.filter((item) => item.category === filter);
  const selected = visibleItems[selectedIndex] ?? visibleItems[0];

  function selectPaper(index: number) {
    setSelectedIndex(index);
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function selectFilter(nextFilter: string) {
    setFilter(nextFilter);
    setSelectedIndex(0);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => {
          const isActive = item === filter;
          return (
            <button
              key={item}
              type="button"
              onClick={() => selectFilter(item)}
              className={`rounded-full border px-3.5 py-2 text-xs transition ${
                isActive ? 'border-ink bg-ink text-white' : 'border-line bg-white/55 text-muted hover:border-ink/40 hover:text-ink'
              }`}
            >
              {item === 'all' ? t('common.all') : getPaperCategoryLabel(item, locale)}
            </button>
          );
        })}
      </div>
      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
      <aside className="relative z-20 rounded-[28px] border border-white/60 bg-white/25 p-3 shadow-[0_18px_55px_rgba(28,24,20,0.05)] backdrop-blur lg:sticky lg:top-28 lg:self-start">
        <ul className="divide-y divide-line/70">
          {visibleItems.map((item, index) => {
            const isActive = index === selectedIndex;

            return (
              <li key={item.slug}>
                <button
                  type="button"
                  onClick={() => selectPaper(index)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative w-full rounded-2xl px-3 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 ${
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
                      {item.course}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {selected ? (
        <section ref={contentRef} className="min-w-0 scroll-mt-28 rounded-[34px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(255,255,255,0.30))] p-5 shadow-[0_24px_80px_rgba(28,24,20,0.08)] backdrop-blur-xl sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">{getPaperCategoryLabel(selected.category, locale)} · {selected.course}</p>
        <h2 className="mt-2 max-w-4xl font-serif text-2xl tracking-tight text-ink sm:text-3xl">{selected.title}</h2>
        {selected.period || selected.location ? (
          <p className="mt-4 text-sm text-muted">
            {[selected.period, selected.location].filter(Boolean).join(' · ')}
          </p>
        ) : null}
        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base">{selected.description}</p>
        {selected.bullets?.length ? (
          <ul className="mt-6 space-y-3 border-t border-line pt-6">
            {selected.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-3 h-px w-6 shrink-0 bg-line" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {selected.pdfPath ? (
          <div className="mt-6 overflow-hidden rounded-[24px] border border-line/80 bg-white/70 shadow-soft">
            <div className="flex items-center justify-between border-b border-line/80 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">{t('common.pdfPreview')}</p>
              <a href={selected.pdfPath} target="_blank" rel="noreferrer" className="text-sm text-muted transition hover:text-ink">
                ↗
              </a>
            </div>
            <div className="h-[520px] bg-[#f2eee7] p-2 sm:h-[640px] sm:p-3">
              <iframe
                src={encodeURI(selected.pdfPath)}
                title={`${selected.title} PDF preview`}
                className="h-full w-full rounded-[18px] border border-line/70 bg-white"
              />
            </div>
          </div>
        ) : null}
        </section>
      ) : null}
      </div>
    </div>
  );
}

function getPaperCategory(slug: string) {
  if (slug.includes('gauth') || slug.includes('khanmigo') || slug.includes('memo')) return 'ai-products';
  if (slug.includes('screen-media') || slug.includes('early-reading')) return 'quantitative-research';
  if (slug.includes('oecd')) return 'comparative-education';
  return 'media-analysis';
}

function getPaperCategoryLabel(category: string, locale: 'en' | 'zh') {
  const labels = {
    en: {
      'ai-products': 'AI Products',
      'quantitative-research': 'Quantitative Research',
      'comparative-education': 'Comparative Education',
      'media-analysis': 'Media Analysis'
    },
    zh: {
      'ai-products': 'AI 产品',
      'quantitative-research': '定量研究',
      'comparative-education': '比较教育',
      'media-analysis': '媒体分析'
    }
  };

  return labels[locale][category as keyof typeof labels.en] ?? category;
}
