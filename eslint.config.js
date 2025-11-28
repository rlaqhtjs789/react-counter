import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import testingLibrary from 'eslint-plugin-testing-library'
import jestDom from 'eslint-plugin-jest-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    // 테스트 파일에만 jest-dom 및 testing-library 규칙 적용
    files: ['**/*.test.{js,jsx}'],
    plugins: {
      testingLibrary,
      jestDom,
    },
    extends: [
      testingLibrary.configs.react,
      jestDom.configs.recommended,
    ],
    rules: {
      // jest-dom/prefer-to-have-text-content 규칙 활성화 (recommended에 포함)
      'jest-dom/prefer-to-have-text-content': 'warn',
    }
  }
])
