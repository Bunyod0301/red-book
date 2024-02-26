import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundImage: (theme) => ({
        // primary_gradient: `linear-gradient(to right, ${theme("colors.gradient1")}, ${theme("colors.gradient2")})`,
        card_gradient1: "linear-gradient(180deg, color1 0%, color2 100%)",
        text_gradient2: "linear-gradient(90.12deg, color4 0.05%, color3 70.33%);",
      }),
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "retro",
      "valentine",
      "aqua",
      {
        "custom-theme": {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base -100": "#ffffff",
        },
      },
    ]
  }
};
export default config;
