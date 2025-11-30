/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../mf-host/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../mf-remote/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
