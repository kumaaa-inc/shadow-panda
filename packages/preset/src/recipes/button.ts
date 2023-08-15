import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  description: 'Styles for the Button component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'md',
    textStyle: 'sm',
    fontWeight: 'medium',
    transition: 'colors',
    cursor: 'pointer',
    focusRingOffsetColor: 'background',
    gap: '2',

    _focusVisible: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      focusRingWidth: '2',
      focusRingColor: 'ring',
      focusRingOffsetWidth: '2',
    },

    _disabled: {
      pointerEvents: 'none',
      opacity: '50%',
    },
  },
  variants: {
    variant: {
      default: {
        bg: 'primary',
        color: 'primary.foreground',

        _hover: {
          bga: 'primary/90',
        },
      },
      destructive: {
        bg: 'destructive',
        color: 'destructive.foreground',

        _hover: {
          bga: 'destructive/90',
        },
      },
      outline: {
        border: 'input',
        bg: 'background',

        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
      secondary: {
        bg: 'secondary',
        color: 'secondary.foreground',

        _hover: {
          bga: 'secondary/90',
        },
      },
      ghost: {
        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
      link: {
        color: 'primary',
        textUnderlineOffset: '4px',

        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    size: {
      default: {
        h: '10',
        px: '4',
        py: '2',
      },
      sm: {
        h: '9',
        rounded: 'md',
        px: '3',
      },
      lg: {
        h: '11',
        rounded: 'md',
        px: '8',
      },
      icon: {
        h: '10',
        w: '10',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
