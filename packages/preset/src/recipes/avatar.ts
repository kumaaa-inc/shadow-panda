import { defineRecipe } from '@pandacss/dev'

export const avatar = defineRecipe({
  className: 'avatar',
  description: 'Styles for the Avatar component',
  base: {
    position: 'relative',
    display: 'flex',
    h: '10',
    w: '10',
    flexShrink: '0',
    overflow: 'hidden',
    rounded: 'full',
  },
})

export const avatarImage = defineRecipe({
  className: 'avatarImage',
  description: 'Styles for the AvatarImage component',
  base: {
    aspectRatio: 'square',
    h: 'full',
    w: 'full',
  },
})

export const avatarFallback = defineRecipe({
  className: 'avatarFallback',
  description: 'Styles for the AvatarFallback component',
  base: {
    display: 'flex',
    h: 'full',
    w: 'full',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'full',
    bg: 'muted',
  },
})
