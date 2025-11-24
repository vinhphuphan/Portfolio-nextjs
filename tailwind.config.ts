import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideToLeft: {
          "0%": { transform: "translateX(2.5rem)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(2.5rem)" },
          "100%": { transform: "translateY(0)" },
        },
        appear : {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        perspectiveRotate: {
          '0%': {
            opacity: '0',
            transform: 'perspective(1200px) translateY(80px) rotateX(-90deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'perspective(1200px) translateY(0px) rotateX(0deg)',
          },
        }
      },
      animation: {
        slideToLeft: "slideToLeft 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
        appear: "appear 0.5s ease var(--appear-delay, 0) forwards",
        perspectiveRotate: "perspectiveRotate 1s ease var(--rotate-delay, 0) forwards",
      },
      backgroundImage: {
        myAvatar: "url('/images/avatar.avif')",
      },
      boxShadow: {
        customShadow: "rgb(0 0 0 / 10%) 0px 24px 56px 0px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#313131",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#101012",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        customRadius: "2px 80px 80px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
