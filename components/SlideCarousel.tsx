"use client";

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import type { SlideItem } from '@/lib/slide-assets';

type SlideCarouselProps = {
  title: string;
  slides: SlideItem[];
};

export function SlideCarousel({ title, slides }: SlideCarouselProps) {
  const [index, setIndex] = useState(0);
  const carouselId = useId();

  useEffect(() => {
    setIndex(0);
  }, [title, slides]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (slides.length <= 1) return;
      if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % slides.length);
      }
      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + slides.length) % slides.length);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const currentSlide = slides[index];

  return (
    <div className="overflow-hidden rounded-[28px] border border-line/80 bg-white/70 shadow-soft">
      <div className="flex items-center justify-between gap-4 border-b border-line/80 px-4 py-3 sm:px-5">
        <p className="text-sm text-muted">Use arrow keys or the controls to move through the deck.</p>
        <p className="text-sm font-medium text-ink">
          {index + 1} / {slides.length}
        </p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-[22px] bg-[#ece7df]">
          {currentSlide.type === 'youtube' ? (
            <div className="aspect-[16/9] w-full bg-black">
              <iframe
                src={currentSlide.src}
                title={currentSlide.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : currentSlide.src.endsWith('.gif') ? (
            <img
              key={currentSlide.src}
              src={currentSlide.src}
              alt={currentSlide.alt ?? `${title} slide ${index + 1}`}
              className="h-auto w-full"
            />
          ) : (
            <Image
              key={currentSlide.src}
              src={currentSlide.src}
              alt={currentSlide.alt ?? `${title} slide ${index + 1}`}
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          )}
        </div>
        {currentSlide.type !== 'youtube' && currentSlide.composition === 'guess-the-library-slide-1' ? null : currentSlide.caption ? (
          <div className="mt-4 rounded-[22px] border border-line/70 bg-white/85 px-5 py-4">
            {currentSlide.caption.title ? (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{currentSlide.caption.title}</p>
            ) : null}
            {currentSlide.caption.body ? (
              <p className="mt-2 text-sm leading-7 text-muted sm:text-[15px]">{currentSlide.caption.body}</p>
            ) : null}
            {currentSlide.caption.bullets?.length ? (
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted sm:text-[15px]">
                {currentSlide.caption.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-ink/60" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
        {slides.length > 1 ? (
          <div className="mt-4 flex items-center justify-between gap-4" aria-controls={carouselId}>
            <button
              type="button"
              onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
              className="button-secondary px-4 py-2"
            >
              Previous
            </button>
            <div id={carouselId} className="flex items-center gap-2">
              {slides.map((slide, slideIndex) => (
                <button
                  key={`${slide.type}-${slideIndex}`}
                  type="button"
                  onClick={() => setIndex(slideIndex)}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                  className={`h-2 rounded-full transition-all ${slideIndex === index ? 'w-8 bg-ink' : 'w-2 bg-ink/20 hover:bg-ink/40'}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((current) => (current + 1) % slides.length)}
              className="button-secondary px-4 py-2"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
