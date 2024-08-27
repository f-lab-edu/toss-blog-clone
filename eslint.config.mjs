import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
  {
    rules: {
      'max-params': ['error', 3],
      'no-console': 'error',
    },
  },
];
