import { defineRecipe } from '@pandacss/dev'

export const calendar = defineRecipe({
  name: 'calendar',
  description: 'Styles for the Calendar component',
  base: { p: '3' },
})

export const calendarMonths = defineRecipe({
  name: 'calendarMonths',
  description: 'Styles for the calendarMonths',
  base: {
    display: 'flex',
    flexDirection: 'column',
    spaceY: '4',

    sm: {
      flexDirection: 'row',
      spaceX: '4',
      spaceY: '0',
    },
  },
})

export const calendarMonth = defineRecipe({
  name: 'calendarMonth',
  description: 'Styles for the calendarMonth',
  base: {
    spaceY: '4',
  },
})

export const calendarCaption = defineRecipe({
  name: 'calendarCaption',
  description: 'Styles for the calendarCaption',
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pt: '1',
    position: 'relative',
  },
})

export const calendarCaptionLabel = defineRecipe({
  name: 'calendarCaptionLabel',
  description: 'Styles for the calendarCaptionLabel',
  base: {
    textStyle: 'sm',
    fontWeight: 'medium',
  },
})

export const calendarNav = defineRecipe({
  name: 'calendarNav',
  description: 'Styles for the calendarNav',
  base: {
    display: 'flex',
    spaceX: '1',
    alignItems: 'center',
  },
})

export const calendarNavButton = defineRecipe({
  name: 'calendarNavButton',
  description: 'Styles for the calendarNavButton',
  base: {
    h: '7 !important',
    w: '7 !important',
    px: '0 !important',
    py: '0 !important',
    bg: 'transparent',
    opacity: '0.5',

    '&:hover': {
      opacity: '1',
    },
  },
})

export const calendarNavButtonPrevious = defineRecipe({
  name: 'calendarNavButtonPrevious',
  description: 'Styles for the calendarNavButtonPrevious',
  base: {
    position: 'absolute',
    left: '1',
  },
})

export const calendarNavButtonNext = defineRecipe({
  name: 'calendarNavButtonNext',
  description: 'Styles for the calendarNavButtonNext',
  base: {
    position: 'absolute',
    right: '1',
  },
})

export const calendarTable = defineRecipe({
  name: 'calendarTable',
  description: 'Styles for the calendarTable',
  base: {
    w: 'full',
    borderCollapse: 'collapse',
    spaceY: '1',
  },
})

export const calendarHeadRow = defineRecipe({
  name: 'calendarHeadRow',
  description: 'Styles for the calendarHeadRow',
  base: {
    display: 'flex',
  },
})

export const calendarHeadCell = defineRecipe({
  name: 'calendarHeadCell',
  description: 'Styles for the calendarHeadCell',
  base: {
    color: 'muted.foreground',
    rounded: 'md',
    w: '9',
    fontWeight: 'normal',
    fontSize: '0.8rem',
  },
})

export const calendarRow = defineRecipe({
  name: 'calendarRow',
  description: 'Styles for the calendarRow',
  base: {
    display: 'flex',
    w: 'full',
    mt: '2',
  },
})

export const calendarCell = defineRecipe({
  name: 'calendarCell',
  description: 'Styles for the calendarCell',
  base: {
    textAlign: 'center',
    textStyle: 'sm',
    p: '0',
    position: 'relative',

    '&:has([aria-selected])': {
      bg: 'accent',
    },

    _first: {
      '&:has([aria-selected])': {
        roundedLeft: 'md',
      },
    },

    _last: {
      '&:has([aria-selected])': {
        roundedRight: 'md',
      },
    },

    _focusWithin: {
      position: 'relative',
      zIndex: '20',
    },
  },
})

export const calendarDay = defineRecipe({
  name: 'calendarDay',
  description: 'Styles for the calendarDay',
  base: {
    // Unset button size styles
    h: '9 !important',
    w: '9 !important',
    px: '0 !important',
    py: '0 !important',

    fontWeight: 'normal',

    '&[aria-selected="true"]': {
      opacity: '1',
    },
  },
})

export const calendarDaySelected = defineRecipe({
  name: 'calendarDaySelected',
  description: 'Styles for the calendarDaySelected',
  base: {
    bg: 'primary',
    color: 'primary.foreground',

    _hover: {
      bg: 'primary',
      color: 'primary.foreground',
    },

    _focus: {
      bg: 'primary',
      color: 'primary.foreground',
    },
  },
})

export const calendarDayToday = defineRecipe({
  name: 'calendarDayToday',
  description: 'Styles for the calendarDayToday',
  base: {
    bg: 'accent',
    color: 'accent.foreground',
  },
})

export const calendarDayOutside = defineRecipe({
  name: 'calendarDayOutside',
  description: 'Styles for the calendarDayOutside',
  base: {
    color: 'muted.foreground',
    opacity: '0.5',
  },
})

export const calendarDayDisabled = defineRecipe({
  name: 'calendarDayDisabled',
  description: 'Styles for the calendarDayDisabled',
  base: {
    color: 'muted.foreground',
    opacity: '0.5',
  },
})

export const calendarDayRangeStart = defineRecipe({
  name: 'calendarDayRangeStart',
  description: 'Styles for the calendarDayRangeStart',
  base: {
    _hover: {
      bg: 'primary !important',
      color: 'primary.foreground !important',
    },
  },
})

export const calendarDayRangeMiddle = defineRecipe({
  name: 'calendarDayRangeMiddle',
  description: 'Styles for the calendarDayRangeMiddle',
  base: {
    '&[aria-selected="true"]': {
      bg: 'accent',
      color: 'accent.foreground',

      _hover: {
        bg: 'accent',
        color: 'accent.foreground',
      },
    },
  },
})

export const calendarDayRangeEnd = defineRecipe({
  name: 'calendarDayRangeEnd',
  description: 'Styles for the calendarDayRangeEnd',
  base: {
    _hover: {
      bg: 'primary !important',
      color: 'primary.foreground !important',
    },
  },
})

export const calendarDayHidden = defineRecipe({
  name: 'calendarDayHidden',
  description: 'Styles for the calendarDayHidden',
  base: {
    visibility: 'hidden',
  },
})
