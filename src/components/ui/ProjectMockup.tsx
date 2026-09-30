import { type ReactNode } from 'react';
import {
  ArrowDown,
  Lock,
  MessageSquareText,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Truck,
  RotateCcw,
} from 'lucide-react';
import type { ProjectKind } from '@/data/content';

function BrowserFrame({ children, url }: { children: ReactNode; url: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-lifted">
      <div className="flex items-center gap-3 border-b border-border-subtle bg-bg-elevated/70 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-text-muted ring-1 ring-border-subtle">
          <Lock size={10} />
          {url}
        </div>
        <span className="w-10" />
      </div>
      <div className="p-3 sm:p-5">{children}</div>
    </div>
  );
}

const TALLY_ROWS = [
  { bank: 'HDFC', merchant: 'Swiggy', category: 'Food', amount: '−₹428', credit: false },
  { bank: 'ICICI', merchant: 'UPI · rent', category: 'Housing', amount: '−₹18,500', credit: false },
  { bank: 'Federal', merchant: 'Salary · ACME', category: 'Income', amount: '+₹85,000', credit: true },
  { bank: 'SBI', merchant: 'HPCL', category: 'Transport', amount: '−₹2,140', credit: false },
];

const TALLY_MONTHS = [
  { m: 'Apr', debit: 62, credit: 88 },
  { m: 'May', debit: 70, credit: 88 },
  { m: 'Jun', debit: 55, credit: 92 },
  { m: 'Jul', debit: 78, credit: 88 },
  { m: 'Aug', debit: 60, credit: 95 },
  { m: 'Sep', debit: 48, credit: 100 },
];

