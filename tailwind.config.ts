import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif'],
        sans: ['"Noto Sans TC"', 'sans-serif'],
      },
      colors: {
        zen: {
          50: '#f4f1f8',
          100: '#eaddf0',
          200: '#d0bae0',
          300: '#b08ecb',
          600: '#8b5cf6',
          800: '#6b21a8',
          900: '#4c1d95',
        }
      }
    }
  }
} satisfies Config;
