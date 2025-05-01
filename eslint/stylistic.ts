import { defineConfig } from "eslint/config"
import stylistic from "@stylistic/eslint-plugin"

/*
  ESLint Stylistic
  Documentation: https://eslint.style/rules
*/
export default defineConfig({
  extends: [
    stylistic.configs.customize({
      braceStyle: "1tbs",
    }),
  ],
  name: "vauldex-eslint-configs/stylistic",
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    "@stylistic/array-bracket-newline": ["error", "consistent"],
    "@stylistic/array-element-newline": ["error", { consistent: true }],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
    "@stylistic/line-comment-position": "off",
    "@stylistic/object-curly-newline": ["error", { consistent: true }], // temporary
    "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: "avoidEscape", avoidEscape: true }],
    "@stylistic/switch-colon-spacing": ["error", { after: true, before: false }],
  },
})
