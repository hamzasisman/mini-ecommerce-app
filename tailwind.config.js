/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand']
      },
      colors: {
        'base-text': '#495057',
        'dark-text': '#343a40',
        'blue': '#1572e8',
        'header': '#575962',
        'danger': '#dc3545',
        'card': '#f7f7f7',
        'green': '#2da44e',
        'red': '#f25961',
        'input-border': '#e7e7e7',
        'warning': '#ffad46',
        'card-button': '#f0f0f0'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        slideIn: {
          '0%': { top: "-62px" },
          '100%': { top: 0 }
        },
        slideOut: {
          '0%': { top: 0 },
          '100%': { top: "-62px" }
        }
      },
      animation: {
        fadeIn: 'fadeIn 500ms forwards',
        fadeOut: 'fadeOut 500ms forwards',
        slideIn: 'slideIn 500ms forwards',
        slideOut: 'slideOut 500ms forwards',
      },
      boxShadow: {
        form: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)',
        sidebar: '4px 4px 10px rgb(69 65 78 / 6%)',
        header: '0px 2px 23px -2px rgba(0,0,0,0.62)',
        content: '2px 6px 15px 0 rgb(69 65 78 / 10%)',
        button: '4px 4px 10px 0 rgb(0 0 0 / 10%), 4px 4px 15px -5px rgb(21 114 232 / 40%)',
        dropdownContent: '0 1px 11px rgba(0,0,0,.15)',
        profilePhoto: '0px 2px 4px 0px rgb(0 0 0 / 10%)',
        editProfilePhoto: '0px 2px 4px 0px rgb(0 0 0 / 12%);',
        input: 'inset 0 1px 1px rgb(0 0 0 / 8%);',
        paymentAccordion: '4px 4px 10px 0 rgba(0,0,0,.1),4px 4px 15px -5px rgba(21,114,232,.4)',
        info: '1px 1px 14px 0 rgb(18 38 63 / 26%)'
      },
      fontFamily: {
        'quicksand': ['Quicksand']
      },
      screens: {
        'max-2xl': { 'max': '1536px' },

        'max-xl': { 'max': '1279px' },

        'max-lg': { 'max': '1023px' },

        'max-md-lg': { 'max': '928px' },

        'max-md': { 'max': '767px' },

        'max-sm': { 'max': '639px' },

        'max-xs': { 'max': '374px' },

        'md-xl': { 'min': '768px', 'max': '1279px' },

        'md-lg': { 'min': '768px', 'max': '1023px' },

        'xs': '375px',

        '2xl': '1536px',
      },
      backgroundImage: {
        'blogpost': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/src/assets/img/blogpost.jpg)'
      }
    },
  },
  plugins: [],
}