import { styled, type HTMLStyledProps } from '@shadow-panda/styled-system/jsx'
import { label } from '@shadow-panda/styled-system/recipes'

export const Label = styled('label', label)
export type LabelProps = HTMLStyledProps<typeof Label>
