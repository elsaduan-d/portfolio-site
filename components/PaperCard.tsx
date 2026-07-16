import type { Paper } from '@/data/papers';

export function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article className="card-surface flex h-full flex-col p-7">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{paper.course}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{paper.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{paper.description}</p>
      <div className="mt-6">
        <a
          href={paper.pdfPath}
          target="_blank"
          rel="noreferrer"
          className="button-secondary"
          aria-label={`Open PDF for ${paper.title}`}
        >
          Open PDF
        </a>
      </div>
    </article>
  );
}
