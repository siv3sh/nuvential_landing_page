/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#FAFAF7',
          surface: '#FFFFFF',
          elevated: '#F4F4EF',
        },
        brand: {
          primary: '#4F46E5',
          secondary: '#0D9488',
          violet: '#8B5CF6',
          coral: '#F2705B',
          amber: '#F59E0B',
        },
        product: {
          tally: '#0F8A5F',
          leadscore: '#2563EB',
          store: '#B8683A',
        },
        text: {
          heading: '#0B1220',
          body: '#4B5563',
          muted: '#8A93A3',
        },
        border: {
          subtle: '#E8E8E2',
          strong: '#D6D7CF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6.2vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        '2xl-display': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -12px rgba(11,18,32,0.10)',
        lifted: '0 2px 4px rgba(11,18,32,0.04), 0 24px 48px -20px rgba(11,18,32,0.18)',
        float: '0 20px 50px -18px rgba(79,70,229,0.28), 0 4px 12px -4px rgba(11,18,32,0.08)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'mesh-drift': 'mesh-drift 20s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'mesh-drift': {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(3%, -2%) scale(1.05)' },
          '100%': { transform: 'translate(-2%, 3%) scale(1.02)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
