import React from "react"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import { deviceMax } from "../Primitives"

interface Props {
  avatar: any
  author: string
  description: string
}

const AuthorCard = (props: Props) => {
  return (
    <AuthorContainer>
      <Container>
        <Avatar
          alt={props.author ?? "Author"}
          fluid={props.avatar.fluid as FluidObject}
        />
        <RightSide>
          <WrittenBy>WRITTEN BY</WrittenBy>
          <Author>{props.author}</Author>
          <Description>{props.description}</Description>
        </RightSide>
      </Container>
    </AuthorContainer>
  )
}

export default AuthorCard

const Container = styled.div`
  background-color: var(--bg);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s ease-in-out all;
  min-height: 3rem;

  &:hover {
    box-shadow: var(--shadow);
    background-color: var(--secondaryBg);
  }
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

const Avatar = styled(Image)`
  width: 80px;
  min-width: 80px;
  height: 80px;
  border-radius: 50%;
`
const AuthorContainer = styled.div`
  width: 60%;
  margin: 0px auto 50px auto;
  padding: 10px;
  box-shadow: var(--boxShadow);
  border-radius: 16px;

  @media ${deviceMax.tablet} {
    width: 100%;
    margin-top: 40px;
  }
`
const Author = styled.p`
  font-weight: bold;
  color: var(--green);
  margin-bottom: 0px;
`
const WrittenBy = styled.small`
  font-size: 12px;
  color: var(--darkGrey);
`
const Description = styled.p``
