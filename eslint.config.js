import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierConfigLib from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import unicorn from "eslint-plugin-unicorn";

/** @typedef {import("eslint").Linter.Config} */
let Config;

/** @type {Config["files"]} */
const files = ["**/*.{ts,js,cjs}"];

/** @type {Config["ignores"]} */
const ignores = [
  "node_modules",
  "dist/**/*.{ts,js,cjs}",
  "*.config.{ts,js,cjs}",
  "dangerfile.ts",
];

/** @type {Config["languageOptions"]} */
const languageOptions = {
  globals: {
    ...globals.es2020,
    ...globals.node,
    // ...globals.commonjs,
    ...globals.jest,
  },
};

/** @type {Config} */
const tsConfig = {
  files,
  ignores,
  languageOptions: {
    ...languageOptions,
    parser: tsParser,
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  plugins: { "@typescript-eslint": tsPlugin },
  rules: {
    ...tsPlugin.configs["strict-type-checked"].rules,
    "@typescript-eslint/consistent-type-exports": ["error"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-magic-numbers": [
      "error",
      { ignoreEnums: true, ignoreReadonlyClassProperties: true },
    ],
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/no-extraneous-class": [
      "error",
      { allowWithDecorator: true },
    ],
    "@typescript-eslint/no-non-null-assertion": ["off"],
  },
};

/** @type {Config} */
const prettierConfig = {
  ...prettierConfigLib,
  files,
  ignores,
  languageOptions,
};

/** @type {Config} */
const perfectionistConfig = {
  files,
  ignores,
  languageOptions,
  plugins: { perfectionist },
  rules: {
    "perfectionist/sort-exports": ["error"],
    "perfectionist/sort-imports": ["error"],
    "perfectionist/sort-named-exports": ["error"],
    "perfectionist/sort-named-imports": ["error"],
  },
};

/** @type {Config} */
const unicornConfig = {
  files,
  ignores,
  languageOptions,
  plugins: { unicorn },
  rules: {
    ...unicorn.configs["recommended"].rules,
    "unicorn/filename-case": ["error", { case: "snakeCase" }],
    "unicorn/prefer-top-level-await": ["off"],
    "unicorn/prevent-abbreviations": ["error", { ignore: ["\\.e2e.test$"] }],
    "unicorn/better-regex": ["error"],
  },
};

/** @type {Config[]} */
const configs = [tsConfig, prettierConfig, perfectionistConfig, unicornConfig];

export default configs;
