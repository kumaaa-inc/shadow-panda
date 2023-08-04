import { defineRecipe } from '@pandacss/dev'

export const card = defineRecipe({
  name: 'card',
  description: 'Styles for the Card component',
  base: {
    rounded: 'lg',
    border: 'base',
    bg: 'card',
    color: 'card.foreground',
    shadow: 'sm',
  },
})

export const cardHeader = defineRecipe({
  name: 'cardHeader',
  description: 'Styles for the CardHeader component',
  base: {
    display: 'flex',
    flexDirection: 'column',
    spaceY: '1.5',
    p: '6',
  },
})

export const cardTitle = defineRecipe({
  name: 'cardTitle',
  description: 'Styles for the CardTitle component',
  base: {
    textStyle: '2xl',
    fontWeight: 'semibold',
    leading: 'none',
    tracking: 'tight',
  },
})

export const cardDescription = defineRecipe({
  name: 'cardDescription',
  description: 'Styles for the CardDescription component',
  base: {
    textStyle: 'sm',
    color: 'muted.foreground',
  },
})

export const cardContent = defineRecipe({
  name: 'cardContent',
  description: 'Styles for the CardContent component',
  base: {
    p: '6',
    pt: '0',
  },
})

export const cardFooter = defineRecipe({
  name: 'cardFooter',
  description: 'Styles for the CardFooter component',
  base: {
    display: 'flex',
    alignItems: 'center',
    p: '6',
    pt: '0',
  },
})
