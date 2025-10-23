/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#041b32ff",
        "primary-foreground": "#ffffff",
        destructive: "#f87171",
        "destructive-foreground": "#ffffff",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
