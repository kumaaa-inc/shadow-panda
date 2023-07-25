import { defineRecipe } from '@pandacss/dev'

export const accordionItem = defineRecipe({
  name: 'accordionItem',
  description: 'Styles for the AccordionItem component',
  base: {
    borderBottom: '1',
    borderBottomColor: 'border',
  },
})

export const accordionHeader = defineRecipe({
  name: 'accordionHeader',
  description: 'Styles for the AccordionHeader component',
  base: {
    display: 'flex',
  },
})

export const accordionTrigger = defineRecipe({
  name: 'accordionTrigger',
  description: 'Styles for the AccordionTrigger component',
  base: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: '4',
    fontWeight: 'medium',
    transition: 'all',

    _hover: {
      textDecoration: 'underline',
    },

    '& > svg': {
      height: '4',
      width: '4',
      flexShrink: '0',
      transition: 'transform',
      transitionDuration: 'normal',
    },

    '&[data-state=open] > svg': {
      transform: 'rotate(180deg)',
    },
  },
})

export const accordionContent = defineRecipe({
  name: 'accordionContent',
  description: 'Styles for the AccordionContent component',
  base: {
    overflow: 'hidden',
    fontSize: 'sm',
    transition: 'all',

    '&[data-state=closed]': {
      animation: 'accordion-up',
    },

    '&[data-state=open]': {
      animation: 'accordion-down',
    },

    '& > div': {
      pb: '4',
      pt: '0',
    },
  },
})
