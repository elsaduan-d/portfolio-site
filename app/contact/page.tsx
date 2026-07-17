"use client";

import { useLanguage } from '@/components/LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="container-shell section-padding">
      <header className="border-b border-line pb-7">
        <p className="eyebrow">{t('contact.eyebrow')}</p>
        <h1 className="max-w-4xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          {t('contact.title')}
        </h1>
      </header>

      <section className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
          <p>
            <span className="font-medium text-ink">{t('contact.email')}</span>{' '}
            <span className="inline-flex flex-wrap gap-x-3">
              <a href="mailto:yduan@gse.harvard.edu" className="transition hover:text-ink">
                yduan@gse.harvard.edu
              </a>
              <a href="mailto:duanyuzhielsa@outlook.com" className="transition hover:text-ink">
                duanyuzhielsa@outlook.com
              </a>
            </span>
          </p>
          <p>
            <span className="font-medium text-ink">{t('contact.linkedin')}</span>{' '}
            <a href="https://www.linkedin.com/in/yuzhi-d-9a8a35282" target="_blank" rel="noreferrer" className="transition hover:text-ink">
              linkedin.com/in/yuzhi-d-9a8a35282
            </a>
          </p>
          <p>
            <span className="font-medium text-ink">{t('contact.phone')}</span>{' '}
            <a href="tel:+15715198076" className="transition hover:text-ink">
              +1 571 519 8076
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="/Yuzhi-Duan-Resume.docx" className="button-primary">
            {t('nav.resume')}
          </a>
          <a href="mailto:yduan@gse.harvard.edu" className="button-secondary">
            {t('contact.emailMe')}
          </a>
        </div>
      </section>
    </main>
  );
}
