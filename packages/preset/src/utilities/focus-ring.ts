import type { UtilityConfig } from '@pandacss/types'

const ringWidthValues = {
  0: '0px',
  1: '1px',
  2: '2px',
  base: '3px',
  4: '4px',
  8: '8px',
} as const

const ringOffsetValues = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const

export const focusRing: UtilityConfig = {
  focusRingWidth: {
    className: 'focus-ring-width',
    values: ringWidthValues,
    transform(value) {
      return {
        // NOTE: Comma after inset is required
        '--shadow-panda-ring-offset-shadow': `var(--shadow-panda-ring-inset,) 0 0 0 var(--shadow-panda-ring-offset-width, ${ringOffsetValues[0]}) var(--shadow-panda-ring-offset-color)`,
        // NOTE: Comma after inset is required
        '--shadow-panda-ring-shadow': `var(--shadow-panda-ring-inset,) 0 0 0 calc(${value} + var(--shadow-panda-ring-offset-width, ${ringOffsetValues[0]})) var(--shadow-panda-ring-color)`,
        boxShadow:
          'var(--shadow-panda-ring-offset-shadow),var(--shadow-panda-ring-shadow),var(--shadow-panda-base-shadow,0 0 #0000)',
      }
    },
  },
  focusRingColor: {
    className: 'focus-ring-color',
    values: 'colors',
    transform(value: string) {
      return {
        '--shadow-panda-ring-color': value,
      }
    },
  },
  focusRingOffsetWidth: {
    className: 'focus-ring-offset-width',
    values: ringOffsetValues,
    transform(value) {
      return {
        '--shadow-panda-ring-offset-width': value,
      }
    },
  },
  focusRingOffsetColor: {
    className: 'focus-ring-offset-color',
    values: 'colors',
    transform(value: string) {
      return {
        '--shadow-panda-ring-offset-color': value,
      }
    },
  },
  focusRingInset: {
    className: 'focus-ring-inset',
    values: { type: 'boolean' },
    transform(value: string) {
      return {
        '--shadow-panda-ring-inset': value ? 'inset' : '',
      }
    },
  },
}
