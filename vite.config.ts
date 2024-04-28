import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    sourcemap: true,
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
