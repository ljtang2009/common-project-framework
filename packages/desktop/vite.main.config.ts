import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log("command:", command);
  console.log("mode:", mode);
  console.log("process.cwd():", process.cwd());

  const env = loadEnv(mode, process.cwd(), "");
  console.log("env.APP_ENV_DEMO:", env.APP_ENV_DEMO);

  return {
    define: {
      __APP_ENV_DEMO__: JSON.stringify(env.APP_ENV_DEMO),
    },
    build: {
      ssr: true,
      target: "node12.19.0",
      outDir: "main/dist",
      sourcemap: true,
      lib: {
        entry: "main/src/main.ts",
        name: "main",
        formats: ["es"],
      },
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
        },
      },
      minify: false,
      reportCompressedSize: false,
    },
  };
});
