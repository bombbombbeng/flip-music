// import React from 'react'

export interface SoftBoxProps {
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

export declare function SoftBox(props: SoftBoxProps)

export default SoftBox
