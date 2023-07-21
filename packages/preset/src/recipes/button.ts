// import { RecipeConfig } from '@pandacss/types'

import { defineRecipe } from '@pandacss/dev'

// const defineRecipe = <T extends RecipeConfig>(config: T) => config

export const button = defineRecipe({
  name: 'button',
  description: 'Styles for the Button component',
  base: {},
  variants: {},
  defaultVariants: {},
})
