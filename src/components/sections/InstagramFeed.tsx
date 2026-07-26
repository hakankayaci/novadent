"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Instagram,
  Grid,
  Film,
  UserCheck,
  CheckCircle2,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function InstagramFeed() {
  const { t } = useLanguage();
  const { social, phone, veterinarian } = siteData.business;
  const [isFollowing, setIsFollowing] = useState(false);

  const posts = [
    {
      src: "/images/social/instagram-post-1.webp",
      title: t("insta_post1"),
      likes: 124,
      comments: 18,
    },
    {
      src: "/images/social/instagram-post-2.webp",
      title: t("insta_post2"),
      likes: 210,
      comments: 32,
    },
    {
      src: "/images/social/instagram-post-3.webp",
      title: t("insta_post3"),
      likes: 345,
      comments: 47,
    },
    {
      src: "/images/social/instagram-post-4.webp",
      title: t("insta_post4"),
      likes: 289,
      comments: 29,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-brand-teal-900/10">
      <Container>
        <SectionHeading
          badge="Instagram"
          title={t("insta_title")}
          description="CanbazVet'ten güncel klinik hayatı, tedavi duyuruları ve minik dostlarımızın hikâyeleri."
          align="left"
          className="mb-12"
        />

        {/* Realistic Instagram Profile Panel (Dark Instagram Theme UI) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#121212] text-white shadow-2xl overflow-hidden border border-neutral-800">
          {/* Top Profile Header */}
          <div className="p-6 sm:p-10 border-b border-neutral-800">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
              {/* Profile Avatar */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#121212] p-1 overflow-hidden relative">
                    <Image
                      src="/images/clinic/canbazvet-dis-cephe-tabela.webp"
                      alt="CanbazVet Instagram Profil Fotoğrafı"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Profile Main Details */}
              <div className="space-y-4 text-center sm:text-left flex-grow">
                {/* Username & Actions */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      canbazvetedirne
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-sky-500 fill-sky-500" />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={`px-5 py-1.5 rounded-xl text-xs font-bold transition-all min-h-[36px] ${
                        isFollowing
                          ? "bg-neutral-800 text-white border border-neutral-700"
                          : "bg-blue-600 hover:bg-blue-500 text-white"
                      }`}
                    >
                      {isFollowing ? "Takip Ediliyor" : t("insta_follow_btn")}
                    </button>

                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-all min-h-[36px] flex items-center justify-center"
                    >
                      {t("insta_message_btn")}
                    </a>
                  </div>
                </div>

                {/* Counter Stats */}
                <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-10 text-sm border-y border-neutral-800/60 py-3 sm:border-0 sm:py-0">
                  <div>
                    <strong className="font-extrabold text-white">8</strong>{" "}
                    <span className="text-neutral-400 text-xs sm:text-sm">gönderi</span>
                  </div>
                  <div>
                    <strong className="font-extrabold text-white">549</strong>{" "}
                    <span className="text-neutral-400 text-xs sm:text-sm">takipçi</span>
                  </div>
                  <div>
                    <strong className="font-extrabold text-white">8</strong>{" "}
                    <span className="text-neutral-400 text-xs sm:text-sm">takip</span>
                  </div>
                </div>

                {/* Bio text */}
                <div className="text-xs sm:text-sm text-neutral-300 space-y-1 leading-relaxed text-left">
                  <p className="font-bold text-white">CanbazVet Veteriner Kliniği</p>
                  <p className="text-neutral-300">
                    Veteriner Hekimi{" "}
                    <a
                      href={veterinarian.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline font-semibold"
                    >
                      {veterinarian.handle}
                    </a>
                  </p>
                  <p>Çalışma Saatleri 9.30-19.30</p>
                  <p>7/24 Acil Hat: {phone.display}</p>
                  <a
                    href={social.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 font-bold hover:underline"
                  >
                    <span>{t("insta_link")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Navigation Tabs */}
          <div className="flex items-center justify-center border-b border-neutral-800 text-xs font-bold uppercase tracking-widest">
            <button className="flex items-center gap-2 py-3 px-6 border-b-2 border-white text-white">
              <Grid className="w-4 h-4" />
              <span>GÖNDERİLER</span>
            </button>
            <button className="flex items-center gap-2 py-3 px-6 text-neutral-500 hover:text-neutral-300">
              <Film className="w-4 h-4" />
              <span>REELS</span>
            </button>
            <button className="flex items-center gap-2 py-3 px-6 text-neutral-500 hover:text-neutral-300">
              <UserCheck className="w-4 h-4" />
              <span>ETİKETLENENLER</span>
            </button>
          </div>

          {/* 4 Real Post Image Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 p-2 sm:p-4 bg-black">
            {posts.map((post, idx) => (
              <a
                key={idx}
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_post_click", { index: idx })}
                className="group relative aspect-square bg-neutral-900 overflow-hidden rounded-xl border border-neutral-800 block"
              >
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center gap-2 text-white">
                  <div className="flex items-center gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-white text-white" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 fill-white text-white" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-neutral-200 line-clamp-2">
                    {post.title}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="p-4 bg-neutral-900 text-center text-xs text-neutral-400 border-t border-neutral-800 flex items-center justify-center gap-2">
            <Instagram className="w-4 h-4 text-rose-500" />
            <span>
              Tüm gönderiler ve güncel vakalar için{" "}
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold underline"
              >
                @canbazvetedirne
              </a>{" "}
              hesabımızı takip edin.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
