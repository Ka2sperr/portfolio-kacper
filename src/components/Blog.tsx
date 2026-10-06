"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 border-y border-border bg-card/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Blog
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ostatnie realizacje i wpisy
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <motion.a
            href="#" // placeholder — link do wpisu / case study
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group flex flex-col gap-6 rounded-2xl border border-border bg-background p-8 sm:flex-row sm:items-center"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
              <MapPin size={32} strokeWidth={1.5} className="text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold tracking-tight">
                Strona dla przewodnika po Gdańsku
              </h3>
              <p className="mt-2 text-muted">
                Case study realizacji strony dla lokalnego przewodnika — od
                projektu po wdrożenie.
              </p>
            </div>
            <span className="flex items-center gap-2 font-semibold text-accent">
              Czytaj więcej
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
