const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });
const esModules = ['@mui/x-data-grid/utils', '@babel/runtime/helpers/esm'].join('|');

const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jset.setup.js'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    [`(${esModules}).+\\.js$`]: "ts-jest",
  },
};

module.exports = createJestConfig(customJestConfig);