import type { MediaItem } from '@/data/media';

export function VideoCard({ item }: { item: MediaItem }) {
  return (
    <article className="card-surface overflow-hidden">
      <div className="border-b border-line p-7">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{item.description}</p>
      </div>
      <div className="p-4 sm:p-6">
        <video controls playsInline preload="metadata" className="w-full rounded-3xl bg-black">
          <source src={item.videoPath} type="video/mp4" />
          Your browser does not support inline video playback.
        </video>
      </div>
    </article>
  );
}
