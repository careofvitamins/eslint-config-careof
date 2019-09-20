module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:security/recommended',
  ],
  plugins: ['jest', 'security'],
  settings: {
    react: {
      linkComponents: [
        {
          name: 'Link',
          linkAttribute: 'to',
        },
      ],
    },
  },
  globals: {
    __DEV__: 'readonly',
    analytics: 'readonly',
    document: 'writable',
    ga: 'readonly',
    gon: 'writable',
    localStorage: 'readonly',
    navigator: 'readonly',
    Raven: 'readonly',
    ScrollMagic: 'readonly',
    Stripe: 'readonly',
    StripeButton: 'readonly',
    StripeCheckout: 'readonly',
    window: 'writable',
    $: 'readonly',
    $zopim: 'readonly',
  },
  rules: {
    'require-atomic-updates': 'error', // off with a todo to turn on in airbnb
    curly: ['error', 'all'], // airbnb allows single-line, block-less control statements, we would require blocks and disallow single-line control statements
    eqeqeq: [
      'error',
      'always',
      { null: 'always' },
    ], // airbnb allows using `==` for comparing against `null`, we explicitly always require `===`
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true, // airbnb disallows short circuits as statements, but we allow them
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'no-undefined': 'error', // airbnb allows using "undefined" as an identifier, we specifically disallow it
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ], // airbnb is considering turning this on, we like it
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ], // airbnb is considering turning this on, we like it
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: false },
    ], // airbnb allows single line blocks, we don't
    'func-style': 'off', // airbnb has a todo to enable this, we want to keep this off in the event the todo lands
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ], // airbnb forces linebreaks between single line class members, we're indifferent
    'lines-around-directive': 'off', // deprecated rule
    'multiline-ternary': ['error', 'always-multiline'], // airbnb has a todo to turn this on as "never", we allow enforce multiline ternary if it's necessary
    'no-underscore-dangle': 'off', // airbnb disallows underscore dangles, we allow it
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'directive' },
      { blankLine: 'always', prev: 'directive', next: '*' },
    ], // enforces directives be separated from other parts of code, airbnb is indifferent
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ], // airbnb doesn't enforce consistent as-needed
    'import/default': 'error', // airbnb doesn't enforce checking of default
    'import/namespace': 'error', // airbnb doesn't enforce checking of namespaced properties as they are dereferenced
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'], // put builtin and external above internal, above parent/sibling imports above index import above everything else
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
      },
    ],
    'import/no-anonymous-default-export': 'error', // only allow exporting named default exports
    'react/jsx-key': 'error', // airbnb doesn't check this, we prefer to
    'react/no-direct-mutation-state': 'error', // airbnb doesn't check this, we prefer to
    'react/jsx-filename-extension': 'off', // airbnb enforces jsx in only .jsx files, we prefer to allow it in .js files
  },
};
