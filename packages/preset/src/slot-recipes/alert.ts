import { defineSlotRecipe } from '@pandacss/dev'

export const alert = defineSlotRecipe({
  className: 'alert',
  description: 'Styles for the Alert component',
  slots: ['root', 'title', 'description'],
  base: {
    root: {
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
    title: {
      mb: '1',
      fontWeight: 'medium',
      leading: 'none',
      tracking: 'tight',
    },
    description: {
      textStyle: 'sm',

      '& p': {
        leading: 'relaxed',
      },
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          bg: 'background',
          color: 'foreground',
        },
      },
      destructive: {
        root: {
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
  },
  defaultVariants: {
    variant: 'default',
  },
})
