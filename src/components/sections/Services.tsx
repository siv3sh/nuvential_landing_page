import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, SECTIONS, type ServiceItem } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
  }),
};

const accentMap: Record<ServiceItem['accent'], { icon: string; wash: string; hover: string }> = {
  primary: {
    icon: 'bg-indigo-50 text-brand-primary ring-indigo-100',
    wash: 'from-indigo-100/70',
    hover: 'group-hover:border-indigo-200',
  },
  secondary: {
    icon: 'bg-teal-50 text-brand-secondary ring-teal-100',
    wash: 'from-teal-100/70',
    hover: 'group-hover:border-teal-200',
  },
  violet: {
    icon: 'bg-violet-50 text-brand-violet ring-violet-100',
    wash: 'from-violet-100/70',
    hover: 'group-hover:border-violet-200',
  },
  coral: {
    icon: 'bg-orange-50 text-brand-coral ring-orange-100',
    wash: 'from-orange-100/70',
    hover: 'group-hover:border-orange-200',
  },
  amber: {
    icon: 'bg-amber-50 text-amber-600 ring-amber-100',
    wash: 'from-amber-100/70',
    hover: 'group-hover:border-amber-200',
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
      <TiltCard className="h-full" maxTilt={4}>
        <div
          className={`group relative h-full overflow-hidden rounded-3xl border border-border-subtle bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lifted sm:p-8 ${accent.hover}`}
        >
          <div
            className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accent.wash} to-transparent blur-2xl transition-opacity duration-500 ${
              service.span ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          />

          <div className="relative flex items-start justify-between">
            <div
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ring-1 sm:h-12 sm:w-12 ${accent.icon}`}
            >
              <Icon size={22} />
            </div>
            <ArrowUpRight
              size={20}
              className="hidden text-text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block"
            />
          </div>

          <div className="relative mt-5 sm:mt-6">
            <h3 className="text-lg font-semibold text-text-heading sm:text-xl">{service.title}</h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-text-body sm:mt-3 sm:text-base">
              {service.description}
            </p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge={SECTIONS.services.badge}
          heading={SECTIONS.services.heading}
          subheading={SECTIONS.services.subheading}
        />

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
