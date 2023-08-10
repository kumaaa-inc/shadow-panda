import { defineRecipe } from '@pandacss/dev'

export const dropdownMenuSubTrigger = defineRecipe({
  className: 'dropdownMenuSubTrigger',
  description: 'Styles for the DropdownMenuSubTrigger component',
  base: {
    display: 'flex',
    cursor: 'default',
    userSelect: 'none',
    alignItems: 'center',
    rounded: 'sm',
    px: '2',
    py: '1.5',
    textStyle: 'sm',
    outline: 'none',

    _focus: {
      bg: 'accent',
    },

    '&[data-state=open]': {
      bg: 'accent',
    },
  },
  variants: {
    inset: {
      true: {
        pl: '8',
      },
    },
  },
  defaultVariants: {
    inset: false,
  },
})

export const dropdownMenuSubContent = defineRecipe({
  className: 'dropdownMenuSubContent',
  description: 'Styles for the DropdownMenuSubContent component',
  base: {
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
})

export const dropdownMenuContent = defineRecipe({
  className: 'dropdownMenuContent',
  description: 'Styles for the DropdownMenuContent component',
  base: {
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
})

export const dropdownMenuItem = defineRecipe({
  className: 'dropdownMenuItem',
  description: 'Styles for the DropdownMenuItem component',
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
  variants: {
    inset: {
      true: {
        pl: '8',
      },
    },
  },
  defaultVariants: {
    inset: false,
  },
})

export const dropdownMenuCheckboxItem = defineRecipe({
  className: 'dropdownMenuCheckboxItem',
  description: 'Styles for the DropdownMenuCheckboxItem component',
  base: {
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
})

export const dropdownMenuRadioItem = defineRecipe({
  className: 'dropdownMenuRadioItem',
  description: 'Styles for the DropdownMenuRadioItem component',
  base: {
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
})

export const dropdownMenuItemIndicator = defineRecipe({
  className: 'dropdownMenuItemIndicator',
  description: 'Styles for the DropdownMenu item indicator',
  base: {
    position: 'absolute',
    left: '2',
    display: 'flex',
    h: '3.5',
    w: '3.5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const dropdownMenuLabel = defineRecipe({
  className: 'dropdownMenuLabel',
  description: 'Styles for the DropdownMenuLabel',
  base: {
    px: '2',
    py: '1.5',
    textStyle: 'sm',
    fontWeight: 'semibold',
  },
  variants: {
    inset: {
      true: {
        pl: '8',
      },
    },
  },
  defaultVariants: {
    inset: false,
  },
})

export const dropdownMenuSeparator = defineRecipe({
  className: 'dropdownMenuSeparator',
  description: 'Styles for the DropdownMenuSeparator',
  base: {
    mx: '-1',
    my: '1',
    h: '1px',
    bg: 'muted',
  },
})

export const dropdownMenuShortcut = defineRecipe({
  className: 'dropdownMenuShortcut',
  description: 'Styles for the DropdownMenuShortcut',
  base: {
    ml: 'auto',
    textStyle: 'xs',
    tracking: 'widest',
    opacity: '0.6',
  },
})
