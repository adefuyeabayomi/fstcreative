import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
          DEFAULT: "#006FFF",
          50: "#EBF3FF",
          500: "#006FFF",
          600: "#0055CC",
          secondary: "#3B82F6",
          tertiary: "#60A5FA",
          main: "#1a48c5",
          tint: "#dfe6f7",
        },
        surface: {
          canvas: "#F4F5F7",
          primary: "#FFFFFF",
          secondary: "#EAECEF",
        },
        ink: {
          DEFAULT: "#111827",
          muted: "#4B5563",
          subdued: "#9CA3AF",
          inverse: "#FFFFFF",
        },
        success: "#10B981",
        alert: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",
      },
      borderRadius: {
        canvas: "24px",
        container: "20px",
        card: "16px",
        control: "10px",
      },
      boxShadow: {
        card: "0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        floating:
          "0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
        modal:
          "0 20px 35px -5px rgba(0, 0, 0, 0.12), 0 10px 15px -5px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        inter: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        quicksand: ["Quicksand", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
