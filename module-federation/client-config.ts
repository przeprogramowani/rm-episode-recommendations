import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export const clientModuleFederationPlugin = new ModuleFederationPlugin({
  name: 'episodeRecommendations',
  exposes: {
    './EpisodeRecommendations': './src/components/EpisodeRecommendations.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: {
    generateTypes: {
      extractRemoteTypes: true,
      extractThirdParty: false,
    },
  },
});
