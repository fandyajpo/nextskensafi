const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      aqua: "#3CB3BA",
      background: "#E9F3FF",
      darkBlue: "#2E4F74",
      blueLight: "#0C75F0",
      orange2: "#F3915A",
      active: "#072341",
      headTabel: "#F3F6F9",
      danger: "#FFE2E5",
      success: "#C9F7F5",
      normal: "#E1EFFF",
      warning: "#FFF4DE",
      approved: "#EEE5FF",
      normalText: "#45709E",
      successText: "#1BC5BD",
      dangerText: "#F64E60",
      warningText: "#FFB62A",
      approvedText: "#8950FC",
      widget: "#3699FF",
      rapor: "#29999B",
      raporTable1: "#E9E6DF",
      raporTable2: "#F6F2E7",
      raporTable3: "#D9D3C7",
      sidebar: "#2E4F74",
    },
    fontFamily: {
      sans: ["Oxygen", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
