"use client";

import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const contactLinks = [
  { label: "LinkedIn", href: site.linkedin, icon: Globe, external: true },
  { label: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
];

export function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 border-t border-border bg-card/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Gotowy na <span className="text-accent">Współpracę?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-muted">
            Czy Twoja firma jest przygotowana na zdobycie popularności w
            internecie?
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={site.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-contrast transition-transform hover:scale-105"
          >
            Zamów bezpłatną konsultację
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <link.icon size={18} />
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
