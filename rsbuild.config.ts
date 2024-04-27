import { defineConfig, rspack } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const federation = new rspack.container.ModuleFederationPlugin({
  name: 'recommendationsUI',
  filename: 'recommendations.js',
  exposes: {
    './EpisodeRecommendations': './src/components/EpisodeRecommendations.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});

export default defineConfig({
  source: {
    entry: {
      main: './src/main.tsx',
    },
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([federation]);
    },
  },
  output: {
    distPath: {
      root: 'dist-mf',
    },
  },
  plugins: [pluginReact()],
});
