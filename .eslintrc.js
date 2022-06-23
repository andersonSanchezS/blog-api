module.exports = {
    env: {
        es2021: true
    },
    extends: ['standard', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        // Possible Problems
        'array-callback-return': 1,
        'constructor-super': 1,
        'for-direction': 1,
        'getter-return': 2,
        'no-class-assign': 2,
        'no-compare-neg-zero': 1,
        'no-cond-assign': 1,
        'no-const-assign': 2,
        'no-debugger': 1,
        'no-dupe-args': 1,
        'no-dupe-class-members': 1,
        'no-dupe-else-if': 1,
        'no-dupe-keys': 1,
        'no-duplicate-case': 1,
        'no-duplicate-imports': 1,
        'no-empty-pattern': 1,
        'no-ex-assign': 1,
        'no-fallthrough': 1,
        'no-func-assign': 1,
        'no-import-assign': 1,
        'no-inner-declarations': 1,
        'no-irregular-whitespace': 1,
        'no-loss-of-precision': 1,
        'no-obj-calls': 1,
        'no-prototype-builtins': 1,
        'no-constant-condition': 2,
        'no-setter-return': 1,
        'no-sparse-arrays': 1,
        'no-unexpected-multiline': 1,
        'no-unmodified-loop-condition': 1,
        'no-unreachable': 1,
        'no-unsafe-finally': 1,
        'no-unreachable-loop': 1,
        'no-unsafe-optional-chaining': 2,
        'no-unused-vars': 1,
        'no-use-before-define': 1,
        'no-useless-backreference': 1,
        'valid-typeof': 1,

        // Suggestions
        'arrow-body-style': [2, 'as-needed'],
        'block-scoped-var': 1,
        camelcase: 1,
        'capitalized-comments': 1,
        curly: [1, 'multi-line'],
        'default-case': 1,
        'default-case-last': 1,
        eqeqeq: 1,
        'id-length': [1, { min: 1 }],
        'max-depth': [1, { max: 6 }],
        'max-lines': [1, { max: 1000, skipComments: true }],
        'max-nested-callbacks': [1, { max: 3 }],
        'max-params': [1, { max: 5 }],
        'multiline-comment-style': [1, 'starred-block'],
        'no-caller': 2,
        'no-confusing-arrow': 1,
        'no-console': 1,
        'no-delete-var': 2,
        'no-empty': 1,
        'no-empty-function': 1,
        'no-eq-null': 1,
        'no-eval': 2,
        'no-extra-bind': 2,
        'no-extra-boolean-cast': 1,
        'no-extra-label': 1,
        'no-extra-semi': 1,
        'no-global-assign': 2,
        'no-implied-eval': 2,
        'no-inline-comments': 1,
        'no-invalid-this': 1,
        'no-iterator': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 1,
        'no-param-reassign': 1,
        'no-redeclare': 1,
        'no-regex-spaces': 1,
        'no-return-await': 1,
        'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-throw-literal': 2,
        'no-undef-init': 1,
        'no-unneeded-ternary': 1,
        'no-unused-labels': 1,
        'no-useless-call': 1,
        'no-useless-catch': 1,
        'no-useless-concat': 1,
        'no-var': 1,
        'object-shorthand': 1,
        'operator-assignment': [1, 'always'],
        'prefer-const': 1,
        'prefer-destructuring': 1,
        'prefer-template': 1,
        'quote-props': [1, 'as-needed'],
        'require-await': 1,
        'spaced-comment': [1, 'always', { exceptions: ['-', '+'] }],
        'vars-on-top': 1,
        'no-undef': 2,
        'no-this-before-super': 1,
        'func-call-spacing': [1, 'never'],
        // Layout & Formatting
        'array-bracket-newline': [1, 'consistent'],
        'array-bracket-spacing': [1, 'never'],
        'array-element-newline': [
            1,
            'consistent',
            { ArrayPattern: { minItems: 5 } }
        ],
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': [1, { before: true, after: true }],
        'block-spacing': 1,
        'brace-style': [1, '1tbs', { allowSingleLine: true }],
        'comma-dangle': [1, 'never'],
        'comma-style': 1,
        'eol-last': [0, 'never'],
        'implicit-arrow-linebreak': [1, 'beside'],
        indent: [1, 4, { ignoredNodes: ['TemplateLiteral'] }],
        'jsx-quotes': [1, 'prefer-single'],
        'key-spacing': [1, { beforeColon: false, afterColon: true }],
        'keyword-spacing': 1,
        'line-comment-position': [1, { position: 'above' }],
        'lines-between-class-members': 1,
        'max-statements-per-line': [1, { max: 1 }],
        'multiline-ternary': [1, 'always-multiline'],
        'newline-per-chained-call': 1,
        'no-mixed-spaces-and-tabs': 1,
        'no-multi-spaces': 1,
        'no-multiple-empty-lines': 1,
        'no-tabs': 1,
        'no-trailing-spaces': 1,
        'no-whitespace-before-property': 1,
        'nonblock-statement-body-position': 1,
        'object-curly-spacing': [1, 'always'],
        quotes: [1, 'single'],
        'rest-spread-spacing': 1,
        semi: [1, 'never'],
        'semi-spacing': [1, { before: false, after: true }],
        'semi-style': 1,
        'space-before-blocks': 1,
        'space-in-parens': [1, 'never'],
        'space-infix-ops': 1,
        'space-unary-ops': 1,
        'template-curly-spacing': 0,
        'no-label-var': 1,
        'prefer-spread': 1,
        'comma-spacing': [1, { before: false, after: true }],

        // Deprecated
        'valid-jsdoc': 1,
        'global-require': 1,
        'no-path-concat': 1,
        'no-process-exit': 1
        /** Stylistic Issues */
    }
}
