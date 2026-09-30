import { motion, type Variants } from 'framer-motion';
import { SERVICES, SECTIONS, type ServiceItem } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

const accentMap = {
  primary: {
    iconBg: 'bg-brand-primary/10 text-brand-primary',
    border: 'group-hover:border-brand-primary/30',
    gradient: 'from-brand-primary/10 to-transparent',
    bar: 'bg-brand-primary',
    shadow: 'group-hover:shadow-[0_0_30px_rgba(79,124,255,0.2)]',
  },
  secondary: {
    iconBg: 'bg-brand-secondary/10 text-brand-secondary',
    border: 'group-hover:border-brand-secondary/30',
    gradient: 'from-brand-secondary/10 to-transparent',
    bar: 'bg-brand-secondary',
    shadow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
  },
  violet: {
    iconBg: 'bg-brand-violet/10 text-brand-violet',
    border: 'group-hover:border-brand-violet/30',
    gradient: 'from-brand-violet/10 to-transparent',
    bar: 'bg-brand-violet',
    shadow: 'group-hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]',
  },
};

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const accent = accentMap[service.accent];
  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={service.span ?? ''}
    >
      <TiltCard className="h-full">
        <div
          className={`group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface p-8 transition-all duration-300 ${accent.border} ${accent.shadow}`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          />

          <div className="relative">
            <div
              className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accent.iconBg} transition-colors duration-300`}
            >
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-text-heading">
              {service.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-body">
              {service.description}
            </p>
          </div>

          <div
            className={`absolute bottom-0 left-0 h-0.5 w-0 ${accent.bar} transition-all duration-500 group-hover:w-full`}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge={SECTIONS.services.badge}
          heading={SECTIONS.services.heading}
          subheading={SECTIONS.services.subheading}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
