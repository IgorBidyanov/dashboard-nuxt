// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default withNuxt(
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 'first',
          ignoredNodes: ['ConditionalExpression']
        }
      ],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'never'],
      'no-duplicate-imports': ['error'],
      eqeqeq: ['error'],
      'logical-assignment-operators': ['error'],
      'no-console': ['warn'],
      'no-empty': ['error'],
      'no-empty-function': ['error'],
      'no-unneeded-ternary': ['error'],
      'no-var': ['error'],
      'operator-assignment': ['error', 'always'],
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true
        }
      ],
      'block-spacing': ['error', 'always'],
      'no-trailing-spaces': ['error'],
      'object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/no-var-requires': 0,
      'prettier/prettier': 'error'
    }
  },
  eslintConfigPrettier
)
