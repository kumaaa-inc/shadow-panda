import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  h1: {
    description: 'Heading 1',
    value: {
      fontSize: {
        base: '4xl',
        lg: '5xl',
      },
      lineHeight: {
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
      lineHeight: '9',
      fontWeight: 'semibold',
      letterSpacing: 'tight',
    },
  },
  h3: {
    description: 'Heading 3',
    value: {
      fontSize: '2xl',
      lineHeight: '8',
      fontWeight: 'semibold',
      letterSpacing: 'tight',
    },
  },
  h4: {
    description: 'Heading 4',
    value: {
      fontSize: 'xl',
      lineHeight: '7',
      fontWeight: 'semibold',
      letterSpacing: 'tight',
    },
  },
  p: {
    description: 'Paragraph',
    value: {
      lineHeight: '7',
    },
  },
  lead: {
    description: 'Lead paragraph',
    value: {
      fontSize: 'xl',
      lineHeight: '7',
    },
  },
  large: {
    description: 'Large text',
    value: {
      fontSize: 'lg',
      fontWeight: 'semibold',
      lineHeight: '7',
    },
  },
  small: {
    description: 'Small text',
    value: {
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: 'none',
    },
  },
})
