import type { NextConfig } from "next";

// Dukungan GitHub Pages untuk testing (tidak mengganggu deploy Vercel):
//   GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/<nama-repo> bunx next build
// Deploy Vercel tetap memakai standalone build seperti biasa.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  ...(basePath ? { basePath } : {}),
  ...(isGithubPages ? { trailingSlash: true } : {}),
  images: {
    // Wajib untuk static export (GitHub Pages); aman juga di Vercel
    // karena semua foto sudah dioptimasi sebagai WebP statis.
    unoptimized: true,
  },
  // Sembunyikan indikator development Next.js (logo "N" di pojok layar)
  devIndicators: false,
  // Domain preview sandbox — mencegah peringatan cross-origin di console dev
  allowedDevOrigins: ["*.space-z.ai"],
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
