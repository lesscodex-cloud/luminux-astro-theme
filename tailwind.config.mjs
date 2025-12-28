/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: "#0b1021",
        aurora: "#6ef3ff",
        lavender: "#b3a4ff",
        slate: "#9aa3b5",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 70px rgba(110, 243, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
