import { defineRecipe } from '@pandacss/dev'

export const toggle = defineRecipe({
  className: 'toggle',
  description: 'Styles for the Toggle component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'md',
    textStyle: 'sm',
    fontWeight: 'medium',
    transition: 'colors',
    focusRingOffsetColor: 'background',
    cursor: 'pointer',
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
      opacity: '0.5',
    },
  },
  variants: {
    variant: {
      default: {
        bg: 'transparent',

        _hover: {
          bg: 'muted',
          color: 'muted.foreground',

          '&[data-state=on]': {
            color: 'accent.foreground',
          },
        },

        '&[data-state=on]': {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
      outline: {
        border: 'base',
        borderColor: 'input',
        bg: 'transparent',

        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },

        '&[data-state=on]': {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
    },
    size: {
      default: {
        h: '10',
        px: '3',
      },
      sm: {
        h: '9',
        px: '2.5',
      },
      lg: {
        h: '11',
        px: '5',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
