import { defineRecipe } from '@pandacss/dev'

export const alertDialogOverlay = defineRecipe({
  name: 'alertDialogOverlay',
  description: 'Styles for the AlertDialogOverlay component',
  base: {
    position: 'fixed',
    inset: '0',
    zIndex: 50,
    bga: 'background/80',
    backdropBlur: 'sm',

    '&[data-state=open]': {
      animateIn: true,
      fadeIn: 0,
    },

    '&[data-state=closed]': {
      animateOut: true,
      fadeOut: 0,
    },
  },
})

export const alertDialogContent = defineRecipe({
  name: 'alertDialogContent',
  description: 'Styles for the AlertDialogContent component',
  base: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    zIndex: 50,
    display: 'grid',
    w: 'full',
    maxWidth: 'lg',
    translateX: '-50%',
    translateY: '-50%',
    transitionDuration: 'normal',
    gap: '4',
    border: 'base',
    bg: 'background',
    p: '6',
    boxShadow: 'lg',

    '&[data-state=open]': {
      animateIn: true,
      fadeIn: 0,
      zoomIn: 95,
      slideInFromLeft: '50%',
      slideInFromTop: '48%',
    },

    '&[data-state=closed]': {
      animateOut: true,
      fadeOut: 0,
      zoomOut: 95,
      slideOutToLeft: '50%',
      slideOutToTop: '48%',
    },

    sm: {
      rounded: 'lg',
    },
  },
})

export const alertDialogHeader = defineRecipe({
  name: 'alertDialogHeader',
  description: 'Styles for the AlertDialogHeader component',
  base: {
    display: 'flex',
    flexDirection: 'column',
    spaceY: '2',
    textAlign: 'center',

    sm: {
      textAlign: 'left',
    },
  },
})

export const alertDialogFooter = defineRecipe({
  name: 'alertDialogFooter',
  description: 'Styles for the AlertDialogFooter component',
  base: {
    display: 'flex',
    flexDirection: 'column-reverse',

    sm: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      spaceX: '2',
    },
  },
})

export const alertDialogTitle = defineRecipe({
  name: 'alertDialogTitle',
  description: 'Styles for the AlertDialogTitle component',
  base: {
    fontSize: 'lg',
    fontWeight: 'semibold',
  },
})

export const alertDialogDescription = defineRecipe({
  name: 'alertDialogDescription',
  description: 'Styles for the AlertDialogDescription component',
  base: {
    fontSize: 'sm',
    color: 'muted.foreground',
  },
})

export const alertDialogCancel = defineRecipe({
  name: 'alertDialogCancel',
  description: 'Styles for the AlertDialogCancel component',
  base: {
    mt: {
      base: '2',
      sm: '0',
    },
  },
})
