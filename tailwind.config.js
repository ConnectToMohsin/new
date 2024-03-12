/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#06060f",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(255, 255, 255, 0.15)",
          "400": "rgba(255, 255, 255, 0.43)",
          "500": "rgba(255, 255, 255, 0.8)",
          "600": "rgba(255, 255, 255, 0.05)",
          "700": "rgba(255, 255, 255, 0.07)",
          "800": "rgba(255, 255, 255, 0.75)",
          "900": "rgba(255, 255, 255, 0.42)",
        },
        darkblue: "#1a1db1",
        seagreen: "#27a376",
        "others-white": "#fff",
        "greyscale-700": "#313a49",
        "alerts-error-base": "#e03137",
      },
      spacing: {},
      fontFamily: {
        "aeonik-pro": "'Aeonik Pro'",
        "body-medium-medium": "Manrope",
      },
      borderRadius: {
        mini: "15px",
        "51xl": "70px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
