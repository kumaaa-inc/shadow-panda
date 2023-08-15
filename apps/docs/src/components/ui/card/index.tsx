import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { card } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(card)

export const Card = withProvider(styled('div'), 'root')
export const CardHeader = withContext(styled('div'), 'header')
export const CardTitle = withContext(styled('h3'), 'title')
export const CardDescription = withContext(styled('p'), 'description')
export const CardContent = withContext(styled('div'), 'content')
export const CardFooter = withContext(styled('div'), 'footer')
