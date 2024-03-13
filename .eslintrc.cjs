module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@conarti/feature-sliced/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@conarti/feature-sliced/public-api': 'off',
  },
};