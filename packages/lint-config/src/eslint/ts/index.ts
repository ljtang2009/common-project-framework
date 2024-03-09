import rules from './rules/index.js';
import tseslint from 'typescript-eslint';

export default {
  languageOptions: {
    parser:        tseslint.parser,
    parserOptions: {
      // 参考 https://typescript-eslint.io/rules/consistent-type-imports/#usage-with-emitdecoratormetadata
      emitDecoratorMetadata: true,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  rules: rules.getRules('@typescript-eslint'),
};
