import path from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'
import postcss from 'postcss'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: postcss,
        },
      },
    },
  ],
  // staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  features: {
    buildStoriesJson: true,
  },
  viteFinal(config) {
    if (!config.resolve) config.resolve = {}

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }
    return config
  },
}

export default config
