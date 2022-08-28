/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
  
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  
  "./src/components/**/*.{js,ts,jsx,tsx}",
  
  ],
  safelist: [
    'bg-',
    'to-gray-400',
    /^from-/,
    {
      pattern: /^bg-/,
    },
  ],
  
  theme: {
  
  extend: {},
  
  },
  
  plugins: [],
  
  }