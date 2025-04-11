import js from "@eslint/js";

// Temp FlatCompat: TS does not yet support Flatconfig.
// When it does, remove the "Temp FlatCompat" code and uncomment the rest.
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

// Temp FlatCompat
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { FlatCompat } from '@eslint/eslintrc';
const eslintrc = new FlatCompat({
  baseDirectory: __dirname
})
// ~Temp FlatCompat

export default [

  // Base configurations being extended.
  js.configs.recommended,
  
  // Temp FlatCompat
  ...eslintrc.plugins("@typescript-eslint"),
  ...eslintrc.extends(
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ),
  ...eslintrc.config({
    parserOptions: {
      project: ["./tsconfig.json"],
    },
    ignorePatterns: ["dist/*", "**/*.js"],
  }),
  // ~Temp FlatCompat
  //tsPlugin.configs.strict-type-checked,
  //tsPlugin.configs.stylistic-type-checked,

  // TypeScript linting.
  {
    files: ["src/**/*.ts"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
      }
    },
    //plugins: {
    //  tsPlugin,
    //},
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
    },


    linterOptions: {
      noInlineConfig: true,
    },
  }

];
