import {
  //   GeistUIThemes,
  GeistUIThemesPalette,
  //   GeistUIThemesExpressiveness,
  GeistUIThemesLayout,
  GeistUIThemesFont,
} from 'components/themes'
import { expressiveness } from 'components/themes/presets/default'
import { defaultLayout } from 'components/themes/presets/shared'
import { Themes } from '..'
import * as c from './radix-colors'

const layout: GeistUIThemesLayout = defaultLayout
layout.radius = '2px'

export const expressiveness: GeistUIThemesExpressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.02)',
  scrollerStart: 'rgba(255, 255, 255, 1)',
  scrollerEnd: 'rgba(255, 255, 255, 0)',
  shadowSmall: '2px 4px 0 rgba(0, 0, 0, 0.7)',
  shadowMedium: '4px 6px 0 rgba(0, 0, 0, 0.6)',
  shadowLarge: '8px 10px 0 rgba(0, 0, 0, 0.5)',
  portalOpacity: 0.25,
}

const palette: GeistUIThemesPalette = {
  accents_1: c.mauve.mauve3,
  accents_2: c.mauve.mauve5,
  accents_3: c.mauve.mauve7,
  accents_4: c.mauve.mauve8,
  accents_5: c.mauve.mauve9,
  accents_6: c.mauve.mauve10,
  accents_7: c.mauve.mauve11,
  accents_8: c.mauve.mauve12,
  background: c.mauve.mauve1,
  foreground: c.mauve.mauve12,
  selection: c.blueA.blueA9,
  secondary: c.mauve.mauve11,
  code: c.crimsonA.crimsonA10,
  border: c.mauve.mauve9,
  error: c.redA.redA9,
  errorLight: c.redA.redA7,
  errorLighter: c.redA.redA5,
  errorDark: c.redA.redA11,
  success: c.violetA.violetA9,
  successLight: c.violetA.violetA7,
  successLighter: c.violetA.violetA5,
  successDark: c.violetA.violetA11,
  warning: c.yellowA.yellowA9,
  warningLight: c.yellowA.yellowA6,
  warningLighter: c.yellowA.yellowA4,
  warningDark: c.yellowA.yellowA10,
  cyan: c.blueA.blueA7,
  cyanLighter: c.blueA.blueA5,
  cyanLight: c.blueA.blueA6,
  cyanDark: c.blueA.blueA8,
  violet: c.plumA.plumA9,
  violetLighter: c.plumA.plumA6,
  violetLight: c.plumA.plumA8,
  violetDark: c.plumA.plumA11,
  purple: c.crimsonA.crimsonA8,
  alert: c.crimsonA.crimsonA9,
  magenta: c.crimsonA.crimsonA10,
  link: c.blueA.blueA10,
}

export const font: GeistUIThemesFont = {
  sans: '"Moriston", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  prism:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace',
}


export const SparklTheme = Themes.createFromLight({
  type: 'sparkl',
  palette: palette,
  font: font,
  layout: layout,
  expressiveness: expressiveness,
})
