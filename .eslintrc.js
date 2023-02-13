module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-invalid-void-type': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 0,
    'no-tabs': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-mixed-spaces-and-tabs': 0,
    'space-infix-ops': 0,
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/prefer-optional-chain': 0
  }
}
