import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import { Container, Resources } from "../../components/Primitives"
import meta from "../../../content/data/meta.json"
import ResourceCard from "../../components/Resources/resourceCard"
import ResourceHero from "../../components/Resources/resourceHero"
import ResourceLinks from "../../components/Resources/resourceLinks"

const EmployeedTemplate = ({ data, pageContext }: any) => {
  // const EmployeedTemplate = ({ props }: any) => {
  const keywords = data.allMarkdownRemark.edges.map((employee: any) => {
    return employee.node.frontmatter.keywords
  })
  // const { currentPage } = pageContext

  // const pageTitle = {`Employees (${currentPage})`}
  const pageTitle = "Employees"

  return (
    <Layout>
      <SEO
        pathName={meta.employed.path}
        title={meta.employed.title}
        keywords={keywords}
      />
      <ResourceHero
        color="RGBA(141, 211, 217, .8)"
        title={pageTitle}
        subTitle="Read, learn, & stay informed."
        image='url("images/waiter.png")'
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
              html={post.node.html}
              source={post.node.frontmatter.source}
            />
          ))}
        </Resources>

        <ul>
          {Array.from({ length: pageContext.employeeNumPages }).map(
            (item, i) => {
              const index = i + 1
              const link = index === 1 ? "/employee" : `/employee/${index}`

              // if there isn't more than one page, hide the pagination
              if (index > 1) {
                return (
                  <li key={index}>
                    {pageContext.currentPage === index ? (
                      <span>{index}</span>
                    ) : (
                      <a href={link}>{index}</a>
                    )}
                  </li>
                )
              }
            }
          )}
        </ul>
      </Container>
    </Layout>
  )
}

export default EmployeedTemplate

export const EmployeedTemplateQuery = graphql`
  query EmployeedTemplateQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/resources/employed/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          timeToRead
          html
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
