import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  enter: {
    from: {
      opacity: 'var(--sp-enter-opacity, 1)',
      transform:
        'translate3d(var(--sp-enter-translate-x, 0), var(--sp-enter-translate-y, 0), 0) scale3d(var(--sp-enter-scale, 1), var(--sp-enter-scale, 1), var(--sp-enter-scale, 1)) rotate(var(--sp-enter-rotate, 0))',
    },
  },
  exit: {
    to: {
      opacity: 'var(--sp-exit-opacity, 1)',
      transform:
        'translate3d(var(--sp-exit-translate-x, 0), var(--sp-exit-translate-y, 0), 0) scale3d(var(--sp-exit-scale, 1), var(--sp-exit-scale, 1), var(--sp-exit-scale, 1)) rotate(var(--sp-exit-rotate, 0))',
    },
  },
  'accordion-down': {
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
  },
})
