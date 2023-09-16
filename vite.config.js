import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // root: 'src',
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/__tests__/setup.ts',
  },
});
