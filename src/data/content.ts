import {
  Boxes,
  Brain,
  Smartphone,
  Palette,
  Server,
  Rocket,
  Lightbulb,
  PenTool,
  Code2,
  ShieldCheck,
  Sparkles,
  Layers,
  MessageSquare,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

export const HERO = {
  badge: 'Product Engineering Studio',
  headline: ['We build the', 'products you', 'imagine.'],
  subheadline:
    'From idea to launch, Nuvential designs and engineers AI-powered software products for ambitious businesses.',
  primaryCta: 'Start a Project',
  secondaryCta: 'View Our Work',
  trustLine: 'Product engineering for startups & businesses',
};

export const TECH_MARQUEE = [
  'React',
  'Next.js',
  'Python',
  'FastAPI',
  'MongoDB',
  'Supabase',
  'Azure',
  'LangChain',
  'OpenAI',
] as const;

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: 'primary' | 'secondary' | 'violet';
  span?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Boxes,
    title: 'Custom SaaS Development',
    description:
      'Multi-tenant SaaS platforms built for scale — billing, auth, dashboards, and the full product surface.',
    accent: 'primary',
    span: 'lg:col-span-2',
  },
  {
    icon: Brain,
    title: 'AI & LLM Applications',
    description: 'RAG pipelines, autonomous agents, and intelligent automation that make your product smarter.',
    accent: 'secondary',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    description: 'Responsive web apps and cross-platform mobile experiences with a native-grade feel.',
    accent: 'violet',
  },
  {
    icon: Palette,
    title: 'UI/UX & Motion Design',
    description: 'Interfaces that feel alive — interaction design, prototyping, and motion that builds trust.',
    accent: 'secondary',
  },
  {
    icon: Server,
    title: 'Backend & API Engineering',
    description: 'Robust, well-documented APIs and data architectures that won\'t buckle under growth.',
    accent: 'primary',
  },
  {
    icon: Rocket,
    title: 'MVP to Launch Support',
    description: 'From first prototype to production launch — we stay with you through every iteration.',
    accent: 'violet',
    span: 'lg:col-span-2',
  },
];

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  accent: 'primary' | 'secondary' | 'violet';
  mockup: 'finance' | 'leadscore' | 'store';
}

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Money Track',
    tagline: 'Personal finance tracker for Indian users',
    description:
      'Track income, expenses, and spending habits in one clean dashboard. Built with a focus on simplicity and actionable insights.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
    linkLabel: 'Learn more',
    accent: 'primary',
    mockup: 'finance',
  },
  {
    name: 'LeadScore',
    tagline: 'AI-powered lead prioritization',
    description:
      'Upload your leads and instantly see who is most likely to buy in the next 30 days. ML-driven scoring that sharpens your sales focus.',
    tags: ['AI/ML', 'SaaS', 'Analytics'],
    link: '#',
    linkLabel: 'Learn more',
    accent: 'secondary',
    mockup: 'leadscore',
  },
  {
    name: 'Nuvential Store',
    tagline: 'store.nuvential.com',
    description:
      'Our digital products store — templates, UI kits, and developer tools crafted by the Nuvential team.',
    tags: ['E-commerce', 'Digital Products'],
    link: 'https://store.nuvential.com',
    linkLabel: 'Visit store',
    accent: 'violet',
    mockup: 'store',
  },
];

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discover',
    description: 'We dig into your goals, users, and constraints to define the right product scope.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'Wireframes, prototypes, and a design system that makes the product feel real.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description: 'Engineering with modern stacks, clean architecture, and weekly demos you can see.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We ship to production and stay on for maintenance, iteration, and growth.',
  },
];

export interface WhyCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_CARDS: WhyCard[] = [
  {
    icon: Layers,
    title: 'Idea to launch, one team',
    description: 'No hand-offs between agencies. The team that designs your product builds it.',
  },
  {
    icon: Brain,
    title: 'AI-first engineering',
    description: 'We build with AI at the core — not bolted on after the fact.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent communication',
    description: 'Clear timelines, honest estimates, and weekly progress you can verify.',
  },
  {
    icon: TrendingUp,
    title: 'Built to scale',
    description: 'Architecture decisions made for your first 100K users, not just your first 10.',
  },
];

export interface CounterItem {
  label: string;
  value: number;
  suffix: string;
}

export const COUNTERS: CounterItem[] = [
  { label: 'Products Shipped', value: 3, suffix: '' },
  { label: 'Years of Experience', value: 5, suffix: '+' },
  { label: 'Avg. Time to MVP', value: 8, suffix: ' wks' },
];

export const WHY_SECTION = {
  heading: 'Why Nuvential',
  subheading: 'We earn your trust through work, not promises.',
};

export const CONTACT = {
  heading: 'Have an idea?',
  subheading: "Let's build it.",
  description: 'Tell us about your project. We\'ll get back to you within one business day.',
  email: 'hello@nuvential.com',
  projectTypes: [
    'SaaS Platform',
    'AI / LLM Application',
    'Web App',
    'Mobile App',
    'UI/UX Design',
    'Other',
  ],
};

export const FOOTER = {
  description:
    'Nuvential is a product-engineering studio building AI-powered software products for ambitious businesses.',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'GitHub', href: '#', icon: 'github' },
    { label: 'X', href: '#', icon: 'x' },
  ],
  copyright: '© 2026 Nuvential. All rights reserved.',
};

export const SECTIONS = {
  services: {
    badge: 'What we do',
    heading: 'Services built for product-minded teams',
    subheading: 'Everything you need to go from a blank page to a launched product.',
  },
  work: {
    badge: 'Our Work',
    heading: 'Products we\'ve built',
    subheading: 'A selection of software products designed, engineered, and shipped by our team.',
  },
  process: {
    badge: 'How we work',
    heading: 'A process you can follow',
    subheading: 'Four phases, each with clear deliverables and visible progress.',
  },
} as const;

export { ShieldCheck, Sparkles };
