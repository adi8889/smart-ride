// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f9ff",
          100: "#e0edff",
          200: "#b3d4ff",
          300: "#80baff",
          400: "#4da0ff",
          500: "#1a86ff",
          600: "#006ae6",
          700: "#0052b4",
          800: "#003b82",
          900: "#002451"
        }
      }
    },
  },
  plugins: [],
}
