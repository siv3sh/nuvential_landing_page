import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code2, Brain } from 'lucide-react';
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
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE },
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

const badgeFloat: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE, delay: 1.4 + i * 0.15 },
  }),
};

function FloatingBadge({
  icon: Icon,
  label,
  sublabel,
  className,
  delay,
  accent,
}: {
  icon: typeof Zap;
  label: string;
  sublabel: string;
  className: string;
  delay: number;
  accent: string;
}) {
  return (
    <motion.div
      custom={delay}
      variants={badgeFloat}
      initial="hidden"
      animate="visible"
      className={`absolute z-10 hidden lg:block ${className}`}
    >
      <div className="glass animate-float-slow rounded-2xl px-4 py-3 shadow-lg" style={{ animationDelay: `${delay}s` }}>
        <div className="flex items-center gap-3">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent}`}>
            <Icon size={18} />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-text-heading">{label}</p>
            <p className="text-xs text-text-muted">{sublabel}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Grid background with radial fade */}
      <div className="pointer-events-none absolute inset-0 hero-grid-bg hero-radial-fade" />

      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.015]" />

      {/* Hero-specific glow behind 3D */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 lg:block">
        <div
          className="h-full w-full rounded-full opacity-30 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(79,124,255,0.6) 0%, rgba(34,211,238,0.3) 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left: text */}
        <div className="order-2 lg:order-1 lg:col-span-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-secondary" />
            </span>
            <span className="font-display text-sm font-medium text-text-body">
              {HERO.badge}
            </span>
          </motion.div>

          {/* Headline with word-by-word reveal */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-7 text-hero font-bold leading-[1.05] text-text-heading"
          >
            {HERO.headline.map((line, lineIdx) => (
              <span key={lineIdx} className="block overflow-hidden pb-1">
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

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-text-body text-balance"
          >
            {HERO.subheadline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              {HERO.primaryCta}
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              {HERO.secondaryCta}
            </MagneticButton>
          </motion.div>

          {/* Trust line with separator */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-brand-primary/50 to-transparent" />
            <p className="text-sm font-medium text-text-muted">
              {HERO.trustLine}
            </p>
          </motion.div>
        </div>

        {/* Right: 3D element with floating badges */}
        <div className="relative order-1 h-[280px] w-full sm:h-[360px] lg:order-2 lg:col-span-6 lg:h-[560px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            className="h-full w-full"
          >
            <Hero3DWrapper className="h-full w-full" />
          </motion.div>

          {/* Floating accent badges */}
          <FloatingBadge
            icon={Brain}
            label="AI-First"
            sublabel="LLM & RAG"
            className="left-[-4%] top-[18%]"
            delay={0}
            accent="bg-brand-secondary/15 text-brand-secondary"
          />
          <FloatingBadge
            icon={Code2}
            label="Full-Stack"
            sublabel="React · Python"
            className="right-[-2%] top-[55%]"
            delay={1}
            accent="bg-brand-primary/15 text-brand-primary"
          />
          <FloatingBadge
            icon={Zap}
            label="Fast Delivery"
            sublabel="8 wks to MVP"
            className="left-[2%] bottom-[8%]"
            delay={2}
            accent="bg-brand-violet/15 text-brand-violet"
          />
        </div>
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
