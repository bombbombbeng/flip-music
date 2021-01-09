import React from 'react'
import { ThemeContext, useTheme } from '../styles'

interface ThemeProviderProps {
  theme: object,
  children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { theme, children } = props
  // const theme = useTheme()
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
