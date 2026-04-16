import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bp: {
          evergreen: "#2E4639",
          fern: "#3D5A4C",
          sage: "#5B7B6A",
          moss: "#8BA89A",
          mist: "#C5D4CB",
          linen: "#EBF0ED",
          ivory: "#F7F5F0",
          sand: "#D4B896",
          clay: "#9B6B5A",
          gulf: "#6B8FA3",
          shell: "#E8DDD0",
          "warm-white": "#FDFCF9",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)"],
        body: ["var(--font-dm-sans)"],
      },
      boxShadow: {
        "bp-sm":
          "0 1px 3px rgba(46,70,57,0.06), 0 1px 2px rgba(46,70,57,0.04)",
        "bp-md":
          "0 4px 12px rgba(46,70,57,0.08), 0 2px 4px rgba(46,70,57,0.04)",
        "bp-lg":
          "0 12px 32px rgba(46,70,57,0.10), 0 4px 8px rgba(46,70,57,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;

