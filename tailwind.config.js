/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",      // O arquivo index.html na raiz
    "./src/**/*.jsx"  // Todos os arquivos .js, .jsx, .ts, e .tsx dentro da pasta src
  ],
  theme: {
    extend: {
      colors: {
        'headerColor': '#09090bd0',
        'modal': '#00000080'
      },
      screens: {
        'xs': '500px'
      },
    },
  },
  plugins: [],
}
