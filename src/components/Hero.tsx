"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";
import { TechMarquee } from "@/components/TechMarquee";
import { site } from "@/lib/site";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16">
      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
        >
          Web Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Cześć! <br />
          Jestem <span className="text-accent">Kacper</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted sm:text-xl"
        >
          Projektuję i buduję{" "}
          <span className="font-medium text-foreground">responsywne</span> oraz{" "}
          <span className="font-medium text-foreground">estetyczne</span> strony
          internetowe, aplikacje webowe i mobilne, które wyróżnią Twoją firmę w
          sieci.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={site.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-contrast transition-transform hover:scale-105"
          >
            <Calendar size={18} className="transition-transform group-hover:-rotate-12" />
            Umów rozmowę!
          </a>
          <a
            href="#portfolio"
            className="group flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Zobacz portfolio
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pb-10"
      >
        <TechMarquee />
      </motion.div>
    </section>
  );
}
