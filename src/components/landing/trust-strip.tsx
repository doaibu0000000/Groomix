import { Clock, DoorOpen, Star, Wallet } from "lucide-react";

const items = [
  { icon: DoorOpen, title: "Langsung datang, boleh", desc: "Chat dulu biar nggak nunggu" },
  { icon: Clock, title: "Buka tiap hari", desc: "10.00–22.00 WIB" },
  { icon: Wallet, title: "Harga jujur", desc: "Mulai Rp25.000" },
  { icon: Star, title: "5,0 di Google", desc: "Dari 23 review" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Keunggulan Groomix"
      className="border-y border-ink-line/60 bg-ink-soft text-cream"
    >
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:px-6 sm:py-9 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <item.icon
              className="mt-0.5 h-5 w-5 shrink-0 text-brass"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold sm:text-base">{item.title}</p>
              <p className="mt-0.5 text-xs text-cream/60 sm:text-sm">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
