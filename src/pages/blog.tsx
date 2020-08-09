import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import meta from "../../content/data/meta.json"
import HeroImage from "../components/Blog/HeroImage"
import BlogPost from "../components/Blog/BlogPost"

const BlogPage = ({ data }: any) => {
  return (
    <Layout>
      <SEO
        title={meta.blog.title}
        description={meta.blog.description}
        pathName={meta.blog.path}
        image=""
        staticImage={true}
      />

      <HeroImage />
      <Content>
        <Posts>
          {data.allMarkdownRemark.edges.map((post: any) => (
            <BlogPost
              key={post.node.frontmatter?.slug}
              author={post.node.frontmatter?.author}
              title={post.node.frontmatter?.title}
              slug={`/${post.node.frontmatter?.slug}`}
              description={post.node?.excerpt}
              thumbnailBlog={
                post.node.frontmatter.thumbnailBlog.childImageSharp.fluid.src
              }
              tags={post.node.frontmatter.tags}
              timeToRead={post.node.timeToRead}
              date={post.node.frontmatter.date}
            />
          ))}
        </Posts>
      </Content>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPageQuery {
    allDataJson {
      nodes {
        blog {
          title
          description
        }
      }
    }
    blogMeta: file(name: { regex: "/Our Blog/" }) {
      childImageSharp {
        fixed(width: 1200, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            author
            title
            slug
            tags
            thumbnailBlog {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    tags: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  max-width: 1440px;
`

const Content = styled.div`
  margin-bottom: 10rem;
`
