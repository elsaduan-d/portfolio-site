"use client";

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();
  const [flippedLens, setFlippedLens] = useState<string | null>(null);
  const lenses = [
    ['01', t('about.productLens'), t('about.productLensBody')],
    ['02', t('about.researchLens'), t('about.researchLensBody')],
    ['03', t('about.designLens'), t('about.designLensBody')]
  ];

  return (
    <main className="container-shell section-padding">
      <section className="rounded-[34px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(255,255,255,0.30))] p-6 shadow-[0_24px_80px_rgba(28,24,20,0.08)] backdrop-blur-xl sm:p-8">
        <p className="eyebrow">{t('page.about.eyebrow')}</p>
        <p className="mt-5 max-w-4xl text-[15px] leading-8 text-muted sm:text-base">
          {t('about.bio')}
        </p>
        <div className="mt-8 grid gap-5 border-t border-line/80 pt-6 text-sm leading-6 text-muted md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">{t('about.education')}</p>
            <p className="mt-3 font-medium text-ink">{t('about.harvard')}</p>
            <p>{t('about.harvardDegree')}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted/70">{t('about.harvardPeriod')}</p>
          </div>
          <div className="md:pt-8">
            <p className="font-medium text-ink">{t('about.uw')}</p>
            <p>{t('about.uwDegree')}</p>
            <p>{t('about.uwMinors')}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted/70">{t('about.uwPeriod')}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {lenses.map(([index, title, body]) => (
            <button
              key={title}
              type="button"
              onClick={() => setFlippedLens(flippedLens === title ? null : title)}
              className="group h-48 text-left outline-none [perspective:1200px]"
              aria-pressed={flippedLens === title}
            >
              <span
                className="relative block h-full rounded-[24px] transition duration-500 [transform-style:preserve-3d] group-focus-visible:ring-2 group-focus-visible:ring-ink/20"
                style={{ transform: flippedLens === title ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                <span className="absolute inset-0 flex flex-col justify-between rounded-[24px] border border-white/65 bg-white/38 p-5 shadow-[0_18px_55px_rgba(28,24,20,0.06)] backdrop-blur [backface-visibility:hidden]">
                  <span className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tabular-nums text-muted/45">{index}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted/45">Flip</span>
                  </span>
                  <span>
                    <span className="block font-serif text-2xl tracking-tight text-ink">{title}</span>
                    <span className="mt-4 block h-px w-12 bg-ink/30 transition group-hover:w-20" />
                  </span>
                </span>
                <span className="absolute inset-0 flex rounded-[24px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(245,239,229,0.48))] p-5 shadow-[0_18px_55px_rgba(28,24,20,0.07)] backdrop-blur [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="mt-auto text-sm leading-7 text-muted">{body}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
