import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  h1: {
    description: 'Heading 1',
    value: {
      fontSize: {
        base: '4xl',
        lg: '5xl',
      },
      leading: {
        base: '10',
        lg: 'none',
      },
      fontWeight: 'extrabold',
      letterSpacing: 'tight',
    },
  },
  h2: {
    description: 'Heading 2',
    value: {
      fontSize: '3xl',
      leading: '9',
      fontWeight: 'semibold',
      letterSpacing: 'tight',
    },
  },
  h3: {
    description: 'Heading 3',
    value: {
      fontSize: '2xl',
      leading: '8',
      fontWeight: 'semibold',
      letterSpacing: 'tight',
    },
  },
  h4: {
    description: 'Heading 4',
    value: {
      fontSize: 'xl',
      leading: '7',
      fontWeight: 'semibold',
      letterSpacing: 'tight',
    },
  },
  p: {
    description: 'Paragraph',
    value: {
      leading: '7',
    },
  },
  lead: {
    description: 'Lead paragraph',
    value: {
      fontSize: 'xl',
      leading: '7',
    },
  },
  large: {
    description: 'Large text',
    value: {
      fontSize: 'lg',
      fontWeight: 'semibold',
      leading: '7',
    },
  },
  small: {
    description: 'Small text',
    value: {
      fontSize: 'sm',
      fontWeight: 'medium',
      leading: 'none',
    },
  },
})
