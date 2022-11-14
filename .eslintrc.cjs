module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'eslint-config-prettier',
		'plugin:react/jsx-runtime'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/prop-types': 'off',
	},
};
