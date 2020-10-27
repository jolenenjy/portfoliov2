const theme = {
  maxWidth: "800px",
  breakpoint: [
    "1150px", // 0
    "890px", // 1
    "600px", // 2
    "360px", // 3
  ],
  space: [
    "0px", // 0
    "4px", // 1
    "8px", // 2
    "16px", // 3
    "24px", // 4
    "32px", // 5
    "48px", // 6
    "64px", // 7
    "96px", // 8
    "128px", // 9
    "160px", // 10
  ],
  fontSizes: [
    "2rem", // 0 32px
    "1.875rem", // 1 30px
    "1.5rem", // 2 24px
    "1.25rem", // 3 20px
    "1.125rem", // 4 18px
    "1rem", // 5 16px
    "0.875rem", // 6 14px
    "0.75rem", // 7 12px
  ],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    lightgrey4: "#F9FAFB",
    lightgrey3: "#F4F6F8",
    lightgrey2: "#DFE3E8",
    lightgrey1: "#C4CDD5",
    grey4: "#919EAB",
    grey3: "#637381",
    grey2: "#454F5B",
    grey1: "#212B36",
    text: "#F9FAFB",
    textSecondary: "#DFE3E8",
    textLink: "rgb(64,156,255)",
  },
  animations: {
    default: "ease 0.4s;",
    hover: "0.35s cubic-bezier(0.165, 0.84, 0.44, 1)",
  },
};

export default theme;
