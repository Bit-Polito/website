import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
// eslint.config.js
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".next/*"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      js,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: true,
          semi: true,
          trailingComma: "none",
          printWidth: 100,
          tabWidth: 4,
          useTabs: false,
          bracketSpacing: true,
          arrowParens: "avoid",
        },
      ],
      ...js.configs.recommended.rules,
      "no-undef": "off",
      "linebreak-style": [
        "error",
        process.platform === "win32" ? "windows" : "unix",
      ],
      "no-multi-spaces": "error",
      "max-len": [
        "error",
        { code: 100, ignoreUrls: true, ignoreComments: true },
      ],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "no-trailing-spaces": "error",
      "no-unsafe-negation": "off",
      "operator-linebreak": ["off"],
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-function-paren": [
        "error",
        { anonymous: "always", named: "never", asyncArrow: "always" },
      ],
      "space-before-blocks": ["error", "always"],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      indent: [
        "error",
        4,
        {
          SwitchCase: 1,
          ignoredNodes: ["ConditionalExpression"],
          offsetTernaryExpressions: true,
        },
      ],

      // Import Rules
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "error",

      // General Best Practices
      //"no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-var": "error",
      "prefer-const": "error",
      "no-nested-ternary": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "multi", "consistent"],
      "space-infix-ops": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
]);
