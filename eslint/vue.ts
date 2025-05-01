import { defineConfig } from "eslint/config"
import pluginVue from "eslint-plugin-vue"

/*
  eslint-plugin-vue
  Documentation: https://eslint.vuejs.org/rules/
*/
export default defineConfig({
  extends: [
    pluginVue.configs["flat/recommended"],
  ],
  name: "vauldex-eslint-configs/vue",
  rules: {
    "vue/attributes-order": ["error", {
      alphabetical: true,
      order: [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "ATTR_STATIC",
        "ATTR_DYNAMIC",
        "ATTR_SHORTHAND_BOOL",
        "EVENTS",
        "CONTENT",
      ],
    }],
    "vue/block-lang": ["error", {
      script: { lang: "ts" },
    }],
    "vue/block-order": ["error", { order: ["template", "script", "style"] }],
    "vue/block-tag-newline": "error",
    "vue/component-api-style": ["error", ["script-setup"]],
    "vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: false }],
    "vue/define-emits-declaration": "error",
    "vue/define-props-declaration": "error",
    "vue/html-button-has-type": "error",
    "vue/html-comment-content-spacing": "error",
    "vue/no-empty-component-block": "error",
    "vue/no-multiple-objects-in-class": "error",
    "vue/no-ref-object-reactivity-loss": "error",
    "vue/no-required-prop-with-default": "error",
    "vue/no-template-target-blank": "error",
    "vue/no-undef-properties": "error",
    "vue/no-unused-emit-declarations": "error",
    "vue/no-unused-properties": "error",
    "vue/no-unused-refs": "error",
    "vue/no-use-v-else-with-v-for": "error",
    "vue/no-useless-mustaches": "error",
    "vue/no-useless-v-bind": "error",
    "vue/no-v-text": "error",
    "vue/padding-line-between-blocks": "error",
    "vue/require-macro-variable-name": "error",
    "vue/require-typed-ref": "error",
    "vue/v-bind-style": ["error", "shorthand", { sameNameShorthand: "always" }], // note: if using shadcn, you may ignore this rule for the relevant files.
    "vue/v-for-delimiter-style": "error",
    "vue/define-macros-order": "error",
  },
})
