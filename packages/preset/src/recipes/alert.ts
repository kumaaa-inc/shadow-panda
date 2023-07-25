import { defineRecipe } from '@pandacss/dev'

export const alert = defineRecipe({
  name: 'alert',
  description: 'Styles for the Alert component',
  base: {
    position: 'relative',
    width: 'full',
    rounded: 'lg',
    border: '1',
    borderColor: 'border',
    p: '4',

    '&:has(svg)': {
      pl: '11',
    },

    '& > svg + div': {
      translateY: '-3px',
    },

    '& > svg': {
      position: 'absolute',
      left: '4',
      top: '4',
      color: 'foreground',
      height: '4',
      width: '4',
    },
  },
  variants: {
    variant: {
      default: {
        bg: 'background',
        color: 'foreground',
      },
      destructive: {
        bca: 'destructive/50',
        color: 'destructive',

        _dark: {
          borderColor: 'destructive',
        },

        '& > svg': {
          color: 'destructive',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const alertTitle = defineRecipe({
  name: 'alertTitle',
  description: 'Styles for the AlertTitle component',
  base: {
    mb: '1',
    fontWeight: 'medium',
    leading: 'none',
    letterSpacing: 'tight',
  },
})

export const alertDescription = defineRecipe({
  name: 'alertDescription',
  description: 'Styles for the AlertDescription component',
  base: {
    fontSize: 'sm',

    '& p': {
      leading: 'relaxed',
    },
  },
})
