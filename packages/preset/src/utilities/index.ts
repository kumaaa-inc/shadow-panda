import type { UtilityConfig } from '@pandacss/types'
import { animate } from './animate'
import { backdropFilter } from './backdrop-filter'
import { backgroundAlpha } from './background-alpha'
import { borderColorAlpha } from './border-color-alpha'
import { outline } from './outline'
import { space } from './space'
import { typography } from './typography'

export const utilities: UtilityConfig = {
  ...animate,
  ...backdropFilter,
  ...backgroundAlpha,
  ...borderColorAlpha,
  ...outline,
  ...space,
  ...typography,
}
