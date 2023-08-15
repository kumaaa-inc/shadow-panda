import { defineSlotRecipe } from '@pandacss/dev'

export const alertDialog = defineSlotRecipe({
  className: 'alertDialog',
  description: 'Styles for the AlertDialog component',
  slots: [
    'root',
    'trigger',
    'portal',
    'overlay',
    'content',
    'header',
    'footer',
    'title',
    'description',
    'action',
    'cancel',
  ],
  base: {
    overlay: {
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
    content: {
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
    header: {
      display: 'flex',
      flexDirection: 'column',
      spaceY: '2',
      textAlign: 'center',

      sm: {
        textAlign: 'left',
      },
    },
    footer: {
      display: 'flex',
      flexDirection: 'column-reverse',

      sm: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        spaceX: '2',
      },
    },
    title: {
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      textStyle: 'sm',
      color: 'muted.foreground',
    },
    cancel: {
      mt: {
        base: '2',
        sm: '0',
      },
    },
  },
})
