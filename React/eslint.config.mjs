import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import globals from "globals"; // Eslint wont' mistakenly mark global variables as undefined

/** @type {import("eslint").Linter.Config[]} */
export default [
  // Configurations
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
