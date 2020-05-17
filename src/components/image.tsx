import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

interface Props {
  alt: string
  path: any
}

const Image = (props: Props) => {
  return props.alt == "Newsletter Image" ? (
    <NewsLetterImage
      key={props.alt}
      fluid={props.path ? props.path : ""}
      alt={props.alt}
    />
  ) : (
    <Images
      key={props.alt}
      fluid={props.path ? props.path : ""}
      alt={props.alt}
    />
  )
}

export default Image

const NewsLetterImage = styled(Img)`
  position: initial !important;
`
const Images = styled(Img)`
  z-index: 200;
`
