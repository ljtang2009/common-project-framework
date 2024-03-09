import react from 'eslint-plugin-react';
import globals from 'globals';
import lintConfig from '@tanglijin/lint-config';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';
import _ from 'lodash';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 基础配置，包含 eslint 内置规则和 stylistic 规则
const baseConfig = _.merge(
  _.cloneDeep(lintConfig.eslint.buildIn),
  lintConfig.eslint.stylistic,
  {
    languageOptions: {
      sourceType: 'module',
    },
  },
);

const baseTSConfig = _.merge(
  _.cloneDeep(baseConfig),
  lintConfig.eslint.ts,
);

export default [
  {
    ..._.merge(_.cloneDeep(baseConfig), {
      files:           ['eslint.config.js', 'stylelint.config.js', 'postcss.config.js'],
      languageOptions: {
        globals: globals.node,
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files:           ['vite.config.ts', 'build/**/*.ts'],
      languageOptions: {
        parserOptions: {
          project:         resolvePath(__dirname, 'tsconfig.node.json'),
          tsconfigRootDir: __dirname,
        },
        globals: globals.node,
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files:           ['src/**/*.{ts,tsx}'],
      languageOptions: {
        parserOptions: {
          project:         resolvePath(__dirname, 'tsconfig.json'),
          tsconfigRootDir: __dirname,
        },
        globals: globals.browser,
      },
      plugins: {
        react,
      },
      rules: {
        // TODO 适配 react
        'react/jsx-key': 'warn',
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(lintConfig.eslint.json), {
      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    }),
  },
];
