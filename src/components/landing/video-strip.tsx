"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryVideos } from "@/lib/gallery-data";

/**
 * Deretan video asli dari profil Google Maps Groomix.
 * Mobile: scroll-snap horizontal. Desktop: grid 3 kolom.
 * Kartu menampilkan frame pertama video; ketuk → modal pemutar
 * dengan kontrol penuh dan suara.
 */
export function VideoStrip() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* Mobile: strip horizontal; Desktop: grid 3 kolom */}
      <ul className="-mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
        {galleryVideos.map((src, i) => (
          <li
            key={src}
            className="w-[62vw] max-w-[270px] shrink-0 snap-center lg:w-auto lg:max-w-none"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Putar video suasana studio Groomix ke-${i + 1}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-ink-line bg-black shadow-lg shadow-black/30 transition hover:border-brass/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            >
              <span className="relative block aspect-[9/16]">
                {/* #t=0.1 → browser menampilkan frame pertama sebagai preview */}
                <video
                  src={`${src}#t=0.1`}
                  preload="metadata"
                  muted
                  playsInline
                  tabIndex={-1}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/10"
                />
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brass/90 text-ink shadow-xl shadow-black/40 transition group-hover:scale-110 group-hover:bg-brass">
                  <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
                </span>
                <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 p-3.5">
                  <span className="text-left text-xs font-medium text-cream/90">
                    Suasana studio · Video {i + 1}
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Modal pemutar */}
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="max-w-[95vw] border-ink-line bg-ink p-3 text-cream sm:max-w-md">
          {active !== null && (
            <>
              <DialogTitle className="sr-only">
                Video suasana studio Groomix ({active + 1} dari{" "}
                {galleryVideos.length})
              </DialogTitle>
              <DialogDescription className="sr-only">
                Video asli dari profil Google Maps Groomix, Subang.
              </DialogDescription>
              <video
                key={galleryVideos[active]}
                src={galleryVideos[active]}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="mx-auto max-h-[76svh] max-w-full rounded-xl"
                aria-label={`Video suasana studio Groomix ke-${active + 1}`}
              />
              <p className="px-1 pt-3 pb-1 text-center text-sm text-cream/70">
                Video {active + 1} dari {galleryVideos.length} · Profil Google
                Maps Groomix
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
