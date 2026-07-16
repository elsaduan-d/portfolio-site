import { ReactNode } from 'react';
import clsx from 'clsx';

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx('section-padding scroll-mt-24', className)}>
      <div className="container-shell">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
