import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  source: {
    entry: {
      app: './src/main.tsx',
    },
  },
  output: {
    distPath: {
      root: 'dist-mf',
    },
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'episodeRecommendations',
          exposes: {
            './EpisodeRecommendations': './src/components/EpisodeRecommendations.tsx',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
          },
        }),
      ],
    },
  },
  plugins: [pluginReact()],
});
