import { defineRecipe } from '@pandacss/dev'

export const selectTrigger = defineRecipe({
  className: 'selectTrigger',
  description: 'Styles for the SelectTrigger component',
  base: {
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
})

export const selectContent = defineRecipe({
  className: 'selectContent',
  description: 'Styles for the SelectContent component',
  base: {
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
  },
  variants: {
    position: {
      'item-aligned': {},
      popper: {
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
  },
  defaultVariants: {
    position: 'popper',
  },
})

export const selectViewport = defineRecipe({
  className: 'selectViewport',
  description: 'Styles for the SelectContent viewport',
  base: {
    p: '1',
  },
  variants: {
    position: {
      'item-aligned': {},
      popper: {
        h: 'var(--radix-select-trigger-height)',
        w: 'full',
        minW: 'var(--radix-select-trigger-width)',
      },
    },
  },
  defaultVariants: {
    position: 'popper',
  },
})

export const selectLabel = defineRecipe({
  className: 'selectLabel',
  description: 'Styles for the SelectLabel component',
  base: {
    py: '1.5',
    pl: '8',
    pr: '2',
    textStyle: 'sm',
    fontWeight: 'semibold',
  },
})

export const selectItem = defineRecipe({
  className: 'selectItem',
  description: 'Styles for the SelectItem component',
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
})

export const selectItemInner = defineRecipe({
  className: 'selectItemInner',
  description: "Styles for the SelectItem component's inner element",
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

export const selectSeparator = defineRecipe({
  className: 'selectSeparator',
  description: 'Styles for the SelectSeparator component',
  base: {
    mx: '-1',
    my: '1',
    h: '1px',
    bg: 'muted',
  },
})
