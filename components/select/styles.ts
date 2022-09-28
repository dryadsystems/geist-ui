import { NormalTypes } from '../utils/prop-types'
import { GeistUIThemesPalette } from '../themes/presets'

export type SelectColor = {
  background: string
  border: string
  hover: string
  iconBorder: string
  placeholderColor: string
}

export const getColors = (
  palette: GeistUIThemesPalette,
  status?: NormalTypes,
): SelectColor => {
  const colors: { [key in NormalTypes]: SelectColor } = {
    default: {
      background: palette.background,
      border: palette.background,
      hover: palette.accents_1,
      iconBorder: palette.accents_6,
      placeholderColor: palette.accents_7,
    },
    secondary: {
      background: palette.accents_4,
      border: palette.accents_4,
      hover: palette.accents_5,
      iconBorder: palette.accents_6,
      placeholderColor: palette.accents_3,
    },
    success: {
      background: palette.successLighter,
      border: palette.successLighter,
      hover: palette.successLight,
      iconBorder: palette.successDark,
      placeholderColor: palette.success,
    },
    warning: {
      background: palette.warningLight,
      border: palette.warningLight,
      hover: palette.warning,
      iconBorder: palette.warningDark,
      placeholderColor: palette.warning,
    },
    error: {
      background: palette.errorLighter,
      border: palette.errorLighter,
      hover: palette.errorLight,
      iconBorder: palette.errorDark,
      placeholderColor: palette.error,
    },
  }

  if (!status) return colors.default
  return colors[status]
}
