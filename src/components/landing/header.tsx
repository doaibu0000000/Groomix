"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Menu, Phone, Star } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { site, waLink, telLink } from "@/lib/site";
import { Wordmark } from "./wordmark";
import { WhatsAppIcon } from "./whatsapp-icon";

const nav = [
  { href: "#tentang", label: "Tentang" },
  { href: "#galeri", label: "Galeri" },
  { href: "#review", label: "Review" },
  { href: "#lokasi", label: "Lokasi" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // Hanya update state saat nilai benar-benar berubah →
      // tidak ada re-render di setiap tick scroll (sumber kedipan).
      setScrolled((prev) => {
        const next = window.scrollY > 12;
        return prev === next ? prev : next;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-ink-line/60 bg-ink/95 shadow-lg shadow-black/20"
          : "border-transparent bg-transparent"
      }`}
      // Catatan: backdrop-blur selalu aktif (tidak pernah toggle) supaya
      // browser tidak melakukan repaint filter saat scroll — inilah
      // penyebab utama kedipan. Yang berubah hanya warna & bayangan.
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Groomix — kembali ke bagian atas"
          className="rounded-full text-cream transition hover:opacity-90"
        >
          <Wordmark className="text-xl" />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-cream/80 transition hover:bg-white/5 hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-10 rounded-full bg-brass px-5 text-sm font-semibold text-ink hover:bg-brass-light md:inline-flex"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Chat
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              {/* Tombol menu dengan latar — jelas bisa disentuh,
                  bukan sekadar ikon kecil mengambang */}
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-cream/25 bg-cream/10 text-cream shadow-sm hover:bg-cream/20 hover:text-cream md:hidden"
                aria-label="Buka menu navigasi"
              >
                <Menu className="h-5 w-5" strokeWidth={2.25} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[86vw] max-w-[340px] gap-0 border-ink-line bg-ink text-cream"
            >
              <SheetTitle className="sr-only">Menu navigasi</SheetTitle>
              {/* Wajib ada Description — tanpa ini Radix memunculkan warning
                  aksesibilitas di console setiap kali menu dibuka (sumber
                  badge "Issue" merah di pojok layar). */}
              <SheetDescription className="sr-only">
                Navigasi halaman, kontak, dan booking WhatsApp Groomix
              </SheetDescription>

              {/* Blok brand */}
              <div className="px-6 pb-6 pt-7">
                <Wordmark className="text-2xl" />
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-brass-light">
                  Barbershop · Subang
                </p>
              </div>

              {/* Navigasi bernomor — rapi & terasa dirancang */}
              <nav
                aria-label="Navigasi mobile"
                className="mx-4 flex flex-col border-t border-ink-line/50"
              >
                {nav.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-ink-line/50 px-3 py-4 transition hover:bg-white/5"
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span
                        aria-hidden="true"
                        className="text-[11px] font-semibold tracking-[0.18em] text-brass/80"
                      >
                        0{i + 1}
                      </span>
                      <span className="font-display text-xl text-cream/90">
                        {item.label}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-brass/60 transition group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </nav>

              {/* Kontak & jam buka — mengisi ruang, tetap fungsional */}
              <div className="mt-auto px-6 pb-9">
                <div className="rounded-2xl border border-ink-line/60 bg-white/[0.04] p-4">
                  <a
                    href={telLink}
                    className="flex items-center gap-3 text-sm text-cream/85 transition hover:text-cream"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                  <p className="mt-3 flex items-center gap-3 text-sm text-cream/85">
                    <Clock className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                    Setiap hari, {site.openTime}–{site.closeTime} WIB
                  </p>
                  <a
                    href={site.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-3 text-sm text-cream/85 transition hover:text-cream"
                  >
                    <Star
                      className="h-4 w-4 shrink-0 fill-brass text-brass"
                      aria-hidden="true"
                    />
                    5,0 · {site.reviewCount} review Google
                  </a>
                </div>

                <Button
                  asChild
                  className="mt-4 h-12 w-full rounded-full bg-brass text-base font-semibold text-ink hover:bg-brass-light"
                >
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat via WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
