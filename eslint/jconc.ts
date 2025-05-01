import eslintPluginJsonc from "eslint-plugin-jsonc"
import { defineConfig } from "eslint/config"

/*
  eslint-plugin-jsonc
  Documentation: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/
*/
export default defineConfig({
  extends: [
    eslintPluginJsonc.configs["flat/recommended-with-json"],
  ],
  name: "vauldex-eslint-configs/eslint-plugin-jsonc",
  rules: {
    "jsonc/indent": ["error", 2],
    "jsonc/no-irregular-whitespace": "error",
    // Disable in JSON files in favor of `jsonc` equivalent
    "no-irregular-whitespace": "off",
  },
},
{
  // Enable sorting for specific files
  files: ["i18n/locales/**/*.json"], // off
  name: "vauldex-eslint-configs/eslint-plugin-jsonc/sort-locales",
  rules: {
    "jsonc/sort-keys": "error", // off
  },
})
