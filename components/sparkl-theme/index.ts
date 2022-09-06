import {
  GeistUIThemesBreakpoints,
  GeistUIThemesExpressiveness,
  GeistUIThemesFont,
  GeistUIThemesLayout,
  GeistUIThemesPalette,
} from 'components/themes'
import { Themes } from '..'

import * as c from './radix-colors'

export const breakpoints: GeistUIThemesBreakpoints = {
  xs: {
    min: '0',
    max: '650px',
  },
  sm: {
    min: '650px',
    max: '900px',
  },
  md: {
    min: '900px',
    max: '1280px',
  },
  lg: {
    min: '1280px',
    max: '1920px',
  },
  xl: {
    min: '1920px',
    max: '10000px',
  },
}

export const layout: GeistUIThemesLayout = {
  gap: '16pt',
  gapNegative: '-16pt',
  gapHalf: '8pt',
  gapHalfNegative: '-8pt',
  gapQuarter: '4pt',
  gapQuarterNegative: '-4pt',
  pageMargin: '16pt',
  pageWidth: '750pt',
  pageWidthWithMargin: '782pt',
  breakpointMobile: breakpoints.xs.max,
  breakpointTablet: breakpoints.sm.max,
  radius: '', // "2px",
  unit: '16px',
}

export const expressiveness: GeistUIThemesExpressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'underline',
  scrollerStart: 'rgba(255, 255, 255, 1)',
  scrollerEnd: 'rgba(255, 255, 255, 0)',
  dropdownBoxShadow: '', // "0 4px 4px 0 rgba(0, 0, 0, 0.02)",
  shadowSmall: '', // "2px 4px 0 rgba(0, 0, 0, 0.3)",
  shadowMedium: '', // "4px 6px 0 rgba(0, 0, 0, 0.3)",
  shadowLarge: '', // "8px 10px 0 rgba(0, 0, 0, 0.3)",
  portalOpacity: 0.25,
}

const palette: GeistUIThemesPalette = {
  accents_1: c.mauve.mauve2,
  accents_2: c.mauve.mauve6,
  accents_3: c.mauve.mauve7,
  accents_4: c.mauve.mauve8,
  accents_5: c.mauve.mauve9,
  accents_6: c.mauve.mauve10,
  accents_7: c.mauve.mauve11,
  accents_8: c.mauve.mauve12,
  background: c.mauve.mauve1,
  foreground: c.mauve.mauve12,
  selection: c.yellow.yellow5,
  secondary: c.mauve.mauve11,
  code: c.crimson.crimson10,
  border: c.mauve.mauve9,
  error: c.red.red9,
  errorLight: c.red.red7,
  errorLighter: c.red.red5,
  errorDark: c.red.red11,
  success: c.violet.violet9,
  successLight: c.violet.violet7,
  successLighter: c.violet.violet5,
  successDark: c.violet.violet11,
  warning: c.yellow.yellow9,
  warningLight: c.yellow.yellow6,
  warningLighter: c.yellow.yellow4,
  warningDark: c.yellow.yellow10,
  cyan: c.blue.blue7,
  cyanLighter: c.blue.blue5,
  cyanLight: c.blue.blue6,
  cyanDark: c.blue.blue8,
  violet: c.plum.plum9,
  violetLighter: c.plum.plum6,
  violetLight: c.plum.plum8,
  violetDark: c.plum.plum11,
  purple: c.crimson.crimson8,
  alert: c.crimson.crimson9,
  magenta: c.crimson.crimson10,
  link: c.violet.violet11,
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
