import { motion } from 'framer-motion';
import { WHY_CARDS, WHY_SECTION, COUNTERS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Counter } from '@/components/ui/Counter';

const EASE = [0.22, 1, 0.36, 1] as const;

export function WhyNuvential() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          heading={WHY_SECTION.heading}
          subheading={WHY_SECTION.subheading}
        />

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="group glass rounded-2xl p-6 transition-all duration-300 hover:border-brand-primary/20 hover:bg-white/[0.07]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 text-brand-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-text-heading">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 grid gap-6 rounded-2xl border border-border-subtle bg-bg-surface/50 p-8 sm:grid-cols-3 lg:p-12"
        >
          {COUNTERS.map((counter) => (
            <div key={counter.label} className="text-center">
              <div className="text-4xl font-bold text-text-heading lg:text-5xl">
                <span className="gradient-text">
                  <Counter value={counter.value} suffix={counter.suffix} />
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-text-body">
                {counter.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
