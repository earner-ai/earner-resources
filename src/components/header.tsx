import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, H2, UL, LI } from "./Primitives"
import styled from "styled-components"

const Header = ({ siteTitle }: any) => (
  <header>
    <HeaderContainer>
      <H2>
        <Logo to="/">{siteTitle}</Logo>
      </H2>
      <UL>
        <NavLI>
          <NavLink to={`/employee`}>For Employees</NavLink>
        </NavLI>
        <NavLI>
          <NavLink to={`/job-seekers`}>For Job Seekers</NavLink>
        </NavLI>
        <NavLI>
          <NavLink to={`/entrepreneurs`}>For Entrepreneurs</NavLink>
        </NavLI>
        <NavLI>
          <NavLink to="/blog">Blog</NavLink>
        </NavLI>
      </UL>
    </HeaderContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

const HeaderContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled(Link)`
  text-decoration: none;
  color: var(--darkBlue);
  vertical-align: sub;
`
const NavLI = styled(LI)`
  border-bottom: 5px solid transparent;
  margin-bottom: 10px;
  padding-bottom: 10px;
  &:hover {
    border-bottom: 5px solid var(--green);
  }
`
const NavLink = styled(Link)`
  color: var(--darkBlue);
  text-decoration: none;
  margin-bottom: 10px;
`
