import React from 'react'
import PropTypes from 'prop-types'

export function Button(props) {
  const { children, onClick } = props
  return (
    <button type="button" onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

Button.defaultProps = {
  children: undefined,
  onClick: null
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button
