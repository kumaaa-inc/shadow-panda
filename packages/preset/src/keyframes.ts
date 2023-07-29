import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  enter: {
    from: {
      opacity: 'var(--shadow-panda-enter-opacity, 1)',
      transform:
        'translate3d(var(--shadow-panda-enter-translate-x, 0), var(--shadow-panda-enter-translate-y, 0), 0) scale3d(var(--shadow-panda-enter-scale, 1), var(--shadow-panda-enter-scale, 1), var(--shadow-panda-enter-scale, 1)) rotate(var(--shadow-panda-enter-rotate, 0))',
    },
  },
  exit: {
    to: {
      opacity: 'var(--shadow-panda-exit-opacity, 1)',
      transform:
        'translate3d(var(--shadow-panda-exit-translate-x, 0), var(--shadow-panda-exit-translate-y, 0), 0) scale3d(var(--shadow-panda-exit-scale, 1), var(--shadow-panda-exit-scale, 1), var(--shadow-panda-exit-scale, 1)) rotate(var(--shadow-panda-exit-rotate, 0))',
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
