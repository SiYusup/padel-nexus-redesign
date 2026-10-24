import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chalk: "var(--chalk)",
        concrete: "var(--concrete)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        line: "var(--line)",
        court: {
          DEFAULT: "var(--court)",
          lit: "var(--court-lit)",
        },
        "on-court": {
          DEFAULT: "var(--on-court)",
          soft: "var(--on-court-soft)",
          faint: "var(--on-court-faint)",
        },
        signal: {
          DEFAULT: "var(--signal)",
          deep: "var(--signal-deep)",
        },
        "on-signal": "var(--on-signal)",
        mist: "var(--mist)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        xs: ["var(--text-xs)", { lineHeight: "1.5" }],
        base: ["var(--text-base)", { lineHeight: "1.65" }],
        lg: ["var(--text-lg)", { lineHeight: "1.55" }],
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
    },
  },
  plugins: [],
};
export default config;
