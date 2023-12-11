import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // core: {
  //   builder: {
  //     name: '@storybook/builder-webpack5',
  //     options: {
  //       fsCache: true,
  //       lazyCompilation: true,
  //     },
  //   },
  // },
  // webpackFinal: async (config) => {
  //   if (config.resolve) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       '@': path.resolve(__dirname, '../src'),
  //       '@styles': path.resolve(__dirname, '../src/styles'),
  //     };
  //   }
  //   return config;
  // },
  webpackFinal: async (config) => {
    config!.resolve!.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  docs: {
    autodocs: true,
  },
};
export default config;
