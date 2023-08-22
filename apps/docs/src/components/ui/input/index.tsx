import { styled, type HTMLStyledProps } from '@shadow-panda/styled-system/jsx'
import { input } from '@shadow-panda/styled-system/recipes'

export const Input = styled('input', input)
export type InputProps = HTMLStyledProps<typeof Input>
