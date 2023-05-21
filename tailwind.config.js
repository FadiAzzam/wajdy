/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "light",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      typeFont: ['"Space Mono"'],
      body: ['"Open Sans"'],
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px	",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "14rem",
        "2xl": "0rem",
      },
    },
    extend: {
      backgroundImage: {
        "hero-cover": "url('/src/assets/imgs/Logo cover pic copy.png')",
      },
      colors: {
        lightBlue: "#ccd6f6",
        bodyFontColor: "#0a192f",
        primaryBG: "#F3F3F7",
        LightBG: {
          DEFAULT: "#E3E3EE",
          100: "#fafbff",
          200: "#E9EAF3",
        },
        DarkBg: "#272848",
        primaryColor: "#3B45FF",
        accentColor: {
          DEFAULT: "#C2C5FF",
          100: "#E6E7FB",
          200: "#9EDEFF",
          300: "#F9E0DC",
          400: "#DDD4F8",
          500: "#BDECF4",
        },
        BorderColor: "#3B45FF",
        borderColorOnDarkBG: "#303156",
      },
      gridTemplateRows: {
        "auto/1fr": "auto 1fr",
      },
      gridTemplateColumns: {
        "auto/1fr/1fr": "auto 1fr 1fr",
        "50px/1fr/1fr/50px": "50px 1fr 1fr 50px",
      },
    },
  },
  plugins: [],
};
