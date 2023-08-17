import { defineSlotRecipe } from '@pandacss/dev'

export const hoverCard = defineSlotRecipe({
  className: 'hoverCard',
  description: 'Styles for the HoverCard component',
  slots: ['root', 'trigger', 'content'],
  base: {
    content: {
      zIndex: 50,
      w: '64',
      rounded: 'md',
      border: 'base',
      bg: 'popover',
      p: '4',
      color: 'popover.foreground',
      shadow: 'md',
      outline: '2px solid transparent',

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
