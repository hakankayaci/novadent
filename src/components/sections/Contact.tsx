"use client";

import React, { useState } from "react";
import {
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  Navigation,
  Phone,
  CheckCircle,
} from "lucide-react";
import { business, treatments } from "@/data/site";
import type { TreatmentId } from "@/types/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useLanguage } from "@/lib/LanguageContext";
import { saturdayRange, weekdayRange } from "@/lib/hours";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  const { c, lang } = useLanguage();
  const { maps, phone, social, address } = business;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredLang: lang.toUpperCase(),
    treatment: treatments[0].id,
    message: "",
    consent: false,
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError(c.contact.nameLabel + " " + c.contact.consentLabel);
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setFormError(c.contact.phoneLabel);
      return;
    }
    if (!formData.consent) {
      setFormError(c.contact.consentLabel);
      return;
    }

    setFormError("");

    const treatmentTitle = c.treatments.items[formData.treatment as keyof typeof c.treatments.items]?.title || formData.treatment;

    const messageText =
      `*NOVADENT Clinics - Randevu Talebi*\n\n` +
      `👤 *Ad Soyad:* ${formData.name}\n` +
      `📞 *Telefon:* ${formData.phone}\n` +
      `🌐 *Tercih Edilen Dil:* ${formData.preferredLang}\n` +
      `🦷 *İlgilenilen Tedavi:* ${treatmentTitle}\n` +
      `💬 *Mesaj:* ${formData.message || "-"}`;

    const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(messageText)}`;

    trackEvent("contact_form_whatsapp_submit", { treatment: formData.treatment, lang: formData.preferredLang });

    setFormSuccess(true);
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="iletisim" className="scroll-mt-24 bg-paper py-section">
      <Container>
        <SectionHeading
          kicker={c.contact.badge}
          title={c.contact.title}
          lede={c.contact.desc}
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Contact Info & Hours */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-panel bg-navy-950 p-7 text-white shadow-panel sm:p-9">
              <div>
                <h3 className="text-display-sm font-bold text-white">
                  NOVADENT Ağız ve Diş Sağlığı Poliklinikleri
                </h3>

                <div className="mt-6 space-y-4">
                  {business.branches.map((b) => (
                    <div key={b.id} className="rounded-xl border border-white/12 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-body font-bold text-cyan-400">{b.name}</span>
                        <a
                          href={b.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-1 px-1 text-xs font-bold text-cyan-300 hover:text-white"
                        >
                          <span>Haritada Aç</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <p className="mt-1 text-xs text-navy-100/80">{b.address}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-400">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <dl>
                      <dt className="text-body-sm text-navy-100/65 font-medium">
                        {c.contact.addressLabel}
                      </dt>
                      <dd className="mt-1 text-body font-semibold text-white">
                        {address.neighborhood}, {address.street}, {address.district} / {address.city}
                      </dd>
                    </dl>
                  </div>

                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-400">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <dl>
                      <dt className="text-body-sm text-navy-100/65 font-medium">
                        {c.contact.phoneLabel}
                      </dt>
                      <dd>
                        <a
                          href={phone.telLink}
                          onClick={() => trackEvent("phone_click", { location: "contact" })}
                          className="mt-0.5 inline-flex min-h-[44px] items-center text-display-sm font-extrabold tabular-nums text-cyan-400 transition-colors duration-200 hover:text-cyan-300"
                        >
                          {phone.display}
                        </a>
                      </dd>
                    </dl>
                  </div>

                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-400">
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <dl className="min-w-0 flex-1">
                      <dt className="text-body-sm text-navy-100/65 font-medium">
                        {c.contact.hoursLabel}
                      </dt>
                      <dd className="mt-1.5 space-y-1 text-body-sm">
                        <span className="flex items-baseline justify-between gap-4">
                          <span className="text-navy-100/85 font-medium">Pazartesi – Cuma</span>
                          <span className="font-bold tabular-nums text-white">{weekdayRange}</span>
                        </span>
                        <span className="flex items-baseline justify-between gap-4">
                          <span className="text-navy-100/85 font-medium">Cumartesi</span>
                          <span className="font-bold tabular-nums text-white">{saturdayRange}</span>
                        </span>
                        <span className="flex items-baseline justify-between gap-4">
                          <span className="text-navy-100/85 font-medium">Pazar</span>
                          <span className="font-bold text-cyan-400">{c.hours.closed}</span>
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3 border-t border-white/12 pt-6">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="cyan"
                    href={phone.telLink}
                    icon={<Phone className="h-4 w-4" aria-hidden />}
                  >
                    {c.hero.ctaCall}
                  </Button>
                  <Button
                    variant="onDark"
                    href={maps.directionsUrl}
                    target="_blank"
                    icon={<Navigation className="h-4 w-4 text-cyan-400" aria-hidden />}
                  >
                    {c.nav.directions}
                  </Button>
                </div>

                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-2 text-body-sm font-semibold text-navy-100/80 transition-colors duration-200 hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden />
                  @novadentclinicsedirne
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Appointment & Info Form */}
          <Reveal delay={100}>
            <div className="rounded-panel border border-navy-950/10 bg-white p-7 shadow-card sm:p-9">
              <h3 className="text-display-sm font-bold text-navy-950">
                WhatsApp ile Randevu Talebi
              </h3>
              <p className="mt-1 text-body-sm text-ink-soft">
                Bilgilerinizi girerek doğrudan WhatsApp üzerinden randevu talebi oluşturabilirsiniz.
              </p>

              {formSuccess ? (
                <div className="mt-6 rounded-card border border-emerald-500/30 bg-emerald-50 p-6 text-center text-emerald-900">
                  <CheckCircle className="mx-auto h-10 w-10 text-emerald-600" />
                  <p className="mt-3 font-bold text-body">{c.contact.successMessage}</p>
                  <button
                    type="button"
                    onClick={() => setFormSuccess(false)}
                    className="mt-4 text-xs font-semibold text-emerald-700 underline"
                  >
                    Yeni talep oluştur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {formError && (
                    <div className="rounded-xl bg-alert-100 border border-alert-600/30 p-3 text-xs font-bold text-alert-700">
                      Lütfen tüm zorunlu alanları doldurunuz.
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-navy-900">
                      {c.contact.nameLabel} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={c.contact.namePlaceholder}
                      className="mt-1.5 w-full rounded-xl border border-navy-950/15 bg-paper px-4 py-3 text-body-sm font-medium text-navy-950 focus:border-cyan-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-navy-900">
                        {c.contact.phoneLabel} *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={c.contact.phonePlaceholder}
                        className="mt-1.5 w-full rounded-xl border border-navy-950/15 bg-paper px-4 py-3 text-body-sm font-medium text-navy-950 focus:border-cyan-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="lang" className="block text-xs font-bold text-navy-900">
                        {c.contact.langLabel}
                      </label>
                      <select
                        id="lang"
                        value={formData.preferredLang}
                        onChange={(e) => setFormData({ ...formData, preferredLang: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-navy-950/15 bg-paper px-4 py-3 text-body-sm font-medium text-navy-950 focus:border-cyan-500 focus:bg-white focus:outline-none"
                      >
                        <option value="TR">Türkçe (TR)</option>
                        <option value="EL">Ελληνικά (EL)</option>
                        <option value="BG">Български (BG)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="treatment" className="block text-xs font-bold text-navy-900">
                      {c.contact.treatmentLabel}
                    </label>
                    <select
                      id="treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value as TreatmentId })}
                      className="mt-1.5 w-full rounded-xl border border-navy-950/15 bg-paper px-4 py-3 text-body-sm font-medium text-navy-950 focus:border-cyan-500 focus:bg-white focus:outline-none"
                    >
                      {treatments.map((t) => (
                        <option key={t.id} value={t.id}>
                          {c.treatments.items[t.id]?.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-navy-900">
                      {c.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={c.contact.messagePlaceholder}
                      className="mt-1.5 w-full rounded-xl border border-navy-950/15 bg-paper px-4 py-3 text-body-sm font-medium text-navy-950 focus:border-cyan-500 focus:bg-white focus:outline-none resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className="text-xs text-ink-soft leading-tight">
                      {c.contact.consentLabel}
                    </span>
                  </label>

                  <Button
                    type="submit"
                    variant="whatsapp"
                    fullWidth
                    size="lg"
                    icon={<WhatsAppIcon className="h-5 w-5" aria-hidden />}
                    className="mt-2"
                  >
                    {c.contact.submitButton}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Responsive Map Embed */}
        <Reveal delay={150} className="mt-12">
          <div className="overflow-hidden rounded-panel border border-navy-950/10 bg-white shadow-card">
            <div className="p-4 bg-navy-950 text-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-body-sm font-bold">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Novadent Clinics Edirne Google Harita Konumu</span>
              </div>
              <a
                href={maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1 px-1 text-xs font-bold text-cyan-400 hover:text-cyan-300"
              >
                <span>{c.contact.openInMaps}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="relative aspect-[16/9] md:aspect-[21/8] w-full min-h-[300px]">
              {mapLoaded ? (
                <iframe
                  title={c.a11y.mapTitle}
                  src={maps.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-navy-50 p-6 text-center">
                  <div className="max-w-sm">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white text-cyan-700 shadow-card">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="mt-4 text-body-sm font-semibold text-navy-950">
                      {c.contact.mapDesc}
                    </p>
                    <Button
                      type="button"
                      variant="navy"
                      size="sm"
                      data-testid="map-load"
                      onClick={() => setMapLoaded(true)}
                      className="mt-4"
                      icon={<Navigation className="h-4 w-4" aria-hidden />}
                    >
                      {c.contact.mapLoadCta}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
