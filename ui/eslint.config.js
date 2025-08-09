import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-console': 'error',
      'import/order': 'warn',
      'import/no-default-export': 'warn',
      'import/no-unused-modules': 'warn',
      'import/no-deprecated': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-unresolved': 'off',
    },
  },
]);
