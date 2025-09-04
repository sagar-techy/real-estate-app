/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // match Figma-like heading font
      },
      colors: {
        brand: {
          500: "#3550A3",
          600: "#2c4490",
          700: "#223369",
        },
        neutral: {
          100: "#f9f9f9",
          900: "#111111",
        },
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};
