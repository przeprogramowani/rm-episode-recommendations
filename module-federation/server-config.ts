// import { rspack } from '@rsbuild/core';

import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export const serverModuleFederationPlugin = new ModuleFederationPlugin({
  remoteType: 'script',
  name: 'episodeRecommendations',
  library: { name: 'episodeRecommendations', type: 'commonjs-module' },
  filename: 'recommendations.js',
  exposes: {
    './EpisodeRecommendations': './src/components/EpisodeRecommendations.tsx',
  },
  runtimePlugins: [require.resolve('@module-federation/node/runtimePlugin')],
  shared: [
    {
      react: { requiredVersion: '18.2.0', eager: true },
      'react-dom': { requiredVersion: '18.2.0', eager: true },
    },
  ],
});
