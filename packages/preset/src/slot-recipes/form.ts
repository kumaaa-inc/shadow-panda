import { defineSlotRecipe } from '@pandacss/dev'

export const form = defineSlotRecipe({
  className: 'form',
  description: 'Styles for the Form component',
  slots: ['root', 'field', 'item', 'label', 'control', 'description', 'message'],
  base: {
    item: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    },
    description: {
      textStyle: 'sm',
      color: 'muted.foreground',
    },
    message: {
      textStyle: 'sm',
      fontWeight: 'medium',
      color: 'destructive',
    },
  },
})
