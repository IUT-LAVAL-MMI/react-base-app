module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  globals: {
    APP_ENV_APP_PUBLIC_PATH: 'readonly',
    APP_ENV_APP_TITLE: 'readonly',
  },
  rules: {
    'no-console': ['error', {
      allow: ['warn', 'error'],
    }],
    'no-underscore-dangle': 'off',
  },
  overrides: [
    {
      files: ['*.test.*'],
      env: {
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      globals: {
        fetchMock: 'readonly',
      },
    },
  ],
};
