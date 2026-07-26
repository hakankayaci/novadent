import React from "react";
import Image from "next/image";
import { CheckCircle2, Heart, Shield, Sparkles } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";

const highlights = [
  "Açık ve anlaşılır hasta sahibi iletişimi",
  "Steril muayene ve ameliyathane ortamı",
  "Düzenli koruyucu aşı ve tedavi takibi",
  "7/24 aktif acil iletişim desteği",
];

export function About() {
  const { business } = siteData;

  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-teal-900/10">
              <Image
                src="/images/clinic/canbazvet-muayene-masasi-ve-ekipmanlar.webp"
                alt="CanbazVet markalı muayene masası ve hijyenik klinik ortamı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 p-6 rounded-2xl bg-brand-teal-950 text-white shadow-xl max-w-xs border border-brand-teal-800/40">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-lime-500 text-brand-teal-950 font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-lime-400 font-bold uppercase tracking-wider">
                    Özenli Bakım
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Şefkatli & Bilimsel Yaklaşım
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal-900/10 text-brand-teal-900 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-brand-red-600 fill-brand-red-600" />
              <span>Hakkımızda</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-teal-950 tracking-tight leading-tight">
              CanbazVet'te her dost,{" "}
              <span className="text-brand-teal-800">kendine özel bir hikâyedir.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {business.name}, Edirne'de evcil dostlarımızın sağlık ihtiyaçlarını özenli, anlaşılır ve güven veren bir yaklaşımla değerlendirmeyi amaçlar.
            </p>

            <p className="text-base text-text-secondary leading-relaxed">
              Hasta sahipleriyle şeffaf ve açık iletişim kurarak muayene, teşhis, tedavi ve düzenli takip süreçlerinde minik dostlarımızın yaşam kalitesini ön planda tutuyoruz.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime-600 shrink-0" />
                  <span className="text-sm font-semibold text-brand-teal-950">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
