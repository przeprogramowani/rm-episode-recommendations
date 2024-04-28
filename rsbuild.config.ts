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
    assetPrefix: 'https://d2mv4g2jxahmy1.cloudfront.net/mf/',
    distPath: {
      root: isClientBuild ? 'dist/mf/client' : 'dist/mf/server',
    },
  },
  targets: [isClientBuild ? 'web' : 'node'],
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.target = isClientBuild ? 'web' : 'node';
      appendPlugins(isClientBuild ? clientModuleFederationPlugin : serverModuleFederationPlugin);
    },
  },
  plugins: [pluginReact()],
}));
