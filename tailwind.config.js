/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },

    extend: {
      // Animation
      animation: {
        modal: 'modal 0.2s linear',
        striped: 'striped 2s linear infinite',
        ripple: 'ripple 550ms linear',
        wave: 'wave 1.5s linear infinite',
        circularProgressContent: 'circularProgressContent 2s linear 0s infinite normal none running',
        circularProgress: 'circularProgress 1.5s linear 0s infinite normal forwards running'
      },

      // Backgrounds

      backgroundImage: {
        striped: 'linear-gradient(45deg,rgb(255 255 255 / 15%) 25%,rgb(0 0 0 / 0%) 25%,rgb(0 0 0 / 0%) 50%,rgb(255 255 255 / 15%) 50%,rgb(255 255 255 / 15%) 75%,rgb(0 0 0 / 0%) 75%,rgb(0 0 0 / 0%))',
        valid: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMmM1NWUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=")',
        invalid: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48bGluZSB4MT0iMTIiIHkxPSI4IiB4Mj0iMTIiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIxMiIgeTE9IjE2IiB4Mj0iMTIuMDEiIHkyPSIxNiI+PC9saW5lPjwvc3ZnPg==")'
      },

      backgroundSize: {
        'striped-size': '2rem 2rem',
        'validation-size': 'calc(.75em + .5rem) calc(.75em + .5rem)'
      },

      backgroundPosition: {
        'position-validation': 'right calc(.375em + .1875rem) center'
      },

      // Colors

      colors: {

        primary: '#37afff',
        'primary-medium': '#0080FC',
        'primary-desaturated': '#C9EAFF',
        'primary-light': '#EBF7FF',
        'primary-dark': '#005DBD',

        secondary: '#727272',
        'secondary-medium': '#B7B7B7',
        'secondary-desaturated': '#E6E6E6',
        'secondary-light': '#F5F5F7',

        cta: '#FFCC26',
        'cta-medium': '#B8860B',
        'cta-desaturated': '#FFE07B',
        'cta-light': '#FFF9E5',
        'cta-dark': '#6F5500',

        warning: '#E73C4E',
        'warning-medium': '#D40000',
        'warning-desaturated': '#FFBEC5',
        'warning-light': '#FFEBED',
        'warning-dark': '#370B1E',

        purple: '#7F32F9',
        'purple-medium': '#5173EF',
        'purple-desaturated': '#C4B7FB',
        'purple-light': '#EFECFF',
        'purple-dark': '#3E08A5',

        white: '#ffffff',
        black: '#000000'
      },

      // Container

      container: {
        screens: {
          sm: '640px',
          md: '1024px',
          lg: '1280px',
          xl: '1400px',
          xxl: '1920px'
        }
      },

      // Keyframes

      keyframes: {
        modal: {
          '0%': {
            transform: 'scale(0.875)',
            opacity: 0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        striped: {
          from: {
            backgroundPosition: '2rem 0'
          },
          to: {
            backgroundPosition: '0 0'
          }
        },
        ripple: {
          from: {
            transform: 'scale(0)'
          },
          to: {
            opacity: '0',
            transform: 'scale(2)'
          }
        },
        wave: {
          '0%': {
            backgroundPosition: '-468px 0'
          },
          '100%': {
            backgroundPosition: '468px 0'
          }
        },
        circularProgressContent: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        circularProgress: {
          '0%': {
            strokeDasharray: '1, 400',
            strokeDashoffset: 0
          },
          '50%': {
            strokeDasharray: '400, 400',
            strokeDashoffset: '-100'
          },
          '100%': {
            strokeDasharray: '400, 400',
            strokeDashoffset: '-260'
          }
        }
      },

      // Screens

      screens: {
        sm: '640px', // => @media (min-width: 640px) { ... }
        md: '1024px', // => @media (min-width: 768px) { ... }
        lg: '1280px', // => @media (min-width: 1024px) { ... }
        xl: '1400px', // => @media (min-width: 1280px) { ... }
        xxl: '1920px' // => @media (min-width: 1920px) { ... }
      }
    }
  },
  plugins: []
}

