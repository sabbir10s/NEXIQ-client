module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3860BE",

          "secondary": "#C4CD2B",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#FF5501",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};