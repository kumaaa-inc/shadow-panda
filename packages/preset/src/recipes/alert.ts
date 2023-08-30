import { defineRecipe } from '@pandacss/dev'

export const alert = defineRecipe({
  className: 'alert',
  description: 'Styles for the Alert component',
  base: {
    position: 'relative',
    w: 'full',
    rounded: 'lg',
    border: 'base',
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
      h: '4',
      w: '4',
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
  className: 'alertTitle',
  description: 'Styles for the AlertTitle component',
  base: {
    mb: '1',
    fontWeight: 'medium',
    leading: 'none',
    tracking: 'tight',
  },
})

export const alertDescription = defineRecipe({
  className: 'alertDescription',
  description: 'Styles for the AlertDescription component',
  base: {
    textStyle: 'sm',

    '& p': {
      leading: 'relaxed',
    },
  },
})
