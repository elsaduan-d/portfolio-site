"use client";

import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="container-shell section-padding">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-16">
        <div>
          <header className="border-b border-line pb-10">
            <p className="eyebrow">{t('contact.eyebrow')}</p>
            <h1 className="max-w-3xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              {t('contact.title')}
            </h1>
          </header>

          <div className="mt-12 space-y-4 text-sm leading-7 text-muted sm:text-base">
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

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/yuzhi-duan-aigc-product-manager-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              {t('nav.resume')}
            </a>
            <a href="mailto:yduan@gse.harvard.edu" className="button-secondary">
              {t('contact.emailMe')}
            </a>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[34px] border border-white/65 bg-white/35 p-3 shadow-[0_24px_80px_rgba(28,24,20,0.08)] backdrop-blur-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[#ece6dc]">
            <Image
              src="/images/photo-wall-harvard-graduation.jpg"
              alt="Portrait of Yuzhi Duan"
              fill
              className="object-cover object-[50%_38%]"
              sizes="(min-width: 1024px) 360px, 100vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(247,244,238,0)_0%,rgba(247,244,238,0.72)_100%)]" />
          </div>
        </aside>
      </section>
    </main>
  );
}
