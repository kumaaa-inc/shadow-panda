import { defineParts, defineRecipe } from '@pandacss/dev'

const scrollAreaParts = defineParts({
  root: {
    selector: '&[data-part=root]',
  },
  viewport: {
    selector: '& [data-part=viewport]',
  },
})

export const scrollArea = defineRecipe({
  name: 'scrollArea',
  description: 'Styles for the ScrollArea component',
  base: scrollAreaParts({
    root: {
      position: 'relative',
      overflow: 'hidden',
    },
    viewport: {
      h: 'full',
      w: 'full',
      rounded: 'inherit',
    },
  }),
})

const scrollBarParts = defineParts({
  root: {
    selector: '&[data-part=root]',
  },
  thumb: {
    selector: '& [data-part=thumb]',
  },
})

export const scrollAreaScrollBar = defineRecipe({
  name: 'scrollAreaScrollBar',
  description: 'Styles for the ScrollBar component',
  base: scrollBarParts({
    root: {
      display: 'flex',
      touchAction: 'none',
      userSelect: 'none',
      transition: 'colors',
    },
    thumb: {
      position: 'relative',
      flex: '1',
      rounded: 'full',
      bg: 'border',
    },
  }),
  variants: {
    orientation: {
      vertical: scrollBarParts({
        root: {
          h: 'full',
          w: '2.5',
          borderLeft: 'base',
          borderLeftColor: 'transparent',
          p: '1px',
        },
      }),
      horizontal: scrollBarParts({
        root: {
          h: '2.5',
          w: 'full',
          borderTop: 'base',
          borderTopColor: 'transparent',
          p: '1px',
        },
      }),
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
})
