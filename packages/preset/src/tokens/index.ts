import { defineTokens } from '@pandacss/dev'
import { colors } from './colors'
import { gradients } from './gradients'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { fonts } from './fonts'
import { fontSizes } from './font-sizes'
import { fontWeights } from './font-weights'
import { letterSpacings } from './letter-spacings'
import { lineHeights } from './line-heights'
import { radii } from './radii'
import { borders } from './borders'
import { shadows } from './shadows'
import { easings } from './easings'
import { opacity } from './opacity'
import { zIndex } from './z-index'
import { assets } from './assets'
import { durations } from './durations'
import { animations } from './animations'

export const tokens = defineTokens({
  colors,
  gradients,
  sizes,
  spacing,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  borders,
  shadows,
  easings,
  opacity,
  zIndex,
  assets,
  durations,
  animations,
})
