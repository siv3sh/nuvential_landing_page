import { FOOTER } from '@/data/content';
import { Linkedin, Github, Twitter } from 'lucide-react';

const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  x: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-text-heading">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-secondary" />
              </span>
              Nuvential
            </a>
            <p className="mt-4 text-sm leading-relaxed text-text-body">
              {FOOTER.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
            <div>
              <h4 className="mb-3 font-display text-sm font-semibold text-text-heading">
                Navigation
              </h4>
              <ul className="space-y-2">
                {FOOTER.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-body transition-colors hover:text-text-heading"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-display text-sm font-semibold text-text-heading">
                Connect
              </h4>
              <div className="flex gap-3">
                {FOOTER.socials.map((social) => {
                  const Icon = socialIcons[social.icon] ?? Linkedin;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-white/5 text-text-body transition-all duration-300 hover:border-brand-primary/30 hover:text-brand-primary"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row">
          <p className="text-sm text-text-muted">{FOOTER.copyright}</p>
          <p className="text-sm text-text-muted">
            Built with care by Nuvential
          </p>
        </div>
      </div>
    </footer>
  );
}
