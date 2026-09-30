import { TECH_MARQUEE } from '@/data/content';
import { Marquee } from '@/components/ui/Marquee';

export function TrustStrip() {
  return (
    <section className="border-y border-border-subtle py-10">
      <p className="mb-6 text-center text-sm font-medium text-text-muted">
        Technologies we build with
      </p>
      <Marquee>
        {TECH_MARQUEE.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 rounded-xl border border-border-subtle bg-white/5 px-5 py-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
            <span className="font-display text-base font-medium text-text-body whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
