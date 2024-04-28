import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { clientModuleFederationPlugin } from './module-federation/client-config';
import { serverModuleFederationPlugin } from './module-federation/server-config';

const isClientBuild = process.env.MF_MODE_CLIENT === 'true';

export default defineConfig(async ({ env }) => ({
  source: {
    entry: {
      app: './src/main.tsx',
    },
  },
  output: {
    cleanDistPath: env === 'production',
    // assetPrefix: 'https://d2mv4g2jxahmy1.cloudfront.net/mf/',
    distPath: {
      root: isClientBuild ? 'dist/mf/client' : 'dist/mf/server',
    },
  },
  tools: {
    webpack: (config) => {
      if (!isClientBuild) {
        config.plugins = [serverModuleFederationPlugin];
      }
    },
    rspack: (config) => {
      if (isClientBuild) {
        config.plugins = [clientModuleFederationPlugin];
      }
    },
  },
  plugins: [pluginReact()],
}));
