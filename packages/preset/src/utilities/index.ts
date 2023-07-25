import type { UtilityConfig } from '@pandacss/types'
import { backgroundAlpha } from './background-alpha'
import { borderColorAlpha } from './border-color-alpha'
import { outline } from './outline'
import { typography } from './typography'

export const utilities: UtilityConfig = {
  ...backgroundAlpha,
  ...borderColorAlpha,
  ...outline,
  ...typography,
}
