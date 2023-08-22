import type { UtilityConfig } from '@pandacss/types'
import { colorMix } from '@/lib/color-mix'

export const backgroundAlpha: UtilityConfig = {
  backgroundAlpha: {
    shorthand: ['bga'],
    property: 'backgroundColor',
    className: 'background-alpha',
    values: { type: 'string' },
    transform: (...args) => {
      const { value, color } = colorMix(...args)

      return {
        '--sp-bga': value,
        backgroundColor: `var(--sp-bga, ${color})`,
      }
    },
  },
  // Used with `bgGradient`
  gradientFromAlpha: {
    className: 'from-alpha',
    values: { type: 'string' },
    transform: (...args) => {
      const { value } = colorMix(...args)

      return {
        '--gradient-from': value,
      }
    },
  },
  // Used with `bgGradient`
  gradientToAlpha: {
    className: 'to-alpha',
    values: { type: 'string' },
    transform: (...args) => {
      const { value } = colorMix(...args)

      return {
        '--gradient-to': value,
      }
    },
  },
}
