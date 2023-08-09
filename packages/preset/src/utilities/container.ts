import type { UtilityConfig } from '@pandacss/types'
import { breakpoints } from '@/breakpoints'

export const container: UtilityConfig = {
  container: {
    className: 'container',
    values: { type: 'boolean' },
    transform: (value: boolean) => {
      if (!value) return {}

      return {
        width: '100%',

        '@breakpoint sm': {
          maxWidth: breakpoints['sm'],
        },

        '@breakpoint md': {
          maxWidth: breakpoints['md'],
        },

        '@breakpoint lg': {
          maxWidth: breakpoints['lg'],
        },

        '@breakpoint xl': {
          maxWidth: breakpoints['xl'],
        },

        '@breakpoint 2xl': {
          maxWidth: breakpoints['2xl'],
        },
      }
    },
  },
}
