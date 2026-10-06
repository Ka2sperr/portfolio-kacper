"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "Jak długo trwa stworzenie strony internetowej?",
    answer: "Średni czas realizacji to do 7 dni roboczych.",
  },
  {
    question: "Czy oferujesz wsparcie techniczne po zakończeniu projektu?",
    answer:
      "Tak — oferuję wsparcie techniczne oraz możliwość dalszej współpracy w ramach umowy serwisowej.",
  },
  {
    question: "Jakich technologii używasz do tworzenia stron?",
    answer:
      "HTML, CSS, JavaScript, React.js, WordPress, Framer i Shopify — dobieram technologię do potrzeb projektu.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.1}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 p-6 text-left"
        >
          <span className="font-display text-lg font-bold">{question}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className={`shrink-0 ${open ? "text-accent" : "text-muted"}`}
          >
            <Plus size={22} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="px-6 pb-6 leading-relaxed text-muted">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Częste pytania
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
