import type { UtilityConfig } from '@pandacss/types'

export const animate: UtilityConfig = {
  animateIn: {
    className: 'animate_in',
    transform: (value: boolean, { token }) => {
      if (!value) return {}

      return {
        animationName: 'enter',
        animationDuration: token('durations.normal'),
        '--enter-opacity': 'initial',
        '--enter-scale': 'initial',
        '--enter-rotate': 'initial',
        '--enter-translate-x': 'initial',
        '--enter-translate-y': 'initial',
      }
    },
  },
  animateOut: {
    className: 'animate_out',
    transform: (value: boolean, { token }) => {
      if (!value) return {}

      return {
        animationName: 'exit',
        animationDuration: token('durations.normal'),
        '--exit-opacity': 'initial',
        '--exit-scale': 'initial',
        '--exit-rotate': 'initial',
        '--exit-translate-x': 'initial',
        '--exit-translate-y': 'initial',
      }
    },
  },
  fadeIn: {
    className: 'animate_fade_in',
    transform: (value: number | string) => {
      return {
        '--enter-opacity': value,
      }
    },
  },
  fadeOut: {
    className: 'animate_fade_out',
    transform: (value: number | string) => {
      return {
        '--exit-opacity': value,
      }
    },
  },
  zoomIn: {
    className: 'animate_zoom_in',
    transform: (value: number | string) => {
      return {
        '--enter-scale': Number(value) / 100,
      }
    },
  },
  zoomOut: {
    className: 'animate_zoom_out',
    transform: (value: number | string) => {
      return {
        '--exit-scale': Number(value) / 100,
      }
    },
  },
  spinIn: {
    className: 'animate_spin_in',
    transform: (value: number | string) => {
      return {
        '--enter-rotate': value,
      }
    },
  },
  spinOut: {
    className: 'animate_spin_out',
    transform: (value: number | string) => {
      return {
        '--exit-rotate': value,
      }
    },
  },
  slideInFromTop: {
    className: 'animate_slide_in_from_top',
    transform: (value: number | string) => {
      return {
        '--enter-translate-y': `-${value}`,
      }
    },
  },
  slideInFromBottom: {
    className: 'animate_slide_in_from_bottom',
    transform: (value: number | string) => {
      return {
        '--enter-translate-y': value,
      }
    },
  },
  slideInFromLeft: {
    className: 'animate_slide_in_from_left',
    transform: (value: number | string) => {
      return {
        '--enter-translate-x': `-${value}`,
      }
    },
  },
  slideInFromRight: {
    className: 'animate_slide_in_from_right',
    transform: (value: number | string) => {
      return {
        '--enter-translate-x': value,
      }
    },
  },
  slideOutToTop: {
    className: 'animate_slide_out_to_top',
    transform: (value: number | string) => {
      return {
        '--exit-translate-y': `-${value}`,
      }
    },
  },
  slideOutToBottom: {
    className: 'animate_slide_out_to_bottom',
    transform: (value: number | string) => {
      return {
        '--exit-translate-y': value,
      }
    },
  },
  slideOutToLeft: {
    className: 'animate_slide_out_to_left',
    transform: (value: number | string) => {
      return {
        '--exit-translate-x': `-${value}`,
      }
    },
  },
  slideOutToRight: {
    className: 'animate_slide_out_to_right',
    transform: (value: number | string) => {
      return {
        '--exit-translate-x': value,
      }
    },
  },
}
