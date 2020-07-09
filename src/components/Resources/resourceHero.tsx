import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { deviceMax, deviceMin, H2, H3, P } from "../Primitives"

interface Props {
  color: string
  title: string
  subTitle: string
  image: any
}

const ResourceHero = (props: Props) => {
  return (
    <HeroWrap>
      <Image alt={"Waiter"} fluid={props.image} />
      <Overlay
        style={{
          backgroundColor: props.color
        }}
      />
      <ResourceInfo>
        <Title
          style={{
            color:
              props.title == "Entrepreneurs" ? "#fff" : "hsla(0, 0%, 0%, 1)"
          }}
        >
          {props.title}
        </Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </ResourceInfo>
    </HeroWrap>
  )
}

export default ResourceHero

const HeroWrap = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 500px;
  position: relative;
  text-align: center;
  object-fit: cover;
  background-position: center center;
`
const Image = styled(Img)`
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #efefef;
`

const Overlay = styled.div`
  z-index: 100;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`
const ResourceInfo = styled.div`
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: transparent !important;
  z-index: 100;
`
const Title = styled.h1`
  margin-top: 50px;

  @media ${deviceMin.mobileS} {
    text-align: center;
  }
`
const SubTitle = styled.p`
  @media ${deviceMin.mobileS} {
    text-align: center;
  }
`
