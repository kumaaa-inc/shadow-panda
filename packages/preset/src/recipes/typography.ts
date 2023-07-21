import { defineRecipe } from '@pandacss/dev'

export const typography = defineRecipe({
  name: 'typography',
  description: 'Typography styles',
  base: {},
  variants: {
    variant: {
      h1: {
        textStyle: 'h1',
        scrollMargin: '20',
      },

      // TODO: Add more variants
      h2: {},
      p: {},
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})
