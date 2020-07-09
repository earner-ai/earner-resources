// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"
// import { Container, H2, UL, LI } from "./Primitives"
// import styled from "styled-components"
// import { links } from "./Links"
// import SideMenu from "../components/SideMenu/SideMenu"

// const Header = ({ siteTitle }: any) => (
//   <HeaderWrap>
//     <HeaderContainer>
//       <H2>
//         <Logo to="/">{siteTitle}</Logo>
//       </H2>
//       <UL>
//         {links.map((item: any, index: any) => (
//           <NavLink key={index} to={`/${item.path}`}>
//             {item.title}
//           </NavLink>
//         ))}
//       </UL>
//       <SideMenu />
//     </HeaderContainer>
//   </HeaderWrap>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string
// }

// Header.defaultProps = {
//   siteTitle: ``
// }

// export default Header

// const HeaderContainer = styled(Container)`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-between;

//   @media only screen and (max-width: 768) {
//     display: none;
//   }
// `
// const Logo = styled(Link)`
//   text-decoration: none;
//   color: var(--darkBlue);
//   vertical-align: sub;
// `
// const NavLI = styled(LI)`
//   border-bottom: 5px solid transparent;
//   margin-bottom: 10px;
//   padding-bottom: 10px;
//   &:hover {
//     border-bottom: 5px solid var(--green);
//   }
// `
// const NavLink = styled(Link)`
//   color: var(--darkBlue);
//   text-decoration: none;
//   margin: 0 15px;

//   border-bottom: 5px solid transparent;
//   padding-bottom: 10px;
//   &:hover {
//     border-bottom: 5px solid var(--green);
//   }
// `
// const HeaderWrap = styled.header`
//   display: none;

//   @media only screen and (min-width: 769px) {
//     display: block;
//   }
// `

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { deviceMin } from "../components/Primitives"
// import { Auth } from "aws-amplify"
import { navigate } from "@reach/router"
import SideMenu from "../components/SideMenu/SideMenu"
import { links } from "./Links"

// const signOut = () => {
//   Auth.signOut()
//     .then(function() {
//       navigate("/me/login")
//     })
//     ["catch"](function(err) {
//       console.error(err)
//     })
// }

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrap>
        <Link to="/" title={"Nyxo"}>
          <H3>
            <Logo to="/">earner</Logo>
          </H3>
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
const H3 = styled.h3`
  text-transform: lowercase;
`
