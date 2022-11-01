module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
       "@core/(.*)": "<rootDir>/src/core/$1",
       "@mocks": "<rootDir>/src/mocks",
       "@api": "<rootDir>/src/api",
       "@test-utils": "<rootDir>/src/test-utils",
       "@feats/(.*)": "<rootDir>/src/feats/$1",
       "@redux/(.*)": "<rootDir>/src/redux/$1",
       "@config/(.*)": "<rootDir>/src/config/$1",
    },
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    }
};