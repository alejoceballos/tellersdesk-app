module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    mocha: true,
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
    fetch: false,
    browser: false,
    factory: false,
    mock: false,
    page: false,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'standard',
    'standard-react',
    'react-app'
    // 'prettier'
  ],
  plugins: [
    'import',
    'react',
    // 'prettier'
  ],
  rules: {
    // 'prettier/prettier': 'error',
    semi: ['error', 'always'],
    'comma-dangle': [0],
    'jsx-quotes': [0],
    'space-before-function-paren': [0],
    indent: ['error', 2],
    'no-console': 'off'
  },
};
