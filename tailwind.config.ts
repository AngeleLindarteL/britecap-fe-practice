import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "var(--color-header)",
        titles: "var(--titles)",
      },
      backgroundImage: {
        hero: "url(/home.jpg)",
      }
    },
  },
  plugins: [],
} satisfies Config;
