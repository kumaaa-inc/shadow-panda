import type { UtilityConfig } from '@pandacss/types'

const blurValues = {
  none: 'blur(0)',
  sm: 'blur(4px)',
  base: 'blur(8px)',
  md: 'blur(12px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)',
  '2xl': 'blur(40px)',
  '3xl': 'blur(64px)',
} as const

export const backdropFilter: UtilityConfig = {
  backdropBlur: {
    property: 'backdropFilter',
    className: 'backdrop_blur',
    values: blurValues,
    transform: (value) => {
      return {
        backdropFilter: value,
      }
    },
  },
}
