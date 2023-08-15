import { defineSlotRecipe } from '@pandacss/dev'

export const avatar = defineSlotRecipe({
  className: 'avatar',
  description: 'Styles for the Avatar component',
  slots: ['root', 'image', 'fallback'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      h: '10',
      w: '10',
      flexShrink: '0',
      overflow: 'hidden',
      rounded: 'full',
    },
    image: {
      aspectRatio: 'square',
      h: 'full',
      w: 'full',
    },
    fallback: {
      display: 'flex',
      h: 'full',
      w: 'full',
      alignItems: 'center',
      justifyContent: 'center',
      rounded: 'full',
      bg: 'muted',
    },
  },
})
