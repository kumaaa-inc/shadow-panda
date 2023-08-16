import { defineRecipe } from '@pandacss/dev'

export const toastViewport = defineRecipe({
  className: 'toastViewport',
  description: 'Styles for the ToastViewport component',
  base: {
    position: 'fixed',
    top: '0',
    zIndex: 100,
    display: 'flex',
    maxH: 'screen',
    w: 'full',
    flexDirection: 'column-reverse',
    p: '4',

    sm: {
      bottom: '0',
      right: '0',
      top: 'auto',
      flexDirection: 'column',
    },

    md: {
      maxW: '420px',
    },
  },
})
