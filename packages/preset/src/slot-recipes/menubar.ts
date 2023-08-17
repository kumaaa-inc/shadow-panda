import { defineSlotRecipe } from '@pandacss/dev'

export const menubar = defineSlotRecipe({
  className: 'menubar',
  description: 'Styles for the Menubar component',
  slots: [
    'root',
    'menu',
    'group',
    'portal',
    'sub',
    'radioGroup',
    'trigger',
    'subTrigger',
    'subContent',
    'content',
    'item',
    'checkboxItem',
    'radioItem',
    'itemIndicator',
    'label',
    'separator',
    'shortcut',
  ],
  base: {
    root: {
      display: 'flex',
      h: '10',
      alignItems: 'center',
      spaceX: '1',
      rounded: 'md',
      border: 'base',
      bg: 'background',
      p: '1',
    },
    trigger: {
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      px: '3',
      py: '1.5',
      textStyle: 'sm',
      fontWeight: 'medium',
      outline: '2px solid transparent',

      _focus: {
        bg: 'accent',
        color: 'accent.foreground',
      },

      '&[data-state=open]': {
        bg: 'accent',
        color: 'accent.foreground',
      },
    },
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
      color: 'popover.foreground',
      p: '1',

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
      minW: '12rem',
      overflow: 'hidden',
      rounded: 'md',
      border: 'base',
      bg: 'popover',
      color: 'popover.foreground',
      p: '1',
      shadow: 'md',

      '&[data-state=open]': {
        animateIn: true,
        fadeIn: 0,
        zoomIn: 95,
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
    itemIndicator: {
      position: 'absolute',
      left: '2',
      display: 'flex',
      h: '3.5',
      w: '3.5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      px: '2',
      py: '1.5',
      textStyle: 'sm',
      fontWeight: 'semibold',
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: 'muted',
    },
    shortcut: {
      ml: 'auto',
      textStyle: 'xs',
      tracking: 'widest',
      color: 'muted.foreground',
    },
  },
})
