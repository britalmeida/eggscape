import globals from "globals";
import eslint_js from "@eslint/js";
import eslint_ts from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default eslint_ts.config(

  // Base configurations being extended.
  eslint_js.configs.recommended,

  // Global ignores. These files will not be linted at all.
  {
    name: "eggscape/global-ignores",
    ignores: ["types/", "dist/", ".idea/"],
  },

  // Base configurations which will match .js and .ts files.
  // Subsequent configurations can affect the same files and will effectively extend these.
  {
    name: "uirenderer-canvas/js_fallback",
    files: ["**/*.js", "**/*.mjs"],
    plugins: { eslint_js },
    extends: [
      eslint_js.configs.recommended
    ]
  },
  {
    name: "eggscape/browser-globals",
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser }
  },

  // TypeScript linting.
  {
    name: "eggscape/ts-linting",
    files: ["src/**/*.ts"],

    extends: [
      eslint_ts.configs.strictTypeChecked,
      eslint_ts.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
      }
    },
    plugins: {
      tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
    },

    linterOptions: {
      noInlineConfig: true,
    },
  }

);
