"use client";

import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="container-shell section-padding">
      <section className="rounded-[34px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(255,255,255,0.30))] p-6 shadow-[0_24px_80px_rgba(28,24,20,0.08)] backdrop-blur-xl sm:p-8">
        <p className="eyebrow">{t('page.about.eyebrow')}</p>
        <h1 className="max-w-4xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          {t('page.about.title')}
        </h1>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-muted sm:text-base">
          {t('about.bio')}
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            ['01', t('about.productLens'), t('about.productLensBody')],
            ['02', t('about.researchLens'), t('about.researchLensBody')],
            ['03', t('about.designLens'), t('about.designLensBody')]
          ].map(([index, title, body]) => (
            <div key={title} className="rounded-[24px] border border-white/60 bg-white/32 p-4">
              <span className="text-[10px] font-medium tabular-nums text-muted/45">{index}</span>
              <p className="mt-3 text-sm font-semibold tracking-tight text-ink">{title}</p>
              <p className="mt-2 text-sm leading-6 text-muted/78">{body}</p>
            </div>
          ))}
        </div>
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
      </section>
    </main>
  );
}
