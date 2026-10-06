# Groomix — Landing Page Barbershop

Landing page profesional untuk **Groomix**, barbershop di Jl. Otto Iskandardinata No.115B, Subang, Kabupaten Subang, Jawa Barat. Dibuat sebagai demo presentasi kepada pemilik bisnis.

Seluruh data bisnis (nama, alamat, jam buka, nomor telepon, rating 5,0 dari 23 review, koordinat) diambil langsung dari profil **Google Maps** resmi Groomix — place ID `ChIJrctfTgA7aS4R9aac92oGmTo`. Seluruh foto berasal dari foto asli di Google Maps (tanpa foto AI).

## Teknologi

| Bagian    | Teknologi                                        |
| --------- | ------------------------------------------------ |
| Framework | Next.js 16 (App Router) + TypeScript             |
| Styling   | Tailwind CSS 4 + shadcn/ui (New York)            |
| Font      | Fraunces (display) & Inter (body) via next/font  |
| Animasi   | Framer Motion (reveal halus, hormati reduced-motion) |
| SEO       | Metadata + JSON-LD `BarberShop` (schema.org)     |

## Fitur

- Mobile-first & responsif (kecil → desktop besar), tanpa horizontal scroll
- CTA WhatsApp di 5 titik: header, hero, band layanan, band CTA, tombol mengambang
- Data bisnis terpusat di `src/lib/site.ts` (satu file untuk mengubah semuanya)
- SEO on-page: title, description, Open Graph, JSON-LD LocalBusiness, `robots.txt`
- Dev indicator Next.js disembunyikan (`devIndicators: false`)
- Siap deploy ke Vercel **dan** kompatibel GitHub Pages (static export opsional)

## Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx        # Font, metadata SEO, JSON-LD
│   ├── page.tsx          # Komposisi seluruh section
│   ├── icon.svg          # Favicon brand G∞X
│   └── globals.css       # Token warna brand + style dasar
├── components/
│   ├── landing/          # Header, Hero, TrustStrip, About, Services,
│   │                     # Reviews, Location, CtaBand, Footer, FloatingWa
│   └── ui/               # Komponen shadcn/ui
└── lib/
    └── site.ts           # ⭐ Data bisnis (ubah di sini)
public/photos/            # Foto asli dari Google Maps (teroptimasi WebP)
```

## Cara Install

```bash
bun install
```

## Menjalankan Development

```bash
bun run dev
```

Buka `http://localhost:3000`.

## Build Produksi

```bash
bun run build   # build standalone (Vercel / self-host)
bun run start   # jalankan hasil build standalone
```

## Environment Variable

| Variabel                | Wajib? | Keterangan                                                          |
| ----------------------- | ------ | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Opsional | URL kanonik produksi (untuk metadata Open Graph). Default `http://localhost:3000` |
| `NEXT_PUBLIC_BASE_PATH` | Opsional | Base path saat deploy di subdirektori (GitHub Pages): `/<nama-repo>` |
| `GITHUB_PAGES`          | Opsional | Set `true` untuk static export ke folder `out/`                     |

Tidak ada environment variable rahasia — project ini murni static + data publik.

## Deployment

### Vercel (rekomendasi utama)

1. Push repository ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new) → import repository.
3. Biarkan semua setting default (framework: Next.js) → **Deploy**.
4. Opsional: set `NEXT_PUBLIC_SITE_URL` = URL produksi Anda.

### GitHub Pages (untuk testing)

Project mendukung static export tanpa merusak deploy Vercel:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/<nama-repo> \
NEXT_PUBLIC_SITE_URL=https://<username>.github.io/<nama-repo>/ \
bunx next build
```

Hasilnya ada di folder `out/`. Atau gunakan workflow siap pakai di
`.github/workflows/gh-pages.yml` — aktifkan GitHub Pages dengan source
**GitHub Actions**, lalu push ke `main`.

## Mengubah Konten

- **Data bisnis & link WA** → `src/lib/site.ts`
- **Layanan & harga** → `src/components/landing/services.tsx` (harga saat ini adalah *placeholder demo* — sesuaikan dengan harga asli Groomix)
- **Teks section** → masing-masing file di `src/components/landing/`
- **Foto** → ganti file di `public/photos/` (nama file sama)

## Catatan

- Foto di halaman ini adalah foto asli Groomix dari Google Maps; saat pemilik memberi foto studio terbaru, tinggal mengganti file di `public/photos/`.
- Klaim jam buka (Senin–Minggu 10.00–22.00) sesuai data Google Maps per September 2026.
