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
      boxShadow: {
        "yellow-glow": '0px 3.63px 32.582px 1.815px rgba(229, 205, 124, 0.79)',
        "yellow-glow-sm": '0px 3.63px 24.686px 3.63px rgba(229, 205, 124, 0.60)',
        "yellow-glow-inset": '0px 3.63px 32.582px 1.815px rgba(229, 205, 124, 0.79)',
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
        "show-search": "show-search 400ms",
        "hide-search": "hide-search 400ms",
        "slide-left" : "slide-left 400ms ease",
        "slide-in": "slide-in 800ms ease",
        marquee: "marquee linear infinite",
      },
      keyframes: {
        "show-search": {
          from: {
            width: "4rem",
          }, to: {
            width: "20rem"
          }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-left": {
          from: {
            transform: "translateX(25rem)"
          },
          to: {
            transform: "translateX(0rem)"
          }
        },
        "hide-search": {
          from: {
            width: "20rem",
          }, to: {
            width: "4rem",
          }
        },
        "slide-in": {
          "0%": {
            transform: "translateY(5rem)",
            opacity: "0.3"
          }, 
          // "80%": {
          //   transform: "translateY(-0.4rem)",
          //   opacity: "0.8"
          // },
           "100%": {
            transform: "translateY(0rem)",
            opacity: "1"
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
