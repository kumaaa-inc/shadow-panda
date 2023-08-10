import pandaPreset from '@pandacss/preset-panda'
import type { Config } from '@pandacss/types'
import { globalCss } from './global-css'
import { tokens } from './tokens'
import { textStyles } from './text-styles'
import { keyframes } from './keyframes'
import { semanticTokens } from './semantic-tokens'
import { breakpoints } from './breakpoints'
import { utilities } from './utilities'
import { conditions } from './conditions'
import { recipes } from './recipes'
import { slotRecipes } from './slot-recipes'
import { layerStyles } from './layer-styles'

const defineConfig = <T extends Config>(config: T) => config

export const shadowPandaPreset = defineConfig({
  presets: [pandaPreset],
  globalCss: {
    extend: globalCss,
  },
  conditions: {
    extend: conditions,
  },
  utilities: {
    extend: utilities,
  },
  theme: {
    extend: {
      tokens,
      semanticTokens,
      breakpoints,
      textStyles,
      keyframes,
      recipes,
      slotRecipes,
      layerStyles,
    },
  },
})

export default shadowPandaPreset
