import { defineRecipe } from '@pandacss/dev'

export const separator = defineRecipe({
  className: 'separator',
  description: 'Styles for the Separator component',
  base: {
    flexShrink: 0,
    bg: 'border',
  },
  variants: {
    orientation: {
      horizontal: {
        h: '1px',
        w: 'full',
      },
      vertical: {
        h: 'full',
        w: '1px',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})
