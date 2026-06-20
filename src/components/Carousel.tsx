"use client";

import { useRef } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    className="size-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
);

export default function Carousel({ items }: { items: GalleryItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  if (items.length === 0) return null;

  // Scroll roughly one screenful of tiles per click.
  const scrollPage = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Filmstrip: 2 tiles on mobile, 3 on tablet, 5 on desktop */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <figure
            key={item.src}
            className="group relative aspect-square w-[calc((100%_-_1rem)/2)] shrink-0 snap-start overflow-hidden rounded-lg ring-1 ring-black/10 sm:w-[calc((100%_-_2rem)/3)] md:w-[calc((100%_-_4rem)/5)] dark:ring-white/15"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 20vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-[1.04]"
            />
            {item.alt && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-xs text-white">
                {item.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Prev / Next */}
      {items.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => scrollPage(-1)}
            aria-label="Scroll left"
            className="absolute -left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md ring-1 ring-black/10 transition hover:bg-white sm:block dark:bg-neutral-800 dark:text-white dark:ring-white/15"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollPage(1)}
            aria-label="Scroll right"
            className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md ring-1 ring-black/10 transition hover:bg-white sm:block dark:bg-neutral-800 dark:text-white dark:ring-white/15"
          >
            <Chevron dir="right" />
          </button>
        </>
      )}
    </div>
  );
}
