import { defineRecipe } from '@pandacss/dev'

export const switchRecipe = defineRecipe({
  className: 'switchRecipe',
  description: 'Styles for the Switch component',
  base: {
    display: 'inline-flex',
    h: '24px',
    w: '44px',
    flexShrink: 0,
    cursor: 'pointer',
    alignItems: 'center',
    rounded: 'full',
    border: '2px solid transparent',
    transition: 'colors',

    _focusVisible: {
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

    '&[data-state=checked]': {
      bg: 'primary',
    },

    '&[data-state=unchecked]': {
      bg: 'input',
    },
  },
})

export const switchThumb = defineRecipe({
  className: 'switchThumb',
  description: 'Styles for the Switch thumb',
  base: {
    pointerEvents: 'none',
    display: 'block',
    h: '5',
    w: '5',
    rounded: 'full',
    bg: 'background',
    shadow: 'lg',
    focusRingWidth: '0',
    transition: 'transform',

    '&[data-state=checked]': {
      translateX: '5',
    },

    '&[data-state=unchecked]': {
      translateX: '0',
    },
  },
})
