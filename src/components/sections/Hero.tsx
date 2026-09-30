import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO } from '@/data/content';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Hero3DWrapper } from '@/components/three/Hero3DWrapper';

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const word: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: text */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/5 px-4 py-1.5"
          >
            <Sparkles size={14} className="text-brand-secondary" />
            <span className="font-display text-sm font-medium text-text-body">
              {HERO.badge}
            </span>
          </motion.div>

          {/* Headline with word-by-word reveal */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-6 text-hero font-bold leading-[1.05] text-text-heading"
          >
            {HERO.headline.map((line, lineIdx) => (
              <span key={lineIdx} className="block overflow-hidden">
                <motion.span variants={word} className="inline-block">
                  {lineIdx === 2 ? (
                    <span className="gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-body text-balance"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              {HERO.primaryCta}
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              {HERO.secondaryCta}
            </MagneticButton>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="mt-6 text-sm text-text-muted"
          >
            {HERO.trustLine}
          </motion.p>
        </div>

        {/* Right: 3D element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="order-1 h-[300px] w-full lg:order-2 lg:h-[500px]"
        >
          <Hero3DWrapper className="h-full w-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-text-muted/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-brand-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}
