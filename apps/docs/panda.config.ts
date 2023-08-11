import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Use React
  jsxFramework: 'react',

  // Namespace prefix for the generated css
  prefix: 'sp',

  // Presets
  presets: ['@shadow-panda/preset'],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './theme.config.tsx'],

  // Files to exclude
  exclude: [],

  emitPackage: true,
  outdir: '@shadow-panda/styled-system',
})
