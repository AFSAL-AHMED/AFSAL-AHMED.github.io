/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F4F0',
        ink: {
          DEFAULT: '#000000',
          80: 'rgba(0,0,0,0.80)',
          50: 'rgba(0,0,0,0.50)',
          20: 'rgba(0,0,0,0.20)',
          8:  'rgba(0,0,0,0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '9999px', // keep for status dots only
      },
      boxShadow: {
        'nb':    '4px 4px 0 0 #000000',
        'nb-lg': '6px 6px 0 0 #000000',
        'nb-sm': '2px 2px 0 0 #000000',
      },
      animation: {
        'nb-fade-up': 'nbFadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        nbFadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
