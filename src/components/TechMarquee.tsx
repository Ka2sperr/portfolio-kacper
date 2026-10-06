const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "WordPress",
  "Shopify",
  "SwiftUI",
  "React Native",
  "Node.js",
  "Python",
  "Supabase",
  "Firebase",
  "Framer",
  "WooCommerce",
  "Figma",
];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-lg font-medium text-muted"
        >
          {tech}
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}
