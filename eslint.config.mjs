import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'max-params': ['error', 3],
      'no-console': 'error',
    },
  },
];
