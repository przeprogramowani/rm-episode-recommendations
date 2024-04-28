import { UniversalFederationPlugin } from '@module-federation/node';

export const serverModuleFederationPlugin = new UniversalFederationPlugin(
  {
    name: 'episodeRecommendations',
    isServer: true,
    library: { type: 'commonjs-module', name: 'recommendations' },
    exposes: {
      './EpisodeRecommendations': './src/components/EpisodeRecommendations.tsx',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
    },
  },
  {},
);
