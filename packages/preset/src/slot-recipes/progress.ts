import { defineSlotRecipe } from '@pandacss/dev'

export const progress = defineSlotRecipe({
  className: 'progress',
  description: 'Styles for the Progress component',
  slots: ['root', 'indicator'],
  base: {
    root: {
      position: 'relative',
      h: '4',
      w: 'full',
      overflow: 'hidden',
      rounded: 'full',
      bg: 'secondary',
    },
    indicator: {
      h: 'full',
      w: 'full',
      flex: '1',
      bg: 'primary',
      transition: 'all',
    },
  },
})
