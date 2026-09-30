import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { CONTACT } from '@/data/content';

const EASE = [0.22, 1, 0.36, 1] as const;

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

type Status = 'idle' | 'submitting' | 'success';

export function FinalCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const inputClass =
    'w-full rounded-xl border border-border-subtle bg-bg-base px-4 py-3 text-base text-text-heading placeholder:text-text-muted transition-colors focus:border-brand-primary/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-primary/10';

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
          style={{
            background: 'radial-gradient(ellipse, #C7D2FE 0%, #A7F3D0 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="px-1 sm:px-0 lg:sticky lg:top-32"
        >
          <h2 className="text-2xl-display font-bold text-text-heading text-balance">
            {CONTACT.heading}{' '}
            <span className="gradient-text">{CONTACT.subheading}</span>
          </h2>
          <p className="mt-4 text-lg text-text-body text-balance">
            {CONTACT.description}
          </p>

          <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {CONTACT.nextSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-white font-display text-sm font-bold text-text-heading shadow-soft">
                  {i + 1}
                </span>
                <span className="pt-1 text-[15px] text-text-heading sm:text-base">{step}</span>
              </li>
            ))}
          </ol>

          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-3 text-sm font-medium text-text-heading shadow-soft transition-colors hover:border-border-strong sm:mt-8 sm:py-2.5"
          >
            <Mail size={16} className="text-brand-primary" />
            {CONTACT.email}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="rounded-3xl border border-border-subtle bg-white p-5 shadow-lifted sm:rounded-4xl sm:p-7 lg:p-10"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                >
                  <CheckCircle2 size={64} className="text-emerald-500" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-text-heading">
                  Thank you, {formData.name.split(' ')[0]}!
                </h3>
                <p className="mt-3 max-w-sm text-base text-text-body">
                  We've received your message and will get back to you within one business day.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', projectType: '', message: '' });
                  }}
                  className="mt-8 text-sm font-medium text-brand-primary hover:text-text-heading"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-heading">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    enterKeyHint="next"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className={`${inputClass} ${errors.name ? 'border-rose-300' : ''}`}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-rose-600">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-heading">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    enterKeyHint="next"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@company.com"
                    className={`${inputClass} ${errors.email ? 'border-rose-300' : ''}`}
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-rose-600">{errors.email}</p>}
                </div>

                {/* Project type */}
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-text-heading">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value)}
                    className={`${inputClass} ${errors.projectType ? 'border-rose-300' : ''} ${
                      !formData.projectType ? 'text-text-muted' : ''
                    }`}
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {CONTACT.projectTypes.map((type) => (
                      <option key={type} value={type} className="text-text-heading">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1.5 text-sm text-rose-600">{errors.projectType}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-heading">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className={`${inputClass} resize-none ${errors.message ? 'border-rose-300' : ''}`}
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-rose-600">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-text-heading px-6 py-3.5 font-display text-base font-medium text-white shadow-lifted transition-colors duration-300 hover:bg-brand-primary disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
