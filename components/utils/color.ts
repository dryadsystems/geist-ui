const hexToRgb = (color: string): [number, number, number] => {
  const fullReg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const full = color.replace(fullReg, (_, r, g, b) => `${r}${r}${g}${g}${b}${b}`)
  const values = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full)
  if (!values) {
    throw new Error(`Geist UI: Unsupported ${color} color.`)
  }
  return [
    Number.parseInt(values[1], 16),
    Number.parseInt(values[2], 16),
    Number.parseInt(values[3], 16),
  ]
}

export const colorToRgbValues = (color: string) => {
  if (color.charAt(0) === '#') return hexToRgb(color)

  const safeColor = color.replace(/ /g, '')
  const colorType = color.substr(0, 4)

  const regArray = safeColor.match(/\((.+)\)/)
  if (!colorType.startsWith('rgb') || !regArray) {
    console.log(color)
    throw new Error(`Geist UI: Only support ["RGB", "RGBA", "HEX"] color.`)
  }

  return regArray[1].split(',').map(str => Number.parseFloat(str))
}
// @ts-ignore
const HSLToRGB = (h, s, l) => {
  s /= 100
  l /= 100
  // @ts-ignore
  const k = n => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  // @ts-ignore
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [255 * f(0), 255 * f(8), 255 * f(4)]
}

const HSLStringToArray = (hslString: string) => {
  const hslArray = hslString
    .replace(/hsl\(|\)/g, '')
    .split(',')
    .map(str => Number.parseFloat(str))
  return hslArray
}

export const addColorAlpha = (color: string, alpha: number) => {
  if (!/^#|rgb|RGB/.test(color)) {
    const [h, s, l] = HSLStringToArray(color)
    color = `rgba(${HSLToRGB(h, s, l).join(',')},${alpha})`
  }
  const [r, g, b] = colorToRgbValues(color)
  const safeAlpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha
  return `rgba(${r}, ${g}, ${b}, ${safeAlpha})`
}
