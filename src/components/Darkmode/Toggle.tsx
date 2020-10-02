import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import Toggle from "react-toggle"
import "./themeToggler.css"
import sun from "./sun.png"
import moon from "./moon.png"
import styled from "styled-components"

const ToggleTheme = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => (
        <ToggleContainer>
          <Small>Dark Mode</Small>
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              )
            }}
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

const Small = styled.small`
  font-size: 12px;
  vertical-align: top;
  margin-right: 15px;
`
const ToggleContainer = styled.div`
  margin: 20px 20px 0px 20px;
`
