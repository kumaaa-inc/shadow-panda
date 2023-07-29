import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  name: 'input',
  description: 'Styles for the Input component',
  base: {
    display: 'flex',
    h: '10',
    w: 'full',
    rounded: 'md',
    border: 'input',
    bg: 'background',
    px: '3',
    py: '2',
    fontSize: 'sm',
    leading: 'tight',
    focusRingOffsetColor: 'background',

    _file: {
      border: 'none',
      bg: 'transparent',
      fontSize: 'sm',
      leading: 'tight',
      fontWeight: 'medium',
    },

    _placeholder: {
      color: 'muted.foreground',
    },

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
  },
})
