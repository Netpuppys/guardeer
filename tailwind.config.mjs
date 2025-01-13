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
      backgroundImage: {
        'black-right-gradient': 'linear-gradient(270deg, #000 16.92%, rgba(0, 0, 0, 0) 99.97%)',
        'black-bottom-gradient': 'linear-gradient(0deg, #000 16.92%, rgba(0, 0, 0, 0) 99.97%)',
        "yellow-blue-gradient": "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #E5CD7C 30.37%, #0EC0C8 100%)",
        'blue-yellow-gradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(270deg, #E5CD7C -8.79%, #0EC0C8 107.88%)'
      },
      animation: {
        "gradient-flip": "gradient-flip 400ms ease infinite",
        "show-search": "show-search 400ms",
        "hide-search": "hide-search 400ms"
      },
      keyframes: {
        "gradient-flip": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "show-search": {
          from: {
            width: "4rem",
          }, to: {
            width: "20rem"
          }
        },
        "hide-search": {
          from: {
            width: "20rem",
          }, to: {
            width: "4rem",
          }
        }
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
