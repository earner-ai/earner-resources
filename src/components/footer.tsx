import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, deviceMin, deviceMax } from "../components/Primitives"
import Header from "./header"
import "./layout.css"
import "../../static/styles/styles.scss"
import GitHubSocial from "../../static/Icons/GitHubSocial"
import TwitterSocial from "../../static/Icons/TwitterSocial"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        {/* <Card></Card> */}
        <Card>
          <Logo to="/">
            <h3>earner</h3>
          </Logo>
        </Card>
        <Card></Card>
        <Card>
          <h4>Follow Us</h4>
          <a href="https://github.com/Earner-ai/">
            <GitHubSocial />
          </a>

          <a href="https://twitter.com/earner_ai">
            <TwitterSocial />
          </a>
        </Card>
      </Column>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled(Container)`
  padding: 20px;
  background-color: var(--grey);
  max-width: none;

  svg {
    margin-right: 20px;
    fill: var(--green);
    box-shadow: var(--boxShadow);
    border-radius: 50%;
    transition: all 0.25s linear;

    &:hover {
      box-shadow: var(--boxShadowHover);
      transform: var(--transform);
    }
  }

  @media ${deviceMax.mobileL} {
    width: 100%;
    text-align: center;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  max-width: 1440px;
`
const Card = styled.div`
  box-sizing: border-box;
  text-decoration: none;
  margin-bottom: 50px;
  padding: 0 20px;
  justify-content: space-between;

  @media ${deviceMin.mobileS} {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media ${deviceMin.tablet} {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media ${deviceMin.laptop} {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`
const Logo = styled(Link)`
  color: var(--text);
  text-transform: none;
`
