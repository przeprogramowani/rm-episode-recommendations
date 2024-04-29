import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { clientModuleFederationPlugin } from './module-federation/client-config';

export default defineConfig({
  source: {
    entry: {
      app: './src/main.tsx',
    },
  },
  output: {
    assetPrefix: process.env.MF_BASE_URL || 'https://localhost:3005',
    distPath: {
      root: 'dist/mf/client',
    },
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins(clientModuleFederationPlugin);
    },
  },
  plugins: [pluginReact()],
});
