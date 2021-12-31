module.exports = {
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        oleo: ["Oleo Script Swash Caps", "cursive"],
      },
      colors: {
        alpha: "hsl(0 100% 100% / 0.07)",
        light: "#E1E4FF",
        accent: "#9FA9FF",
        success: "#1FAB61",
        danger: "#D84D25",
        dark: "#17171F",
      },
    },
  },
  variants: {
    extend: {
      display: ["hover", "group-hover"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
};
