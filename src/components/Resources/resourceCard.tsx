import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { deviceMax, deviceMin, H2, H3, P } from "../Primitives"

interface Props {
  title: string
  content: string
  key: string
  tags: any
  html: string
  source: string
}

const ResourceCard = (props: Props) => {
  return (
    <Card>
      {/* <Title>{props.title}</Title> */}

      {/* <Content
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      /> */}
      <Content dangerouslySetInnerHTML={{ __html: props.html }} />
      <Category>
        <b>Category: &nbsp; </b>
        {props.tags.map((tag: any) => {
          return <>{tag} </>
        })}
      </Category>
      <br />
      <Source>
        <b>Source: &nbsp; </b>
        {props.source}
      </Source>
    </Card>
  )
}

export default ResourceCard

const Card = styled.div`
  box-sizing: border-box;
  text-decoration: none;
  margin-bottom: 50px;
  padding: 0 20px;

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

const Content = styled.p`
  margin-bottom: 30px;

  /* @media ${deviceMin.mobileS} {
    text-align: justify;
  } */
`
// const Title = styled.h2`
//   @media ${deviceMin.mobileS} {
//     text-align: center;
//   }
// `
const Category = styled.small`
  margin-bottom: 15px;
`

const Source = styled.small`
  margin-bottom: 15px;
`
