import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  // The rest of the site still uses Bootstrap grid + App.css. Keeping preflight
  // off lets the Header be migrated to Tailwind without resetting other pages.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
      },
      colors: {
        royal: {
          DEFAULT: "#0533aa",
          dark: "#00113c",
          ink: "#000617",
          link: "#0036ca",
          light: "#608aff",
        },
        brand: {
          main: "#1a48c5",
          tint: "#dfe6f7",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
