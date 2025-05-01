import { defineConfig } from "eslint/config"
import tsEslint from "typescript-eslint"

/*
  typescript-eslint
  Documentation: https://typescript-eslint.io/rules/
*/
export default defineConfig({
  extends: [
    // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/10899
    tsEslint.configs.strict,
    // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/10899
    tsEslint.configs.stylistic,
  ],
  name: "vauldex-eslint-configs/typescript-eslint",
  rules: {
    "@typescript-eslint/class-methods-use-this": "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/max-params": ["error", { max: 3 }],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-function-type": "error",
  },
})
