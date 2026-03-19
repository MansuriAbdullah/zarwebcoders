/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00d2ff',
          DEFAULT: '#3a7bd5',
        },
        secondary: '#7000ff',
        accent: '#00fff2',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 50%, #7000ff 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
