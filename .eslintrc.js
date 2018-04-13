module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  extends: ['plugin:vue/recommended', 'standard'],
  plugins: ['vue'],
  rules: {
    'object-curly-spacing': 2
  }
}
