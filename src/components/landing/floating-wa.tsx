"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

/**
 * Tombol WhatsApp mengambang — jalur konversi utama.
 * Baru muncul setelah tombol "Booking via WhatsApp" di hero keluar
 * dari layar (tidak menutupi hero di awal), dan disembunyikan lagi
 * saat lightbox galeri terbuka agar tidak menutupi navigasi foto.
 */
export function FloatingWa() {
  const [pastHero, setPastHero] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Tombol booking hero masih terlihat → tombol mengambang tetap diam.
  useEffect(() => {
    const target = document.getElementById("hero-booking");
    if (!target) {
      // Fallback: anggap sudah lewat hero kalau sudah discroll cukup jauh.
      const onScroll = () => setPastHero(window.scrollY > 480);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Lightbox / modal galeri terbuka → sembunyikan.
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDialogOpen(document.querySelector('[role="dialog"]') !== null);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const hidden = !pastHero || dialogOpen;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Booking via WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-xl shadow-ink/25 transition-all duration-300 hover:scale-105 hover:bg-wa/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa sm:bottom-6 sm:right-6 ${
        hidden
          ? "pointer-events-none translate-y-3 scale-75 opacity-0"
          : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
