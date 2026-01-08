import type React from "react"

interface ThemeProviderProps {
  colors?: {
    primary: string
    secondary: string
    accent: string
    neutral: string
    background: string
    text: string
    footerBackground?: string
  }
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Colors are now set synchronously via inline script in layout.tsx
  // This component is kept for potential future client-side theme updates
  return <>{children}</>
}
