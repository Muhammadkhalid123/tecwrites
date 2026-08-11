import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#005047",
        "on-primary-fixed-variant": "#122acd",
        "tertiary-fixed-dim": "#ffb5a0",
        "surface-bright": "#ffffff",
        "inverse-on-surface": "#f1effc",
        "outline": "#757687",
        "surface-container-highest": "#e3e1ee",
        "surface-tint": "#364ae4",
        "on-primary-fixed": "#000a63",
        "on-primary-container": "#b8beff",
        "surface-variant": "#e3e1ee",
        "secondary-container": "#3cf9df",
        "on-tertiary-fixed": "#3b0900",
        "inverse-primary": "#bcc2ff",
        "on-error": "#ffffff",
        "outline-variant": "#c5c5d8",
        "on-background": "#1a1b24",
        "error": "#ba1a1a",
        "tertiary": "#701900",
        "on-surface": "#1a1b24",
        "on-tertiary-fixed-variant": "#872100",
        "on-tertiary-container": "#ffb09a",
        "on-secondary-container": "#006f62",
        "on-surface-variant": "#454655",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#2338d6",
        "background": "#FAF6F0",
        "tertiary-container": "#982600",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "surface-container-high": "#e9e7f4",
        "secondary-fixed": "#41fce2",
        "surface-container": "#eeecf9",
        "primary-fixed": "#dfe0ff",
        "on-secondary-fixed": "#00201b",
        "tertiary-fixed": "#ffdbd1",
        "on-error-container": "#93000a",
        "surface-container-low": "#f4f2ff",
        "surface": "#ffffff",
        "primary": "#001bb5",
        "error-container": "#ffdad6",
        "primary-fixed-dim": "#bcc2ff",
        "secondary": "#006b5e",
        "secondary-fixed-dim": "#00dfc6",
        "inverse-surface": "#2f3039",
        "on-secondary": "#ffffff",
        "surface-dim": "#dad9e5"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px",
        "blob": "60% 40% 30% 70% / 60% 30% 70% 40%",
        "blob-2": "40% 60% 70% 30% / 40% 50% 60% 50%"
      },
      spacing: {
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "unit": "8px",
        "gutter": "24px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-lg": ["var(--font-jakarta)", "sans-serif"],
        "body-md": ["var(--font-dm-sans)", "sans-serif"],
        "label-caps": ["var(--font-hanken)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-jakarta)", "sans-serif"],
        "headline-xl": ["var(--font-jakarta)", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.08em", "fontWeight": "600" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }]
      },
      boxShadow: {
        'clay': '30px 30px 60px rgba(0, 0, 0, 0.12), inset -8px -8px 20px rgba(0, 0, 0, 0.08)',
        'clay-active': '35px 35px 70px rgba(0, 0, 0, 0.16), inset -10px -10px 25px rgba(0, 0, 0, 0.1)',
        'clay-inset': 'inset 12px 12px 24px rgba(0, 0, 0, 0.1)',
        'clay-sm': '15px 15px 30px rgba(0, 0, 0, 0.1), inset -4px -4px 10px rgba(0, 0, 0, 0.06)'
      },
      animation: {
        "blob-bounce": "blobBounce 10s infinite alternate",
        "blob-pulse": "blobPulse 10s ease-in-out infinite",
        "blob-pulse-alt": "blobPulseAlt 12s ease-in-out infinite",
      },
      keyframes: {
        blobBounce: {
          "0%": { transform: "scale(1) translate(0, 0)", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { transform: "scale(1.05) translate(20px, -20px)", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" },
          "100%": { transform: "scale(0.95) translate(-20px, 20px)", borderRadius: "50% 50% 40% 60% / 50% 60% 40% 50%" },
        },
        blobPulse: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "scale(1)" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%", transform: "scale(1.05)" },
        },
        blobPulseAlt: {
          "0%, 100%": { borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%", transform: "scale(1) rotate(0deg)" },
          "50%": { borderRadius: "70% 30% 40% 60% / 60% 40% 70% 30%", transform: "scale(1.02) rotate(5deg)" },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    function({ addUtilities }: any) {
      addUtilities({
        '.bg-primary': {
          backgroundImage: 'linear-gradient(135deg, #00D2FF 0%, #003B95 100%)',
          backgroundColor: 'transparent',
        },
        '.text-primary': {
          backgroundImage: 'linear-gradient(135deg, #00D2FF 0%, #003B95 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        },
        '.border-primary': {
          borderColor: '#003B95',
        }
      })
    }
  ],
};
export default config;
