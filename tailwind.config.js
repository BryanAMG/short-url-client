/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0079ff',
        secondary: '#00DFA2',
        delete: '#ED2B2A',
        edit: '#FFC26F',
        fondo: '#001829'
      }
    },
    screens: {
      sm: '512px'
    }
  },
  plugins: []
}
