import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1C1C1E',
          800:     '#2D2D30',
          600:     '#3F3F42',
          400:     '#6B6B6E',
        },
        emerald: {
          DEFAULT: '#1A6B4A',
          light:   '#2D8A61',
          dark:    '#145537',
          50:      '#F0FDF4',
          100:     '#DCFCE7',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8C96E',
          dark:    '#A8872E',
          50:      '#FFFBEB',
          100:     '#FEF3C7',
        },
        slate: {
          DEFAULT: '#6B7280',
          light:   '#9CA3AF',
        },
        'warm-white': '#FAFAF8',
        'off-white':  '#F5F4F0',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        'modal':      '0 16px 48px rgba(0,0,0,0.18)',
        'nav':        '0 2px 12px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'xl':  '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
      animation: {
        'fade-up':        'fadeUp 0.4s ease forwards',
        'fade-in':        'fadeIn 0.3s ease forwards',
        'slide-in-right': 'slideInRight 0.3s ease forwards',
        'slide-in-left':  'slideInLeft 0.3s ease forwards',
        'heart-beat':     'heartBeat 0.3s ease',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        heartBeat: {
          '0%':   { transform: 'scale(1)' },
          '50%':  { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-emerald': 'linear-gradient(135deg, #1A6B4A 0%, #145537 100%)',
        'gradient-gold':    'linear-gradient(135deg, #C9A84C 0%, #A8872E 100%)',
        'gradient-hero':    'linear-gradient(180deg, rgba(28,28,30,0.7) 0%, rgba(28,28,30,0.3) 60%, rgba(28,28,30,0.6) 100%)',
      },
      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}

export default config
