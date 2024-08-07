import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    restoreMocks: true,
    testTimeout: 300000,
    retry: 1,
    chaiConfig: {
      truncateThreshold: 0
    },
    server: {
      deps: {
        inline: [/@nuxt\/test-utils/]
      }
    },
    setupFiles: ['./test/utils/setup-env.ts'],
    exclude: [...configDefaults.exclude],
    poolOptions: {
      threads: {
        maxThreads: process.env.CI ? undefined : 4,
        minThreads: process.env.CI ? undefined : 4
      }
    }
  },
  resolve: {
    alias: {
      '#imports': 'nuxt'
    }
  }
})
