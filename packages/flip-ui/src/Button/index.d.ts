import React from 'react'

export interface ButtonProps {
  name: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export declare function Button(props: ButtonProps)

export default Button
