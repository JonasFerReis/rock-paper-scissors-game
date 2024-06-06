import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: globals.browser
    },
    ignores: [
      ".config/*", 
      "./dist/**/*", 
      "./src/tests/**/*",
    ],
  },
  eslintConfigPrettier,
];