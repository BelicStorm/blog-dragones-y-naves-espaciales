/** @type {import('tailwindcss').Config} */

const colorSafeList = ["red", "green", "purple"]

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    ...colorSafeList.map((color) => `bg-${color}-500`)
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
