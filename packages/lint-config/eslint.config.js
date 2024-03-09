import globals from 'globals';
import lintConfig from '@tanglijin/lint-config';
// import {
//   dirname,
//   resolve as resolvePath,
// } from 'path';
// import { fileURLToPath } from 'url';
import _ from 'lodash';
import { dirname, join } from 'desm';

const __dirname = dirname(import.meta.url);

// 基础配置，包含 eslint 内置规则和 stylistic 规则
const baseConfig = _.merge(
  _.cloneDeep(lintConfig.eslint.buildIn),
  lintConfig.eslint.stylistic,
  {
    languageOptions: {
      sourceType: 'module',
      // 当前项目只在 nodejs 环境运行，所以只要在 baseConfig 声明 globals 就可以了
      globals:    {
        ...globals.node,
        ...globals.jest,
      },
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
      files: ['eslint.config.js', 'jest.config.js'],
    }),
  },
  {
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files:           ['src/**/*.ts'],
      ignores:         ['src/**/*.spec.ts'],
      languageOptions: {
        parserOptions: {
          project:         join(import.meta.url, 'tsconfig.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files:           ['vite.config.ts'],
      languageOptions: {
        parserOptions: {
          project:         join(import.meta.url, 'tsconfig.node.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(lintConfig.eslint.json), {
      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    }),
  },
];
