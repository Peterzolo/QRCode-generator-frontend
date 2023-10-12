export type ThemeType = {
  mainColor: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  backgroundColor: {
    primary: string;
    secondary: string;
    whiteBg: string;
    lightGreyBg: string;
    lightGreyBg2: string;
    transparent: string;
  };
  textColors: {
    lightGrey: string;
    lightGrey2: string;
    lightGrey3: string;
    darkGrey: string;
    whiteText: string;
  };
  cardBackground: {
    bg: string;
  };
  font: {
    fontSize: {
      header01: string;
      header02: string;
      header03: string;
      header04: string;
      header05: string;
      paragraph: string;
      small: string;
    };
    fontWeight: {
      bold: string;
      w700: string;
      w500: string;
      w300: string;
    };
  };
  boxshadow: {
    small: string;
  };
};

export const theme: ThemeType = {
  mainColor: {
    primary: "#006d75",
    secondary: "#ffa940",
    tertiary: "#13c2c2",
  },
  backgroundColor: {
    primary: "#006d75",
    secondary: "#ffa940",
    whiteBg: "#fafafa",
    lightGreyBg: "#f0f0f0",
    lightGreyBg2: "#d9d9d9",
    transparent: "transparent",
  },

  textColors: {
    lightGrey: "#434343",
    lightGrey2: "#8c8c8c",
    lightGrey3: "#f5f5f5",
    darkGrey: "#141414",
    whiteText: "#fafafa",
  },

  cardBackground: {
    bg: "#fafafa",
  },
  font: {
    fontSize: {
      header01: "30px",
      header02: "25px",
      header03: "22px",
      header04: "20px",
      header05: "18px",
      paragraph: "16px",
      small: "14px",
    },
    fontWeight: {
      bold: "bold",
      w700: "700",
      w500: "500",
      w300: "300",
    },
  },
  boxshadow: {
    small: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  },
};
