import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['node_modules/*', '**/*/dist', 'example/', '**/*.cjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {},
  },
];
