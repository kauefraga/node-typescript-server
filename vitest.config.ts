import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
    },
  },
});
