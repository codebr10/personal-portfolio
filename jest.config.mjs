import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './'
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	collectCoverage: true,
	coverageDirectory: './coverage',
	coverageProvider: 'v8',
	testPathIgnorePatterns: ['/node_modules', './next/'],
	modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
	moduleDirectories: ['node_modules', '<rootDir>'],
	testMatch: [
		'<rootDir>/src/**/*.test.{ts,tsx}',
		'<rootDir>/src/**/*.spec.{ts,tsx}'
	],
	moduleNameMapper: {
		'src/(.*)': '<rootDir>/src/$1'
	},
	transform: {
		'^.+\\.(t|j)sx?$': ['@swc/jest']
	},

	testEnvironment: 'jest-environment-jsdom'
}

export default createJestConfig(config)
