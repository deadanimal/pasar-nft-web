module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {    
    "vue/html-indent": "off",
    "vue/max-attributes-per-line":"off",
    "vue/html-self-closing": "off",
    "indent": "off",            
    "smart-tabs": "off",
    "no-mixed-spaces-and-tabs":"off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/attributes-order": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/mustache-interpolation-spacing": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/component-definition-name-casing": "off",
    "vue/no-ref-as-operand": "off",
    "vue/require-prop-types": "off",
    "vue/order-in-components": "off"
  }
}