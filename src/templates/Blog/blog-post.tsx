import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

interface Props extends PageProps {
  data: any
}

const BlogPost = (props: Props) => {
  const {
    data,
    location: { pathname }
  } = props
  const post = data.markdownRemark
  const excerpt = post.excerpt
  const slug = post.fields.slug
  const frontmatter = post.frontmatter
  const html = post.html

  return (
    <Layout>
      <>
        <SEO
          title={frontmatter.title}
          pathName={pathname}
          image={frontmatter.thumbnailBlog.childImageSharp.fixed.src}
          description={frontmatter.description || excerpt}
          staticImage={true}
          keywords={frontmatter.keywords}
        />

        <Header>
          <Container>
            <H1>{post.frontmatter.title}</H1>

            <Date>{frontmatter.date}</Date>
            <Image
              alt="Blog post cover "
              fluid={frontmatter.thumbnailBlog.childImageSharp.fluid}
            />
          </Container>
        </Header>

        <Container className="container">
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        thumbnailBlog {
          childImageSharp {
            fixed(width: 1200, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Image = styled(Img)`
  box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
`

const H1 = styled.h1`
  padding: 0 0 15px 0;
  line-height: 54px;
`

const Header = styled.div`
  text-align: center;
  padding: 1rem 0 2rem 0;
  position: relative;
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
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 33.75em) {
    width: 80%;
  }
  @media only screen and (min-width: 60em) {
    width: 60%;
    max-width: 1440px;
  }
`
const Date = styled.p`
  margin-bottom: 50px;
`

const ShareArea = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  border-top: 1px solid var(--textSecondary);
`
