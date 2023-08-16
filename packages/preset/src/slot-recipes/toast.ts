import { defineSlotRecipe } from '@pandacss/dev'

export const toast = defineSlotRecipe({
  className: 'toast',
  description: 'Styles for the Toast component',
  slots: ['root', 'viewport', 'action', 'close', 'title', 'description'],
  base: {
    root: {
      pointerEvents: 'auto',
      position: 'relative',
      display: 'flex',
      w: 'full',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '4',
      overflow: 'hidden',
      rounded: 'md',
      border: 'base',
      p: '6',
      pr: '8',
      shadow: 'lg',
      transition: 'all',

      '&[data-swipe=cancel]': {
        transform: 'translateX(0)',
      },

      '&[data-swipe=end]': {
        transform: 'translateX(var(--radix-toast-swipe-end-x))',
        animateOut: true,
      },

      '&[data-swipe=move]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
        transition: 'none',
      },

      '&[data-state=open]': {
        animateIn: true,
        slideInFromTop: '100%',

        sm: {
          slideInFromBottom: '100%',
        },
      },

      '&[data-state=closed]': {
        animateOut: true,
        fadeOut: '0.8',
        slideOutToRight: '100%',
      },
    },
    action: {
      display: 'inline-flex',
      h: '8',
      flexShrink: '0',
      alignItems: 'center',
      justifyContent: 'center',
      rounded: 'md',
      border: 'base',
      bg: 'transparent',
      px: '3',
      textStyle: 'sm',
      fontWeight: 'medium',
      focusRingOffsetColor: 'background',
      transition: 'colors',
      cursor: 'pointer',

      _hover: {
        bg: 'secondary',
      },

      _focus: {
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
    close: {
      position: 'absolute',
      right: '2',
      top: '2',
      rounded: 'md',
      p: '1',
      ca: 'foreground/50',
      opacity: '0',
      transition: 'opacity',
      cursor: 'pointer',

      _hover: {
        color: 'foreground',
      },

      _groupHover: {
        opacity: '1',
      },

      _focus: {
        opacity: '1',
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },
    },
    title: {
      textStyle: 'sm',
      fontWeight: 'semibold',
    },
    description: {
      textStyle: 'sm',
      opacity: '0.9',
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          border: 'base',
          bg: 'background',
        },
      },
      destructive: {
        root: {
          border: 'destructive',
          bg: 'destructive',
          color: 'destructive.foreground',
        },
        action: {
          bca: 'muted/40',

          _hover: {
            bca: 'destructive/30',
            bg: 'destructive',
            color: 'destructive.foreground',
          },

          _focus: {
            focusRingColor: 'destructive',
          },
        },
        close: {
          color: 'red.300',

          _hover: {
            color: 'red.50',
          },

          _focus: {
            focusRingColor: 'red.400',
            focusRingOffsetColor: 'red.600',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
