import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    alias: {
      '@': path.resolve(__dirname, './src'),
      'content-collections': path.resolve(__dirname, './.content-collections/generated'),
    },
  },
});
