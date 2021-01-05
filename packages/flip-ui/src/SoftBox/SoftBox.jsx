import React from 'react'
import PropTypes from 'prop-types'

export function SoftBox(props) {
  const {
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
  return (
    <div>hahah</div>
  )
}

SoftBox.propTypes = {
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

SoftBox.defaultProps = {
  lightPlacement: 'left-top',
  color: '#f3d853',
  width: 20,
  height: 20,
  radius: '20%',
  distance: 5,
  intensity: 10,
  blur: 20,
  shape: 'flat'
}

export default SoftBox
