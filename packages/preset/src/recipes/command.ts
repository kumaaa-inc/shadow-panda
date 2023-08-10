import { defineRecipe } from '@pandacss/dev'

export const command = defineRecipe({
  className: 'command',
  description: 'Styles for the Command component',
  base: {
    display: 'flex',
    h: 'full',
    w: 'full',
    flexDirection: 'column',
    overflow: 'hidden',
    rounded: 'md',
    bg: 'popover',
    color: 'popover.foreground',
  },
})

export const commandDialogContent = defineRecipe({
  className: 'commandDialogContent',
  description: 'Styles for the CommandDialog content',
  base: {
    overflow: 'hidden',
    p: '0 !important',
    boxShadow: 'lg !important',
  },
})

export const commandDialogCommand = defineRecipe({
  className: 'commandDialogCommand',
  description: 'Styles for the CommandDialog command',
  base: {
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
})

export const commandInput = defineRecipe({
  className: 'commandInput',
  description: 'Styles for the CommandInput component',
  base: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'base',
    px: '3',
  },
})

export const commandInputSearch = defineRecipe({
  className: 'commandInputSearch',
  description: 'Styles for the CommandInput search',
  base: {
    mr: '2',
    h: '4',
    w: '4',
    flexShrink: '0',
    opacity: '0.5',
  },
})

export const commandInputInput = defineRecipe({
  className: 'commandInputInput',
  description: 'Styles for the CommandInput input',
  base: {
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
})

export const commandList = defineRecipe({
  className: 'commandList',
  description: 'Styles for the CommandList component',
  base: {
    maxH: '300px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
})

export const commandEmpty = defineRecipe({
  className: 'commandEmpty',
  description: 'Styles for the CommandEmpty component',
  base: {
    py: '6',
    textAlign: 'center',
    textStyle: 'sm',
  },
})

export const commandGroup = defineRecipe({
  className: 'commandGroup',
  description: 'Styles for the CommandGroup component',
  base: {
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
})

export const commandSeparator = defineRecipe({
  className: 'commandSeparator',
  description: 'Styles for the CommandSeparator component',
  base: {
    mx: '-1',
    h: '1px',
    bg: 'border',
  },
})

export const commandItem = defineRecipe({
  className: 'commandItem',
  description: 'Styles for the CommandItem component',
  base: {
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

    '&[aria-selected=true]': {
      bg: 'accent',
      color: 'accent.foreground',
    },

    '&[data-disabled]': {
      opacity: '0.5',
    },
  },
})

export const commandShortcut = defineRecipe({
  className: 'commandShortcut',
  description: 'Styles for the CommandShortcut component',
  base: {
    ml: 'auto',
    textStyle: 'xs',
    tracking: 'widest',
    color: 'muted.foreground',
  },
})
