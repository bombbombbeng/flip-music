import React from 'react'
import ThemeContext from './ThemeContext'

export default function useTheme(): any {
  const theme = React.useContext(ThemeContext)
  return theme
}
