import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { alert } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(alert)

export const Alert = withProvider(styled('div'), 'root', { role: 'alert' })
export const AlertTitle = withContext(styled('h5'), 'title')
export const AlertDescription = withContext(styled('div'), 'description')
