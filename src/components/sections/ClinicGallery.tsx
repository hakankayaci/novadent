import React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ClinicGallery() {
  const { gallery } = siteData;

  return (
    <section id="klinik" className="py-20 bg-brand-surface-100">
      <Container>
        <SectionHeading
          badge="Klinik Galerisi"
          title="CanbazVet'i yakından tanıyın."
          description="Edirne Şükrüpaşa'daki modern kliniğimizin muayene alanları, ameliyathanesi, yataklı hasta ünitesi ve bekleme salonundan kareler."
          align="left"
          className="mb-12"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => {
            const isWide = index === 0 || index === 2;

            return (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden shadow-card border border-brand-teal-900/10 bg-white transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                  isWide ? "md:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-950/85 via-brand-teal-950/20 to-transparent opacity-90 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-brand-lime-400 uppercase tracking-wider">
                    {item.title}
                  </span>
                  <p className="text-sm font-medium text-white/90 mt-1 line-clamp-2">
                    {item.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
