import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'subtitlefont': ['Montserrat'],
  },
    extend: {
      colors: {
        colorblack: 'rgb(41, 41, 41)',
        colorblue: '#3B82F6',
    },
    },
  },
  plugins: [],
};
export default config;
