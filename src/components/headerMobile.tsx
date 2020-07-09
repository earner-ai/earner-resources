import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"

interface Props {
  toggleMenu: Function
}

const MobileHeader = (props: Props) => {
  const toggleMenu = () => {
    props.toggleMenu()
  }

  return (
    <HeaderWrap>
      <div className={"container"}>
        <TopMenu>
          <div className={"logo"}>
            <Logo to="/" title={"Earner"}>
              <H2>earner</H2>
            </Logo>
          </div>
          <DrawerToggleButton toggleMenu={toggleMenu} />
        </TopMenu>
      </div>
    </HeaderWrap>
  )
}

export default MobileHeader

const HeaderWrap = styled.header`
  width: 100%;
  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const TopMenu = styled.div`
  display: inline-flex;
  width: 100%;
`
const LogoWrap = styled.div`
  display: inline-block;
`
const Logo = styled(Link)`
  text-decoration: none;
  color: var(--darkBlue);
  vertical-align: sub;
`
const H2 = styled.h2`
  text-transform: none;
  /* margin-left: 10px; */
  margin-top: 10px;
  font-size: 26px;
  font-size: 30px;
  /* margin-left: 30px; */
`
