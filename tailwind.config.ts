import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#e6c364",
        "secondary-container": "#785d00",
        "on-tertiary": "#00363e",
        "on-primary": "#690001",
        "surface": "#131313",
        "secondary-fixed": "#ffe08f",
        "on-surface-variant": "#e1bfb9",
        "on-secondary": "#3d2e00",
        "primary-container": "#c0392b",
        "on-secondary-container": "#fdd977",
        "surface-tint": "#ffb4a9",
        "on-primary-fixed": "#410000",
        "outline-variant": "#59413d",
        "surface-container-highest": "#353535",
        "tertiary": "#81d3e4",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "inverse-surface": "#e5e2e1",
        "on-primary-fixed-variant": "#8e130c",
        "on-tertiary-fixed-variant": "#004e5a",
        "tertiary-fixed-dim": "#81d3e4",
        "inverse-on-surface": "#313030",
        "primary-fixed-dim": "#ffb4a9",
        "surface-container-lowest": "#0e0e0e",
        "surface-bright": "#393939",
        "on-error": "#690005",
        "primary": "#ffb4a9",
        "primary-fixed": "#ffdad5",
        "on-secondary-fixed": "#241a00",
        "on-tertiary-fixed": "#001f25",
        "background": "#131313",
        "on-background": "#e5e2e1",
        "inverse-primary": "#b02d21",
        "surface-container": "#20201f",
        "error": "#ffb4ab",
        "surface-variant": "#353535",
        "surface-container-high": "#2a2a2a",
        "tertiary-container": "#0d7484",
        "outline": "#a88a85",
        "tertiary-fixed": "#a3eeff",
        "surface-dim": "#131313",
        "surface-container-low": "#1c1b1b",
        "on-primary-container": "#ffe5e1",
        "on-secondary-fixed-variant": "#584400",
        "on-surface": "#e5e2e1",
        "on-tertiary-container": "#c0f3ff",
        "secondary": "#e6c364"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      spacing: {
        "sm": "12px",
        "md": "24px",
        "xs": "4px",
        "xl": "80px",
        "margin-desktop": "64px",
        "base": "8px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "lg": "48px"
      },
      fontFamily: {
        "headline-md": ["Playfair Display", "serif"],
        "label-md": ["Be Vietnam Pro", "sans-serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "display-lg": ["Playfair Display", "serif"],
        "headline-lg-mobile": ["Playfair Display", "serif"],
        "body-md": ["Be Vietnam Pro", "sans-serif"],
        "body-lg": ["Be Vietnam Pro", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "display-lg": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  },
  plugins: [],
};

export default config;
