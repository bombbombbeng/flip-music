import React from 'react'
import PropTypes from 'prop-types'
import { createStyle, useTheme } from '../styles'

export interface SoftBoxProps {
  children?: React.ReactNode,
  /**
   * The direction of light.
   * @default 'left-top'
   */
  lightPlacement?: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom',
  /**
   * The color of the component.
   * @default '#f3d853'
   */
  color?: String,
  /**
   * The width of the component, unit is 'px'.
   * @default 20
   */
  width?: Number,
  /**
   * The height of the component, unit is 'px'.
   * @default 20
   */
  height?: Number,
  /**
   * The radius of the box, support 'px' and '%', such as '20px' and '20%'.
   * @default '20%'
   */
  radius?: String,
  /**
   * The distance of light, unit is 'px'.
   * @default 5
   */
  distance?: Number,
  /**
   * The intensity of the light.
   * default 10
   */
  intensity?: Number,
  /**
   * The blur of shadow, unit is 'px'.
   * default 20
   */
  blur?: Number,
  /**
   * The shape of the box.
   * default 'flat'
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
    color,
    width,
    height,
    radius,
    distance,
    intensity,
    blur,
    shape
  } = props
  const theme = useTheme()
  console.log('soft box', theme)
  const sheet = createStyle({
    flipSoftBox: {
      background: theme && theme.color ? theme.color : color,
      width,
      height,
      borderRadius: radius,
      boxShadow: `${distance}px ${distance}px ${blur}px #cfb847, -${distance}px -${distance}px ${blur}px #fff85f`
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
  color: '#f3d853',
  width: 60,
  height: 40,
  radius: '20%',
  distance: 5,
  intensity: 10,
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
