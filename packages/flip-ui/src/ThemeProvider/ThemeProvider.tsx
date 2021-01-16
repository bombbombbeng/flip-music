import React from 'react'
import { ThemeContext, useTheme } from '../styles'

interface ThemeProviderProps {
  theme: object,
  children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { theme: localTheme, children } = props
  const outerTheme = useTheme()
  console.log('outerTheme', outerTheme)
  const theme = outerTheme === null ? localTheme : { ...outerTheme, ...localTheme }
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
