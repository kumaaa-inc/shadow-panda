import { defineRecipe } from '@pandacss/dev'

export const dialogOverlay = defineRecipe({
  name: 'dialogOverlay',
  description: 'Styles for the DialogOverlay component',
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

export const dialogContent = defineRecipe({
  name: 'dialogContent',
  description: 'Styles for the DialogContent component',
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

export const dialogClose = defineRecipe({
  name: 'dialogClose',
  description: 'Styles for the DialogContent close button',
  base: {
    position: 'absolute',
    right: '4',
    top: '4',
    rounded: 'sm',
    opacity: '0.7',
    focusRingOffsetColor: 'background',
    transition: 'opacity',

    _hover: {
      opacity: '1',
    },

    _focus: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      focusRingWidth: '2',
      focusRingColor: 'ring',
      focusRingOffsetWidth: '2',
    },

    _disabled: {
      pointerEvents: 'none',
    },

    '[data-state=open]': {
      bg: 'accent',
      color: 'muted.foreground',
    },
  },
})

export const dialogHeader = defineRecipe({
  name: 'dialogHeader',
  description: 'Styles for the DialogHeader component',
  base: {
    display: 'flex',
    flexDirection: 'column',
    spaceY: '1.5',
    textAlign: 'center',

    sm: {
      textAlign: 'left',
    },
  },
})

export const dialogFooter = defineRecipe({
  name: 'dialogFooter',
  description: 'Styles for the DialogFooter component',
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

export const dialogTitle = defineRecipe({
  name: 'dialogTitle',
  description: 'Styles for the DialogTitle component',
  base: {
    textStyle: 'lg',
    fontWeight: 'semibold',
    leading: 'none',
    tracking: 'tight',
  },
})

export const dialogDescription = defineRecipe({
  name: 'dialogDescription',
  description: 'Styles for the DialogDescription component',
  base: {
    textStyle: 'sm',
    color: 'muted.foreground',
  },
})
