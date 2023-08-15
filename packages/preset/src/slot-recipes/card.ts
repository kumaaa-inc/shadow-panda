import { defineSlotRecipe } from '@pandacss/dev'

export const card = defineSlotRecipe({
  className: 'card',
  description: 'Styles for the Card component',
  slots: ['root', 'header', 'title', 'description', 'content', 'footer'],
  base: {
    root: {
      rounded: 'lg',
      border: 'base',
      bg: 'card',
      color: 'card.foreground',
      shadow: 'sm',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      spaceY: '1.5',
      p: '6',
    },
    title: {
      textStyle: '2xl',
      fontWeight: 'semibold',
      leading: 'none',
      tracking: 'tight',
    },
    description: {
      textStyle: 'sm',
      color: 'muted.foreground',
    },
    content: {
      p: '6',
      pt: '0',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      p: '6',
      pt: '0',
    },
  },
})
