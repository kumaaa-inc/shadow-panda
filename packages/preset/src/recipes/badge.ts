import { defineRecipe } from '@pandacss/dev'

export const badge = defineRecipe({
  className: 'badge',
  description: 'Styles for the Badge component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    rounded: 'full',
    border: 'base',
    px: '2.5',
    py: '0.5',
    textStyle: 'xs',
    fontWeight: 'semibold',
    transition: 'colors',
    focusRingOffsetColor: 'background',

    _focus: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      focusRingWidth: '2',
      focusRingColor: 'ring',
      focusRingOffsetWidth: '2',
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
