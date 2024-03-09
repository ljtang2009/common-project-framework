import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'desm';
import './build/registerEnvVariable';  // 加载环境变量
import './build/generateSupportedBrowsers'; // 生成浏览器支持范围
console.log(123);
export default defineConfig({
  resolve: {
    alias: {
      '@': join(import.meta.url, 'src'),
    },
  },
  build: {
    minify: false, // TODO 测试
  },
  plugins: [react()],
  server:  {
    host: true,
    port: process.env.SERVER_PORT !== undefined
      ? Number(process.env.SERVER_PORT)
      : 8880,
  },
  preview: {
    host: true,
    port: process.env.PREVIEW_PORT !== undefined
      ? Number(process.env.PREVIEW_PORT)
      : 8870,
  },
});
