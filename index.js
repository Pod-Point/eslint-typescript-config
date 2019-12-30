module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-typescript/base',
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4]
    },
};
