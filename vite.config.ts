/// <reference types="vitest" />
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  plugins: [preact()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./__test__/test-setup.ts'],
    includeSource: ['src/**/*.{ts,tsx}'],
    coverage: {
      reporter: ['text-summary', 'text'],
    },
    mockReset: true,
    restoreMocks: true,
  },
})