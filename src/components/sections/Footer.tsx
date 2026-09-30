import { FOOTER } from '@/data/content';
import { Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  x: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-white/70 pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" aria-label="Nuential home">
              <Logo />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-text-body">{FOOTER.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-14">
            <div>
              <h4 className="mb-3 font-display text-sm font-semibold text-text-heading">
                Navigation
              </h4>
              <ul className="space-y-2">
                {FOOTER.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-block py-0.5 text-sm text-text-body transition-colors hover:text-text-heading"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-display text-sm font-semibold text-text-heading">
                Our products
              </h4>
              <ul className="space-y-2">
                {FOOTER.products.map((product) => (
                  <li key={product.href}>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 py-0.5 text-sm text-text-body transition-colors hover:text-text-heading"
                    >
                      {product.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-display text-sm font-semibold text-text-heading">
                Connect
              </h4>
              <div className="flex gap-2.5">
                {FOOTER.socials.map((social) => {
                  const Icon = socialIcons[social.icon] ?? Linkedin;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-white text-text-body shadow-soft transition-all duration-300 hover:border-brand-primary/30 hover:text-brand-primary sm:h-10 sm:w-10"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border-subtle pt-6 text-center sm:mt-12 sm:flex-row sm:gap-4">
          <p className="text-sm text-text-muted">{FOOTER.copyright}</p>
          <p className="text-sm text-text-muted">Built with care by Nuential</p>
        </div>
      </div>
    </footer>
  );
}
