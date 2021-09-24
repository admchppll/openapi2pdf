module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
