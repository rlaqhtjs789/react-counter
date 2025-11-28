module.exports = {
  // 테스트 환경을 jsdom(브라우저와 유사한 환경)으로 설정합니다.
  testEnvironment: 'jsdom',

  // CSS, SASS, SCSS, LESS 파일을 import할 때 __mocks__/fileMock.js 파일을 사용하도록 설정합니다.
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },

  // .js, .jsx 파일을 Babel을 사용해 변환하도록 설정합니다.
  // babel-jest는 자동으로 babel.config.cjs 파일을 찾아 사용합니다.
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },

  // 테스트 환경이 구성된 후 실행할 파일을 지정합니다.
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};