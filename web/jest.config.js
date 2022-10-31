module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
       "@core/(.*)": "<rootDir>/src/core/$1",
       "@mocks": "<rootDir>/src/mocks",
       "@api": "<rootDir>/src/api",
       "@feats/(.*)": "<rootDir>/src/feats/$1",
    },
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
};