import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        goldPrimaryBtn:
          "linear-gradient(90.24deg, #E5A14B 0.24%, #FDD559 32.1%, #F7C55B 71.53%, #F1A144 99.85%)",
        secondaryGoldBtn:
          "linear-gradient(90deg, #E6B169 8.92%, #FFBE65 36.94%, #ECA944 95.29%)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        robotoFlex: ["var(--font-roboto-flex)"],
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        basicBlack: "#141414",
        blackBtn: "#282727",
        basicGreen: "#216509",
        basicViolet: "#A60CA9",
        darkViolet: "#733774",
        darkBlue: "#344DA6",
        basicGrey: "#D9D9D9",
        lightGrey: "#ECE7E7",
        darkGrey: "#A6A0A0",
        greyImputName: "#2E2E2E",
        cardBacsic: "#FFF",
        blackFooter: "#101010",
        secondaryGrey: "#3F3F3F",
        cardGrey: "#F1F1F1",
        hero: "rgba(29, 29, 29, 0.55)",
        heroTablet: "rgba(29, 29, 29, 0.4)",
        heroDesc: "transparent",
      },
    },

    transitionDuration: {
      DEFAULT: "300ms",
    },
  },
  plugins: [],
};
export default config;
