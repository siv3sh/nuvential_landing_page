import { TECH_MARQUEE } from '@/data/content';
import { Marquee } from '@/components/ui/Marquee';

export function TrustStrip() {
  return (
    <section className="border-y border-border-subtle bg-white/60 py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
        Technologies we build with
      </p>
      <Marquee className="fade-edges-x">
        {TECH_MARQUEE.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2.5 rounded-full border border-border-subtle bg-white px-5 py-2.5 shadow-soft"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
            <span className="whitespace-nowrap font-display text-base font-medium text-text-heading">
              {tech}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
