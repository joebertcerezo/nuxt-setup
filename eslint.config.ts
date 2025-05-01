import withNuxt from "./.nuxt/eslint.config.mjs"
import eslintBaseConfig from "./eslint/eslint"
import eslintTsConfig from "./eslint/typescript-eslint"
import eslintVueConfig from "./eslint/vue"
import eslintVueI18nConfig from "./eslint/vue-i18n"
import eslintStylisticConfig from "./eslint/stylistic"

export default withNuxt(eslintStylisticConfig, eslintVueI18nConfig).prepend(
  eslintVueConfig,
  eslintBaseConfig,
  eslintTsConfig,
)
