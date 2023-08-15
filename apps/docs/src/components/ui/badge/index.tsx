import { styled, type HTMLStyledProps } from '@shadow-panda/styled-system/jsx'
import { badge } from '@shadow-panda/styled-system/recipes'

export const Badge = styled('div', badge)

export type BadgeProps = HTMLStyledProps<typeof Badge>
