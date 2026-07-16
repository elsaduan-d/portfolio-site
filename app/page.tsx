"use client";

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const heroPillars = ['home.focus.product', 'home.focus.learning', 'home.focus.ai', 'home.focus.edtech'];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#171411] bg-[url('/images/home-hero-img-8310.jpg')] bg-cover bg-[position:left_center] bg-no-repeat sm:bg-[position:left_center]">
        <div className="absolute inset-0 bg-black/[0.12]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.42)_76%,rgba(0,0,0,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.30)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(247,244,238,0)_0%,rgba(247,244,238,0.12)_48%,rgba(247,244,238,0.78)_86%,rgba(247,244,238,1)_100%)]" />

        <div className="container-shell relative flex min-h-[88svh] items-end justify-end py-14 pt-28 sm:py-16">
          <div className="w-full max-w-lg pb-4 text-white sm:pb-8 lg:w-[46%] lg:pb-12">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/72 sm:text-[11px]">
              {t('home.eyebrow')}
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
              {t('home.name')} <span className="text-white/76">{t('home.alias')}</span>
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/88 sm:text-base">
              {t('home.intro')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-white/92">
                {t('home.viewProjects')}
              </Link>
              <a href="/Yuzhi-Duan-Resume.docx" className="inline-flex items-center justify-center rounded-full border border-white/42 bg-black/16 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-black/24">
                {t('nav.resume')}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/32 bg-black/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-black/20">
                {t('home.contactMe')}
              </Link>
            </div>
            <div className="mt-8 border-t border-white/16 pt-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/48">
                {t('home.focus')}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                {heroPillars.map((item) => (
                  <span
                  key={item}
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/62"
                >
                  {t(item)}
                </span>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">{t('home.overviewEyebrow')}</p>
            <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              {t('home.overviewTitle')}
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
              {t('home.overviewBody')}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="button-primary">
                {t('home.aboutMe')}
              </Link>
              <Link href="/experience" className="button-secondary">
                {t('home.viewExperience')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
