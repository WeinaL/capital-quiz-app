/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',     // blue-600
        secondary: '#1e40af',   // blue-800
        success: '#22c55e',     // green-500
        error: '#ef4444',       // red-500
        background: '#f8fafc',  // slate-50
        text: '#1e293b',        // slate-800
      },
    },
  },
  plugins: [],
}
