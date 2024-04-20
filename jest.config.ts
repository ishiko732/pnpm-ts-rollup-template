import { JestConfigWithTsJest } from 'ts-jest';
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.js?(x)', '**/__tests__/*.ts?(x)'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: [
    // '<rootDir>/node_modules/fsrs-browser/fsrs_browser.js',
    // '<rootDir>/node_modules/fsrs-browser/fsrs_browser_bg.wasm',
  ],
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  transform: {
    '^.+\\.[t|j]s$': 'babel-jest',
    // '^.+\\.[t|j]s$': ['ts-jest', { useESM: true }],
  },
} as JestConfigWithTsJest;
