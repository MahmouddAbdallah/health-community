/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        '2auto': '2 auto'
      },
      objectPosition: {
        'profile-pic-img': " 0px 15px",
      },
      boxShadow: {
        'card-shadow': '#604b4a30 0px 70px 30px -50px',
        'card-shadow-bottom': ' rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset',
        'card-shadow-profile-pic': ' rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px ',
        'dark-icon': 'inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb'
      },
      colors: {
        primary: {
          green: "#587468",
          gray: "#A3A0AF",
          whiteHome: "#FEFAF9",
          blue: "#3657CD"
        },
        white: {
          White: "#FFFFFF",
          Smoke_White: "#F5F5F5",
          Snow_White: "#FAFAFA",
          Light_Gray: "#F2F2F2",
          Platinum: "#EDEDED",
          WhiteLight_Silver: "#E0E0E0",
          Ivory: "#FFFFFFF5",
          Pearl: "#FCFCFC",
          Light_Smoke: "#E8E8E8",
          Antique_White: "#FEFEFE",
        },
        black: {
          black: "#000000",
          Charcoal_Black: "#333333",
          Midnight_Black: "#1A1A1A",
          Ebony: "#222222",
          Onyx_Black: "#121212",
          Midnight_Blue: "#2C3E50",
          Dark_Gray: "#262626",
          Jet_Black: "#1C1C1C",
          Obsidian: "#2B2B2B",
          Carbon: "#1E1E1E",
        }, modeIcon: {
          pink: "#ff0080",
          orange: "#ff8c00"
        },
        DARKCOLOR: '#0E0A39'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}