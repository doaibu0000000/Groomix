import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
// Aset di public/ pada GitHub Pages dilayani di bawah /<nama-repo>.
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Groomix — Barbershop di Subang | Buka Setiap Hari 10.00–22.00",
  description:
    "Barbershop di Jl. Otto Iskandardinata No.115B, Subang. Potong rambut & cukur jenggot mulai Rp25.000. Rating 5,0 dari 23 review di Google. Langsung datang boleh, atau chat via WhatsApp.",
  keywords: [
    "barbershop Subang",
    "potong rambut Subang",
    "Groomix",
    "cukur rambut Subang",
    "barber shop Jawa Barat",
    "Groomix Subang",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Groomix — Barbershop di Subang",
    description:
      "Duduk sebentar, pulang rapi. Buka setiap hari 10.00–22.00 di Jl. Otto Iskandardinata No.115B, Subang.",
    url: "/",
    siteName: "Groomix",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${assetBase}/photos/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Suasana barbershop Groomix di Subang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groomix — Barbershop di Subang",
    description:
      "Duduk sebentar, pulang rapi. Buka setiap hari 10.00–22.00 di Subang.",
    images: [`${assetBase}/photos/og-image.jpg`],
  },
  robots: { index: true, follow: true },
};

/**
 * Data terstruktur LocalBusiness (BarberShop) untuk SEO —
 * memakai data asli dari Google Maps.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: site.name,
  description:
    "Barbershop di Jl. Otto Iskandardinata No.115B, Subang. Buka setiap hari 10.00–22.00 WIB.",
  image: "/photos/groomix-hero.webp",
  url: "/",
  telephone: site.phoneIntl,
  priceRange: "Rp25.000 - Rp55.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Otto Iskandardinata No.115B",
    addressLocality: "Subang",
    addressRegion: "Jawa Barat",
    postalCode: "41211",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.ratingValue,
    reviewCount: String(site.reviewCount),
  },
  sameAs: [site.mapsUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
