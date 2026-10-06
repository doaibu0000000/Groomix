import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

export function CtaBand() {
  return (
    <section aria-label="Ajakan booking" className="bg-brass py-14 text-ink sm:py-16">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Mau rapi hari ini?
          </h2>
          <p className="mt-2 text-base text-ink/80 sm:text-lg">
            Chat dulu, biar nggak perlu nunggu lama di tempat.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="h-12 shrink-0 rounded-full bg-ink px-8 text-base font-semibold text-cream hover:bg-ink-soft"
        >
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-5 w-5" />
            Chat WhatsApp
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
