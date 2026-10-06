import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

export function Reviews() {
  return (
    <section id="review" className="bg-ink py-16 text-cream sm:py-20 lg:py-24">
      <Reveal className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
          Review di Google
        </p>

        <div className="flex items-center justify-center gap-5">
          <span className="font-display text-6xl font-semibold leading-none sm:text-7xl">
            {site.rating}
          </span>
          <div className="text-left">
            <div
              className="flex gap-0.5"
              role="img"
              aria-label={`Rating ${site.rating} dari 5 bintang`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brass text-brass" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-1.5 text-sm text-cream/60">
              {site.reviewCount} review di Google
            </p>
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
          Semua review bisa kamu baca langsung di Google.
        </p>

        <Button
          asChild
          variant="ghost"
          className="mt-8 h-12 rounded-full border border-ink-line bg-white/5 px-7 text-base text-cream hover:bg-white/10 hover:text-cream"
        >
          <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer">
            Baca review di Google
            <span aria-hidden="true">→</span>
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
