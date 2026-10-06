/**
 * Data bisnis Groomix — diambil langsung dari Google Maps (place_id:
 * ChIJrctfTgA7aS4R9aac92oGmTo). Satu sumber kebenaran untuk seluruh
 * halaman, JSON-LD, dan CTA. Jika data berubah, cukup edit file ini.
 */
export const site = {
  name: "Groomix",
  category: "Barbershop",
  tagline: "Duduk sebentar, pulang rapi.",
  city: "Subang, Jawa Barat",
  address:
    "Jl. Otto Iskandardinata No.115B, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211",
  plusCode: "CQQ9+24 Karanganyar, Subang",
  phoneDisplay: "+62 881-1168-999",
  phoneIntl: "+628811168999",
  waNumber: "628811168999",
  waText: "Halo Groomix! Mau booking potong rambut, boleh?",
  openTime: "10.00",
  closeTime: "22.00",
  rating: "5,0",
  ratingValue: "5.0",
  reviewCount: 23,
  mapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJrctfTgA7aS4R9aac92oGmTo",
  reviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJrctfTgA7aS4R9aac92oGmTo",
  mapEmbedUrl:
    "https://www.google.com/maps?q=-6.5624453,107.7678058&z=17&hl=id&output=embed",
  geo: { lat: -6.5624453, lng: 107.7678058 },
} as const;

export const waLink = `https://wa.me/${site.waNumber}?text=${encodeURIComponent(
  site.waText
)}`;

export const telLink = `tel:${site.phoneIntl}`;

/**
 * Prefix path aset statis (foto/video di public/). next/image sudah
 * otomatis menambahkan basePath, tapi <video> dan URL di metadata
 * tidak — di GitHub Pages basePath-nya /<nama-repo>.
 */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
