/**
 * Preset Tailwind da marca Supporte (Tailwind v3).
 *
 * Uso:
 *   // tailwind.config.js
 *   module.exports = { presets: [require("./tokens/tailwind.preset.js")], ... }
 *
 * Tailwind v4: em vez de preset, importe tokens/supporte.css e mapeie no @theme:
 *   @theme {
 *     --color-supporte-laranja: #f37021;
 *     --color-supporte-chumbo: #58595b;
 *     --font-titulo: "Titillium Web", "Segoe UI", sans-serif;
 *     --font-texto: "Fira Sans", "Segoe UI", sans-serif;
 *     --font-mono: "Fira Code", "Cascadia Code", monospace;
 *   }
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        supporte: {
          chumbo: {
            DEFAULT: "#58595b",
            900: "#3f4041",
            700: "#58595b",
            500: "#77787a",
            300: "#b9babb",
            100: "#ececed",
            50: "#f7f7f8",
          },
          laranja: {
            DEFAULT: "#f37021",
            600: "#d95e12",
            500: "#f37021",
            100: "#fde3d2",
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
