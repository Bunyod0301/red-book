"use client"

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function ClientThemeWrapper({children}:any) {
  const { theme }:any = useContext(ThemeContext)

  return <html lang="en" data-theme={theme}>{children}</html>
}