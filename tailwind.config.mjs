/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f2742',
        ink: '#132033',
        ivory: '#fbf7ef',
        paper: '#fffdf8',
        gold: '#b68a35',
        blue: '#dceaf4',
        slate: '#667385',
        line: '#d8d1c3'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Inter', 'Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        board: '0 24px 70px rgba(15, 39, 66, 0.12)'
      }
    }
  },
  plugins: []
};
