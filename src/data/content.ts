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
    'From idea to launch, Nuential designs and engineers AI-powered software products for ambitious businesses.',
  primaryCta: 'Start a Project',
  secondaryCta: 'View Our Work',
  liveLabel: 'Live products we built',
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
  accent: 'primary' | 'secondary' | 'violet' | 'coral' | 'amber';
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
    accent: 'coral',
  },
  {
    icon: Server,
    title: 'Backend & API Engineering',
    description: 'Robust, well-documented APIs and data architectures that won\'t buckle under growth.',
    accent: 'amber',
  },
  {
    icon: Rocket,
    title: 'MVP to Launch Support',
    description: 'From first prototype to production launch — we stay with you through every iteration.',
    accent: 'violet',
    span: 'lg:col-span-2',
  },
];

export type ProjectKind = 'tally' | 'leadscore' | 'store';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectItem {
  kind: ProjectKind;
  name: string;
  category: string;
  headline: string;
  description: string;
  features: string[];
  metrics: ProjectMetric[];
  stack: string[];
  url: string;
  domain: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    kind: 'tally',
    name: 'Tally',
    category: 'Personal finance · India',
    headline: 'The UPI/SMS ledger that doesn’t lie.',
    description:
      'Your phone already gets “Rs 500 spent…” alerts. Tally forwards those bank SMS to a private link, parses every rupee, and turns them into a Dashboard, Spending and Transactions view — no bank password, ever.',
    features: [
      'Parses SMS from HDFC, ICICI, SBI, Axis, Kotak, Federal & SIB',
      'Auto-categorised spending that remembers your corrections',
      'Monthly debit/credit charts and top merchants',
      'iPhone Shortcuts & Android MacroDroid capture — no net-banking login',
    ],
    metrics: [
      { value: '7', label: 'Indian banks parsed' },
      { value: '₹0', label: 'Bank passwords needed' },
      { value: '₹299', label: 'Pro plan / month' },
    ],
    stack: ['React 19', 'FastAPI', 'Supabase Postgres', 'Recharts', 'Render'],
    url: 'https://tally.nuential.com',
    domain: 'tally.nuential.com',
  },
  {
    kind: 'leadscore',
    name: 'LeadScore',
    category: 'Sales AI · Indian SMBs',
    headline: 'Stop guessing who to call first.',
    description:
      'Not another CRM. Upload the Google Sheet or CSV you already keep and get a daily call & WhatsApp list, ranked by what actually converted for your business before.',
    features: [
      'CSV, Excel or live Google Sheet sync — columns auto-matched',
      'In-browser logistic-regression model scores every lead 0–100',
      'High / Medium / Low priority with a suggested next step',
      'One-tap WhatsApp & call from each row, plus scored CSV export',
    ],
    metrics: [
      { value: '0–100', label: 'Conversion score per lead' },
      { value: '100', label: 'Free leads to try' },
      { value: '₹1,999', label: 'Plans from / month' },
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Edge Functions', 'Razorpay'],
    url: 'https://leadscore.nuential.com',
    domain: 'leadscore.nuential.com',
  },
  {
    kind: 'store',
    name: 'Nuential Store',
    category: 'D2C e-commerce · Home decor',
    headline: 'A room you want to stay in.',
    description:
      'An editorial home-decor storefront for Indian rooms — curated wall art, lighting and decor priced in INR, with pan-India delivery and a Shopify admin simple enough for a solo founder.',
    features: [
      'Shop by room: Wall, Lighting, Decor, Soft & floor',
      'Multi-image galleries, variants and INR pricing from Shopify',
      'Secure checkout with UPI & cards, 7-day easy returns',
      'Pinterest catalog feeds for every category',
    ],
    metrics: [
      { value: '21', label: 'Curated products at launch' },
      { value: '₹97', label: 'Starting price' },
      { value: '7-day', label: 'Easy returns' },
    ],
    stack: ['Next.js Commerce', 'Shopify Storefront API', 'Tailwind', 'Motion', 'Vercel'],
    url: 'https://store.nuential.com',
    domain: 'store.nuential.com',
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
  { label: 'Products live in production', value: 3, suffix: '' },
  { label: 'Years of Experience', value: 5, suffix: '+' },
  { label: 'Avg. Time to MVP', value: 8, suffix: ' wks' },
];

export const WHY_SECTION = {
  heading: 'Why Nuential',
  subheading: 'We earn your trust through work, not promises.',
};

export const CONTACT = {
  heading: 'Have an idea?',
  subheading: "Let's build it.",
  description: 'Tell us about your project. We\'ll get back to you within one business day.',
  email: 'hello@nuential.com',
  nextSteps: [
    'A short call to understand your idea and your users',
    'A clear scope, timeline and estimate you can review',
    'Weekly demos from the first sprint until launch',
  ],
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
    'Nuential is a product-engineering studio building AI-powered software products for ambitious businesses.',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  products: [
    { label: 'Tally', href: 'https://tally.nuential.com' },
    { label: 'LeadScore', href: 'https://leadscore.nuential.com' },
    { label: 'Nuential Store', href: 'https://store.nuential.com' },
  ],
  socials: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'GitHub', href: '#', icon: 'github' },
    { label: 'X', href: '#', icon: 'x' },
  ],
  copyright: '© 2026 Nuential. All rights reserved.',
};

export const SECTIONS = {
  services: {
    badge: 'What we do',
    heading: 'Services built for product-minded teams',
    subheading: 'Everything you need to go from a blank page to a launched product.',
  },
  work: {
    badge: 'Our Work',
    heading: 'Real products. Real users. Live today.',
    subheading:
      'We don’t just build for clients — we design, engineer and run our own products. Here’s what’s in production right now.',
  },
  process: {
    badge: 'How we work',
    heading: 'A process you can follow',
    subheading: 'Four phases, each with clear deliverables and visible progress.',
  },
} as const;

export { ShieldCheck, Sparkles };
