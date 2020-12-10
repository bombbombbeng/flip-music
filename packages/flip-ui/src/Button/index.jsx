import React from 'react'

export class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'hahah'
    }
  }

  render() {
    const { children } = this.props
    const { test } = this.state
    return (
      <div>
        <span>{children}</span>
        <span>{test}</span>
      </div>
    )
  }
}

// export function Button(props) {
//   const { name } = props
//   return (
//     <div>{name}</div>
//   )
// }

export default Button
