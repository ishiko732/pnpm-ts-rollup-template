import { JestConfigWithTsJest } from 'ts-jest';
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.js?(x)', '**/__tests__/*.ts?(x)'],
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
} as JestConfigWithTsJest;
