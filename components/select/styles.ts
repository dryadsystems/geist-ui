import { NormalTypes } from '../utils/prop-types'
import { GeistUIThemesPalette } from '../themes/presets'

export type SelectColor = {
  background: string
  border: string
  borderActive: string
  iconBorder: string
  placeholderColor: string
}

export const getColors = (
  palette: GeistUIThemesPalette,
  status?: NormalTypes,
): SelectColor => {
  const colors: { [key in NormalTypes]: SelectColor } = {
    default: {
      background: palette.accents_2,
      border: palette.border,
      borderActive: palette.foreground,
      iconBorder: palette.accents_5,
      placeholderColor: palette.accents_5,
    },
    secondary: {
      background: palette.border,
      border: palette.border,
      borderActive: palette.foreground,
      iconBorder: palette.accents_5,
      placeholderColor: palette.accents_3,
    },
    success: {
      background: palette.successLighter,
      border: palette.successLighter,
      borderActive: palette.successDark,
      iconBorder: palette.success,
      placeholderColor: palette.success,
    },
    warning: {
      background: palette.warningLighter,
      border: palette.warningLighter,
      borderActive: palette.warningDark,
      iconBorder: palette.warning,
      placeholderColor: palette.warning,
    },
    error: {
      background: palette.errorLighter,
      border: palette.errorLighter,
      borderActive: palette.errorDark,
      iconBorder: palette.error,
      placeholderColor: palette.error,
    },
  }

  if (!status) return colors.default
  return colors[status]
}
