/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'vsm': '1px',
      sm: '375px',
      'nsm': '720px',
      md: '925px',
      lg: '1083px',
      xl: '1540px',
    },

    extend: {
      colors: {          
        'soft-oranges': 'hsl(35, 77%, 62%)', //Added s at the end of every name to avoid clashes
        'soft-reds': 'hsl(5, 85%, 63%)',
        'off-whites': 'hsl(36, 100%, 99%)',
        'grayish-blues': 'hsl(233, 8%, 79%)',
        'dark-grayish-blues': 'hsl(236, 13%, 42%)',
        'very-dark-blues': 'hsl(240, 100%, 5%)' ,    
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

