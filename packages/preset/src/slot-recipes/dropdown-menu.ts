import { defineSlotRecipe } from '@pandacss/dev'

export const dropdownMenu = defineSlotRecipe({
  className: 'dropdownMenu',
  description: 'Styles for the DropdownMenu component',
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
    'itemIndicator',
    'checkboxItem',
    'radioItem',
    'label',
    'separator',
    'shortcut',
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
      outline: 'none',
      gap: '2',

      _focus: {
        bg: 'accent',
      },

      '&[data-state=open]': {
        bg: 'accent',
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
      boxShadow: 'lg',

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
      boxShadow: 'md',

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
      outline: 'none',
      transition: 'colors',
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
      outline: 'none',
      transition: 'colors',

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
      outline: 'none',
      transition: 'colors',

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
      opacity: '0.6',
    },
  },
})
