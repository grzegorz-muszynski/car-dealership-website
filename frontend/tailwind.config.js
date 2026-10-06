/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
          'spin-slow': 'spinner-spin 5s linear infinite',
      },
      boxShadow: {
        'car-shadow-green': '109.5px -110px hsl(120, 100%, 15%)',
        'car-shadow-red': '109.5px -110px hsl(0, 100%, 40%)',
        'car-shadow-yellow': '0px 70px hsl(39, 100%, 40%)',
        'buy-form': '0 0 18px hsl(40, 50%, 62%, 0.18)',
        'car-page-shadow': '0 0 18px hsl(40, 50%, 62%, 0.18)',
      },
      colors: {
        // Black / gold / silver palette taken from the Alfa Motors logo
        'ink': '#000000',        // page background - pure black so the logo's own background blends in
        'panel': '#141414',      // cards, forms, tables
        'panel-hover': '#1f1f1f',
        'gold': {
          light: '#F5E6B8',
          DEFAULT: '#CFAE6B',
          dark: '#9A7438',
        },
        'silver': {
          light: '#F2F2F2',
          DEFAULT: '#D6D6D6',
          dark: '#9A9A9A',
        },
        'footer-gray': '#666666',
        'car-page-red': 'hsl(0, 100%, 40%)',
        'car-green': 'hsl(120, 100%, 15%)',
        'car-red': 'hsl(0, 100%, 40%)',
        'car-yellow': 'hsl(39, 100%, 40%)',
      },
      fontFamily: {
        bebasFont: ['bebasFont', 'sans-serif'],
        segoe: ['SegoeUI', 'sans-serif'],
      },      
      fontSize: {
        '17': '1.0625rem',
      },      
      inset: {
        '10p': '10%',
      },
      keyframes: {
          'spinner-spin': {
              'from': { transform: 'rotate(0deg)' },
              'to': { transform: 'rotate(360deg)' },
          },
      },
      lineHeight: {
        'car-title': '21px',
      },
      maxHeight: {
        '80vh': '80vh',
      },
      width: {
        '80vw': '80vw',
        '90vw': '90vw',
      },
      screens: {
        'xs': '470px',
      },
      spacing: {
        '2.5': '10px', // For width and height
        '7.625': '30.5px', // Custom value for bottom
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      variants: {
        color: ['active']
      },
      zIndex: {
        '-1': '-1',
        '10': '10px',
      }
    },
  },
  plugins: [],
}