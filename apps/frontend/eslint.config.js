import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

import baseConfigs from "../../eslint.config.js";

/** @typedef {import("eslint").Linter.Config} */
let Config;

/** @type {Config["ignores"]} */
const ignores = ["node_modules", "build", "*.config.{ts,js,cjs}"];

/** @type {Config["languageOptions"]} */
const languageOptions = {
  globals: {
    ...globals.es2020,
    ...globals.node,
    ...globals.browser,
    ...globals.jest,
    JSX: true,
    React: true,
  },
};

/** @type {Config} */
const mainConfig = {
  extends: ["eslint:recommended"],
  files: ["**/*.{ts,js,cjs}"],
  ignores,
  languageOptions: languageOptions,
};

/** @type {Config} */
const reactConfig = {
  files: ["**/*.tsx"],
  languageOptions,
  plugins: { react: reactPlugin },
  settings: {
    react: { version: "detect" },
    formComponents: ["Form"],
    linkComponents: [
      { name: "Link", linkAttribute: "to" },
      { name: "NavLink", linkAttribute: "to" },
    ],
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    ...reactPlugin.configs["jsx-runtime"].rules,
    ...reactPlugin.configs["recommended"].rules,
    "react/jsx-boolean-value": ["error"],
    "react/jsx-curly-brace-presence": ["error"],
    "react/jsx-no-bind": ["error", { ignoreRefs: true }],
    "react/self-closing-comp": ["error"],
  },
};

/** @type {Config} */
const reactHooksConfig = {
  files: ["**/*.tsx"],
  languageOptions,
  plugins: { "react-hooks": reactHooksPlugin },
  rules: reactHooksPlugin.configs.recommended.rules,
};

/** @type {Config} */
const jsxA11yConfig = {
  files: ["**/*.tsx"],
  languageOptions,
  plugins: { "jsx-a11y": jsxA11y },
  rules: jsxA11y.configs.recommended.rules,
};

/** @type {Config[]} */
const configs = [
  ...baseConfigs,
  mainConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
];

export default configs;
