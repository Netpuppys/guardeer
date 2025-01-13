/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["HelveticaNow", "sans-serif"],
        neuehaas: ["NeueHaasDisplay", "sans-serif"],
        ttc: ["TTChocolates", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "text-light-gray": "#D2D2D2",
      },
      gradientColorStops: {
        "blue-green-start": "#E5CD7C",
        "blue-green-end": "#0EC0C8",
      },
    },
  },
  plugins: [],
};
