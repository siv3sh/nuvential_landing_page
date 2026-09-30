import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { PROJECTS, SECTIONS, type ProjectItem } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AccentText } from '@/components/ui/AccentText';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { PRODUCT_THEME } from '@/components/ui/productTheme';

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const theme = PRODUCT_THEME[project.kind];
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`group relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br ${theme.panel} p-5 shadow-soft transition-shadow duration-500 hover:shadow-lifted sm:rounded-4xl sm:p-10 lg:p-12`}
    >
      <div
        className="pointer-events-none absolute -bottom-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{
          background: theme.glow,
          [isReversed ? 'left' : 'right']: '-6rem',
        }}
        aria-hidden="true"
      />

      <div
        className={`relative grid grid-cols-1 gap-7 [grid-template-areas:'intro'_'mock'_'details'] sm:gap-9 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-8 ${
          isReversed
            ? "lg:[grid-template-areas:'mock_intro'_'mock_details']"
            : "lg:[grid-template-areas:'intro_mock'_'details_mock']"
        }`}
      >
        <div className="min-w-0 [grid-area:intro] lg:self-end">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-2xl font-display text-base font-bold text-white shadow-soft ${theme.solid}`}
            >
              {project.name.charAt(0)}
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-tight text-text-heading">
                {project.name}
              </p>
              <p className="text-xs font-medium text-text-muted">{project.category}</p>
            </div>
            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-emerald-700 sm:ml-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Live
            </span>
          </div>

          <h3 className="mt-5 text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] text-text-heading text-balance sm:mt-6 sm:text-3xl lg:text-4xl">
            <AccentText text={project.headline} accentClassName={theme.text} />
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-text-body sm:mt-4 sm:text-base lg:text-lg">
            {project.description}
          </p>
        </div>

        <div className="min-w-0 [grid-area:details] lg:self-start">
          <ul className="space-y-2.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-[15px] text-text-heading">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${theme.solid}`}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <dl className="mt-7 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-0 rounded-2xl border border-white bg-white/80 p-3 shadow-soft backdrop-blur-sm sm:p-3.5"
              >
                <dt className="sr-only">{metric.label}</dt>
                <dd className={`font-display text-lg font-bold sm:text-2xl ${theme.text}`}>
                  {metric.value}
                </dd>
                <p className="mt-1 text-[11px] leading-snug text-text-body sm:text-xs">
                  {metric.label}
                </p>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.soft}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group/link mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-text-heading px-5 py-3.5 font-display text-sm font-medium text-white shadow-lifted transition-colors hover:bg-brand-primary sm:mt-8 sm:inline-flex sm:w-auto sm:py-3"
          >
            Visit {project.domain}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>
        </div>

        <motion.div
          whileHover={{ y: -6, rotate: isReversed ? 0.4 : -0.4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="min-w-0 [grid-area:mock] lg:self-center"
        >
          <ProjectMockup kind={project.kind} />
        </motion.div>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={SECTIONS.work.badge}
          heading={SECTIONS.work.heading}
          subheading={SECTIONS.work.subheading}
        />

        <div className="mt-10 flex flex-col gap-5 sm:mt-16 sm:gap-8 lg:mt-20 lg:gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.kind} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
