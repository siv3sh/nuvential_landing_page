import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS, SECTIONS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge={SECTIONS.process.badge}
          heading={SECTIONS.process.heading}
          subheading={SECTIONS.process.subheading}
        />

        <div ref={sectionRef} className="relative mt-20 lg:mt-24">
          {/* Scroll-drawn vertical line (mobile + desktop left-aligned) */}
          <div
            className="absolute left-6 top-0 h-full w-px bg-white/5 lg:left-1/2"
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="h-full w-full origin-top"
              style={{
                background: 'linear-gradient(180deg, #4F7CFF, #22D3EE, #A78BFA)',
              }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
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
                    className={`ml-14 flex-1 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                      isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02]">
                      <div
                        className={`flex items-center gap-3 ${
                          isLeft ? 'lg:justify-end' : ''
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                          <Icon size={20} />
                        </div>
                        <span className="font-display text-3xl font-bold text-white/10">
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
                  <div className="absolute left-6 top-6 z-10 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
                      className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-primary bg-bg-base"
                    >
                      <div className="h-2 w-2 rounded-full bg-brand-secondary" />
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
