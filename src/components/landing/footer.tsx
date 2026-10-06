import { site, waLink, telLink } from "@/lib/site";
import { Wordmark } from "./wordmark";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-14 text-cream sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              Barbershop di Jl. Otto Iskandardinata No.115B, Subang. Buka
              setiap hari, {site.openTime}–{site.closeTime} WIB.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass-light">
              Kontak
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>
                <a href={telLink} className="transition hover:text-cream">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-cream"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cream"
                >
                  Google Maps
                </a>
              </li>
              <li>
                <a
                  href={site.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cream"
                >
                  Review di Google
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass-light">
              Jam buka
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li className="flex max-w-[220px] justify-between gap-6">
                <span>Senin–Jumat</span>
                <span>
                  {site.openTime}–{site.closeTime}
                </span>
              </li>
              <li className="flex max-w-[220px] justify-between gap-6">
                <span>Sabtu–Minggu</span>
                <span>
                  {site.openTime}–{site.closeTime}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-line/60 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Groomix. Semua hak dilindungi.</p>
          <p>Foto di halaman ini asli, diambil dari Google Maps.</p>
        </div>
      </div>
    </footer>
  );
}
