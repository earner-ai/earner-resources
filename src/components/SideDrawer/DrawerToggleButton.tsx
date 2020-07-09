import React from "react"
import styled from "styled-components"

interface DrawerProps {
  toggleMenu: Function
}

const DrawerToggleButton = (props: DrawerProps) => {
  const handleClick = () => {
    props.toggleMenu()
  }

  return (
    <ToggleButton onClick={handleClick}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ToggleButton>
  )
}

export default DrawerToggleButton

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  margin-left: auto;
  margin-top: 15px;
`

const ToggleButtonLine = styled.div`
  width: 30px;
  height: 5px;
  background-color: var(--softRed);
  border-radius: 1px;
`
