export function colorLuminance(hexStr: string, luminance: number): string {
  // validate hex string
  let hex = String(hexStr).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  const lum = luminance || 0

  // convert to decimal and change luminosity
  let rgb = '#'
  let c
  let i
  for (i = 0; i < 3; i += 1) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += (`00${c}`).substr(c.length)
  }

  return rgb
}

export default {
  colorLuminance
}
