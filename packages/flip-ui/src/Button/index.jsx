import React from 'react'

// export class Button extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     const { children } = this.props
//     return (
//       <button type="button">
//         <span>{children}</span>
//       </button>
//     )
//   }
// }

export function Button(props) {
  const { children } = props
  return (
    <button type="button">
      <span>{children}</span>
    </button>
  )
}

export default Button
