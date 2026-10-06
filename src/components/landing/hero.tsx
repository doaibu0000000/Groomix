import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset, site, waLink } from "@/lib/site";
import { blurHero } from "@/lib/blur-data";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Cahaya dekoratif hangat — memakai radial-gradient statis (bukan
          filter blur) supaya tidak memicu repaint berat saat scroll. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 600px at 100% 0%, rgba(194, 146, 79, 0.10), transparent 65%), radial-gradient(480px 480px at 0% 100%, rgba(194, 146, 79, 0.05), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-24 sm:px-6 md:pt-32 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28 lg:pt-36">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-line bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brass-light">
              Barbershop · Subang
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Duduk sebentar,
              <br />
              pulang <span className="text-brass">rapi</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
              Potong rambut & cukur jenggot di Jl. Otto Iskandardinata, Subang.
              Datang aja langsung — atau chat dulu biar nggak nunggu.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-brass px-7 text-base font-semibold text-ink hover:bg-brass-light"
              >
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-booking"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Booking via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-12 rounded-full border border-ink-line bg-white/5 px-7 text-base text-cream hover:bg-white/10 hover:text-cream"
              >
                <a href="#galeri">Lihat galeri</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-ink-line bg-white/5 py-2 pl-3 pr-4 text-sm text-cream/80 transition hover:border-brass/50 hover:text-cream"
            >
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brass text-brass" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-cream">5,0</strong> dari{" "}
                {site.reviewCount} review di Google
              </span>
              <span aria-hidden="true" className="text-cream/40">
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.2} y={32}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-line shadow-2xl shadow-black/40">
                <Image
                  src={asset("/photos/groomix-hero.webp")}
                  alt="Barber Groomix sedang merapikan rambut pelanggan di studio Groomix, Subang"
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL={blurHero}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Latar solid (bukan backdrop-blur) — blur di atas elemen
                  yang terus beranimasi memicu repaint terus-menerus. */}
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-ink-line bg-ink-soft px-4 py-3 shadow-xl shadow-black/30 sm:left-6">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wa" />
                </span>
                <p className="text-sm text-cream/90">
                  <strong className="font-semibold">Buka setiap hari</strong> ·{" "}
                  {site.openTime}–{site.closeTime} WIB
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
