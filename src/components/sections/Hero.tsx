import { type CSSProperties, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MessageSquareText, Phone } from 'lucide-react';
import { HERO, PROJECTS } from '@/data/content';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Hero3DWrapper } from '@/components/three/Hero3DWrapper';
import { PRODUCT_THEME } from '@/components/ui/productTheme';

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const word: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

function FloatingCard({
  children,
  className,
  delay,
  drift = 10,
}: {
  children: ReactNode;
  className: string;
  delay: number;
  drift?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={`absolute z-10 ${className}`}
    >
      <div
        style={{ '--drift': `${drift}px`, animationDelay: `${delay * 2}s` } as CSSProperties}
        className="animate-float rounded-2xl border border-white/80 bg-white/95 p-3 shadow-float will-change-transform sm:p-3.5 lg:bg-white/90 lg:backdrop-blur-md"
      >
        {children}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:min-h-[100svh] lg:pt-28"
    >
      <div
        className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border-subtle bg-white py-1.5 pl-2 pr-4 shadow-soft"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {PROJECTS.length} live
            </span>
            <span className="font-display text-sm font-medium text-text-heading">
              {HERO.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-7 text-hero font-semibold text-text-heading"
          >
            {HERO.headline.map((line, lineIdx) => (
              <span key={lineIdx} className="block overflow-hidden pb-2 pr-2">
                <motion.span variants={word} className="inline-block">
                  {lineIdx === HERO.headline.length - 1 ? (
                    <span className="accent-serif gradient-text">{line}</span>
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
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-body text-balance"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#contact" className="w-full sm:w-auto">
              {HERO.primaryCta}
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost" className="w-full sm:w-auto">
              {HERO.secondaryCta}
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="mt-8 sm:mt-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
              {HERO.liveLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PROJECTS.map((project) => {
                const theme = PRODUCT_THEME[project.kind];
                return (
                  <a
                    key={project.kind}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white py-1.5 pl-1.5 pr-3.5 text-sm font-medium text-text-heading shadow-soft transition-all hover:-translate-y-0.5 hover:border-border-strong"
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white ${theme.solid}`}
                    >
                      {project.name.charAt(0)}
                    </span>
                    {project.name}
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-heading"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="relative mx-auto h-[360px] w-full max-w-md sm:h-[440px] sm:max-w-xl lg:h-[560px] lg:max-w-none"
        >
          <div
            className="absolute inset-[12%] -z-10 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 35% 35%, #C7D2FE 0%, #A7F3D0 45%, #FED7CC 75%, transparent 80%)',
            }}
            aria-hidden="true"
          />
          <Hero3DWrapper className="h-full w-full" />

          <FloatingCard className="left-0 top-[4%] sm:top-[8%] lg:top-[10%]" delay={0.45}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 font-display text-sm font-bold text-product-tally">
                ₹
              </span>
              <div>
                <p className="text-[11px] font-medium text-text-muted">HDFC · UPI · Food</p>
                <p className="font-display text-sm font-semibold text-text-heading">Swiggy</p>
              </div>
              <span className="ml-3 font-display text-sm font-bold text-rose-600">−₹428</span>
            </div>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-product-tally">
              Parsed by Tally
            </p>
          </FloatingCard>

          <FloatingCard className="right-0 top-[38%] lg:-right-2 lg:top-[42%]" delay={0.55} drift={14}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-bold text-product-leadscore">
                AS
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-text-heading">Aarav Sharma</p>
                <p className="text-[11px] text-text-muted">Referral · Mumbai</p>
              </div>
              <div className="ml-2 text-right">
                <p className="font-display text-lg font-bold leading-none text-text-heading">96</p>
                <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  High
                </span>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-1.5">
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                <MessageSquareText size={11} /> WhatsApp
              </span>
              <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-product-leadscore">
                <Phone size={11} /> Call today
              </span>
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-[3%] left-[4%] sm:bottom-[6%] sm:left-[12%]" delay={0.65} drift={8}>
            <div className="flex items-center gap-3">
              <img
                src="/work/store/tripod-lamp.webp"
                alt="Tripod pleated table lamp"
                width={48}
                height={48}
                decoding="async"
                className="h-12 w-12 rounded-xl object-cover"
              />
              <div>
                <p className="text-[11px] font-medium text-product-store">Lighting</p>
                <p className="font-display text-sm font-semibold text-text-heading">
                  Tripod Pleated Lamp
                </p>
                <p className="text-xs font-semibold text-text-body">₹547</p>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-text-heading/15 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-brand-primary"
          />
        </div>
      </motion.a>
    </section>
  );
}
