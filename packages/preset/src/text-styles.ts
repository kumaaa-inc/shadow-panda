import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  h1: {
    description: 'Heading 1',
    value: {
      fontSize: {
        base: '4xl',
        lg: '5xl',
      },
      fontWeight: 'extrabold',
      letterSpacing: 'tight',
    },
  },
})
