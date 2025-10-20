import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")].map((config) => {
  // Remove non-serializable parser properties
  if (config.languageOptions?.parser) {
    const { parse, parseForESLint, ...serializableParser } = config.languageOptions.parser;
    return {
      ...config,
      languageOptions: {
        ...config.languageOptions,
        parser: serializableParser,
      },
    };
  }
  return config;
});

export default eslintConfig;
