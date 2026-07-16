import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-6">
      <div className="card-surface max-w-xl p-10 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="font-serif text-4xl tracking-tight text-ink">This page could not be found</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          The project or page you were looking for is not available right now.
        </p>
        <div className="mt-8">
          <Link href="/" className="button-primary">Return home</Link>
        </div>
      </div>
    </main>
  );
}
