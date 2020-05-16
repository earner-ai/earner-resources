import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import { Container, Resources } from "../../components/Primitives"
import meta from "../../../content/data/meta.json"
import ResourceCard from "../../components/Resources/resourceCard"
import ResourceHero from "../../components/Resources/resourceHero"
import ResourceLinks from "../../components/Resources/resourceLinks"

const Entrepreneurs = ({ data }: any) => {
  const pageTitle = "Entrepreneurs"
  const keywords = data.allMarkdownRemark.edges.map((entrepreneur: any) => {
    return entrepreneur.node.frontmatter.keywords
  })
  return (
    <Layout>
      <SEO
        pathName={meta.employed.path}
        title={meta.employed.title}
        keywords={keywords}
      />
      <ResourceHero
        color="RGBA(2, 38, 64, .8)"
        title={pageTitle}
        subTitle="Read, learn, & stay informed."
        image='url("images/books.png")'
      />

      <Container>
        <ResourceLinks title={pageTitle} />

        <Resources>
          {data.allMarkdownRemark.edges.map((post: any) => (
            <ResourceCard
              key={post.node.id}
              title={post.node.frontmatter.title}
              content={post.node.internal.content}
              tags={post.node.frontmatter.tags}
              html={post.node.excerpt}
              source={post.node.frontmatter.source}
              slug={post.node.frontmatter.slug}
            />
          ))}
        </Resources>
      </Container>
    </Layout>
  )
}

export default Entrepreneurs

export const EntrepreneurQuery = graphql`
  query EntrepreneurQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/resources/entrepreneurs/" }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          timeToRead
          html
          excerpt(pruneLength: 400)
          frontmatter {
            author
            slug
            title
            tags
            date
            source
            keywords
          }
          internal {
            content
          }
        }
      }
    }
  }
`