function TallyMockup() {
  return (
    <BrowserFrame url="tally.nuential.com/dashboard">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium text-text-muted">September 2026</p>
            <p className="font-display text-base font-semibold text-text-heading">Dashboard</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            SMS sync on
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: 'Income', value: '₹85,000', tone: 'text-emerald-700' },
            { label: 'Spent', value: '₹21,068', tone: 'text-rose-600' },
            { label: 'Net', value: '₹63,932', tone: 'text-text-heading' },
          ].map((card) => (
            <div key={card.label} className="rounded-xl border border-border-subtle bg-bg-base p-2.5">
              <p className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
                {card.label}
              </p>
              <p className={`mt-1 font-display text-sm font-bold sm:text-base ${card.tone}`}>
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            Incoming bank SMS · HDFC
          </p>
          <p className="mt-1.5 rounded-lg bg-white px-3 py-2 font-mono text-[10.5px] leading-relaxed text-text-body ring-1 ring-emerald-100">
            Spent Rs.428.00 on SWIGGY via UPI on 23-Sep-26. A/c XX1234.
          </p>
          <div className="my-1.5 flex justify-center text-emerald-600">
            <ArrowDown size={14} />
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 ring-1 ring-emerald-100">
            <span className="text-xs font-semibold text-text-heading">Swiggy</span>
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-orange-700">
              Food
            </span>
            <span className="font-display text-xs font-bold text-rose-600">−₹428</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-5 sm:gap-3">
          <div className="space-y-1.5 sm:col-span-3">
            {TALLY_ROWS.map((row) => (
              <div
                key={row.merchant}
                className="flex items-center gap-2 rounded-lg border border-border-subtle px-2.5 py-1.5"
              >
                <span className="w-11 shrink-0 rounded bg-bg-elevated px-1 py-0.5 text-center text-[9px] font-bold text-text-body">
                  {row.bank}
                </span>
                <span className="flex-1 truncate text-[11px] font-medium text-text-heading">
                  {row.merchant}
                </span>
                <span
                  className={`font-display text-[11px] font-bold ${
                    row.credit ? 'text-emerald-700' : 'text-rose-600'
                  }`}
                >
                  {row.amount}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col rounded-lg border border-border-subtle p-2.5 sm:col-span-2">
            <p className="text-[10px] font-medium text-text-muted">Monthly flow</p>
            <div className="mt-2 flex flex-1 items-end gap-1.5">
              {TALLY_MONTHS.map((bar) => (
                <div key={bar.m} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex h-12 w-full items-end gap-[2px] sm:h-16">
                    <div
                      className="flex-1 rounded-t-sm bg-emerald-400"
                      style={{ height: `${bar.credit}%` }}
                    />
                    <div
                      className="flex-1 rounded-t-sm bg-rose-300"
                      style={{ height: `${bar.debit}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-text-muted">{bar.m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const LEADS = [
  { name: 'Aarav Sharma', city: 'Mumbai', source: 'Referral', score: 96, priority: 'High' },
  { name: 'Diya Nair', city: 'Bengaluru', source: 'Referral', score: 94, priority: 'High' },
  { name: 'Meera Patel', city: 'Pune', source: 'Referral', score: 86, priority: 'High' },
  { name: 'Saanvi Gupta', city: 'Ahmedabad', source: 'Google Search', score: 82, priority: 'High' },
  { name: 'Reyansh Menon', city: 'Mumbai', source: 'Google Search', score: 80, priority: 'Medium' },
  { name: 'Advait Deshmukh', city: 'Delhi', source: 'Walk-in', score: 76, priority: 'Medium' },
  { name: 'Shaurya Pillai', city: 'Kochi', source: 'Facebook Ads', score: 68, priority: 'Medium' },
] as const;

function LeadScoreMockup() {
  return (
    <BrowserFrame url="leadscore.nuential.com/dashboard">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-4 w-7 items-center rounded-full bg-product-leadscore">
              <span className="absolute right-0.5 h-3 w-3 rounded-full bg-white" />
            </span>
            <p className="text-[11px] font-medium text-text-body">
              Highest scores first — call or WhatsApp these today.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['All dates', 'All priorities', 'All sources', 'Follow-up'].map((f) => (
            <span
              key={f}
              className="rounded-md border border-border-subtle px-2 py-1 text-[10px] font-medium text-text-body"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-border-subtle">
          <div className="grid grid-cols-[1.5fr_1fr_auto] gap-2 border-b border-border-subtle bg-bg-base px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted sm:grid-cols-[1.6fr_1fr_0.8fr_auto]">
            <span>Lead</span>
            <span>Score</span>
            <span>Priority</span>
            <span className="hidden sm:block">Outreach</span>
          </div>
          {LEADS.map((lead) => {
            const high = lead.priority === 'High';
            return (
              <div
                key={lead.name}
                className="grid grid-cols-[1.5fr_1fr_auto] items-center gap-2 border-b border-border-subtle px-3 py-2 last:border-b-0 sm:grid-cols-[1.6fr_1fr_0.8fr_auto]"
              >
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-semibold text-text-heading">{lead.name}</p>
                  <p className="truncate text-[9.5px] text-text-muted">
                    {lead.source} · {lead.city}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 font-display text-[11px] font-bold text-text-heading">
                    {lead.score}
                  </span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-elevated">
                    <span
                      className={`block h-full rounded-full ${high ? 'bg-emerald-500' : 'bg-amber-400'}`}
                      style={{ width: `${lead.score}%` }}
                    />
                  </span>
                </div>
                <span
                  className={`w-fit rounded-full border px-2 py-0.5 text-[9.5px] font-semibold ${
                    high
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-amber-200 bg-amber-50 text-amber-700'
                  }`}
                >
                  {lead.priority}
                </span>
                <span className="hidden gap-1.5 text-text-muted sm:flex">
                  <MessageSquareText size={13} className="text-emerald-600" />
                  <Phone size={13} />
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[10px] text-text-muted">
          Ranked by a model trained on your own won / lost history
        </p>
      </div>
    </BrowserFrame>
  );
}

const STORE_PRODUCTS = [
  { name: 'Tripod Pleated Table Lamp', price: '₹547', category: 'Lighting', image: '/work/store/tripod-lamp.webp' },
  { name: 'Boho Wall Art Set of 3', price: '₹273', category: 'Wall', image: '/work/store/boho-wall-art.webp' },
  { name: 'Chai Biscuit Scented Candle', price: '₹156', category: 'Decor', image: '/work/store/chai-candle.webp' },
];

function StoreMockup() {
  return (
    <BrowserFrame url="store.nuential.com">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-bold tracking-tight text-text-heading">
            Nuential
          </span>
          <div className="hidden gap-3 text-[11px] font-medium text-text-body sm:flex">
            <span>Wall</span>
            <span>Lighting</span>
            <span>Decor</span>
            <span>Soft & floor</span>
          </div>
          <ShoppingBag size={15} className="text-text-heading" />
        </div>

        <div className="relative h-36 overflow-hidden rounded-xl sm:h-40">
          <img
            src="/work/store/banner.webp"
            alt="Bedroom styled with pastel wall art and string lights"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <p className="font-display text-lg font-semibold text-white">A room you want to stay in</p>
            <span className="mt-1.5 inline-block bg-white px-3 py-1 text-[10px] font-semibold text-text-heading">
              Explore the collection
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {STORE_PRODUCTS.map((product) => (
            <div key={product.name} className="group/product">
              <div className="aspect-square overflow-hidden rounded-lg bg-bg-elevated">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/product:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-1.5 text-[9.5px] font-medium uppercase tracking-wider text-product-store">
                {product.category}
              </p>
              <p className="line-clamp-2 text-[11px] font-semibold leading-snug text-text-heading">
                {product.name}
              </p>
              <p className="text-[11px] font-bold text-text-body">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 divide-x divide-border-subtle rounded-lg border border-border-subtle bg-bg-base text-[9.5px] font-medium text-text-body">
          <span className="flex flex-col items-center justify-center gap-1 px-1 py-2 text-center sm:flex-row">
            <Truck size={11} className="shrink-0" /> Pan-India delivery
          </span>
          <span className="flex flex-col items-center justify-center gap-1 px-1 py-2 text-center sm:flex-row">
            <RotateCcw size={11} className="shrink-0" /> 7-day returns
          </span>
          <span className="flex flex-col items-center justify-center gap-1 px-1 py-2 text-center sm:flex-row">
            <ShieldCheck size={11} className="shrink-0" /> UPI & cards
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectMockup({ kind }: { kind: ProjectKind }) {
  switch (kind) {
    case 'tally':
      return <TallyMockup />;
    case 'leadscore':
      return <LeadScoreMockup />;
    case 'store':
      return <StoreMockup />;
    default: {
      const unreachable: never = kind;
      return unreachable;
    }
  }
}
