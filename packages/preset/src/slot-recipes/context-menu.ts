import { defineSlotRecipe } from '@pandacss/dev'

export const contextMenu = defineSlotRecipe({
  className: 'contextMenu',
  description: 'Styles for the ContextMenu component',
  slots: [
    'root',
    'trigger',
    'group',
    'portal',
    'sub',
    'radioGroup',
    'subTrigger',
    'subContent',
    'content',
    'item',
    'checkboxItem',
    'radioItem',
    'label',
    'separator',
    'shortcut',
    'itemIndicator',
  ],
  base: {
    subTrigger: {
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      px: '2',
      py: '1.5',
      textStyle: 'sm',
      outline: '2px solid transparent',
      focusRingOffsetColor: 'background',
      gap: '2',

      _focus: {
        bg: 'accent',
        color: 'accent.foreground',
      },

      '&[data-state=open]': {
        bg: 'accent',
        color: 'accent.foreground',
      },
    },
    subContent: {
      zIndex: 50,
      minW: '8rem',
      overflow: 'hidden',
      rounded: 'md',
      border: 'base',
      bg: 'popover',
      p: '1',
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
    },
    content: {
      zIndex: 50,
      minW: '8rem',
      overflow: 'hidden',
      rounded: 'md',
      border: 'base',
      bg: 'popover',
      p: '1',
      color: 'popover.foreground',
      shadow: 'md',
      animateIn: true,
      fadeIn: 80,

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
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      px: '2',
      py: '1.5',
      textStyle: 'sm',
      outline: '2px solid transparent',
      gap: '2',

      _focus: {
        bg: 'accent',
        color: 'accent.foreground',
      },

      '&[data-disabled]': {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    checkboxItem: {
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

      '&[data-disabled]': {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    radioItem: {
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

      '&[data-disabled]': {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    label: {
      px: '2',
      py: '1.5',
      textStyle: 'sm',
      fontWeight: 'semibold',
      color: 'foreground',
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: 'border',
    },
    shortcut: {
      ml: 'auto',
      textStyle: 'xs',
      tracking: 'widest',
      color: 'muted.foreground',
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
  },
  variants: {
    inset: {
      true: {
        subTrigger: {
          pl: '8',
        },
        item: {
          pl: '8',
        },
        label: {
          pl: '8',
        },
      },
    },
  },
  defaultVariants: {
    inset: false,
  },
})
