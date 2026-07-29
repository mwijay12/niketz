/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '22px'],
      lg: ['18px', '26px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['28px', '38px'],
      '4xl': ['40px', '48px'],
      '5xl': ['48px', '56px'],
      '6xl': ['60px', '68px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "coral-dark": "#E04838",
        "obsidian": "#0D0F12",
        "obsidian-card": "#161920",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 30px rgba(255, 100, 82, 0.25)',
        'glow-lg': '0 0 50px rgba(255, 100, 82, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}

