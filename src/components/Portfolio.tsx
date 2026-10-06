"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  Hourglass,
  Scissors,
  ShoppingCart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: LucideIcon;
  linkLabel?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "KonaFit",
    description:
      "Aplikacja fitness na iOS (SwiftUI + Supabase) z AI rozpoznawaniem jedzenia, skanerem kodów kreskowych oraz inteligentnym asystentem AI opartym o technologię RAG (Retrieval-Augmented Generation) — łączącym wiedzę dietetyczną i trenerską z personalizowanymi rekomendacjami w czasie rzeczywistym. Jestem CEO i founderem, odpowiadam za produkt, technologię i rozwój firmy.",
    tags: ["SwiftUI", "Supabase", "AI", "RAG"],
    href: "#", // placeholder — link do landing page / App Store
    icon: Dumbbell,
    linkLabel: "Zobacz projekt",
    featured: true,
  },
  {
    title: "Strona dla Barber shopu",
    description:
      "Nowoczesna strona wizytówka z systemem rezerwacji dla lokalnego barber shopu.",
    tags: ["WordPress", "HTML", "CSS"],
    href: "#", // placeholder
    icon: Scissors,
  },
  {
    title: "Redesign sklepu e-commerce",
    description:
      "Kompleksowa poprawa UX — szybszy checkout, czytelniejsza nawigacja i wyższa konwersja.",
    tags: ["E-commerce", "UX", "Checkout"],
    href: "#", // placeholder
    icon: ShoppingCart,
  },
  {
    title: "Coming Soon",
    description:
      "Kolejny case study w przygotowaniu — aplikacja bankowa. Szczegóły już wkrótce.",
    tags: ["W przygotowaniu"],
    href: "#",
    icon: Hourglass,
    linkLabel: "Wkrótce",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;

  return (
    <Reveal
      delay={index * 0.1}
      className={project.featured ? "md:col-span-2" : ""}
    >
      <motion.a
        href={project.href}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border ${
          project.featured
            ? "border-accent/40 bg-accent/5"
            : "border-border bg-card"
        }`}
      >
        <div
          className={`relative flex items-center justify-center overflow-hidden ${
            project.featured ? "h-56 sm:h-72" : "h-48"
          } border-b border-border bg-gradient-to-br from-border/40 to-transparent`}
        >
          {/* Placeholder na screenshot projektu */}
          <Icon
            size={project.featured ? 64 : 48}
            strokeWidth={1.25}
            className="text-muted transition-transform duration-500 group-hover:scale-125 group-hover:text-accent"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-bold tracking-tight">
              {project.title}
              {project.featured && (
                <span className="ml-3 rounded-full bg-accent px-3 py-1 align-middle text-xs font-semibold text-accent-contrast">
                  CEO &amp; Founder
                </span>
              )}
            </h3>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
            <span className="ml-auto text-sm font-semibold text-accent">
              {project.linkLabel ?? "Sprawdź"}
            </span>
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Portfolio
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Wybrane projekty
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
