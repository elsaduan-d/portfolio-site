"use client";

import { useLanguage } from '@/components/LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line py-10">
      <div className="container-shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Yuzhi Duan / Elsa Duan</p>
        <p>{t('footer.focus')}</p>
      </div>
    </footer>
  );
}
