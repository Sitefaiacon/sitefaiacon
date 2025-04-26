/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
          DEFAULT: "#2B4B8C",
          light: "#3A65BD",
          dark: "#1E3563",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E8EDF7",
          foreground: "#2B4B8C",
        },
        accent: {
          DEFAULT: "#FFB74D",
          foreground: "#1E3563",
        },
        muted: {
          DEFAULT: "#F8FAFD",
          foreground: "#64748B",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to bottom, #2B4B8C, #1E3563)",
        "gradient-secondary": "linear-gradient(to bottom, #E8EDF7, #FFFFFF)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
}
