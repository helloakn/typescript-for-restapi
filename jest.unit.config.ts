import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    collectCoverage: true,
    preset: 'ts-jest',
    testRegex: "(/__tests__/.*\\.unit.test)\\.(jsx?|tsx?|ts|js)$",
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    },
    setupFiles: ["<rootDir>/__tests__/jest.setup.ts"],
};
export default config;
