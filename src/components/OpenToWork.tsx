"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function OpenToWork() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="border-y border-accent/30 bg-accent/5">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                Otwarty na nowe wyzwania
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Poza pracą z klientami jestem też otwarty na rolę Developera /
              Fullstack Developera w zespole — jeśli szukasz kogoś, kto łączy
              web dev, mobile i doświadczenie w budowaniu produktu od zera
              (patrz: <span className="font-medium text-foreground">KonaFit</span>),
              odezwij się.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <motion.a
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              animate={reducedMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast"
            >
              <FileText size={16} />
              Zobacz CV
            </motion.a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Send size={16} />
              Napisz do mnie
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
