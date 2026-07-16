import type { Experience } from '@/data/experiences';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="card-surface p-7">
      <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-ink">{experience.role}</h3>
          <p className="mt-1 text-sm text-muted">{experience.organization}</p>
        </div>
        <p className="text-sm text-muted">{experience.period}</p>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">{experience.description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
