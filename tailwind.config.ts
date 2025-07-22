import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Plantoria brand colors
        forest: {
          50: "#f0f9f0",
          100: "#dcf2dc",
          200: "#bce5bc",
          300: "#8dd18d",
          400: "#5bb95b",
          500: "#3d9f3d",
          600: "#2e7f2e",
          700: "#256525",
          800: "#1f511f",
          900: "#1a431a",
        },
        sage: {
          50: "#f6f7f6",
          100: "#e3e8e3",
          200: "#c7d1c7",
          300: "#9fb09f",
          400: "#748d74",
          500: "#577157",
          600: "#435943",
          700: "#364836",
          800: "#2d3c2d",
          900: "#273027",
        },
        earth: {
          50: "#faf9f7",
          100: "#f2f0eb",
          200: "#e7e2d7",
          300: "#d6cdb9",
          400: "#c2b394",
          500: "#b29d7a",
          600: "#a08968",
          700: "#857157",
          800: "#6d5d4a",
          900: "#584c3d",
        },
        moss: {
          50: "#f4f6f4",
          100: "#e6eae6",
          200: "#ced6ce",
          300: "#a8b8a8",
          400: "#7d947d",
          500: "#5f785f",
          600: "#4a5e4a",
          700: "#3d4e3d",
          800: "#334033",
          900: "#2b352b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
