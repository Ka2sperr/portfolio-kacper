"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const skillGroups: { category: string; skills: string[] }[] = [
  {
    category: "Front-End Development",
    skills: ["HTML", "CSS", "React.js", "React Native"],
  },
  {
    category: "Back-End & Bazy Danych",
    skills: [
      "Node.js",
      "Python",
      "C++",
      "C#",
      "SQL",
      "Supabase",
      "Firebase",
      "pgvector (RAG / wektorowe bazy danych)",
    ],
  },
  {
    category: "AI & Automatyzacja",
    skills: [
      "Integracje AI (OpenAI API)",
      "Systemy RAG",
      "Automatyzacja procesów",
    ],
  },
  {
    category: "CMS & E-commerce",
    skills: ["WordPress", "Framer", "Shopify", "WooCommerce"],
  },
  {
    category: "Aplikacje Mobilne",
    skills: ["Swift / SwiftUI", "React Native", "Kotlin"],
  },
  {
    category: "Administracja & Wsparcie",
    skills: [
      "Administracja serwerami i hostingiem",
      "Konfiguracja baz danych",
      "Wsparcie techniczne i utrzymanie",
    ],
  },
  {
    category: "Inne",
    skills: ["Consulting", "Figma", "Meta Ads"],
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Umiejętności
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Technologie, z którymi pracuję
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.08}>
              <h3 className="border-b border-border pb-3 font-display text-lg font-bold">
                {group.category}
              </h3>
              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={tagVariants}
                    className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
