module.exports = {
    env: {
        browser: false,
        es2022: true,
        mocha: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'unused-imports'],
    extends: ['plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        project: ['./tsconfig.json', './tsconfig.eslint.json'],
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'unused-imports/no-unused-imports': 'error',
        'no-console': 'error',
        '@typescript-eslint/await-thenable': 'error',
    },
    // exclude: [''],
}
