import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { TagPill, GreenButton } from "../../components/Primitives"

interface Props extends PageProps {
  data: any
}

const ResourceView = (props: Props) => {
  const {
    data,
    location: { pathname }
  } = props
  const post = data.markdownRemark
  const excerpt = post.excerpt
  const slug = post.fields.slug
  const frontmatter = post.frontmatter
  const html = post.html
  const finalarray: any = []

  //   data.markdownRemark.frontmatter.tags.map((tag1: any) => {
  //     data.allMarkdownRemark.edges.map((tag2: any) => {
  //       tag1 == tag2.node.frontmatter.tags ? finalarray.push(tag1) : ""
  //     })
  //   })

  return (
    <Layout>
      <>
        <SEO
          title={frontmatter.title}
          pathName={pathname}
          description={frontmatter.description || excerpt}
          staticImage={true}
          keywords={frontmatter.keywords}
        />

        <Container className="container">
          <h1>{post.frontmatter.title}</h1>
          {data.markdownRemark.frontmatter.tags.map((tag: any) => {
            return <TagPill key={tag}>#{tag}</TagPill>
          })}
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <SimilarContentWrap>
            <H2>You also might like</H2>
            {data.allMarkdownRemark.edges.map((content: any) => {
              return (
                <SimilarContent key={content.node.id}>
                  <h2>{content.node.frontmatter.title}</h2>
                  <br />
                  <p>{content.node.excerpt}</p>
                  <GreenButton to={content.node.frontmatter.slug}>
                    Read More
                  </GreenButton>
                </SimilarContent>
              )
            })}
          </SimilarContentWrap>
        </Container>
      </>
    </Layout>
  )
}

export default ResourceView

export const pageQuery = graphql`
  query ResourceBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        keywords
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { fileAbsolutePath: { regex: "/content/resources/" } }
    ) {
      edges {
        node {
          frontmatter {
            tags
            slug
            title
          }
          excerpt(format: PLAIN)
          id
        }
      }
    }
  }
`

const Content = styled.div`
  font-family: "Domine", serif;
  line-height: 30px;
  margin: 47px 0 23px;

  p {
    margin: 0 0 16px;
    font-family: "Domine", serif;
  }

  ol,
  ul {
    list-style: inside circle;
  }

  li ul {
    list-style: inside circle;
  }
  .title {
    margin: 0 0 44px;
  }
`

const Container = styled.div`
  position: relative;
  width: 95%;
  margin: 100px auto 0;

  @media only screen and (min-width: 33.75em) {
    width: 80%;
  }
  @media only screen and (min-width: 60em) {
    width: 60%;
    max-width: 1440px;
  }
`
const SimilarContentWrap = styled.div`
  width: 100%;
  /* box-shadow: var(--boxShadow); */
  margin: 100px auto;
`
const H2 = styled.h2`
  text-align: center;
  color: var(--softRed);
  margin-bottom: 50px;
`
const SimilarContent = styled.div`
  border-bottom: 1px solid var(--grey);
  padding-bottom: 40px;
  margin-bottom: 40px;
`
