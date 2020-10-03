import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import Toggle from "react-toggle"
import "./themeToggler.css"
import styled from "styled-components"

const ToggleTheme = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => (
        <ToggleContainer>
          <Span>Dark Mode</Span>
          <Toggle
            defaultChecked={theme === "dark"}
            onChange={(e: any) =>
              toggleTheme(e.target.checked ? "dark" : "light")
            }
          />
        </ToggleContainer>
      )}
    </ThemeToggler>
  )
}

export default ToggleTheme

const Span = styled.span`
  vertical-align: top;
  margin-right: 15px;
`
const ToggleContainer = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;

  svg {
    color: transparent;
  }
`
