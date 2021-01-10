import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

export function createStyle(style: any) {
  const sheet = jss.createStyleSheet(style)
  console.log('createStyle', sheet)
  return sheet
}

export default createStyle
