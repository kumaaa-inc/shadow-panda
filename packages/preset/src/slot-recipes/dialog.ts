import { defineSlotRecipe } from '@pandacss/dev'

export const dialog = defineSlotRecipe({
  className: 'dialog',
  description: 'Styles for the Dialog component',
  slots: [
    'root',
    'trigger',
    'portal',
    'overlay',
    'close',
    'content',
    'header',
    'footer',
    'title',
    'description',
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
    close: {
      position: 'absolute',
      right: '4',
      top: '4',
      rounded: 'sm',
      opacity: '0.7',
      focusRingOffsetColor: 'background',
      transition: 'opacity',
      cursor: 'pointer',

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
      spaceY: '1.5',
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
      leading: 'none',
      tracking: 'tight',
    },
    description: {
      textStyle: 'sm',
      color: 'muted.foreground',
    },
  },
})
