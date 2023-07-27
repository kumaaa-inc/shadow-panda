import { defineRecipe } from '@pandacss/dev'

export const badge = defineRecipe({
  name: 'badge',
  description: 'Styles for the Badge component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    rounded: 'full',
    border: '1',
    borderColor: 'border',
    px: '2.5',
    py: '0.5',
    fontSize: 'xs',
    fontWeight: 'semibold',
    transition: 'colors',

    _focus: {
      outline: 'none',
      ring: 'base',
      ringColor: 'ring',
    },
  },
  variants: {
    variant: {
      default: {
        borderColor: 'transparent',
        bg: 'primary',
        color: 'primary.foreground',

        _hover: {
          bga: 'primary/80',
        },
      },
      secondary: {
        borderColor: 'transparent',
        bg: 'secondary',
        color: 'secondary.foreground',

        _hover: {
          bga: 'secondary/80',
        },
      },
      destructive: {
        borderColor: 'transparent',
        bg: 'destructive',
        color: 'destructive.foreground',

        _hover: {
          bga: 'destructive/80',
        },
      },
      outline: {
        color: 'foreground',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})