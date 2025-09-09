import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dark: {
        colors: {
          default: {
            50: "#0D0B0D",
            100: "#1A161A",
            200: "#272227",
            300: "#342D34",
            400: "#413841",
            500: "#676067",
            600: "#8D888D",
            700: "#B3AFB3",
            800: "#D9D7D9",
            900: "#FFFFFF",
            foreground: "#fff",
            DEFAULT: "#413841",
          },
          primary: {
            50: "#422C17",
            100: "#684524",
            200: "#8E5F31",
            300: "#B5783E",
            400: "#DB924B",
            500: "#E1A56B",
            600: "#E8B88A",
            700: "#EECBAA",
            800: "#F4DEC9",
            900: "#FBF1E9",
            foreground: "#000",
            DEFAULT: "#DB924B",
          },
          secondary: {
            50: "#1B2828",
            100: "#2B3F40",
            200: "#3B5657",
            300: "#4A6D6F",
            400: "#5A8486",
            500: "#779A9B",
            600: "#94AFB0",
            700: "#B1C5C6",
            800: "#CEDADB",
            900: "#EAF0F0",
            foreground: "#000",
            DEFAULT: "#5A8486",
          },
          success: {
            50: "#2F3729",
            100: "#4B5740",
            200: "#667758",
            300: "#82976F",
            400: "#9DB787",
            500: "#AEC49C",
            600: "#BFD0B1",
            700: "#D0DDC6",
            800: "#E2E9DB",
            900: "#F3F6F0",
            foreground: "#000",
            DEFAULT: "#9DB787",
          },
          warning: {
            50: "#4D3F1D",
            100: "#79642D",
            200: "#A6893E",
            300: "#D2AD4E",
            400: "#FFD25F",
            500: "#FFDA7B",
            600: "#FFE297",
            700: "#FFEAB3",
            800: "#FFF2CF",
            900: "#FFF9EB",
            foreground: "#000",
            DEFAULT: "#FFD25F",
          },
          danger: {
            50: "#4C2D27",
            100: "#78473D",
            200: "#A46154",
            300: "#D07B6A",
            400: "#FC9581",
            500: "#FDA897",
            600: "#FDBAAD",
            700: "#FECDC3",
            800: "#FEDFD9",
            900: "#FFF2EF",
            foreground: "#000",
            DEFAULT: "#FC9581",
          },
          background: "#20161F",
          foreground: "#C59F60",
          content1: {
            DEFAULT: "#2C1F2B",
            foreground: "#fff",
          },
          content2: {
            DEFAULT: "#3E2B3C",
            foreground: "#fff",
          },
          content3: {
            DEFAULT: "#50374D",
            foreground: "#fff",
          },
          content4: {
            DEFAULT: "#62435F",
            foreground: "#fff",
          },
          focus: "#DB924B",
          overlay: "#FFFFFF",
        },
      },
    },
    layout: {
      disabledOpacity: "0.5",
    },
  },
  darkMode: "class",
  plugins: [heroui({
  "themes": {
    "light": {
      "colors": {
        "default": {
          "50": "#F6F5F4",
          "100": "#E9E7E5",
          "200": "#DBD9D6",
          "300": "#CECBC6",
          "400": "#C1BDB7",
          "500": "#B4AFA8",
          "600": "#95908B",
          "700": "#75726D",
          "800": "#565350",
          "900": "#363532",
          "foreground": "#000",
          "DEFAULT": "#B4AFA8"
        },
        "primary": {
          "50": "#FBF1E9",
          "100": "#F4DEC9",
          "200": "#EECBAA",
          "300": "#E8B88A",
          "400": "#E1A56B",
          "500": "#DB924B",
          "600": "#B5783E",
          "700": "#8E5F31",
          "800": "#684524",
          "900": "#422C17",
          "foreground": "#000",
          "DEFAULT": "#DB924B"
        },
        "secondary": {
          "50": "#EAF0F0",
          "100": "#CEDADB",
          "200": "#B1C5C6",
          "300": "#94AFB0",
          "400": "#779A9B",
          "500": "#5A8486",
          "600": "#4A6D6F",
          "700": "#3B5657",
          "800": "#2B3F40",
          "900": "#1B2828",
          "foreground": "#000",
          "DEFAULT": "#5A8486"
        },
        "success": {
          "50": "#F3F6F0",
          "100": "#E2E9DB",
          "200": "#D0DDC6",
          "300": "#BFD0B1",
          "400": "#AEC49C",
          "500": "#9DB787",
          "600": "#82976F",
          "700": "#667758",
          "800": "#4B5740",
          "900": "#2F3729",
          "foreground": "#000",
          "DEFAULT": "#9DB787"
        },
        "warning": {
          "50": "#FFF9EB",
          "100": "#FFF2CF",
          "200": "#FFEAB3",
          "300": "#FFE297",
          "400": "#FFDA7B",
          "500": "#FFD25F",
          "600": "#D2AD4E",
          "700": "#A6893E",
          "800": "#79642D",
          "900": "#4D3F1D",
          "foreground": "#000",
          "DEFAULT": "#FFD25F"
        },
        "danger": {
          "50": "#FFF2EF",
          "100": "#FEDFD9",
          "200": "#FECDC3",
          "300": "#FDBAAD",
          "400": "#FDA897",
          "500": "#FC9581",
          "600": "#D07B6A",
          "700": "#A46154",
          "800": "#78473D",
          "900": "#4C2D27",
          "foreground": "#000",
          "DEFAULT": "#FC9581"
        },
        "background": "#FFFBF6",
        "foreground": "#A27225",
        "content1": {
          "DEFAULT": "#FFF2E0",
          "foreground": "#000"
        },
        "content2": {
          "DEFAULT": "#FFE9CC",
          "foreground": "#000"
        },
        "content3": {
          "DEFAULT": "#FFE0B8",
          "foreground": "#000"
        },
        "content4": {
          "DEFAULT": "#FFD7A3",
          "foreground": "#000"
        },
        "focus": "#DB924B",
        "overlay": "#000000"
      }
    },
    "dark": {
      "colors": {
        "default": {
          "50": "#0D0B0D",
          "100": "#1A161A",
          "200": "#272227",
          "300": "#342D34",
          "400": "#413841",
          "500": "#676067",
          "600": "#8D888D",
          "700": "#B3AFB3",
          "800": "#D9D7D9",
          "900": "#FFFFFF",
          "foreground": "#fff",
          "DEFAULT": "#413841"
        },
        "primary": {
          "50": "#422C17",
          "100": "#684524",
          "200": "#8E5F31",
          "300": "#B5783E",
          "400": "#DB924B",
          "500": "#E1A56B",
          "600": "#E8B88A",
          "700": "#EECBAA",
          "800": "#F4DEC9",
          "900": "#FBF1E9",
          "foreground": "#000",
          "DEFAULT": "#DB924B"
        },
        "secondary": {
          "50": "#1B2828",
          "100": "#2B3F40",
          "200": "#3B5657",
          "300": "#4A6D6F",
          "400": "#5A8486",
          "500": "#779A9B",
          "600": "#94AFB0",
          "700": "#B1C5C6",
          "800": "#CEDADB",
          "900": "#EAF0F0",
          "foreground": "#000",
          "DEFAULT": "#5A8486"
        },
        "success": {
          "50": "#2F3729",
          "100": "#4B5740",
          "200": "#667758",
          "300": "#82976F",
          "400": "#9DB787",
          "500": "#AEC49C",
          "600": "#BFD0B1",
          "700": "#D0DDC6",
          "800": "#E2E9DB",
          "900": "#F3F6F0",
          "foreground": "#000",
          "DEFAULT": "#9DB787"
        },
        "warning": {
          "50": "#4D3F1D",
          "100": "#79642D",
          "200": "#A6893E",
          "300": "#D2AD4E",
          "400": "#FFD25F",
          "500": "#FFDA7B",
          "600": "#FFE297",
          "700": "#FFEAB3",
          "800": "#FFF2CF",
          "900": "#FFF9EB",
          "foreground": "#000",
          "DEFAULT": "#FFD25F"
        },
        "danger": {
          "50": "#4C2D27",
          "100": "#78473D",
          "200": "#A46154",
          "300": "#D07B6A",
          "400": "#FC9581",
          "500": "#FDA897",
          "600": "#FDBAAD",
          "700": "#FECDC3",
          "800": "#FEDFD9",
          "900": "#FFF2EF",
          "foreground": "#000",
          "DEFAULT": "#FC9581"
        },
        "background": "#20161F",
        "foreground": "#C59F60",
        "content1": {
          "DEFAULT": "#2C1F2B",
          "foreground": "#fff"
        },
        "content2": {
          "DEFAULT": "#3E2B3C",
          "foreground": "#fff"
        },
        "content3": {
          "DEFAULT": "#50374D",
          "foreground": "#fff"
        },
        "content4": {
          "DEFAULT": "#62435F",
          "foreground": "#fff"
        },
        "focus": "#DB924B",
        "overlay": "#FFFFFF"
      }
    }
  },
  "layout": {
    "disabledOpacity": "0.5"
  }
  })],
};
