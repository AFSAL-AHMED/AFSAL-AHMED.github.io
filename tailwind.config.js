/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF9F6',
          bone: '#FAF9F6',
          card: '#F4F1EA',
          muted: '#EFECE6',
          accent: '#E5E0D8',
          border: '#DCD6CD',
        },
        ink: {
          pitch: '#000000',
          charcoal: '#1A1A1A',
          muted: '#525252',
          faint: '#737373',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'Monaco', '"Courier New"', 'monospace'],
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
