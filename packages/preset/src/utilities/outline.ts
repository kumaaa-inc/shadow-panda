import type { UtilityConfig } from '@pandacss/types'

export const outline: UtilityConfig = {
  outline: {
    className: 'ring',
    shorthand: 'ring',
    values: 'borders',
    transform(value) {
      if (value === 'base') {
        return { outline: '2px solid transparent', outlineOffset: '2px' }
      }
      return { outline: value }
    },
  },
}
