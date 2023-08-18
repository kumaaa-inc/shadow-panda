import type { UtilityConfig } from '@pandacss/types'

export const animate: UtilityConfig = {
  animateIn: {
    className: 'animate_in',
    values: { type: 'boolean' },
    transform: (value: boolean, { token }) => {
      if (!value) return {}

      return {
        animationName: 'enter',
        animationDuration: token('durations.fast'),
        '--shadow-panda-enter-opacity': 1,
        '--shadow-panda-enter-scale': 1,
        '--shadow-panda-enter-rotate': 0,
        '--shadow-panda-enter-translate-x': 0,
        '--shadow-panda-enter-translate-y': 0,
      }
    },
  },
  animateOut: {
    className: 'animate_out',
    values: { type: 'boolean' },
    transform: (value: boolean, { token }) => {
      if (!value) return {}

      return {
        animationName: 'exit',
        animationDuration: token('durations.fast'),
        '--shadow-panda-exit-opacity': 1,
        '--shadow-panda-exit-scale': 1,
        '--shadow-panda-exit-rotate': 0,
        '--shadow-panda-exit-translate-x': 0,
        '--shadow-panda-exit-translate-y': 0,
      }
    },
  },
  fadeIn: {
    className: 'animate_fade_in',
    values: 'opacity',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-enter-opacity': value,
      }
    },
  },
  fadeOut: {
    className: 'animate_fade_out',
    values: 'opacity',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-exit-opacity': value,
      }
    },
  },
  zoomIn: {
    className: 'animate_zoom_in',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-enter-scale': Number(value) / 100,
      }
    },
  },
  zoomOut: {
    className: 'animate_zoom_out',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-exit-scale': Number(value) / 100,
      }
    },
  },
  spinIn: {
    className: 'animate_spin_in',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-enter-rotate': value,
      }
    },
  },
  spinOut: {
    className: 'animate_spin_out',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-exit-rotate': value,
      }
    },
  },
  slideInFromTop: {
    className: 'animate_slide_in_from_top',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-enter-translate-y': `calc(${value} * -1)`,
      }
    },
  },
  slideInFromBottom: {
    className: 'animate_slide_in_from_bottom',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-enter-translate-y': value,
      }
    },
  },
  slideInFromLeft: {
    className: 'animate_slide_in_from_left',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-enter-translate-x': `calc(${value} * -1)`,
      }
    },
  },
  slideInFromRight: {
    className: 'animate_slide_in_from_right',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-enter-translate-x': value,
      }
    },
  },
  slideOutToTop: {
    className: 'animate_slide_out_to_top',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-exit-translate-y': `calc(${value} * -1)`,
      }
    },
  },
  slideOutToBottom: {
    className: 'animate_slide_out_to_bottom',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-exit-translate-y': value,
      }
    },
  },
  slideOutToLeft: {
    className: 'animate_slide_out_to_left',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-exit-translate-x': `calc(${value} * -1)`,
      }
    },
  },
  slideOutToRight: {
    className: 'animate_slide_out_to_right',
    values: 'spacing',
    transform: (value: number | string) => {
      return {
        '--shadow-panda-exit-translate-x': value,
      }
    },
  },
}
