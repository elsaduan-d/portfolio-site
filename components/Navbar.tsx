"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/LanguageProvider';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Experience', '/experience'],
  ['Projects', '/projects'],
  ['Papers', '/papers'],
  ['Contact', '/contact']
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { locale, t, toggleLocale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-[#f7f4ee]/86 backdrop-blur-xl">
      <div className="container-shell py-2.5">
        <div className="flex items-center gap-4 overflow-x-auto">
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
            YD
          </Link>
          <nav aria-label="Primary" className="min-w-max flex-1">
            <div className="flex items-center gap-4 md:gap-5">
            {navItems.map(([label, href]) => {
              const isActive = pathname === href;
              const key = `nav.${label.toLowerCase()}`;

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative text-[13px] transition duration-200 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {t(key)}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-ink transition-all duration-200 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </Link>
              );
            })}
            </div>
          </nav>
          <a href="/Yuzhi-Duan-Resume.docx" className="button-secondary hidden shrink-0 px-3.5 py-2 text-xs md:inline-flex">
            {t('nav.resume')}
          </a>
          <button
            type="button"
            onClick={toggleLocale}
            className="group relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white/70 text-ink shadow-[0_8px_24px_rgba(28,24,20,0.06)] transition hover:-translate-y-0.5 hover:border-ink/40"
            aria-label={t('nav.toggleLabel')}
            title={t('nav.toggleLabel')}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px] transition group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="8.2" />
              <path d="M3.8 12h16.4" />
              <path d="M12 3.8c2.1 2.2 3.1 4.9 3.1 8.2s-1 6-3.1 8.2" />
              <path d="M12 3.8C9.9 6 8.9 8.7 8.9 12s1 6 3.1 8.2" />
            </svg>
            <span className="absolute -right-1 -top-1 rounded-full bg-ink px-1.5 py-0.5 text-[8px] font-semibold leading-none text-white">
              {locale === 'en' ? '中' : 'EN'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
