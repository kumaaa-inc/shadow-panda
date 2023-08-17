import { defineSlotRecipe } from '@pandacss/dev'

export const tooltip = defineSlotRecipe({
  className: 'tooltip',
  description: 'Styles for the Tooltip component',
  slots: ['root', 'trigger', 'content'],
  base: {
    content: {
      zIndex: 50,
      overflow: 'hidden',
      rounded: 'md',
      border: 'base',
      bg: 'popover',
      px: '3',
      py: '1.5',
      textStyle: 'sm',
      color: 'popover.foreground',
      shadow: 'md',
      animateIn: true,
      fadeIn: 0,
      zoomIn: 95,

      '&[data-state=closed]': {
        animateOut: true,
        fadeOut: 0,
        zoomOut: 95,
      },

      '&[data-side=top]': {
        slideInFromBottom: '2',
      },

      '&[data-side=bottom]': {
        slideInFromTop: '2',
      },

      '&[data-side=left]': {
        slideInFromRight: '2',
      },

      '&[data-side=right]': {
        slideInFromLeft: '2',
      },
    },
  },
})
