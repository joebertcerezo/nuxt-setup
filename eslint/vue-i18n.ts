import { defineConfig } from "eslint/config"
import vuei18n from "@intlify/eslint-plugin-vue-i18n"

/*
  eslint-plugin-vue-i18n
  Documentation: https://eslint-plugin-vue-i18n.intlify.dev/rules/
*/
export default defineConfig({ extends: [
  vuei18n.configs.recommended,
],
name: "vauldex-eslint-configs/vue-i18n",
rules: {
  "@intlify/vue-i18n/key-format-style": ["error", "snake_case"],
  "@intlify/vue-i18n/no-duplicate-keys-in-locale": "error",
  "@intlify/vue-i18n/no-dynamic-keys": "error",
  "@intlify/vue-i18n/no-missing-keys-in-other-locales": "error",
  "@intlify/vue-i18n/no-unknown-locale": "error",
  "@intlify/vue-i18n/no-unused-keys": "error",
  "@intlify/vue-i18n/prefer-linked-key-with-paren": "error",
  "@intlify/vue-i18n/sfc-locale-attr": "error",
},
settings: {
  "vue-i18n": {
    localeDir: "i18n/locales/{en,ja}.{json,json5,yaml,yml}",
    messageSyntaxVersion: "^9.0.0",
  },
} })
