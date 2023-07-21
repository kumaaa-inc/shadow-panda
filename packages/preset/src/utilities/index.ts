import type { UtilityConfig } from '@pandacss/types'
import { backgroundAlpha } from './background-alpha'
import { outline } from './outline'

export const utilities: UtilityConfig = {
  ...backgroundAlpha,
  ...outline,
}
