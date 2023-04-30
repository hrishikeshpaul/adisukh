import {
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "akw",
};

const fonts = {
  body: "'Figtree', sans-serif",
  heading: "'Figtree', sans-serif",
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 500,
  medium: 600,
  semibold: 700,
  bold: 800,
  extrabold: 900,
  black: 900,
};

export const bgLight = "white";

export const theme = extendTheme(
  {
    config,
    fonts,
    fontWeights,
    colors: {
      brand: {
        100: "#c1d0ce",
        200: "#9bb4b0",
        300: "#769892",
        400: "#c1d0ce",
        500: "#2b5f57",
        600: "#054339",
        700: "#043930",
        800: "#042f28",
        900: "#03251f",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
