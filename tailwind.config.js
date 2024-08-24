/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Brand: "#c54c00",
        Darkest: "#18181B",
        Dark: "#2A2A2A",
        Mid: "#858594",
        Light: "#E2E8F0",
        Lightest: "#FFFFFF",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        xl: {'min': '1200px', 'max': '1440px'},
        xxl: {'min': '1290px', 'max': '1536px'}
      },
      animation: {
        flipinx: 'flipinx .3s ease 0s 1 normal forwards',
        fadeForward: 'fadeForward .25s ease 0s 1 normal none',
        slideOut: 'slideOut .3s ease 0s 1 normal none',
        fadeIn: 'fadeIn .25s ease 0s 1 normal forwards',
        fadeInBackWard: 'fadeInBackWard .2s ease 0s 1 normal forwards',
        slideIn: 'slideIn .25s ease 0s 1 normal forwards',
      },
      keyframes: {
        flipinx: {
          '0%': {
            opacity: "0",
		        transform: "scale(0.7)",
          },
          '100%': {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        fadeForward: {
          '0%': {
            opacity: "0",
		        transform: "scale(0.6)",
          },
          '100%': {
            opacity: "1",
		        transform: "scale(1)",
          },
        },
        slideOut: {
          '0%': {
            opacity: "1",
		        transform: "translateX(0)",
          },
          '100%': {
            opacity: "0",
		        transform: "translateX(-250px)",
          },
        },
        fadeIn: {
          '0%': {
            opacity: "0",
          },
          '100%': {
            opacity: "1",
		       
          },
        },
        fadeInBackWard: {
          '0%': {
            opacity: "0",
          },
          '100%': {
            opacity: "1",
          },
        },
        slideIn: {
          '0%': {
            opacity: "0",
            transform: "translateX(-50px)"
          },
          '100%': {
            opacity: "1",
            transform:" translateX(0)"
          },
        },
        
      },
    },
  },
  plugins: [],
}
