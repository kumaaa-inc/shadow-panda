import { defineRecipe } from '@pandacss/dev'

export const avatar = defineRecipe({
  name: 'avatar',
  description: 'Styles for the Avatar component',
  base: {
    position: 'relative',
    display: 'flex',
    height: '10',
    width: '10',
    flexShrink: '0',
    overflow: 'hidden',
    rounded: 'full',
  },
})

export const avatarImage = defineRecipe({
  name: 'avatarImage',
  description: 'Styles for the AvatarImage component',
  base: {
    aspectRatio: 'square',
    height: 'full',
    width: 'full',
  },
})

export const avatarFallback = defineRecipe({
  name: 'avatarFallback',
  description: 'Styles for the AvatarFallback component',
  base: {
    display: 'flex',
    height: 'full',
    width: 'full',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'full',
    bg: 'muted',
  },
})
