import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5465c5",
        react: "#61dafb",
        vue: "#41b883",
        angular: "#dd0031",
        node: "#68a063",
        express: "#303030",
        nest: "#e0234e",
        next: "#000000",
        apollo: "#311c87",
        gatsby: "#663399",
        remix: "#f5a300",
        flutter: "#02569b",
        reactNative: "#61dafb",
        swift: "#f05138",
        kotlin: "#0095d5",
        java: "#007396",
        net: "#512bd4",
        python: "#3776ab",
        go: "#00add8",
        ruby: "#cc0000",
        php: "#8892be",
        javascript: "#f7df1e",
        typescript: "#007acc",
        html: "#e34c26",
        tailwind: "#06b6d4",
        bootstrap: "#7952b3",
        material: "#0081cb",
        mongodb: "#13aa52",
        postgresql: "#336791",
        redis: "#dc382d",
        graphql: "#e535ab",
        docker: "#2496ed",
        kubernetes: "#326ce5",
        aws: "#ff9900",
        gcp: "#4285f4",
        azure: "#0089d6",
      },
    },
  },
  plugins: [],
};
export default config;
