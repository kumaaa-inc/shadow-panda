import { defineConfig } from '@pandacss/dev'
import { shadowPandaPreset } from './src'

export default defineConfig({
  // Whether to use css reset
  // preflight: true,

  // Namespace prefix for the generated css
  prefix: 'sp',

  // Presets
  presets: [shadowPandaPreset],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  emitPackage: true,
  outdir: '@shadow-panda/styled-system',
})
