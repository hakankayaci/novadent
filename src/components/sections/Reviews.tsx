"use client";

import React from "react";
import { Star, ExternalLink, MessageSquareHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

const sampleReviewCategories = [
  {
    title: "İlgili & Şefkatli Yaklaşım",
    desc: "Veteriner Hekim Berk Canbaz'ın minik dostlarımıza gösterdiği samimi ilgi ve sabırlı hekimlik yaklaşımı.",
  },
  {
    title: "Temiz ve Modern İmkânlar",
    desc: "Hijyenik muayene odası, steril ameliyathane ve teknolojik laboratuvar ortamı.",
  },
  {
    title: "Açık İletişim & Bilgilendirme",
    desc: "Tedavi sürecinde hasta sahiplerine adım adım verilen şeffaf detaylı bilgiler.",
  },
];

export function Reviews() {
  const { t } = useLanguage();
  const googleReviewsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ||
    "https://www.google.com/search?q=CanbazVet+Veteriner+Klini%C4%9Fi+Yorumlar";

  return (
    <section id="yorumlar" className="py-20 bg-brand-surface-50">
      <Container>
        <SectionHeading
          badge={t("nav_reviews")}
          title="Dostlarımızın ailelerinden gelen değerlendirmeler."
          description="CanbazVet Veteriner Kliniği hakkında Google Haritalar üzerindeki hasta sahibi deneyimlerini doğrudan inceleyin."
          align="left"
          className="mb-12"
        />

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sampleReviewCategories.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-brand-teal-900/10 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-brand-teal-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-brand-teal-900/5 flex items-center gap-2 text-xs font-semibold text-brand-teal-800">
                <MessageSquareHeart className="w-4 h-4 text-brand-teal-800" />
                <span>Google Maps Yorum Temaları</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Direct CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-brand-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <h4 className="text-2xl font-bold text-white">
              Tüm Yorumları Google Haritalar'da Okuyun
            </h4>
            <p className="text-sm text-brand-teal-100/80 max-w-xl">
              CanbazVet Veteriner Kliniği'nin güncel Google Harita puanı, konumu ve tüm yorumlarına tek tıkla ulaşabilirsiniz.
            </p>
          </div>

          <Button
            variant="lime"
            size="lg"
            href={googleReviewsUrl}
            target="_blank"
            icon={<ExternalLink className="w-5 h-5" />}
            className="shrink-0"
          >
            {t("trust_reviews_cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
