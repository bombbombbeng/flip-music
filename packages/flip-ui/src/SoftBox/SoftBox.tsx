import React from 'react'
import PropTypes from 'prop-types'
import { createStyle, useTheme } from '../styles'
import { colorLuminance } from './utils'

export interface SoftBoxProps {
  children?: React.ReactNode,
  /**
   * The direction of light.
   */
  lightPlacement?: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom',
  /**
   * The color of the component, support hx and rgb()
   */
  color?: string,
  /**
   * The width of the component, unit is 'px'.
   */
  width?: number,
  /**
   * The height of the component, unit is 'px'.
   */
  height?: number,
  /**
   * The radius of the box, support 'px' and '%', such as '20px' and '20%'.
   */
  radius?: String,
  /**
   * The distance of light, unit is 'px'.
   */
  distance?: number,
  /**
   * The intensity of the light, range from 0 to 1.
   */
  intensity?: number,
  /**
   * The blur of shadow, unit is 'px'.
   */
  blur?: number,
  /**
   * The shape of the box.
   */
  shape?: 'flat' | 'concave' | 'convex' | 'pressed'
}

// const styles = createStyle({
//   flipSoftBoxInner: {
//     flex: '',
//
//   }
// })

export function SoftBox(props: SoftBoxProps) {
  const {
    children,
    lightPlacement,
    color: c,
    width,
    height,
    radius,
    distance,
    intensity = 0.15,
    blur,
    shape
  } = props
  const theme = useTheme()
  console.log('soft box', theme)
  const color = theme && theme.color ? theme.color : c
  const lightColor = colorLuminance(color, intensity)
  const darkColor = colorLuminance(color, intensity * -1)
  const sheet = createStyle({
    flipSoftBox: {
      background: color,
      width,
      height,
      borderRadius: radius,
      boxShadow: `${distance}px ${distance}px ${blur}px ${darkColor}, -${distance}px -${distance}px ${blur}px ${lightColor}`
    }
  })
  sheet.attach()
  return (
    <div className={sheet.classes.flipSoftBox}>
      <div>{children}</div>
    </div>
  )
}

SoftBox.defaultProps = {
  children: undefined,
  lightPlacement: 'left-top',
  color: '#e0e0e0',
  width: 60,
  height: 40,
  radius: '20%',
  distance: 5,
  intensity: 0.15,
  blur: 20,
  shape: 'flat'
}

SoftBox.propTypes = {
  children: PropTypes.node,
  lightPlacement: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.string,
  distance: PropTypes.number,
  intensity: PropTypes.number,
  blur: PropTypes.number,
  shape: PropTypes.string
}

export default SoftBox
