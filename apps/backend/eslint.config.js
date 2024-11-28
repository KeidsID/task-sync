import baseConfigs from "../../eslint.config.js";

/** @typedef {import("eslint").Linter.Config} */
let Config;

/** @type {Config[]} */
const overridesConfigs = [
  {
    files: ["{src,test}/*.test.ts"],
    rules: {
      "@typescript-eslint/no-magic-numbers": ["off"],
    },
  },
  {
    files: ["test/*.e2e.test.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-argument": ["off"],
    },
  },
];

/** @type {Config[]} */
const configs = [...baseConfigs, ...overridesConfigs];

export default configs;
