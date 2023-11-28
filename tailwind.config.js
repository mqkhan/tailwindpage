const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      mono: ["'Fira Code'", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
