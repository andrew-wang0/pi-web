import nextPlugin from "@next/eslint-plugin-next";

import reactConfig from "./eslint.config.react.js";

const config = [
  ...reactConfig,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      ".open-next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default config;
