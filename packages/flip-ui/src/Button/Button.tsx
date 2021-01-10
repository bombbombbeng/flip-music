import React from 'react'
// import PropTypes from 'prop-types'

export interface ButtonProps {
  name: string,
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function Button(props: ButtonProps) {
  const { children, onClick } = props
  return (
    <button type="button" onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export default Button
