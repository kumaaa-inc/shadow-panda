import type { UtilityConfig } from '@pandacss/types'

export const textAlpha: UtilityConfig = {
  textAlpha: {
    shorthand: ['ca'],
    property: 'color',
    className: 'text_alpha',
    transform: (value, { token }) => {
      const lastIndex = value?.lastIndexOf('/')
      if (!lastIndex) {
        return {}
      }

      if (typeof value?.substring !== 'function') {
        return {}
      }

      const color = value?.substring(0, lastIndex)
      if (!color) {
        return {}
      }

      const amount = value.split('/').at(-1)
      const colorValue = token(`colors.${color}`)
      const amountValue = token(`opacity.${amount}`)
        ? token(`opacity.${amount}`) * 100
        : `${100 - amount}%`

      return {
        '--sp-ca': `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
        color: `var(--sp-ca, ${colorValue})`,
      }
    },
  },
}
