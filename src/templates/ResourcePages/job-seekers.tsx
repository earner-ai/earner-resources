import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import { Container, Resources } from "../../components/Primitives"
import meta from "../../../content/data/meta.json"
import ResourceCard from "../../components/Resources/resourceCard"
import ResourceHero from "../../components/Resources/resourceHero"
import ResourceLinks from "../../components/Resources/resourceLinks"

const JobSeekerTemplate = ({ data }: any) => {
  const pageTitle = "Job Seekers"
  const keywords = data.allMarkdownRemark.edges.map((jobSeeker: any) => {
    return jobSeeker.node.frontmatter.keywords
  })

  return (
    <Layout>
      <SEO
        pathName={meta.employed.path}
        title={meta.employed.title}
        keywords={keywords}
      />
      <ResourceHero
        color="RGBA(255, 204, 204, 0.8)"
        title={pageTitle}
        subTitle="Read, learn, & stay informed."
        image={data?.file.childImageSharp.fluid}
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

export default JobSeekerTemplate

export const JobSeekerTemplateQuery = graphql`
  query JobSeekerTemplateQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/resources/job-seekers/" } }
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
    file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
