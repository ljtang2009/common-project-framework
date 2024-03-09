import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('postcss-load-config').Config} */
const config = {
  map:     true,
  plugins: [
    postcssPresetEnv({
      env: process.env.NODE_ENV,
    }),
  ],
};

export default config;
