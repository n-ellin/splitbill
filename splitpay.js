tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f49d25",
        "background-light": "#f8f7f5",
        "background-dark": "#221a10",
        "pastel-green": "#e0f2f1",
        "pastel-peach": "#ffe0b2",
        "pastel-lavender": "#f3e5f5",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
};
