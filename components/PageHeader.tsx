"use client";

import { useLanguage } from '@/components/LanguageProvider';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro: string;
  i18nKey?: 'about' | 'experience' | 'projects' | 'papers';
};

export function PageHeader({ eyebrow, title, intro, i18nKey }: PageHeaderProps) {
  const { t } = useLanguage();
  const content = i18nKey
    ? {
        eyebrow: t(`page.${i18nKey}.eyebrow`),
        title: t(`page.${i18nKey}.title`),
        intro: t(`page.${i18nKey}.intro`)
      }
    : { eyebrow, title, intro };

  return (
    <header className="border-b border-line pb-7">
      <p className="eyebrow">{content.eyebrow}</p>
      <h1 className="max-w-4xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">{content.title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">{content.intro}</p>
    </header>
  );
}
