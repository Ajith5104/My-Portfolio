/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#7b97fa',
          500: '#5b73f5',
          600: '#4255ea',
          700: '#3544d5',
          800: '#2c39ac',
          900: '#293587',
          950: '#1a2054',
        },
        accent: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        neon: '#7c3aed',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-dark': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        'hero-light': 'linear-gradient(135deg, #e8eaf6, #c5cae9, #9fa8da)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'card': '0 4px 20px rgba(0,0,0,0.1)',
        'card-dark': '0 4px 20px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
