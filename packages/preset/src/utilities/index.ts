import type { UtilityConfig } from '@pandacss/types'
import { animate } from './animate'
import { backdropFilter } from './backdrop-filter'
import { backgroundAlpha } from './background-alpha'
import { borderColorAlpha } from './border-color-alpha'
import { focusRing } from './focus-ring'
import { screenReaders } from './screen-readers'
import { space } from './space'
import { transform } from './transform'
import { typography } from './typography'

export const utilities: UtilityConfig = {
  ...animate,
  ...backdropFilter,
  ...backgroundAlpha,
  ...borderColorAlpha,
  ...focusRing,
  ...screenReaders,
  ...space,
  ...transform,
  ...typography,
}
