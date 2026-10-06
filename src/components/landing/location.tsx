import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, telLink } from "@/lib/site";
import { Reveal } from "./reveal";

export function Location() {
  return (
    <section id="lokasi" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="flex h-full flex-col">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brass-strong">
              Lokasi & jam buka
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Mampir, kami tunggu.
            </h2>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3.5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-brass-strong"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-ink">Alamat</p>
                  <p className="mt-0.5 max-w-sm text-sm leading-relaxed text-ink/70">
                    {site.address}
                  </p>
                  <p className="mt-1 text-xs text-ink/50">
                    Plus code: {site.plusCode}
                  </p>
                </div>
              </li>
              <li className="flex gap-3.5">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-brass-strong"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-ink">Jam buka</p>
                  <p className="mt-0.5 text-sm text-ink/70">
                    Senin–Minggu, {site.openTime}–{site.closeTime} WIB
                  </p>
                </div>
              </li>
              <li className="flex gap-3.5">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-brass-strong"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-ink">Telepon / WhatsApp</p>
                  <a
                    href={telLink}
                    className="mt-0.5 block text-sm text-ink/70 underline-offset-4 transition hover:text-ink hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-ink px-6 text-sm font-semibold text-cream hover:bg-ink-soft"
              >
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4" />
                  Buka di Google Maps
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-ink/20 bg-transparent px-6 text-sm font-semibold text-ink hover:bg-ink/5"
              >
                <a href={telLink}>
                  <Phone className="h-4 w-4" />
                  Telepon
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} y={28}>
          <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-ink/10 shadow-xl shadow-ink/10 lg:min-h-[440px]">
            <iframe
              src={site.mapEmbedUrl}
              title="Peta lokasi Groomix di Jl. Otto Iskandardinata, Subang"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0 lg:min-h-[440px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
