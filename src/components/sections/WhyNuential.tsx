import { motion } from 'framer-motion';
import { WHY_CARDS, WHY_SECTION, COUNTERS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Counter } from '@/components/ui/Counter';

const EASE = [0.22, 1, 0.36, 1] as const;

const CARD_TONES = [
  'bg-indigo-50 text-brand-primary ring-indigo-100',
  'bg-violet-50 text-brand-violet ring-violet-100',
  'bg-teal-50 text-brand-secondary ring-teal-100',
  'bg-orange-50 text-brand-coral ring-orange-100',
];

export function WhyNuential() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          heading={WHY_SECTION.heading}
          subheading={WHY_SECTION.subheading}
        />

        <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {WHY_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="group flex gap-4 rounded-3xl border border-border-subtle bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted sm:block sm:p-6"
              >
                <div
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-110 sm:mb-5 ${CARD_TONES[i % CARD_TONES.length]}`}
                >
                  <Icon size={21} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-heading sm:text-lg">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-body sm:mt-2">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mt-6 overflow-hidden rounded-3xl bg-text-heading px-4 py-7 sm:mt-10 sm:rounded-4xl sm:p-8 lg:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(circle at 10% 0%, rgba(99,102,241,0.55), transparent 45%), radial-gradient(circle at 90% 100%, rgba(13,148,136,0.5), transparent 45%), radial-gradient(circle at 60% 20%, rgba(242,112,91,0.3), transparent 40%)',
            }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-3 gap-2 sm:gap-8">
            {COUNTERS.map((counter) => (
              <div key={counter.label} className="text-center">
                <div className="whitespace-nowrap font-display text-[1.75rem] font-bold text-white sm:text-5xl lg:text-6xl">
                  <Counter value={counter.value} suffix={counter.suffix} />
                </div>
                <p className="mt-1.5 text-[11px] font-medium leading-snug text-white/70 sm:mt-2 sm:text-sm">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
