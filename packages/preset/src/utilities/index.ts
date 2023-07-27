import type { UtilityConfig } from '@pandacss/types'
import { animate } from './animate'
import { backdropFilter } from './backdrop-filter'
import { backgroundAlpha } from './background-alpha'
import { borderColorAlpha } from './border-color-alpha'
import { focusRing } from './focus-ring'
import { space } from './space'
import { typography } from './typography'

export const utilities: UtilityConfig = {
  ...animate,
  ...backdropFilter,
  ...backgroundAlpha,
  ...borderColorAlpha,
  ...focusRing,
  ...space,
  ...typography,
}
