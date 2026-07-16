"use client";

import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="container-shell section-padding">
      <PageHeader
        i18nKey="about"
        eyebrow="About"
        title="A product and learning design practice shaped by evidence, usability, and educational intent."
        intro="I work at the intersection of product management, learning design, AI education, and evidence-based EdTech. My experience includes AI-assisted prototyping, product testing, data analysis, and research-informed design for user-facing learning products."
      />

      <section className="grid gap-10 pt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
        <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
          <p>
            {t('about.p1')}
          </p>
          <p>
            {t('about.p2')}
          </p>
          <p>
            {t('about.p3')}
          </p>
        </div>

        <div className="grid gap-6 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">{t('about.education')}</p>
            <div className="mt-3 space-y-4 text-sm leading-6 text-muted">
              <div>
                <p className="font-medium text-ink">{t('about.harvard')}</p>
                <p>{t('about.harvardDegree')}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted/70">{t('about.harvardPeriod')}</p>
              </div>
              <div>
                <p className="font-medium text-ink">{t('about.uw')}</p>
                <p>{t('about.uwDegree')}</p>
                <p>{t('about.uwMinors')}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted/70">{t('about.uwPeriod')}</p>
              </div>
            </div>
          </div>
          {[
            ['01', t('about.productLens'), t('about.productLensBody')],
            ['02', t('about.researchLens'), t('about.researchLensBody')],
            ['03', t('about.designLens'), t('about.designLensBody')]
          ].map(([index, title, body]) => (
            <div key={title} className="border-t border-line/80 pt-5">
              <div className="flex gap-4">
                <span className="pt-1 text-[10px] font-medium tabular-nums text-muted/45">{index}</span>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted/78">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
