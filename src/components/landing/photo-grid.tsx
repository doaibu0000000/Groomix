"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryPhotos } from "@/lib/gallery-data";

/**
 * Seluruh foto barbershop Groomix (dari profil Google Maps) dalam tata
 * letak masonry. Mobile: 2 kolom; tablet: 3; desktop: 4.
 * Ketuk foto → lightbox dengan navigasi panah, keyboard, dan swipe.
 */
export function PhotoGrid() {
  const [active, setActive] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setActive((cur) =>
      cur === null
        ? cur
        : (cur + dir + galleryPhotos.length) % galleryPhotos.length
    );
  }, []);

  // Navigasi keyboard saat lightbox terbuka (Escape ditangani Radix).
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  const current = active !== null ? galleryPhotos[active] : null;

  return (
    <>
      {/* Masonry: CSS columns */}
      <ul className="mt-5 columns-2 gap-3 sm:columns-3 lg:columns-4">
        {galleryPhotos.map((photo, i) => (
          <li key={photo.src} className="mb-3 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Perbesar foto: ${photo.caption}`}
              className="group relative block w-full overflow-hidden rounded-xl border border-ink-line bg-ink-soft shadow-md shadow-black/20 transition hover:border-brass/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                placeholder="blur"
                blurDataURL={photo.blur}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 hidden items-center justify-between gap-2 p-3 opacity-0 transition group-hover:opacity-100 sm:flex">
                <span className="text-left text-xs font-medium text-cream">
                  {photo.caption}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream">
                  <Maximize2 className="h-3 w-3" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="max-w-[96vw] border-ink-line bg-ink p-3 text-cream sm:max-w-3xl">
          {current && (
            <>
              <DialogTitle className="sr-only">{current.caption}</DialogTitle>
              <DialogDescription className="sr-only">
                {current.alt}
              </DialogDescription>

              <div
                className="relative flex h-[72svh] items-center justify-center"
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current === null) return;
                  const dx = e.changedTouches[0].clientX - touchStartX.current;
                  touchStartX.current = null;
                  if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1);
                }}
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 640px) 768px, 96vw"
                  className="object-contain"
                  priority
                />

                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Foto sebelumnya"
                  className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-cream ring-1 ring-cream/20 transition hover:bg-brass hover:text-ink sm:-left-12 sm:h-11 sm:w-11"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Foto berikutnya"
                  className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-cream ring-1 ring-cream/20 transition hover:bg-brass hover:text-ink sm:-right-12 sm:h-11 sm:w-11"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <p className="px-1 pt-3 pb-1 text-center text-sm text-cream/70">
                {current.caption} ·{" "}
                <span className="tabular-nums">
                  {(active ?? 0) + 1} / {galleryPhotos.length}
                </span>
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
