import type { UtilityConfig } from '@pandacss/types'

export const backgroundAlpha: UtilityConfig = {
  backgroundAlpha: {
    shorthand: ['bga'],
    property: 'backgroundColor',
    className: 'background_alpha',
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
        '--sp-bga': `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
        backgroundColor: `var(--sp-bga, ${colorValue})`,
      }
    },
  },
}
