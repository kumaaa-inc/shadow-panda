import { defineSlotRecipe } from '@pandacss/dev'

export const collapsible = defineSlotRecipe({
  className: 'collapsible',
  description: 'Styles for the Collapsible component',
  slots: ['root', 'trigger', 'content'],
  base: {},
})
