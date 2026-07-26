"use client";

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { shortHours } from "@/lib/hours";
import { trackEvent } from "@/lib/analytics";

export function TrustHighlights() {
  const { c } = useLanguage();

  const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(c.whatsAppDefaultMessage)}`;

  const cards = [
    {
      icon: Phone,
      title: c.quickActions.callTitle,
      desc: business.phone.display,
      href: business.phone.telLink,
      target: undefined,
      color: "text-navy-800 bg-navy-50 border-navy-100 hover:border-navy-300",
      iconColor: "text-navy-800",
      event: () => trackEvent("quick_action_click", { action: "phone" }),
    },
    {
      icon: MessageCircle,
      title: c.quickActions.whatsAppTitle,
      desc: c.quickActions.whatsAppDesc,
      href: whatsAppUrl,
      target: "_blank",
      color: "text-[#1da851] bg-emerald-50 border-emerald-100 hover:border-emerald-300",
      iconColor: "text-[#25D366]",
      event: () => trackEvent("quick_action_click", { action: "whatsapp" }),
    },
    {
      icon: MapPin,
      title: c.quickActions.directionsTitle,
      desc: "Fatih Mah. Tahsin Şipka Cad. Edirne",
      href: business.maps.directionsUrl,
      target: "_blank",
      color: "text-cyan-700 bg-cyan-50 border-cyan-100 hover:border-cyan-300",
      iconColor: "text-cyan-600",
      event: () => trackEvent("quick_action_click", { action: "directions" }),
    },
    {
      icon: Clock,
      title: c.quickActions.hoursTitle,
      desc: shortHours(c),
      href: "#iletisim",
      target: undefined,
      color: "text-slate-800 bg-slate-50 border-slate-200 hover:border-slate-300",
      iconColor: "text-slate-700",
      event: () => trackEvent("quick_action_click", { action: "hours" }),
    },
  ];

  return (
    <section className="border-b border-navy-950/10 bg-white py-8">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.title}
                delay={index * 60}
              >
                <a
                  href={card.href}
                  target={card.target}
                  rel={card.target ? "noopener noreferrer" : undefined}
                  onClick={card.event}
                  className={`group flex min-h-[100px] flex-col justify-between rounded-card border p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card ${card.color}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm font-bold tracking-tight text-navy-950">
                      {card.title}
                    </span>
                    <Icon className={`h-5 w-5 ${card.iconColor}`} aria-hidden />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-ink-soft line-clamp-2">
                    {card.desc}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
