import React, { useContext } from "react"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

export const Layout = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => themeContext.toggleDark()}
          checked={themeContext.isDark}
        />{" "}
        Dark mode
      </label>
      {children}
    </div>
  )
}
