import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#fbfaf7',
        surface: '#ffffff',
        ink: '#151515',
        muted: '#5f5f5f',
        line: '#e9e5de',
        accent: '#212121'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(15, 23, 42, 0.06)'
      },
      borderRadius: {
        xl2: '1.5rem'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Iowan Old Style', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
