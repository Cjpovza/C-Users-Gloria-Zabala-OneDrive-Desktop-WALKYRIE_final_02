module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFiles: ['jest-localstorage-mock'],
  };