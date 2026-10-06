"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import {
  Database,
  Gauge,
  Globe,
  LifeBuoy,
  MonitorCog,
  ShoppingBag,
  Smartphone,
  SquareCode,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(value)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const specialties: { label: string; icon: LucideIcon }[] = [
  { label: "Stron Internetowych", icon: Globe },
  { label: "Sklepów E-commerce", icon: ShoppingBag },
  { label: "Aplikacji Webowych", icon: SquareCode },
  { label: "Aplikacji Mobilnych", icon: Smartphone },
];

const services: { label: string; icon: LucideIcon }[] = [
  { label: "Optymalizacja", icon: Gauge },
  { label: "Administracja WWW", icon: MonitorCog },
  { label: "Administracja Baz Danych", icon: Database },
  { label: "Wsparcie Techniczne", icon: LifeBuoy },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="font-display text-8xl font-bold leading-none text-accent sm:text-9xl">
              <Counter to={3} suffix="+" />
            </div>
            <p className="mt-4 max-w-xs text-lg font-light text-muted">
              lata doświadczenia w tworzeniu rozwiązań dla firm
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Posiadam ponad 3 lata doświadczenia w tworzeniu
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {specialties.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 rounded-xl border border-border bg-background p-5"
                  >
                    <item.icon size={22} className="shrink-0 text-accent" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-12">
              <h3 className="text-lg font-semibold text-muted">
                Zajmuję się również
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {services.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    <item.icon size={16} />
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
