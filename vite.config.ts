import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  build: {
    sourcemap: true,
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      filename: 'recommendations.js',
      exposes: {
        './EpisodeRecommendations': './src/components/EpisodeRecommendations.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
