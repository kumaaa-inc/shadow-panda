import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  'html, body': {
    bg: 'background',
    color: 'foreground',
    fontFamily: 'sans',
  },
  button: {
    color: 'inherit',
    outline: '2px solid transparent',
  },
})
