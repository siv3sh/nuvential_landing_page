interface ProjectMockupProps {
  type: 'finance' | 'leadscore' | 'store';
  accent: 'primary' | 'secondary' | 'violet';
}

const accentColor = {
  primary: '#4F7CFF',
  secondary: '#22D3EE',
  violet: '#A78BFA',
};

function BrowserFrame({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-base">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-surface px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
          <div className="h-3 w-3 rounded-full bg-green-400/60" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-bg-base px-3 py-1 text-xs text-text-muted">
          {url}
        </div>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}

function FinanceMockup() {
  return (
    <BrowserFrame url="moneytrack.nuvential.com">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-primary/20" />
            <div className="h-3 w-24 rounded bg-white/10" />
          </div>
          <div className="h-3 w-16 rounded bg-white/5" />
        </div>

        {/* Balance cards */}
        <div className="grid grid-cols-3 gap-3">
          {['Income', 'Expenses', 'Balance'].map((label, i) => (
            <div key={label} className="rounded-lg border border-border-subtle bg-bg-surface p-3">
              <div className="mb-2 h-2 w-12 rounded bg-white/10" />
              <div
                className="h-5 w-16 rounded"
                style={{
                  background:
                    i === 0
                      ? 'linear-gradient(90deg, rgba(79,124,255,0.6), rgba(79,124,255,0.3))'
                      : i === 1
                        ? 'linear-gradient(90deg, rgba(239,68,68,0.5), rgba(239,68,68,0.2))'
                        : 'linear-gradient(90deg, rgba(34,211,238,0.5), rgba(34,211,238,0.2))',
                }}
              />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-border-subtle bg-bg-surface p-4">
          <div className="mb-3 h-2 w-20 rounded bg-white/10" />
          <div className="flex h-24 items-end gap-2">
            {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(180deg, ${accentColor.primary}80, ${accentColor.primary}20)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Transaction list */}
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-surface p-2.5">
              <div className="h-7 w-7 rounded-full bg-white/5" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-20 rounded bg-white/10" />
                <div className="h-1.5 w-12 rounded bg-white/5" />
              </div>
              <div className="h-3 w-12 rounded bg-brand-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function LeadScoreMockup() {
  return (
    <BrowserFrame url="leadscore.nuvential.com">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-secondary/20" />
            <div className="h-3 w-20 rounded bg-white/10" />
          </div>
          <div className="rounded-full bg-brand-secondary/10 px-3 py-1 text-xs text-brand-secondary">
            AI Scoring Active
          </div>
        </div>

        {/* Score gauge */}
        <div className="flex items-center gap-4 rounded-lg border border-border-subtle bg-bg-surface p-4">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke={accentColor.secondary}
                strokeWidth="6"
                strokeDasharray="160 214"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute font-display text-lg font-bold text-text-heading">87</span>
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-2 w-24 rounded bg-white/10" />
            <div className="h-1.5 w-32 rounded bg-white/5" />
            <div className="flex gap-1.5">
              <div className="h-2 w-8 rounded bg-brand-secondary/40" />
              <div className="h-2 w-8 rounded bg-brand-secondary/30" />
              <div className="h-2 w-8 rounded bg-brand-secondary/20" />
            </div>
          </div>
        </div>

        {/* Lead list with scores */}
        <div className="space-y-2">
          {[
            { score: 94, w: 'w-[94%]', color: 'bg-brand-secondary' },
            { score: 82, w: 'w-[82%]', color: 'bg-brand-secondary/70' },
            { score: 67, w: 'w-[67%]', color: 'bg-brand-secondary/50' },
            { score: 41, w: 'w-[41%]', color: 'bg-brand-secondary/30' },
          ].map((lead, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-surface p-2.5">
              <div className="h-7 w-7 rounded-full bg-white/5" />
              <div className="flex-1 space-y-1">
                <div className="h-2 w-24 rounded bg-white/10" />
                <div className={`h-1.5 rounded ${lead.w} ${lead.color}`} />
              </div>
              <span className="font-display text-sm font-bold text-text-heading">{lead.score}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function StoreMockup() {
  return (
    <BrowserFrame url="store.nuvential.com">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-violet/20" />
            <div className="h-3 w-28 rounded bg-white/10" />
          </div>
          <div className="flex gap-2">
            <div className="h-3 w-8 rounded bg-white/5" />
            <div className="h-3 w-8 rounded bg-white/5" />
          </div>
        </div>

        {/* Hero banner */}
        <div
          className="flex items-center justify-between rounded-lg p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(79,124,255,0.1))',
          }}
        >
          <div className="space-y-2">
            <div className="h-3 w-20 rounded bg-white/15" />
            <div className="h-2 w-28 rounded bg-white/10" />
            <div className="h-6 w-16 rounded bg-brand-violet/40" />
          </div>
          <div className="h-12 w-12 rounded-full bg-brand-violet/20" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { color: 'rgba(79,124,255,0.2)', icon: 'bg-brand-primary/30' },
            { color: 'rgba(34,211,238,0.2)', icon: 'bg-brand-secondary/30' },
            { color: 'rgba(167,139,250,0.2)', icon: 'bg-brand-violet/30' },
            { color: 'rgba(34,211,238,0.2)', icon: 'bg-brand-secondary/30' },
            { color: 'rgba(167,139,250,0.2)', icon: 'bg-brand-violet/30' },
            { color: 'rgba(79,124,255,0.2)', icon: 'bg-brand-primary/30' },
          ].map((product, i) => (
            <div key={i} className="rounded-lg border border-border-subtle bg-bg-surface p-3">
              <div
                className="mb-3 flex h-16 items-center justify-center rounded-md"
                style={{ background: product.color }}
              >
                <div className={`h-6 w-6 rounded ${product.icon}`} />
              </div>
              <div className="mb-1.5 h-2 w-16 rounded bg-white/10" />
              <div className="h-2 w-10 rounded bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectMockup({ type, accent }: ProjectMockupProps) {
  void accent;
  if (type === 'finance') return <FinanceMockup />;
  if (type === 'leadscore') return <LeadScoreMockup />;
  return <StoreMockup />;
}
