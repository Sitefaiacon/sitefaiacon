/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgb(43, 75, 140)",
          light: "rgb(58, 101, 189)",
          dark: "rgb(30, 53, 99)",
          foreground: "rgb(255, 255, 255)",
        },
        secondary: {
          DEFAULT: "rgb(232, 237, 247)",
          foreground: "rgb(43, 75, 140)",
        },
        accent: {
          DEFAULT: "rgb(255, 183, 77)",
          foreground: "rgb(30, 53, 99)",
        },
        muted: {
          DEFAULT: "rgb(248, 250, 253)",
          foreground: "rgb(100, 116, 139)",
        },
      },

      fontFamily: {
        sans: ["var(--font-outfit)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
