/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
				carousel: {
					to: {transform: 'translateX(-50%)'}
				}
			},
			animation: {
        carousel: "carousel var(--duration, 30s) linear infinite",
      },
    },
  },
  plugins: [],
} 