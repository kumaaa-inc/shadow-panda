import '../src/index.css'

import { type Preview } from '@storybook/react'
// import { withThemeByClassName } from '@storybook/addon-styling'

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [],
      // order: ['Design System', ['Foundation', 'Components', 'Icons']],
    },
  },
}

export const decorators: Preview['decorators'] = [
  // withThemeByClassName({
  //   themes: {
  //     light: 'light',
  //     dark: 'dark',
  //   },
  //   defaultTheme: 'light',
  // }) as any,
]
