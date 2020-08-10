import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { deviceMin, TagBlog, H3, P } from "../Primitives"

interface Props {
  title: string
  slug: string
  author: string
  description: string
  thumbnailBlog: any
  tags: string[]
  timeToRead: string
  date: string
}

const BlogPost = (props: Props) => {
  const mainTag = props.tags[0]

  return (
    <Card to={props.slug}>
      <ImageContainer>
        <img alt="Blog post cover " src={props.thumbnailBlog} />
      </ImageContainer>
      <TagContainer>
        <TagBlog>{mainTag}</TagBlog>
      </TagContainer>

      <Title>{props.title}</Title>
      <small>
        {props.date} - {props.timeToRead} min read
      </small>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: props.description
        }}
      />
    </Card>
  )
}

export default BlogPost

const Card = styled(Link)`
  padding: 1rem;
  box-sizing: border-box;
  text-decoration: none;

  @media ${deviceMin.mobileL} {
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

const Image = styled.img``

const Excerpt = styled(P)`
  line-height: 22px;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
  margin-bottom: 30px;
  -webkit-transition: -webkit-transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
  -webkit-transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
`

const TagContainer = styled.div``

const Title = styled(H3)`
  color: var(--darkBlue);
  margin-bottom: 15px;
`
