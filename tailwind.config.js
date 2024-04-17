/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(The+Power+of+Prayer+for+Women_+Strengthening+Your+Faith+and+Finding+Peace.jpeg)",
        'pastor toyin': "url(pastor toyin poju.webp)",
        'about page' : "url(bewomenconference-05042024-0002.jpg)",
        'background' : "url(July-BG-Praise-and-Worship-2023_-730x438.jpg)",
        'background1' : "url(quote.jpg.webp)",
        
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
  
    },
  },
  plugins: [],
}
}