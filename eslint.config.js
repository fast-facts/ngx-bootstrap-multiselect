const tseslint = require('typescript-eslint');
const config = require('eslint-config-final');

module.exports = tseslint.config(
  {
    ignores: [
      '**/node_modules/',
      'eslint.config.js'
    ],
  },
  {
    files: ['**/*.ts'],

    extends: [
      ...config.typescript,
    ],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: [
          'src/tsconfig.app.json',
          'src/tsconfig.spec.json',
          'demo/tsconfig.app.json',
          'demo/tsconfig.spec.json',
        ],
      },
    },
  }
);