"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CarouselItem = {
  src: string;
  alt: string;
  caption: string;
};

export default function ImageCarousel({
  items,
  label,
}: {
  items: CarouselItem[];
  label: string;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<CarouselItem | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (openFrameRef.current) cancelAnimationFrame(openFrameRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeItem) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeItem]);

  function openPreview(item: CarouselItem) {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (openFrameRef.current) cancelAnimationFrame(openFrameRef.current);

    setActiveItem(item);
    setIsPreviewVisible(false);

    openFrameRef.current = requestAnimationFrame(() => {
      setIsPreviewVisible(true);
    });
  }

  function closePreview() {
    if (!activeItem) return;

    setIsPreviewVisible(false);

    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveItem(null);
    }, 150);
  }

  function scrollByAmount(direction: -1 | 1) {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: scrollAmount * direction,
      behavior: "smooth",
    });
  }

  return (
    <div className="group relative mx-auto w-full max-w-[32rem] overflow-hidden rounded-2xl">
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {items.map((item) => (
          <figure
            key={item.src}
            className="w-full min-w-full shrink-0 snap-start"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_18px_48px_-32px_rgba(45,212,191,0.22)] backdrop-blur sm:p-4">
              <button
                type="button"
                onClick={() => openPreview(item)}
                className="block w-full text-left"
                aria-label={`Open preview for ${item.caption}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/75 transition hover:border-teal-400/30">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 92vw"
                    className="object-contain p-2.5 sm:p-3 md:p-4"
                  />
                </div>
              </button>
              <figcaption className="mt-3 text-sm leading-6 text-zinc-300">
                {item.caption}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        aria-label={`Scroll ${label} left`}
        className="pointer-events-none absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/85 text-zinc-100 opacity-0 shadow-lg backdrop-blur transition duration-200 hover:border-teal-400/40 hover:text-teal-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 md:inline-flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        aria-label={`Scroll ${label} right`}
        className="pointer-events-none absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/85 text-zinc-100 opacity-0 shadow-lg backdrop-blur transition duration-200 hover:border-teal-400/40 hover:text-teal-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 md:inline-flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {activeItem && typeof document !== "undefined"
        ? createPortal(
            <div
              className={`fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/88 p-4 backdrop-blur-sm transition-opacity duration-150 ease-out motion-reduce:transition-none ${
                isPreviewVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closePreview}
              role="dialog"
              aria-modal="true"
              aria-label={`${label} preview`}
            >
              <div
                className={`relative w-full max-w-5xl rounded-3xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl transition-all duration-150 ease-out motion-reduce:transition-none sm:p-5 ${
                  isPreviewVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-2 scale-[0.985] opacity-0"
                }`}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closePreview}
                  className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/90 text-zinc-100 transition hover:border-teal-400/40 hover:text-teal-200"
                  aria-label="Close preview"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    sizes="90vw"
                    className="object-contain p-4 md:p-6"
                    priority
                  />
                </div>
                <p className="mt-4 pr-12 text-sm leading-6 text-zinc-300">{activeItem.caption}</p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
