import Image from "next/image";
import { Ear, HeartHandshake, ShieldCheck } from "lucide-react";
import { aboutPhoto } from "@/lib/gallery-data";
import { Reveal } from "./reveal";

const points = [
  {
    icon: Ear,
    title: "Dengarkan model yang kamu mau",
    desc: "Kami pastikan modelnya sesuai sebelum mulai.",
  },
  {
    icon: ShieldCheck,
    title: "Alat bersih dan disiapkan untuk setiap pelanggan",
    desc: "Kenyamanan dan kebersihan tetap kami perhatikan.",
  },
  {
    icon: HeartHandshake,
    title: "Tanpa paksaan layanan tambahan",
    desc: "Pilih layanan sesuai kebutuhanmu.",
  },
];

export function About() {
  return (
    <section id="tentang" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brass-strong">
              Tentang kami
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Potongan rapi, sesuai gaya kamu.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
              Groomix hadir di Jl. Otto Iskandardinata, Subang, untuk kamu yang
              ingin potong rambut dengan hasil rapi dan nyaman. Kami dengarkan
              dulu model yang kamu mau, lalu menyesuaikannya dengan gaya dan
              bentuk rambutmu.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point.title} className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass-strong">
                    <point.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-sm font-semibold text-ink sm:text-base">
                      {point.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/60">
                      {point.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={28}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[2rem] border border-brass/40 sm:-inset-3"
            />
            <div className="relative aspect-[21/10] overflow-hidden rounded-3xl shadow-xl shadow-ink/10">
              <Image
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                fill
                placeholder="blur"
                blurDataURL={aboutPhoto.blur}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
