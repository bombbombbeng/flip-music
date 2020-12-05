module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'no-var': ['error'],
    'comma-dangle': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    semi: ['error', 'never'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  },
}
