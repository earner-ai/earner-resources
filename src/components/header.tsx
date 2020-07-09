import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { deviceMin } from "../components/Primitives"
// import { Auth } from "aws-amplify"
import { navigate } from "@reach/router"
import SideMenu from "../components/SideMenu/SideMenu"
import { links } from "./Links"

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrap>
        <Link to="/" title={"Nyxo"}>
          <H2>
            <Logo to="/">earner</Logo>
          </H2>
        </Link>
      </LogoWrap>

      <Links>
        {links.map((item: any, index: any) => (
          <Li key={index}>
            <MenuLink to={`/${item.path}`}>{item.title}</MenuLink>
          </Li>
        ))}
      </Links>
      <SideMenu />
    </HeaderContainer>
  )
}

export default Header

const LogoWrap = styled.div`
  margin-top: 15px;

  img {
    width: 5rem;
    @media ${deviceMin.mobileS} {
      width: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const HeaderContainer = styled.header`
  display: flex;
  /* align-items: center; */
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--bg);
  padding: 1rem 2rem;
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0rem 1rem;
  margin: 20px 20px 0px 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Li = styled.li`
  list-style: none;

  &:hover {
    border-bottom: 5px solid var(--green);
  }

  @media ${deviceMin.mobileS} {
    font-size: 0.9rem;
  }

  @media ${deviceMin.tablet} {
    font-size: 1rem;
    margin-left: 1.5rem;
  }
`

const MenuLink = styled(Link)`
  transition: 0.2s opacity cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    opacity: 0.8;
  }
  color: var(--radiantBlue);

  font-family: var(--semibold);
  &:hover,
  &:active {
    color: var(--radiantBlue);
    border-bottom: 3px solid var(--radiantBlue);
    padding-bottom: 10px;
  }
`
const Logo = styled(Link)`
  text-decoration: none;
  color: var(--darkBlue);
  vertical-align: sub;
`
const H2 = styled.h2`
  text-transform: lowercase;
`
