import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Resources } from "../components/Primitives"
import meta from "../../content/data/meta.json"
import styled from "styled-components"
import ResourceCard from "../components/Resources/resourceCard"
import ResourceHero from "../components/Resources/resourceHero"
import ResourceLinks from "../components/Resources/resourceLinks"

const Entrepreneur = ({ data }: any) => {
  const pageTitle = "Job Seekers"

  return (
    <Layout>
      <SEO pathName={meta.employed.path} title={meta.employed.title} />
      <ResourceHero
        color="RGBA(255, 204, 204, 0.8)"
        title={pageTitle}
        subTitle="Read, learn, & stay informed."
        image='url("images/laptop.png")'
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
      </Container>
    </Layout>
  )
}

export default Entrepreneur

export const JobSeekerQuery = graphql`
  query JobSeekerQuery($skip: Int!, $limit: Int!) {
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
          frontmatter {
            author
            slug
            title
            tags
            date
            source
          }
          internal {
            content
          }
        }
      }
    }
  }
`
