import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: { 950: "#0A0E14", 900: "#10161F", 800: "#18202C", 700: "#263243" }, paper: { DEFAULT: "#F6F3EC", 2: "#ECE8DF" }, line: "#D9D4C7", slate: "#5B6778", mist: "#A3AFC2", cobalt: { DEFAULT: "#2F4BFF", deep: "#1F36C9", light: "#8DA0FF", tint: "#E4E8FF" }, pulse: "#4ADE9E" },
    fontFamily: { display: ["var(--font-display)", "system-ui"], sans: ["var(--font-body)", "system-ui"], mono: ["var(--font-mono)", "ui-monospace"], serif: ["var(--font-accent)", "Georgia"] },
    borderRadius: { sm: "4px", md: "10px", lg: "16px", xl: "24px" },
    boxShadow: { sm: "0 1px 2px rgba(10,14,20,.06),0 1px 1px rgba(10,14,20,.04)", md: "0 8px 24px -8px rgba(10,14,20,.12),0 2px 6px rgba(10,14,20,.05)", lg: "0 24px 60px -20px rgba(10,14,20,.28),0 6px 16px rgba(10,14,20,.06)" },
    maxWidth: { page: "1200px" },
  } },
} satisfies Config;
