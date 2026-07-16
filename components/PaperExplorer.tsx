"use client";

import { useRef, useState } from 'react';
import type { Paper } from '@/data/papers';
import { InlinePdfLinks } from '@/components/InlinePdfLinks';
import { useLanguage } from '@/components/LanguageProvider';
import { localizePaper } from '@/lib/i18n';

export function PaperExplorer({ items }: { items: Paper[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const contentRef = useRef<HTMLElement | null>(null);
  const { locale, t } = useLanguage();
  const localizedItems = items.map((item) => localizePaper(item, locale));
  const selected = localizedItems[selectedIndex];

  function selectPaper(index: number) {
    setSelectedIndex(index);
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
      <aside className="relative z-20 rounded-[28px] border border-white/60 bg-white/25 p-3 shadow-[0_18px_55px_rgba(28,24,20,0.05)] backdrop-blur lg:sticky lg:top-28 lg:self-start">
        <ul className="divide-y divide-line/70">
          {localizedItems.map((item, index) => {
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

      <section ref={contentRef} className="min-w-0 scroll-mt-28 rounded-[34px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(255,255,255,0.30))] p-5 shadow-[0_24px_80px_rgba(28,24,20,0.08)] backdrop-blur-xl sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">{selected.course}</p>
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
          <div className="mt-6 border-t border-line pt-6">
            <InlinePdfLinks key={selected.slug} links={[{ label: t('common.openPdf'), href: selected.pdfPath }]} />
          </div>
        ) : null}
      </section>
    </div>
  );
}
