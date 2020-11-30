module.exports = {
  name: 'graphql-server',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/apps/graphql-server',
};
