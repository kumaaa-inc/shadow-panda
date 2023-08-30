import { defineRecipe } from '@pandacss/dev'

export const formLabel = defineRecipe({
  className: 'formLabel',
  description: 'Styles for the FormLabel component',
  base: {},
})

export const formItem = defineRecipe({
  className: 'formItem',
  description: 'Styles for the FormItem component',
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
  },
})

export const formControl = defineRecipe({
  className: 'formControl',
  description: 'Styles for the FormControl component',
  base: {},
})

export const formDescription = defineRecipe({
  className: 'formDescription',
  description: 'Styles for the FormDescription component',
  base: {
    textStyle: 'sm',
    color: 'muted.foreground',
  },
})

export const formMessage = defineRecipe({
  className: 'formMessage',
  description: 'Styles for the FormMessage component',
  base: {
    textStyle: 'sm',
    fontWeight: 'medium',
    color: 'destructive',
  },
})
