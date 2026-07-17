"use client";

import { useLanguage } from '@/components/LanguageProvider';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="relative isolate min-h-[96svh] overflow-hidden bg-[#171411] bg-[url('/images/home-hero-img-8310.jpg')] bg-cover bg-[position:left_54%] bg-no-repeat sm:bg-[position:left_56%]">
        <div className="absolute inset-0 bg-black/[0.12]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.42)_76%,rgba(0,0,0,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.30)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(247,244,238,0)_0%,rgba(247,244,238,0.10)_50%,rgba(247,244,238,0.76)_87%,rgba(247,244,238,1)_100%)]" />

        <div className="container-shell relative flex min-h-[96svh] items-end justify-end py-14 pt-28 sm:py-16">
          <div className="w-full max-w-xl pb-4 text-white sm:pb-8 lg:w-[50%] lg:pb-12">
            <blockquote className="font-serif text-2xl leading-[1.18] tracking-tight text-white sm:text-4xl">
              “{t('home.quote')}”
            </blockquote>
            <p className="mt-6 text-right text-sm font-medium tracking-[0.12em] text-white/74">
              - Elsa Duan
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
