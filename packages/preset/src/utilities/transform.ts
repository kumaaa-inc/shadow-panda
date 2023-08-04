import type { UtilityConfig } from '@pandacss/types'

const baseTransform = {
  transform:
    'translate(var(--shadow-panda-translate-x, 0), var(--shadow-panda-translate-y, 0)) rotate(var(--shadow-panda-rotate, 0)) skewX(var(--shadow-panda-skew-x, 0)) skewY(var(--shadow-panda-skew-y, 0)) scaleX(var(--shadow-panda-scale-x, 1)) scaleY(var(--shadow-panda-scale-y, 1))',
}

export const transform: UtilityConfig = {
  translate: {
    className: 'translate',
    values: 'spacing',
    transform: (value: string) => {
      return {
        ...baseTransform,
        '--shadow-panda-translate-x': value,
        '--shadow-panda-translate-y': value,
      }
    },
  },
  translateY: {
    className: 'translate_y',
    values: 'spacing',
    transform: (value: string) => {
      return {
        ...baseTransform,
        '--shadow-panda-translate-y': value,
      }
    },
  },
  translateX: {
    className: 'translate_x',
    values: 'spacing',
    transform: (value: string) => {
      return {
        ...baseTransform,
        '--shadow-panda-translate-x': value,
      }
    },
  },
}
