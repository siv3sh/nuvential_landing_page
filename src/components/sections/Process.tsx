import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { PROCESS_STEPS, SECTIONS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const STEP_TONES = [
  'bg-indigo-50 text-brand-primary ring-indigo-100',
  'bg-violet-50 text-brand-violet ring-violet-100',
  'bg-teal-50 text-brand-secondary ring-teal-100',
  'bg-orange-50 text-brand-coral ring-orange-100',
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 80%'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge={SECTIONS.process.badge}
          heading={SECTIONS.process.heading}
          subheading={SECTIONS.process.subheading}
        />

        <div ref={sectionRef} className="relative mt-12 sm:mt-20 lg:mt-24">
          {/* Scroll-drawn vertical line (mobile + desktop left-aligned) */}
          <div
            className="absolute left-2.5 top-0 h-full w-0.5 bg-border-subtle sm:left-6 lg:left-1/2"
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-full origin-top"
              style={{
                scaleY: prefersReduced ? 1 : lineScale,
                background: 'linear-gradient(180deg, #4F46E5, #8B5CF6, #0D9488, #F2705B)',
              }}
            />
          </div>

          <div className="space-y-5 sm:space-y-12 lg:space-y-0">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-6 lg:gap-0 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className={`ml-9 flex-1 sm:ml-14 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                      isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                    }`}
                  >
                    <div className="rounded-3xl border border-border-subtle bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted sm:p-6">
                      <div
                        className={`flex items-center gap-3 ${
                          isLeft ? 'lg:flex-row-reverse lg:justify-start' : ''
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ${STEP_TONES[i % STEP_TONES.length]}`}
                        >
                          <Icon size={20} />
                        </div>
                        <span className="font-display text-3xl font-bold text-text-heading/10">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-text-body">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Node */}
                  <div className="absolute left-2.5 top-6 z-10 -translate-x-[9px] sm:left-6 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
                      className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-primary bg-white shadow-soft"
                    >
                      <div className="h-2 w-2 rounded-full bg-brand-primary" />
                    </motion.div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="hidden flex-1 lg:block lg:w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
