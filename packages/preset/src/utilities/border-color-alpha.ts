import type { UtilityConfig } from '@pandacss/types'
import { colorMix } from '@/lib/color-mix'

export const borderColorAlpha: UtilityConfig = {
  borderAlpha: {
    shorthand: ['bca'],
    property: 'borderColor',
    className: 'border_color_alpha',
    transform: (...args) => {
      const { value, color } = colorMix(...args)

      return {
        '--sp-bca': value,
        borderColor: `var(--sp-bca, ${color})`,
      }
    },
  },
}
