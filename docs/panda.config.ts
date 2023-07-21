import { defineConfig } from '@pandacss/dev'
import { shadowPandaPreset } from '@shadow-panda/preset'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // jsxFramework: 'react',

  // Allow use tokens instead of raw values
  // strictTokens: true,

  // Namespace prefix for the generated css
  // prefix: 'rf',

  // Always generate static recipe css to use inside storybook
  staticCss: {
    recipes: {
      button: ['*'],
      typography: ['*'],
    },
  },

  // Presets
  presets: [shadowPandaPreset],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  emitPackage: true,
  outdir: '@shadow-panda/styled-system',
})
