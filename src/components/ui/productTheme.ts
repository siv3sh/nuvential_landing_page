import type { ProjectKind } from '@/data/content';

export interface ProductTheme {
  solid: string;
  text: string;
  soft: string;
  ring: string;
  panel: string;
  glow: string;
}

export const PRODUCT_THEME: Record<ProjectKind, ProductTheme> = {
  tally: {
    solid: 'bg-product-tally',
    text: 'text-product-tally',
    soft: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    ring: 'hover:border-emerald-200',
    panel: 'from-emerald-50 via-teal-50/60 to-white',
    glow: '#6EE7B7',
  },
  leadscore: {
    solid: 'bg-product-leadscore',
    text: 'text-product-leadscore',
    soft: 'bg-blue-50 text-blue-800 border-blue-100',
    ring: 'hover:border-blue-200',
    panel: 'from-blue-50 via-indigo-50/60 to-white',
    glow: '#93C5FD',
  },
  store: {
    solid: 'bg-product-store',
    text: 'text-product-store',
    soft: 'bg-orange-50 text-orange-900 border-orange-100',
    ring: 'hover:border-orange-200',
    panel: 'from-orange-50 via-rose-50/60 to-white',
    glow: '#FDBA8C',
  },
};
