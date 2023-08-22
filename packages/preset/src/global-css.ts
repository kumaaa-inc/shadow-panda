import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextSizeAdjust: '100%',
  },
  body: {
    bg: 'background',
    color: 'foreground',
    fontFamily: 'sans',
  },
  button: {
    color: 'inherit',
    outline: '2px solid transparent',
  },
})
