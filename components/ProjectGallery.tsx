import { SlideCarousel } from '@/components/SlideCarousel';
import { getSlideItems } from '@/lib/slide-assets';

export async function ProjectGallery({ slug, title }: { slug: string; title: string }) {
  const slides = await getSlideItems(slug, title);

  if (slides.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold tracking-tight text-ink">Project Walkthrough</h2>
      <div className="mt-4">
        <SlideCarousel title={title} slides={slides} />
      </div>
    </section>
  );
}
