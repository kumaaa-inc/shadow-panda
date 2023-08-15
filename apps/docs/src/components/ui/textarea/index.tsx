import { styled, HTMLStyledProps } from '@shadow-panda/styled-system/jsx'
import { textarea } from '@shadow-panda/styled-system/recipes'

export const Textarea = styled('textarea', textarea)
export type TextareaProps = HTMLStyledProps<typeof Textarea>
