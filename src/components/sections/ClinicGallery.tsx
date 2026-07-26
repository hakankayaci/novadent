"use client";

import Image from "next/image";
import { gallery } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Tile spans, so the mosaic has rhythm instead of eight equal squares. Rows are a fixed
 * track height and the grid is `dense`, which is what keeps a two-row tile from punching
 * a hole in the layout; images are object-cover so none of them distort.
 */
const SPAN: Record<string, string> = {
  wide: "row-span-2 sm:col-span-2",
  tall: "row-span-3 sm:row-span-4",
  square: "row-span-2",
};

export function ClinicGallery() {
  const { c } = useLanguage();

  return (
    <section id="klinik" className="scroll-mt-24 bg-paper py-section">
      <Container>
        <SectionHeading
          kicker={c.gallery.badge}
          title={c.gallery.title}
          lede={c.gallery.desc}
          className="mb-12"
        />

        <ul className="grid grid-flow-row-dense auto-rows-[6rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[7rem] lg:grid-cols-3 lg:auto-rows-[8rem] lg:gap-5">
          {gallery.map((item, index) => {
            const copy = c.gallery.items[item.id];
            return (
              <Reveal
                as="li"
                key={item.id}
                from="scale"
                delay={(index % 3) * 90}
                className={`group relative overflow-hidden rounded-panel bg-pine-100 shadow-card transition-shadow duration-500 hover:shadow-lift ${SPAN[item.shape]}`}
              >
                <Image
                  src={item.src}
                  alt={copy.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />

                {/* Caption plate rather than a full-tile scrim, so the photograph stays readable. */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/85 via-pine-950/35 to-transparent p-5 pt-14">
                  <h3 className="text-body font-semibold text-white">{copy.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
