"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export type InlineResourceLink = {
  label: string;
  href: string;
};

function isPdfLink(href: string) {
  return href.split('?')[0].toLowerCase().endsWith('.pdf');
}

export function InlinePdfLinks({ links, className = '' }: { links: InlineResourceLink[]; className?: string }) {
  const [activePdf, setActivePdf] = useState<InlineResourceLink | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setActivePdf(null);
    setCollapsed(false);
  }, [links]);

  function openPdf(link: InlineResourceLink) {
    setActivePdf(link);
    setCollapsed(false);
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-3">
        {links.map((link) =>
          isPdfLink(link.href) ? (
            <button key={link.href} type="button" onClick={() => openPdf(link)} className="button-secondary">
              {link.label}
            </button>
          ) : (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="button-secondary">
              {link.label}
            </a>
          )
        )}
      </div>

      {activePdf ? (
        <section className="mt-5 overflow-hidden rounded-[24px] border border-line/80 bg-white/75 shadow-soft">
          <div className="flex flex-col gap-3 border-b border-line/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">{t('common.pdfPreview')}</p>
              <h3 className="mt-1 text-base font-medium tracking-tight text-ink">{activePdf.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="PDF preview controls">
              <button
                type="button"
                onClick={() => setCollapsed((value) => !value)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-lg leading-none text-ink transition hover:border-ink"
                aria-label={collapsed ? 'Show PDF preview' : 'Collapse PDF preview'}
                title={collapsed ? 'Show PDF preview' : 'Collapse PDF preview'}
              >
                <span aria-hidden="true">{collapsed ? '⌄' : '⌃'}</span>
              </button>
              <a
                href={activePdf.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-base leading-none text-ink transition hover:border-ink"
                aria-label="Open PDF in new tab"
                title="Open PDF in new tab"
              >
                <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                onClick={() => setActivePdf(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-base leading-none text-ink transition hover:border-ink"
                aria-label="Close PDF preview"
                title="Close PDF preview"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          {!collapsed ? (
            <div className="h-[420px] bg-[#f2eee7] p-2 sm:h-[520px] sm:p-3">
              <iframe
                src={encodeURI(activePdf.href)}
                title={`${activePdf.label} PDF preview`}
                className="h-full w-full rounded-[18px] border border-line/70 bg-white"
              />
            </div>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
