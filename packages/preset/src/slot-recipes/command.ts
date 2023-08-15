import { defineSlotRecipe } from '@pandacss/dev'

export const command = defineSlotRecipe({
  className: 'command',
  description: 'Styles for the Command component',
  slots: [
    'root',
    'inputWrapper',
    'inputSearch',
    'input',
    'list',
    'empty',
    'group',
    'separator',
    'item',
    'shortcut',
  ],
  base: {
    root: {
      display: 'flex',
      h: 'full',
      w: 'full',
      flexDirection: 'column',
      overflow: 'hidden',
      rounded: 'md',
      bg: 'popover',
      color: 'popover.foreground',
    },
    inputWrapper: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: 'base',
      px: '3',
    },
    inputSearch: {
      mr: '2',
      h: '4',
      w: '4',
      flexShrink: '0',
      opacity: '0.5',
    },
    input: {
      display: 'flex',
      h: '11',
      w: 'full',
      rounded: 'md',
      bg: 'transparent',
      py: '3',
      textStyle: 'sm',
      outline: 'none',
      boxShadow: 'none',

      _placeholder: {
        color: 'muted.foreground',
      },

      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    },
    list: {
      maxH: '300px',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    empty: {
      py: '6',
      textAlign: 'center',
      textStyle: 'sm',
    },
    group: {
      overflow: 'hidden',
      p: '1',
      color: 'foreground',

      '& [cmdk-group-heading]': {
        px: '2',
        py: '1.5',
        textStyle: 'xs',
        fontWeight: 'medium',
        color: 'muted.foreground',
      },
    },
    separator: {
      mx: '-1',
      h: '1px',
      bg: 'border',
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
      gap: '2',

      '&[aria-selected=true]': {
        bg: 'accent',
        color: 'accent.foreground',
      },

      '&[data-disabled]': {
        opacity: '0.5',
      },
    },
    shortcut: {
      ml: 'auto',
      textStyle: 'xs',
      tracking: 'widest',
      color: 'muted.foreground',
    },
  },
})

export const commandDialog = defineSlotRecipe({
  className: 'command-dialog',
  description: 'Styles for the CommandDialog component',
  slots: ['content', 'command'],
  base: {
    content: {
      overflow: 'hidden',
      p: '0 !important',
      boxShadow: 'lg !important',
    },
    command: {
      '& [cmdk-group-heading]': {
        px: '2',
        fontWeight: 'medium',
        color: 'muted.foreground',
      },
      '& [cmdk-group]:not([hidden]) ~[cmdk-group]': {
        pt: 0,
      },
      '& [cmdk-group]': {
        px: '2',
      },
      '& [cmdk-input-wrapper] svg': {
        h: '5',
        w: '5',
      },
      '& [cmdk-input]': {
        h: '12',
      },
      '& [cmdk-item]': {
        py: '3',
      },
      '& [cmdk-item] svg': {
        h: '5',
        w: '5',
      },
    },
  },
})
