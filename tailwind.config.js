import lineClamp from '@tailwindcss/line-clamp';
import scrollbarHide from 'tailwind-scrollbar-hide';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [lineClamp, scrollbarHide],
};

export default config;
