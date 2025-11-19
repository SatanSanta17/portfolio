"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function HobbiesCarousel({ items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useMemo(() => items.filter(Boolean), [items]);

  const totalSlides = slides.length;

  const goToSlide = (index) => {
    if (totalSlides === 0) return;
    const normalisedIndex = (index + totalSlides) % totalSlides;
    setCurrentIndex(normalisedIndex);
  };

  const handlePrev = () => goToSlide(currentIndex - 1);
  const handleNext = () => goToSlide(currentIndex + 1);

  if (totalSlides === 0) {
    return null;
  }

  return (
    <section
      id="hobbies"
      className="flex flex-col gap-10 rounded-3xl bg-white/70 px-6 py-10 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:px-12"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-slate-900">Hobbies</h2>
        <p className="text-base leading-relaxed text-slate-600">
          In my free time, I love staying active and entertained. Playing
          football and volleyball keeps me physically fit and mentally
          refreshed, while stand-up comedy on YouTube brings plenty of laughs
          and relaxation. I firmly believe that a happy, healthy individual is
          far more productive than someone feeling down or unmotivated. My
          passion for sports not only keeps me in shape but also fuels my energy
          and focus for everything I do.
        </p>
      </div>

      <div className="flex-1">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <figure
                  key={`${slide.src}-${slide.alt}`}
                  className={`absolute inset-0 flex h-full w-full flex-col transition-all duration-500 ease-out ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "pointer-events-none -translate-x-6 opacity-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                  />
                  {(slide.captionTitle || slide.captionText) && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-6 text-left text-white">
                      {slide.captionTitle ? (
                        <h3 className="text-xl font-semibold">
                          {slide.captionTitle}
                        </h3>
                      ) : null}
                      {slide.captionText ? (
                        <p className="mt-2 text-sm text-slate-200">
                          {slide.captionText}
                        </p>
                      ) : null}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handlePrev}
            className="group absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            aria-label="Previous slide"
          >
            <span aria-hidden className="text-2xl font-semibold leading-none">
              ‹
            </span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="group absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            aria-label="Next slide"
          >
            <span aria-hidden className="text-2xl font-semibold leading-none">
              ›
            </span>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={`indicator-${index}`}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 w-8 rounded-full transition-all duration-300 ease-out ${
                  isActive ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
