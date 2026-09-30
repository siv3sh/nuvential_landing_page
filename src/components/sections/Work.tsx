import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, SECTIONS, type ProjectItem } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectMockup } from '@/components/ui/ProjectMockup';

const EASE = [0.22, 1, 0.36, 1] as const;

const accentGlow = {
  primary: 'group-hover:shadow-[0_0_50px_rgba(79,124,255,0.2)]',
  secondary: 'group-hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]',
  violet: 'group-hover:shadow-[0_0_50px_rgba(167,139,250,0.2)]',
};

const accentText = {
  primary: 'text-brand-primary',
  secondary: 'text-brand-secondary',
  violet: 'text-brand-violet',
};

const accentTag = {
  primary: 'border-brand-primary/20 bg-brand-primary/5 text-brand-primary',
  secondary: 'border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary',
  violet: 'border-brand-violet/20 bg-brand-violet/5 text-brand-violet',
};

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`group grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
        isReversed ? 'lg:[&>*:first-child:order-2]' : ''
      }`}
    >
      {/* Text */}
      <div>
        <span className={`font-display text-sm font-medium ${accentText[project.accent]}`}>
          {project.tagline}
        </span>
        <h3 className="mt-3 text-3xl font-bold text-text-heading lg:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-text-body">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 text-sm font-medium ${accentTag[project.accent]}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="mt-8 inline-flex items-center gap-2 font-display text-base font-medium text-text-heading transition-colors hover:text-brand-secondary"
        >
          {project.linkLabel}
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
          />
        </a>
      </div>

      {/* Mockup */}
      <div
        className={`group/mockup relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface p-6 transition-all duration-500 ${accentGlow[project.accent]}`}
      >
        <ProjectMockup type={project.mockup} accent={project.accent} />
      </div>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge={SECTIONS.work.badge}
          heading={SECTIONS.work.heading}
          subheading={SECTIONS.work.subheading}
        />

        <div className="mt-20 flex flex-col gap-20 lg:gap-28">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
