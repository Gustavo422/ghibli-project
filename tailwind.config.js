/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#3b82f6",
      "primary-foreground": "#ffffff",
      destructive: "#f87171",
      "destructive-foreground": "#ffffff",
    },
  },
};
export const plugins = [];
