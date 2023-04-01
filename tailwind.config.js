/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "react-bg":  'rgb(35,39,47)',
        "react-text": 'rgb(20,158,202)', 
        "graphql": "#e10098",
        "nodejs": "#8cc84b",
        "nodejs-bg": "#303030",
        "typescript": "#007acc",
        "azure": "#035bda",
        "mongodb": "#599636",
        "storybook": "#FF4785",
        "docker": "#066da5",
        "jest": "#99425B",
        "loopback": "#3F5DFF",
        "playwright": "#99425B",
        "selenium": "#2CB134",
      },
      gridTemplateColumns: {
        "cv-row": '64px minmax(0, 1fr) minmax(0, 1fr)',
        "cv": '300px 1fr'
      }
    },
  },
  plugins: [],
}
