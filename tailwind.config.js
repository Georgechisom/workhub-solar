/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        light: "0 15px 45px -20px rgba(0, 0, 255, 0.719)"
      },
      colors: {
        whiteText: "#fff",
        darkText: "#000000",
        lightText: "#9b9b9b",
        greenText: "#1d8221",
        redText: "#E02B2B",
        skyText: "#0000FF",
        backgroundText:"#f8bdc1",
        writtenText: "#2f2f2f"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
    },
  },
  plugins: [],
}

