import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import angular from '@angular-eslint/eslint-plugin';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.angular/**',
      '**/coverage/**',
      '**/build/**',
      '**/out-tsc/**',
      '**/tmp/**',
    ],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular,
    },
    rules: {},
  },
  {
    files: ['src/app/features/**/components/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@angular/common/http',
              message:
                'Presentational components must not perform API requests. Move HttpClient usage into feature services (src/app/features/<feature>/services/**) and pass data in via @Input().',
            },
            {
              name: '@angular/router',
              message:
                'Presentational components must not orchestrate data via routing. Read route params in the page (pages/containers) and pass data in via @Input().',
            },
          ],
          patterns: [
            {
              group: ['**/services/**', '**/*.service', '**/*.service.ts'],
              message:
                'Presentational components must not import feature services. Emit @Output() events and let the page call the service.',
            },
          ],
        },
      ],
    },
  },
];

