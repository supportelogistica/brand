/**
 * Preset LEGADO para Tailwind CSS v3.
 *
 * Projetos em Tailwind CSS v4 (atual): use tokens/tailwind.css, que traz
 * os mesmos tokens no formato CSS-first (@theme):
 *   @import "tailwindcss";
 *   @import "./tokens/tailwind.css";
 *
 * Uso neste preset (apenas v3):
 *   // tailwind.config.js
 *   module.exports = { presets: [require("./tokens/tailwind.preset.js")], ... }
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        supporte: {
          chumbo: {
            DEFAULT: "#58595b",
            50: "#f7f7f8",
            100: "#ececed",
            200: "#d3d4d5",
            300: "#b9babb",
            400: "#98999b",
            500: "#77787a",
            600: "#68696b",
            700: "#58595b",
            800: "#4c4d4e",
            900: "#3f4041",
            950: "#1b1c1d",
          },
          laranja: {
            DEFAULT: "#f37021",
            50: "#fef4ec",
            100: "#fde3d2",
            200: "#fac5a4",
            300: "#f8a878",
            400: "#f58c4d",
            500: "#f37021",
            600: "#d95e12",
            700: "#b34d0f",
            800: "#8c3d0c",
            900: "#662c09",
            950: "#401c06",
          },
        },
      },
      fontFamily: {
        titulo: ['"Titillium Web"', '"Segoe UI"', "sans-serif"],
        texto: ['"Fira Sans"', '"Segoe UI"', "sans-serif"],
        mono: ['"Fira Code"', '"Cascadia Code"', "monospace"],
      },
      borderRadius: {
        "supporte-sm": "6px",
        "supporte-md": "12px",
        "supporte-lg": "24px",
      },
    },
  },
};
