import type { UtilityConfig } from '@pandacss/types'
import { backgroundAlpha } from './backgroundAlpha'
import { outline } from './outline'

export const utilities: UtilityConfig = {
  ...backgroundAlpha,
  ...outline,
}
