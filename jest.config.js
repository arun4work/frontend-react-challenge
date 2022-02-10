module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },

  transform: { '^.+\\.tsx?$': 'babel-jest' },
  testEnvironment: 'jsdom',

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  moduleNameMapper: {
    '@modules/(.*)$': '<rootDir>/src/modules/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@styles/(.*)$': '<rootDir>/src/styles/$1',
  },

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
