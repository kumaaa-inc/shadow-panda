import { defineSlotRecipe } from '@pandacss/dev'

export const calendar = defineSlotRecipe({
  className: 'calendar',
  description: 'Styles for the Calendar component',
  slots: [
    'root',
    'months',
    'month',
    'caption',
    'caption_label',
    'nav',
    'nav_button',
    'nav_button_previous',
    'nav_button_next',
    'table',
    'head_row',
    'head_cell',
    'row',
    'cell',
    'day',
    'day_selected',
    'day_today',
    'day_outside',
    'day_disabled',
    'day_range_start',
    'day_range_middle',
    'day_range_end',
    'day_hidden',
  ],
  base: {
    root: { p: '3' },
    months: {
      display: 'flex',
      flexDirection: 'column',
      spaceY: '4',

      sm: {
        flexDirection: 'row',
        spaceX: '4',
        spaceY: '0',
      },
    },
    month: {
      spaceY: '4',
    },
    caption: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pt: '1',
      position: 'relative',
    },
    caption_label: {
      textStyle: 'sm',
      fontWeight: 'medium',
    },
    nav: {
      display: 'flex',
      spaceX: '1',
      alignItems: 'center',
    },
    nav_button: {
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
    nav_button_previous: {
      position: 'absolute',
      left: '1',
    },
    nav_button_next: {
      position: 'absolute',
      right: '1',
    },
    table: {
      w: 'full',
      borderCollapse: 'collapse',
      spaceY: '1',
    },
    head_row: {
      display: 'flex',
    },
    head_cell: {
      color: 'muted.foreground',
      rounded: 'md',
      w: '9',
      fontWeight: 'normal',
      fontSize: '0.8rem',
    },
    row: {
      display: 'flex',
      w: 'full',
      mt: '2',
    },
    cell: {
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
    day: {
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
    day_selected: {
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
    day_today: {
      bg: 'accent',
      color: 'accent.foreground',
    },
    day_outside: {
      color: 'muted.foreground',
      opacity: '0.5',
    },
    day_disabled: {
      color: 'muted.foreground',
      opacity: '0.5',
    },
    day_range_start: {
      _hover: {
        bg: 'primary !important',
        color: 'primary.foreground !important',
      },
    },
    day_range_middle: {
      '&[aria-selected="true"]': {
        bg: 'accent',
        color: 'accent.foreground',

        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
    },
    day_range_end: {
      _hover: {
        bg: 'primary !important',
        color: 'primary.foreground !important',
      },
    },
    day_hidden: {
      visibility: 'hidden',
    },
  },
})
