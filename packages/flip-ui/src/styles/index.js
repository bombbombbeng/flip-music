import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

export function createStyle(style) {
  const sheet = jss.createStyleSheet(style)
  console.log(sheet)
  return sheet
}

export default createStyle
