module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    globals: {
        route: true, // Ziggy
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'jest'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react/react-in-jsx-scope': 'off',

        // Prettier takes care of formatting and these
        // can conflict with it's no semi rule.
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
