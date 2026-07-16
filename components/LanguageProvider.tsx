"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { type Locale, translate } from '@/lib/i18n';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const storedLocale = window.localStorage.getItem('portfolio-locale');
    if (storedLocale === 'en' || storedLocale === 'zh') {
      setLocaleState(storedLocale);
    }
  }, []);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    window.localStorage.setItem('portfolio-locale', nextLocale);
  }

  function toggleLocale() {
    setLocale(locale === 'en' ? 'zh' : 'en');
  }

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: (key: string) => translate(locale, key)
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
