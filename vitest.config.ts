import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./src/routes.test.ts'],
    environment: 'jsdom',
  },
});
