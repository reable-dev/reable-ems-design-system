import type { Preview } from '@storybook/react';
import React from 'react';
import ReableEMSProvider from '../src/ReableEMSProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ReableEMSProvider>
      <Story />
    </ReableEMSProvider>
  ),
];

export default preview;
