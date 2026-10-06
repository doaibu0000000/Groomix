import { galleryPhotos } from "@/lib/gallery-data";
import { Reveal } from "./reveal";
import { PhotoGrid } from "./photo-grid";

export function Gallery() {
  return (
    <section
      id="galeri"
      className="relative overflow-hidden bg-ink py-16 text-cream sm:py-20 lg:py-24"
    >
      {/* Cahaya hangat statis — konsisten dengan hero, tanpa filter blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(560px 560px at 0% 0%, rgba(194, 146, 79, 0.08), transparent 62%), radial-gradient(480px 480px at 100% 85%, rgba(194, 146, 79, 0.05), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
              Galeri
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Lihat langsung suasananya.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-cream/70 sm:text-lg">
              {galleryPhotos.length} foto suasana dan hasil potongan di Groomix.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} y={28}>
          <div className="mt-10 flex items-baseline justify-between gap-4">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">
              Suasana barbershop
            </h3>
            <span className="shrink-0 text-xs text-cream/40">
              {galleryPhotos.length} foto · ketuk untuk perbesar
            </span>
          </div>
          <PhotoGrid />
        </Reveal>
      </div>
    </section>
  );
}
