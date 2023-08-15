import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'popover',
  description: 'Styles for the Popover component',
  slots: ['root', 'trigger', 'portal', 'content'],
  base: {
    content: {
      zIndex: 50,
      w: '72',
      rounded: 'md',
      border: 'base',
      bg: 'popover',
      p: '4',
      color: 'popover.foreground',
      boxShadow: 'md',
      outline: 'none',

      '&[data-state=open]': {
        animateIn: true,
        fadeIn: 0,
        zoomIn: 95,
      },

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
