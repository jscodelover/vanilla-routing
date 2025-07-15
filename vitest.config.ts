import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./test-setup.js'],
    include: ['**/*.test.ts'],
    projects: [
      {
        extends: true,
        test: {
          environment: 'jsdom',
        },
      },
    ],
  },
});
