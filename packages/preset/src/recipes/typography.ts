import { defineRecipe } from '@pandacss/dev'

export const h1 = defineRecipe({
  name: 'h1',
  description: 'Typography - h1 style',
  base: {
    textStyle: 'h1',
    scrollMargin: '20',
  },
})

export const h2 = defineRecipe({
  name: 'h2',
  description: 'Typography - h2 style',
  base: {
    textStyle: 'h2',
    scrollMargin: '20',
    borderBottom: '1',
    borderBottomColor: 'border',
    pb: '2',
    transition: 'colors',

    _first: {
      mt: '0',
    },
  },
})

export const h3 = defineRecipe({
  name: 'h3',
  description: 'Typography - h3 style',
  base: {
    textStyle: 'h3',
    scrollMargin: '20',
  },
})

export const h4 = defineRecipe({
  name: 'h4',
  description: 'Typography - h4 style',
  base: {
    textStyle: 'h4',
    scrollMargin: '20',
  },
})

export const p = defineRecipe({
  name: 'p',
  description: 'Typography - p style',
  base: {
    textStyle: 'p',
    '&:not(:first-child)': {
      mt: '6',
    },
  },
})
