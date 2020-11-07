module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['controllers', './src/controllers'],
          ['models', './src/models']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'import/extensions': 0,
    'no-console': 0,
  },
};
