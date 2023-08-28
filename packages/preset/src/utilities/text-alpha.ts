import type { UtilityConfig } from '@pandacss/types'
import { colorMix } from '@/lib/color-mix'

export const textAlpha: UtilityConfig = {
  textAlpha: {
    shorthand: ['ca'],
    property: 'color',
    className: 'text_alpha',
    transform: (...args) => {
      const { value, color } = colorMix(...args)

      return {
        '--sp-ca': value,
        color: `var(--sp-ca, ${color})`,
      }
    },
  },
}
