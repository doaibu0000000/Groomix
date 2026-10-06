import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { About } from "@/components/landing/about";
import { Gallery } from "@/components/landing/gallery";
import { Reviews } from "@/components/landing/reviews";
import { Location } from "@/components/landing/location";
import { CtaBand } from "@/components/landing/cta-band";
import { Footer } from "@/components/landing/footer";
import { FloatingWa } from "@/components/landing/floating-wa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <Gallery />
        <Reviews />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
