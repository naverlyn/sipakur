/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Klee-One': ['"Klee One"', 'cursive'],
        'Dosis': ['Dosis', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require("daisyui"),
    require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],
    
      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ["skulls", "polka-dots", "overlapping-circles", "bubbles", "wiggle", "bathroom-floor", "topography"],
    
      // The foreground colors of the pattern
      colors: {
        default: "#9C92AC",
        "blue-dark": "#000044", //also works with rgb(0,0,205)
        "cyan": "#47d7ed",
        "donker": "#6497b1",
        "orange": "#f5a623",
      },
    
      // The foreground opacity
      opacity: {
        default: "0.3",
        "100": "1.0",
        "50": "0.5",
        "25": "0.25",
        "10": "0.1",
      },
    }),
  ],
}
