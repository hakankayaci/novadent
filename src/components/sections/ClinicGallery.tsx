"use client";

import Image from "next/image";
import { gallery } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";

export function ClinicGallery() {
  const { c } = useLanguage();

  return (
    <section id="galeri" className="scroll-mt-24 bg-paper py-section">
      <Container>
        <SectionHeading
          kicker={c.gallery.badge}
          title={c.gallery.title}
          lede={c.gallery.desc}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {gallery.map((item, index) => {
            const copy = c.gallery.items[item.id];
            return (
              <Reveal
                key={item.id}
                from="scale"
                delay={index * 80}
                className="group relative aspect-[4/3] overflow-hidden rounded-panel bg-navy-900 shadow-card ring-1 ring-navy-950/10 transition-shadow duration-500 hover:shadow-lift"
              >
                <Image
                  src={item.src}
                  alt={copy.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 45vw"
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent p-6 pt-16">
                  <h3 className="text-body-lg font-bold text-white">{copy.title}</h3>
                  <p className="mt-1 text-xs text-cyan-300 font-medium">{copy.alt}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
