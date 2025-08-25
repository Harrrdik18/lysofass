import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'supreme-blue': '#0066cc',
        'supreme-dark-blue': '#004499',
        'supreme-light-blue': '#4da6ff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
