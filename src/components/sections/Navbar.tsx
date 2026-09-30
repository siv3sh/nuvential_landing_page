import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const close = () => setMobileOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    desktopQuery.addEventListener('change', close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      desktopQuery.removeEventListener('change', close);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4 sm:pt-4"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-3 pr-2 transition-all duration-300 sm:px-5 sm:py-2.5 ${
            scrolled || mobileOpen ? 'glass-strong shadow-soft' : 'border border-transparent'
          }`}
        >
          <a href="#top" aria-label="Nuential home">
            <Logo />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-text-body transition-colors hover:bg-text-heading/5 hover:text-text-heading"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-text-heading px-5 py-2.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand-primary md:inline-flex"
          >
            Start a Project
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-text-heading hover:bg-text-heading/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-text-heading/20 backdrop-blur-[2px] md:hidden"
            aria-hidden="true"
          />
        )}
        {mobileOpen && (
          <motion.div
            key="menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-[calc(max(0.75rem,env(safe-area-inset-top))+4.25rem)] z-50 rounded-3xl glass-strong shadow-lifted md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-text-body transition-colors hover:bg-text-heading/5 hover:text-text-heading"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-2xl bg-text-heading px-4 py-3 text-center text-base font-medium text-white"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
