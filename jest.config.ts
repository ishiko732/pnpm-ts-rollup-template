export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.js?(x)', '**/__tests__/*.ts?(x)'],
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],
  coverageThreshold: {
    global: {
      lines: 80
    }
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@paths/(.*)': '<rootDir>/src/paths/$1'
  }
}
