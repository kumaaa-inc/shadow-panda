import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  description: 'Styles for the Select component',
  slots: [
    'root',
    'group',
    'value',
    'trigger',
    'viewport',
    'content',
    'label',
    'item',
    'itemIndicator',
    'separator',
  ],
  base: {
    trigger: {
      display: 'flex',
      h: '10',
      w: 'full',
      alignItems: 'center',
      justifyContent: 'space-between',
      rounded: 'md',
      border: 'input',
      bg: 'transparent',
      px: '3',
      py: '2',
      textStyle: 'sm',
      cursor: 'pointer',
      focusRingOffsetColor: 'background',

      _placeholder: {
        color: 'muted.foreground',
      },

      _focus: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    },
    viewport: {
      p: '1',

      '&[data-position=popper]': {
        h: 'var(--radix-select-trigger-height)',
        w: 'full',
        minW: 'var(--radix-select-trigger-width)',
      },
    },
    content: {
      position: 'relative',
      zIndex: 50,
      minW: '8rem',
      overflow: 'hidden',
      rounded: 'md',
      border: 'base',
      bg: 'popover',
      color: 'popover.foreground',
      shadow: 'md',

      '&[data-state=open]': {
        animateIn: true,
        fadeIn: 0,
        zoomIn: 95,
      },

      '&[data-state=closed]': {
        animateOut: true,
        fadeOut: 0,
        zoomOut: 95,
      },

      '&[data-side=top]': {
        slideInFromBottom: '2',
      },

      '&[data-side=bottom]': {
        slideInFromTop: '2',
      },

      '&[data-side=left]': {
        slideInFromRight: '2',
      },

      '&[data-side=right]': {
        slideInFromLeft: '2',
      },

      '&[data-position=popper]': {
        '&[data-side=top]': {
          translateY: '-1',
        },

        '&[data-side=bottom]': {
          translateY: '1',
        },

        '&[data-side=left]': {
          translateX: '-1',
        },

        '&[data-side=right]': {
          translateX: '1',
        },
      },
    },
    label: {
      py: '1.5',
      pl: '8',
      pr: '2',
      textStyle: 'sm',
      fontWeight: 'semibold',
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      py: '1.5',
      pl: '8',
      pr: '2',
      textStyle: 'sm',
      outline: '2px solid transparent',

      _focus: {
        bg: 'accent',
        color: 'accent.foreground',
      },

      ['&[data-disabled]']: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    itemIndicator: {
      position: 'absolute',
      left: '2',
      display: 'flex',
      h: '3.5',
      w: '3.5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: 'muted',
    },
  },
})
