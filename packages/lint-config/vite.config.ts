import { defineConfig } from 'vite';
import { join } from 'desm';

const entry = join(import.meta.url, 'src/index.ts');

export default defineConfig({
  resolve: {
    alias: {
      '@': join(import.meta.url, 'src'),
    },
  },
  build: {
    outDir:    join(import.meta.url, 'dist'),
    sourcemap: true,
    lib:       {
      entry,
      name:    'LintConfig',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['@stylistic/eslint-plugin', 'typescript-eslint', 'jsonc-eslint-parser', 'eslint-plugin-jsonc'],
      output:   {
        globals: {
          '@stylistic/eslint-plugin': 'stylisticEslintPlugin',
          'typescript-eslint':        'tseslint',
          'jsonc-eslint-parser':      'jsoncEslintParser',
          'eslint-plugin-jsonc':      'jsoncEslintPlugin',
        },
      },
    },
    ssr:         true,
    minify:      false,
    emptyOutDir: false,
  },
  // 该自定义插件目的是生成 .d.ts 文件，而现在使用tsc生成。
  // plugins: [
  //   // 生成 .d.ts 文件
  //   {
  //     name: 'emit-dts',
  //     closeBundle() {
  //       /* eslint-disable no-console */
  //       console.time('emit-dts 时间');
  //       /* eslint-enable */
  //       const program = ts.createProgram([entry], {
  //         // d.ts 输出的文件夹
  //         declarationDir:      'dist',
  //         declaration:         true,
  //         // false 同时输出js源码到 outDir
  //         emitDeclarationOnly: true,
  //       });
  //       program.emit();
  //       /* eslint-disable no-console */
  //       console.timeEnd('emit-dts 时间');
  //       /* eslint-enable */
  //     },
  //   },
  // ],
});
