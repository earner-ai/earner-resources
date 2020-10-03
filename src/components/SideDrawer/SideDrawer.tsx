import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTransition, animated } from "react-spring"
import { links } from "../Links"
import { deviceMin } from "../../components/Primitives"
import { Icon } from "../../components/Icons"
import Toggle from "../Darkmode/Toggle"

interface Props {
  showMenu: boolean
  toggleMenu: Function
}

const SideDrawerNew = (props: Props) => {
  const handleClick = () => {
    props.toggleMenu()
  }

  const transitions = useTransition(props.showMenu, null, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" }
  })

  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <SideDrawerWrap key={key} style={props}>
            <CloseIcon onClick={handleClick}>
              <Icon
                name="closeX"
                height="30px"
                width="30px"
                stroke="#000"
                fill="#000"
                viewBox="0 0 100 125"
              />
            </CloseIcon>

            <Logo>
              <Link to="/" title={"earner"}>
                <H2>earner</H2>
              </Link>
            </Logo>
            <Ul>
              {links.map((link: any, index: any) => (
                <Li key={index}>
                  <ClickLink
                    onClick={handleClick}
                    to={`/${link.path}`}
                    title={link.title}
                  >
                    {link.title}
                  </ClickLink>
                </Li>
              ))}
              <Li>
                <Toggle />
              </Li>
            </Ul>
          </SideDrawerWrap>
        ) : null
      )}
    </>
  )
}

export default SideDrawerNew

const SideDrawerWrap = styled(animated.nav)`
  background-color: var(--bg);
  height: 100%;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 400px;
  z-index: 30;
  overflow: hidden;
`

const ClickLink = styled(Link)`
  color: var(--darkGrey);
  text-decoration: none;

  &.active {
    border-left: 4px solid #4a5aef;
    color: #4a5aef;
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 50px;
`

const Li = styled.li`
  margin-top: 1.3rem;
  color: var(--darkGrey);
`
const Logo = styled.div`
  width: max-content;
  margin: 50px auto 0px;

  img {
    width: 5rem;
    @media ${deviceMin.mobileS} {
      width: 5rem;
    }
  }
`
const CloseIcon = styled.div`
  float: right;
  margin-top: 15px;
`
const H2 = styled.h2`
  text-transform: none;
  color: var(--darkBlue);
`
