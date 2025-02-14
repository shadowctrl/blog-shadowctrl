import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        mars: "var(--font-mars)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pri-col": "var(--pri-col)",
      },
      animation: {
        bounce: "navbarBounce 0.1s ease-in-out 3",
      },
      keyframes: {
        navbarBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.3vh)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
