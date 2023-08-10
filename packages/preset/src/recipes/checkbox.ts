import { defineRecipe } from '@pandacss/dev'

export const checkbox = defineRecipe({
  className: 'checkbox',
  description: 'Styles for the Checkbox component',
  base: {
    h: '4',
    w: '4',
    flexShrink: '0',
    rounded: 'sm',
    border: 'primary',
    focusRingOffsetColor: 'background',

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

    '&[data-state="checked"]': {
      bg: 'primary',
      color: 'primary.foreground',
    },
  },
})

export const checkboxIndicator = defineRecipe({
  className: 'checkboxIndicator',
  description: 'Styles for the Checkbox indicator',
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'currentColor',
  },
})
